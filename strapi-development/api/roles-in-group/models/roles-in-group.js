'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const path = require('path')
let helper_path = path.join(__dirname, '..', '..', '..', '/helpers/lifecycle_manager.js')

const {
    callUpdate,
    addNamePrivate
} = require(helper_path)


const modelname = (__dirname.split(path.sep).slice(-2)[0])

module.exports = {
    lifecycles: {

        async afterCreate(result, data) {
            // console.log('afterCreate result', result)
            await callUpdate(result, modelname)
        },
        async beforeUpdate(params, data) {
            // console.log('\nBefore D', data, '\nBefore P',  params)
            data.name_private = await addNamePrivate(data, params, 'group', 'namePrivate')

        },
        async afterUpdate(result, params, data){
            // console.log('\nafterUpdate R', JSON.stringify(result, 0, 2), '\nafterUpdate P', params, '\nafterUpdate D', data )

        },
        async afterDelete(result, params){
            // console.log('afterDelete result: ', JSON.stringify(result, 0, 2))


        }
    }
};