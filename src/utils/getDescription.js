import superagent from 'superagent'

export function getDescription(company, callback){

    superagent
    .get('https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&titles=' + company)
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
