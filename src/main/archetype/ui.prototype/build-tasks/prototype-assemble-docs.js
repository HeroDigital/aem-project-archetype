var gulp            = require( 'gulp' );
var assemble        = require( 'assemble' );
var extname         = require( 'gulp-extname' );

var htmlPrototypeDocs = assemble();

var assemblePrototypeDocs = function(){

    // htmlPrototype.option('layout', 'page');

    /**
     * Create `Docs` Collection
     */

    htmlPrototypeDocs.create('docs');

    htmlPrototypeDocs.task('loadDocs', function(cb) {
        htmlPrototypeDocs.partials('./components/**/*.hbs');
        htmlPrototypeDocs.layouts('./prototype/src/layouts/*.hbs');
        htmlPrototypeDocs.data(['./prototype/src/hbs/docs/data/*.{json,yml}']);
        htmlPrototypeDocs.docs('./prototype/src/hbs/docs/*.hbs', { layout: 'doc' });
        cb();
    });

    htmlPrototypeDocs.task('buildDocs', ['loadDocs'], function() {
        return htmlPrototypeDocs.toStream('docs')
            .on('error', console.log)
            .pipe(htmlPrototypeDocs.renderFile())
            .on('error', console.log)
            .pipe(extname())
            .pipe(htmlPrototypeDocs.dest('./prototype/dist/html/docs/'));
    });

    /**
     * Build Tasks
     */

    return htmlPrototypeDocs.build(['buildDocs'], function(err) {
        if (err) throw err;
        console.log('done!');
    });
}

module.exports = assemblePrototypeDocs;
