const restaurantEndpoint = "https://api.yelp.com/v3/categories/restaurants/";
const axios = require('axios').default;

const queryRestaurants = (location, price) => {

  let queryString = restaurantEndpoint;

  axios.get(queryString, {
    method: 'get',
    headers: {
      'Authorization': `Bearer ${process.env.yelp_api_key}`
    }
  })
    .then(response => {
      console.log(response.data.error)
    })
    .catch(err => {
      console.log(err)
    })
}

queryRestaurants("miami", "$")