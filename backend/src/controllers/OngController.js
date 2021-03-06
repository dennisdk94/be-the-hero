const connection = require('../database/connection');

const crypto = require('crypto');

module.exports = {

    //Métodos para listar todas as ongs
    async index(request, response) {
            const ongs = await connection('ongs').select('*');
        
            return response.json(ongs);
    },

    //Função para retornar add ongs
    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');
    
        //await aguarda a instrução ser finalizada para continuar o código
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
    
        return response.json({ id });
    }
};