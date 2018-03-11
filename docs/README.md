# Security Header Optimization Documentation
 
This documentation belongs to the WordPress plugin [Security Header Optimization](https://wordpress.org/plugins/security-header-optimization/).

**The plugin is in beta. Please submit your feedback on the [Github forum](https://github.com/o10n-x/wordpress-security-header-optimization/issues).**

Advanced security header optimization toolkit. Content-Security-Policy, Strict Transport Security (HSTS), Public-Key-Pins (HPKP), X-XSS-Protection and CORS.

Additional features can be requested on the [Github forum](https://github.com/o10n-x/wordpress-security-header-optimization/issues).

## Getting started

1. [Content-Security-Policy](#content-security-policy)

# Content-Security-Policy

Getting started? Read [this article](https://developers.google.com/web/fundamentals/security/csp/) about Content Security Policy by Google and [this extensive guide](https://www.smashingmagazine.com/2016/09/content-security-policy-your-future-best-friend/) by Smashing Magazine. Test your security header configuration at [securityheaders.io](https://securityheaders.io/).

The CSP configuration of the plugin is based on a JSON object containing CSP directives.

Mozilla [reports](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Security-Policy) the availability of the following directives:

`child-src` Defines the valid sources for web workers and nested browsing contexts loaded using elements such as `<frame>` and `<iframe>`. Instead of child-src, authors who wish to regulate nested browsing contexts and workers should use the frame-src and worker-src directives, respectively.

`connect-src` Restricts the URLs which can be loaded using script interfaces

`default-src` Serves as a fallback for the other fetch directives.

`font-src` Specifies valid sources for fonts loaded using @font-face.

`frame-src` Specifies valid sources for nested browsing contexts loading using elements such as <frame> and <iframe>.

`img-src` Specifies valid sources of images and favicons.

`manifest-src` Specifies valid sources of application manifest files.

`media-src` Specifies valid sources for loading media using the <audio> , <video> and <track> elements.

`object-src` Specifies valid sources for the <object>, <embed>, and <applet> elements.

`script-src` Specifies valid sources for JavaScript.

`style-src` Specifies valid sources for stylesheets.

`worker-src` Specifies valid sources for Worker, SharedWorker, or ServiceWorker scripts.

#### Document directives

Document directives govern the properties of a document or worker environment to which a policy applies.

`base-uri` Restricts the URLs which can be used in a document's <base> element.

`plugin-types` Restricts the set of plugins that can be embedded into a document by limiting the types of resources which can be loaded.

`sandbox` Enables a sandbox for the requested resource similar to the <iframe> sandbox attribute.

#### Navigation directives

Navigation directives govern to which location a user can navigate to or submit a form to, for example.

`form-action` Restricts the URLs which can be used as the target of a form submissions from a given context.

`frame-ancestors` Specifies valid parents that may embed a page using 

#### Example Content Security Policy Configuration

```json
{
    "default-src": ["uri1","uri2"],
    "base-uri": ["uri1","uri2"],
    "child-src": ["uri1","uri2"],
    "font-src": ["uri1","uri2"],
    "block-all-mixed-content": true,
    "plugin-types": ["mime/type"],
    "sandbox": [
        "allow-forms",
        "allow-modals",
        "allow-orientation-lock",
        "allow-pointer-lock",
        "allow-popups",
        "allow-popups-to-escape-sandbox",
        "allow-presentation",
        "allow-same-origin",
        "allow-scripts",
        "allow-top-navigation"
    ],
    "report-to": "https://report-uri.com",
    "report-uri": "https://report-uri.com",
    "require-sri-for": ["script", "style"],
    "upgrade-insecure-requests": true
}
```

<details/>
  <summary>JSON schema for CSP config</summary>

```json
{
	"directives": {
        "title": "Content Security Policy directives",
        "type": "object",
        "properties": {
            "base-uri": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "block-all-mixed-content": {
                "type": "boolean"
            },
            "child-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "connect-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "default-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "font-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "form-action": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "frame-ancestors": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "frame-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "img-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "manifest-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "media-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "object-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "script-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "style-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "prefetch-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            },
            "plugin-types": {
                "title": "Directives mime type configuration",
                "type": "array",
                "items": {
                    "type": "string",
                    "pattern": "^[a-z0-9][^/]+/[^/]+$"
                },
                "uniqueItems": true
            },
            "sandbox": {
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": [
                        "allow-forms",
                        "allow-modals",
                        "allow-orientation-lock",
                        "allow-pointer-lock",
                        "allow-popups",
                        "allow-popups-to-escape-sandbox",
                        "allow-presentation",
                        "allow-same-origin",
                        "allow-scripts",
                        "allow-top-navigation"
                    ]
                }
            },
            "report-to": {
                "type": "string",
                "format": "uri",
                "minLength": 1
            },
            "report-uri": {
                "type": "string",
                "format": "uri",
                "minLength": 1
            },
            "require-sri-for": {
                "type": "array",
                "items": {
                    "type": "string",
                    "enum": ["script", "style"]
                }
            },
            "upgrade-insecure-requests": {
                "type": "boolean"
            },
            "worker-src": {
                "title": "Directives configuration",
                "type": "array",
                "items": {
                    "type": "string"
                },
                "uniqueItems": true
            }
        },
        "additionalProperties": false
    }
}
```
</details>

---
