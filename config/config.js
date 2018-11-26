module.exports = { 
    "development": {
      "username": process.env.CLEARDB_USERNAME,
      "password": process.env.CLEARDB_PASSWORD,
      "database": "bc_project_2",
      "host": process.env.CLEARDB_DATABASE_URL,
      "dialect": "mysql"
    },
    "test": {
      "username": process.env.CLEARDB_USERNAME,
      "password": process.env.CLEARDB_PASSWORD,
      "database": "bc_project_2",
      "host": process.env.CLEARDB_DATABASE_URL,
      "dialect": "mysql"
    },
    "production": {
      "username": process.env.CLEARDB_USERNAME,
      "password": process.env.CLEARDB_PASSWORD,
      "database": "bc_project_2",
      "host": process.env.CLEARDB_DATABASE_URL,
      "dialect": "mysql"
    }
  }
  
