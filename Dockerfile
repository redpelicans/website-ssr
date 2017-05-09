FROM node:latest

RUN apt-get update && apt-get install -y git vim-tiny

RUN npm cache clear

WORKDIR /opt
RUN git clone https://github.com/redpelicans/website-ssr.git website \
&& cd website \
&& yarn \
&& yarn bundle:build \
&& yarn server:dist

EXPOSE 80
WORKDIR /opt/website 
ENV NODE_ENV production
ENV PORT 80
#ENV DEBUG main:*
CMD yarn:start
