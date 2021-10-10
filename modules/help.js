import array from './array.js';
import text from './text.js';
import date from './date.js';
import DOM from './DOM.js';
import event from './event.js';
// import csvToJson from './modules/csvToJson.js';
const topicMap = new Map(
  [
    ['array', array.help()],
    ['text', text.help()],
    ['date', date.help()],
    ['DOM', DOM.help()],
    ['event', event.help()],
  ]
)


export default {
  help(msg = 'Leave a message such as where this call is located.', ...topics) {
    if (topics.length === 0) {
      console.log(
        `${msg}\n\n\n`,
        [...topicMap.values()].join('\n\n\n')
      );
      return;
    };

    console.log(
      `${msg}`,
      topics.reduce((output, topic, i) => {
        return [...output, topicMap.get(topic)];
      }, '').join('\n\n\n')
    );
  }
}