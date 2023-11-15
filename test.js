const dbConfig=require('./config/dbConfig.js')

const test={...dbConfig.development,connectionLimit:10}

console.log(test);