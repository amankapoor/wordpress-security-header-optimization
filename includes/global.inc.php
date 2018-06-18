<?php
namespace O10n\Security;

/**
 * Global functions
 *
 * @package    optimization
 * @subpackage optimization/controllers
 * @author     Optimization.Team <info@optimization.team>
 */

// Set Content Security Policy directives
function csp($directives, $value = false)
{
    \O10n\Core::get('csp')->set_directives($directives, $value);
}

// Set header
function header($name, $value, $replace = true)
{
    \O10n\Core::get('securityheaders')->header($name, $value, $replace);
}
