import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateReadingService } from '../services/CreateReadingService'

class CreateReadingController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const createReadingService = new CreateReadingService()

        const reading = await createReadingService.execute();

        reply.send(reading)
    }
}

export { CreateReadingController }