const defaultConfig=require('./config/default.js')

const test={...defaultConfig.database,connectionLimit:10}

console.log(test);