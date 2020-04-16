# aido-emitters

Aido emitters is a simple plugin that exposes the `emitSlash` and `emitAction` functions on the Slash class.

## Installation

The aido-emitters package can be installed with your package manager of choice :

```sh
npm install --save aido-emitters
# or
yarn add aido-emitters
```

To use it in your Aido application, you'll need to import it as a plugin :

```javascript
const aidoEmitters = require('aido-emitters')

aido.init({
  plugins: [aidoEmitters],
})
```

## Usage

```javascript
class MySlash extends Slash {
  myMethod() {
    // Emit a Slash (this is the equivalent of the user typing "/fnord some text" in Slack)
    this.emitSlash(this.user.slackId, "fnord", "some text")
  }

  otherMethod() {
    // Emit an action (this is the equivalent of the user clicking a button or submitting a dialog on your "fnord" view)
    this.emitAction(this.user.slackId, "fnord", "myMethod")
  }
}
```
