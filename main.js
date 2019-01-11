var gaud = ["G1.mp3","G2.mp3","G3.mp3","G4.mp3","G5.mp3","G6.mp3","G7.mp3","G8.mp3"];

var gwav = ["G1.png","G2.png","G3.png","G4.png","G5.png","G6.png","G7.png","G8.png"];

var daud = ["D1.mp3","D2.mp3","D3.mp3","D4.mp3","D5.mp3","D6.mp3","D7.mp3","D8.mp3"];

var dwav = ["D1.png","D2.png","D3.png","D4.png","D5.png","D6.png","D7.png","D8.png"];

var paud = ["P1.mp3","P2.mp3","P3.mp3","P4.mp3","P5.mp3","P6.mp3","P7.mp3","P8.mp3"];

var pwav = ["P1.png","P2.png","P3.png","P4.png","P5.png","P6.png","P7.png","P8.png"];

var saud = ["S1.mp3","S2.mp3","S3.mp3","S4.mp3","S5.mp3","S6.mp3"];

var swav = ["S1.png","S2.png","S3.png","S4.png","S5.png","S6.png"];

/*Player JS*/

/*Load Functions*/

var finalSong;

function loadGuitar() {
    var i = Math.floor(Math.random() * 8)+1;
    var song = gaud[i-1];
    var wave = gwav[i-1];
    document.getElementById("player").innerHTML = ("<audio src = 'music/guitar/"+song+"' controls></audio>");
    document.getElementById("guitarwave").innerHTML = ("<img src = 'waveforms/Guitar/"+wave+"'class='gradient-waveforms' alt='waveform1'></img>");
    var gdown = document.getElementById("downloadGuitar");
    gdown.href = "music/guitar/"+song

}

function loadDrum() {
    var i = Math.floor(Math.random() * 8)+1;
    var song = daud[i-1];
    var wave = dwav[i-1];
    document.getElementById("player").innerHTML = ("<audio src = 'music/drum/"+song+"' controls></audio>");
    document.getElementById("drumwave").innerHTML = ("<img src = 'waveforms/Drum/"+wave+"'class='gradient-waveforms' alt='waveform1'></img>");
    var ddown = document.getElementById("downloadDrums");
    ddown.href = "music/drum/"+song

}

function loadPiano() {
    var i = Math.floor(Math.random() * 8)+1;
    var song = paud[i-1];
    var wave = pwav[i-1];
    document.getElementById("player").innerHTML = ("<audio src = 'music/piano/"+song+"' controls></audio>");
    document.getElementById("pianowave").innerHTML = ("<img src = 'waveforms/Piano/"+wave+"'class='gradient-waveforms' alt='waveform1'></img>");
    var pdown = document.getElementById("downloadPiano");
    pdown.href = "music/piano/"+song

}

function loadShaker() {
    var i = Math.floor(Math.random() * 6)+1;
    var song = saud[i-1];
    var wave = swav[i-1];
    document.getElementById("player").innerHTML = ("<audio src = 'music/shaker/"+song+"' controls></audio>");
    document.getElementById("shakerwave").innerHTML = ("<img src = 'waveforms/Shaker/"+wave+"'class='gradient-waveforms' alt='waveform1'></img>");
    var sdown = document.getElementById("downloadShaker");
    sdown.href = "music/shaker/"+song

}
