const express = require('express')

const app = express()

app.get('/teste', (req, res) => {
    return res.json({hello: 'world 1'})
})

app.listen(3333)