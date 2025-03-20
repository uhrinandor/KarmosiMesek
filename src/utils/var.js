export const URL = "http://karmosimesek.hu";

export const file = (path) => `${URL}/assets/${path}`;

export const social = {
  FACEBOOK: "https://www.facebook.com/profile.php?id=61574115003931",
  TIKTOK: "https://www.tiktok.com/@karmosiur",
  INSTA: "https://www.instagram.com/karmosiur",
};

export const link = (url) => {
  window.location.href = url;
};
