import { React, useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import {Sidebar,Videos} from "./";
import {fetchFromAPI} from "../utils/fetchFromAPI";

const Feed = () => {

  const [selectedCategory, setSelectedCategory] = useState("New")
  const [videos, setVideos] = useState([
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#channel",
            "channelId": "UCmXmlB4-HJytD7wek0Uo97A"
        },
        "snippet": {
            "publishedAt": "2018-12-25T10:37:24Z",
            "channelId": "UCmXmlB4-HJytD7wek0Uo97A",
            "title": "JavaScript Mastery",
            "description": "Master modern web development with a project-based approach.",
            "thumbnails": {
                "default": {
                    "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s88-c-k-c0xffffffff-no-rj-mo"
                },
                "medium": {
                    "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s240-c-k-c0xffffffff-no-rj-mo"
                },
                "high": {
                    "url": "https://yt3.ggpht.com/wg1TITEoPfxvBGfzuqWyt3bqm_qu35ZhMswUv3feetU3xNX_6wsAXZF40OlPIgY4TmqbqCmAZ1U=s800-c-k-c0xffffffff-no-rj-mo"
                }
            },
            "channelTitle": "JavaScript Mastery",
            "liveBroadcastContent": "none",
            "publishTime": "2018-12-25T10:37:24Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "4WJe8I7NP48"
        },
        "snippet": {
            "publishedAt": "2024-06-23T18:11:13Z",
            "channelId": "UCyMJCUxEJGZJSBtw7QKC_lw",
            "title": "🔴 LIVE STREAM | Warwickshire v Hampshire | Day One | County Championship",
            "description": "Watch Day One of the Vitality County Championship fixture between Warwickshire and Hampshire at Edgbaston from 11am on ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4WJe8I7NP48/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4WJe8I7NP48/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4WJe8I7NP48/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "WarwickshireCCC",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T18:11:13Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "eV7U0G5GbSA"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:48:45Z",
            "channelId": "UC3iWcEeHV3e1vBAeUlutBTA",
            "title": "cricket highlights",
            "description": "_*⋗𒆜 ICC Men's World T20 𒆜⋖*_ _*꧁2024꧂*_ _*   SUPER EIGHTS *_ _*8 Teams | 12 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/eV7U0G5GbSA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/eV7U0G5GbSA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/eV7U0G5GbSA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Pakistan",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T17:48:45Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "nPKU1Qp2u3U"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:41:54Z",
            "channelId": "UCE-ZOAWt9qAnpoyZWxcXBAA",
            "title": "Enfield 1st XI v Rochdale 1st XI",
            "description": "Enfield 1st XI v Rochdale 1st XI Sunday 23rd June 2024 . Match starts 1pm.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/nPKU1Qp2u3U/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/nPKU1Qp2u3U/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/nPKU1Qp2u3U/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Enfield Cricket Club Lancashire",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T17:41:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "6nOd7RrxnxA"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:39:49Z",
            "channelId": "UCzpKcXOP32CxF-X6iTpM7EQ",
            "title": "🔴 ECS Czechia, 2024 | Day 7 | 23 Jun 2024 | T10 Live Cricket | European Cricket",
            "description": "Latest Scores & Fixtures: https://www.ecn.cricket/scores-fixtures Telegram Channel: https://t.me/europeancricketofficialchannel For ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/6nOd7RrxnxA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/6nOd7RrxnxA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/6nOd7RrxnxA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ECN - European Cricket Network",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T17:39:49Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "XPEYXPLtzgY"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:28:04Z",
            "channelId": "UCoaTEjAv544sSraZPA1qBKA",
            "title": "🔴LIVE - IND vs AUS T20 WC Cricket Match Today | Cricket 24 Gameplay #indvsaus",
            "description": "Get ready for some intense Cricket 24 gameplay in this thrilling video! Watch as teams from India and Australia go head to head in ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/XPEYXPLtzgY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/XPEYXPLtzgY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/XPEYXPLtzgY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Xoro The Gamer",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T17:28:04Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "6YUlvtSZwSw"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:14:08Z",
            "channelId": "UCtfn5ygilrwSBQ7oYcqY41Q",
            "title": "ENGLAND VS USA FULL HIGHLIGHTS ICC T20 CRICKET WORLD CUP 2024 | ENG VS USA",
            "description": "ENGLAND VS USA FULL HIGHLIGHTS ICC T20 CRICKET WORLD CUP 2024 | ENG VS USA FULL HIGHLIGHTS ICC T20 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/6YUlvtSZwSw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/6YUlvtSZwSw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/6YUlvtSZwSw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "All Pakistan Kabaddi",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T17:14:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "-YdTvj6VzPM"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:14:26Z",
            "channelId": "UCHxYDy5uZ3tCaM3fn2Y3U-g",
            "title": "England vs United States Match Live | Live Score &amp; Commentary | ENG vs USA T20 World Cup Match Live",
            "description": "livestream #cricketlive #cricket England vs United States Match Live | Live Score & Commentary | ENG vs USA T20 World Cup ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/-YdTvj6VzPM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/-YdTvj6VzPM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/-YdTvj6VzPM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Iqbal Sports",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T17:14:26Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "QYDUPNhnXJs"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:14:05Z",
            "channelId": "UCQQTpEYwV10WHWH9YD3TCSQ",
            "title": "🔴Live : USA vs ENG | যুক্তরাষ্ট্র vs ইংল্যান্ড | T20 বিশ্বকাপ | Super 8 | United States vs England",
            "description": "This video you are watching ICC Mens T20 World Cup 2024, United States vs England, 49th Match, Super 8 Group 2 - Live ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/QYDUPNhnXJs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/QYDUPNhnXJs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/QYDUPNhnXJs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "CRICKET NEWS BD",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T17:14:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "cAgivM0Q9aQ"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:06:05Z",
            "channelId": "UC0GmLw5MOFYkcyYJlqaH2bg",
            "title": "Its India vs Australia 😱 अब पीछे नहीं हटना | AFG Jayega Semi? | Big victory for England against USA",
            "description": "India vs Australia T20 World Cup : The biggest match of this World Cup. If Australia loses he will go home, And if India loses then ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/cAgivM0Q9aQ/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/cAgivM0Q9aQ/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/cAgivM0Q9aQ/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "AB Cricinfo",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T17:06:05Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "SjCCicHnTxM"
        },
        "snippet": {
            "publishedAt": "2024-06-23T17:00:50Z",
            "channelId": "UCZseYDiMwYkWqFYKihfta2w",
            "title": "India vs South Africa Women Live Match Today | INDW vs SAW 3rd ODI Live Score Commentary | IND vs SA",
            "description": "IND Women vs SA Women Live Cricket Match Today | Live Cricket Score and Commentary | India Women vs South Africa Women ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/SjCCicHnTxM/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/SjCCicHnTxM/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/SjCCicHnTxM/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Channel Cricket",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T17:00:50Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "Lb8JYkpOvHI"
        },
        "snippet": {
            "publishedAt": "2024-06-23T16:49:02Z",
            "channelId": "UCjFw-0Vdfy2KW78NClGECXw",
            "title": "🔴ENGLAND VS USA: Semifinal में पहुँचा England, India Afghanistan अब कौन करेगा Qualify?",
            "description": "ENGLAND VS USA: Semifinal में पहुँचा England, India Afghanistan अब कौन करेगा Qualify? Here's your ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Lb8JYkpOvHI/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Lb8JYkpOvHI/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Lb8JYkpOvHI/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Sports Yaari",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T16:49:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "jvONjtB0oHU"
        },
        "snippet": {
            "publishedAt": "2024-06-23T16:45:06Z",
            "channelId": "UCCz8uGU04BgaZ1XlJU-S7fw",
            "title": "Give your suggestion #punjabi #punjabisong #cricket #viral #viralvideo #cricketlover #ipl",
            "description": "Join comment box out or not out.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/jvONjtB0oHU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/jvONjtB0oHU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/jvONjtB0oHU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Versatile Cr🏏cketers",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T16:45:06Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "ZHqXEV_8kRw"
        },
        "snippet": {
            "publishedAt": "2024-06-23T16:25:40Z",
            "channelId": "UCtfn5ygilrwSBQ7oYcqY41Q",
            "title": "ENGLAND VS USA HIGHLIGHTS ICC T20 CRICKET WORLD CUP 2024 MATCH | ENG VS USA",
            "description": "ENGLAND VS USA HIGHLIGHTS ICC T20 CRICKET WORLD CUP 2024 MATCH | ENG VS USA HIGHLIGHTS ICC T20 CRICKET ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ZHqXEV_8kRw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ZHqXEV_8kRw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ZHqXEV_8kRw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "All Pakistan Kabaddi",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T16:25:40Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "KZvGzeA2v5w"
        },
        "snippet": {
            "publishedAt": "2024-06-23T15:20:54Z",
            "channelId": "UC94yIecUbmD0GTKh_dUVbpQ",
            "title": "AFGHANISTAN CRICKET   FROM UNDERDOGS TO GIANT SLAYERS | THE SPORTS SCHOLAR",
            "description": "Join us as we explore the incredible journey of Afghanistan's cricket team, from underdogs to giant slayers. Witness their ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KZvGzeA2v5w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KZvGzeA2v5w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KZvGzeA2v5w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "The Sports Scholar",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T15:20:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "mqu-nXEnci4"
        },
        "snippet": {
            "publishedAt": "2024-06-23T15:16:00Z",
            "channelId": "UCOBt6NCLOVOgWtqzd8MsedQ",
            "title": "INDIA W VS SOUTH AFRICA W 3RD ODI HIGHLIGHTS 2024 | IND VS SA WOMEN",
            "description": "cricket #highlights #indvssa India women vs South Africa Woman highlights India women vs South Africa Woman highlights ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/mqu-nXEnci4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/mqu-nXEnci4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/mqu-nXEnci4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "NAAT KI DUNYA",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T15:16:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "AQod3ph8P4Q"
        },
        "snippet": {
            "publishedAt": "2024-06-23T15:14:26Z",
            "channelId": "UCwEL42v_-RNq0rkMD6dro8A",
            "title": "Pakistan Cricket team have become Pushovers - Viwer&#39;s Perspective",
            "description": "I share an insight on why Pakistan Cricket is where it is today and have pushovers as the focus was never in building a Cricketing ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/AQod3ph8P4Q/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/AQod3ph8P4Q/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/AQod3ph8P4Q/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Akash Banerjee",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T15:14:26Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "lAODu8xTE7I"
        },
        "snippet": {
            "publishedAt": "2024-06-23T15:05:31Z",
            "channelId": "UCIcozZCsbhhAi_pxABpmDXQ",
            "title": "Batsman at the Non-Strikers End! #cricket #englandcricket #pakistancricket #indiacricket #T20 #IPL",
            "description": "My brain at the non strikers every time… #cricket #cricketlovers #cricketfans #cricketfever #cricketnews #cricketmatch ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lAODu8xTE7I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lAODu8xTE7I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lAODu8xTE7I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Rain Card Cricket",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T15:05:31Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "2wl-8cuN1T0"
        },
        "snippet": {
            "publishedAt": "2024-06-23T13:43:02Z",
            "channelId": "UCycGKw7CkxUpZBJAJ70u1uA",
            "title": "Afghanistan celebrates victory against Australia in T20 World Cup 2024 | kaif Reaction",
            "description": "Afghanistan celebrates victory against Australia in T20 World Cup 2024 | kaif Reaction Afghanistan victory celebration ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/2wl-8cuN1T0/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/2wl-8cuN1T0/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/2wl-8cuN1T0/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cricket Virket",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T13:43:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "WhvjqQcaEQc"
        },
        "snippet": {
            "publishedAt": "2024-06-23T13:38:35Z",
            "channelId": "UCwzrgPOZqgDVQML8ahHMNrw",
            "title": "MUZAFFARPUR CRICKET LEAGUE 2024 (BIHAR) (FINAL DAY)",
            "description": "MUZAFFARPUR CRICKET LEAGUE 2024 (BIHAR)",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/WhvjqQcaEQc/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/WhvjqQcaEQc/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/WhvjqQcaEQc/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "MSCC Forbesganj",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T13:38:35Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "RwIqe0eKjjo"
        },
        "snippet": {
            "publishedAt": "2024-06-23T12:15:07Z",
            "channelId": "UCPckg9pijh0KjJm4X0Xhviw",
            "title": "Afghanistan अगर इतने Run/Over से जीत गई तो Semi Final पक्का! Australia &#39;जीत कर&#39; भी हो जाएगी बाहर!",
            "description": "afghanishtan #ausvsafg #t20worldcup2024 #news24sports Afghanistan अगर इतने Run/Over से जीत गई तो Semi ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/RwIqe0eKjjo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/RwIqe0eKjjo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/RwIqe0eKjjo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "News24 Sports",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T12:15:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "RAvpkVfepkg"
        },
        "snippet": {
            "publishedAt": "2024-06-23T11:37:22Z",
            "channelId": "UCPL5fp6DaVlNPbT2yMIHM8w",
            "title": "MUZAFFARPUR CRICKET LEAGUE 2024 (BIHAR) (FINAL DAY)",
            "description": "A Plus Sports Brand Official Youtube Channel for Tennis Cricket live events and tournament coverage. We specialized in ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/RAvpkVfepkg/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/RAvpkVfepkg/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/RAvpkVfepkg/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "A Plus Sports",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T11:37:22Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "poU7qKBh4U4"
        },
        "snippet": {
            "publishedAt": "2024-06-23T10:33:02Z",
            "channelId": "UCZ7Ja0f0VeqIuD4a5j7oUmg",
            "title": "Live Cricket Match | Redmond Titans ARCL vs Seattle Sharks | 22-Jun-24 01:03 PM | CricHeroes",
            "description": "Watch Full Scorecard on CricHeroes: https://matchscorecard.page.link/Qo5BcFrUvix9wPns7 Individual match Teams: Redmond ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/poU7qKBh4U4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/poU7qKBh4U4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/poU7qKBh4U4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Redmond Titans Cricket",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T10:33:02Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "YM03GEOfQsw"
        },
        "snippet": {
            "publishedAt": "2024-06-23T10:27:16Z",
            "channelId": "UCWqJ81pB23LIaEG-CoI4ZlA",
            "title": "Pak public React 😂 on Maxwell crying 😂 after Afganistan Won cricket Match T20 World Cup 🤣",
            "description": "pak media on amir bowling in super over pak media on babar azam batting vs usa pak media on usa vs pakistan super over ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/YM03GEOfQsw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/YM03GEOfQsw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/YM03GEOfQsw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Kanairia Research",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T10:27:16Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "M4wGhvXxe-Y"
        },
        "snippet": {
            "publishedAt": "2024-06-23T10:00:27Z",
            "channelId": "UCIftFkdtKHyyL5trWxVgL4Q",
            "title": "Me: a clueless #American watching cricket for the first time ever #cricketworldcup #t20cricket",
            "description": "Me: a clueless #American watching cricket for the first time ever #cricketworldcup #t20cricket.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/M4wGhvXxe-Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/M4wGhvXxe-Y/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/M4wGhvXxe-Y/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Landon Kissell",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T10:00:27Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "savJnqFiItk"
        },
        "snippet": {
            "publishedAt": "2024-06-23T09:31:50Z",
            "channelId": "UCmcF0D7ZYX-zwtKousZZcoA",
            "title": "Live: England vs United States | Live Scores &amp; Commentary | ENG Vs USA | ICC T20 World Cup 2024",
            "description": "Live: England vs United States | Live Scores & Commentary | ENG Vs USA | ICC T20 World Cup 2024 For queries: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/savJnqFiItk/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/savJnqFiItk/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/savJnqFiItk/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "CricTalks2",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T09:31:50Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "x1tdP1Qcr_k"
        },
        "snippet": {
            "publishedAt": "2024-06-23T09:28:33Z",
            "channelId": "UCw4J5iplLA_DrdJ4XL3m2rA",
            "title": "Live: ENG Vs USA, Barbados | Live Scores &amp; Commentary | England vs United States, ICC T20 WC",
            "description": "Live: ENG Vs USA, Barbados | Live Scores & Commentary | England vs United States | ICC T20 World Cup 2024 For queries: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/x1tdP1Qcr_k/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/x1tdP1Qcr_k/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/x1tdP1Qcr_k/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "CricTalks Live",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T09:28:33Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "JfjA3SWD2x0"
        },
        "snippet": {
            "publishedAt": "2024-06-23T09:30:07Z",
            "channelId": "UCC3mTGH0MSdhpKR9lEzPN5g",
            "title": "Pak Media Crying 10 Lakh Afghani Celebrated Afg Win | AFG VS AUS T20 WC Highlights | Pak Reacts",
            "description": "Pak Media Crying 10 Lakh Afghani Celebrated Afg Win | AFG VS AUS T20 WC Highlights | Pak Reacts afghanistan beat australia ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/JfjA3SWD2x0/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/JfjA3SWD2x0/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/JfjA3SWD2x0/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "HINDUSTAN FIRST",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T09:30:07Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "WXJJNlI9D0A"
        },
        "snippet": {
            "publishedAt": "2024-06-23T09:26:26Z",
            "channelId": "UCBzAuf4q6NKG7CDXGRMb6Kw",
            "title": "Live: ENG Vs USA, Barbados | Live Scores &amp; Commentary | England vs United States | ICC T20WC",
            "description": "Live: ENG Vs USA, Barbados | Live Scores & Commentary | England vs United States | ICC T20 World Cup 2024 For queries: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/WXJJNlI9D0A/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/WXJJNlI9D0A/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/WXJJNlI9D0A/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "CricTalks Live Coverage",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T09:26:26Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "tTnPIEh7P4E"
        },
        "snippet": {
            "publishedAt": "2024-06-23T09:28:28Z",
            "channelId": "UCJrpiw6dS09Zx2Z8d9AFWDA",
            "title": "Live: ENG Vs USA, Barbados | Live Scores &amp; Commentary | England vs United States | ICC T20 World Cup",
            "description": "Live: ENG Vs USA, Barbados | Live Scores & Commentary | England vs United States | ICC T20 World Cup 2024 For queries: ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/tTnPIEh7P4E/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/tTnPIEh7P4E/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/tTnPIEh7P4E/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "CricTalks",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T09:28:28Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "KLvX2TAosxU"
        },
        "snippet": {
            "publishedAt": "2024-06-23T09:07:48Z",
            "channelId": "UCFn6z8u407vKQ66D8Duky5g",
            "title": "England&#39;s County Cricket vs Indian Domestic Cricket - Explained by Wasim Jaffer",
            "description": "cricketlovers #cricketreels #teamindia Follow us on Social Media : Facebook : https://www.facebook.com/Sports.Tonight.",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/KLvX2TAosxU/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/KLvX2TAosxU/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/KLvX2TAosxU/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Sports Tonight",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T09:07:48Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "EI5BXQWcxAs"
        },
        "snippet": {
            "publishedAt": "2024-06-23T09:02:35Z",
            "channelId": "UCkmTDWu-zTgXxGRRrEW2hGA",
            "title": "Shahzad Nagori Out #cricket #cricketleague #cricketlover #pakistanpsl #house #t20cricketleague #ipl",
            "description": "cricketfan #virlshort #sports #beautiful #duet #automobile #circketgame #cricketfan ##kesfet #cricketfan #shoiabriaz #cricket ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/EI5BXQWcxAs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/EI5BXQWcxAs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/EI5BXQWcxAs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "NAGORI CRICKET",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T09:02:35Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "7TQ0o_0TmZQ"
        },
        "snippet": {
            "publishedAt": "2024-06-23T08:13:14Z",
            "channelId": "UCTtkVP_v56wU8zXpVBpdaZQ",
            "title": "🎥 DAY ONE LIVE STREAM | Kent vs. Lancashire",
            "description": "Live action from The Spitfire Ground, St Lawrence in the 172nd Canterbury Cricket Week. 🎟️ Get your tickets at ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/7TQ0o_0TmZQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/7TQ0o_0TmZQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/7TQ0o_0TmZQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Kent Cricket",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T08:13:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "ua7ZDVcOQbQ"
        },
        "snippet": {
            "publishedAt": "2024-06-23T08:10:00Z",
            "channelId": "UCPckg9pijh0KjJm4X0Xhviw",
            "title": "T20 WC : AFG से हार पर भड़के Aus कप्तान Mitchell Marsh, Team India को चेतावनी, मैदान पर निकाली भड़ास",
            "description": "t20worldcup2024 #ausvsagh #super8 #semifinal #news24sports T20 WC : AFG से हार पर भड़के Aus कप्तान ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ua7ZDVcOQbQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ua7ZDVcOQbQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ua7ZDVcOQbQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "News24 Sports",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T08:10:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "1TiAib-am3k"
        },
        "snippet": {
            "publishedAt": "2024-06-23T08:01:25Z",
            "channelId": "UCbXgmEHL4dbZe25jD5MA8Uw",
            "title": "Why did the Australian loser team misbehave with the Afghanistan players?",
            "description": "Why did the Australian loser team misbehave with the Afghanistan players? My First Channel Link   ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1TiAib-am3k/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1TiAib-am3k/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1TiAib-am3k/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Pathan Bhai Reaction",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T08:01:25Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "cGLom6Tt4PQ"
        },
        "snippet": {
            "publishedAt": "2024-06-23T07:52:20Z",
            "channelId": "UC34EfSE2jV9t_duVl4yP4Cg",
            "title": "Pak media crying on Afghanistan beat Australia by 21 runs - Pak media on Afghanistan victory vs AUS",
            "description": "Hello friends in this video we are talking about Afghanistan beat Australia by 21 runs #pakmediaonindiaafghanistanfriendship ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/cGLom6Tt4PQ/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/cGLom6Tt4PQ/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/cGLom6Tt4PQ/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Duniyadari",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T07:52:20Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "HdRlj0nyo6M"
        },
        "snippet": {
            "publishedAt": "2024-06-23T07:46:10Z",
            "channelId": "UCEiCmSMqNJ-qqeW9fEUcA4g",
            "title": "Afghanistan Makes History, Australia on the Brink! | AUS vs AFG",
            "description": "0:00 Intro 2:51 #AskTGC 5:53 Totally Deserved 10:06 Garbaz & Zadran 16:09 Gulbadin 22:57 Cats Pigeons Check out our ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/HdRlj0nyo6M/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/HdRlj0nyo6M/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/HdRlj0nyo6M/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "The Grade Cricketer",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T07:46:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "096Q6jqAqQs"
        },
        "snippet": {
            "publishedAt": "2024-06-23T07:38:14Z",
            "channelId": "UC0GmLw5MOFYkcyYJlqaH2bg",
            "title": "Unbelievable Twist 😱 Afghanistan beat Australia | बवाल काट दिया अफगानिस्तान ने 😂 Gurbaz &amp; Gulbadin",
            "description": "Unbelievable Twist Afghanistan beat Australia | बवाल काट दिया अफगानिस्तान ने Gurbaz & Gulbadin ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/096Q6jqAqQs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/096Q6jqAqQs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/096Q6jqAqQs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "AB Cricinfo",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T07:38:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "lfhW_Rmp-is"
        },
        "snippet": {
            "publishedAt": "2024-06-23T07:27:59Z",
            "channelId": "UC3zJ8l4pjPN9GwD-cieA7XA",
            "title": "AUS vs AFG: ऑस्ट्रेलिया से जीत के बाद Rashid Khan ने भारत पर दिया चौकाने वाला बयान",
            "description": "Telegram :- https://t.me/+-bE34JYdmGxiMDll Email:- cric7business@gmail.com Instagram➡️ ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lfhW_Rmp-is/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lfhW_Rmp-is/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lfhW_Rmp-is/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "First Cricket",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T07:27:59Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "s8QnmM-YkSw"
        },
        "snippet": {
            "publishedAt": "2024-06-23T07:18:12Z",
            "channelId": "UC0jYD7LD_ZBPddZ35HS9NTg",
            "title": "Think You Know Cricket? 🏏 Try These Trivia Questions 28! 🤔 #cricket",
            "description": "Test your cricket knowledge with these fun and challenging trivia questions! Can you answer them all correctly?",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/s8QnmM-YkSw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/s8QnmM-YkSw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/s8QnmM-YkSw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cricket Moneyball",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T07:18:12Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "hx_QbumtODY"
        },
        "snippet": {
            "publishedAt": "2024-06-23T07:17:08Z",
            "channelId": "UC0jYD7LD_ZBPddZ35HS9NTg",
            "title": "Think You Know Cricket? 🏏 Try These Trivia Questions 27! 🤔 #cricket",
            "description": "Test your cricket knowledge with these fun and challenging trivia questions! Can you answer them all correctly?",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/hx_QbumtODY/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/hx_QbumtODY/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/hx_QbumtODY/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cricket Moneyball",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T07:17:08Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "ycLDhfA0rP4"
        },
        "snippet": {
            "publishedAt": "2024-06-23T07:08:14Z",
            "channelId": "UCz2yxQJZgiB_5elTzqV7FiQ",
            "title": "LIVE : Khel Ka Junoon Special Cricket Transmission | T20 World Cup 2024 Latest Updates | BOL News",
            "description": "LIVE : Khel Ka Junoon Special Cricket Transmission | T20 World Cup 2024 Latest Updates | BOL News #T20WorldCup2024 ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/ycLDhfA0rP4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/ycLDhfA0rP4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/ycLDhfA0rP4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "BOL News",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T07:08:14Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "izruvS1h7Ng"
        },
        "snippet": {
            "publishedAt": "2024-06-23T06:44:33Z",
            "channelId": "UC1SC0EAixPdfQZHGywNk4Qw",
            "title": "Afghanistan vs Australia Live | AFG vs AUS Live Cricket | ICC T20 World Cup 2024 Live Commentary",
            "description": "Let us go back in time to the ICC ODI World Cup 2023. While defending 291 runs Afghanistan was on the cusp of history with the ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/izruvS1h7Ng/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/izruvS1h7Ng/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/izruvS1h7Ng/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Chandan Commentary",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T06:44:33Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "pFXdx4LjNUw"
        },
        "snippet": {
            "publishedAt": "2024-06-23T06:28:33Z",
            "channelId": "UCdFZnFf0nGeync5_gLJvcfg",
            "title": "Cricket Fans in Khost Province Celebrate Afghanistan&#39;s Famous Win over Australia | T20WorldCup | ACB",
            "description": "Cricket fans converge in large numbers in Khost province to celebrate #AfghanAtalan's historic win over Australia in the ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/pFXdx4LjNUw/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/pFXdx4LjNUw/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/pFXdx4LjNUw/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Afghanistan Cricket Board",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T06:28:33Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "nTKaGhcyPDI"
        },
        "snippet": {
            "publishedAt": "2024-06-23T06:15:26Z",
            "channelId": "UCtp9J0M6NS1ciF0e7RCPN3g",
            "title": "We went camping / beach but ending up playing cricket! Cricket for life! #canada #cricket",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/nTKaGhcyPDI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/nTKaGhcyPDI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/nTKaGhcyPDI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "zlondonwala",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T06:15:26Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "W2ALJ-xOpyA"
        },
        "snippet": {
            "publishedAt": "2024-06-23T06:12:10Z",
            "channelId": "UCNEVJs0jzWmx9Eo0JtmHijA",
            "title": "Comparison: MS Dhoni VS Rishabh Pant",
            "description": "Please Like & Subscribe This Video! Find out the complete Comparison: MS Dhoni VS Rishabh Pant. #ipl2024 #dhonivspant ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/W2ALJ-xOpyA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/W2ALJ-xOpyA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/W2ALJ-xOpyA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Quick Data 101",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T06:12:10Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "UvPBjM3LCs8"
        },
        "snippet": {
            "publishedAt": "2024-06-23T06:05:00Z",
            "channelId": "UCPckg9pijh0KjJm4X0Xhviw",
            "title": "Afghanistan ने Australia को हराकर Semifinal का टिकट किया लगभग पक्का| Points Table| NRR| Match|",
            "description": "t20worldcup2024 #afgvsaus #teamindia #pointstable #cricket #news24sports Afghanistan ने Australia को हराकर ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/UvPBjM3LCs8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/UvPBjM3LCs8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/UvPBjM3LCs8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "News24 Sports",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T06:05:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "Kbm4jElURZA"
        },
        "snippet": {
            "publishedAt": "2024-06-23T06:04:54Z",
            "channelId": "UChf6U5RGIeZ165MQgJbKrKA",
            "title": "🔴Live: INDIA vs AUSTRALIA T20 WC 2024 Live Cricket Match Today |IND vs AUS |#indvsaus #cricketlive",
            "description": "Live: INDIA vs AUSTRALIA T20 WC 2024 Live Cricket Match Today |IND vs AUS |#indvsaus #cricketlive NOTE: This is not real ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Kbm4jElURZA/default_live.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Kbm4jElURZA/mqdefault_live.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Kbm4jElURZA/hqdefault_live.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "KG SPORTS",
            "liveBroadcastContent": "live",
            "publishTime": "2024-06-23T06:04:54Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "1VN2tHxkgTo"
        },
        "snippet": {
            "publishedAt": "2024-06-23T05:37:47Z",
            "channelId": "UComEwov1oDwZ6Z80C3zf7Rw",
            "title": "Game on hai Afghanistan beat Australia by 21 Runs | Pre match analysis by Shoaib Akhtar &amp; Hafeez",
            "description": "Game on hai Afghanistan beat Australia by 21 Runs | Pre match analysis by Shoaib Akhtar & Hafeez #gameonhai #analysis ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/1VN2tHxkgTo/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/1VN2tHxkgTo/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/1VN2tHxkgTo/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cricket Bonding ",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T05:37:47Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "GdXYSTeLSiA"
        },
        "snippet": {
            "publishedAt": "2024-06-23T05:14:33Z",
            "channelId": "UCa5gsGwRqlzPuaPcKK3MXSA",
            "title": "Rashid Khan &amp; Mitchell Marsh post match press conference | AFG vs AUS, T20 World Cup | AUS vs AFG",
            "description": "Rashid Khan's Afghanistan beat Australia by 21 runs in the Super 8 match and stayed alive in the competition. The Afghans also ...",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/GdXYSTeLSiA/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/GdXYSTeLSiA/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/GdXYSTeLSiA/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cric-Mate Voice",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-23T05:14:33Z"
        }
    }
])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setVideos(data.items))
  }, [selectedCategory]);
  
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
      <Box
        sx={{
          height: { sx: "auto", md: "89.4vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
          backgroundColor: "black",
          position:"sticky",
          top:{sx:"20%",md:"10.5%"}
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <Typography className="copyright" variant="body2" sx={{ mt: 1.5 ,color:"white"}}>
          copyright not mine
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY:"auto"}}>
       <Typography variant="h4" fontWeight="bold" mb={2} sx={{color:"white"}}>
          {selectedCategory} 
        <span style={{color:"#F31503",paddingLeft:"10px"}}>videos</span>
       </Typography>
        <Videos videos={videos} channelVideo={true} video={true}/>
      </Box>
    </Stack>
  );
};

export default Feed;
