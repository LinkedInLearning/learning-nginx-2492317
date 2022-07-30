#!/usr/bin/env python3
'''Module: Starts three HTTP servers'''
import os
import time
from http.server import BaseHTTPRequestHandler, HTTPServer
from pprint import pprint

hostName = "localhost"

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        #print(self.server)
        #print(self.headers)
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.end_headers()
        self.wfile.write(bytes("""
        <!DOCTYPE html>
        <html>
            <head>
                <style> h1 {
                            font-size:100px;
                            text-align:center;
                            margin-left:auto;
                            margin-right:auto
                           }
                        p {
                            font-size:20px;
                            text-align:center;
                          }
                </style>
                <title>%s</title>
            </head>
        <body>""" % self.headers['Host'] , "utf-8"))
        self.wfile.write(bytes("<h1>{}</h1>".format(self.request.getsockname()[1]), "utf-8"))
        self.wfile.write(bytes("<h1>{}</h1>".format(time.strftime('%X')), "utf-8"))
        self.wfile.write(bytes("</body></html>", "utf-8"))

def start_server(port):
    this_server = HTTPServer((hostName, port), MyServer)
    print(time.strftime('%X'), "App server started - http://%s:%s" % (hostName, port))

    try:
        this_server.serve_forever()
    except KeyboardInterrupt:
        pass

    this_server.server_close()
    print(time.strftime('%X'), "App server stopped - http://%s:%s" % (hostName, port))

# list of the ports the servers will listen on
PORTS = [7001, 7002, 7003]

# list to hold the PIDs from the forked servers
SERVERS = []

# start a fork for each port
for port in PORTS:
    pid = os.fork()

    if pid:
        SERVERS.append(pid)
    else:
        start_server(port)
        exit(0)

# wait for the servers to finish, bailing out on CTRL+C
for server in SERVERS:
    try:
        os.waitpid(server, 0)
    except KeyboardInterrupt:
        exit(0)
