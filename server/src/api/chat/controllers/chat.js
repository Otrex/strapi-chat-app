'use strict';
const { admin } = require('../../../../config/firebase');

/**
 *  chat controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::chat.chat', ({ strapi }) => ({
  async find(ctx) {
    const response = await super.find(ctx);
    return response;
  },

  async update(ctx) {
    const response = await super.update(ctx);
    return response;
  },

  async findOne(ctx) {
    const response = await super.findOne(ctx);
    return response;
  },

  async delete(ctx) {
    const response = await super.delete(ctx);
    await notify(strapi, { message: 'An asset has been deleted' });
    return response;
  },
  
  async create (ctx) {
    try{
      const response = await super.create(ctx);
      await admin.messaging().sendToDevice(
        tokens.map(t => t.token),
        {
          notification: { title: "New Message", data: response },
        },
        {
          contentAvailable: true,
          priority: "high",
        },
      )
      .then((response) => {
        console.log("Successfully sent firebase message:", response);
      })
      .catch((error) => {
        console.log("Error sending firebase message:", error);
      });
      return response;
    }catch(e){
      throw new Error('error creating and sending chat')
    }
  }
}));