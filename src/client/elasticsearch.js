import elasticSearch from 'es7';


function getElasticSearchClient() {
    try {
        const client = new elasticSearch.Client({
            node: 'http://localhost:9200',
            log: 'trace', //it could be warning or success, etc.
        }, console.log('connected'));
        return client;   
    
    } catch (error) {
        console.log({message: 'Elastic search connetion error: '}, error);
    }
}

export default getElasticSearchClient;