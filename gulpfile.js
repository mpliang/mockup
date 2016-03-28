var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var minifyCss = require('gulp-minify-css');
var babel = require('gulp-babel');
// var $ = require('gulp-load-plugins')({lazy: true});

var dirs = {
    src: {
        scss: {
            entry: "src/client/app.scss",
            all: "src/client/**/*.scss",
        },
        bower: "src/client/bower_components/**/*",
        html: "src/client/**/*.html",
        js: "src/client/app/**/*.js",
    },
    out: {
        dist: 'dist/',
        js: 'dist/app',
        bower: 'dist/bower_components/'
    }
}

gulp.task('default', ['sass', 'assets', 'html', 'build', 'watch']);
gulp.task('clean', ['clean']);

gulp.task('clean', function () {
    del.sync([dirs.out.dist + '**']);
});

gulp.task('vet', function() {
    log('Analyzing source with JSHint and JSCS');
    return gulp
        .src(config.alljs)
        .pipe($.if(args.verbose, $.print()))
        .pipe($.jshint())
        .pipe($.jshint.reporter('jshint-stylish', {verbose: true}))
        .pipe($.jshint.reporter('fail'))
        .pipe($.jscs());
});

gulp.task('sass', function () {
    gulp.src(dirs.src.scss.entry)
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(minifyCss())
        .pipe(gulp.dest(dirs.out.dist))
});

gulp.task('assets', function () {
    gulp.src(dirs.src.bower)
        .pipe(gulp.dest(dirs.out.bower))
});


gulp.task('html', function () {
    gulp.src(dirs.src.html)
        .pipe(gulp.dest(dirs.out.dist))
})

gulp.task('build', function () {
    gulp.src(dirs.src.js)
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest(dirs.out.js))
});

gulp.task('watch', function () {
    gulp.watch([dirs.src.scss.all, dirs.src.scss.entry], ['sass']);
    gulp.watch(dirs.src.html, ['html']);
    gulp.watch(dirs.src.js, ['build']);
});
