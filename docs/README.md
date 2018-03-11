# Security Header Optimization Documentation
 
This documentation belongs to the WordPress plugin [Security Header Optimization](https://wordpress.org/plugins/security-header-optimization/).

**The plugin is in beta. Please submit your feedback on the [Github forum](https://github.com/o10n-x/wordpress-security-header-optimization/issues).**

Advanced security header optimization toolkit. Content-Security-Policy, Strict Transport Security (HSTS), Public-Key-Pins (HPKP), X-XSS-Protection and CORS.

Additional features can be requested on the [Github forum](https://github.com/o10n-x/wordpress-security-header-optimization/issues).

## Getting started

1. [Content-Security-Policy](#content-security-policy)

# Content-Security-Policy

Getting started? Read [this article](https://developers.google.com/web/fundamentals/security/csp/) about Content Security Policy by Google and [this extensive guide](https://www.smashingmagazine.com/2016/09/content-security-policy-your-future-best-friend/) by Smashing Magazine. Test your security header configuration at [securityheaders.io](https://securityheaders.io/).

The CSP configuration of the plugin is based on a JSON object containing the CSP directives.

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
    "report-to": "report-uri.com",
    "report-uri": "report-uri.com",
    "require-sri-for": ["script", "style"],
    "upgrade-insecure-requests": {
        "type": "boolean"
    },
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

**Note:** The plugin creates short CSS URLs by using a hash index. This means that the first concatenated stylesheet will have the filename `1.css`. The CDN option with CDN mask enables to load the stylesheets from `https://cdn.tld/1.css` resulting in the shortest URL possible.

When you use automated concatenation and the content of stylesheets change on each request, the hash index could grow to a big number. You can reset the hash index from the admin bar menu under `CSS Cache`. When you clear the CSS cache, the hash index is reset to 0.


# CSS Delivery Optimization

CSS delivery optimization enables asynchronous loading of stylesheets. The plugin provides in many options and unique innovations to achieve the best CSS loading performance.

**Note** You can enable debug modus by adding `define('O10N_DEBUG', true);` to wp-config.php. The browser console will show details about CSS loading and a [Performance API](https://developer.mozilla.org/nl/docs/Web/API/Performance) result for each step of the loading and rendering process.

## Async loading

The plugin provides an option to load stylesheets asynchronous using [loadCSS](https://github.com/filamentgroup/loadCSS) enhanced with Media Query support for responsive loading and an option to use `localStorage` cache for improved performance.

When using `rel="preload" as="style"` the stylesheets are always downloaded by the browser and the plugin will provide in a polyfill for browsers that do not support rel="preload". If you prefer to load stylesheets from localStorage, it may be best to not use rel="preload". When using debug modus, the Performance API result can provide an insight into what method provides the best loading performance for your website.

#### Async Load Config Filter

The async load config filter enables to fine tune async load configuration for individual stylesheets or concat groups.

![Async Load Config Filter](https://github.com/o10n-x/wordpress-css-optimization/blob/master/docs/images/async-load-config.png)

`match` is a string or regular expression to match a stylesheet URL.

`regex` is a boolean to enable regular expression based matching.

`async` is a boolean to enable or disable async loading for the matched stylesheet.

`media` is a string representing a Media Query to apply to the stylesheet.

`rel_preload` is a boolean to enable or disable `rel="preload" as="style"` based loading of the stylesheet.

`noscript` is a boolean to enable or disable a noscript fallback for the individual stylesheet.

`load_position` is a string with the two possible values `header` and `timing`. The option header will instantly start loading the stylesheet in the header (on javascript startup time) and timing will enable the `load_timing` option for further configuration.

`load_timing` is an object consisting of the required property `type` and optional timing method related properties. The following timing method types are currently available:

* `domReady`
* `requestIdleCallback`
	* `timeout` optionally, a timeout in milliseconds to force loading of the stylesheet.
	* `setTimeout` optionally, a time in milliseconds for a setTimeout fallback for browsers that do not support requestIdleCallback. 
* `requestAnimationFrame`
	* `frame` the frame target (default is frame 1)
* `inview`
	* `selector` the CSS selector of the element to watch.
	* `offset` an offset in pixels from the element to trigger loading of the stylesheet.
* `media`
	* `media` the Media Query to trigger loading of the stylesheet.

`render_timing` is an object consisting of the required property `type` and optional timing method related properties (see `load_timing`). 

Render timing differs from load timing as it only affects the actual rendering (painting) of a stylesheet in the browser and it enables to unrender stylesheets, making it possible to change the design interactively based on a timing method. For optimization it also enables to start downloading stylesheets on domReady while rendering them based on a timing method.

`localStorage` is a boolean or an object consisting of the properties `max_size`, `update_interval`, `expire` and `head_update`. The max_size property enables to restrict the cache to stylesheets with a size below a trheshold. The expire property enables to set a expire time in seconds. The update_interval enables to define a time in seconds to update the cache in the background (a Web Worker) and the head_update property is a boolean to define if a conditional HEAD request should be used to verify of stylesheet has been modified, to save bandwith.

#### Example Async Load Configuration

```json
[
  {
    "match": "/group-key-(x|y)/",
    "regex": true,
    "async": true,
    "media": "all",
    "noscript": true,
    "load_position": "timing",
    "load_timing": {
    	"type": "domReady"
	},
	"render_timing": {
		"type": "inview",
		"selector": "#footer"
	},
    "localStorage": {
      "max_size": 10000,
      "update_interval": 3600,
      "expire": 86400,
      "head_update": true
    }
  }
]
```

<details/>
  <summary>JSON schema for CSS Concat Group Filter config</summary>

```json
{
	"config": {
        "type": "array",
        "items": {
            "title": "Stylesheet filter configuration",
            "type": "object",
            "properties": {
                "match": {
                    "title": "A string or regular expression to match a stylesheet URL or group key.",
                    "type": "string",
                    "minLength": 1
                },
                "regex": {
                    "title": "Use regular expression match",
                    "type": "boolean",
                    "enum": [
                        true
                    ]
                },
                "media": {
                    "title": "Apply custom media query for responsive preloading.",
                    "type": "string",
                    "minLength": 1
                },
                "async": {
                    "title": "Load stylesheet async (include/exclude)",
                    "type": "boolean",
                    "default": true
                },
                "rel_preload": {
                    "title": "Load stylesheet using rel=preload",
                    "type": "boolean",
                    "default": false
                },
                "noscript": {
                    "title": "Add fallback stylesheets via <noscript>",
                    "type": "boolean",
                    "default": false
                },
                "load_position": {
                    "title": "Load position of CSS",
                    "type": "string",
                    "enum": ["header", "timing"],
                    "default": "header"
                },
                "load_timing": {
		            "title": "Timing configuration",
		            "oneOf": [{
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "domReady"
		                        ],
		                        "default": "domReady"
		                    }
		                },
		                "required": ["type"]
		            }, {
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "requestIdleCallback"
		                        ],
		                        "default": "requestIdleCallback"
		                    },
		                    "timeout": {
		                        "title": "Timeout to force execution.",
		                        "oneOf": [{
		                            "type": "string",
		                            "enum": [""]
		                        }, {
		                            "type": "number",
		                            "minimum": 1
		                        }]
		                    },
		                    "setTimeout": {
		                        "title": "setTimeout fallback for browsers that do not support requestIdleCallback (leave blank to disable async execution)",
		                        "oneOf": [{
		                            "type": "string",
		                            "enum": [""]
		                        }, {
		                            "type": "number",
		                            "minimum": 1
		                        }]
		                    }
		                },
		                "required": ["type"]
		            }, {
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "requestAnimationFrame"
		                        ],
		                        "default": "requestAnimationFrame"
		                    },
		                    "frame": {
		                        "title": "Frame number to start script execution.",
		                        "oneOf": [{
		                            "type": "string",
		                            "enum": [""]
		                        }, {
		                            "type": "number",
		                            "minimum": 1,
		                            "default": 1
		                        }]
		                    }
		                },
		                "required": ["type"]
		            }, {
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "inview"
		                        ],
		                        "default": "inview"
		                    },
		                    "selector": {
		                        "title": "CSS selector",
		                        "type": "string",
		                        "minLength": 1
		                    },
		                    "offset": {
		                        "title": "Offset in pixels from the edge of the element.",
		                        "oneOf": [{
		                            "type": "string",
		                            "enum": [""]
		                        }, {
		                            "type": "number"
		                        }]
		                    }
		                },
		                "required": ["type", "selector"]
		            }, {
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "media"
		                        ],
		                        "default": "media"
		                    },
		                    "media": {
		                        "title": "Media query",
		                        "type": "string",
		                        "minLength": 1
		                    }
		                },
		                "required": ["type", "media"]
		            }]
		        },
		        "render_timing": {
		            "title": "Timing configuration",
		            "oneOf": [{
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "domReady"
		                        ],
		                        "default": "domReady"
		                    }
		                },
		                "required": ["type"]
		            }, {
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "requestIdleCallback"
		                        ],
		                        "default": "requestIdleCallback"
		                    },
		                    "timeout": {
		                        "title": "Timeout to force execution.",
		                        "oneOf": [{
		                            "type": "string",
		                            "enum": [""]
		                        }, {
		                            "type": "number",
		                            "minimum": 1
		                        }]
		                    },
		                    "setTimeout": {
		                        "title": "setTimeout fallback for browsers that do not support requestIdleCallback (leave blank to disable async execution)",
		                        "oneOf": [{
		                            "type": "string",
		                            "enum": [""]
		                        }, {
		                            "type": "number",
		                            "minimum": 1
		                        }]
		                    }
		                },
		                "required": ["type"]
		            }, {
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "requestAnimationFrame"
		                        ],
		                        "default": "requestAnimationFrame"
		                    },
		                    "frame": {
		                        "title": "Frame number to start script execution.",
		                        "oneOf": [{
		                            "type": "string",
		                            "enum": [""]
		                        }, {
		                            "type": "number",
		                            "minimum": 1,
		                            "default": 1
		                        }]
		                    }
		                },
		                "required": ["type"]
		            }, {
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "inview"
		                        ],
		                        "default": "inview"
		                    },
		                    "selector": {
		                        "title": "CSS selector",
		                        "type": "string",
		                        "minLength": 1
		                    },
		                    "offset": {
		                        "title": "Offset in pixels from the edge of the element.",
		                        "oneOf": [{
		                            "type": "string",
		                            "enum": [""]
		                        }, {
		                            "type": "number"
		                        }]
		                    }
		                },
		                "required": ["type", "selector"]
		            }, {
		                "type": "object",
		                "properties": {
		                    "type": {
		                        "title": "Timing method",
		                        "type": "string",
		                        "enum": [
		                            "media"
		                        ],
		                        "default": "media"
		                    },
		                    "media": {
		                        "title": "Media query",
		                        "type": "string",
		                        "minLength": 1
		                    }
		                },
		                "required": ["type", "media"]
		            }]
		        },
                "localStorage": {
                    "title": "Override stylesheet cache configuration",
                    "oneOf": [{
                        "type": "boolean"
                    }, {
                        "type": "object",
                        "properties": {
                            "max_size": {
                                "title": "Maximum size of stylesheet to store in cache.",
                                "type": "number",
                                "minimum": 1
                            },
                            "update_interval": {
                                "title": "Interval to update the cache.",
                                "type": "number",
                                "minimum": 1
                            },
                            "expire": {
                                "title": "Expire time in seconds.",
                                "type": "number",
                                "minimum": 1
                            },
                            "head_update": {
                                "title": "Use HTTP HEAD request to update cache based on etag / last-modified headers.",
                                "type": "boolean",
                                "default": true
                            }
                        },
                        "anyOf": [{
                            "required": ["max_size"]
                        }, {
                            "required": ["update_interval"]
                        }, {
                            "required": ["expire"]
                        }, {
                            "required": ["head_update"]
                        }],
                        "additionalProperties": false
                    }]
                }
            },
            "required": ["match", "async"],
            "additionalProperties": false
        },
        "uniqueItems": true
    }
}
```
</details>

---


# Critical CSS / Above The Fold Optimization

The plugin provides advanced tools to optimize the above the fold display of a page. The admin menu bar provides access to a above the fold optimization editor that provides a split view, toggle view, Critical CSS editor and more.

![Critical CSS Editor](https://github.com/o10n-x/wordpress-css-optimization/blob/master/docs/images/critical-css-editor.png)

Critical CSS files are stored in the theme directory `/wp-content/theme/YOURTHEME/critical-css/...`. You can manage the critical stylesheets via FTP or via the editor provided by the plugin.

Each critical CSS stylesheet can be conditionally loaded. The conditional JSON is an array with 2 depth levels `[{condition},{condition}]` and `[[{condition},{condition}]]`. Depth level 1 provides in `OR` functionality while the second level provides in `AND` functionality. 

A condition object consists of the required property `method` which refers to a function, e.g. WordPress conditional functions such as `is_front_page` or `is_page` or your custom function and the optional properties `arguments` and `result`.

`arguments` is a mixed value or array of arguments to pass to the method. A value will be passed as the first argument, while an array will be applied as multiple arguments. To apply an array of value as the first parameter, e.g. `is_post([1,5,19])` the arguments value needs to be passed as the first element of an array, `[[1,5,19]]`.

`result` is a mixed value or array of the result to expect from the method. The default is `true` but it can be set to an array to match the result against multiple values in an array, e.g. to use `get_the_ID()` as conditional method and match against the result.

#### Example Critical CSS Conditions Configuration

```json
[
	{
		"method": "is_page",
		"arguments": [[1,5,19]]
	},
    {
        "method": "is_front_page"
    },
    {
        "method": "is_singular",
        "arguments": ["post_type"],
        "result": false
    }
]
```

<details/>
  <summary>JSON schema for Critical CSS condition config</summary>

```json
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "css-critical-conditions.json",
    "title": "Match on any condition in array.",
    "description": "Critical CSS conditions",
    "type": "array",
    "minItems": 1,
    "items": {
        "oneOf": [{
            "$ref": "#/definitions/condition"
        }, {
            "title": "Match on all conditions in array.",
            "type": "array",
            "minItems": 1,
            "items": {
                "$ref": "#/definitions/condition"
            },
            "uniqueItems": true
        }]
    },
    "uniqueItems": true,

    "definitions": {
        "condition": {
            "title": "Condition configuration object",
            "type": "object",
            "properties": {
                "method": {
                    "title": "The method to call.",
                    "type": "string",
                    "pattern": "^([\\A-Za-z0-9_-]+::)?[A-Za-z0-9_-]+$"
                },
                "arguments": {
                    "title": "Arguments to apply to the method.",
                    "default": "null",
                    "oneOf": [{
                        "type": "null"
                    }, {
                        "type": "array",
                        "minItems": 1,
                        "items": {
                            "oneOf": [{
                                "type": "null"
                            }, {
                                "type": "boolean"
                            }, {
                                "type": "integer",
                                "minimum": 1
                            }, {
                                "type": "string",
                                "minLength": 1
                            }, {
                                "type": "array",
                                "minItems": 1,
                                "items": {
                                    "oneOf": [{
                                        "type": "null"
                                    }, {
                                        "type": "boolean"
                                    }, {
                                        "type": "integer",
                                        "minimum": 1
                                    }, {
                                        "type": "string",
                                        "minLength": 1
                                    }, {
                                        "type": "array",
                                        "minItems": 1,
                                        "items": {
                                            "oneOf": [{
                                                "type": "integer",
                                                "minimum": 1
                                            }, {
                                                "type": "string",
                                                "minLength": 1
                                            }]
                                        },
                                        "uniqueItems": true
                                    }]
                                }
                            }]
                        }
                    }]
                },
                "result": {
                    "title": "The method result to match.",
                    "oneOf": [{
                        "type": "boolean",
                        "default": true
                    }, {
                        "type": "integer"
                    }, {
                        "type": "string"
                    }, {
                        "title": "Match against an array.",
                        "type": "array",
                        "minItems": 1,
                        "items": {
                            "oneOf": [{
                                "type": "integer"
                            }, {
                                "type": "string"
                            }]
                        },
                        "uniqueItems": true
                    }]
                }
            },
            "required": ["method"]
        }
    }
}
```
</details>

