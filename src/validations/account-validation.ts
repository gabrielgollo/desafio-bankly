import { pt } from 'yup-locale-pt';
import * as yup from 'yup';
import * as languageConfigurator from '../configs/language.json'
import { Exception } from '../helpers/exception';
import {checkCpf} from '../utils/check-cpf'

yup.setLocale(pt)


const createSchema = yup.object().shape({
    name: yup.string().max(255).required("O campo 'nome' é obrigatório!"),
    cpf: yup.string().required("O campo 'cpf' é obrigatório").test('isCpfValid', 'CPF Inválido!', checkCpf),
    rg: yup.string().required("O campo 'rg' é obrigatório!"),
    birthday: yup.string().required("O campo 'birthday' é obrigatório!"),
    concurrency: yup.string().default(languageConfigurator.defaultConcurrency).oneOf(languageConfigurator.avaliableConcurrency)
})


const updateSchema = yup.object().shape({
    accountNumber: yup.string().required("O campo 'accountNumber' é obrigatório!"),
    name: yup.string().max(255).required("O campo 'nome' é obrigatório!"),
    cpf: yup.string().required("O campo 'cpf' é obrigatório").test('isCpfValid', 'CPF Inválido!', checkCpf),
    rg: yup.string().required("O campo 'rg' é obrigatório"),
    birthday: yup.date().required("O campo 'birthday' é obrigatório"),
    concurrency: yup.string().default(languageConfigurator.defaultConcurrency).oneOf(languageConfigurator.avaliableConcurrency)
})


export class AccountValidations{
    static create(data: any) {
        try {
            createSchema.validateSync(data)
        } catch (error:any) {
            throw new Exception(error.message, 400)
        }
    }
}