<?php
namespace O10n;

/**
 * Security settings admin template
 *
 * @package    optimization
 * @subpackage optimization/admin
 * @author     Optimization.Team <info@optimization.team>
 */
if (!defined('ABSPATH') || !defined('O10N_ADMIN')) {
    exit;
}


// print form header
$this->form_start(__('Security Settings', 'o10n'), 'security');

$config = array();

$csp = $this->options->get('csp.*');
foreach ($csp as $key => $data) {
    $config['csp.' . $key] = $data;
}
$headers = $this->options->get('headers.*');
foreach ($headers as $key => $data) {
    $config['headers.' . $key] = $data;
}

// Convert input to JSON
require_once O10N_CORE_PATH . 'lib/Dot.php';
$dot = new Dot;
$dot->set($config);
$profile_json = $dot->toJSON();

?>


<table class="form-table">
    <tr valign="top">
        <td>
            <h3 style="margin-top:0px;margin-bottom:0.5em;">JSON configuration</h3>
            <p style="font-size:16px;">The following JSON is the full configuration <u><b>of this plugin</b></u>. For the JSON of all optimization plugins, <a href="<?php print add_query_arg(array('page' => 'o10n'), admin_url('admin.php')); ?>">click here</a>. The JSON is verified using JSON schemas (<a href="https://github.com/o10n-x/wordpress-o10n-core/tree/master/schemas" target="_blank">read more</a>).</p>
            <br />
            <div id="security"><div class="loading-json-editor"><?php print __('Loading JSON editor...', 'o10n'); ?></div></div>
            <input type="hidden" class="json" name="o10n[security]" data-json-type="json" data-json-editor-schema='["csp","headers"]' data-json-editor-height="auto" data-json-editor-init="1" value="<?php print esc_attr($profile_json); ?>" />
            <p class="suboption info_yellow"><strong><span class="dashicons dashicons-lightbulb"></span></strong> For an insight in the available options, you can review the <a href="https://github.com/o10n-x/wordpress-o10n-core/tree/master/schemas" target="_blank">JSON schema source files</a>.</p>
        </td>
    </tr>
</table>

<hr />
<?php
    submit_button(__('Save'), 'primary large', 'is_submit', false);

// print form header
$this->form_end();
