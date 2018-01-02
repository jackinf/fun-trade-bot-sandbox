const Gdax = require('gdax');
const publicClient = new Gdax.PublicClient();

publicClient.getProducts(getProductsCallback);

function getProductsCallback(error, response, data) {
    if (error) {
        // handle the error
        console.log(error);        
    } else {
        // work with data
        console.log(data);
    }
}