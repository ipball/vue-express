const mongodb = require('mongodb');

async function loadCollection(collect) {
    // #cloud NODEJS
    // const client = await mongodb.MongoClient.connect
    // ('mongodb+srv://sandbox:123abc@cluster0-jgzdk.mongodb.net/test?retryWrites=true', {
    //     useNewUrlParser: true
    // });
    
    // #local NODEJS
    const client = await mongodb.MongoClient.connect
    ('mongodb://localhost:27017/vue_express', {
        useNewUrlParser: true
    });

    return client.db('vue_express').collection(collect);
}

module.exports = loadCollection;