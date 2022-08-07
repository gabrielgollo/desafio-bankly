export interface IServer{
    public start: (SERVER_PORT: string, callbackFn: () => void) => void
}