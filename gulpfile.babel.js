import Gulp from 'gulp'
import help from 'gulp-help'
import deploy from './deployment/deploy'

const gulp = help(Gulp)

gulp.task('default', ['help'])

gulp.task('php', 'Move arquivos php', () => {
    gulp.src('app/**/*.*')
        .pipe(gulp.dest('wordpress/wp-content'))
})

gulp.task('ativacao:wordpress', 'php', () => {})

gulp.task('psr', 'verifica namespaces e valida code style', () => {})

gulp.task('build', 'Build da aplicação', ['ativacao:wordpress'], () => {})

gulp.task('deploy', 'Deploy da aplicação', () => {
    deploy()
})
