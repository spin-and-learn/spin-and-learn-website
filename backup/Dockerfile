FROM mongo
WORKDIR /app

RUN apt update
RUN apt install software-properties-common -y

RUN apt update
RUN apt install pip -y


COPY ./requirements.txt .
RUN pip install -r requirements.txt

COPY . .

EXPOSE 5000