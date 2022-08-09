import { Request, Response } from "express"
import FundService from "../../services/fund-service"
import { FundValidations } from "../../validations/fund-validations"

export default class FundController{
    static async doTransference(request: Request, response: Response){
        const { body } = request;
        try {
            FundValidations.create(body);
            
            const transactionId = await FundService.createTransaction(body);

            response.status(200).json({
                transactionId,
                message: 'Transaction created successfully!',
                status: 200
            })

            return {
                message: 'Transaction created successfully!',
                status: 200
            }

        } catch (error: any) {
            response.status(error.statusCode || 500).json({
                message: error.message,
                status: error.statusCode
            })

            return {
                message: error.message,
                status: error.statusCode
            }
        }
    }

    static async getStatus(request: Request, response: Response) {
        const { params } = request
        try {
            FundValidations.checkStatus(params)

            const { status, statusMessage } = await FundService.findTransaction(params.transactionId)

            const obj: any = {
                Status: status
            }

            if(statusMessage) obj["Message"] = statusMessage

            response.status(200).json(obj)

            return {
                status: status || 200,
                message: statusMessage || 'Success'
            }
        } catch (error: any) {
            response.status(error.statusCode).json({
                message: error.message,
                status: "Error",
                statusCode: error.statusCode
            })

            return {
                status: error.statusCode,
                message: error.message || 'Error'
            }
        }
    }
}