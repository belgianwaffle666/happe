document.getElementById('next-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    document.body.classList.add('page-exit');

    setTimeout(function() {
        window.location.href = 'page2.html';
    }, 800);
});

<script>
  const vinylDisc = document.getElementById('vinylDisc');
  const vinylCard = document.getElementById('vinylCard');

  if (vinylDisc && vinylCard) {
    vinylDisc.addEventListener('click', () => {
      vinylCard.classList.toggle('is-open');
    })
  }
</script>

// 1. LISTAHAN NG MGA KANTA MO (Playlist Array)
const playlist = [
  {
    title: "Minamahal",
    artist: "Earl Agustin, Dana Paulene",
    letter: "The 2:06 verse: 'Oh minamahal kita nang lubusan...' (Letter 1 here)",
    cover: "music-minamahal.png",
    audio: "music-minamahal.mp3"
  },
  {
    title: "Paraiso",
    artist: "It All Started In May",
    letter: "The verse 3:58 'mamahalin kita, kahit pa sa araw na maging ulyanin tayong dalawa' I've been gatekeeping this song for ages and wow ngayon lalabas na sha sa basement ko. actually, love na love ko tong song na to since I feel like hinehele niya ako and such and wow it has a deeper meaning din pala. nung una ko siyang marinig, oa man or what pero ikaw sumagi agad sa isip ko, especially the last verse, na mamahalin kita kahit na maging ulynanin pa tayong dalawa. man alam mo ulyanin na ako ngayon, ayan na evidence na mamahalin pa rin kita kahit anong mangyari hehe.",
    cover: "music-paraiso.png", // Palitan mo ng file name ng image 2
    audio: "music-paraiso.mp3"   // Palitan mo ng file name ng mp3 2
  },
  {
    title: "Tinatangi",
    artist: "Adie, Chrstn",
    letter: "2:23 'Tinatangi, tinatangi ko, ikaw lamang mahal. Tinatangi, hindi na maliligaw pagkat ikaw lang ang tinatanaw sa araw-araw' ayan from the word itself, tinatangi man talagang tinatangi kita, ikaw at ikaw lang kahit anong problema pa harapin natin, sayo at sayo ako uuwi at ikaw ang palagi kong pipiliin :) ",
    cover: "music-tinatangi.png",
    audio: "music-tinatangi.mp3"
  },
  {
    title: "love.",
    artist: "wave to earth",
    letter: "honestly, the song speaks for itself. the first verse 'Between people between the wind, each person has their own desires painted together' upon searching for it's english translation, they have annotations din pala. sabi don, 'Between people, Between the wind' enforces a visual in people’s mind. Throughout the first verse, it mentions about how each person has different life styles and aspirations, and when there is a mutual interest, it starts to “paint together” into a future where two can be together.' and I thought of us lang din, diba before we have different aspirations, then boom yun pala we have mutual interest, and yung thing na yun is parang naging dala dala ko na, kumbaga, I have you in my heart, and my mind. ang corny pero ayan kasi naisip ko nung binasa ko yung explanation nung kanta ehe. ",
    cover: "music-love.png",
    audio: "music-love.mp3"
  },
  {
    title: "Someday",
    artist: "The Ridleys",
    letter: "1:09, I wanna be the melting candle to your flame. Your closest friend, your fiercest love, one and the same. Some things will never ever change. I know nito lang naman tayo naging close and nagkaroon ng relationship but I want to be the 'someone' na ituturing mong not only the girl you love but also the girl na friend, like katuwang mo sa hirap at ginhawa na ibabato sa iyo—sa atin ng buhay ",
    cover: "music-someday.png",
    audio: "music-someday.mp3"
  },
  {
    title: "Ang Panata",
    artist: "Johnoy Danao",
    letter: "2:46 'Magpakailanman, ika'y tatabihan Sasamahan ko ang yong pangarap Aalagaan ko ang iyong tiwala Pipilitin kong di ka luluha Tapat kang mamahalin sa hirap at ginhawa Luha moy luha ko na rin, aking sinta' sasamahan ko ang iyong pangarap alam mo baby, super happy ko kapag you're talking about your passion which is ayung pagbabanda mo nga. me happy kasi you are happy sa ginagawa mo, kaya ganon na lang din support ko sayo, kahit san man yan man basta masaya ka and masaya ako for you :) tsaka I want to be by your side pag panalo ka, talo, o kung anong condition pa yan, basta ang akin lang, gusto ko ako yung maging no.1 supporter mo sa mga bagay na gusto mong gawin kasi as I've said earlier, happy ako kapag happy ka, you bring me happiness really, kaya keep on dreaming ha? I'll be always by your side no matter what happen man, jan lang aq sa tabi-tabi supporting ur wins sa buhay :) kasi ganoon ka sa akin e, u support my wants and sometimes palagi mo sinasabi na 'gawan natin ng paraan' which makes my nervous system calm down. kaya sa ganitong way ko na lang din naiisip na bumawi sayo :) ",
    cover: "music-panata.png",
    audio: "music-panata.mp3"
  },
  {
    title: "Intertwine",
    artist: "Over October, The Ridleys",
    letter: "0:21 'If I could tell you all the things you are to me, I'd try to fit them all inside this song, The words I say won't give our love, no justice, cause what we have's a blessing from Above', another one is 2:26 'If I could tell you all the times I prayed to Him, you would find them sev'ral hours long (Ooh-ooh). But I heard the heart speaks louder than a million voices raised Now, the answer to my loudest prayer is standing here today' ang galing lang kasi I never thought na this music holds a deeper meaning. nung una kong narinig to, naisip ko na wow hinehele ako okay add to liked songs then nung narinig ko ulit and binasa ko lyrics, wow, ayun pala meaning niya. yung part na 'cause what we have's a blessing from Above' which is true, akala ko hindi na darating yung turn ko, na turn kong mahalin nang tama at matrato nang tama and hinulog ka niya that's why it's indeed a blessing from Above :). also yung part na 'Now, the answer to my loudest pray'r is standing here today' is so true, even though I already have you na, I kept praying pa rin na may God guide us sa journey natin, and continue on guiding us. I once prayed to him na if you're not the one for me, he should remove you from my life. at first tatakot pa ako non pero ayun, he did not remove you from my life, he made you stay lalo na nung crucial moment natin together. and I'm very very veeery thankful to him na he gave me you, he gave me someone na nakapag pafeel sa akin na love can be gentle, and warm :) that's why I dedicate this song to you ",
    cover: "music-intertwine.png",
    audio: "music-intertwine.mp3"
  }
];

// 2. KUKUNIN ANG HTML ELEMENTS
let currentIndex = 0;


const audioPlayer = document.getElementById("audioPlayer");
const vinylImg = document.getElementById("vinylImg");
const vinylCard = document.getElementById('vinylCard');
const vinylDisc = document.getElementById('vinylDisc');

const bottomTitle = document.getElementById("bottomTitle");
const bottomArtist = document.getElementById("bottomArtist");
const songTitle = document.getElementById("songTitle");
const artistName = document.getElementById("artistName");
const dedicatedLetter = document.getElementById("dedicatedLetter");

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

// 3. FUNCTION PARA MAGBAGO ANG CONTENT
function loadSong(index) {
  const song = playlist[index];

  if (!song) return;

  const titleText = song.title || song.song_name || "";
  const artistText = song.artist || song.song_artist || "";
  const letterText = song.letter || song.song_letter || "";
  const coverSrc = song.cover || song.song_cover || "";
  const audioSrc = song.audio || song.song_audio || "";

  // Baguhin ang text sa letter box
  if (songTitle) songTitle.textContent = titleText;
  if (artistName) artistName.textContent = artistText;
  if (dedicatedLetter) dedicatedLetter.textContent = letterText;

  // Baguhin ang text sa ilalim ng vinyl
  if (bottomTitle) bottomTitle.textContent = titleText;
  if (bottomArtist) bottomArtist.textContent = artistText;

  // Baguhin ang Vinyl cover at Audio file
  if (vinylImg && coverSrc) vinylImg.src = coverSrc;
  
  if (audioPlayer) {
    audioPlayer.pause();          // PARAPATIGILIN ANG TUMUTUGTOG NA KANTA
    audioPlayer.currentTime = 0;  // I-RESET SA SIMULA (0:00)
    if (audioSrc) {
      audioPlayer.src = audioSrc;
      audioPlayer.load();         // I-LOAD LANG, WALANG PLAY!
    }
  }
}

// 4. ANIMATION & TOGGLE LOGIC (Pag-click sa Vinyl Card/Disc)
if (vinylDisc && vinylCard) {
  vinylDisc.addEventListener("click", (e) => {
    // Para hindi mag-trigger kapag audio controls ang pinindot
    if (e.target.closest("audio")) return;

    // Nag-a-add/remove ng CSS animation class
    const isOpen = vinylCard.classList.toggle("is-open");

    // Optional: I-play/Pause ang kanta kasabay ng animation
    if (audioPlayer) {
      if (isOpen) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    }
  });
}

// 5. NEXT BUTTON (Nagpa-palit ng kanta)
if (nextBtn) {
  nextBtn.addEventListener("click", () => {
    // 1. Isara muna ang vinyl card/paragraph
    if (vinylCard) vinylCard.classList.remove("is-open");
    
    // 2. I-pause ang audio
    if (audioPlayer) audioPlayer.pause();
    
    // 3. Palitan ang song index at i-load
    currentIndex = (currentIndex + 1) % playlist.length;
    loadSong(currentIndex);
  });
}

// PREV BUTTON
if (prevBtn) {
  prevBtn.addEventListener("click", () => {
    // 1. Isara muna ang vinyl card/paragraph
    if (vinylCard) vinylCard.classList.remove("is-open");

    // 2. I-pause ang audio
    if (audioPlayer) audioPlayer.pause();

    // 3. Palitan ang song index at i-load
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentIndex);
  });
}

window.addEventListener("load", () => {
  const loader = document.getElementById("sticker-loader");
  if (loader) {
    setTimeout(() => {
      loader.style.display = "none";
    }, 3500);
  }
});

window.addEventListener("load", () => {
  const loader = document.getElementById("sticker-loader");
  const sound = document.getElementById("loading-sound");

  // I-play ang cute sound kapag nag-load ang page
  if (sound) {
    sound.play().catch(error => {
      // Hinahandle nito kung sakaling i-block ng browser ang autoplay
      console.log("Autoplay blocked by browser:", error);
    });
  }

  if (loader) {
    setTimeout(() => {
      loader.style.display = "none"; // Mawawala ang loading screen pagkalipas ng 2.5s!
    }, 2500);
  }
});