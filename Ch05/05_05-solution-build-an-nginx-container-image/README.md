# 05_05 Solution: Build an NGINX container image

Build a container for the Binaryville website.

_*NOTE: To keep the size of the repo as small as possible, please use the files from [the challenge directory](../05_04-challenge-build-an-nginx-container-image/README.md) for the solution.  The solution commands are the same as the commands for the challenge requirements.*_

## Solution

1. Clone the exercise files to your local system

    ```BASH
    git clone https://github.com/LinkedInLearning/learning-nginx-2492317.git
    cd learning-nginx-2492317/Ch05/05_04-challenge-build-an-nginx-container-image
    ```

    - Take a look at the `Dockerfile` to review the `FROM`, `RUN`, and `COPY` commands.

1. Build an image with the `docker build` command

    ```BASH
    docker build --tag binaryville .
    ```

1. Run the image with the `docker run` command, using port `443` on your local system and the container.

    ```BASH
    docker run --publish 443:443 binaryville
    ```

1. Browse the site to find familiar locations.  _Note that you will have to use a browser that allows excpetions for self-signed certificates like [Firefox](https://www.mozilla.org/en-US/firefox/new/)_.
    - [ ] [https://localhost/](https://localhost/)
    - [ ] [https://localhost/images/](https://localhost/images/)
    - [ ] [https://localhost/missing](https://localhost/missing)
    - [ ] [https://localhost/500](https://localhost/500)
    - [ ] [https://localhost/proxy](//localhost/proxy)
    - [ ] [https://localhost/roundrobin](https://localhost/roundrobin)
    - [ ] [https://localhost/leastconn](https://localhost/leastconn)
    - [ ] [https://localhost/iphash](https://localhost/iphash)
    - [ ] [https://localhost/weighted](https://localhost/weighted)
    - [ ] [https://localhost/private](https://localhost/private) _Username `robots`, password `123456`_


