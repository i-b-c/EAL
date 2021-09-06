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
    callUpdate,
    slugify
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

            // if(data.authors) {
            //     let addedIDs = await addPersonAndRoleFromRole(data.authors)
            // }
            // beforeResult = await strapi.query(modelname).find({ id: params.id }) 
            // console.log('kysitud data', JSON.stringify(beforeResult, 0, 2 ))

            data.slug_et = data.name_et ? slugify(data.name_et +' '+ params.id) : null
            data.slug_en = data.name_en ? slugify(data.name_en +' '+ params.id) : null
            data.slug_ru = data.name_ru ? slugify(data.name_ru +' '+ params.id) : null

        },
        async afterUpdate(result, params, data){
            // console.log('\nafterUpdate R', JSON.stringify(result, 0, 2), '\nafterUpdate P', params, '\nafterUpdate D', data )

            // if(result.authors) {
            //     await dealRolesInComponent(result, modelname, beforeResult, false) 
            // }

        },
        async afterDelete(result, params){
            // console.log('afterDelete result: ', JSON.stringify(result, 0, 2))

            // console.log('beforeResult', beforeResult)
            // await dealRolesInComponent(result, modelname, result, true)

        }
    }
};
