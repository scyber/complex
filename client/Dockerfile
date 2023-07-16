# production

FROM node:19-alpine as builder

WORKDIR '/usr/app'

COPY package.json  .

COPY . .

RUN npm run build

FROM nginx

EXPOSE 80

COPY --from=builder /usr/app/build /usr/share/nginx/html
