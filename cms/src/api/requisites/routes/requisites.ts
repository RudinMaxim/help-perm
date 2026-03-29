import { factories } from '@strapi/strapi';
export default factories.createCoreRouter('api::requisites.requisites', {
  config: {
    find: { auth: false },
  },
});
