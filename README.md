# webduino

Web components for Webduino

## Installation

```Shell
$ bower install webduino
```

## Usage

Insert webduino web-components and polyfill:

```
<script src='bower_components/webcomponentsjs/webcomponents.js'></script>
<link rel='import' href='bower_components/webduino/web-arduino.html'></link>
<link rel='import' href='bower_components/webduino/wa-led.html'></link>
```

Use it in your html:

```
<web-arduino id='board' device='device_id'>
  <wa-led id='led' pin='10'></wa-led>
</web-arduino>
```

Control it with javascript:

```javascript
window.addEventListener('WebComponentsReady', function() {
  var board = document.getElementById('board'),
    led = document.getElementById('led');

  board.on('ready', function () {
    led.on();
  });
});
```

## API

_(coming soon...)_

## See Also

[webduino-js](https://github.com/webduinoio/webduino-js) (The javascript core that powers webduino)

## [License](LICENSE)