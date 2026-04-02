import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::ui-content.ui-content', {
  config: {
    find: { auth: false },
  },
});
