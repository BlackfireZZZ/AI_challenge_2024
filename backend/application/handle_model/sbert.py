import nltk
nltk.download('punkt')
import pymorphy3
from nltk.tokenize import word_tokenize
import torch
from torch.utils.data import DataLoader, Dataset


def main(test, model, tokenizer, device):
    aspects = ["practice", "theory", "tech", "relevance", "teacher"]
    test_dataset = TextDataset(test, None, tokenizer, max_len=128)
    test_dataloader = DataLoader(test_dataset, batch_size=1)
    pred = predict_on_test(model, test_dataloader, device)
    outp = {aspects[i]: int(pred[0][i]) for i in range(5)}
    return outp


def normalize_text(text):
    morph = pymorphy3.MorphAnalyzer()
    words = word_tokenize(text.lower())
    normalized_words = [morph.parse(word)[0].normal_form for word in words if word.isalpha()]
    return normalized_words


class TextDataset(Dataset):
    def __init__(self, texts, labels, tokenizer, max_len):
        self.texts = texts
        self.labels = labels
        self.tokenizer = tokenizer
        self.max_len = max_len

    def __len__(self):
        return len(self.texts)

    def __getitem__(self, idx):
        text = self.texts[idx]

        encoding = self.tokenizer.encode_plus(
            text,
            max_length=self.max_len,
            add_special_tokens=True,
            padding='max_length',
            truncation=True,
            return_attention_mask=True,
            return_tensors='pt'
        )

        item = {
            'input_ids': encoding['input_ids'].flatten(),
            'attention_mask': encoding['attention_mask'].flatten(),
        }

        if self.labels is not None:
            item['labels'] = torch.tensor(self.labels[idx], dtype=torch.float)

        return item


def predict_on_test(model, dataloader, device, threshold=0.5):
    model = model.eval()
    all_preds = []

    with torch.no_grad():
        for batch in dataloader:
            input_ids = batch['input_ids'].to(device)
            attention_mask = batch['attention_mask'].to(device)

            outputs = model(input_ids, attention_mask=attention_mask)
            preds = torch.sigmoid(outputs.logits)
            preds = (preds > threshold).int()

            all_preds.extend(preds.cpu().numpy())

    return all_preds
