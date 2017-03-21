import Gulp from 'gulp'
import help from 'gulp-help'
import phpcs from 'gulp-phpcs'	;
import deploy from './deployment/deploy'

const gulp = help(Gulp)

gulp.task('default', ['help'])

gulp.task('psr', 'verifica namespaces e valida code style', () => {
    return gulp.src(['app/**/*.php', '!/vendor/**/*.*'])
        // Validate files using PHP Code Sniffer
        .pipe(phpcs({
            bin: '.\\vendor\\bin\\phpcs',
            standard: 'PSR2',
            warningSeverity: 0,	
            colors:true,
            severity: 1
        }))
        // Log all problems that was found
        .pipe(phpcs.reporter('log'));
})

gulp.task('php', 'Move arquivos php', ['psr'], () => {
    return gulp.src('./app/**/*.*')
        .pipe(gulp.dest('./wordpress/wp-content/'))
})

gulp.task('build', 'Build da aplicação', ['php'], () => {})

gulp.task('deploy', 'Deploy da aplicação', () => {
    deploy()
})

