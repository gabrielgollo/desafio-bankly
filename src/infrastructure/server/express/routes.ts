import express, { Request, Response} from 'express'

const Routes = express.Router()
import AccountRoutes from '../../../controllers/account/account.routes'


Routes.get('/', (_req: Request, res: Response) => {
    res.status(200).json({
        message: 'Hello World!'
    })
})



Routes.use('/account/', AccountRoutes)



export default Routes