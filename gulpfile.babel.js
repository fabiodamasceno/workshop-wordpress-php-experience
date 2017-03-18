import Gulp from 'gulp'
import help from 'gulp-help'

const gulp = help(Gulp)

gulp.task('default', ['help'], () => {})

gulp.task('php', 'Move arquivos php', () => {
	gulp.src('app/**/*.*')
		.pipe(gulp.dest('wordpress/wp-content'))
})

gulp.task('build', 'Build da aplicação', ['php'], () => {})
