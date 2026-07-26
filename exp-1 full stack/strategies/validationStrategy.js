const strategies = {
  twitter: {
    limit: 280,
    validate: (text) => text.length <= 280,
  },

  linkedin: {
    limit: 3000,
    validate: (text) => text.length <= 3000,
  },

  instagram: {
    limit: 2200,
    validate: (text) => text.length <= 2200,
  },
};

export default strategies;