# 01_06 Configure a virtual host Part 1

NGINX configurations are based on "server blocks" that use the server_name and listen directives to bind to tcp sockets.

[Documentation for `server` from `ngx_http_core_module`](http://nginx.org/en/docs/http/ngx_http_core_module.html#server)


# Basic server block configuration

[binaryville.conf](./binaryville.conf)

```NGINX
server {
    listen 80;
    root /var/www/binaryville;
}
```
