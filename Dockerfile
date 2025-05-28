FROM node:22-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn install --frozen-lockfile && yarn cache clean
COPY . .
EXPOSE 3000
RUN yarn build