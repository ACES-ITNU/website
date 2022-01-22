# Error

As web site is static one than there are not many errors which can be face by maintainer. but in this file i will let you know the possible error list and there solution.

## 1. Contact email is not working

This is comman issue when you trying to mail with help of js.

Error:

```bash
event - compiled client and server successfully in 200 ms (1193 modules)
SMTPError: authorization.failed (bad response on command 'QUNFUyNDMjEzSkpj': -5.7.8 Username and Password not accepted. Learn more at)
    at Function.create (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1073:21)
    at failed (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1729:44)
    at response (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1738:21)
    at caller (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1188:9)
    at response (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1422:21)
    at caller (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1188:9)
    at TLSSocket.<anonymous> (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1377:21)
    at Object.onceWrapper (events.js:482:26)
    at TLSSocket.emit (events.js:375:28)
    at TLSSocket.emit (domain.js:470:12) {
  code: 3,
  smtp: undefined,
  previous: SMTPError: bad response on command 'QUNFUyNDMjEzSkpj': -5.7.8 Username and Password not accepted. Learn more at
      at Function.create (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1073:21)
      at response (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1422:48)
      at caller (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1188:9)
      at TLSSocket.<anonymous> (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1377:21)
      at Object.onceWrapper (events.js:482:26)
      at TLSSocket.emit (events.js:375:28)
      at TLSSocket.emit (domain.js:470:12)
      at notify (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1101:24)
      at TLSSocket.watch (file:///home/zeel/Desktop/mycode/hakrthon/website/node_modules/emailjs/rollup/email.mjs:1115:17)
      at TLSSocket.emit (events.js:375:28) {
    code: 2,
    smtp: '535-5.7.8 Username and Password not accepted. Learn more at\n' +
      '535 5.7.8  https://support.google.com/mail/?p=BadCredentials nh18sm200353pjb.18 - gsmtp\r\n',
    previous: null
  }
}
```

Solution:

Solution is Simple you just have to change the email password and make sure in that google account less sure app is enable.

Wait that's not it. know you have to log  in netlify(web site host). than go to our site and than change the password in environment of website.

Than re deploy the website. 

Still face the issue than contact me(zeel-codder)


