var push =require('web-push')

// let vapidKeys =push.generateVAPIDKeys();

// console.log(vapidKeys)


let vapidKeys={
    publicKey:'BMeeoaZLn3kdro5ba21vzTM6NnQ33JZG1jTjXRN8pUacDDsXT9U0qu5gxUcfW9Kf0oY5VmJsRJ6ZGNA5Xvq-e4Y',
    privateKey:'0RjfytzrFe0G8RUCms_PyjiAKZRqOr0sYfivmxtybV0'
}

push.setVapidDetails('mailto:test@code.co.uk',vapidKeys.publicKey,vapidKeys.privateKey)

let sub={};

push.sendNotification(sub , 'test message')