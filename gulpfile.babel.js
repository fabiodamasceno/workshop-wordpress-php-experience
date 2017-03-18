import Gulp from 'gulp'
import help from 'gulp-help'
import deploy from './deployment/deploy'

const gulp = help(Gulp)

gulp.task('default', ['help'])

gulp.task('psr', 'verifica namespaces e valida code style', () => {})

gulp.task('php', 'Move arquivos php', ['psr'], () => {
    return gulp.src('./app/**/*.*')
        .pipe(gulp.dest('./wordpress/wp-content/'))
})

gulp.task('build', 'Build da aplicação', ['php'], () => {})

gulp.task('deploy', 'Deploy da aplicação', () => {
    deploy()
})
