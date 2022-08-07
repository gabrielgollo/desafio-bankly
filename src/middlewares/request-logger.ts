import { Request } from "express";
import { getLogger } from "log4js";
import { formatDate } from "../utils/format-date";
const logger = getLogger('')

export function requestLogger(_req: Request): void {
    logger.info(`${formatDate(new Date)} - Request received!`)
}
