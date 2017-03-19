import url from 'url'
import httpParse from './http-parse'
import childProcess from 'child_process'
import yargs from 'yargs'

const argv = yargs.argv

const exec = childProcess.execSync

export default function({ hostname = '', senha = '', usuario = '', comandos = [] } = {}) {
    if (argv.env !== 'production')
        return executarNoDocker(comandos)
    else {
        return executarNoAppServiceKudu(comandos, hostname, usuario, senha)
    }
}

function executarNoDocker(comandos) {
    let resultados = []
    comandos.forEach((comando) => {
        console.info(`docker-compose run --rm wpcli-container ${comando}`)
        let resultado = exec(`docker-compose run --rm wpcli-container ${comando}`, { encoding: 'utf-8' })
        resultados.push({ comando: comando, resultado: resultado })
    })
    return resultados
}

function executarNoAppServiceKudu(comandos, hostname, usuario, senha) {
    if (argv.senha && argv.usuario)
        comandos.forEach((comando) => {
            const postData = JSON.stringify({
                command: `wp ${comando}`,
                dir: "D:\\home"
            })
            const parsedHost = url.parse(hostname)
            const opt = {
                hostname: parsedHost.host,
                port: 443,
                path: '/command',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': postData.length,
                    'Authorization': 'Basic ' + new Buffer(`${usuario}:${senha}`).toString('base64')
                }
            }
            httpParse(opt, postData, (result) => {
                console.info(result)
            })
        })
    else logger()
}


