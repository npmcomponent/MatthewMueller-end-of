
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
