# 05_02 Create an NGINX container image

## Install Docker Desktop
To get started with Docker, you’ll need to have it installed on your local system.  You’ll find installers for popular operating systems at [docker.com/get-started](https://www.docker.com/get-started/). Download and install the version you need and then open a terminal to work with the docker command line interface.

## Docker commands
The main commands we'll be using are:

- `docker run ...`: Use a container image to run a command
- `docker build ...`: Build a container image from a Dockerfile specification

## `docker run`
```BASH
docker run --publish 80:80 nginx
                     ^  ^  ^
Local port ──────────┘  │  │
                        │  │
Container port  ────────┘  │
                           │
Container image name ──────┘
```

1. Start an nginx container

    ```BASH
    docker run --publish 80:80 nginx
    ```

2. Open a browser to [http://localhost](http://localhost)
