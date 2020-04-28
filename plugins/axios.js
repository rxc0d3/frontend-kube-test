export default function ({ $axios, redirect }, inject) {
    // Create a custom axios instance
    const api = $axios.create({
        headers: {
            common: {
                "x-request-id": 'x-request-id',
                "x-b3-traceid": 'x-b3-traceid',
                "x-b3-spanid": 'x-b3-spanid',
                "x-b3-parentspanid": 'x-b3-parentspanid',
                "x-b3-sampled": 'x-b3-sampled',
                "x-b3-flags": 'x-b3-flags',
                "x-ot-span-context": 'x-ot-span-context',
                "user-agent": 'user-agent',
            }
        }
    })

    // Inject to context as $api
    inject('api', api)
}