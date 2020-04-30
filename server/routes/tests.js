const { Router } = require('express')
const axios = require('axios')

const router = Router()

// https://flaviocopes.com/node-axios/
router.get('/tests', async function( req, res ) {
    let url = `${process.env.SVC_URL}/api/v1/clients`;
    try {
        let response = await axios.get(url);
        res.status(200).send(response.data); 

    } catch (error) {
        res.status(500).send(error); 
    } 
});

module.exports = router