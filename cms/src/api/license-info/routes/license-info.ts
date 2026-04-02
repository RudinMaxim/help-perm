import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::license-info.license-info', {
  config: {
    find: { auth: false },
  },
});
