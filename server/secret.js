require('dotenv').config()

const port = process.env.PORT || 4000
const dburl = process.env.DATABASE_URL


module.exports={
    port,
    dburl,
}