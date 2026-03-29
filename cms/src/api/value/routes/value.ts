import { factories } from '@strapi/strapi';
export default factories.createCoreRouter('api::value.value', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
});
