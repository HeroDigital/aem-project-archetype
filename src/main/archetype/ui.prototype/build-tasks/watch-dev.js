var gulp         = require( 'gulp' );
var runSequence = require('run-sequence');

function watchDev() {

    // Production files
    var cssToWatch = [
        "components/**/styles/**/**.scss",
        "client-libraries/**/styles/**/**.scss"
    ]

    var jsToWatch = [
        "components/**/**.js",
        "client-libraries/**/**.js"
    ];

    gulp.watch( cssToWatch, ['css' ] );
    gulp.watch( jsToWatch, [ 'js' ] );

    // Prototype files
    var htmlToWatch = [
        "prototype/src/**/**.hbs",
        "prototype/src/**/**.json",
        "components/**/**.hbs"
    ];
    var cssPrototypeToWatch = [
        "prototype/src/styles/*.scss",
        "prototype/src/styles/**/*.scss"
    ]

    var jsPrototypeToWatch = [
        "prototype/src/js/**/**.js"
    ];
    gulp.watch( htmlToWatch, ['html' ] );
    gulp.watch( cssPrototypeToWatch, ['cssPrototype' ] );
    gulp.watch( jsPrototypeToWatch, [ 'jsPrototype' ] );

}


module.exports = watchDev;
