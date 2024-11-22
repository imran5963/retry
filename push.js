var push =require('web-push')

// let vapidKeys =push.generateVAPIDKeys();

// console.log(vapidKeys)


let vapidKeys={
    publicKey:'BL9Mcd7Tu6RJKJjndBcw8vP1BoTPq7KBuSBqvA24xtqEQdlhzGy4RRoaCNPj-B13tjr0xpPAKHUKhv-bQ17bsJc',
    privateKey:'-LGMsYyBVBVuRUC75vSFHPSJSj1qMHtGyjvkrq1j4rM'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub={};

push.sendNotification(sub , 'test message')