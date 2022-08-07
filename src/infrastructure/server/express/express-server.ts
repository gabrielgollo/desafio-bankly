import express, { Request, Response, NextFunction } from "express";
import { IServer } from "../interface/server";
import Routes from './routes'
import { requestLogger } from "../../../middlewares/request-logger";


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

        this.server.use('/', (req: Request, _res: Response, next: NextFunction) => {
            requestLogger(req)
            next()
        })
        

        this.server.use('/', Routes)
    }
}

export default ExpressServer;