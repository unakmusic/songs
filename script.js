    <script src="script.js"></script>
</body>
</html>
const songs = [
    {
        title: "Делай красиво",
        audio: "songs/Делай красиво.mp3",
        lyrics: "Текст песни 1...", // или загружать из .txt
        },
    {
        title: "Казак",
        audio: "songs/Казак.mp3",
        lyrics: "Текст песни 2...",
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
