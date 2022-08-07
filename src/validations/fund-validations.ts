import { pt } from 'yup-locale-pt';
import * as yup from 'yup';
import { Exception } from '../helpers/exception';

yup.setLocale(pt)


const createSchema = yup.object().shape({
    accountOrigin: yup.string().max(255).required("O campo 'accountOrigin' é obrigatório!"),
    accountDestination: yup.string().max(255).required("O campo 'accountDestination' é obrigatório!"),
    value: yup.number().min(0).required("O campo 'value' é obrigatório!"),
})




const checkSchema = yup.object().shape({
    transactionId: yup.string().max(255).required("O id da transação é obrigatório!")
})


export class FundValidations{
    static create(data: any) {
        try {
            createSchema.validateSync(data)
        } catch (error:any) {
            throw new Exception(error.message, 400)
        }
    }

    static checkStatus(data:any){
        try {
            checkSchema.validateSync(data)
        } catch (error:any) {
            throw new Exception(error.message, 400)
        }
    }
}