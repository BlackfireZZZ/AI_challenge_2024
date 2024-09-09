FROM python:3.12.1-alpine3.19

WORKDIR /app

COPY backend/requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .