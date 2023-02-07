FROM node:18

WORKDIR /app

COPY . /app

RUN npm install

COPY ./wait-for-it.sh /usr/local
RUN chmod +x /usr/local/wait-for-it.sh

RUN npx prisma generate
RUN npx prisma db push
RUN npm run build

EXPOSE 3000

CMD npm start