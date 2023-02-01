FROM nginx
LABEL version="1.0.0" description="Container Nginx e MERN app"

WORKDIR /app

COPY ./start.sh /start.sh
COPY ./app /app


RUN chmod u+r+x /start.sh 
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get install -y nodejs
RUN npm install

COPY ./default.conf /etc/nginx/conf.d/default.conf

ENV PORT=4000

EXPOSE 80
CMD ["/start.sh"]

# FROM node:18-alpine

# WORKDIR /usr/app
# COPY package.json package-lock.json ./

# RUN npm install

# COPY . . 

# CMD ["npm", "start"]
