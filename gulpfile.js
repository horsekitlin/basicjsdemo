const gulp = require('gulp');
const scp = require('gulp-scp2');

const {
  HOST,
  DEST,
  ACCOUNT,
  PASSWORD,
} = process.env;

gulp.task('deploy', async () => {
  return gulp.src('./build/**')
  .pipe(scp({
    host: HOST,
    username: ACCOUNT,
    password: PASSWORD,
    dest: DEST,
  }))
  .on('error', function(err) {
    console.log(err);
  });
});