const contentManager = require('./contentManager');

let currentAdElement = document.getElementById('current-ad');
let nextAdElement = document.getElementById('next-ad');

function playAdsInLoop(ads) {
  let index = 0;

  function playNextAd() {
    const currentAd = ads[index];
    const nextAd = ads[(index + 1) % ads.length]; 

    
    nextAdElement.innerHTML = contentManager.generateAdContent(nextAd);

    
    currentAdElement.innerHTML = contentManager.generateAdContent(currentAd);
    setTimeout(() => {
      
      currentAdElement.style.opacity = 0;
      nextAdElement.style.opacity = 1;

      
      [currentAdElement, nextAdElement] = [nextAdElement, currentAdElement];
      
      
      index = (index + 1) % ads.length;
      playNextAd();
    }, currentAd.length); 
  }

  playNextAd();
}

module.exports = {
  playAdsInLoop,
};
