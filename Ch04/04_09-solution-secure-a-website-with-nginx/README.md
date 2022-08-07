# 04_09 Solution: Secure a website with NGINX

Secure a website using NGINX.

## Requirements

1. Install NGINX and remove the default configuration
    ```BASH
    # connect to the server then run...
    sudo su -
    apt update
    apt install -y nginx
    unlink /etc/nginx/sites-enabled/default
    ```
1. Add a location for `/preview`.
    ```
    vim /etc/nginx/conf.d/preview.conf
    ```
1. Configure basic authentication for the `/preview` location
1. Allow access to the `/preview` location with user named `CEO` with password `qwerty`.
1. Validate the configuration by browsing to the site and using the credentials.
