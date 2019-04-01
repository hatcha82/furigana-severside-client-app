FROM node:10.15.3-alpine

ENV NODE_ENV=production
ENV HOST=127.0.0.1
ENV PORT=3000
ENV API_URL=http://www.furiganahub.com:8080
ENV API_URL_BROWSER=http://www.furiganahub.com:8080
# Expose the app port
EXPOSE 3000
RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install 
RUN npm run build
CMD ["npm", "start"]