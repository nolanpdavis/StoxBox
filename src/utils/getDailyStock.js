import superagent from 'superagent'

export function getDailyStock(ticker, callback){

    superagent
    .get('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + ticker + '&apikey=IDVAQJNIJEKATGPO')
    .query()
    .set('Accept', 'application/json')
    .end((err, response) => {
        if(err){
            callback(err, null)
            return
        }
        callback(null, response.body)
    })
}
