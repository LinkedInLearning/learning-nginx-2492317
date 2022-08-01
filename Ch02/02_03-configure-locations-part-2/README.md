# 02_03 Configure locations - Part 2

Update the configuration for the demo site by adding location directives for:
- the root of the site
- images
- error pages

# Directive documentation
- [`location`](http://nginx.org/en/docs/http/ngx_http_core_module.html#location)
- [`try_files`](http://nginx.org/en/docs/http/ngx_http_core_module.html#try_files)
- [`autoindex`](http://nginx.org/en/docs/http/ngx_http_autoindex_module.html#autoindex)
- [`error_page`](http://nginx.org/en/docs/http/ngx_http_core_module.html#error_page)
- [`internal`](http://nginx.org/en/docs/http/ngx_http_core_module.html#internal)

# Updated configuration

[binaryville.conf](./binaryville.conf)

```NGINX
server {
	listen 80;
	root /var/www/binaryville;

	location / {
        # First attempt to serve a request as file, then
        # as directory, then fall back to displaying a 404.
		try_files $uri $uri/ =404;
	}

	location /images {
        # Allow the contents of the /image folder to be listed
		autoindex on;
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
