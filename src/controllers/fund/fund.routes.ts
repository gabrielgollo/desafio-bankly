import FundController from "./fund-controller";
import express from 'express'
const FundRoutes = express.Router()

FundRoutes.get(':transactionId', FundController.getStatus)

FundRoutes.post('/', FundController.doTransference)


export default FundRoutes