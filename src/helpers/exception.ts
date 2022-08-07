export class Exception extends Error{
    statusCode: number
    constructor(error: string, statusCode: number){
        super(error)

        this.statusCode = statusCode || 500
    }
}