FROM nvidia/cuda:11.8.0-base-ubuntu20.04

# Set environment variables
ENV DEBIAN_FRONTEND=noninteractive

# Add repository for Python 3.11
RUN apt-get update && \
    apt-get install -y software-properties-common && \
    add-apt-repository ppa:deadsnakes/ppa && \
    apt-get update

# Install system dependencies and Python 3.11
RUN apt-get install -y \
        git \
        wget \
        build-essential \
        libssl-dev \
        zlib1g-dev \
        libncurses5-dev \
        libnss3-dev \
        libreadline-dev \
        libffi-dev \
        python3.11 \
        python3.11-dev \
        python3.11-venv \
        python3-opencv \
        libglib2.0-0 && \
    ln -sf /usr/bin/python3.11 /usr/bin/python3 && \
    wget https://bootstrap.pypa.io/get-pip.py && \
    python3.11 get-pip.py && \
    python3 -m pip install --upgrade pip

# Устанавливаем зависимости из requirements.txt
COPY backend/requirements.txt requirements.txt
RUN pip install -r requirements.txt

RUN pip install torch torchvision torchaudio -f https://download.pytorch.org/whl/cu111/torch_stable.html


# Копируем код в контейнер
COPY . .
WORKDIR /backend


CMD ["python3", "app.py"]