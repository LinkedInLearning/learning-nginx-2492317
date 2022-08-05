# 04_07 Configure NGINX to use an SSL certificate

An SSL certificate is a digital certificate that authenticates a website's identity and helps encrypt the connection between a browser and a web server.

## Create a Self-Signed SSL Certificate
1. Check for the `openssl` command on your system

    ```BASH
    which openssl
    ```

2. Install `openssl` if needed

    ```BASH
    sudo apt install -y openssl
    ```

3. Use the following command to:
    - Create a private key
    - Create a certificate
    - Sign the certificate with the key

    ```
    openssl req -batch -x509 -nodes -days 365 -newkey rsa:2048 \
        -keyout /etc/ssl/private/nginx.key \
        -out /etc/ssl/certs/nginx.crt
    ```

## Redirecting non-SSL requests
Use a server block to redirect all requests to the HTTPS server.

```NGINX
server {
        listen 80;
        return 301 https://$server_addr$request_uri;
}
```

Check the documentation for more information on NGINX variables.

[Alphabetical index of variables](http://nginx.org/en/docs/varindex.html)

## Configuring SSL
The HTTPS server block should be configured to listen on port 443.  This is the standard port used to serve encrypted traffic.

Following the Port is the directive `ssl`.  This tells NGINX to process requests using SSL.

The next two lines let NGINX know where to find the SSL certificate and the certificate key to use for encryption and identification.


```NGINX
server {
    listen 443 ssl default_server;
    ssl_certificate /etc/ssl/certs/nginx.crt;
    ssl_certificate_key /etc/ssl/private/nginx.key;
    ...
}
```

[binaryville.conf](./binaryville.conf)
