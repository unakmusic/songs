const songs = [
    {
        title: "Песня 1",
        audio: "songs/song1.mp3",
        lyrics: "Текст песни 1...", // или загружать из .txt
        price: "100 ₽"
    },
    {
        title: "Песня 2",
        audio: "songs/song2.mp3",
        lyrics: "Текст песни 2...",
        price: "150 ₽"
    }
    // Добавляйте новые песни здесь
];

const songList = document.getElementById("songList");

songs.forEach(song => {
    const songCard = document.createElement("div");
    songCard.className = "song-card";
    songCard.innerHTML = `
        <h3>${song.title}</h3>
        <audio controls src="${song.audio}"></audio>
        <div class="lyrics">${song.lyrics}</div>
        <button class="buy-btn">Купить за ${song.price}</button>
    `;
    songList.appendChild(songCard);
});
