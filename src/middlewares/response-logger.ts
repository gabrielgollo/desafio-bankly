import { Response } from "express"
import { getLogger } from "log4js";
import { formatDate } from '../helpers/format-date'

const logger = getLogger('')


export function responseLogger(res: Response){
    logger.info(`${formatDate(new Date)} - Request received: ${}`)
}