const db = require('./../models');

/**
 * @param {*} req
 * @param {*} res
 * @return
 */

exports.createtemplate = async function (req, res) {
    try {

        const createtemp = await db.whatsapp_templates.create({
            "name": req.body.name,
            "template": req.body.template,
        });

        return res.json({
            status: "success",
            message: "created the template",
            data: {
                template: createtemp
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