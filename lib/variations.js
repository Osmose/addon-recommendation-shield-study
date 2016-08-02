const { Recommender } = require('./Recommend.js');
const { Log } = require('lib/ConsoleLog.js');
const simplePrefs = require('sdk/simple-prefs');

Log.debug(Recommender);
const Rec = new Recommender();

const variations = {
  'default'() {
    Rec.start();
  },
  'autoOpenPanel'() {
    simplePrefs.prefs.autoOpenPanel = true;
    Rec.start();
  },
  'contol'() {},
};

function isEligible() {
  return true;
}

function cleanup() {
  Rec.destroy();
}

module.exports = {
  isEligible,
  cleanup,
  variations,
};
