=== Security Header Optimization ===
Contributors: o10n
Donate link: https://github.com/o10n-x/
Tags: csp, security, http headers, optimization, content security policy, xss, access control, headers, php headers
Requires at least: 4.0
Requires PHP: 5.4
Tested up to: 4.9.4
Stable tag: 0.0.35
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Advanced security header optimization toolkit. Content-Security-Policy, Strict Transport Security (HSTS), Public-Key-Pins (HPKP), X-XSS-Protection and CORS.

== Description ==

This plugin is a toolkit for HTTP Security Header optimization.

The plugin provides in a complete solution for Content Security Policy Management with support for Reporting API and legacy policy conversion based on browser sniffing. 

The plugin supports most security headers, including Strict Transport Security (HSTS), Public-Key-Pins (HPKP), X-XSS-Protection and all Cross-Origin Resource Sharing (CORS) related headers (Access-Control-Allow-Origin).

Additional features can be requested on the [Github forum](https://github.com/o10n-x/wordpress-security-header-optimization/issues).

**This plugin is a beta release.**

Documentation is available on [Github](https://github.com/o10n-x/wordpress-security-header-optimization/tree/master/docs).

== Installation ==

### WordPress plugin installation

1. Upload the `security-header-optimization/` directory to the `/wp-content/plugins/` directory.
2. Activate the plugin through the 'Plugins' menu in WordPress.
3. Navigate to the plugin settings page.
4. Configure Security Header Optimization settings. Documentation is available on [Github](https://github.com/o10n-x/wordpress-security-header-optimization/tree/master/docs).

== Screenshots ==


== Changelog ==

= 0.0.35 =
* Added: plugin update protection (plugin index).

= 0.0.34 =
* Core update (see changelog.txt)

= 0.0.21 =
* Bugfix: JSON profile editor does not delete options when removed from JSON.

= 0.0.20 =
* Bugfix: JSON profile editor doesn't save directives object correctly.
* Bugfix: Allow-Origin origin editor visible when disabled.

= 0.0.19 =
* Bugfix: JSON profile editor overwrites settings.

= 0.0.18 =
* Bugfix: Incorrect `X-Frame-Options` admin form validation (@baddogg99)

= 0.0.17 =
Core update (see changelog.txt)

= 0.0.16 =
* Fix: JSON profile editor template not uploaded to WordPress.

= 0.0.15 =
* JSON schema update.
* Added: JSON profile editor (backup and restore plugin config)
* Added: documentation on Github

= 0.0.14 =
Core update (see changelog.txt)

= 0.0.11 =
* Bugfix: `X-XSS-Protection: 1; mode=block` header (@brant-kelsey)

= 0.0.10 =
* Bugfix: uninstaller.

= 0.0.9 =
Bugfix: settings link on plugin index.

= 0.0.8 =
Core update (see changelog.txt)

= 0.0.2 =
Bugfix: error after activating plugin.

= 0.0.1 =
Beta release. Please provide feedback on [Github forum](https://github.com/o10n-x/wordpress-security-header-optimization/issues).

== Upgrade Notice ==

None.