module.exports = {
    client: {
      includes: ["./src/**/*.{ts,tsx,gql}"],
      excludes: ["./src/app/generated/**"],
      service: {
        name: 'News Api',
        url: 'https://iwa-test.herokuapp.com/graphql'
      }
    }
  };