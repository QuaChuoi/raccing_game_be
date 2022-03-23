'use strict';

/**
 *  race-result controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::race-result.race-result', ({ strapi }) =>  ({
    async find(params) {
        // some logic here
        // const { results, pagination } = await super.find(params, {
        //     populate: '*',
        // });
        const entries = await strapi.entityService.findMany('api::race-result.race-result', {
            populate: ['runner_results'],
          });
        // some more logic
      
        // return { results, pagination };
        return entries;
      }
}));