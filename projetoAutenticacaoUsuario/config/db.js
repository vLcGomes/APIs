const { MongoClient } = require('mongodb')
require('dotenv').config()

const URL = process.env.URL
const client = new MongoClient(URL)
const dbName = 'userManager'
let tasks

async function connection() {
  try {
    await client.connect()
    console.log('Connectado')
    const db = client.db(dbName)
    tasks = db.collection('users')
  } catch(e) {
    return e
  }
  
}

function getTasksCollection() {
  if (!tasks) {
    throw new Error('Banco de dados ainda não foi connectado.')
  }
  return tasks
}

module.exports = {
  connection, 
  getTasksCollection
}