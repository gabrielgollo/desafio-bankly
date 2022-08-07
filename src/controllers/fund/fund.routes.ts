import FundController from "./fund-controller";
import express from 'express'
const FundRoutes = express.Router()

FundRoutes.post('/', FundController.doTransference)
FundRoutes.get('/:transactionId', FundController.getStatus)


export default FundRoutes