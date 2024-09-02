import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateReadingController } from './controllers/CreateReadingController'

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true}
    })

    fastify.post("/reading", async(request: FastifyRequest, reply: FastifyReply) => {
        return new CreateReadingController().handle(request, reply)
    })
}