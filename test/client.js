const axios = require('axios');
// YTA0N2ZkNDcwZTJmNTc5YWUwYTFmOWExYzUyMzI3M2Y6M2Y1NDRhODVhNTFkOTI1MjhkMGM2NGIwNmVlYzJjNWI=
//a047fd470e2f579ae0a1f9a1c523273f
//3f544a85a51d92528d0c64b06eec2c5b
module.exports =  axios.create({
    baseURL: 'https://api.aircall.io/v1/',
    headers: { 'Authorization': 'Basic '+ btoa(process.env.API_ID + ':' + process.env.API_TOKEN) }
       
})
