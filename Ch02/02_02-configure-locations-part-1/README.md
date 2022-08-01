# 02_02 Configure locations

Location directives allow the NGINX configuration to be extended based on the URI, or uniform resource indicator, that makes up the request being processed by the server.

[NGINX documentation for the location directive](http://nginx.org/en/docs/http/ngx_http_core_module.html#location)

Location directives are formatted as blocks and are defined inside server blocks.  They can also be nested inside other location blocks.

```nginx
server {
    ...
    location [modifier] location_definition {
        ...
        location [modifier] location_definition {
            ...
        }
    }
}
```

When we define a location, we use the location keyword, an optional modifier, and a required location definition.

Inside the location block, we can include other directives.

Specifically, we can include just about any directive that can be defined inside a server block.

This makes locations very useful since we can configure NGINX to process different requests in ways similar to server blocks without having to create additional servers.

The location directive uses modifiers, prefix strings, and regular expressions.

| Modifier | Application to location definitions                                      |
|----------|--------------------------------------------------------------------------|
| None     | The location definition is interpreted as a prefix for the URI           |
| =        | The URI must be an exact match to the location definition                |
|~         | The location definition is used as a case sensitive regular expression   |
|~*        | The location definition is used as a case insensitive regular expression |
|^~        | If the longest prefix matches, then no regular expressions are checked   |

When Nginx processes locations, it uses a series of matches to determine the best location to use:
1. Exact match locations are considered first.
1. Then locations with prefixes.
1. Then locations with regular expressions.

