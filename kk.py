import zerorpc
import sys

class HelloRPC(object):
    def hello(self, name):
		
        return "Hello, %s" % name

s = zerorpc.Server(HelloRPC())
s.bind("tcp://127.0.0.1:8888")
print("port:8888")
sys.stdout.flush()
s.run()


