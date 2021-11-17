import array from './array.js';
import text from './text.js';
import date from './date.js';
import DOM from './DOM.js';
import event from './event.js';
import utils from './utils.js';
import csvToJson from './csvToJson.js';
import shortcuts from './shortcuts.js';

/* USE CONSOLE.LOG({item})  */

const topicMap = new Map(
  [
    ['pipeline', 'pipeline(...functions) => initialValue =>'],
    ['array', array.help()],
    ['text', text.help()],
    ['date', date.help()],
    ['DOM', DOM.help()],
    ['event', event.help()],
    ['utils', utils.help()],
    ['csvToJson', csvToJson.help()],
    ['shortcuts', shortcuts.help()],
  ]
);

export default {

  help(msg = 'Leave a message such as where this call is located.', ...topics) {
    if (topics.length === 0) {
      console.info(
        `MESSAGE: ${msg}\n\n\n`,
        [...topicMap.values()].join('\n\n\n')
      );
    } else {
      console.info(
        `MESSAGE: ${msg}\n`,
        topics.reduce((acc, curr, i) => `${acc}\n\n${topicMap.get(curr)}`, '')
      );
    }
    return;
  }
}