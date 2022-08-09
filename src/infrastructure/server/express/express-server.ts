import express, { Request, Response, NextFunction } from "express";
import { IServer } from "../interface/server";
import Routes from './routes'

import swaggerJson from '../../../../swagger.json'
import swaggerUi from 'swagger-ui-express'

class ExpressServer implements IServer{
    server: express.Express;
    constructor(){
        this.server = express();
    }

    public start(SERVER_PORT: string, callbackFn: () => void): void{
        this.setRouterAndConfigs()

        this.server.listen(SERVER_PORT, () => {
            if(typeof callbackFn === 'function') {
                callbackFn()
            }
        })


    }

    private setRouterAndConfigs(){
        this.server.use(express.json())

        this.server.use('/', (_req: Request, _res: Response, next: NextFunction) => {
            //requestLogger(_req)
            next()
        })
        

        this.server.use('/', Routes)
        
        this.configureSwagger()
    }

    private configureSwagger(){
        this.server.use('/api-docs', 
            swaggerUi.serve,
            swaggerUi.setup(swaggerJson, { explorer: true })
        )
    }
}

export default ExpressServer;