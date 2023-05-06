FROM node:18.16.0-slim

WORKDIR /usr/src/app/frontend

COPY yarn.lock ./
COPY package.json ./
RUN yarn install --frozen-lockfile

EXPOSE 5173

CMD ["yarn", "dev"]