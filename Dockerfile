FROM node:18 AS builder
RUN mkdir /application
WORKDIR /application
COPY package.json package.json
COPY package-lock.json package-lock.json
RUN npm i -f
ADD . ./
RUN ls
RUN npm run build
RUN npm run generate
RUN ls
FROM nginx:latest AS nginx
COPY --from=builder /application/.output/public /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]