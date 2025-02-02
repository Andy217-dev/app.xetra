"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6171],
  {
    36171: function (e, t, i) {
      i.r(t),
        i.d(t, {
          default: function () {
            return T;
          },
        });
      var a = i(57437),
        s = i(66648),
        n = i(2265),
        l = i(53267),
        r = i(87805);
      i(43034), i(17322);
      var o = i(16463),
        c = (e) => {
          let { cards: t } = e,
            i = (0, o.useRouter)();
          return (0, a.jsx)("div", {
            className: "relative w-full",
            children: (0, a.jsxs)(l.tq, {
              modules: [r.pt, r.tl],
              pagination: {
                clickable: !0,
                el: ".swiper-pagination-custom",
                bulletClass: "swiper-pagination-bullet-custom",
                bulletActiveClass: "swiper-pagination-bullet-active-custom",
                renderBullet: function (e, t) {
                  return '<span class="'.concat(t, '"></span>');
                },
              },
              loop: !0,
              slidesPerView: 1,
              autoplay: { delay: 3e3, disableOnInteraction: !0 },
              watchSlidesProgress: !0,
              children: [
                t.map((e, t) =>
                  (0, a.jsx)(
                    l.o5,
                    {
                      className:
                        "!w-full !h-[382px] md:!h-[299px] overflow-y-hidden",
                      children: (0, a.jsxs)("div", {
                        className:
                          "w-full cursor-pointer p-[1px] relative h-full",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "absolute w-full h-full p-[2px] top-0 left-0 z-0 rounded-[34px] bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)]",
                            children: (0, a.jsx)("div", {
                              className: "w-full h-full relative",
                              children: (0, a.jsx)(s.default, {
                                src: e.cover,
                                alt: "cover",
                                fill: !0,
                                style: { objectFit: "cover" },
                                className: "rounded-[32px]",
                              }),
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "relative z-10 h-full rounded-[32px] md:pl-10 md:pr-16 md:py-16 pl-4 py-8 pr-6 ",
                            children: (0, a.jsxs)("div", {
                              className:
                                "flex flex-col-reverse gap-6 md:items-center md:flex-row md:gap-0 justify-between",
                              children: [
                                (0, a.jsxs)("div", {
                                  className: "flex flex-col",
                                  children: [
                                    (0, a.jsx)("h3", {
                                      className:
                                        "text-[32px] tracking-[-0.8px] text-3xl text-white font-semibold line-clamp-2",
                                      children: e.title,
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "mt-2 mb-6  h-[40px] line-clamp-2 md:max-w-[800px] text-[14px] leading-5 tracking-[-0.14px] font-medium text-[#fff]",
                                      children: e.description,
                                    }),
                                    (0, a.jsx)("button", {
                                      onClick: () => i.push(e.link),
                                      className:
                                        "w-fit rounded-3xl p-1 bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)]",
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "rounded-2xl px-10 py-2 text-[#0E121B] bg-white text-[16px] leading-6 font-semibold tracking-[-0.16px]",
                                        children: "Try Now",
                                      }),
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(s.default, {
                                  src: e.icon,
                                  alt: "icon",
                                  width: 161.333,
                                  height: 161.333,
                                  className:
                                    "shrink-0 hidden md:block rounded-full",
                                }),
                                (0, a.jsx)(s.default, {
                                  src: e.icon,
                                  alt: "icon",
                                  width: 100.833,
                                  height: 100.833,
                                  className:
                                    "shrink-0 block md:hidden rounded-full",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    },
                    t
                  )
                ),
                (0, a.jsx)("div", {
                  className:
                    "swiper-pagination-custom flex justify-center items-center gap-2 mt-8",
                }),
              ],
            }),
          });
        };
      function d() {
        return (0, a.jsx)("div", {
          className: "w-full  md:px-10 px-4 ",
          children: (0, a.jsx)(c, {
            cards: [
              {
                title: "Solana Alpha Wallets Scanner",
                description:
                  "Track and analyze Solana wallets with advanced accuracy.",
                icon: "/_next/static/media/1.0018fd88.png",
                cover: "/_next/static/media/cover1.bc647768.png",
                link: "?type=solana-scan",
              },
              {
                title: "Ethereum Alpha Wallets For Maestro and Banana Gun",
                description:
                  "Detailed Ethereum wallet insights, optimised for advanced tools.",
                icon: "/_next/static/media/2.aef72892.png",
                cover: "/_next/static/media/cover2.a1afbc75.png",
                link: "?type=evm-scan",
              },
              {
                title: "Song Maker",
                description:
                  "Turn your ideas, themes, or keywords into your personal song in minutes. Share your creativity, and let Xetra AI help craft lyrics that speak to you, and bring your unique melody to life.",
                icon: "/_next/static/media/3.f5d4d1cc.png",
                cover: "/_next/static/media/cover3.69f00cc4.png",
                link: "?type=song-maker",
              },
              {
                title: "Deploy ERC20 Token on ETH Network",
                description:
                  "Easily deploy and manage your custom tokens on the Ethereum blockchain.",
                icon: "/_next/static/media/4.162efa26.png",
                cover: "/_next/static/media/cover4.8af48bc0.png",
                link: "?type=deploy",
              },
              {
                title: "Bubblemaps Scanner",
                description:
                  "Unlock and navigate blockchain data through interactive visual mapping tools.",
                icon: "/_next/static/media/5.40e137fd.png",
                cover: "/_next/static/media/cover5.233e54dc.png",
                link: "?type=chat&chatId=8",
              },
              {
                title: "Crypto Buy Signal ",
                description:
                  "Receive instant alerts for the best cryptocurrency buying opportunities in real-time.",
                icon: "/_next/static/media/6.6f9ab98f.png",
                cover: "/_next/static/media/cover6.ac885fe8.png",
                link: "?type=crypto",
              },
            ],
          }),
        });
      }
      var p = "/_next/static/media/trending-author.c165fd18.png",
        u = "/_next/static/media/rival.3b100a02.jpg",
        m = "/_next/static/media/upcoming.b09d4163.webp",
        h = "/_next/static/media/text.6e90705e.png",
        x = "/_next/static/media/knight.ef9307fd.jpg",
        g = "/_next/static/media/knowledge.a4215ba6.png",
        f = "/_next/static/media/path-finder.0b0378c8.png",
        b = "/_next/static/media/cityguesser.d599f107.png",
        v = "/_next/static/media/distance.f036737f.jpg";
      function y() {
        let e = (0, o.useRouter)(),
          t = (t) => {
            e.push("?type=pb-apps&appId=".concat(t));
          };
        return (0, a.jsx)("div", {
          className: "w-full  md:pl-10 pl-4 ",
          children: (0, a.jsxs)("div", {
            className: "relative w-full ",
            children: [
              (0, a.jsx)("h2", {
                className:
                  "mb-4 text-[24px] font-semibold leading-normal tracking-[-0.48px] text-primary-black",
                children: "Featured Apps",
              }),
              (0, a.jsx)("div", {
                className: "flex gap-4 flex-wrap",
                children: [
                  {
                    title: "Team Rivalry Explorer",
                    description:
                      "Analyze historical matchups, head-to-head statistics, and rivalry intensities between sports teams to uncover competitive patterns and trends.",
                    icon: p,
                    id: "sports_001",
                    cover: u,
                  },
                  {
                    title: "Upcoming Sports Events",
                    description:
                      "Track and discover upcoming sports matches, tournaments, and championships across multiple leagues and sports categories worldwide.",
                    icon: p,
                    id: "sports_002",
                    cover: m,
                  },
                  {
                    title: "Text Analysis Toolkit",
                    description:
                      "Powerful text analysis tools for sentiment analysis, keyword extraction, and content classification using advanced NLP algorithms.",
                    icon: p,
                    id: "ocr_001",
                    cover: h,
                  },
                  {
                    title: "Knight Watch",
                    description:
                      "Strategic chess analysis tool that helps players evaluate positions, analyze games, and improve their tactical awareness in real-time.",
                    icon: p,
                    id: "youtube_003",
                    cover: x,
                  },
                  {
                    title: "Knowledge Graph",
                    description:
                      "Visualize and explore complex relationships between data points, creating interactive network diagrams for better understanding of connections.",
                    icon: p,
                    id: "map_003",
                    cover: g,
                  },
                  {
                    title: "Distance Finder",
                    description:
                      "Advanced routing algorithm tool that calculates optimal paths between points while considering various constraints and preferences.",
                    icon: p,
                    id: "map_002",
                    cover: f,
                  },
                  {
                    title: "Street Guesser",
                    description:
                      "Interactive game that challenges users to identify locations worldwide based on street-level imagery and environmental clues.",
                    icon: p,
                    id: "city_001",
                    cover: b,
                  },
                  {
                    title: "Distance Calculator",
                    description:
                      "Precise tool for measuring distances between multiple points on a map, supporting various distance metrics and transportation modes.",
                    icon: p,
                    id: "city_002",
                    cover: v,
                  },
                ].map((e, i) =>
                  (0, a.jsx)(
                    "button",
                    {
                      className:
                        "!w-[352px] hover:scale-105 transition-transform duration-300 ease-in-out",
                      onClick: () => t(e.id),
                      children: (0, a.jsxs)("div", {
                        className: "w-full p-1 rounded-3xl relative group ",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "absolute top-0 left-0 w-full h-full bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)] rounded-3xl opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-20 ",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "bg-white rounded-2xl shadow-sm flex items-center justify-start gap-4 relative z-20",
                            children: [
                              (0, a.jsx)("div", {
                                className:
                                  "w-full h-full absolute top-0 left-0 rounded-2xl",
                                children: (0, a.jsx)("div", {
                                  className: "w-full h-full relative",
                                  children: (0, a.jsx)(s.default, {
                                    src: e.cover,
                                    alt: "icon",
                                    fill: !0,
                                    style: { objectFit: "cover" },
                                    className: "rounded-2xl",
                                  }),
                                }),
                              }),
                              (0, a.jsxs)("div", {
                                className:
                                  "flex flex-col gap-y-2 items-start relative z-20 pt-12 rounded-2xl bg-gradient-to-t from-black via-black via-[30%] to-transparent w-full h-full px-4 py-5  ",
                                children: [
                                  (0, a.jsx)("h3", {
                                    className:
                                      "font-semibold text-[16px] leading-6 tracking-[-0.16px] text-[#fff]",
                                    children: e.title,
                                  }),
                                  (0, a.jsx)("p", {
                                    className:
                                      "text-[#99A0AE] text-[14px] leading-5 font-normal tracking-[-0.21px] h-[60px] line-clamp-3 ",
                                    children: e.description,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    },
                    i
                  )
                ),
              }),
            ],
          }),
        });
      }
      var w = {
        src: "/_next/static/media/explore.31bc65bf.svg",
        height: 33,
        width: 32,
        blurWidth: 0,
        blurHeight: 0,
      };
      let j = [
        {
          title: "Web3",
          icon: {
            src: "/_next/static/media/web3.4047dbdb.svg",
            height: 800,
            width: 800,
            blurWidth: 0,
            blurHeight: 0,
          },
          category: "All",
        },
        {
          title: "Sports",
          icon: {
            src: "/_next/static/media/sports.58812ee3.svg",
            height: 800,
            width: 800,
            blurWidth: 0,
            blurHeight: 0,
          },
          category: "Sports",
        },
        {
          title: "Maps",
          icon: {
            src: "/_next/static/media/maps.ab3c8470.svg",
            height: 800,
            width: 800,
            blurWidth: 0,
            blurHeight: 0,
          },
          category: "Maps",
        },
        {
          title: "Text",
          icon: {
            src: "/_next/static/media/text.25d0a172.svg",
            height: 800,
            width: 800,
            blurWidth: 0,
            blurHeight: 0,
          },
          category: "Text Analysis",
        },
      ];
      function A() {
        let e = (0, o.useRouter)();
        return (0, a.jsxs)("div", {
          className:
            "w-full flex flex-col gap-6 pb-10 md:pb-0 relative h-[calc(100vh-4rem)] overflow-y-auto standard-scroll ",
          children: [
            (0, a.jsxs)("h1", {
              className:
                "flex items-center justify-start gap-4 font-semibold text-[32px] leading-normal tracking-[-0.8px] text-[#1b1b1b] md:px-10 px-4 ",
              children: [
                (0, a.jsx)(s.default, {
                  src: w,
                  alt: "Explore",
                  width: 32,
                  height: 32,
                }),
                (0, a.jsx)("span", { children: "Explore" }),
              ],
            }),
            (0, a.jsx)(d, {}),
            (0, a.jsxs)("div", {
              children: [
                (0, a.jsxs)("h1", {
                  className:
                    "flex items-center justify-start gap-4 font-semibold text-2xl leading-normal tracking-[-0.8px] text-[#1b1b1b] md:px-10 px-4 ",
                  children: [
                    (0, a.jsx)("span", { children: "Top Categories" }),
                    (0, a.jsx)("button", {
                      onClick: () => e.push("?type=store&tag=All"),
                      className: "text-[#ff306e] font-semibold text-base",
                      children: "Show all",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "mt-4",
                  children: (0, a.jsx)("div", {
                    className:
                      "flex items-center gap-4 overflow-x-auto scrollbar-hide md:px-10 px-4 flex-wrap",
                    children: j.map((t, i) =>
                      (0, a.jsxs)(
                        "button",
                        {
                          onClick: () => {
                            e.push("?type=store&tag=".concat(t.category));
                          },
                          className:
                            "flex items-center md:w-full w-fit md:max-w-[150px] gap-3 md:py-2 md:px-5 py-1 px-2.5 rounded-2xl bg-white shadow-sm hover:scale-105 transition-transform duration-300 ease-in-out  ",
                          children: [
                            (0, a.jsx)(s.default, {
                              src: t.icon,
                              alt: t.title,
                              width: 24,
                              height: 24,
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "text-base font-semibold tracking-[-0.14px] text-[#1b1b1b]",
                              children: t.title,
                            }),
                          ],
                        },
                        t.title
                      )
                    ),
                  }),
                }),
              ],
            }),
            (0, a.jsx)(y, {}),
          ],
        });
      }
      var _ = {
          src: "/_next/static/media/search.8b2d04c3.svg",
          height: 24,
          width: 24,
          blurWidth: 0,
          blurHeight: 0,
        },
        k = i(25596),
        N = {
          src: "/_next/static/media/arrow-right.4fb5a229.svg",
          height: 34,
          width: 34,
          blurWidth: 0,
          blurHeight: 0,
        },
        E = (e) => {
          let { category: t, cards: i } = e,
            n = (0, o.useRouter)(),
            c = (e, i) => {
              "prebuilt" === i
                ? n.push("?type=pb-apps&appId=".concat(e, "&tag=").concat(t))
                : n.push("?type=chat&chatId=".concat(e, "&og=store"));
            };
          return (0, a.jsxs)("div", {
            className: "relative w-full ",
            children: [
              (0, a.jsx)("h2", {
                className:
                  "mb-4 text-[24px] font-semibold leading-normal tracking-[-0.48px] text-primary-black",
                children: t,
              }),
              (0, a.jsxs)(l.tq, {
                modules: [r.W_],
                navigation: { nextEl: ".swiper-button-next", prevEl: null },
                loop: !0,
                slidesPerView: "auto",
                spaceBetween: 16,
                watchSlidesProgress: !0,
                children: [
                  i.map((e, t) =>
                    (0, a.jsx)(
                      l.o5,
                      {
                        className: "!w-[260px]",
                        children: (0, a.jsxs)("div", {
                          className: "w-full p-1 rounded-3xl relative group ",
                          children: [
                            (0, a.jsx)("div", {
                              className:
                                "absolute top-0 left-0 w-full h-full bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)] rounded-3xl opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-20 ",
                            }),
                            (0, a.jsxs)("div", {
                              className:
                                "bg-white rounded-2xl shadow-sm relative z-20",
                              children: [
                                e.cover &&
                                  (0, a.jsx)("div", {
                                    className:
                                      "w-full h-full absolute top-0 left-0 rounded-2xl",
                                    children: (0, a.jsx)("div", {
                                      className: "w-full h-full relative",
                                      children: (0, a.jsx)(s.default, {
                                        src: e.cover,
                                        alt: "icon",
                                        fill: !0,
                                        style: { objectFit: "cover" },
                                        className: "rounded-2xl",
                                      }),
                                    }),
                                  }),
                                (0, a.jsxs)("div", {
                                  className:
                                    "w-full h-full px-6 pb-4 relative z-20 rounded-2xl pt-16 bg-gradient-to-t from-black via-black via-[20%] to-transparent",
                                  children: [
                                    (0, a.jsx)("h3", {
                                      className:
                                        "font-semibold text-[16px] leading-6 tracking-[-0.16px] text-white mb-1.5 mt-4",
                                      children: e.title,
                                    }),
                                    (0, a.jsx)("p", {
                                      className:
                                        "text-[#fff] text-[12px] leading-4 font-normal tracking-[-0.12px] h-[48px] line-clamp-3",
                                      children: e.description,
                                    }),
                                    (0, a.jsx)("button", {
                                      onClick: () => c(e.id, e.type),
                                      className:
                                        "mt-8 bg- rounded-3xl p-1 bg-[linear-gradient(130deg,#8EC9FF_9%,#FF306E_56%,#F1D789_95%)]",
                                      children: (0, a.jsx)("div", {
                                        className:
                                          "rounded-2xl px-8 py-1.5 text-[#0E121B] bg-white text-[14px] leading-5 font-semibold tracking-[-0.14px] ",
                                        children: "Try Now",
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      },
                      t
                    )
                  ),
                  (0, a.jsx)("button", {
                    className:
                      "swiper-button-next absolute z-10 right-2.5 top-1/2 -translate-y-1/2  border-[1.364px] border-[#EAEAEA] bg-[rgba(194,194,194,0.10)] shadow-[0px_15px_20px_0px_rgba(0,0,0,0.05)] backdrop-blur-[13.636363983154297px] w-[60px] h-[60px]  rounded-full flex items-center justify-center transition-colors",
                    children: (0, a.jsx)(s.default, {
                      src: N,
                      alt: "arrow icon",
                      width: 32.73,
                      height: 32.73,
                    }),
                  }),
                ],
              }),
            ],
          });
        };
      function F(e) {
        let { category: t } = e,
          i = {
            Sports: [
              {
                id: "sports_001",
                title: "Team Rivalry Explorer",
                description:
                  "Explore and analyze historical team rivalries with comprehensive match statistics and head-to-head records. Track performance trends and memorable moments between rival teams across multiple seasons.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: u,
              },
              {
                id: "sports_002",
                title: "Upcoming Sports Events",
                description:
                  "Stay updated with a comprehensive calendar of upcoming sports events, matches, and tournaments across different leagues. Get detailed information about venues, teams, and match predictions for each event.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: m,
              },
              {
                id: "sports_003",
                title: "National Tournaments",
                description:
                  "Search and explore national-level tournaments across different countries and sports. Get key details about championships, venues, and participating teams.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/3.6fa4458c.png",
              },
              {
                id: "sports_004",
                title: "Sport Team Search",
                description:
                  "Discover detailed histories of sports teams from around the world. Search any team to instantly view their stadium, leagues, and legacy.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/3.2b429be3.jpg",
              },
            ],
            Chat: [
              {
                id: "speech_001",
                title: "Speech to Text",
                description:
                  "Advanced speech recognition system that converts spoken words into written text with high accuracy across multiple languages. Features real-time transcription and support for various accents and dialects.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/1.c42a17bd.jpeg",
              },
              {
                id: "ai_002",
                title: "Fantasy Rewriter",
                description:
                  "Transform everyday text into enchanting fantasy-style prose with magical flair. Convert mundane messages into epic tales worthy of ancient scrolls and mystical tomes.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/2.5ba26b1e.png",
              },
            ],
            "Media Player": [
              {
                id: "youtube_003",
                title: "Knight Watch",
                description:
                  "Specialized video player dedicated to medieval battle scenes, historical warfare, and knight combat footage. Features curated playlists of historical documentaries and battle reenactments with expert commentary.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: x,
              },
              {
                id: "youtube_001",
                title: "Smart Player",
                description:
                  "Enhanced YouTube video player with advanced playback features and customizable viewing experience. Includes playlist management, smart recommendations, and integrated community features.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/m2.bd14cbba.png",
              },
            ],
            Maps: [
              {
                id: "map_003",
                title: "Knowledge Graph",
                description:
                  "Visual mapping tool for exploring and understanding complex relationships in large datasets. Create interactive network diagrams that reveal hidden connections and patterns within your information.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: g,
              },
              {
                id: "map_002",
                title: "Realm Explorer",
                description:
                  "Interactive map explorer designed for fantasy worlds and virtual gaming environments. Navigate through detailed landscapes while discovering hidden locations and tracking in-game events.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: f,
              },
              {
                id: "map_001",
                title: "Map Master",
                description:
                  "Discover detailed location information with an intuitive map search interface. Find places worldwide and instantly view their maps, local time, weather conditions, and ratings.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/3.b4c02774.png",
              },
              {
                id: "map_004",
                title: "Path Finder",
                description:
                  "Find optimal routes between locations with multiple transportation options. Compare travel methods from walking to public transit, complete with time estimates and turn-by-turn directions.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/4.c6eb5894.png",
              },
            ],
            City: [
              {
                id: "city_001",
                title: "City Guesser",
                description:
                  "Engaging game that challenges players to identify cities from photos, street views, and cultural clues. Test your geographic knowledge while learning about different urban landscapes and cultures.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: b,
              },
              {
                id: "city_002",
                title: "Distance Calculator",
                description:
                  "Precise tool for calculating distances between cities with support for multiple transportation modes and routing options. Compare different routes while considering traffic patterns and travel restrictions.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: v,
              },
              {
                id: "city_004",
                title: "Acient Ruins Explorer",
                description:
                  "Explore historical sites and ancient ruins through immersive street and aerial views. Test your knowledge by identifying famous archaeological locations while learning about their civilization, time period, and fascinating historical facts.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/ancient.5e1909f9.jpg",
              },
            ],
            "Text Analysis": [
              {
                id: "ocr_001",
                title: "Text Analysis Toolkit",
                description:
                  "Comprehensive suite of text analysis tools for processing and understanding written content. Perform sentiment analysis, keyword extraction, and readability assessments with detailed reporting.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: h,
              },
              {
                id: "ocr_002",
                title: "Fantasy Spell Recipe",
                description:
                  "Mystical tool for translating and interpreting magical spells across different magical traditions and languages. Understand the nuances of incantations while exploring their historical origins.",
                icon: k.Z.src,
                type: "prebuilt",
                cover: "/_next/static/media/2.df7d1714.png",
              },
            ],
          };
        return (0, a.jsx)("div", {
          className: " ",
          children: (0, a.jsx)("div", {
            className: "w-full  flex flex-col gap-y-8",
            children:
              "All" === t
                ? Object.keys(i).map((e) =>
                    (0, a.jsx)(E, { category: e, cards: i[e] }, e)
                  )
                : (0, a.jsx)(E, { category: t, cards: i[t] }, t),
          }),
        });
      }
      var S = i(74912);
      function C() {
        let e = (0, o.useRouter)(),
          t = (0, o.useSearchParams)().get("tag"),
          i = [
            "Sports",
            "Chat",
            "Media Player",
            "Maps",
            "City",
            "Text Analysis",
          ],
          l = (t) => {
            e.push("?type=store&tag=".concat(t));
          };
        return (
          (0, n.useEffect)(() => {
            t && !i.includes(t) && l("All");
          }, [t]),
          (0, a.jsxs)("div", {
            className:
              "w-full h-[calc(100vh-48px)] bg-[url('/images/background-main.png')] fixed top-0 left-0 z-20 md:pl-10 pl-4 pb-10 overflow-y-scroll standard-scroll",
            children: [
              (0, a.jsxs)("h1", {
                className:
                  "flex items-center justify-start gap-4 font-semibold text-xl leading-normal tracking-[-0.8px] text-[#1b1b1b] h-16 ",
                children: [
                  (0, a.jsx)("button", {
                    onClick: () => e.push("?type=store"),
                    children: (0, a.jsx)(s.default, {
                      src: S.Z,
                      alt: "Explore",
                      width: 20,
                      height: 20,
                    }),
                  }),
                  (0, a.jsx)("span", { children: "Explore Apps" }),
                ],
              }),
              (0, a.jsx)("div", {
                className: "w-full mt-6",
                children: (0, a.jsxs)("div", {
                  className:
                    "w-full rounded-full py-3 px-4 border-4 border-[rgba(255,255,255,0.50)] flex items-center gap-3 bg-white ",
                  children: [
                    (0, a.jsx)(s.default, {
                      src: _,
                      alt: "Search",
                      width: 24,
                      height: 24,
                    }),
                    (0, a.jsx)("input", {
                      type: "text",
                      placeholder: "Search",
                      className:
                        "outline-none bg-transparent w-full text-sm placeholder:text-[14px] placeholder:leading-5 placeholder:font-medium text-[14px] leading-5 tracking-[-0.14px] text-[#1b1b1b] placeholder:text-[#AEAEAE] ",
                    }),
                  ],
                }),
              }),
              (0, a.jsxs)("div", {
                className:
                  "w-full my-6 justify-start flex items-center gap-3 flex-wrap text-[14px] leading-5 font-semibold tracking-[-0.14px]",
                children: [
                  (0, a.jsx)("button", {
                    className: "px-8 py-3 rounded-full \n          ".concat(
                      "All" === t
                        ? "bg-[#1b1b1b] text-white"
                        : "bg-[#FAFAFA] text-[#666] hover:bg-[#1b1b1b] hover:text-white ",
                      "\n          transition-colors duration-200 ease-in-out \n\n          "
                    ),
                    onClick: () => l("All"),
                    children: "All",
                  }),
                  i.map((e) =>
                    (0, a.jsx)(
                      "button",
                      {
                        className:
                          " px-5 py-3 rounded-full\n              transition-colors duration-200 ease-in-out \n              ".concat(
                            t === e
                              ? "bg-[#1b1b1b] text-white"
                              : "bg-[#FAFAFA] text-[#666] hover:bg-[#1b1b1b] hover:text-white ",
                            "\n            "
                          ),
                        onClick: () => l(e),
                        children: e,
                      },
                      e
                    )
                  ),
                ],
              }),
              (0, a.jsx)(F, { category: null != t ? t : "All" }),
            ],
          })
        );
      }
      function T() {
        let e = (0, o.useSearchParams)().get("tag");
        return (0, a.jsxs)("div", {
          className:
            "w-full flex flex-col gap-6 animate-slide-in-right overflow-hidden relative",
          children: [(0, a.jsx)(A, {}), null !== e && (0, a.jsx)(C, {})],
        });
      }
    },
    25596: function (e, t) {
      t.Z = {
        src: "/_next/static/media/author.da15568c.png",
        height: 40,
        width: 40,
        blurDataURL:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAe1BMVEVMaXGwtrZvZGmulpnJ6OuTbm3AwMmAb2+PfoSSwNheZHJDPUDHq6mFhY1qZ3KQtsyXnqrY09m4ztikkqe9usNucXpETF1aT1KZkZeHd3tnYGd/ZmSvmprt0Mzhv72AeYOYdoLI1dzIsL++lZ52ZWl8XlllTkxfVVizrK9wzfI+AAAAGnRSTlMALS/3Lf36/Pz4sSv5+q207u6y/q/utO73rce625IAAAAJcEhZcwAACxMAAAsTAQCanBgAAABHSURBVHicBcEFAoAgAASwA6Wxm7Lj/y90A/JWqYoAeXN0fK8p+pNtolhLcHkz4S+JzPnwPa/A4myKmdOgk0wxDAQw42y1wQ+RWQQ4y8XUCwAAAABJRU5ErkJggg==",
        blurWidth: 8,
        blurHeight: 8,
      };
    },
    74912: function (e, t) {
      t.Z = {
        src: "/_next/static/media/arrow-left.44bd7fb0.svg",
        height: 24,
        width: 24,
        blurWidth: 0,
        blurHeight: 0,
      };
    },
  },
]);
