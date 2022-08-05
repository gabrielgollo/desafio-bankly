import { getLogger } from "log4js";
const logger = getLogger('')

export function requestLogger(req: Express.Request): void {
    logger.info(`${Date.now()}Request received: ${req}`)
}
