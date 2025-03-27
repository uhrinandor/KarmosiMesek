export const URL = "https://karmosimesek.hu";

export const file = (path) => `${URL}/assets/${path}`;

export const link = (url) => {
  window.location.href = url;
};

export const sectionLinks = {
  KONYV: "akonyv",
  SZEREPLOK: "szereplok",
  KAOSZKUTYAK: "kaoszkutyak",
  KALAND: "kaland",
  RENDELES: "rendeles",
  KAPCSOLAT: "kapcsolat",
};
