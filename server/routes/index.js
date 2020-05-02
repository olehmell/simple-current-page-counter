const log = require('../logger')

module.exports = function(app, db) {
    app.get('/count', async(_req, res) => {
        try {
            const count = await db.countDocuments()

            log.debug('Users count: ', count)
            res.json(count)
        } catch (error) {
            log.error(error)
            res.status(500).send({ error });
        }
    })

    app.get(/^([a-z0-9/?:&"]+$)/, async (req, res) => {
        const { url, headers: { host }} = req;
        const currentHost = { url, host, date: new Date() };

        try {
        const foundHostArray = await db.find({ url, host }).toArray();

        if (!foundHostArray.length) {
            log.info('This host is not insert')
            await db.insertOne(currentHost)
            log.info('Success insert')
        }

        const count = await db.countDocuments()

        log.debug('Users count: ', count)
        res.render('index', { count })
        } catch (error) {
            log.error(error)
            res.status(500).send({ error });
        }
    
    })
};
