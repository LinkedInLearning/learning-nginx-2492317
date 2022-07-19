# 01_08 Add files to the root directory

With a server configuration in place, add some content to your website.

- Change to the root user and `cd` to the `/root` directory.
```
sudo su -
cd /root
```

- Clone the exercise files to the server
```
git clone git@github.com:LinkedInLearning/learning-nginx-2492317.git
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

# Troubleshooting

