import amqp, { Connection } from 'amqplib/callback_api';

const { AMQP_HOST='amqp://guest:guest@localhost:5672', AMQP_QUEUE_NAME='' } = process.env

let connection:any  = null;
let channel:any = null;
export default class RabbitMQService {
    static createConnection(){
        return new Promise((resolve, reject)=>{
            amqp.connect(AMQP_HOST, (error:any, _connection:Connection)=>{
                if(error){
                    reject(error)
                }
                connection = _connection
                resolve(_connection)
            })
        })
    }

    static async createChannel() {
        const _connection = await RabbitMQService.getOrCreateConnection();
        return new Promise((resolve, reject) => {
            _connection.createChannel((errorChannel: any, _channel: any) => {
                if(errorChannel){
                    reject(errorChannel)
                }
                channel = _channel;
                resolve(_channel)

            })
        })
    }

    static getOrCreateConnection(){
        if(connection){
            return connection
        }
        return RabbitMQService.createConnection()
        
    }

    static getOrCreateChannel(){
        if(channel){
            return channel
        }
        return RabbitMQService.createChannel()
        
    }

    static async sendMessage(message: string) : Promise<void>{
        await RabbitMQService.getOrCreateConnection()
        await RabbitMQService.getOrCreateChannel()

        channel.assertQueue(AMQP_QUEUE_NAME, { durable: true });
        channel.sendToQueue(AMQP_QUEUE_NAME, Buffer.from(message))
    }
}
