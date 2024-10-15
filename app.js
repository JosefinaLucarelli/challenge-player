// scripts/app.js
const player = require('./src/player');

document.addEventListener('DOMContentLoaded', () => {
    player.initPlayer();

    const ads = [
        { type: 'image', url: 'assets/imagen-cuadrada-00001.jpg', length: 5000 },
        { type: 'video', url: 'assets/video-cuadrado-00001.mp4', length: 10000 },
        { type: 'image', url: 'assets/imagen-cuadrada-00002.jpg', length: 5000 },
        { type: 'video', url: 'assets/video-cuadrado-00002.mp4', length: 10000 },
        { type: 'image', url: 'assets/imagen-cuadrada-00003.jpg', length: 5000 },
        { type: 'video', url: 'assets/video-cuadrado-00005.mp4', length: 10000 },
        { type: 'image', url: 'assets/imagen-cuadrada-00004.jpg', length: 5000 }
    ];

    player.playAdsInLoop(ads);
});


