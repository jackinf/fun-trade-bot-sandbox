import * as GTT from 'gdax-trading-toolkit';
import { GDAXFeed } from "gdax-trading-toolkit/build/src/exchanges";

const logger = GTT.utils.ConsoleLoggerFactory();
const products: string[] = ['BTC-USD', 'ETH-USD', 'LTC-USD'];
GTT.Factories.GDAX.FeedFactory(logger, products).then((feed: GDAXFeed) => {
    // Do stuff with the feed
    console.log(feed);
});