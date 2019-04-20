const { series, src, dest } = require('gulp');
const rename = require("gulp-rename")

function defaultTask(cb) {
    cb();
}

function moveFiles() {
    return src('docs/blog/*.md')
        .pipe(rename(function (file) {
            file.dirname = file.basename
            file.basename = "index";
            file.extname = ".md";
        }))
        .pipe(dest('docs/bones-blog/'))
}

exports.moveFiles = moveFiles;
exports.default = defaultTask;