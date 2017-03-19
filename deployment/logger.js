import colors from 'colors'

export default function() {
    console.error('Formato incorreto!!'.red);
    console.info('Parâmetros:'.yellow)
    console.info('--usuario'.grey)
    console.info('--senha'.grey)
    console.info('--host (opcional)'.grey)
    process.exit(1);
}