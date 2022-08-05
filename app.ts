import { config } from 'dotenv'
import * as log4js from 'log4js'
import * as logConfig from './src/configs/log4js.json'
import Router from './src/routes'

const express = require('express')
const { Request, Response } = express

import { responseLogger } from './src/middlewares/response-logger'

config({ path: './.env' })
const { SERVER_PORT } = process.env

log4js.configure(logConfig)
const logger = log4js.getLogger('')



const app = express()

app.use('/', (req: any, res: any, next: any) => {
    responseLogger(res)
    next()
})

app.use('/', Router)


app.listen(SERVER_PORT, () => {
    logger.info(`Server is running on port: ${SERVER_PORT}`)
})