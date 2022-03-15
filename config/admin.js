module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '2a0fec897e62c3298ac66c7cb22803c3'),
  },
});
