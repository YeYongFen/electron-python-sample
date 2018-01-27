##   Electron Application with python core  ##

This article shows you how to develop a electron Application whose engine written in python

###How to communicate with fontend and backend ###
We can  use socket. Luckily, [zerorpc](http://www.zerorpc.io/) fits our needs here because it supports Python and Node.js



### Python part  ###
```python
import zerorpc
import sys

class HelloRPC(object):
    def hello(self, name):
		
        return "Hello, %s" % name

s = zerorpc.Server(HelloRPC())
s.bind("tcp://127.0.0.1:8888")
print("port:8888")
sys.stdout.flush()   //trigger callback  of child_process in nodejs
s.run()

```


### nodejs part  ###
```javascript

let script = path.join(__dirname, "./dist/kk.exe")
var pyProc = require('child_process').execFile(script)
pyProc.stdout.on('data', function (data) {
    console.log('output from cmd：' + data);
});

```
