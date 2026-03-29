import { factories } from '@strapi/strapi';
export default factories.createCoreRouter('api::step.step', {
  config: {
    find: { auth: false },
    findOne: { auth: false },
  },
});
