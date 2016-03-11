var gulp            = require( 'gulp' );
var assemble        = require( 'assemble' );
var extname         = require( 'gulp-extname' );

var htmlPrototypePages = assemble();

var assemblePrototypePages = function(){

    // htmlPrototype.option('layout', 'page');

    /**
     * Create `Pages` Collection
     */

    htmlPrototypePages.create('pages');

    htmlPrototypePages.task('loadPages', function(cb) {
        htmlPrototypePages.partials('./components/**/*.hbs');
        htmlPrototypePages.layouts('./prototype/src/layouts/*.hbs');
        htmlPrototypePages.data(['./prototype/src/hbs/pages/data/*.{json,yml}']);
        htmlPrototypePages.pages('./prototype/src/hbs/pages/*.hbs', { layout: 'page' });
        cb();
    });

    htmlPrototypePages.task('buildPages', ['loadPages'], function() {
        return htmlPrototypePages.toStream('pages')
            .on('error', console.log)
            .pipe(htmlPrototypePages.renderFile())
            .on('error', console.log)
            .pipe(extname())
            .pipe(htmlPrototypePages.dest('./prototype/dist/html/pages/'));
    })
    /**
     * Build Tasks
     */

    return htmlPrototypePages.build(['buildPages'], function(err) {
        if (err) throw err;
        console.log('done!');
    });
}

module.exports = assemblePrototypePages;
