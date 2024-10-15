function initPlayer() {
    console.log("Reproductor inicializado");
    
    const adContainer = document.getElementById('ad-container');
    if (adContainer) {
        
        adContainer.addEventListener('mouseover', () => {
            adContainer.classList.add('hide-cursor');
        });

        
        adContainer.addEventListener('mouseout', () => {
            adContainer.classList.remove('hide-cursor');
        });
    }
}

function showAd(ad) {
    const adContainer = document.getElementById('ad-container');

    if (!adContainer) {
        console.error("No se encontró el contenedor de anuncios");
        return;
    }

    // Limpiar el contenedor
    adContainer.innerHTML = '';

    if (ad.type === 'image') {
        const img = document.createElement('img');
        img.src = ad.url;
        img.style.width = '100%'; 
        img.style.height = 'auto'; 
        adContainer.appendChild(img);
    } else if (ad.type === 'video') {
        const video = document.createElement('video');
        video.src = ad.url;
        video.controls = true; 
        video.style.width = '100%'; 
        video.style.height = 'auto'; 
        adContainer.appendChild(video);
    }
}

function playAdsInLoop(ads) {
    console.log("Reproduciendo anuncios en bucle:", ads);
    
    let index = 0;

    function nextAd() {
        if (index < ads.length) {
            showAd(ads[index]);
            setTimeout(() => {
                index++;
                nextAd();
            }, ads[index].length);
        } else {
            index = 0; // Reiniciar al principio si ya se han reproducido todos
            nextAd(); // Comenzar de nuevo
        }
    }

    nextAd(); 
}

module.exports = {
    initPlayer,
    playAdsInLoop,
};



