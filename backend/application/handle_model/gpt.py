import requests
import pandas as pd
from tqdm import tqdm


def get_prompt(case_text):
    prompt = f'''Ты - модель для aspect based sentiment analisys. Тебе нужно проанализировать тональность отзыва по 5 аспектам: теория, практика, преподаватель технологии, актуальность. Вот отзыв на интернет курс:
{case_text}
Для отзыва найти, упоминаются ли там заданные аспекты, и если упоминаются, то с какой тональностью автор отзыва о них рассказывает. Учти, что каждый аспект нужно оценивать индивидуально и общая тональность отзыва не имеет значения. Если отзыв не содержит явных упоминаний аспекта, то его рассматривать не стоит.
Вот описания всех аспектов, принимай свои решения, исходя из следующих определений:
1. Практика (ниже представлены критерии, который указывают на то, что в отзыве присутствует аспект Практика):
- Информация про задания на данном курсе, оценка практических заданий (качества, сложности и пользы для закрепления теории).
- Применение знаний, возможность применения теории на практике. Были ли кейсы, проекты или симуляции, которые позволили студентам применить полученные знания?
- Обратная связь по практике: Как преподаватель комментировал выполненные задания? Насколько конструктивной была обратная связь?
- Взаимодействие с другими студентами: Возможности для групповой работы и обмена опытом. Как это повлияло на усвоение материала?
2. Теория (ниже представлены критерии, который указывают на то, что в отзыве присутствует аспект Теория):
- к аспекту теории относится только информация по определенной области, на которую направлен курс
- Информация про теорию, информацию, полученную на курсе: качество учебных материалов, глубину теоретических концепций.
- Насколько логично и последовательно была представлена теоретическая информация. Были ли четкие переходы между темами?
- Примеры и иллюстрации: Использовались ли примеры для объяснения теоретических понятий? Насколько они были уместны и понятны?
- Обратная связь: Как преподаватель реагировал на вопросы студентов по теоретическим аспектам? Были ли даны дополнительные разъяснения?
3. Преподаватель (ниже представлены критерии, который указывают на то, что в отзыве присутствует аспект Преподаватель):
- Квалификация: Оценка профессионализма и опыта преподавателя в данной области. Насколько он был компетентен?
- Стиль преподавания: Как преподаватель взаимодействовал со студентами? Был ли он доступен для вопросов и обсуждений?
- Мотивация и вовлеченность: Насколько преподаватель был увлечен темой и как это влияло на студентов?
- Обратная связь: Как преподаватель реагировал на отзывы студентов и учитывал их пожелания?
- Слова-подсказки: препод, лектор, учитель, автор, спикер
- Любое упоминание имени или фамилии это скорее всего упоминание преподавателя
4. Технологии (ниже представлены критерии, который указывают на то, что в отзыве присутствует аспект Технологии):
- Насколько хорошо функционировал курс с технической точки зрения
- Информация про технологии, использованные в курсе, пользовательский опыт
- Оценка используемой платформы для обучения (например, Stepik, Zoom, Moodle и т.д.). Насколько она была удобной и функциональной?
- Использование технологий (видео, интерактивные элементы, онлайн-тесты и т.д.) для улучшения процесса обучения. Были ли они эффективными и удобными в использовании?
- Доступность материалов: Легкость доступа к учебным материалам и записям лекций. Были ли они доступны в удобное время?
- Технические проблемы: Оценка наличия технических проблем во время курса и как они были решены.
5. Актуальность знаний (ниже представлены критерии, который указывают на то, что в отзыве присутствует аспект Актуальность):
- Насколько информация и навыки, полученные в ходе обучения, соответствуют современным требованиям и тенденциям в определенной области
- Как курс соотносится с текущими событиями или изменениями в индустрии?
- Были ли включены актуальные примеры и исследования?
- Актуальность отличается от теории, Теория сосредоточена на знаниях и концепциях, тогда как актуальность — на применении и значимости этих знаний в современном контексте. Теория оценивается по критериям глубины и структуры, актуальность — по критерию соответствию времени.
- Учти, что если в отзыве не упоминается про современность или устралеость информации, то аспект актуальности не должен рассматриваться

Для каждой тональности надо ответить в следующей форме, также для каждого аспекта подробно объясни, на основе каких пунктов из описания аспектов ты приняла решение:
1. если аспект не упоминается в отзыве, поставь 0;
2. если аспект упоминается в отзыве с отрицательной тональностью, поставь 1
3. если аспект упоминается в отзыве с нейтральной или спорной (одновременно положительной и отрицательной) тональностью, поставь 2
4. если аспект упоминается в отзыве с положительной тональностью, поставь 3
В конце своего ответа укажи результат отзыва в числовой форме: 5 цифр, соответсвующих оценке тональности каждого аспекта отзыва. Обозначай ответы модели как X X X X X, где X - число для оценки тональности аспекта.'''
    return prompt


class GPTModel:
    """
    Main gpt model
    """
    def __init__(self, api_key, model="gpt-4o"):
        self.api_key = api_key
        self.model = model
        self.headers = {
            "Authorization": f"Bearer {self.api_key}",
            "Content-Type": "application/json"
        }
        self.fixed_context = [
            {"role": "system", "content": "Ты модель, которая анализирует отзывы и оценивает их по нескольким аспектам: Практика, Теория, Преподаватель, Технологии, Актуальность."},
            {"role": "system", "content": "Каждому аспекту нужно присвоить одну из оценок: 0 (не упоминается), 1 (негативная тональность), 2 (нейтральная тональность), 3 (позитивная тональность)."}
        ]

    def send_request(self, user_message):
        """
        Send user message to model
        """

        data = {
            "model": self.model,
            "temperature": 0.0,
            "messages": [
                {
                    "role": "user",
                    "content": user_message
                }
            ]
        }

        response = requests.post('https://gptunnel.ru/v1/chat/completions', headers=self.headers, json=data)
        if response.status_code == 200:
            return response.json()
        else:
            response.raise_for_status()

    def generate_text(self, user_message):
        """
        Gets user message and returns model answer
        """
        return self.send_request(user_message)["choices"][0]["message"]["content"]

    def mark_review(self, case):
        """
        Gets review, generate a request and returns model answer
        """
        return self.generate_text(get_prompt(case))


model = GPTModel('shds-lXOuMge8wfspO7LsHQldzwNthey')


def gpt_main(r):
    answer = model.mark_review(r).split('\n')[-1].replace("*", "").rstrip('.')
    temp = "".join(x for x in answer if x.isdigit())
    if len(temp) != 5:
        temp = "00000"
    return list(map(int, list(temp)))

