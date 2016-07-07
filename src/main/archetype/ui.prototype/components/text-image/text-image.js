'use strict';

/**
 *  This is the main file for text-image
 */

exports.TextImage = TextImage;
exports.helperFunction = helperFuction;

function TextImage() {
    this.name = 'text-image';
}

TextImage.prototype.helloWorld = function() {
    console.log('Hello World ' + this.name + '!');
};

function helperFuction() {
    console.log('text-image helperFunction invoked!');
}
