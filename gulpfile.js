const { src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

function buildStyles() {
    return src('scss/**/*.scss')
    .pipe(sass())
    .pipe(purgecss({ content: ['*.html'] })) //watch for all html files to purge 
    .pipe(dest('css')) 
}

function watchTask() {
    watch(['scss/**/*.scss', '*.html'], buildStyles) //watch for .scss files to recompile
}

exports.default = series(buildStyles, watchTask);