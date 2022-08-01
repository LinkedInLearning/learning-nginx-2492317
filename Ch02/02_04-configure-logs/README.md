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

