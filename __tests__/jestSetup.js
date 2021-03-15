const path = require('path')

const environment = process.env.NODE_ENV || 'test'
const envPath = path.join(__dirname, environment + '.env')

require('dotenv').config({ path: envPath })
