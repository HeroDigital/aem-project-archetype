/**
 *  This is the main file for pagelibs
 */

// App scripts

// NPM modules
var bootstrap = require ( '../../node_modules/bootstrap-sass' );

// Custom Base Scripts
var polyfills = require ( '../pagelibs/js/custom-polyfills.js' );

// Vendor Scripts
var polyfills = require ( '../vendor/polyfills/polyfill-fixedsticky.js' );

// Component Scripts
var components = require( './pagelibs.components' );
var globalComponent = require( '../../components/global' );

globalComponent.init( components );
