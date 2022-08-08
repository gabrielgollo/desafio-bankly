import FundController from "./fund-controller";
import express, { NextFunction, Request, Response } from 'express'
import MetricsService from "../../services/metrics-service";
const FundRoutes = express.Router()

FundRoutes.post('/', async (req: Request, res: Response, _next: NextFunction) => {
    const startTime = new Date().getTime()

    const { status=200, message='' } = await FundController.doTransference(req, res)

    MetricsService.saveLatency(new Date().getTime() - startTime, message, status)
})


FundRoutes.get('/:transactionId', async(req: Request, res: Response, _next: NextFunction) => {
    const startTime = new Date().getTime()

    const { status=200, message='' } = await FundController.getStatus(req, res)
    

    MetricsService.saveLatency(new Date().getTime() - startTime, message, status)
})


export default FundRoutes