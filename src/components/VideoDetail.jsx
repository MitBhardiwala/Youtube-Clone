import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack,useMediaQuery } from "@mui/material";
// import useMediaQuery from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


import { Videos ,Comments} from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState({
    "kind": "youtube#video",
    "id": "3yiWqnKl7lQ",
    "snippet": {
        "publishedAt": "2024-07-04T08:51:35Z",
        "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
        "title": "The Epic Montage | T20 World Cup 2024 Final",
        "description": "Every emotion, every angle 😲👀\n\nThe epic montage of the heart-stopping second innings of the 2024 #T20WorldCup Final between India and South Africa 🎥\n\nSubscribe to our YouTube channel 👉  @ICC \n\nFollow us for more 👇 \nWebsite - http://www.icc-cricket.com\nFacebook -  https://www.facebook.com/icc\nInstagram -  http://www.instagram.com/icc\nWhatsApp - https://whatsapp.com/channel/0029Va1l6bYElah0fPmOD40v\nThreads - https://www.threads.net/@icc\nTikTok -  https://www.tiktok.com/@icc\nX -   http://twitter.com/icc\n\n \n#ICC #Cricket",
        "thumbnails": {
            "default": {
                "url": "https://i.ytimg.com/vi/3yiWqnKl7lQ/default.jpg",
                "width": 120,
                "height": 90
            },
            "medium": {
                "url": "https://i.ytimg.com/vi/3yiWqnKl7lQ/mqdefault.jpg",
                "width": 320,
                "height": 180
            },
            "high": {
                "url": "https://i.ytimg.com/vi/3yiWqnKl7lQ/hqdefault.jpg",
                "width": 480,
                "height": 360
            },
            "standard": {
                "url": "https://i.ytimg.com/vi/3yiWqnKl7lQ/sddefault.jpg",
                "width": 640,
                "height": 480
            },
            "maxres": {
                "url": "https://i.ytimg.com/vi/3yiWqnKl7lQ/maxresdefault.jpg",
                "width": 1280,
                "height": 720
            }
        },
        "channelTitle": "ICC",
        "tags": [
            "cricket",
            "ICC",
            "International Cricket Council",
            "CWC",
            "Cricket World Cup",
            "World Cup",
            "Women's Cricket",
            "Men's cricket",
            "cricket highlights",
            "cricket fixtures",
            "U19CWC",
            "Cricket World",
            "ICC Cricket World Cup",
            "T20 World Cup",
            "World T20 World Cup",
            "Women's Cricket World Cup",
            "Men's Cricket World Cup",
            "Men's T20 World Cup",
            "Women's T20 World Cup",
            "Champions Trophy",
            "Australia",
            "England",
            "India",
            "Afghanistan",
            "Sri Lanka",
            "Ireland",
            "Scotland",
            "Namibia",
            "South Africa",
            "Zimbabwe",
            "Nepal",
            "bangladesh",
            "pakistan",
            "women cricket"
        ],
        "categoryId": "17",
        "liveBroadcastContent": "none",
        "localized": {
            "title": "The Epic Montage | T20 World Cup 2024 Final",
            "description": "Every emotion, every angle 😲👀\n\nThe epic montage of the heart-stopping second innings of the 2024 #T20WorldCup Final between India and South Africa 🎥\n\nSubscribe to our YouTube channel 👉  @ICC \n\nFollow us for more 👇 \nWebsite - http://www.icc-cricket.com\nFacebook -  https://www.facebook.com/icc\nInstagram -  http://www.instagram.com/icc\nWhatsApp - https://whatsapp.com/channel/0029Va1l6bYElah0fPmOD40v\nThreads - https://www.threads.net/@icc\nTikTok -  https://www.tiktok.com/@icc\nX -   http://twitter.com/icc\n\n \n#ICC #Cricket"
        }
    },
    "contentDetails": {
        "duration": "PT4M48S",
        "dimension": "2d",
        "definition": "hd",
        "caption": "false",
        "licensedContent": false,
        "contentRating": {},
        "projection": "rectangular"
    },
    "statistics": {
        "viewCount": "1570673",
        "likeCount": "78415",
        "favoriteCount": "0",
        "commentCount": "2499"
    }
});
  const [videos, setVideos] = useState([
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "k7lHNCZWi_I"
        },
        "snippet": {
            "publishedAt": "2024-07-07T00:00:00Z",
            "channelId": "UCjVgNl1jO5Tysj_TbsayeAA",
            "title": "T20 world cup final match 2024 #t20worldcup#dance #viral #song  india vs south africa",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/k7lHNCZWi_I/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/k7lHNCZWi_I/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/k7lHNCZWi_I/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "goti vlog",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-07T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "4iiLuQVMs-w"
        },
        "snippet": {
            "publishedAt": "2024-07-05T00:00:00Z",
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "title": "Unbelievable athleticism | The Best Catches of T20WC 2024",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4iiLuQVMs-w/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4iiLuQVMs-w/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4iiLuQVMs-w/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ICC",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-05T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "4oSPHA3tu54"
        },
        "snippet": {
            "publishedAt": "2024-07-06T00:00:00Z",
            "channelId": "UCxORvEbZU6oqNeb-P7cPr_A",
            "title": "Virat Kholi interview at Wankhede stadium! Crowd Chanting Kohli! 40,000 people",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/4oSPHA3tu54/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/4oSPHA3tu54/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/4oSPHA3tu54/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Sourav Puri",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-06T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "kf6VxPc5m60"
        },
        "snippet": {
            "publishedAt": "2024-06-28T00:00:00Z",
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "title": "Inside the mind of Yuvraj Singh: The legend behind famous six sixes | T20WC 2007",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/kf6VxPc5m60/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/kf6VxPc5m60/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/kf6VxPc5m60/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ICC",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-28T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "fC3PBU5Btio"
        },
        "snippet": {
            "publishedAt": "2024-07-05T00:00:00Z",
            "channelId": "UCPGJNOunzjDTQfpddRqYboA",
            "title": "#t20worldcup2024 #celebration #viratkohli #rohitsharma",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/fC3PBU5Btio/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/fC3PBU5Btio/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/fC3PBU5Btio/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Swetcha's Journey ",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-05T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "5yliDXhJ4fs"
        },
        "snippet": {
            "publishedAt": "2024-07-05T00:00:00Z",
            "channelId": "UCmqfX0S3x0I3uwLkPdpX03w",
            "title": "#INDvSA: FINAL | Rohit Sharma's trophy winning speech | #T20WorldCupOnStar",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/5yliDXhJ4fs/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/5yliDXhJ4fs/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/5yliDXhJ4fs/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Star Sports",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-05T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "aYvUxGzkWeE"
        },
        "snippet": {
            "publishedAt": "2024-07-05T00:00:00Z",
            "channelId": "UC3UDPcy5FMGtx9MVxORkBbw",
            "title": "Thank You, VIRAT KOHLI , For The Unforgettable T20I Memories ! #viratkohli #t20worldcup #trending",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/aYvUxGzkWeE/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/aYvUxGzkWeE/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/aYvUxGzkWeE/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "flick",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-05T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "3ja3lam8HoI"
        },
        "snippet": {
            "publishedAt": "2024-07-05T00:00:00Z",
            "channelId": "UCCgQaXjsJ6EdFPZeTFQoSyw",
            "title": "Virat and Rohit: A tale of two leaders",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/3ja3lam8HoI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/3ja3lam8HoI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/3ja3lam8HoI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Brut India",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-05T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "X7YQVMiIoBg"
        },
        "snippet": {
            "publishedAt": "2024-06-19T00:00:00Z",
            "channelId": "UCS5s9iV5oftqpjF38x_T5Uw",
            "title": "India vs Pakistan | T20 World Cup | New York | 2024 | 9 june | Highlights Full hd",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/X7YQVMiIoBg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/X7YQVMiIoBg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/X7YQVMiIoBg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Dilpreet Cricket",
            "liveBroadcastContent": "none",
            "publishTime": "2024-06-19T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "_qhKBckNsDc"
        },
        "snippet": {
            "publishedAt": "2024-07-05T00:00:00Z",
            "channelId": "UCSRQXk5yErn4e14vN76upOw",
            "title": "Harsha Bhogle recounts India's stellar T20 World Cup win",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_qhKBckNsDc/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_qhKBckNsDc/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_qhKBckNsDc/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cricbuzz",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-05T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "_3c6y8rJct8"
        },
        "snippet": {
            "publishedAt": "2024-07-18T00:00:00Z",
            "channelId": "UCXmyY_-1_hVm0YYgNIS2-lw",
            "title": "From Spin to Speed: The Evolution of Fast Bowling in India",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/_3c6y8rJct8/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/_3c6y8rJct8/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/_3c6y8rJct8/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Cricflix",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-18T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "8MWMvoZqt0E"
        },
        "snippet": {
            "publishedAt": "2024-07-11T00:00:00Z",
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "title": "Carnage with the ball | The Best Deliveries of T20WC 2024",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/8MWMvoZqt0E/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/8MWMvoZqt0E/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/8MWMvoZqt0E/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ICC",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-11T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "P3RJsY0QUdg"
        },
        "snippet": {
            "publishedAt": "2024-07-05T00:00:00Z",
            "channelId": "UCmqfX0S3x0I3uwLkPdpX03w",
            "title": "@sahibabalii takes us through EXCLUSIVE BTS | #T20WorldCupOnStar",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/P3RJsY0QUdg/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/P3RJsY0QUdg/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/P3RJsY0QUdg/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Star Sports",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-05T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "YbMH5TPQEb4"
        },
        "snippet": {
            "publishedAt": "2024-04-19T00:00:00Z",
            "channelId": "UCQ9ygNaZIkaOcDo-wffcmAQ",
            "title": "Argentina • Road to Victory - World cup 2022",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/YbMH5TPQEb4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/YbMH5TPQEb4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/YbMH5TPQEb4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "SP PROJECT",
            "liveBroadcastContent": "none",
            "publishTime": "2024-04-19T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "PZN2aSez3B4"
        },
        "snippet": {
            "publishedAt": "2024-02-19T00:00:00Z",
            "channelId": "UCCiKrB8uVJtPnF-XDZ0QCAQ",
            "title": "“60 overs they should feel hell out there”, and the rest is history…",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/PZN2aSez3B4/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/PZN2aSez3B4/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/PZN2aSez3B4/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Kohlity Cricket",
            "liveBroadcastContent": "none",
            "publishTime": "2024-02-19T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "qFAAxOqLWjA"
        },
        "snippet": {
            "publishedAt": null,
            "channelId": "UC7ITT3ooYWDYY_ehIUbt6eg",
            "title": "INDIA vs PAKISTAN | ACC WOMEN'S ASIA CUP 2024 | Match 2",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/qFAAxOqLWjA/default.jpg",
                    "width": 120,
                    "height": 90
                }
            },
            "channelTitle": "Asian Cricket Council",
            "liveBroadcastContent": "live",
            "publishTime": null
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "lWNEik0rI3Y"
        },
        "snippet": {
            "publishedAt": "2024-03-19T00:00:00Z",
            "channelId": "UCwENH9IAiAYjNyrRIpdYfDw",
            "title": "Jasprit Bumrah : The King of Yorkers?",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/lWNEik0rI3Y/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/lWNEik0rI3Y/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/lWNEik0rI3Y/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "NSVN Cricket",
            "liveBroadcastContent": "none",
            "publishTime": "2024-03-19T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "OzsYsAvVaTk"
        },
        "snippet": {
            "publishedAt": "2024-04-19T00:00:00Z",
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "title": "Every Jasprit Bumrah wicket at Cricket World Cup 2023",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/OzsYsAvVaTk/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/OzsYsAvVaTk/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/OzsYsAvVaTk/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "ICC",
            "liveBroadcastContent": "none",
            "publishTime": "2024-04-19T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "3Ua44sXrk4g"
        },
        "snippet": {
            "publishedAt": "2024-07-08T00:00:00Z",
            "channelId": "UC0rE2qq81of4fojo-KhO5rg",
            "title": "WORLD CUP LEAKED FOOTAGE",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/3Ua44sXrk4g/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/3Ua44sXrk4g/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/3Ua44sXrk4g/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Tanmay Bhat",
            "liveBroadcastContent": "none",
            "publishTime": "2024-07-08T00:00:00Z"
        }
    },
    {
        "kind": "youtube#searchResult",
        "id": {
            "kind": "youtube#video",
            "videoId": "Ec3mAbp6YZI"
        },
        "snippet": {
            "publishedAt": "2023-07-19T00:00:00Z",
            "channelId": "UCovq0S8w_P35hTJGyb-n9OQ",
            "title": "83 MOVIE  || RANVEER SINGH || Kapil Broke Bloody World Record || England Match",
            "description": "",
            "thumbnails": {
                "default": {
                    "url": "https://i.ytimg.com/vi/Ec3mAbp6YZI/default.jpg",
                    "width": 120,
                    "height": 90
                },
                "medium": {
                    "url": "https://i.ytimg.com/vi/Ec3mAbp6YZI/mqdefault.jpg",
                    "width": 320,
                    "height": 180
                },
                "high": {
                    "url": "https://i.ytimg.com/vi/Ec3mAbp6YZI/hqdefault.jpg",
                    "width": 480,
                    "height": 360
                }
            },
            "channelTitle": "Fusion",
            "liveBroadcastContent": "none",
            "publishTime": "2023-07-19T00:00:00Z"
        }
    }
]);
  const [commentDetails, setCommentDetails] = useState([
    {
        "kind": "youtube#commentThread",
        "id": "UgzA9qI9lOasaiD9FJp4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgzA9qI9lOasaiD9FJp4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Ravi shastri is an emotion. He is the commentators of yhe moment. Present every time india has won a world cup. Either on feild or in the commentry box",
                    "textOriginal": "Ravi shastri is an emotion. He is the commentators of yhe moment. Present every time india has won a world cup. Either on feild or in the commentry box",
                    "authorDisplayName": "@I_love_anime21",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/8_hzajhlTs8lq9z6M3UfH1c22P8tiyKUJUPTQD03NH4LVNsJyL89mgph-c9yhuu4A-tI8UxpvfA=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@I_love_anime21",
                    "authorChannelId": {
                        "value": "UCeyQ7YgPZ9a23cK3XZx4PUQ"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T15:41:54Z",
                    "updatedAt": "2024-07-19T15:41:54Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgzCNVri6_5QsmZRwPR4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgzCNVri6_5QsmZRwPR4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Happy to be in generation which has seen heartbreaks of &#39;96, 2003 and then amazing triumphs of 2007, 2011 and 2024!",
                    "textOriginal": "Happy to be in generation which has seen heartbreaks of '96, 2003 and then amazing triumphs of 2007, 2011 and 2024!",
                    "authorDisplayName": "@darshshinde",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mXJ21jGC0-bmIghN_QBVykfWvMIaaTisUhvVp4eZ-MRUdm=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@darshshinde",
                    "authorChannelId": {
                        "value": "UCMg4584T8TLcdjQC1CWCvGw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T15:12:25Z",
                    "updatedAt": "2024-07-19T15:12:25Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgxwRsitgEsqEEvaXU14AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgxwRsitgEsqEEvaXU14AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Bhi jitani baar. Dekho fir dekhane ka maan karta hai",
                    "textOriginal": "Bhi jitani baar. Dekho fir dekhane ka maan karta hai",
                    "authorDisplayName": "@DineshKumar-lm6be",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kiBP56YjqDSrcLOcRJ4YFetaNDb52s3_Y70q_IAXEl6qc=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@DineshKumar-lm6be",
                    "authorChannelId": {
                        "value": "UCUvA_w8L83aIgKKIPb9ILhg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T14:33:25Z",
                    "updatedAt": "2024-07-19T14:33:25Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgxKCBuC7rQMShWrj8N4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgxKCBuC7rQMShWrj8N4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Absolute Carnage🔥🔥",
                    "textOriginal": "Absolute Carnage🔥🔥",
                    "authorDisplayName": "@abhishekpoojary8406",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lqULl_zl4kd2Kqu-NGfQAeRgktPwzB-Z0A1Snc5T96-MRs7PMnyyGHCmsAyOOuHNpt5Q=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@abhishekpoojary8406",
                    "authorChannelId": {
                        "value": "UCloW0Lc7F18t01HNqUhCY0g"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T14:32:10Z",
                    "updatedAt": "2024-07-19T14:32:10Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgwhIYLBVC4iLQ1gwK54AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgwhIYLBVC4iLQ1gwK54AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "India fully politics.. justice for ruturaj",
                    "textOriginal": "India fully politics.. justice for ruturaj",
                    "authorDisplayName": "@DhineshkumarM-we5ls",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/4fNvIHz-_xaYGei8FudFDfpIU805lxGel6t5V5gbfPD6XJMeli8E270MWKNP0O-7KksPRnjT9cc=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@DhineshkumarM-we5ls",
                    "authorChannelId": {
                        "value": "UCdeMpoiKNnOuKjVGBLWlYtw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T13:13:46Z",
                    "updatedAt": "2024-07-19T13:13:46Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgybSuyHF4DkEozIi6p4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgybSuyHF4DkEozIi6p4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Justice for ruturaj......",
                    "textOriginal": "Justice for ruturaj......",
                    "authorDisplayName": "@DhineshkumarM-we5ls",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/4fNvIHz-_xaYGei8FudFDfpIU805lxGel6t5V5gbfPD6XJMeli8E270MWKNP0O-7KksPRnjT9cc=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@DhineshkumarM-we5ls",
                    "authorChannelId": {
                        "value": "UCdeMpoiKNnOuKjVGBLWlYtw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T13:13:17Z",
                    "updatedAt": "2024-07-19T13:13:17Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgzpFp_Gclcv_mZ3QF94AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgzpFp_Gclcv_mZ3QF94AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Hardik was weeping.... It meant life to him....❤❤",
                    "textOriginal": "Hardik was weeping.... It meant life to him....❤❤",
                    "authorDisplayName": "@deepakhem",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/hacz7nM5LaCcP1pXqPtG8A_NFovBTt8vnTSu8Tcc9Ze4cJDkGjqF7jO0ytgVGSsLbe8BTIZl=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@deepakhem",
                    "authorChannelId": {
                        "value": "UCJ-4zcllTciLOq5jsZPuqHg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T12:19:53Z",
                    "updatedAt": "2024-07-19T12:19:53Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgwEiqyTFNke9bQuRdt4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgwEiqyTFNke9bQuRdt4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Another one to be added on our loop 💯🎉",
                    "textOriginal": "Another one to be added on our loop 💯🎉",
                    "authorDisplayName": "@iamsourav96",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mQpBFDFsCYiPwE1iM24dAHUt4VBJTzP9t7NZM1Ig09POei=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@iamsourav96",
                    "authorChannelId": {
                        "value": "UCdb6Q3KgshtP4chl4ZMQfsw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T12:06:54Z",
                    "updatedAt": "2024-07-19T12:06:54Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugwmc8zwjH3Tp2Teckh4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugwmc8zwjH3Tp2Teckh4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Excellent video editing ❤",
                    "textOriginal": "Excellent video editing ❤",
                    "authorDisplayName": "@manikandanthangavel9884",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lxSk-Ek46aAM5_4ecBe_ExafeP7gYYpTq6hXlEsIqQHg=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@manikandanthangavel9884",
                    "authorChannelId": {
                        "value": "UCNn22Cs7aec6tp_xuzfRRwg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T10:44:55Z",
                    "updatedAt": "2024-07-19T10:44:55Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgydetH7fYUwQJ4KNKB4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgydetH7fYUwQJ4KNKB4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Goosebumps again and again ❤😢",
                    "textOriginal": "Goosebumps again and again ❤😢",
                    "authorDisplayName": "@s_a_n_d_y__4_517",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/Q9rA8ByjKw5_7H-HDUi6czVJWZEAPtJcNOkCzMoNF9MyZ5hKvsJDZFzSZDdhNZZPdiczdZzTfA=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@s_a_n_d_y__4_517",
                    "authorChannelId": {
                        "value": "UCWWn_LGubj-lq-mKhdiuptg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T09:42:42Z",
                    "updatedAt": "2024-07-19T09:42:42Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugw3GfDJS_Y7t6hmHwB4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugw3GfDJS_Y7t6hmHwB4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "ICC deserves some appreciation for this. Brilliant sound editing, video cutting and truly lived the epic win in less than 5 mins. Need this for every tournament ICC and Ian Smith, you are a freaking legend !",
                    "textOriginal": "ICC deserves some appreciation for this. Brilliant sound editing, video cutting and truly lived the epic win in less than 5 mins. Need this for every tournament ICC and Ian Smith, you are a freaking legend !",
                    "authorDisplayName": "@lavyagaba3303",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_nr-G6a6OrpXQ056xkhu6B0cLFgFN0wUcNe3XIFcEr_h3c=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@lavyagaba3303",
                    "authorChannelId": {
                        "value": "UCe-tGsnER9Pycq1VF_l4GEw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T09:42:23Z",
                    "updatedAt": "2024-07-19T09:42:23Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyedyNCpEkeNgLomM54AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyedyNCpEkeNgLomM54AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Goosebumps😨",
                    "textOriginal": "Goosebumps😨",
                    "authorDisplayName": "@HarshithHarshith-fm2sg",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_ndcvfGMjJ5N0T9FGGljlW0MIasnhQ51n8SqWws3I87BZNWS8mHL02lh20MpWB32TlN3A=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@HarshithHarshith-fm2sg",
                    "authorChannelId": {
                        "value": "UCkbVSgx1cVxTdGoIoNPvEXA"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T07:42:47Z",
                    "updatedAt": "2024-07-19T07:42:47Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugxqv4IvXvpfvmri7c14AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugxqv4IvXvpfvmri7c14AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Absolute Cinema ❤",
                    "textOriginal": "Absolute Cinema ❤",
                    "authorDisplayName": "@anuraagrachuri7326",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mcXraO0R3TxLL58r0NNxoZ_Hzwr4wp5BDNTdw0B3sgsVk=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@anuraagrachuri7326",
                    "authorChannelId": {
                        "value": "UCTAUVdd8H6aN4FOvsvdBS_A"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T07:23:38Z",
                    "updatedAt": "2024-07-19T07:23:38Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugz-wFtGneUugYInzlN4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugz-wFtGneUugYInzlN4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "<a href=\"https://www.youtube.com/watch?v=3yiWqnKl7lQ&amp;t=143\">2:23</a> at that point everyone thought india would lose",
                    "textOriginal": "2:23 at that point everyone thought india would lose",
                    "authorDisplayName": "@rayyanparkar313",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/YeS1uE_XqWj-T67Me_v2rmYrBGNhFSWRGzBVWZDgTN-EL85C8D1o1gX_TUsrdCMPy-qgCHta=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@rayyanparkar313",
                    "authorChannelId": {
                        "value": "UC0wBgoi_Q06pM0XNYe3BwzQ"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T07:19:51Z",
                    "updatedAt": "2024-07-19T07:19:51Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugy7jytLbAd5nlJjrZZ4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugy7jytLbAd5nlJjrZZ4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "&quot;Is this day that the rainbow nation finds a pot of gold at the end&quot;  The level of commentary is just lit.",
                    "textOriginal": "\"Is this day that the rainbow nation finds a pot of gold at the end\"  The level of commentary is just lit.",
                    "authorDisplayName": "@sandeepchaudhary9670",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/fsYr8_7QPSkfHSTXS376AR2Qf4bH_sFRAT4LdcMIIXvfCFGEf7j7x-kUkyUb8xPAucAXCw4mww=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@sandeepchaudhary9670",
                    "authorChannelId": {
                        "value": "UCK4yViK15SBzOrFXcymYIOw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T03:56:06Z",
                    "updatedAt": "2024-07-19T03:56:06Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugy7SgPsSsqEEUYJ-SR4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugy7SgPsSsqEEUYJ-SR4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "i was a bit sceptical with hardik and axar before the world cup. but i think they have proven their class. axar was a masterclass in that final. hardik is back after that tumultous IPL campaign.",
                    "textOriginal": "i was a bit sceptical with hardik and axar before the world cup. but i think they have proven their class. axar was a masterclass in that final. hardik is back after that tumultous IPL campaign.",
                    "authorDisplayName": "@masyraaf97",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lyiufgPFvubiC2hqj1DhVMcLVNZUjy_gAd1tlmEne_FPE=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@masyraaf97",
                    "authorChannelId": {
                        "value": "UCkUJeCdL7LzTLj0j2J-CM3Q"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T03:48:37Z",
                    "updatedAt": "2024-07-19T03:48:37Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgzGqKqwMAuEwOc_pel4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgzGqKqwMAuEwOc_pel4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "❤ great video",
                    "textOriginal": "❤ great video",
                    "authorDisplayName": "@palashwarghane1420",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mDNQJusXr19EELNZZoHDnUpovjaMJsfIKFvVr4hU_YNQ=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@palashwarghane1420",
                    "authorChannelId": {
                        "value": "UCQjcVJq2pk19i3n87demH2w"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T03:45:50Z",
                    "updatedAt": "2024-07-19T03:45:50Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugw9OktCQcmjyprSzOh4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugw9OktCQcmjyprSzOh4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "What an Editing Superb❤.  Included the   Rishabh panth scene of stopping the momentum of Game😅,  shows the excellence of ICC🎉.",
                    "textOriginal": "What an Editing Superb❤.  Included the   Rishabh panth scene of stopping the momentum of Game😅,  shows the excellence of ICC🎉.",
                    "authorDisplayName": "@v.rameshch3803",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mt8NLoLHP8ZIPn5TMSgq5Uv1PLnTmKG8bKzv08Q0qK6sA=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@v.rameshch3803",
                    "authorChannelId": {
                        "value": "UCsw9xzNK03JnNGA33hJmf_g"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-19T03:09:02Z",
                    "updatedAt": "2024-07-19T03:09:02Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugw2ETrtAbIZOnauE8B4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugw2ETrtAbIZOnauE8B4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "I am 38, I never seen an intense game like this before. Thanks to India team for giving us the memorable moment to cherish life through out!!",
                    "textOriginal": "I am 38, I never seen an intense game like this before. Thanks to India team for giving us the memorable moment to cherish life through out!!",
                    "authorDisplayName": "@nareshnani8031",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_msVWD1u6KLma77YMpkrSid85zRllCGnPnbt1Dars0=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@nareshnani8031",
                    "authorChannelId": {
                        "value": "UCE6hEsUWNsst6HOln4zOc3Q"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T21:58:26Z",
                    "updatedAt": "2024-07-18T21:58:26Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugzt6j1NedhyoSwkyUN4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugzt6j1NedhyoSwkyUN4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Epic 🔥",
                    "textOriginal": "Epic 🔥",
                    "authorDisplayName": "@Hermanosrandi2",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_n14VfaJx7-Nx-uYsNa_r4T2An9PFn1QfDDHBi3kZq9F5c2y6qSdYwkKa6AmV-YlsKZJQ=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@Hermanosrandi2",
                    "authorChannelId": {
                        "value": "UCgkTRrFlMEqzZBRaA85wuvA"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T19:28:37Z",
                    "updatedAt": "2024-07-18T19:28:37Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugwe8fO38lVxCFfHbwJ4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugwe8fO38lVxCFfHbwJ4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "That was BLINDER from SURYA",
                    "textOriginal": "That was BLINDER from SURYA",
                    "authorDisplayName": "@piyushpandey2480",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_ke1hRq_dajTX6t6gTtTeKsX4ungFQBsCKC_2q4SqQ=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@piyushpandey2480",
                    "authorChannelId": {
                        "value": "UCyZ-Yz2AGJxsHrE2O6Cmz3g"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T18:24:38Z",
                    "updatedAt": "2024-07-18T18:24:38Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgzzGPzww3sIf8_rMQ94AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgzzGPzww3sIf8_rMQ94AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "🔥🤩😢👏",
                    "textOriginal": "🔥🤩😢👏",
                    "authorDisplayName": "@upadhyayshivang5934",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_k1UVnuEOl73aecre_55iOj102dwvDAm6VAI3NyH121uCD0fUD5FsaQsf-gyIKwdvvyAA=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@upadhyayshivang5934",
                    "authorChannelId": {
                        "value": "UCChkCWYiICt5bzjepcBWRTg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T18:20:16Z",
                    "updatedAt": "2024-07-18T18:20:16Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyB78QTVVmoxWY0Nrp4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyB78QTVVmoxWY0Nrp4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Who is watching this in 2030 👍",
                    "textOriginal": "Who is watching this in 2030 👍",
                    "authorDisplayName": "@kdaxomplays5639",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/QfXG5NXowfXfP1737kMpayQytMw0wiHD1tWzDUW5lc_V4mqUsabzzvnmIKhvY5aXto4wFDblNHs=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@kdaxomplays5639",
                    "authorChannelId": {
                        "value": "UCtCJR7D_c0PvrKV37pkQtcw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T18:12:48Z",
                    "updatedAt": "2024-07-18T18:12:48Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgwVudNd0VqOPweIyyp4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgwVudNd0VqOPweIyyp4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "❤❤❤❤❤❤❤",
                    "textOriginal": "❤❤❤❤❤❤❤",
                    "authorDisplayName": "@user-pz2eu1uj9r",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/vW4iXR3IpR2DO9JZaEStFhJTjkrtVZgRThJAENcF1eLjR4nniyOoES8ydwnfu05ERTS_kDAC=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@user-pz2eu1uj9r",
                    "authorChannelId": {
                        "value": "UCHTur3zGAwq0f4lT-920vAg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T17:43:14Z",
                    "updatedAt": "2024-07-18T17:43:14Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugzr7OWxPIiGuEVtV_x4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugzr7OWxPIiGuEVtV_x4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "BC, pura avengers endgame bana diya 😢",
                    "textOriginal": "BC, pura avengers endgame bana diya 😢",
                    "authorDisplayName": "@shubhamanand3981",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mkpeQAiTKEKZwc6bkXeotWsinM3RoX8yAqRgdazbYonV4=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@shubhamanand3981",
                    "authorChannelId": {
                        "value": "UCL2gYguvrMNGxhmYYPprGHQ"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 1,
                    "publishedAt": "2024-07-18T17:23:13Z",
                    "updatedAt": "2024-07-18T17:23:13Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgwE6NvVaQf_or1YBvt4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgwE6NvVaQf_or1YBvt4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "video is just like a movie",
                    "textOriginal": "video is just like a movie",
                    "authorDisplayName": "@ANULWAYANAD",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/QKEBzyz1yO8_bI2qbdmkXDwB5qWquYghsb2y-ItmcEQFjvzq-7eLmtV12R_zz_BDOUyKsOfqrI4=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@ANULWAYANAD",
                    "authorChannelId": {
                        "value": "UCGovU1qVUMjueZkwpS7NqOQ"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T17:13:14Z",
                    "updatedAt": "2024-07-18T17:13:14Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyW37zPWyGV_l6TP6B4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyW37zPWyGV_l6TP6B4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Money can buy any one. Accept the Imran Khan and Rameez Raja 😢",
                    "textOriginal": "Money can buy any one. Accept the Imran Khan and Rameez Raja 😢",
                    "authorDisplayName": "@blessedfamily1417",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_miN7ZOVi5NWq8sdPCiz8_xwau4qNow63Vo7wouVeM=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@blessedfamily1417",
                    "authorChannelId": {
                        "value": "UCkFLuIXv83gh52UDJ50zx2w"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T17:11:09Z",
                    "updatedAt": "2024-07-18T17:11:09Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgygxGG1_5dNPwcVYpN4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgygxGG1_5dNPwcVYpN4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "gods plan babyyy!!!!!",
                    "textOriginal": "gods plan babyyy!!!!!",
                    "authorDisplayName": "@nidhishhhhh6779",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/wF989BleXyhavRskWvJieT4RlLLCU-DXHSQsyVqiiZtZvxcM0_XU5elU36xMmjT_LlSWyGdJ=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@nidhishhhhh6779",
                    "authorChannelId": {
                        "value": "UC1fyv44TxbmEhhYK0FnraHw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T17:05:46Z",
                    "updatedAt": "2024-07-18T17:05:46Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugx3KvXWpBhPPYBoijt4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugx3KvXWpBhPPYBoijt4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "INDIA ❤",
                    "textOriginal": "INDIA ❤",
                    "authorDisplayName": "@allinoneshorts9396",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/BPEucRjsrQ6vW3v-_gcHSyEsANDcRTtR5GxSMvp-ESOZ6SrL-Ky8VgE0Nqg7jZ0iUEjJAG2GVw=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@allinoneshorts9396",
                    "authorChannelId": {
                        "value": "UCkasuDMkWktISoTQ8ybN_gw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T16:49:40Z",
                    "updatedAt": "2024-07-18T16:49:40Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugzyzk2BdEJUksvgzst4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugzyzk2BdEJUksvgzst4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Rohit and Dhoni is a grandmasters❤🤍💚",
                    "textOriginal": "Rohit and Dhoni is a grandmasters❤🤍💚",
                    "authorDisplayName": "@anirbandas4701",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/wDe3jj4-q6auQ_mH_3KldLhVu_5ME8BO1xgCn0XBkHEwNLEzsQvPOusrhvIqnp1nO3sDEBFgsA=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@anirbandas4701",
                    "authorChannelId": {
                        "value": "UCOfHeUnK83ypmU1YmLpziQg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T16:23:50Z",
                    "updatedAt": "2024-07-18T16:23:50Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgzLscxBoeQta9sYkHR4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgzLscxBoeQta9sYkHR4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "The way Rohit planted the tricolor on West Indian soil and him respecting that soil that gave us the 🏆 that&#39;s INDIA for the world....<br>We respect the 🏆,we respect the ocassion and we respect the land that gives us❤<br>Love to the beautiful West Indies......",
                    "textOriginal": "The way Rohit planted the tricolor on West Indian soil and him respecting that soil that gave us the 🏆 that's INDIA for the world....\nWe respect the 🏆,we respect the ocassion and we respect the land that gives us❤\nLove to the beautiful West Indies......",
                    "authorDisplayName": "@captaincunning6360",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mS0Mc60NZyxaJydSkBsakuZ7vbNBZ-xu91vkuivg-cKqxwLCjAfub72z7AfatrbICoJg=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@captaincunning6360",
                    "authorChannelId": {
                        "value": "UC3iVwLcc0pkgEbxQ8sHEJIQ"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T15:49:23Z",
                    "updatedAt": "2024-07-18T15:49:23Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugxz2qCZtJB7Q7JwFuB4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugxz2qCZtJB7Q7JwFuB4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Well-done teem India proud of you every indian Happy ❤",
                    "textOriginal": "Well-done teem India proud of you every indian Happy ❤",
                    "authorDisplayName": "@AliyaGihar",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/tt7VGWjjzT31MmlTMIarJhFvXi1gdDC_6UTZD92t13pNeHoCgvN6Eo6Qdn-6KFlfX9cAF9E9=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@AliyaGihar",
                    "authorChannelId": {
                        "value": "UCm7sm3Rf4lNX3Xh7s3ukzhw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T15:38:42Z",
                    "updatedAt": "2024-07-18T15:38:42Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyxU2v8b6jS-uLBZsZ4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyxU2v8b6jS-uLBZsZ4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Goosebumps ❤🫡",
                    "textOriginal": "Goosebumps ❤🫡",
                    "authorDisplayName": "@i_manushukla",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/gfJg0yssA8ZID_NdupGMPG4KSFlf7MmWw1oBSE6YAOJUbvygRF8mLXgrTcO2QXz-oVb1okkgww=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@i_manushukla",
                    "authorChannelId": {
                        "value": "UCeJrmf_S0ajSLzwZ2ch3TwA"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T14:32:25Z",
                    "updatedAt": "2024-07-18T14:32:25Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgykWDtfbj-um5GmB3d4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgykWDtfbj-um5GmB3d4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Editor did full justice to Sky&#39;s catch",
                    "textOriginal": "Editor did full justice to Sky's catch",
                    "authorDisplayName": "@MultiJayram",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_k3XWGL5y0hPnBjqGRjDJiR1iqeIxtVgLl_1NwKo3psm_c=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@MultiJayram",
                    "authorChannelId": {
                        "value": "UCWhtdoRz2eQ1i6NDKNxHfZw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 1,
                    "publishedAt": "2024-07-18T13:44:00Z",
                    "updatedAt": "2024-07-18T13:44:00Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugy9stzd6r9LEKiEcMF4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugy9stzd6r9LEKiEcMF4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Next time bettluck to south africa",
                    "textOriginal": "Next time bettluck to south africa",
                    "authorDisplayName": "@MrPratapvarma",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kKqqvQfbE_-jWNNa_twpLhv3l74Geos8dsyi5Wuk242C02=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@MrPratapvarma",
                    "authorChannelId": {
                        "value": "UCP9BCaabDha_uD1bKGp1oIA"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T13:17:34Z",
                    "updatedAt": "2024-07-18T13:17:34Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgzaDrkji8EajpaDkvd4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgzaDrkji8EajpaDkvd4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Did anyone notice how rohit handed the bowl to hardik and kohli handed the bowl to bumrah, how the 2 captains helped the 2 legendary bowlers was amazing",
                    "textOriginal": "Did anyone notice how rohit handed the bowl to hardik and kohli handed the bowl to bumrah, how the 2 captains helped the 2 legendary bowlers was amazing",
                    "authorDisplayName": "@pratyakshpachori7936",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_nOWe4S6b29fbPkg93PDibrKRQTYWczUyLo_mKEpzpASZp98SZsf1etvnv92v_B6OhtLA=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@pratyakshpachori7936",
                    "authorChannelId": {
                        "value": "UCC_T2cqRfYS1RUA4ife8AqQ"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T12:32:21Z",
                    "updatedAt": "2024-07-18T12:32:21Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyAUjjZT63fJeqSsMR4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyAUjjZT63fJeqSsMR4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "India Comeback After 15th Over❤❤❤❤❤",
                    "textOriginal": "India Comeback After 15th Over❤❤❤❤❤",
                    "authorDisplayName": "@pawansony5981",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_m-BQ9cHAlq1jZsVv0311NimqUYlE4g7_EsWTQQtm7eQuBVngvypJrk2Wkalb5TxAxiCQ=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@pawansony5981",
                    "authorChannelId": {
                        "value": "UC2wTDLva2sao9snIANbVpQA"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T11:12:32Z",
                    "updatedAt": "2024-07-18T11:12:32Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgywxLcCy4U54M0D5At4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgywxLcCy4U54M0D5At4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "<a href=\"https://www.youtube.com/watch?v=3yiWqnKl7lQ&amp;t=74\">01:14</a> Klassen entry is like the Final Boss 😮",
                    "textOriginal": "01:14 Klassen entry is like the Final Boss 😮",
                    "authorDisplayName": "@akhilv5208",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mKzCCA2mfjcRUGlzRJ64z7nhdtS6AcR7ZOD3A9zkUTpjo=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@akhilv5208",
                    "authorChannelId": {
                        "value": "UC4G-RUv9Is9ky_2VrVd2A7A"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T10:54:19Z",
                    "updatedAt": "2024-07-18T10:54:19Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgwwFD8oEFNjdwROW4p4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgwwFD8oEFNjdwROW4p4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Thanks ICC, goosebumps on every sec , wow what a final it was , simply spectacular for everyone to watch live and on televisions and what feeling for players to feel it",
                    "textOriginal": "Thanks ICC, goosebumps on every sec , wow what a final it was , simply spectacular for everyone to watch live and on televisions and what feeling for players to feel it",
                    "authorDisplayName": "@abhishekgarg2984",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_k5ujybJx7iJ5u2cyXEJKzLls3W4Ylp_ysEA34p0adLfA9l=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@abhishekgarg2984",
                    "authorChannelId": {
                        "value": "UCw-JkJiGeuVx0D2N59u1w2Q"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T10:46:11Z",
                    "updatedAt": "2024-07-18T10:47:11Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyBuWM7PURb0s1AnIF4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyBuWM7PURb0s1AnIF4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Still after 19 days the catch of Suryakumar Yadav brings tears in my eyes...<br>He plucked the world cup from thin air..<br>What a catch!! What a moment!! Won&#39;t be able to forget this ever.",
                    "textOriginal": "Still after 19 days the catch of Suryakumar Yadav brings tears in my eyes...\nHe plucked the world cup from thin air..\nWhat a catch!! What a moment!! Won't be able to forget this ever.",
                    "authorDisplayName": "@A-myth",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_lUYe7tZhscD_AAxeSxxsp1Jmn2VixsMGOuS3vBmc9yK-at=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@A-myth",
                    "authorChannelId": {
                        "value": "UCvHm-3VhLrQFEWmYboovYLA"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 1,
                    "publishedAt": "2024-07-18T10:12:54Z",
                    "updatedAt": "2024-07-18T10:12:54Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyF7FzBVqB_9YvK0k94AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyF7FzBVqB_9YvK0k94AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Thank you Indian cricket team ❤❤❤",
                    "textOriginal": "Thank you Indian cricket team ❤❤❤",
                    "authorDisplayName": "@PRINCEROY-wc5zh",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_n30tl3r-ZI1JG1SnR2FBLzOwppcKC0g0ZgDPVPrgznnV0=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@PRINCEROY-wc5zh",
                    "authorChannelId": {
                        "value": "UCKLmxWNNytsTq0mec0TVKMQ"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 1,
                    "publishedAt": "2024-07-18T10:05:31Z",
                    "updatedAt": "2024-07-18T10:05:31Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyB4ai9K2BeqMjNhL14AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyB4ai9K2BeqMjNhL14AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "❤❤❤❤❤",
                    "textOriginal": "❤❤❤❤❤",
                    "authorDisplayName": "@sumantechnical9071",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/xFxW21kRhmz3nVDwoaS4-MORIzZXP3kCEt4i144KxZX8GqonFEXtN5WdSL_Ss3HjGHCSAaMG=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@sumantechnical9071",
                    "authorChannelId": {
                        "value": "UC2ETi9UhpIfIpdnZyD2ZM6g"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T09:49:33Z",
                    "updatedAt": "2024-07-18T09:49:33Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugw1MJeFfxxwujUHjD54AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugw1MJeFfxxwujUHjD54AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "THAT SUKUN THIS VIDEO GIVE ME❤❤❤❤❤",
                    "textOriginal": "THAT SUKUN THIS VIDEO GIVE ME❤❤❤❤❤",
                    "authorDisplayName": "@user-ol7wk1hn3f",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/eLSUlvzdPn7VfhTMNhV034dSjh3aHthB3_IA0A2vX-B2u-vNxICy8up3zwns_UA5XDc4PCJV=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@user-ol7wk1hn3f",
                    "authorChannelId": {
                        "value": "UC2LmR7vnzhngvr86tMyLkpg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T08:59:04Z",
                    "updatedAt": "2024-07-18T08:59:04Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugwe5K_6y6_ufB4umD54AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugwe5K_6y6_ufB4umD54AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "<a href=\"https://www.youtube.com/watch?v=3yiWqnKl7lQ&amp;t=1460\">24:20</a> the time when every hope was end but that कम बैक इस लीजेंडरी",
                    "textOriginal": "24:20 the time when every hope was end but that कम बैक इस लीजेंडरी",
                    "authorDisplayName": "@Adarsh_raj_123",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/2QxSkB4bKkaetSyMnUrQF-4b2QKAvgb5Qd_3mn_rb_i1P_WaEndXDcxvPYpg0PRWCqz2jgpyzg=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@Adarsh_raj_123",
                    "authorChannelId": {
                        "value": "UCVM3KphpI6j6RBKQ-KuDMVg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T08:22:53Z",
                    "updatedAt": "2024-07-18T08:22:53Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyVcyGNogenitHHAJJ4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyVcyGNogenitHHAJJ4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Jab Klaasen maar raha tha, tab gote munh mein aa gaye the 😥",
                    "textOriginal": "Jab Klaasen maar raha tha, tab gote munh mein aa gaye the 😥",
                    "authorDisplayName": "@ROSSA_Official",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_kdVsujKAcTn73a2PMiqWVnulVpeQWUN0E4yKoWTWxx6GM=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@ROSSA_Official",
                    "authorChannelId": {
                        "value": "UCBU1Dl7TyyC8bC_0pKbkcqA"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T08:16:44Z",
                    "updatedAt": "2024-07-18T08:16:44Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugyx6lc3pA7p-gTjYz94AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugyx6lc3pA7p-gTjYz94AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "It&#39;s INDIA won the t20 world cup after 17 years 🎉🎉🎉",
                    "textOriginal": "It's INDIA won the t20 world cup after 17 years 🎉🎉🎉",
                    "authorDisplayName": "@anushkatoystory9700",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/5kO7AOrlmdY0wiKP8oGinBZGnVmxb5El1EIinjriqnj-vIw8wdAV5WkYq6P3t2RSr5Y4Egey=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@anushkatoystory9700",
                    "authorChannelId": {
                        "value": "UC_g7MfTalwdJlEVuucCPW4g"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 1,
                    "publishedAt": "2024-07-18T07:41:35Z",
                    "updatedAt": "2024-07-18T07:41:35Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "Ugwhh2-rlcwGyVwWBB54AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "Ugwhh2-rlcwGyVwWBB54AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Break taken by Rishab pant was turning point of fortune",
                    "textOriginal": "Break taken by Rishab pant was turning point of fortune",
                    "authorDisplayName": "@sarthaksrivastava5107",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/E1NZaQfkVKRDB2c6OwCRhohP0m-_L05YiFrbyH-BhCsP_Ac1D8H8Hk_XKe2GmujdWJuGkrpx=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@sarthaksrivastava5107",
                    "authorChannelId": {
                        "value": "UCUktoahOxF1j99VEJn2FOuA"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T07:38:30Z",
                    "updatedAt": "2024-07-18T07:38:30Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgyoWBX_7-dVPAR2fYx4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgyoWBX_7-dVPAR2fYx4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "Unforgettable 😊",
                    "textOriginal": "Unforgettable 😊",
                    "authorDisplayName": "@pratikpatil6342",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/AzkrBB-OrD29cFQYiO2wHYpo2FWB_jDsgz1g477bTNfgNxa5_AGk8_sZvvS1eVa64exIcKFitw=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@pratikpatil6342",
                    "authorChannelId": {
                        "value": "UCI1_pz3kowZWxgtDhYZ0vMg"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T06:50:25Z",
                    "updatedAt": "2024-07-18T06:50:25Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgxOu3UjPHJd1qgGeaN4AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgxOu3UjPHJd1qgGeaN4AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "🥲🥲🥲yessssssss",
                    "textOriginal": "🥲🥲🥲yessssssss",
                    "authorDisplayName": "@EkbalHussain-ei6su",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_mlEnA_CYn0rV_-6H-O6JC0kGdGAGuGYECltlo0LZHcLZnMN_xr6jbqVUURpcF0dDIR5g=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@EkbalHussain-ei6su",
                    "authorChannelId": {
                        "value": "UC0p_d9awGdyY6_GZagGmsLQ"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T06:30:44Z",
                    "updatedAt": "2024-07-18T06:30:44Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    },
    {
        "kind": "youtube#commentThread",
        "id": "UgxtuBYvN_u2XANHWc54AaABAg",
        "snippet": {
            "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
            "videoId": "3yiWqnKl7lQ",
            "topLevelComment": {
                "kind": "youtube#comment",
                "id": "UgxtuBYvN_u2XANHWc54AaABAg",
                "snippet": {
                    "channelId": "UCt2JXOLNxqry7B_4rRZME3Q",
                    "videoId": "3yiWqnKl7lQ",
                    "textDisplay": "We don&#39;t need a separate movie on this, it is more than enough for us. Editor deserve a raise  😘",
                    "textOriginal": "We don't need a separate movie on this, it is more than enough for us. Editor deserve a raise  😘",
                    "authorDisplayName": "@Jay-gb8uv",
                    "authorProfileImageUrl": "https://yt3.ggpht.com/ytc/AIdro_ly6dtRWfgRGLAQ-H5I6SRGuTx7o7y0pRpc7EzmV6Y=s48-c-k-c0x00ffffff-no-rj",
                    "authorChannelUrl": "http://www.youtube.com/@Jay-gb8uv",
                    "authorChannelId": {
                        "value": "UC2Iw1I-MenBE4pbsLlaD5Aw"
                    },
                    "canRate": true,
                    "viewerRating": "none",
                    "likeCount": 0,
                    "publishedAt": "2024-07-18T06:27:03Z",
                    "updatedAt": "2024-07-18T06:27:03Z"
                }
            },
            "canReply": true,
            "totalReplyCount": 0,
            "isPublic": true
        }
    }
])
  const [showComments, setShowComments] = useState(true)
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const { id } = useParams();
  useEffect(() => {
    setShowComments(!isSmallScreen);
    const fetchDetails = async () => {
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
        setVideoDetail(data.items[0])
      );

      fetchFromAPI(
        `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setVideos(data.items));

      fetchFromAPI(
        `commentThreads?part=snippet&videoId=${id}&maxResults=100`
      ).then((data) => setCommentDetails(data.items));
     
    
    };
    // fetchDetails();
  }, [id]);

  if (!videoDetail?.snippet) return "Loading....";
  

  const {
    snippet: { title, channelId, channelTitle },
    statistics: { viewCount, likeCount },
  } = videoDetail;

  console.log("Video detail: ");
  console.log(videoDetail);
  console.log("videos : ");
  console.log(videos);
  console.log("commentDetails : ")
  console.log(commentDetails)

  return (
    <Box minHeight="90vh" >
      <Stack direction={{ xs: "column", md: "row" }} >
        <Box  sx={{width:{md:"70%",sm:"100%", height: {sm:"60vh",md:"calc(100vh - 64px)"},overflowY:"auto",position: {md:"sticky"},top:{md:"100px"}}} }>
          <Box sx={{ width: "100%" }}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls height="100px  " />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{ sm: "subtitle1", md: 'h6' }}  color="#fff" >
                  {channelTitle}
                  <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
            
          </Box>
          <Box>
          <Stack className="commentSection" style={{
              padding: {md:"20px"},
              paddingTop:"0px",
              maxWidth: "auto",
              margin: "0 auto",
              backgroundColor: "black",
              borderRadius: "8px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.4)",
              color: "#fff",
            }}>
               <Comments commentDetails={commentDetails} setShowComments={setShowComments} showComments={showComments}/>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{ md: 1, xs: 0 }} justifyContent="center" alignItems="center" style={{overflowY:"auto"}}>
          <Videos videos={videos} direction="column" channelVideo={false}/>
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
