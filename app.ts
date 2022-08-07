import { config } from 'dotenv'
config({ path: './.env' })

import * as log4js from 'log4js'
import * as logConfig from './src/configs/log4js.json'
import { startConnection } from './src/infrastructure/database/mysql/mysql'
import ExpressServer from './src/infrastructure/server/express/express-server'
import { IServer } from './src/infrastructure/server/interface/server'
log4js.configure(logConfig)
const logger = log4js.getLogger('')



const { SERVER_PORT } = process.env



async function main(){
    
    const server: IServer = new ExpressServer()
    await startConnection()
    server.start(SERVER_PORT as string, () => { 
        logger.info(`Server is running on port: ${SERVER_PORT}`)
    })

}

main()