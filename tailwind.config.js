module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        backgroundImage: theme => ({
          'gradient-blue': 'linear-gradient(to left, #ABC5F3, #C2DEF4, #D5F2F4)',
        }),
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }