# amazon-echo-onlaunch
A simple, no-dependency bootstrapping tool for quickly creating Amazon Alexa Skills in Node.js

## Installation
```shell
$ npm i --save amazon-echo-onlaunch
```

## Usage
In the index.js file of your Alexa Skill:
```js
const Alexa = require('amazon-echo-onlaunch');
const myCustomOnLaunchFunc = require('./myCustomOnLaunchCode');

exports.handler = (event, context) => new Alexa(event, context, myCustomOnLaunchFunc);
```

In your custom code file:
```js
function myCustomOnLaunchFunc(callback) {
  callback('The custom string you want Alexa to say');
}

module.exports = myCustomOnLaunchFunc;
```

## Limitations
* The function you pass into the Alexa constructor must take a callback as an argument and invoke that callback with a string.

* This package currently only supports simple "call-and-response" interactions with Alexa. For more advanced interactions that require persisting state or managing authentication, see Amazon's [official documentation](https://developer.amazon.com/docs/custom-skills/understanding-custom-skills.html).
