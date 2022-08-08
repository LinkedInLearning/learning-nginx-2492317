# Use the latest NGINX image as the base
FROM nginx:latest

# Because the base image uses the Ubuntu operating system,
# `apt` commands can be used to install applications.  But
# the package references need to be updated first.
RUN apt update

# Install Python3
RUN apt install -y python3

# Install the Apache2 Utilities
RUN apt install -y apache2-utils

# Use htpasswd to create a password file with credentials
# for a user named "robots" with the password "123456"
RUN htpasswd -b -c /etc/nginx/passwords robots 123456

# Use openssl to create an encryption key and a self-signed SSL certificate
RUN openssl req -batch -x509 -nodes -days 365 -newkey rsa:2048 \
    -keyout /etc/ssl/private/nginx.key \
    -out /etc/ssl/certs/nginx.crt

# Copy the app server script into the container image
COPY ./scripts/start_app_servers.py /usr/local/bin/start_app_servers.py

# Copy a wrapper script into the entrypoint location for the NGINX image.
# The wrapper script starts the app servers in a way that allows the
# NGINX process to start properly
COPY ./scripts/wrapper.sh /docker-entrypoint.d/wrapper.sh

# Copy the binaryville NGINX configuration into the container as
# the default configuration.
COPY ./config/binaryville.conf /etc/nginx/conf.d/default.conf

# If you have problems using the SSL enabled configuraion, use the
# following configuration instead.
# Note that you will have to use `docker run --publish 80:80 binaryville` as well.
# COPY ./config/binaryville-no-ssl.conf /etc/nginx/conf.d/default.conf

# Copy the Binaryville website contents into the default root directory
COPY ./website/ /usr/share/nginx/html

