module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '86605c86931f094ac5e032267ec32865'),
  },
});
