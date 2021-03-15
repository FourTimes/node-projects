# from node docker images
FROM node:alpine as node
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build --prod

#  multi-stage
# FROM freedomain:v3
FROM nginx
COPY --from=node    /app/build /usr/share/nginx/html
# COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
# COPY --from=node    /app/dist/[app-name]/usr/share/nginx/html