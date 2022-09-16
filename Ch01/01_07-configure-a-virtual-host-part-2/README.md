# 01_07 Configure a virtual host Part 2

[binaryville.conf](./binaryville.conf)

```NGINX
server {
    listen 80;
    root /var/www/binaryville;
}
```

After the virtual host configuration is finished, the `binaryville.conf` should be as follows:

[binaryville.finished.conf](./binaryville.finished.conf)

```NGINX
server {
    listen 80 default_server;
    root /var/www/binaryville;

    server_name binaryville.local www.binaryville.local;
    index index.html index.htm index.php;
}
```
