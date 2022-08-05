import * as express from 'express'

const Router = express.Router()

Router.get('/', (req, res) => {
    console.log(req.params)
    
    res.status(200).json({
        message: 'Hello World!'
    })
})

Router.put('account/create', (req, res) => {
    res.status(200).json({
        message: 'Conta Criada com sucesso!'
    })
})



export default Router