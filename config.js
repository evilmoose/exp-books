/** Common config for bookstore. */


let DB_URI = `postgres://hcstjkno:9G9Hw9nBY5K87uNHZPnFHI9jeQzPLF5r@kashin.db.elephantsql.com`;

if (process.env.NODE_ENV === "test") {
  DB_URI = `${DB_URI}/hcstjkno`;
} else {
  DB_URI = process.env.DATABASE_URL || `${DB_URI}/hcstjkno`;
}


module.exports = { DB_URI };