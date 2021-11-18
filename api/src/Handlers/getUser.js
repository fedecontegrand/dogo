const { User } = require('../db');
const { Pet } = require('../db');

async function getUser(req, res, next) {

    const {
        email,
        family_name,
        given_name,
        nickname,
        picture,
        } =req.body.user
    const sub=req.params.sub

    try {
            var userSearched = await User.findOrCreate({
                where: {id: sub}
                , attributes: { exclude: ["createdAt", "updatedAt"],
                },
                defaults:{
                    id:sub, 
                    firstName: given_name,
                    lastName: family_name,
                    nickname: nickname,
                    picture: picture,
                    email: email,
                }
            })

            res.json(userSearched[0])

    } catch (error) {
        next(error)
    }
};

module.exports = { getUser };