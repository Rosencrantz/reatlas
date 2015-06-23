var gulp = require("gulp");
var babel = require("gulp-babel");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');

gulp.task("default", function () {
  return gulp.src("modules/main.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
});

gulp.task("watch", function(){
    gulp.watch('modules/main.js', ['default']);
});


gulp.task('modules', function() {
    browserify({
        entries: './modules/main.js',
        debug: false
    })
    .transform(babelify)
    .bundle()
    .pipe(source('reatlas.js'))
    .pipe(gulp.dest('./dist'));
});