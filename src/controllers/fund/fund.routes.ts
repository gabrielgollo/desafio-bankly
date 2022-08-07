import FundController from "./fund-controller";
import express from 'express'
const FundRoutes = express.Router()

FundRoutes.post('/status', FundController.getStatus)


export default FundRoutes