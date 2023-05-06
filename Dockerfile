FROM node:18.16.0

WORKDIR /usr/src

COPY yarn.lock ./
COPY package.json ./
RUN yarn install --frozen-lockfile

EXPOSE 5173

CMD ["yarn", "dev"]