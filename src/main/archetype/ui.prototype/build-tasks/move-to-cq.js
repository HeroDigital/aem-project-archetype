var assemble        = require( 'assemble' );
var extname         = require( 'gulp-extname' );
var prettify        = require( 'gulp-prettify' );
var registerHelpers = require( './prototype-assemble-helpers' );

var assemblePrototypeDocs = function(){

    var app = assemble();

    /**
     * Create `Docs` Collection
     */

    //app.create('docs');

    function handleError(err) {
        console.log(err);
        this.emit('end');
    }

    app.task('loadDocs', function(cb) {
        app.partials('./components/**/*.hbs');
        app.layouts('./prototype/src/layouts/*.hbs');
        app.data(['./prototype/src/hbs/docs/data/*.{json,yml}']);
        app.pages('./prototype/src/hbs/docs/*.hbs', { layout: 'doc' });
        cb();
    });

    registerHelpers(app);

    app.task('buildDocs', ['loadDocs'], function() {
        return app.toStream('pages')
            .pipe(app.renderFile()).on('error', handleError)
            .pipe(extname()).on('error', handleError)
            .pipe(prettify({indent_inner_html: false, indent_size: 4, padcomments: true})).on('error', handleError)
            .pipe(app.dest('./prototype/dist/html/docs/')).on('error', handleError)

    });

    /**
     * Build Tasks
     */

    return app.build(['buildDocs'], function(err) {
        if (err) {
            throw err;
        }
    });
}

module.exports = assemblePrototypeDocs;
