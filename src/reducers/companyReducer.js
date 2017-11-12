import constants from '../constants'

var initialState = {
    currentCompany: {
            ticker: "AAPL",
            company: "Apple Inc."
    }
}

export default (state = initialState, action) => {
    let updated = Object.assign({}, state)

    switch (action.type) {
        case constants.COMPANY_RECEIVED:
            updated['currentCompany'] = action.company
            return updated

        default:
            return state
    }

}
