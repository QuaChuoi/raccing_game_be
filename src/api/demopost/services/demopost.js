'use strict';

/**
 * demopost service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demopost.demopost', ({ strapi }) =>  ({
    async find(params) {
        // some logic here
        const { results, pagination } = await super.find(params);
        // some more logic
      
        return { results, pagination };
      }
}));