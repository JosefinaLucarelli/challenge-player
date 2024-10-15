const axios = require('axios');
const fs = require('fs');
const path = require('path');
const db = require('./db');


function downloadFile(url, filename) {
  const writer = fs.createWriteStream(filename);
  return axios({
    url,
    method: 'GET',
    responseType: 'stream',
  }).then((response) => {
    response.data.pipe(writer);
    return new Promise((resolve, reject) => {
      writer.on('finish', resolve);
      writer.on('error', reject);
    });
  });
}


function fetchAds() {
  return axios.get('https://api.mock.com/ads').then((response) => {
    const ads = response.data;
    ads.forEach((ad) => db.saveAd(ad));
  });
}


function generateAdContent(ad) {
  if (ad.type === 'image') {
    return `<img src="assets/${ad.url}" style="width:100%; height:100%; object-fit: ${ad.fill_screen ? 'fill' : 'contain'};" />`;
  } else if (ad.type === 'video') {
    return `<video src="assets/${ad.url}" autoplay loop style="width:100%; height:100%; object-fit: ${ad.fill_screen ? 'fill' : 'contain'};" />`;
  }
}

module.exports = {
  downloadFile,
  fetchAds,
  generateAdContent,
};
