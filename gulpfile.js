const gulp = require('gulp');
const apidoc = require('gulp-apidoc');

gulp.task('apidoc', function (done) {
  apidoc(
    {
      src: '../tuningApp/routes',
      dest: 'docs/',
      template: 'apidoc-template/',
      debug: true,
    },
    done
  );
});
