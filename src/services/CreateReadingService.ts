import prismaClient from "../prisma"

class CreateReadingService{
    async execute(){
        console.log("ROTA FOI CHAMADA");

        return { ok: true }
    }
}

export { CreateReadingService }