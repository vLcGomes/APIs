const { MongoClient } = require('mongodb')
require('dotenv').config()

const URL = process.env.URL
const client = new MongoClient(URL)
const dbName = 'taskManager'

async function connection() {
  try {
    await client.connect()
    console.log('Connectado')
    const db = client.db('taskManager')
    const tasks = db.collection('tasks')
  } catch(e) {
    return e
  }
  
}

main()