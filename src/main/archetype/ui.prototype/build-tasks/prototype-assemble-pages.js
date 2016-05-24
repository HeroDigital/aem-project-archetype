var assemble        = require( 'assemble' );
var extname         = require( 'gulp-extname' );
var prettify        = require( 'gulp-prettify' );
var registerHelpers = require( './prototype-assemble-helpers' );

var assemblePrototypePages = function(){

    var app = assemble();

    /**
     * Create `Pages` Collection
     */

    function handleError(err) {
        console.log(err);
        this.emit('end');
    }

    app.create('pages');

    app.task('loadPages', function(cb) {
        app.partials('./components/**/*.hbs');
        app.layouts('./prototype/src/layouts/*.hbs');
        app.data(['./prototype/src/hbs/pages/data/*.{json,yml}']);
        app.pages('./prototype/src/hbs/pages/*.hbs', { layout: 'page' });
        cb();
    });

    registerHelpers(app);

    app.task('buildPages', ['loadPages'], function() {
        return app.toStream('pages')
            .pipe(app.renderFile()).on('error', handleError)
            .pipe(extname()).on('error', handleError)
            .pipe(prettify({indent_inner_html: false, indent_size: 4, padcomments: true})).on('error', handleError)
            .pipe(app.dest('./prototype/dist/html/pages/')).on('error', handleError);
    })
    /**
     * Build Tasks
     */

    return app.build(['buildPages'], function(err) {
        if (err) throw err;
        // console.log('done!');
    });
}

module.exports = assemblePrototypePages;
