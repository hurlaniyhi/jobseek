const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 8080

app.use(express.static('public'))
app.get("*", (req,res)=>{
    res.sendFile(path.resolve(__dirname,'public/index.html'))
})

app.listen(port, ()=>{
    console.log(`server is up and running on port ${port}`)
})


// "scripts": {
//     "lint": "eslint /src --fix",
//     "build": "webpack",
//     "dev": "webpack-dev-server --open --hot",
//     "start": "node server.js",
//     "test": "jest --coverage",
//     "test-watch": "jest --watch",
//     "coveralls": "jest --coverage && cat coverage/lcov.info | coveralls"
//   },