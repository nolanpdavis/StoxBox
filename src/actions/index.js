import constants from '../constants'

export default {

	companyReceived: (company) => {
		return {
			type: constants.COMPANY_RECEIVED,
			company: company
		}
	}

}
