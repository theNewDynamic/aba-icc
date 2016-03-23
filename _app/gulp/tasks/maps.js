module.exports = function(gulp, plugins, config) {
gulp.task('maps', function() {
   gulp.src(config.mapsSrc)
     .pipe(plugins.plumber({
         errorHandler: plugins.notify.onError("ERROR: JS Compilation Failed")
       }))
     .pipe(plugins.uglify())
     .pipe(plugins.concat('maps.min.js'))
     .pipe(gulp.dest(config.mapsDest))
   });
}
