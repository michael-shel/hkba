'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

const { sanitizeEntity } = require('strapi-utils');
module.exports = {
  async findOne(ctx) {
    const { id } = ctx.params;
    const entity = await strapi.services.blog-article.findOne({ id });
    entity.Content = entity.Content.replace('src="/', `src=\\"${strapi.config.get('server.url')}/`); // Here we modify the 'Content' and add your website "url" to it
    return sanitizeEntity(entity, { model: strapi.models.blog-article });
  },
};
