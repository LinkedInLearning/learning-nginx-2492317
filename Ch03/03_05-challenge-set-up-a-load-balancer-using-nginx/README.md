# 03_05 Challenge: Set up a load balancer using NGINX

Deploy a load balancer using NGINX.

## Requirements

1. Remove the default NGINX configuration
1. Add the following configuration file below to the correct location on the server.

    [load_balancer.conf](./load_balancer.conf)

    ```NGINX
    # Balance requests across three servers in a group named "uuid"
    # Use the same IP address for each server: 127.0.0.1
    # Use a different port for each server: 9001, 9002, and 9003

    server {
        listen 80;

        # Add a location directive here to serve requests from "/uuid"
        # Inside the location, connect to the group named "uuid"
    }
    ```
1. Add a group named `uuid` that alternates traffic across three ports: `9001`, `9002`, and `9003`.
1. Add a location for `/uuid` that proxies requests from the group named `uuid`.
1. Start the UUID generator using the provided Python script: [uuid-generator.py](./uuid-generator.py)
    ```BASH
    python3 ./uuid-generator.py
    ```
1. Test your NGINX configuration in a browser using the address for your VM.
1. Confirm that responses from the server show each port from the group in sequence along with a UUID.



