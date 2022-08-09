import * as yup from 'yup';
import { Exception } from '../helpers/exception';


const createSchema = yup.object().shape({
    accountOrigin: yup.string().max(255).required("The field 'accountOrigin' is required!"),
    accountDestination: yup.string().max(255).required("The field 'accountDestination' is required!"),
    value: yup.number().min(0.01).required("The field 'value' is required!"),
})




const checkSchema = yup.object().shape({
    transactionId: yup.string().max(255).required("The transaction id is required!")
})


export class FundValidations{
    static create(data: any) {
        try {
            createSchema.validateSync(data)
            const { accountOrigin, accountDestination, value } = data

            if( accountOrigin === accountDestination ) throw new Exception("The origin account and destination account can't be the same", 400)
            if (value < 0.01) throw new Exception('The minimum value to transfer is 0.01', 400)

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