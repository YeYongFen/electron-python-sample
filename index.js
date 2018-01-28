var path = require("path")
const { exec } = require('child_process');
var child_process = require('child_process');
/*
const selectPort = () => {
  pyPort = 88884
  return pyPort
}

const createPyProc = () => {
  let port = '' + selectPort()
  let script = path.join(__dirname, "kk.py")
  pyProc = require('child_process').spawn('python', [script, port])
  if (pyProc != null) {
    console.log('child process success')
  }
  
  
  pyProc.stdout.on('data', function (data) {
    console.log('标准输出：' + data);
	});
  
  
  
}

createPyProc()
*/

//let script = path.join(__dirname, "./dist/kk.exe")
//var pyProc = require('child_process').execFile(script)

  let script = path.join(__dirname, "kk.py")
  pyProc = require('child_process').spawn('python', [script])

pyProc.stdout.on('data', function (data) {
    console.log('output from cmd：' + data);
});





//etInterval(function(){console.log('child process success')},1000)

