export type Release = {
  catalog: string;
  title: string;
  artists: string;
  art: number;
};

// Catálogo conforme os últimos lançamentos da Estufa Records.
export const releases: Release[] = [
  { catalog: "EST", title: "Calmaria", artists: "César Leme", art: 0 },
  { catalog: "EST", title: "Inter Pars", artists: "Arthur Dutra", art: 1 },
  { catalog: "EST", title: "Sol", artists: "Leakk, Tai Li", art: 2 },
  { catalog: "EST", title: "Twins Peaks", artists: "Noizzed, Gamalihell", art: 3 },
  { catalog: "EST", title: "Elise", artists: "Noizzed, Bmorr", art: 4 },
  { catalog: "EST", title: "Modular", artists: "Auxtin", art: 5 },
  { catalog: "EST", title: "Predial", artists: "Alef the Boy, Augusto Klaus", art: 6 },
  { catalog: "EST", title: "Colheita", artists: "Noizzed, Marc-lo, (duo)tone", art: 7 },
  { catalog: "EST", title: "Love and Happiness", artists: "joaum", art: 1 },
  { catalog: "EST", title: "Darwin", artists: "Raquel Zanella", art: 5 },
  { catalog: "EST", title: "Metropolis", artists: "César Leme", art: 6 },
  { catalog: "EST", title: "Nave Mulher", artists: "Lapax", art: 2 },
  { catalog: "EST", title: "Low Tide", artists: "Fran Trelles", art: 0 },
  { catalog: "EST", title: "Cape Town", artists: "Lexmic", art: 3 },
  { catalog: "EST", title: "Sunflora", artists: "Morgana Parel", art: 4 },
  { catalog: "EST", title: "Concreto", artists: "Mateus G", art: 7 },
];

export type Artist = { name: string; releases: string[] };

export const artists: Artist[] = [
  { name: "Noizzed", releases: ["Twins Peaks", "Elise", "Colheita"] },
  { name: "César Leme", releases: ["Calmaria", "Metropolis"] },
  { name: "Arthur Dutra", releases: ["Inter Pars"] },
  { name: "Leakk", releases: ["Sol"] },
  { name: "Tai Li", releases: ["Sol"] },
  { name: "Gamalihell", releases: ["Twins Peaks"] },
  { name: "Bmorr", releases: ["Elise"] },
  { name: "Auxtin", releases: ["Modular"] },
  { name: "Alef the Boy", releases: ["Predial"] },
  { name: "Augusto Klaus", releases: ["Predial"] },
  { name: "Marc-lo", releases: ["Colheita"] },
  { name: "(duo)tone", releases: ["Colheita"] },
  { name: "joaum", releases: ["Love and Happiness"] },
  { name: "Raquel Zanella", releases: ["Darwin"] },
  { name: "Lapax", releases: ["Nave Mulher"] },
  { name: "Fran Trelles", releases: ["Low Tide"] },
  { name: "Lexmic", releases: ["Cape Town"] },
  { name: "Morgana Parel", releases: ["Sunflora"] },
  { name: "Mateus G", releases: ["Concreto"] },
];

export const radioShows = [
  { episode: "Estufa Radio 04", host: "Noizzed", focus: "minimal & dub techno", duration: "62 min" },
  { episode: "Estufa Radio 03", host: "César Leme", focus: "deep house", duration: "58 min" },
  { episode: "Estufa Radio 02", host: "Lapax", focus: "electro", duration: "71 min" },
  { episode: "Estufa Radio 01", host: "Auxtin", focus: "techno", duration: "64 min" },
];

export const CONTACT_EMAIL = "estufarec@gmail.com";
