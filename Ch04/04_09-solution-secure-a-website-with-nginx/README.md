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

1. Add a new configuration for the preview site

    ```BASH
    vim /etc/nginx/conf.d/preview.conf
    ```

1. Configure basic authentication for the entire site

    [preview.conf](./preview.conf)

    ```NGINX
    server {
        listen 80 default_server;
        # ADD BASIC AUTH CONFIGURATION HERE
        auth_basic "Please authenticate...";
        auth_basic_user_file /etc/nginx/passwords;
    }
    ```

1. Allow  access with username “CEO” with password “qwerty”

    1. Install the `apache2-utils` package to provide access to the `htpasswd` program.

        ```BASH
        apt install -y apache2-utils
        ```

    1. Create an entry in `/etc/nginx/passwords` for the username `CEO` with password `qwerty`.

        ```BASH
        htpasswd -c /etc/nginx/passwords CEO
        ```

1. Validate the configuration with a browser
