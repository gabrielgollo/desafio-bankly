import { Response } from "express"
import { getLogger } from "log4js";
import { formatDate } from '../utils/format-date'

const logger = getLogger('')


export function responseLogger(_res: Response){
    logger.info(`${formatDate(new Date)} - Response sent!`)
}