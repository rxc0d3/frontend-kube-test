const { Router } = require('express')
const axios = require('axios')

const router = Router()

// Get Testinf
router.get('/tests', async function( req, res ) {
    console.log(process.env);
    try {
        let response = await axios.get('http://localhost:5000/api/v1/clients');
        res.status(200).send(response.data); 

    } catch (error) {
        res.status(500).send(error); 
    } 
});

module.exports = router