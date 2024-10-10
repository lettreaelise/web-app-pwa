document.getElementById('getLocation').addEventListener('click', () => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(position => {
            const { latitude, longitude } = position.coords;
            document.getElementById('location').innerText = `Latitude: ${latitude}, Longitude: ${longitude}`;
        }, error => {
            document.getElementById('location').innerText = 'Erro ao obter localização';
        });
    } else {
        document.getElementById('location').innerText = 'Geolocalização não é suportada pelo navegador';
    }
});
