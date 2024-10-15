const Datastore = require('nedb');
const db = new Datastore({ filename: 'database/ads.db', autoload: true });

function saveAd(adData) {
  db.insert(adData, (err, newDoc) => {
    if (err) console.error('Error saving ad:', err);
  });
}

function getAdsToPlay(callback) {
  const now = new Date();
  db.find({ from_date: { $lte: now }, to_date: { $gte: now } }).sort({ position: 1 }).exec(callback);
}

function cleanUpOldAds() {
  const now = new Date();
  db.remove({ to_date: { $lt: now } }, { multi: true }, (err, numRemoved) => {
    if (err) console.error('Error removing old ads:', err);
  });
}

module.exports = {
  saveAd,
  getAdsToPlay,
  cleanUpOldAds,
};
