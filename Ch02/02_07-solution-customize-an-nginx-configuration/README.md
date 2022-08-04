# 02_07 Solution: Customize an NGINX Configuration

Deploy an NGINX server with a custom configuration.

## Solution
1. Remove the default NGINX configuration.  Connect to the server where a fresh installation of NGINX is in place. Run the following commands:
    ```
    sudo su -
    cd /etc/nginx/sites-enabled
    unlink default
    ```
1. Add the provided configuration file to the server as `/etc/nginx/conf.d/complete.conf`:

    [complete.conf](./complete.conf)
    ```
    server {
        listen 80 default_server;
        listen [::]:80;

        ________ADD_THE_CUSTOM_LOCATION_HERE________ {

            # The `access_log` directive tells NGINX where to write logs for the
            # context containing the directive.
            # Check out the following URL for more details:
            # http://nginx.org/en/docs/http/ngx_http_log_module.html#access_log
            access_log ________ADD_THE_CUSTOM_LOG_FILE_HERE________;

            # The `return` directive tells NGINX to stop processing and return
            # the specified code along with an optional response.
            # Check out the following URL for more details:
            # http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return
            return 200 '{"Message": "Your request is complete."}\n';

            # The `default_type` directive helps NGINX tell clients
            # how to interpret the content of a response.
            # Check out the following URL for more details:
            # http://nginx.org/en/docs/http/ngx_http_core_module.html#default_type
            default_type text/json;
        }
    }
    ```
1. Update the confguration to include a location for `/complete` that is only served on exact matches.
    1. Replace `________ADD_THE_CUSTOM_LOCATION_HERE________` with `location = /complete`.
1. Update the location to use custom logging to a file named `complete.access.log` in the default logging locaiton for NGINX.
    1. Replace `________ADD_THE_CUSTOM_LOG_FILE_HERE________` with `/var/log/nginx/complete.access.log`.
1. Validate the custom location by browsing to the DNS for your server using the route `/complete`.  For example, `http://example.com/complete`.
1. Validate the custom logging by viewing the contents of the log file in `/var/log/nginx/`.

The complete configuration is as follows:

[solution.complete.conf](./solution.complete.conf)

```nginx
server {
    listen 80 default_server;
    listen [::]:80;

    location = /complete {

        # The `access_log` directive tells NGINX where to write logs for the
        # context containing the directive.
        # Check out the following URL for more details:
        # http://nginx.org/en/docs/http/ngx_http_log_module.html#access_log
        access_log /var/log/nginx/complete.access.log;

        # The `return` directive tells NGINX to stop processing and return
        # the specified code along with an optional response.
        # Check out the following URL for more details:
        # http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#return
        return 200 '{"Message": "Your request is complete."}\n';

        # The `default_type` directive helps NGINX tell clients
        # how to interpret the content of a response.
        # Check out the following URL for more details:
        # http://nginx.org/en/docs/http/ngx_http_core_module.html#default_type
        default_type text/json;
    }
}
```
