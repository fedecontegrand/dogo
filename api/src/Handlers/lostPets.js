const { LostPet } = require('../db');
const { User } = require('../db');

async function lostPets(req, res, next) {

    try {
            var allLostPets = await LostPet.findAll({
                attributes: { exclude: ["createdAt", "updatedAt"]},
                include:{model:User,attributes:{exclude:["createdAt", "updatedAt"]}}
            }
            )            

            res.json(allLostPets)

    } catch (error) {
        next(error)
    }
};

module.exports = { lostPets };