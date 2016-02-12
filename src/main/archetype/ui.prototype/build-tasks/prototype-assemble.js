var gulp            = require( 'gulp' );
var assemble        = require( 'assemble' );
var extname         = require( 'gulp-extname' );

var htmlPrototype = assemble();

var assemblePrototype = function(){

    // htmlPrototype.option('layout', 'page');

    /**
     * Create `Pages` Collection
     */

    htmlPrototype.create('pages');

    htmlPrototype.task('loadPages', function(cb) {
        htmlPrototype.partials('./components/**/*.hbs');
        htmlPrototype.layouts('./prototype/src/layouts/*.hbs');
        htmlPrototype.data(['./prototype/src/hbs/pages/data/*.{json,yml}']);
        htmlPrototype.pages('./prototype/src/hbs/pages/*.hbs', { layout: 'page' });
        cb();
    });

    htmlPrototype.task('buildPages', ['loadPages'], function() {
        return htmlPrototype.toStream('pages')
            .on('error', console.log)
            .pipe(htmlPrototype.renderFile())
            .on('error', console.log)
            .pipe(extname())
            .pipe(htmlPrototype.dest('./prototype/dist/html/pages/'));
    });

    /**
     * Create `Docs` Collection
     */

    htmlPrototype.create('docs');

    htmlPrototype.task('loadDocs', function(cb) {
        htmlPrototype.partials('./components/**/*.hbs');
        htmlPrototype.layouts('./prototype/src/layouts/*.hbs');
        htmlPrototype.data(['./prototype/src/hbs/docs/data/*.{json,yml}']);
        htmlPrototype.docs('./prototype/src/hbs/docs/*.hbs', { layout: 'doc' });
        cb();
    });

    htmlPrototype.task('buildDocs', ['loadDocs'], function() {
        return htmlPrototype.toStream('docs')
            .on('error', console.log)
            .pipe(htmlPrototype.renderFile())
            .on('error', console.log)
            .pipe(extname())
            .pipe(htmlPrototype.dest('./prototype/dist/html/docs/'));
    });

    /**
     * Custom Helper
     */



    /**
     * Build Tasks
     */

    return htmlPrototype.build(['buildPages', 'buildDocs'], function(err) {
        if (err) throw err;
        console.log('done!');
    });
}

module.exports = assemblePrototype;