# 04_04 Configure Password Authentication

Usernames and passwords are an important part of limiting access and keeping things secure online.

NGINX provides the  HTTP Auth Basic module to configure a simple username and password prompt to protect parts of our website.

This module uses the `auth_basic` and `auth_basic_user_file` directives.

[Module ngx_http_auth_basic_module](http://nginx.org/en/docs/http/ngx_http_auth_basic_module.html)

Password authentication:
- Can be used in the http, server, and location contexts
- `auth_basic` prompts for a password or disables authentication with the keyword `off`
- `auth_basic_user_file` specifies the file containing credentials

    File format
    ```
    username:encrypted_password
    ```

Use the `htpasswd` program to create a password file
- Install the `apache2-utils` package to access `htpasswd`

    ```BASH
    sudo apt install -y apache2-utils
    ```

- Create a password file

    ```BASH
    htpasswd -c /path/to/file username
    ```

# Example configuration

```NGINX
location /admin {
 	auth_basic 'Please authenticate...';
  	auth_basic_user_file /etc/nginx/passwords;
 	...
}
```
