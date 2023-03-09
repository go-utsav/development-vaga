const db = require('./../models');

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

exports.getmytrails = async function (req, res) {
    try {

        const gettrail = await db.get - my - trails.create({
            where: { id: req.params.id },
            // include: [(
            //     model: db.trails,
            //     as: 'usertrails'
            // )]

        });

        return res.json({
            status: "success",
            message: "found the trails",
            data: {
                template: gettrail
            }
        })
    } catch (err) {
        console.error(err);

        return res.json({
            status: "error",
            message: "Internal Server Error",
        });
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */

exports.deletetemp = async function (req, res, next) {
    try {
        const deletetemp = await db.whatsapp_templates.destroy({
            where: { id: req.params.id }
        });

        return res.json({
            status: "success",
            message: "deleted the template"
        })
    } catch (err) {
        console.error(err);

        return res.json({
            status: "error",
            message: "Internal Server Error",
        });
    }

}