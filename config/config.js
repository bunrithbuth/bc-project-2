module.exports = { 
    "development": {
      "username": process.env.CLEARDB_USERNAME,
      "password": process.env.CLEARDB_PASSWORD,
      "database": process.env.CLEARDB_DB_NAME,
      "host": process.env.CLEARDB_HOST_URL,
      "dialect": "mysql"
    },
    "test": {
      "username": process.env.CLEARDB_USERNAME,
      "password": process.env.CLEARDB_PASSWORD,
      "database": process.env.CLEARDB_DB_NAME,
      "host": process.env.CLEARDB_HOST_URL,
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.CLEARDB_USERNAME,
      "password": process.env.CLEARDB_PASSWORD,
      "database": process.env.CLEARDB_DB_NAME,
      "host": process.env.CLEARDB_HOST_URL,
      "dialect": "mysql"
    }
  }
  
