# 01_08 Add files to the root directory

With a server configuration in place, add some content to your website.

- Change to the root user and `cd` to the `/root` directory.
```
sudo su -
cd /root
```

- Clone the exercise files to the server. 

_Note that the command shown in the video and the command below are slightly different.  The command below is the correct command to use.[^1]_

```
git clone https://github.com/LinkedInLearning/learning-nginx-2492317.git
```

- Un-tar the archive into the NGINX root directory
```
tar xvf ~/learning-nginx-2492317/Binaryville_robot_website_LIL_107684.tgz --directory /var/www/binaryville/
```

- Confirm the files have been placed in the correct location
```
ls -ltr /var/www/binaryville/
```

- Open a browser and view the IP address or DNS name for your server

- Confirm the Binaryville website has been loaded

[^1]: While the course was being developed, the repo was private.  This required access using SSH keys that allowed permission to clone the repo.  So the `git clone` command you see in the video is the author accessing the repo using SSH with a key.  Once the course is released, the repo is made public and everyone can clone the repo over HTTPS using the URL for the repo. So while the video may reflect access using `git clone git@github.com...` please use the HTTPS method, that is: `git clone https://github.com...`.
