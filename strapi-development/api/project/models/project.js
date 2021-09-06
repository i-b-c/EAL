'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#lifecycle-hooks)
 * to customize this model
 */

const path = require('path')
let helper_path = path.join(__dirname, '..', '..', '..', '/helpers/lifecycle_manager.js')

const {
    addPersonAndRoleFromRole,
    dealRolesInComponent,
    callUpdate
} = require(helper_path)

let beforeResult = {}
const modelname = (__dirname.split(path.sep).slice(-2)[0])

module.exports = {
    lifecycles: {

        async afterCreate(result, data) {
            // console.log('afterCreate result', result)
            await callUpdate(result, modelname)
        },
        async beforeUpdate(params, data) {
            // console.log('\nBefore D', data, '\nBefore P',  params)
            // console.log('\nBefore ', data.roles_in_project.length > 0)

            if(data.customers) {
                console.log(data.customers)// siia vaja
            }
            if(!data.namePrivate || data.namePrivate === '') {
                data.namePrivate = data.title_et? data.title_et + params.id : null
            }


        },
        async afterUpdate(result, params, data){
            // console.log('\nafterUpdate R', JSON.stringify(result, 0, 2), '\nafterUpdate P', params, '\nafterUpdate D', data )

        },
        async afterDelete(result, params){
            // console.log('afterDelete result: ', JSON.stringify(result, 0, 2))

        }
    }
};