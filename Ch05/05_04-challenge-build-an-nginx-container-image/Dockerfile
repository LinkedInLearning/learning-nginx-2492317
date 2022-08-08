FROM nginx:latest

RUN apt update
RUN apt install -y python3
RUN apt install -y apache2-utils 
RUN htpasswd -b -c /etc/nginx/passwords robots 123456
RUN openssl req -batch -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/nginx.key \
    -out /etc/ssl/certs/nginx.crt

COPY ./scripts/start_app_servers.py /usr/local/bin/start_app_servers.py
COPY ./scripts/wrapper.sh /docker-entrypoint.d/wrapper.sh

COPY ./config/binaryville.conf /etc/nginx/conf.d/default.conf

COPY ./website/ /usr/share/nginx/html
 