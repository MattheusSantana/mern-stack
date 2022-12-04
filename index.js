import express from 'express';
import userRoute from './src/routes/user.route.js';
import connectMongoDB from './src/mongo/connect.js';
import getElasticSearchClient from './src/client/elasticsearch.js';
const app = express();

app.use(express.json());
app.use('/user', userRoute);

app.get('/', async (req, res )=> {
    const elasticClient = await getElasticSearchClient();
    const result = elasticClient.index({
        index: 'elastic_first_test',
        type: 'elastic_type_teste',
        body: {
            user: 'elkuser',
            password: 'aoba',
            email: 'email@email.com'
        }
    });
    res.send(result);
});


connectMongoDB();



app.listen(3000, () => console.log('server running'));
