import express from 'express';
import connectMongoDB from './src/mongo/connect.js';
import getElasticSearchClient from './src/client/elasticsearch.js';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './src/routes/user.route.js';
import authRoute from './src/routes/auth.route.js';
import productRoute from './src/routes/product.route.js';
import movieRouter from './src/routes/movie.route.js';

dotenv.config();

const app = express();
const port = process.env.port || 4000;

app.use(express.json());
app.use(cors());
app.use('/user', userRoute);
app.use('/auth', authRoute);
app.use('/product', productRoute)
app.use('/movie', movieRouter);

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



app.listen(port, () => console.log('server running'));
