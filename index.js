const express = require('express')

const app = express()

app.get('/teste', (req, res) => {
    return res.json({hello: 'world 100'})
})

app.listen(3333)