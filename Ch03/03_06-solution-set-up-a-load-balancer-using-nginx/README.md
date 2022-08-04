# 03_06 Solution: Set up a load balancer using NGINX

Deploy a load balancer using NGINX.

## Solution

1. Remove the default NGINX configuration.
    1. Conect to your Ubuntu VM and install NGINX
    1. Remove the default configuration with `unlink /etc/nginx/sites-enabled/default`.
1. Add the configuration file to the correct location on the server.

    ```
    mv load_balancer.conf /etc/nginx/conf.d
    ```

1. Add a group named `uuid` that alternates traffic across three ports: `9001`, `9002`, and `9003`.

    ```NGINX
    upstream uuid {
        server 127.0.0.1:9001;
        server 127.0.0.1:9002;
        server 127.0.0.1:9003;
    }
    ```

1. Add a location for `/uuid` that proxies requests from the group named `uuid`.

    ```NGINX
    location /uuid {
        proxy_pass http://uuid/;
    }
    ```

1. Start the UUID generator using the provided Python script: [uuid-generator.py](./uuid-generator.py)

    ```Bash
    # Note that you will need to run this command from
    # the directory containing the exercise files for this challange
    python3 ./uuid-generator.py
    ```

1. Test your NGINX configuration in a browser using the address for your VM.
1. Confirm that responses from the server show each port from the group in sequence along with a UUID.  Output should be simliar to the following:

    ```Bash
    # First request
    Generator #9001
    UUID=c7d2b4b8-815b-4710-8e50-d864bd443651

    # Second request
    Generator #9002
    UUID=f96c4706-fae7-4e8b-af36-8861f3b60641

    # Third request
    Generator #9003
    UUID=8b5adf27-eac6-4d04-bd0c-afdb8e5bde2f
    ```

## Final Configuration

[load_balancer.conf](./load_balancer.conf)

```NGINX
# Balance requests across three servers in a group named "uuid"
# Use the same IP address for each server: 127.0.0.1
# Use a different port for each server: 9001, 9002, and 9003
upstream uuid {
    server 127.0.0.1:9001;
    server 127.0.0.1:9002;
    server 127.0.0.1:9003;
}

server {
    listen 80;

    # Add a location directive here to serve requests from "/uuid"
    # Inside the location, connect to the group named "uuid"
    location /uuid {
        proxy_pass http://uuid/;
    }
}
```
