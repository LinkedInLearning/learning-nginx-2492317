# 02_04 Configure logs

Nginx uses log files to record various operational details. These logs are useful for monitoring normal operations and tracking down issues if a problem occurs.

Access logs record details like the time a request took place; if the request was served successfully or failed; and details like the client's IP address and browser type.

Error logs record things like errors in the NGINX configuration; the time the service stopped or started; and any errors the service encounters while it's running.

The default logging configuration is in the main configuration file, nginx.conf, in the http block.

```NGINX
/etc/nginx/nginx.conf

http {
	...
	access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;
	...
}
```

This file has two directives: access log, and error log.

If nginx is set up to serve multiple sites, all the requests, for all the sites will be written to the same logs.  This can become an issue if, for example, you need to find the access logs for one specific site.


[binaryville.conf](./binaryville.conf)

```NGINX
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
}
```
