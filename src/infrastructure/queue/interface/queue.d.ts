export default interface IQueue {
    sendMessage: (message: string) => Promise<void>
}