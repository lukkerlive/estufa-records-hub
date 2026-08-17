export type Release = {
  catalog: string;
  title: string;
  artist: string;
  year: string;
  genre: string;
};

export const releases: Release[] = [
  { catalog: "EST012", title: "Nébula Húmida", artist: "Nêmesis Dub", year: "2026", genre: "minimal" },
  { catalog: "EST011", title: "Vidro Fosco EP", artist: "Ana Vetor", year: "2025", genre: "electro" },
  { catalog: "EST010", title: "Clorofila", artist: "Marco Túlio", year: "2025", genre: "house" },
  { catalog: "EST009", title: "Sub Trópico", artist: "Kaue Bruto", year: "2024", genre: "techno" },
  { catalog: "EST008", title: "Orvalho", artist: "Duo Estufa", year: "2024", genre: "minimal" },
  { catalog: "EST007", title: "Raiz Sintética", artist: "Lia Cavo", year: "2023", genre: "house" },
  { catalog: "EST006", title: "Fotossíntese 2AM", artist: "Nêmesis Dub", year: "2023", genre: "techno" },
  { catalog: "EST005", title: "Espécies Raras", artist: "V/A", year: "2022", genre: "compilação" },
];

export type Artist = {
  name: string;
  city: string;
  style: string;
  bio: string;
};

export const artists: Artist[] = [
  {
    name: "Nêmesis Dub",
    city: "Florianópolis, BR",
    style: "minimal / techno",
    bio: "Batidas hipnóticas e dub subaquático gravadas em fitas de quatro canais.",
  },
  {
    name: "Ana Vetor",
    city: "São Paulo, BR",
    style: "electro",
    bio: "Máquinas clássicas, breaks quebrados e melodias de estufa fria.",
  },
  {
    name: "Marco Túlio",
    city: "Porto Alegre, BR",
    style: "house",
    bio: "House orgânico com samples de campo e grooves alongados.",
  },
  {
    name: "Kaue Bruto",
    city: "Curitiba, BR",
    style: "techno",
    bio: "Techno cru e direto, pensado para sistemas de som grandes.",
  },
  {
    name: "Lia Cavo",
    city: "Rio de Janeiro, BR",
    style: "deep house",
    bio: "Texturas úmidas, baixos redondos e vocais processados.",
  },
  {
    name: "Duo Estufa",
    city: "Florianópolis, BR",
    style: "minimal",
    bio: "Projeto residente da casa, feito de improvisos ao vivo.",
  },
];

export const radioShows = [
  { episode: "Estufa Radio 014", host: "Nêmesis Dub", duration: "62 min", focus: "minimal & dub techno" },
  { episode: "Estufa Radio 013", host: "Ana Vetor", duration: "58 min", focus: "electro clássico" },
  { episode: "Estufa Radio 012", host: "Lia Cavo", duration: "71 min", focus: "deep house" },
  { episode: "Estufa Radio 011", host: "Kaue Bruto", duration: "64 min", focus: "techno" },
];

export const CONTACT_EMAIL = "estufarec@gmail.com";
