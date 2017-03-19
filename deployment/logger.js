import colors from 'colors'

export default function() {
    console.error('Formato incorreto!!'.red);
    console.info('Parâmetros:'.yellow)
    console.info('--usuario $siteinstitucionalicatu'.grey)
    console.info('--senha aFGAxSrPxCAqsyDHCxY2pdDB2FBF4esfsXuS8nv56Q7zZhjyuzL2hH7Tt9jK'.grey)
    console.info('--host https://siteinstitucionalicatu.scm.azurewebsites.net/ (opcional)'.grey)
    process.exit(1);
}