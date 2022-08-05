export default interface QueueInterface {
    sendMessage: (message: string) => Promise<void>
}