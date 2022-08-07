import express from 'express'
import FundRoutes from '../../../controllers/fund/fund.routes'

const Routes = express.Router()

Routes.use('/fund-transfer/', FundRoutes)


export default Routes