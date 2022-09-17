# 00_04 Set up a Lab Server

To get the most out of this course, you’ll need access to a server where you can experiment with NGINX.

## _*Don't use a production server*_

Its reccommended to use a non-production, virtual machine hosted on a public cloud service running the [Ubuntu operating system](https://ubuntu.com/).

## Use a Free Cloud Service Account
Use the links below for more information on creating a free account on the following cloud services:

- [Amazon Web Services (AWS)](https://aws.amazon.com/free/)
- [Microsoft Azure](https://azure.microsoft.com/en-us/free/)
- [Google Cloud Platform (GCP)](https://cloud.google.com/free)

## Use Ubuntu Linux
The course material covers running NGINX on the [Ubuntu operating system](https://ubuntu.com/)

## Using Windows Subsystem for Linux (WSL) with this Course
You may choose to run NGINX on [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/) to follow along with this course.

Please note that the instructions provided in the course may differ from the steps you'll need to follow on WSL.

For example, reloading NGINX on a standard Ubuntu install would use the `systemctl` command as follows:

```BASH
systemctl reload nginx
```

On WSL, reloading NGINX would use the `service` command as follows:

```BASH
service nginx reload
```

Also, note that file paths and other configurations may differ between what is mentioned in the course and what is in place in your WSL installation.

## Using macOS with this Course
You may choose to run NGINX on [macOS](https://www.apple.com/macos) to follow along with this course.

Please note that the instructions provided in the course may differ from the steps you'll need to follow on macOS.

For example, reloading NGINX on a standard Ubuntu install would use the `systemctl` command as follows:

```BASH
systemctl reload nginx
```

On macOS, if you used [Homebrew](https://formulae.brew.sh/formula/nginx#default) to install NGINX, reloading NGINX would use the `service` command as follows:

```BASH
brew services reload nginx
```

Also, note that file paths and other configurations may differ between what is mentioned in the course and what is in place in your macOS installation.

