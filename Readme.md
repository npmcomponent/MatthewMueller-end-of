*This repository is a mirror of the [component](http://component.io) module [matthewmueller/end-of](http://github.com/matthewmueller/end-of). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/matthewmueller-end-of`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# end-of

  Check to see if you're at the end of an input element or textarea. Useful for "drifting" textareas with additional padding at the bottom.

## Installation

    $ component install matthewmueller/end-of

## Example

```js
var endOf = require('end-of'),
    textarea = document.getElementById('content');

endOf(textarea, function(end) {
  if (!end) return;
  textarea.scrollTop = textarea.scrollHeight;
})
```

## API

### endOf(el, fn)

Initialize the keydown listener on `el`.

## License

  MIT
