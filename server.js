const express = require('express')

const app = express()

app.get('/', (req, res) => res.send('Hello word'))

const port =  process.env.PORT || 5000

app.listen(port, () => console.log(`Server runnign on port ${port}`))
