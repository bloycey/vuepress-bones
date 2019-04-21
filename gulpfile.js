const { series, src, dest } = require('gulp');
const del = require('del')
const rename = require("gulp-rename")

function deleteFiles() {
    return del(['docs/bones-blog/*'])
}

function moveFiles() {
    return src('docs/blog/blog-posts/*.md')
        .pipe(rename(function (file) {
            file.dirname = file.basename
            file.basename = "index";
            file.extname = ".md";
        }))
        .pipe(dest('docs/bones-blog/'))
}

exports.deleteFiles = deleteFiles;
exports.moveFiles = moveFiles;

exports.prepare = series(deleteFiles, moveFiles)
exports.default = series(deleteFiles, moveFiles)