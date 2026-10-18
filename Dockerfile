FROM node:20-alpine
WORKDIR /usr/src/app
COPY app/package*.json ./
RUN npm install --omit=dev
COPY app/ .
EXPOSE 3000
USER node
CMD ["npm", "start"]
