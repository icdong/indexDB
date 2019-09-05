/*
 * @Description: gulp配置文件
 * @Author: Daito Chai
 * @Date: 2019-08-26 22:59:21
 * @LastEditTime: 2019-08-29 21:39:41
 * @LastEditors: Please set LastEditors
 */
let gulp = require("gulp")
//--以下为gulp中的插件方法 需下载，npm install gulp-"名称" --save-dev
// let minifyCSS = require("gulp-minify-css")
let connect = require("gulp-connect")

gulp.task('html', function () {
  gulp.src(['index.html'])
    .pipe(connect.reload())//这是自动刷新
})

//建立看守任务
gulp.task('watch', function () {
  gulp.watch(['*.*'], ['html'])
})

//创建服务
gulp.task("server",function(){
	connect.server({
		root:"./",
		livereload:true,
		// https:true,
		port: 3000
	})
})

gulp.task("default",['watch', 'server'])