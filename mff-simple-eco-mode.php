<?php
/**
 * Plugin Name: Simple Eco Power Save mode
 * Description: A simple eco power save mode, when page is not used over 60 second, or switched, content is muted, plugin include just JS and a CSS file.
 * Version: 1.0
 * Author: MyForksFiles
 */

if ( ! function_exists( 'add_action' ) ) {

    header( 'Location: /' );

    exit;
}

//register_activation_hook( __FILE__, array( 'EcoPowerSaveMode', 'pluginActivation' ) );
//register_deactivation_hook( __FILE__, array( 'EcoPowerSaveMode', 'pluginDeactivation' ) );

//add_action( 'init', array( 'NewProducts', 'init' ) );


// Function to load your custom script and style
function mff_simple_eco_mode_enqueue_scripts()
{
    wp_enqueue_style('mff_simple_eco_mode_css', plugin_dir_url(__FILE__) . 'eco-power-save-mode.css');
    wp_enqueue_script('mff_simple_eco_mode_js', plugin_dir_url(__FILE__) . 'eco-power-save-mode.js', array(), false, true);
}

// Hook into the wp_enqueue_scripts action to add your custom script and style
add_action('wp_enqueue_scripts', 'mff_simple_eco_mode_enqueue_scripts');

if ( is_admin() ) {

    add_action( 'admin_menu', 'EcoPowerSaveModeAdminMenu' );

    function EcoPowerSaveModeAdminMenu() {
        add_management_page(
            __( 'Eco Power Save Mode', 'Eco Mode' ),
            'Eco Power Save Mode',
            'manage_options',
            'eco-power-save-mode',
            'ecoPowerSaveMode',
            999
        );
    }

    function pluginSettings()
    {
        register_setting('eco-power-save-mode-page-settings', 'eco_mode_page');
    }

    add_action( 'admin_init', 'pluginSettings' );

    /**
     * backend admin
     */
    function ecoPowerSaveMode() {
//        if ( class_exists( 'NewProductsAdmin' ) ) {
//            ( new NewProductsAdmin() )->admin();
//        }
    }
}
?>
