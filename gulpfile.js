const gulp = require("gulp");
const cleanCSS = require("gulp-clean-css");
const uglify = require("gulp-uglify");
const autoprefixer = require("gulp-autoprefixer");
const sass = require("gulp-sass")(require("sass"));
const rename = require("gulp-rename");

const browserSync = require("browser-sync").create();

gulp.task("copy", function () {
    return gulp.src("src/**/*.*").pipe(gulp.dest("dest/"));
});

gulp.task("sassToCSS", function () {
    return gulp
        .src("src/scss/**/*.scss")
        .pipe(
            sass({
                errorLogToConsole: true,
                outputStyle: "compressed",
            })
        )
        .on("error", console.error.bind(console))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("dest/css/"))
        .pipe(gulp.dest("src/css"));
});

gulp.task("minifyJS", function () {
    return gulp
        .src("src/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("dest/js/"));
});

gulp.task("server", function () {
    browserSync.init({
        server: "src",
    });
    browserSync.watch("src/**/*.*").on("change", browserSync.reload);
});

gulp.task("watch", function () {
    gulp.watch("src/scss/**/*.scss", gulp.series("sassToCSS"));
    gulp.watch("src/scripts/*.js", gulp.series("minifyJS"));
});

gulp.task("default", gulp.parallel("watch", "server"));
