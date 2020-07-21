const axios = require('axios');

module.exports =  axios.create({
    baseURL: 'https://api.aircall.io/v1/',
    headers: { 'Authorization': 'Basic '+ btoa(process.env.API_ID + ':' + process.env.API_TOKEN) }
       
})
