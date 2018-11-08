# Node.js Webpack Bytenode Demo

This demo is inspired by [nodejs-backend-bundling-experiment](https://github.com/dominique-mueller/nodejs-backend-bundling-experiment) from [@dominique-mueller]( https://github.com/dominique-mueller ) and the article about [How to Compile Node.js Code Using Bytenode?](https://hackernoon.com/how-to-compile-node-js-code-using-bytenode-11dcba856fa9).

## Story behind

A typical Node.js backend application like a rest api needs a `npm install` and a `npm start` to run on a server. This fits the needs on most projects and is easy to achieve. This also means that you always run the install command and probably get a different version of a node module or a sub module when they have updated. 

When you need to be compliant and your enterprise uses SDLC (Software Development Life Cycle) processes you will need a fix package with a fix version. It is also not so good to store the hole node_modules folders on a repository management system like Artifactory for your deployable. 

Another thing could be that there are many situations where you do not want to send your source code to a server to run your project. This can be the case if you sell your software to a client and run it on its server.

## Goal

In short, I want to create, bundle, compile, and run a Node.js REST API on a server without running `npm install`. 


## How to start

Run `npm install` and start the app by `node .` or `npm start`.

## Try out

After starting the server, open your browser at http://localhost:3000/. You will see a simple json response from the server, that it is running. When accessing http://localhost:3000/hello, you will respond with `World`. On any other routes you will get an 404 error. You can stop the server by using CTRL + C. No big magic.

## Bundle

The main purpose of this demo is bundling the app via webpack, compile it into V8 bytecode and ensure that this will run as well.

Execute the command `npm run build` to bundle the package and compile it to bytecode. To check if this is running as well, you can run `npm run start:prod` to run the compiled version.

## Production

You will need a server where you have Node.js >= 6.11 installed. To avoid installing bytenode in your project folder, you should install bytenode as global package as well. The only file, that is needed (from this demo) are the `app.bundle.jsc` (with a `c` at the end). You can run your packages with `bytenode -r app.bundle.jsc` (add the complete path depending on your file system for your own). Hint: use pm2 to make administration easier.


Best regards,

FK

(Frankfurt 2018)