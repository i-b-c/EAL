
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const path = require('path')
let helper_path = path.join(__dirname, '..', '..', '..', '/helpers/lifecycle_manager.js')

const {
    callUpdate,
    slugify
} = require(helper_path)

let beforeResult = {}
const modelname = (__dirname.split(path.sep).slice(-2)[0])

module.exports = {

	lifecycles: { 
	    async afterCreate(result, data) {
			await callUpdate(result, modelname)
	    },
	    async beforeUpdate(params, data) {
	    	if(!data.surname) {
	    		data.forename = data.fullname.split(" ").slice(0, 1)[0]
	    		data.surname = data.fullname.split(" ").slice(1).join(' ')
	    	}
	    	data.slug = slugify(data.fullname +' '+ params.id)

	    },
	    async afterUpdate(result, params, data) {


	    },


	}

};
