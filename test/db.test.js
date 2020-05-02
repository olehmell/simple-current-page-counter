const client = require('../server/database/connection')

test('Testing connetion to MongoDB', async () => {
    let collection = undefined

    try {
        await client.connect()
        collection = client.db("counter").collection("users");
    } catch (err) {
        console.error(err)
    }

    expect(collection).not.toBeUndefined(undefined)
})

const mockData = { host: 'localhost', url: '/test', date: new Date() }

test('Testing insert to MongoDB', async () => {
    let result = undefined

    try {
        await client.connect()
        collection = client.db("counter").collection("users");
        data = await collection.insert(mockData)
        result = data.ops.pop()
    } catch (err) {
        console.error(err)
    }

    expect(result).toEqual(mockData)
})
