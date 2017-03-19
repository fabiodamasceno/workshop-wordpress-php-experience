/*
	Exemplo de uso:
	npm run deploy -- --url="localhost:8080"
	npm run deploy -- --production --url="phpexperience.azurewebsites.net"
*/

import wpCli from './wpcli'
import yargs from 'yargs'

const argv = yargs.argv

export default function() {
	wpCli({ 
		hostname: argv.host,
		senha: argv.senha,
		usuario: argv.usuario,
		comandos :[
		    `core install --title=Icatu \
            --url=${argv.url} \
            --admin_user=administrator \
            --admin_password=P@ssw0rd \
            --admin_email=fabio.damasceno@lambda3.com.br \
            --skip-email`,
            "theme activate phpexperience"
		]
	})
}
