var gulp = require('gulp'),
  apidoc = require('gulp-apidoc');

gulp.task('apidoc', function (done) {
  apidoc(
    {
      src: '../tuningApp/routes',
      dest: 'docs/',
      template: 'apidoc-template/',
      debug: true,
      includeFilters: ['.*\\.js$'],
    },
    done
  );
});
