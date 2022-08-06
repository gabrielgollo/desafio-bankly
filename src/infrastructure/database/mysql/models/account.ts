import { DataTypes, Sequelize } from "sequelize/types";


const sequelize = new Sequelize('sqlite::memory')

export const AccountModel = sequelize.define('Account', {
    accountNumber: DataTypes.UUIDV4,
    name: DataTypes.STRING,
    cpf: DataTypes.STRING,
    rg: DataTypes.STRING,
    birthday: DataTypes.STRING,
    balance: DataTypes.NUMBER,
    concurrency: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
})