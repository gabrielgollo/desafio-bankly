import { Request, Response } from "express"
import FundService from "../../services/fund-service"
import { FundValidations } from "../../validations/fund-validations"

export default class FundController{
    static async doTransference(request: Request, response: Response){
        const { body } = request;
        try {
            FundValidations.create(body);
            
            const transactionId = await FundService.processMessage(body);

            response.status(200).json({
                transactionId,
                message: 'Transação criada com sucesso!',
                status: 200
            })
        } catch (error: any) {
            response.status(error.statusCode || 500).json({
                message: error.message,
                status: error.statusCode
            })
        }
    }

    static getStatus(request: Request, response: Response) {
        const { params } = request
        try {
            FundValidations.create(params)
            response.status(200).json({
                message: 'Conta criada com sucesso!',
                status: 200
            })
        } catch (error: any) {
            response.status(error.statusCode).json({
                message: error.message,
                status: error.statusCode
            })
        }
    }
}