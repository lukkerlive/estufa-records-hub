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
  /** URL de set/álbum no SoundCloud (soundcloud.com/estufarec/sets/<slug>) — habilita o player. */
  soundcloudUrl?: string;
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
    soundcloudUrl: "https://soundcloud.com/estufarec/sets/noizzed-veins-album",
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
    soundcloudUrl: "https://soundcloud.com/estufarec/sets/joaum-love-and-happiness-album",
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
    soundcloudUrl: "https://soundcloud.com/estufarec/sets/darwin-ep-raquel-zanella",
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
    soundcloudUrl: "https://soundcloud.com/estufarec/sets/concreto-ep",
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
    soundcloudUrl: "https://soundcloud.com/estufarec/sets/calmaria-ep",
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
  /** Links de redes sociais do artista (exibidos no card). */
  socials?: {
    soundcloud?: string;
    instagram?: string;
    spotify?: string;
    beatport?: string;
  };
};

export const artists: Artist[] = [
  {
    name: "RAQUEZZI",
    releases: ["Rave Na Sala"],
    photo: "/artists/raquezzi.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/raquezzi-djs",
      beatport: "https://www.beatport.com/artist/raquezzi/1310733",
      instagram: "https://www.instagram.com/raquezzi_",
    },
  },
  {
    name: "Hotte",
    releases: ["Veins"],
    photo: "/artists/hotte.jpg",
    socials: { beatport: "https://www.beatport.com/artist/hotte/437165" },
  },
  {
    name: "joaum",
    releases: ["Love and Happiness"],
    photo: "/artists/joaum.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/dj-joaum",
      beatport: "https://www.beatport.com/artist/joaum/1215462",
    },
  },
  {
    name: "Raquel Zanella",
    releases: ["Darwin"],
    photo: "/artists/raquel-zanella.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/raquel_zanella",
      beatport: "https://www.beatport.com/artist/raquel-zanella/1215461",
      instagram: "https://www.instagram.com/araquelzanella",
    },
  },
  {
    name: "César Leme",
    releases: ["Calmaria", "Metropolis"],
    photo: "/artists/cesar-leme.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/cesarleme",
      instagram: "https://www.instagram.com/cesarrrleme",
      beatport: "https://www.beatport.com/artist/cesar-leme/914147",
    },
  },
  {
    name: "Lapax",
    releases: ["Nave Mulher"],
    photo: "/artists/lapax.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/lapaxmusic",
      beatport: "https://www.beatport.com/artist/lapax/959675",
      instagram: "https://www.instagram.com/lapaxmusic",
    },
  },
  {
    name: "Fran Trelles",
    releases: ["Low Tide"],
    photo: "/artists/fran-trelles.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/ftrelles",
      beatport: "https://www.beatport.com/artist/fran-trelles/750545",
      instagram: "https://www.instagram.com/frntrelles",
    },
  },
  {
    name: "Lexmic",
    releases: ["Cape Town"],
    photo: "/artists/lexmic.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/lexmic-1",
      instagram: "https://www.instagram.com/lexmicmusic",
      beatport: "https://www.beatport.com/artist/lexmic/727520",
    },
  },
  {
    name: "Morgana Parel",
    releases: ["Sunflora"],
    photo: "/artists/morgana-parel.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/morganaparel",
      beatport: "https://www.beatport.com/artist/morgana-parel/847051",
      instagram: "https://www.instagram.com/sangredesquiciada",
    },
  },
  {
    name: "Mateus G",
    releases: ["Concreto"],
    photo: "/artists/mateus-g.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/mateusmga",
      beatport: "https://www.beatport.com/artist/mateus-g/430002",
      instagram: "https://www.instagram.com/mateusmga",
    },
  },
  {
    name: "Arthur Dutra",
    releases: ["Inter Pars"],
    photo: "/artists/arthur-dutra.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/arthurdutradj",
      instagram: "https://www.instagram.com/arthurdutra.art",
      beatport: "https://www.beatport.com/artist/arthur-dutra/364587",
    },
  },
  {
    name: "Leakk",
    releases: ["Sol"],
    photo: "/artists/leakk.jpg",
    socials: { beatport: "https://www.beatport.com/artist/leakk/718967" },
  },
  {
    name: "Tai Li",
    releases: ["Sol"],
    photo: "/artists/tai-li.jpg",
    socials: { beatport: "https://www.beatport.com/artist/tai-li/879593" },
  },
  {
    name: "Gamalihell",
    releases: ["Twins Peaks"],
    photo: "/artists/gamalihell.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/gamalihell",
      beatport: "https://www.beatport.com/artist/gamalihell/867115",
    },
  },
  {
    name: "Bmorr",
    releases: ["Elise"],
    photo: "/artists/bmorr.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/b_morr",
      beatport: "https://www.beatport.com/artist/bmorr/813687",
    },
  },
  {
    name: "Auxtin",
    releases: ["Modular"],
    photo: "/artists/auxtin.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/auxtindj",
      instagram: "https://www.instagram.com/auxtindj",
      beatport: "https://www.beatport.com/artist/auxtin/732877",
    },
  },
  {
    name: "Alef the Boy",
    releases: ["Predial"],
    photo: "/artists/alef-the-boy.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/aleftheboy-music",
      beatport: "https://www.beatport.com/artist/alef-the-boy/718966",
    },
  },
  {
    name: "Augusto Klaus",
    releases: ["Predial"],
    photo: "/artists/augusto-klaus.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/augustoklaus",
      beatport: "https://www.beatport.com/artist/augusto-klaus/701520",
      instagram: "https://www.instagram.com/augustoklaus",
    },
  },
  {
    name: "Marc-lo",
    releases: ["Colheita"],
    photo: "/artists/marc-lo.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/officialc-lo",
      beatport: "https://www.beatport.com/artist/marc-lo/702780",
      instagram: "https://www.instagram.com/marc_lof",
    },
  },
  {
    name: "(duo)tone",
    releases: ["Colheita"],
    photo: "/artists/duotone.jpg",
    socials: { beatport: "https://www.beatport.com/artist/duotone/691418" },
  },
  {
    name: "Noizzed",
    releases: ["Twins Peaks", "Elise", "Colheita", "Veins"],
    photo: "/artists/noizzed.jpg",
    socials: {
      soundcloud: "https://soundcloud.com/noizzedofficial",
      beatport: "https://www.beatport.com/artist/noizzed/491379",
      instagram: "https://www.instagram.com/noizzed",
    },
  },
];

export type RadioShow = {
  episode: string;
  host: string;
  focus: string;
  duration: string;
  /** URL do set no SoundCloud — habilita o player. */
  soundcloudUrl?: string;
  /** Capa real do set (arquivo local em /public/covers). */
  cover?: string;
};

export const radioShows: RadioShow[] = [
  {
    episode: "PodaCast #01 — Le Calve",
    host: "Le Calve",
    focus: "podcast",
    duration: "mix",
    soundcloudUrl: "https://soundcloud.com/estufarec/podacast-01-le-calve",
  },
  {
    episode: "PodaCast #02 — noizzed b2b arnt",
    host: "noizzed, arnt",
    focus: "podcast",
    duration: "mix",
    cover: "/covers/podcast-noizzed-arnt.jpg",
    soundcloudUrl: "https://soundcloud.com/estufarec/noizzed-arnt",
  },
  {
    episode: "PodaCast #03 — Moka & Silvy",
    host: "Moka & Silvy",
    focus: "podcast",
    duration: "mix",
    soundcloudUrl: "https://soundcloud.com/estufarec/mokasilvy",
  },
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
    | "email"
    | "beatport";
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

export function spotifyEmbedUrl(release: Release) {
  if (!release.spotifyId) return null;
  return `https://open.spotify.com/embed/${release.spotifyType ?? "track"}/${release.spotifyId}`;
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

export type Localized = { pt: string; en: string };

export type EventItem = {
  id: string;
  type: "workshop" | "masterclass" | "showcase" | "party";
  status: "past" | "upcoming";
  date: string;
  title: Localized;
  city: Localized;
  venue?: string;
  description: Localized;
  partners?: string[];
  /** Fotos do evento (arquivos locais em /public/events). */
  photos?: string[];
  /** Link do post original no Instagram. */
  instagramUrl?: string;
};

export const events: EventItem[] = [
  {
    id: "catarse-lavanda-curitiba",
    type: "workshop",
    status: "past",
    date: "07 mar 2026",
    title: {
      pt: "Catarse + Lavanda + Estufa Rec — edição colaborativa",
      en: "Catarse + Lavanda + Estufa Rec — collaborative edition",
    },
    city: { pt: "Curitiba · PR", en: "Curitiba · PR" },
    venue: "Macro Bar e Pista",
    description: {
      pt: "Workshop de carreira e rede de sustentação na cena independente + festa com lineup 100% feminino. A Estufa mediou o workshop com convidados de booking, branding, produção e curadoria.",
      en: "Career workshop on sustaining networks in the independent scene + a party with a 100% female lineup. Estufa mediated the workshop with guests from booking, branding, production and curation.",
    },
    partners: ["Catarse", "Lavanda", "Estufa Records"],
  },
  {
    id: "masterclass-hangar-t6",
    type: "masterclass",
    status: "past",
    date: "13 ago 2024",
    title: {
      pt: "Estufa Records Apresenta: Masterclass de Música Eletrônica",
      en: "Estufa Records Presents: Electronic Music Masterclass",
    },
    city: { pt: "Florianópolis · SC", en: "Florianópolis · SC" },
    venue: "Hangar T6 Listening Bar",
    description: {
      pt: "Roda de conversa, networking e open decks para DJs, produtores e artistas: identidade artística, produção musical e direitos autorais, mixagem com vinil, produção de eventos e saúde mental.",
      en: "Talk circle, networking and open decks for DJs, producers and artists: artistic identity, music production and copyright, vinyl mixing, event production and mental health.",
    },
    photos: ["/events/masterclass-hangar-t6.webp"],
    instagramUrl: "https://www.instagram.com/p/C-Y70-9sNhz/",
  },
  {
    id: "workshop-showcase-mada",
    type: "showcase",
    status: "past",
    date: "05 jul 2024",
    title: {
      pt: "Estufa Apresenta: Workshop + Showcase no Madá Bar",
      en: "Estufa Presents: Workshop + Showcase at Madá Bar",
    },
    city: { pt: "Florianópolis · SC", en: "Florianópolis · SC" },
    venue: "Madá Bar",
    description: {
      pt: 'Workshop de mixagem com Noizzed + showcase com a estreia ao vivo do álbum "Love and Happiness" de DJ Joaum, e sets de Raquel Zanella e LUWP.',
      en: 'Mixing workshop with Noizzed + showcase with the live debut of DJ Joaum\'s album "Love and Happiness", plus sets by Raquel Zanella and LUWP.',
    },
    partners: ["joaum", "Raquel Zanella", "LUWP"],
  },
  {
    id: "workshop-showcase-hangar-t6",
    type: "workshop",
    status: "past",
    date: "18 mai 2024",
    title: {
      pt: "Workshop e showcase com Estufa Records",
      en: "Workshop and showcase with Estufa Records",
    },
    city: { pt: "Florianópolis · SC", en: "Florianópolis · SC" },
    venue: "Hangar T6",
    description: {
      pt: 'Workshop "Introdução à produção musical" (preparação, masterização, lançamento e direitos autorais) + showcase do EP de estreia de Raquel Zanella. O espaço também foi ponto de coleta para as vítimas das enchentes no RS.',
      en: '"Introduction to music production" workshop (preparation, mastering, release and copyright) + showcase of Raquel Zanella\'s debut EP. The venue also served as a donation point for the flood victims in RS.',
    },
    partners: ["Raquel Zanella"],
    photos: ["/events/hangar-t6-workshop-1.jpg", "/events/hangar-t6-workshop-2.jpg"],
    instagramUrl: "https://www.instagram.com/p/C7VClMpsQo_/",
  },
  {
    id: "fritadeira-eletronica",
    type: "party",
    status: "past",
    date: "13 fev 2024",
    title: { pt: "Fritadeira Eletrônica", en: "Fritadeira Eletrônica" },
    city: { pt: "Florianópolis · SC", en: "Florianópolis · SC" },
    venue: "Praça Tancredo Neves",
    description: {
      pt: "Bloco de carnaval ao ar livre reunindo os coletivos Chama No BocaBoca, Duna, Estufa Rec., Gritaria, Slut Rave e Tontura.",
      en: "Open-air carnival block bringing together collectives Chama No BocaBoca, Duna, Estufa Rec., Gritaria, Slut Rave and Tontura.",
    },
    partners: ["Chama No BocaBoca", "Duna", "Gritaria", "Slut Rave", "Tontura"],
    photos: ["/events/fritadeira-eletronica.webp"],
    instagramUrl: "https://www.instagram.com/p/C3oJFCqMBIM/",
  },
];

export type NewsItem = {
  id: string;
  category: "mentoria" | "imprensa" | "programa" | "parceria";
  date?: string;
  title: Localized;
  summary: Localized;
  sourceUrl?: string;
  sourceLabel?: string;
  highlight?: boolean;
};

export const news: NewsItem[] = [
  {
    id: "sebrae-txm",
    category: "mentoria",
    title: {
      pt: "Estufa mentoreada pelo Sebrae via TXM Methods",
      en: "Estufa mentored by Sebrae through TXM Methods",
    },
    summary: {
      pt: "A Estufa Records foi reconhecida e premiada pelo Sebrae como startup inovadora por sua atuação na cena cultural, por meio do programa brasileiro Co Creation Lab, da TXM Methods — incubadora de projetos da região Sul.",
      en: "Estufa Records was recognized and awarded by Sebrae as an innovative startup for its work in the cultural scene, through the Brazilian Co Creation Lab program by TXM Methods — a project incubator in the southern region.",
    },
    highlight: true,
  },
  {
    id: "edicao-colaborativa-curitiba",
    category: "imprensa",
    date: "06 mar 2026",
    title: {
      pt: "Lavanda, Catarse e Estufa Records promovem edição colaborativa em Curitiba",
      en: "Lavanda, Catarse and Estufa Records host a collaborative edition in Curitiba",
    },
    summary: {
      pt: "Cobertura da edição com lineup 100% feminino, workshop de carreira e festa no Macro Bar e Pista, em Curitiba.",
      en: "Coverage of the edition with a 100% female lineup, career workshop and party at Macro Bar e Pista, in Curitiba.",
    },
    sourceUrl:
      "https://alataj.com.br/noticias/lavanda-catarse-e-estufa-records-edicao-colaborativa",
    sourceLabel: "Alataj",
  },
  {
    id: "workshop-showcase-nd",
    category: "imprensa",
    date: "17 mai 2024",
    title: {
      pt: "Workshop e showcase com Estufa Records",
      en: "Workshop and showcase with Estufa Records",
    },
    summary: {
      pt: 'Agenda Cultural do ND+ destaca o workshop "Introdução à produção musical" e o showcase do EP de Raquel Zanella no Hangar T6.',
      en: "ND+'s Agenda Cultural highlights the \"Introduction to music production\" workshop and Raquel Zanella's EP showcase at Hangar T6.",
    },
    sourceUrl: "https://ndmais.com.br/cultura/agenda-cultural-sabado-blog-marcos-espindola/",
    sourceLabel: "ND+",
  },
  {
    id: "masterclass-2024",
    category: "programa",
    date: "13 ago 2024",
    title: {
      pt: "Masterclass de música eletrônica no Hangar T6",
      en: "Electronic music masterclass at Hangar T6",
    },
    summary: {
      pt: "Masterclass aberta com temas de identidade artística, produção musical, direitos autorais, mixagem com vinil, produção de eventos e saúde mental, encerrando com open decks.",
      en: "Open masterclass covering artistic identity, music production, copyright, vinyl mixing, event production and mental health, closing with open decks.",
    },
  },
];

export const PITCH_URL = "https://prezi.com/view/a1pnzx0GliremoT0txtr/";

export const about = {
  founded: "2018",
  origin: { pt: "Florianópolis · SC · Brasil", en: "Florianópolis · SC · Brazil" },
  intro: {
    pt: "A Estufa Records é uma gravadora independente de música eletrônica fundada em 2018 em Florianópolis/SC. Trabalhamos com os subgêneros house, minimal, electro e techno, cultivando um catálogo próprio, com calma e curadoria — como uma estufa de espécies raras.",
    en: "Estufa Records is an independent electronic music label founded in 2018 in Florianópolis/SC. We work across house, minimal, electro and techno, growing our own catalog slowly and with care — like a greenhouse of rare species.",
  },
  history: {
    pt: "Nascida em 2018 em Florianópolis, a estufa começou como um espaço de formação e experimentação para produtores locais. Desde então, cultivamos um catálogo próprio com lançamentos de house, minimal, electro e techno, realizamos workshops, masterclasses e showcases com artistas do casting e fomos reconhecidos pelo Sebrae como startup inovadora na cena cultural.",
    en: "Born in 2018 in Florianópolis, the greenhouse started as a space for training and experimentation for local producers. Since then, we have grown our own catalog across house, minimal, electro and techno, run workshops, masterclasses and showcases with roster artists, and were recognized by Sebrae as an innovative startup in the cultural scene.",
  },
  pillars: [
    {
      title: { pt: "Artistas", en: "Artists" },
      text: {
        pt: "Desenvolvimento de artistas e carreiras sustentáveis na música eletrônica, com parcerias sólidas e valores culturais claros.",
        en: "Artist development and sustainable careers in electronic music, built on solid partnerships and clear cultural values.",
      },
    },
    {
      title: { pt: "Lançamentos", en: "Releases" },
      text: {
        pt: "Curadoria, distribuição digital e um catálogo consistente, do EP ao álbum, sempre com identidade visual própria.",
        en: "Curation, digital distribution and a consistent catalog, from EP to album, always with its own visual identity.",
      },
    },
    {
      title: { pt: "Formação", en: "Education" },
      text: {
        pt: "Workshops, masterclasses e showcases que ajudam a comunidade a aprender, colaborar e crescer na cena.",
        en: "Workshops, masterclasses and showcases that help the community learn, collaborate and grow in the scene.",
      },
    },
    {
      title: { pt: "Compromisso", en: "Commitment" },
      text: {
        pt: "Compromisso com causas ambientais e os ODS da ONU. Reconhecida pelo Sebrae como startup inovadora por meio do programa Co Creation Lab da TXM Methods.",
        en: "Commitment to environmental causes and the UN SDGs. Recognized by Sebrae as an innovative startup through the TXM Methods Co Creation Lab program.",
      },
    },
  ],
  pitchLabel: {
    pt: "Conheça nosso pitch (apresentação oficial)",
    en: "Check out our official pitch",
  },
};
