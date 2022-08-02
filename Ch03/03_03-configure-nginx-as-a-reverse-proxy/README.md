# 03_03 Configure NGINX as a Reverse Proxy

The upstream module is one of the key components used to configure NGINX for proxying and load balancing.

You can find more information on the `upstream` and `proxy_pass` directives in the documentation on nginx.org.

[`upstream` directive in ngx_http_upstream_module](https://nginx.org/en/docs/http/ngx_http_upstream_module.html#upstream)

[`Proxy_pass` directive in ngx_http_proxy_module](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass)

[binaryville.conf](./binaryville.conf)

```NGINX
upstream app_server_7001 {
    server 127.0.0.1:7001;
}

server {
    listen 80;
    root /var/www/binaryville;

    server_name binaryville.local www.binaryville.local;
    index index.html index.htm index.php;

    access_log /var/log/nginx/binaryville.local.access.log;
    error_log /var/log/nginx/binaryville.local.error.log;

    location / {
        # First attempt to serve a request as file, then
        # as directory, then fall back to displaying a 404.
        try_files $uri $uri/ =404;
    }

    location /images {
        # Allow the contents of the /image folder to be listed
        autoindex on;

        access_log /var/log/nginx/binaryville.local.images.access.log;
        error_log /var/log/nginx/binaryville.local.images.error.log;
    }

    # specify the page to serve for 404 errors
    error_page 404 /404.html;

    # an exact match location for the 404 page
    location = /404.html {
        # only use this location for internal requests
        internal;
    }

    # specify the page to serve for 500 errors
    error_page 500 502 503 504 /50x.html;

    # an exact match location for the 50x page
    location = /50x.html {
        # only use this location for internal requests
        internal;
    }

    # a location to demonstrate 500 errors
    location /500 {
        fastcgi_pass unix:/this/will/fail;
    }

    # a location to proxy requests to the upstream named 'app_server_7001'
    location /proxy {
        # Trailing slash is key!
        proxy_pass http://app_server_7001/;

        # Logging for access to the proxy
        access_log /var/log/nginx/binaryville.local.proxy.access.log;
        error_log /var/log/nginx/binaryville.local.proxy.error.log;
    }
}
```
