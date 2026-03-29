import { factories } from '@strapi/strapi';
export default factories.createCoreRouter('api::application.application', {
  config: {
    create: { auth: false },
  },
});
