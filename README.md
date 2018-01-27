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
sys.stdout.flush()
s.run()

```


Give them a try:

- **Bold** (`Ctrl+B`) and *Italic* (`Ctrl+I`)
- Quotes (`Ctrl+Q`)
- Code blocks (`Ctrl+K`)
- Headings 1, 2, 3 (`Ctrl+1`, `Ctrl+2`, `Ctrl+3`)
- Lists (`Ctrl+U` and `Ctrl+Shift+O`)

### See your changes instantly with LivePreview ###

Don't guess if your [hyperlink syntax](http://markdownpad.com) is correct; LivePreview will show you exactly what your document looks like every time you press a key.

### Make it your own ###

Fonts, color schemes, layouts and stylesheets are all 100% customizable so you can turn MarkdownPad into your perfect editor.

### A robust editor for advanced Markdown users ###

MarkdownPad supports multiple Markdown processing engines, including standard Markdown, Markdown Extra (with Table support) and GitHub Flavored Markdown.

With a tabbed document interface, PDF export, a built-in image uploader, session management, spell check, auto-save, syntax highlighting and a built-in CSS management interface, there's no limit to what you can do with MarkdownPad.
