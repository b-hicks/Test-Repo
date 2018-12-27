const csvFilePath='customer-data.csv'
const csv=require('csvtojson')
const fs = require('fs')
const path = require('path')

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const filename = process.argv[2] + ".json"
    const json = JSON.stringify(jsonObj)
    fs.writeFileSync(path.join(__dirname, filename), json)
}).error((error)=>{
    console.log(eror)
})
