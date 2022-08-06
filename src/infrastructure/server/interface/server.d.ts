export interface ServerInterface{
    start: (SERVER_PORT: string, startMessage: string, logger: (message:string) => void) => void
}