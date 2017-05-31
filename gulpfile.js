var gulp 		= require('gulp');
var browserSync =require('browser-sync'); // BROWSER SYNC
var reload 		= browserSync.reload;


gulp.task('serve', function() {
  browserSync.init([ "news/*.html"], {
    server: {
      baseDir :'news'
    }
  })
});

gulp.task('watch', ['serve', ], function() {

} );

gulp.task('default', ['watch']);
