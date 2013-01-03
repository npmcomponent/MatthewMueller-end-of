/**
 * Module dependencies
 */

var events = require('event');

/**
 * Export `end-of`
 */

module.exports = endOf;

/**
 * Initialize `end-of`
 *
 * @param {DOM Node} el
 * @param {Function} fn
 */

function endOf(el, fn) {
  events.bind(el, 'keyup', function(e) { return fn(check(e)); });
}

/**
 * Check
 *
 * Refactor of Tim Down's SO answer:
 * http://stackoverflow.com/a/3904819/145435
 */

function check(e) {
  var target = e.target,
      val = target.value,
      end = false;

  if (typeof target.selectionStart == "number") {
      // Non-IE browsers
      end = (target.selectionEnd == val.length);
  } else if (document.selection && document.selection.createRange) {
      // IE branch
      target.focus();
      var selRange = document.selection.createRange();
      var inputRange = target.createTextRange();
      var inputSelRange = inputRange.duplicate();
      inputSelRange.moveToBookmark(selRange.getBookmark());
      end = inputSelRange.compareEndPoints("EndToEnd", inputRange) === 0;
  }

  return end;
}
