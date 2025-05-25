const { tasks } = require('gulp-cli/lib/shared/options/cli-options')
const mongoose = require('mongoose')

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true},
  description: String,
  status: { type: Boolean, default: false},
  createdAt: { type: Date, defautl: Date.now }
})

module.exports = mongoose.model('Task', taskSchema)