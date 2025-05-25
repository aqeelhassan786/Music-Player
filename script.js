const songs = [
  {
    title: "Agar_Tum_Saath_Ho",
    artist: "Alka_Yagnik__Arijit_Singh",
    src: "music/_Agar_Tum_Saath_Ho__Song_with_Lyrics___Tamasha___Ranbir_Kapoor,_Deepika_Padukone___T-Series(128k).mp3",
    lyrics: "[Lyrics, T-Series ]",
  },
  {
    title: "4AM_in_Karachi",
    artist: "Talha_Anjum",
    src: "music/4AM_in_Karachi_-_Talha_Anjum___Prod._Umair__Official_Audio_(128k).mp3",
    lyrics: "[Lyrics, Umair__Official]",
  },
  {
    title: "Tere_Bina",
    artist: "A.R._Rahman",
    src: "music/A.R._Rahman_-_Tere_Bina_Best_Audio_Song_Guru_Aishwarya_Rai_Abhishek_Bachchan_Chinmayi(128k).mp3",
    lyrics: "[Lyrics, Abhishek_Bachchan_Chinmayi]",
  },
  {
    title: "JO_TUM_MERE_HO",
    artist: "Anuv_Jain",
    src: "music/Anuv_Jain_-_JO_TUM_MERE_HO__Official_Video_(128k).mp3",
    lyrics: "[Lyrics, Anuv_Jain ]",
  },
  {
    title: "Balocha_Zalma",
    artist: "Mansoor Ali Malangi",
    src: "music/Balocha_Zalma.mp3",
    lyrics: "[Lyrics, Mansoor Ali Malangi]",
  },
  {
    title: "Behti_Hawa_Sa_Tha_Woh",
    artist: "Aamir_Khan_Kareena_Kapoor",
    src: "music/Behti_Hawa_Sa_Tha_Woh_Lyrical_Video___3_Idiots___Aamir_Khan_Kareena_Kapoor_R._Madhavan_Sharman_Joshi(256kbps).mp3",
    lyrics: "[Lyrics, Madhavan_Sharman_Joshi]",
  },
  {
    title: "Bewafa",
    artist: "Pav_Dharia",
    src: "music/Bewafa_Full_Song___Pav_Dharia___Brand_New_Punjabi_Sad_Songs_20131(256kbps).mp3",
    lyrics: "[Lyrics, Pav_Dharia ]",
  },
  {
    title: "Pasoori",
    artist: "Ali_Sethi_x_Shae_Gill",
    src: "music/Coke_Studio___Season_14___Pasoori___Ali_Sethi_x_Shae_Gill(128k).mp3",
    lyrics: "[Lyrics, Coke_Studio ]",
  },
  {
    title: "DEVIL Song",
    artist: "Sidhu_Moose_Wala",
    src: "music/DEVIL_Lyrical_Video___PBX_1___Sidhu_Moose_Wala___Byg_Byrd____Latest_Punjabi_Songs_2018(256kbps).mp3",
    lyrics: "[Lyrics, Byg_Byrd ]",
  },
  {
    title: "Dil_Darbadar",
    artist: "Ankit_Tiwari",
    src: "music/Dil_Darbadar_FULL_VIDEO_Song____PK____Ankit_Tiwari___Aamir_Khan,_Anushka_Sharma_____Saga_Tune(256kbps).mp3",
    lyrics: "[Lyrics, Saga_Tune ]",
  },
  {
    title: "Raanjhan Song",
    artist: "Parampara_Thakur",
    src: "music/Do_Patti__Raanjhan__Lyrics__Kriti_Sanon,_Shaheer_Sheikh___Parampara_Tandon,Sachet-Parampara,Kausar(128k).mp3",
    lyrics: "[Lyrics, Tandon,Sachet-Parampara]",
  },
  {
    title: "GOAT Song",
    artist: "Sidhu_Moose_Wala",
    src: "music/GOAT__Full_Video__Sidhu_Moose_Wala___Wazir_Patar___Sukh_Sanghera___Moosetape(128k).mp3",
    lyrics: "[Lyrics, Sukh_Sanghera___Moosetape]",
  },
  {
    title: "Heer Song",
    artist: "Ali_Raza__",
    src: "music/Heer_-_Ali_Raza___Shjr___Lofi_Version(128k).mp3",
    lyrics: "[Lyrics, Ali_Raza___Shjr]",
  },
  {
    title: "Heerey",
    artist: "Amrinder_Gill",
    src: "music/Heerey_(Full_Song)_-_Amrinder_Gill___Love_Punjab___Releasing_on_11th_March(256kbps).mp3",
    lyrics: "[Lyrics, Amrinder_Gill ]",
  },
  {
    title: "Channa_Mereya",
    artist: "Arijit_Singh",
    src: "music/Channa_Mereya_(Sad_Version)_Arijit_Singh(256kbps).mp3",
    lyrics: "[Lyrics for Song 15]",
  },
  {
    title: "husn_mashup_2.0",
    artist: "anuv_jain",
    src: "music/husn_mashup_2.0__extended____anuv_jain___let_her_go_X_husn_X_choo_lo_X_jiyein_kyu___lofi_boy(128k).mp3",
    lyrics: "[Lyrics, anuv_jain_mashup ]",
  },
  {
    title: "INTRODUCTION",
    artist: "FARIS_SHAFI",
    src: "music/INTRODUCTION_-_FARIS_SHAFI(128k).mp3",
    lyrics: "[Lyrics, FARIS_SHAFI ]",
  },
  {
    title: "Ishq_",
    artist: "Faheem_Abdullah",
    src: "music/Ishq_Official_Lyrical_Video_I_Amir_Ameer___Faheem_Abdullah___Rauhan_Malik_I_Love_Song_2024(128k).mp3",
    lyrics: "[Lyrics, Faheem_Abdullah___Rauhan_Malik ]",
  },
  {
    title: "Jail",
    artist: "Navaan Sandhu",
    src: "music/Jail___Navaan_Sandhu__Official_Audio__Naveezy___New_Latest_Punjabi_Songs_2023(128k).mp3",
    lyrics: "[Lyrics, Navaan Sandhu ]",
  },
  {
    title: "Jhol",
    artist: "Maanu_x_Annural_Khalid",
    src: "music/Jhol___Coke_Studio_Pakistan___Season_15___Maanu_x_Annural_Khalid(128k).mp3",
    lyrics: "[Lyrics, Maanu_x_Annural ]",
  },
  {
    title: "Kon_Disa_Mein",
    artist: "Varsha_Singh_Dhanoa",
    src: "music/Kon_Disa_Mein_-_Full_Song____Ravindra_Jain___Varsha_Singh_Dhanoa___Maddy_Sharma___Guru_Dhanoa(128k).mp3",
    lyrics: "[Lyrics, Maddy_Sharma___Guru_Dhanoa ]",
  },
  {
    title: "Kuwari",
    artist: "Mankirt_Aulakh",
    src: "music/Kuwari_(Full_Video)___Mankirt_Aulakh___Latest_Punjabi_Song_2016___Speed_Records(256kbps).mp3",
    lyrics: "[Lyrics, Speed_Records ]",
  },
  {
    title: "Kun_Faya_Kun",
    artist: "A.R._Rahman",
    src: "music/Lyrical___Kun_Faya_Kun_Video_Song____Rockstar___Ranbir_Kapoor____A.R._Rahman(128k).mp3",
    lyrics: "[Lyrics, Rockstar_Ranbir_Kapoor ]",
  },
  {
    title: "Mann_Bharrya_",
    artist: "B_Praak",
    src: "music/Mann_Bharrya_(Full_Audio_Song)___B_Praak___Jaani___Himanshi_Khurana___Arvindr_Khaira___Speed_Records(256kbps).mp3",
    lyrics: "[Lyrics, Jaani___Himanshi_Khurana]",
  },
  {
    title: "MILLIONAIRE_SONG",
    artist: "Yo-Yo_Honey_Singh",
    src: "music/MILLIONAIRE_SONG__Full_Video___@YoYoHoneySingh____GLORY___BHUSHAN_KUMAR(128k).mp3",
    lyrics: "[Lyrics, Yo_Yo_Honey_Singh]",
  },
  {
    title: "O_Rangrez",
    artist: "Shreya_Ghoshal",
    src: "music/O_Rangrez_Full_Video_-_Bhaag_Milkha_Bhaag_Farhan,_Sonam_Shreya_Ghoshal,_Javed_Bashir(128k).mp3",
    lyrics: "[Lyrics, Javed_Bashir ]",
  },
  {
    title: "PAL_PAL",
    artist: "Afusic_x_Talha_Anjum",
    src: "music/PAL_PAL_-_Afusic_x_Talha_Anjum___Prod._By_Ether(128k).mp3",
    lyrics: "[Lyrics, Afusic_x_Talha_Anjum]",
  },
  {
    title: "Phir_Le_Aya_Dil",
    artist: "Arijit_Singh",
    src: "music/Phir_Le_Aya_Dil_-_Redux_-_Barfi_Pritam_Arijit_Singh_Ranbir_Priyanka_Ileana_D_Cruz(128k).mp3",
    lyrics: "[Lyrics, Barfi ]",
  },
  {
    title: "Ranjheya_Ve",
    artist: "Zain_Zohaib",
    src: "music/Ranjheya_Ve___Zain_Zohaib___Yratta_media(128k).mp3",
    lyrics: "[Lyrics, Zain_Zohaib___Yratta_media ]",
  },
  {
    title: "Nadaan_Parinde_",
    artist: "A.R_Rahman___Mohit_Chauhan",
    src: "music/ROCKSTAR__Nadaan_Parinde__Lyrical_Video____Ranbir_Kapoor___A.R_Rahman___Mohit_Chauhan,_Irshaad_Kamil(128k).mp3",
    lyrics: "[Lyrics, Mohit_Chauhan,_Irshaad_Kamil]",
  },
  {
    title: "Tum_Ho_",
    artist: "Mohit_Chauhan",
    src: "music/Rockstar__Tum_Ho_Lyrical_Video_Song___Ranbir_Kapoor___Nargis_Fakhri___T-Series(256kbps).mp3",
    lyrics: "[Lyrics, Mohit_Chauhan,_Irshaad_Kamil]",
  },
  {
    title: "Rona_Chadita_",
    artist: "Atif_Aslam",
    src: "music/Rona_Chadita_-_Atif_Aslam_(Lyrics___English_Translation_-_Meaning)(256kbps).mp3",
    lyrics: "[Lyrics, Atif_Aslam_]",
  },
  {
    title: "Sau_Dard_Hai_",
    artist: "Sonu Nigam",
    src: "music/Sau_Dard_Hai_(Eng_Sub)_[Full_Song]_(HQ)_With_Lyrics_-_Jaan-E-Maan_-_YouTube.FLV(256kbps).mp3",
    lyrics: "[Lyrics, Jaan-e-Mann]",
  },
  {
    title: "Taal_Se_Taal_Mila",
    artist: "Alka_Yagnik",
    src: "music/Taal_Se_Taal_Mila_(Remix)_DJ_Aftab_&_DJ_Ayan____DJs_LAVA___New_Remix_2019(256kbps).mp3",
    lyrics: "[Lyrics, (Remix)_DJ_Aftab_&_DJ_Ayan]",
  },
  {
    title: "Tajdar-e-Haram",
    artist: "Atif_Aslam",
    src: "music/Tajdar-e-Haram___Coke_Studio___Atif_Aslam___Lyrical_Video___Sufi_Lyricable(128k).mp3",
    lyrics: "[Lyrics, Coke_Studio_Atif_Aslam]",
  },
  {
    title: "Tera Mera Naa",
    artist: "Amrinder Gill",
    src: "music/Tera Mera Naa- Amrinder Gill - Copy.mp3",
    lyrics: "[Lyrics, Amrinder Gill]",
  },
  {
    title: "Tere_Hawaale_",
    artist: "Arijit_Shilpa",
    src: "music/Tere_Hawaale__Laal_Singh_Chaddha___Aamir,_Kareena___Arijit,_Shilpa___Pritam,_Amitabh,_Advait(128k).mp3",
    lyrics: "[Lyrics, Pritam,_Amitabh ]",
  },
  {
    title: "TERE_LAYI",
    artist: "Nirvair_Pannu",
    src: "music/TERE_LAYI__Slowed_Reverb____Nirvair_Pannu___SoundVFX(128k).mp3",
    lyrics: "[Lyrics, Slowed_Reverb_Nirvair]",
  },
  {
    title: "TERE_SEENE_UTTE",
    artist: "NASEEBO_LAL",
    src: "music/TERE_SEENE_UTTE_-_NARGIS_NEW_MUJRA_-_PAKISTANI_MUJRA_DANCE_-_NASEEBO_LAL(128kbps).mp3",
    lyrics: "[Lyrics, MUJRA_Song-NASEEBO_LAL]",
  },
  {
    title: "Teri_Deewani",
    artist: "Kailash_Kher",
    src: "music/Teri_Deewani_-_Kailash_Kher___Official_Video___Kailasa___Paresh___Naresh(128k).mp3",
    lyrics: "[Lyrics, Kailash__Kher]",
  },
  {
    title: "Tochan_Song",
    artist: "SIDHU_MOOSEWALA_",
    src: "music/Tochan_(Full_Video)___SIDHU_MOOSEWALA___BYG_BYRD___SONIA_MAAN___Humble_Music(256kbps).mp3",
    lyrics: "[Lyrics, SONIA_MAAN_Humble_Music]",
  },
  {
    title: "TOH_PHIR_AAO_X_RAPTURE",
    artist: "EMRAAN_HASMI",
    src: "music/TOH_PHIR_AAO_X_RAPTURE___DJ_GANESH___INDO_TECH_PROJECT___EMRAAN_HASMI__MUSTAFA_ZAHID___VISHESH_FILMS(128k).mp3",
    lyrics: "[Lyrics, DJ_GANESH___INDO_TECH_PROJECT]",
  },
  {
    title: "Tu_Hai_Toh_Main_Hoon",
    artist: "Arijit_Singh_",
    src: "music/Tu_Hai_Toh_Main_Hoon__Sky_Force__Akshay_,_Sara_,_Veer_,_Arijit_Singh_,_Afsana(128k).mp3",
    lyrics: "[Lyrics, Arijit_Singh_]",
  },
  {
    title: "Tu_Jaane_Na",
    artist: "Atif_Aslam",
    src: "music/Tu_Jaane_Na_-_Lyrical___Ajab_Prem_Ki_Ghazab_Kahani___Atif_Aslam___Ranbir_Kapoor,_Katrina(128k).mp3",
    lyrics: "[Lyrics, Ajab_Prem_Ki_Ghazab_Kahani]",
  },
  {
    title: "Tum_Ek_Goorakh_Dhanda_Ho",
    artist: "Ustad_Nusrat_Fateh_Ali_Khan",
    src: "music/Tum_Ek_Goorakh_Dhanda_Ho_-_Ustad_Nusrat_Fateh_Ali_Khan_-_OSA_Official_HD_Video(128kbps).m4a",
    lyrics: "[Lyrics, Nusrat_Fateh_Ali_Khan]",
  },
  {
    title: "Tumhein_Dillagi_Bhool_Jani_Paray_Gi",
    artist: "Ustad_Nusrat_Fateh_Ali_Khan",
    src: "music/Tumhein_Dillagi_Bhool_Jani_Paray_Gi___Nusrat_Fateh_Ali_Khan___Lyrical_Qawwali___Shemaroo_Punjabi(128k).mp3",
    lyrics: "[Lyrics, Nusrat_Fateh_Ali_Khan]",
  },
  {
    title: "Tumse_Milke_Dilka_Jo_Haal",
    artist: "Sonu_Nigham",
    src: "music/Tumse_Milke_Dilka_Jo_Haal_(Remix)-_DJ_Aftab_&_DJ_Baichun___2018(256kbps).mp3",
    lyrics: "[Lyrics< DJ_Aftab_&_DJ_Baichun]",
  },
  {
    title: "Ve_Kamleya",
    artist: "Asees_Kaur",
    src: "music/Ve_Kamleya___Lyrics_____Asees_Kaur___Ve_Kamleya_female_version_lyrics___ve_kamelya_lyrics(128k).mp3",
    lyrics: "[Lyrics, Ve_Kamleya_female_version ]",
  },
  {
    title: "WAVY",
    artist: "KARAN_AUJLA",
    src: "music/WAVY__OFFICIAL_VIDEO__KARAN_AUJLA___LATEST_PUNJABI_SONGS_2024(128k).mp3",
    lyrics: "[Lyrics, KARAN_AUJLA__PUNJABI_SONG]",
  },
  {
    title: "Winning",
    artist: "Karan_Aujla",
    src: "music/Winning_Speech__Music_Video__Karan_Aujla___Mxrci___Latest_Punjabi_Songs_2024(128k).mp3",
    lyrics: "[Lyrics, KARAN_AUJLA__PUNJABI_SONG]",
  },
];

let currentIndex = 0;
const audioPlayer = document.getElementById("audio-player");
const playBtn = document.getElementById("play-btn");
const progressBar = document.getElementById("progress-bar");
const trackTitle = document.getElementById("track-title");
const trackArtist = document.getElementById("track-artist");
const lyricsDiv = document.getElementById("lyrics");
const searchBar = document.getElementById("search-bar");
const songList = document.getElementById("song-list");

function loadSong(index) {
  const song = songs[index];
  trackTitle.textContent = song.title;
  trackArtist.textContent = song.artist;
  audioPlayer.src = song.src;
  lyricsDiv.textContent = song.lyrics;
}

function populateSongList() {
  songList.innerHTML = "";
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title;
    li.addEventListener("click", () => {
      currentIndex = index;
      loadSong(index);
      audioPlayer.play();
    });
    songList.appendChild(li);
  });
}

playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    playBtn.textContent = "⏸";
  } else {
    audioPlayer.pause();
    playBtn.textContent = "▶";
  }
});

document.getElementById("prev-btn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  loadSong(currentIndex);
  audioPlayer.play();
});

document.getElementById("next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % songs.length;
  loadSong(currentIndex);
  audioPlayer.play();
});

populateSongList();
loadSong(currentIndex);
