import { Sequelize } from "sequelize";

const { MYSQL_DATABASE='TEST', MYSQL_HOST='localhost', MYSQL_USER='admin', MYSQL_PASSWORD='admin', MYSQL_PORT } = process.env

const sequelize = new Sequelize(MYSQL_DATABASE, MYSQL_USER, MYSQL_PASSWORD, {
    host: MYSQL_HOST,
    port: typeof MYSQL_PORT==='string'?  Number(MYSQL_PORT) : 3306,
    // one of our supported dialects:
    // 'mysql', 'mariadb', 'postgres', 'mssql', 'sqlite', 'snowflake', 'db2' or 'ibmi'
    dialect: 'mysql'
  })

async function startConnection(){
    try {
        await sequelize.authenticate()
        console.log('MySql Connection has been established successfully.');
    } catch (error: any) {
        console.error('Unable to connect to the database:', error.message);     
    }
}

export { sequelize, startConnection }