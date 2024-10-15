const axios = require('axios');
const fs = require('fs');
const path = require('path');
const db = require('./db'); // Si tienes NeDB aquí

async function fetchAdsFromAPI() {
    try {
        const response = await axios.get('http://localhost:3001/ads'); // URL de Mockoon
        return response.data;
    } catch (error) {
        console.error('Error fetching ads:', error);
        return [];
    }
}

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

module.exports = {
    fetchAdsFromAPI,
    downloadFile,
};


