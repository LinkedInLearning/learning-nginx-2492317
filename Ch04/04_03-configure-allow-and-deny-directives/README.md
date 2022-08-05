# 04_03 Configure allow and deny directives

Limiting access is one of the ways we can help secure the contents of a site.  Fortunately, nginx provides the HTTP Access module that includes `allow` and `deny` directives. These are used to limit who is allowed to see certain content and who gets denied.

In NGINX configurations, `allow` and `deny` rules:
- Can be used in the http, server, and location contexts
- Specify patterns to match incoming requests
    - The keyword `all`
    - An IP address: `192.168.1.1`
    - A CIDR block: `192.168.0.0/16`

[Module ngx_http_access_module](https://nginx.org/en/docs/http/ngx_http_access_module.html)

[Classless Inter-Domain Routing (CIDR) Notation](https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing)

# Example `allow` and `deny` rules

The following example will:
- Allow requests from the address 192.168.1.1
- Allow requests from all private IP addresses using CIDR notation
- Deny requests from all other addresses

```NGINX
location /admin {
	allow 192.168.1.1;
	allow 10.0.0.0/8;
	allow 172.16.0.0/12;
	allow 192.168.0.0/16;
	deny  all;
}
```

# Rule order
Rules are applied in the order they are defined.

`deny` rules should be placed after `allow` rules.

## Find IP
```
curl https://api.ipify.org
```

