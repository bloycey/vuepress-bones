const { series, src, dest } = require('gulp');

function defaultTask(cb) {
    cb();
}

function moveFiles() {
    return src('docs/blog/*.md')
        .pipe(dest('docs/gulp-test'))
}

exports.moveFiles = moveFiles;
exports.default = defaultTask;