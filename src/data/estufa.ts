export type Release = {
  catalog: string;
  title: string;
  artists: string;
  art: number;
  /** Capa real do release (arquivo local em /public/covers). */
  cover?: string;
  /** ID da faixa/álbum no Spotify (open.spotify.com/track/<id>) — habilita o player. */
  spotifyId?: string;
  spotifyType?: "track" | "album" | "playlist";
  /** URL direta do release no Beatport. */
  beatportUrl?: string;
};

export const SPOTIFY_PLAYLIST_ID = "3vTiYYW3khKdVgWBc57vDN";

// Catálogo conforme os últimos lançamentos da Estufa Records (fonte: Beatport).
export const releases: Release[] = [
  {
    catalog: "EST",
    title: "Rave Na Sala",
    artists: "RAQUEZZI",
    art: 0,
    cover: "/covers/rave-na-sala.jpg",
    beatportUrl: "https://www.beatport.com/release/rave-na-sala/5061298",
  },
  {
    catalog: "EST",
    title: "Veins",
    artists: "Noizzed, Hotte",
    art: 1,
    cover: "/covers/veins.jpg",
    spotifyId: "0BfO0sMvs0XxOyMgTj51Z7",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/veins/4299429",
  },
  {
    catalog: "EST",
    title: "Love and Happiness",
    artists: "joaum",
    art: 2,
    cover: "/covers/love-and-happiness.jpg",
    spotifyId: "1rdXgRjcmbBm0XTkHxdufd",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/love-and-happiness-album/4640673",
  },
  {
    catalog: "EST",
    title: "Darwin",
    artists: "Raquel Zanella",
    art: 3,
    cover: "/covers/darwin.jpg",
    spotifyId: "5jBG4bRaQDcL8exmxP4zDn",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/darwin/4608205",
  },
  {
    catalog: "EST",
    title: "Metropolis",
    artists: "César Leme",
    art: 4,
    cover: "/covers/metropolis.jpg",
    spotifyId: "3ba5l5scF6GxWF0JePzASs",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/metropolis/3374151",
  },
  {
    catalog: "EST",
    title: "Nave Mulher",
    artists: "Lapax",
    art: 5,
    cover: "/covers/nave-mulher.jpg",
    beatportUrl: "https://www.beatport.com/release/nave-mulher/3353833",
  },
  {
    catalog: "EST",
    title: "Low Tide",
    artists: "Fran Trelles",
    art: 6,
    cover: "/covers/low-tide.jpg",
    beatportUrl: "https://www.beatport.com/release/low-tide/3154489",
  },
  {
    catalog: "EST",
    title: "Cape Town",
    artists: "Lexmic",
    art: 7,
    cover: "/covers/cape-town.jpg",
    beatportUrl: "https://www.beatport.com/release/cape-town/3139157",
  },
  {
    catalog: "EST",
    title: "Sunflora",
    artists: "Morgana Parel",
    art: 0,
    cover: "/covers/sunflora.jpg",
    spotifyId: "0eZLcQF6K8AbCdd1nfu41a",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/sunflora/3129109",
  },
  {
    catalog: "EST",
    title: "Concreto",
    artists: "Mateus G",
    art: 1,
    cover: "/covers/concreto.jpg",
    beatportUrl: "https://www.beatport.com/release/concreto/3111813",
  },
  {
    catalog: "EST",
    title: "Calmaria",
    artists: "César Leme",
    art: 2,
    cover: "/covers/calmaria.jpg",
    spotifyId: "2DgN06XHWhS9Z0GNjtK7D4",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/calmaria/3104826",
  },
  {
    catalog: "EST",
    title: "Inter Pars",
    artists: "Arthur Dutra",
    art: 3,
    cover: "/covers/inter-pars.jpg",
    spotifyId: "6igV8CY0uKAi5dAbkEIEIC",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/inter-pars/3082320",
  },
  {
    catalog: "EST",
    title: "Sol",
    artists: "Leakk, Tai Li",
    art: 4,
    cover: "/covers/sol.jpg",
    spotifyId: "0vAOCCuncnhJFFOY2vXmcT",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/sol/2989550",
  },
  {
    catalog: "EST",
    title: "Twins Peaks",
    artists: "Noizzed, Gamalihell",
    art: 5,
    cover: "/covers/twins-peaks.jpg",
    spotifyId: "5wnCb2CEudU4yVyWZJesVY",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/twins-peaks/2947304",
  },
  {
    catalog: "EST",
    title: "Elise",
    artists: "Noizzed, Bmorr",
    art: 6,
    cover: "/covers/elise.jpg",
    spotifyId: "5YlZiPQszI3v5hDezyY1ak",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/elise/2726556",
  },
  {
    catalog: "EST",
    title: "Modular",
    artists: "Auxtin",
    art: 7,
    cover: "/covers/modular.jpg",
    spotifyId: "1Cr7z8ecE7ZpstapjI3v4Z",
    spotifyType: "track",
    beatportUrl: "https://www.beatport.com/release/modular/2452268",
  },
  {
    catalog: "EST",
    title: "Predial",
    artists: "Alef the Boy, Augusto Klaus",
    art: 0,
    cover: "/covers/predial.jpg",
    beatportUrl: "https://www.beatport.com/release/predial/2398409",
  },
  {
    catalog: "EST",
    title: "Colheita",
    artists: "Noizzed, Marc-lo, (duo)tone",
    art: 1,
    cover: "/covers/colheita.jpg",
    beatportUrl: "https://www.beatport.com/release/colheita/2340586",
  },
];

export type Artist = {
  name: string;
  releases: string[];
  /** Foto de perfil (arquivo local em /public/artists). */
  photo: string;
};

export const artists: Artist[] = [
  { name: "RAQUEZZI", releases: ["Rave Na Sala"], photo: "/artists/raquezzi.jpg" },
  { name: "Hotte", releases: ["Veins"], photo: "/artists/hotte.jpg" },
  { name: "joaum", releases: ["Love and Happiness"], photo: "/artists/joaum.jpg" },
  { name: "Raquel Zanella", releases: ["Darwin"], photo: "/artists/raquel-zanella.jpg" },
  { name: "César Leme", releases: ["Calmaria", "Metropolis"], photo: "/artists/cesar-leme.jpg" },
  { name: "Lapax", releases: ["Nave Mulher"], photo: "/artists/lapax.jpg" },
  { name: "Fran Trelles", releases: ["Low Tide"], photo: "/artists/fran-trelles.jpg" },
  { name: "Lexmic", releases: ["Cape Town"], photo: "/artists/lexmic.jpg" },
  { name: "Morgana Parel", releases: ["Sunflora"], photo: "/artists/morgana-parel.jpg" },
  { name: "Mateus G", releases: ["Concreto"], photo: "/artists/mateus-g.jpg" },
  { name: "Arthur Dutra", releases: ["Inter Pars"], photo: "/artists/arthur-dutra.jpg" },
  { name: "Leakk", releases: ["Sol"], photo: "/artists/leakk.jpg" },
  { name: "Tai Li", releases: ["Sol"], photo: "/artists/tai-li.jpg" },
  { name: "Gamalihell", releases: ["Twins Peaks"], photo: "/artists/gamalihell.jpg" },
  { name: "Bmorr", releases: ["Elise"], photo: "/artists/bmorr.jpg" },
  { name: "Auxtin", releases: ["Modular"], photo: "/artists/auxtin.jpg" },
  { name: "Alef the Boy", releases: ["Predial"], photo: "/artists/alef-the-boy.jpg" },
  { name: "Augusto Klaus", releases: ["Predial"], photo: "/artists/augusto-klaus.jpg" },
  { name: "Marc-lo", releases: ["Colheita"], photo: "/artists/marc-lo.jpg" },
  { name: "(duo)tone", releases: ["Colheita"], photo: "/artists/duotone.jpg" },
  {
    name: "Noizzed",
    releases: ["Twins Peaks", "Elise", "Colheita", "Veins"],
    photo: "/artists/noizzed.jpg",
  },
];

export type RadioShow = {
  episode: string;
  host: string;
  focus: string;
  duration: string;
  /** URL do set no SoundCloud — habilita o player. */
  soundcloudUrl?: string;
};

export const radioShows: RadioShow[] = [
  {
    episode: "Estufa Radio 04",
    host: "Noizzed",
    focus: "minimal & dub techno",
    duration: "62 min",
  },
  { episode: "Estufa Radio 03", host: "César Leme", focus: "deep house", duration: "58 min" },
  { episode: "Estufa Radio 02", host: "Lapax", focus: "electro", duration: "71 min" },
  { episode: "Estufa Radio 01", host: "Auxtin", focus: "techno", duration: "64 min" },
];

export const CONTACT_EMAIL = "estufarec@gmail.com";

export type SocialLink = {
  label: string;
  href: string;
  platform:
    | "instagram"
    | "facebook"
    | "spotify"
    | "youtube"
    | "soundcloud"
    | "linkedin"
    | "whatsapp"
    | "email";
};

// Redes sociais no topo do Linktree oficial (@estufarec).
export const socialLinks: SocialLink[] = [
  { label: "Instagram", href: "https://instagram.com/estufarec", platform: "instagram" },
  { label: "Facebook", href: "https://www.facebook.com/estufarec/", platform: "facebook" },
  {
    label: "Spotify",
    href: "https://open.spotify.com/playlist/3vTiYYW3khKdVgWBc57vDN",
    platform: "spotify",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC2pDinAgyjiTv3zkHZBSHxQ",
    platform: "youtube",
  },
  { label: "SoundCloud", href: "https://soundcloud.com/estufarec", platform: "soundcloud" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/estufarec/", platform: "linkedin" },
  {
    label: "WhatsApp",
    href: "https://api.whatsapp.com/send?phone=5548998144025",
    platform: "whatsapp",
  },
  { label: "Email", href: `mailto:${CONTACT_EMAIL}`, platform: "email" },
];

export function spotifyUrl(release: Release) {
  if (release.spotifyId) {
    return `https://open.spotify.com/${release.spotifyType ?? "track"}/${release.spotifyId}`;
  }
  return spotifySearchUrl(release);
}

export function spotifySearchUrl(release: Release) {
  return `https://open.spotify.com/search/${encodeURIComponent(`${release.title} ${release.artists}`)}`;
}

export function beatportUrl(release: Release) {
  return (
    release.beatportUrl ??
    `https://www.beatport.com/search?q=${encodeURIComponent(`${release.title} ${release.artists}`)}`
  );
}

export function soundcloudSearchUrl(show: RadioShow) {
  return `https://soundcloud.com/search?q=${encodeURIComponent(`estufa records ${show.host}`)}`;
}
