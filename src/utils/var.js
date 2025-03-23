export const URL = "https://karmosimesek.hu";

export const file = (path) => `${URL}/assets/${path}`;

export const link = (url) => {
  window.location.href = url;
};
