//01- Deja La Vida Volar 
var cancion1 = WaveSurfer.create({
    container: '#cancion-1',
    waveColor: '#F8FB9B',
    progressColor: '#5D8CB3',
    barWidth: '2',
    responsive: true,
    cursorWidth: '0'
});

cancion1.load('/src/audio/01-Deja-La-Vida-Volar.mp3'/* , peaks1 */);

var mediaBtn1 = document.getElementById('btn-state-1');

mediaBtn1.addEventListener('click', function media() {
    cancion1.playPause();
    mediaBtn1.classList.toggle("fa-play-circle")
    mediaBtn1.classList.toggle("fa-pause-circle");
    
});

//02- Punto Ciego
var cancion2 = WaveSurfer.create({
    container: '#cancion-2',
    waveColor: '#F8FB9B',
    progressColor: '#5D8CB3',
    barWidth: '2',
    responsive: true,
    cursorWidth: '0'
});

cancion2.load('/src/audio/02-Punto-Ciego.mp3'/* , peaks2 */);

var mediaBtn2 = document.getElementById('btn-state-2');

mediaBtn2.addEventListener('click', function media() {
    cancion2.playPause();
    mediaBtn2.classList.toggle("fa-play-circle");
    mediaBtn2.classList.toggle("fa-pause-circle");
});

//03- Faro De Los Ahogados
var cancion3 = WaveSurfer.create({
    container: '#cancion-3',
    waveColor: '#F8FB9B',
    progressColor: '#5D8CB3',
    barWidth: '2',
    responsive: true,
    cursorWidth: '0'
});

cancion3.load('/src/audio/03-Rincon-De-Los-Ahogados.mp3');

var mediaBtn3 = document.getElementById('btn-state-3');

mediaBtn3.addEventListener('click', function media() {
    cancion3.playPause();
    mediaBtn3.classList.toggle("fa-play-circle");
    mediaBtn3.classList.toggle("fa-pause-circle");
});

//04- Chaleco/Traicionera
var cancion4 = WaveSurfer.create({
    container: '#cancion-4',
    waveColor: '#F8FB9B',
    progressColor: '#5D8CB3',
    barWidth: '2',
    responsive: true,
    cursorWidth: '0'
});

cancion4.load('/src/audio/04-Chaleco-Traicionera.mp3');

var mediaBtn4 = document.getElementById('btn-state-4');

mediaBtn4.addEventListener('click', function media() {
    cancion4.playPause();
    mediaBtn4.classList.toggle("fa-play-circle");
    mediaBtn4.classList.toggle("fa-pause-circle");
});