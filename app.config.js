module.exports = ({ config }) => ({
  ...config,
  slug: 'tokiori',
  name: 'tokiori',
  extra: {
    eas: {
      projectId: process.env.EAS_PROJECTID,
    },
  },
});
