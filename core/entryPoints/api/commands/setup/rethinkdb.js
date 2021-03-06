module.exports.buildConfig = (dbConfig, config) => {
  return {
    'hosts': [
      {
        'host': dbConfig.host,
        'port': dbConfig.port
      }
    ],
    'username': dbConfig.username,
    'password': dbConfig.password,
    'database': dbConfig.database
  }
}

module.exports.handle = 'rethinkdb'
