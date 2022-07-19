# 01_02 Install NGINX on Ubuntu

You can use the cloud provider of your choice but, to follow along with the course, please use Ubuntu as your operating system.

If you need the steps to set up and connect to a server on AWS, there’s a previous lesson with all those details.

1. Connect to your server using `SSH`.
2. Switch to the root user
        sudo su -
3. Update the package information for the operating system.
        apt update
4. Install NGINX
        apt install nginx -y
5. Confirm NGINX is installed by checking the version.
        nginx -v
6. Checl the status of the NGINX service with the `systemctl` command.
        systemctl status nginx --no-pager


