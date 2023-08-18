const audioTable= document.querySelector("#audioTable");

const audioData = [
    {name: "Martin Luther King Jr", src:"https://www.freedomarchives.org/audio_samples/Mp3_files/MLK_Something_happening.mp3"},
    {name: "King Haile Selassie I", src:"/Users/TJ/Documents/FullStock2023/Audio/Majesty King Selassie I.mp3"},
    {name: "Bob Marley", src:"/Users/TJ/Documents/FullStock2023/Audio/BobMarley.mp3"},
];

 for (let i = 0; i < audioData.length; i++) {

    const tr = document.createElement("tr");

    const td = document.createElement("td");
    td.innerHTML = audioData[i].name;
    tr.appendChild(td);
    
    const td2 = document.createElement("td");
    const audio = document.createElement("audio");
    audio.setAttribute("controls","");

    const audioSource = document.createElement("source");
    audioSource.setAttribute("src", audioData[i].src);
    audio.appendChild(audioSource);
    td2.appendChild(audio);
    
    tr.appendChild(td2);

    
   
    

    

    audioTable.appendChild(tr);
}