// const noCookieSites = ['https://www.foxnews.com/', ]
const cookieSites = [
  {
    name: "CNN",
    url: "https://edition.cnn.com/",
    cookieSelector: "#onetrust-accept-btn-handler",
  },
  {
    name: "DW",
    url: "https://www.dw.com/en/top-stories/s-9097",
    cookieSelector: "div.primary",
  },
  {
    name: "REUTERS",
    url: "https://www.reuters.com/",
    cookieSelector: "#onetrust-accept-btn-handler",
  },
  {
    name: "ALJAZEERA",
    url: "https://www.aljazeera.com/",
    cookieSelector: "#onetrust-accept-btn-handler",
  },
  {
    name: "APnews",
    url: "https://apnews.com/",
    cookieSelector: "#onetrust-accept-btn-handler",
  },
  {
    name: "france24",
    url: "https://www.france24.com/en/",
    cookieSelector: "#didomi-notice-agree-button",
  },
  {
    name: "euronews",
    url: "https://www.euronews.com/",
    cookieSelector: "#didomi-notice-agree-button",
  },

  {
    name: "FOXNEWS",
    url: "https://www.foxnews.com/",
    cookieSelector: "#didomi-notice-agree-button",
  },
];

module.exports = { cookieSites };
