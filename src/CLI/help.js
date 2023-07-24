const terminal = require('../Helpers/Terminal.js');
const {spawn} = require('child_process');
const Logo = require('../Helpers/Logo')
module.exports = {
  command:['help'],
  params:[],
  Nhatcoder: async() => {
    const child = spawn('clear',{
      shell:true
    })
    Logo();
  }
}