import express, { Request, Response } from "express";
import { ServerInterface } from "./interface/server";

const expressServer = express();

expressServer.get("/", (_request: Request, response: Response) => {
  return response.send("Hello!");
});

class ExpressServer implements ServerInterface{
    server: express.Express;
    constructor(){
        this.server = expressServer;
    }

    start(SERVER_PORT: string, startMessage: string, logger: (message:string) => void): void{

        expressServer.listen(SERVER_PORT, () => {
            if(startMessage && !logger) {
                console.info(startMessage)
            } else if( startMessage && typeof logger === 'function') {
                logger(startMessage)
            } 
        })

    }
}

export default ExpressServer;