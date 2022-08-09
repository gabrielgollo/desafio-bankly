import FundController from "./fund-controller";
import express, { NextFunction, Request, Response } from 'express'
import MetricsService from "../../services/metrics-service";
import { getLogger } from "log4js";
import { formatDate } from "../../utils/format-date";

const logger = getLogger('FundController')

const FundRoutes = express.Router()

FundRoutes.post('/', async (req: Request, res: Response, _next: NextFunction) => {
    const startTime = new Date().getTime()

    const { status=200, message='' } = await FundController.doTransference(req, res)

    const endTime = new Date().getTime()
    const latency = endTime - startTime;


    const loggerMessage: string = `${formatDate(new Date(startTime))} post /fund-transfer - Processed! (${latency} ms) - Status (${status})`
    logger.info(loggerMessage)

    MetricsService.saveLatency(latency, message, status)
})


FundRoutes.get('/:transactionId', async(req: Request, res: Response, _next: NextFunction) => {
    const startTime = new Date().getTime()

    const { status=200, message='' } = await FundController.getStatus(req, res)
    
    const endTime = new Date().getTime()
    const latency = endTime - startTime;

    const loggerMessage: string = `${formatDate(new Date(startTime))} get - /fund-transfer/:transactionId - Processed! (${latency} ms) - Status (${status})`
    logger.info(loggerMessage)

    MetricsService.saveLatency(endTime - startTime, message, status)
})
 

export default FundRoutes