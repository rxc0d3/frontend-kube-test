const { Router } = require('express')
const axios = require('axios')

const router = Router()

// Get Testinf
router.get('/tests', async function( req, res ) {
    let url = `${process.env.SVC_UR}/api/v1/clients`;
    try {
        let response = await axios.get(url);
        res.status(200).send(response.data); 

    } catch (error) {
        res.status(500).send(error); 
    } 
});

module.exports = router