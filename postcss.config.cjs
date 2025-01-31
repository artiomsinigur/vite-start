module.exports = {
  plugins: {
    'postcss-nested': {},
    'postcss-sorting': {
      order: [
        'custom-properties',
        'dollar-variables',
        'declarations',
        'rules',
        'at-rules',
      ],
      'properties-order': ['position', 'top', 'display', 'z-index'],
      'unspecified-properties-position': 'bottom',
    },
  },
};
