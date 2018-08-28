var lyricsOutput = document.getElementById("lyrics-output");
var numberVerses = document.getElementById("number-verses");


numberVerses.addEventListener("change", function () {
    var allVerses = "";
    var num = numberVerses.value;

    for (let i = 0; i < num; i++) {
        let wu = data[i];
        console.log(wu.artist);
        allVerses += wu.lyrics + "<span style='font-weight: 600'> | " + wu.artist + " - " + wu.song + "</span><p></p>";
    }
    lyricsOutput.innerHTML = allVerses;  
});