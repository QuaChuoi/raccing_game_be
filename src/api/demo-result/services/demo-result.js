'use strict';

/**
 * demo-result service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::demo-result.demo-result');
