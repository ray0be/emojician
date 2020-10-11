/**
 * Emojician.js
 */
"use strict";

/**
 * Emojis List
 * Inspired by https://github.com/amurani/unicode-emoji-list (MIT)
 */
var emojilist = {
    "People":[
        {
            "no":1,
            "code":"U+1F600",
            "emoji":"😀",
            "description":"Grinning Face",
            "keywords":[
                "grinning",
                "face"
            ]
        },
        {
            "no":2,
            "code":"U+1F603",
            "emoji":"😃",
            "description":"Grinning Face With Big Eyes",
            "keywords":[
                "grinning",
                "face",
                "big",
                "eyes"
            ]
        },
        {
            "no":3,
            "code":"U+1F604",
            "emoji":"😄",
            "description":"Grinning Face With Smiling Eyes",
            "keywords":[
                "grinning",
                "face",
                "smiling",
                "eyes"
            ]
        },
        {
            "no":4,
            "code":"U+1F601",
            "emoji":"😁",
            "description":"Beaming Face With Smiling Eyes",
            "keywords":[
                "beaming",
                "face",
                "smiling",
                "eyes"
            ]
        },
        {
            "no":5,
            "code":"U+1F606",
            "emoji":"😆",
            "description":"Grinning Squinting Face",
            "keywords":[
                "grinning",
                "squinting",
                "face"
            ]
        },
        {
            "no":6,
            "code":"U+1F605",
            "emoji":"😅",
            "description":"Grinning Face With Sweat",
            "keywords":[
                "grinning",
                "face",
                "sweat"
            ]
        },
        {
            "no":7,
            "code":"U+1F923",
            "emoji":"🤣",
            "description":"Rolling On The Floor Laughing",
            "keywords":[
                "rolling",
                "",
                "floor",
                "laughing"
            ]
        },
        {
            "no":8,
            "code":"U+1F602",
            "emoji":"😂",
            "description":"Face With Tears Of Joy",
            "keywords":[
                "face",
                "tears",
                "joy"
            ]
        },
        {
            "no":9,
            "code":"U+1F642",
            "emoji":"🙂",
            "description":"Slightly Smiling Face",
            "keywords":[
                "slightly",
                "smiling",
                "face"
            ]
        },
        {
            "no":10,
            "code":"U+1F643",
            "emoji":"🙃",
            "description":"Upside-Down Face",
            "keywords":[
                "upside-down",
                "face"
            ]
        },
        {
            "no":11,
            "code":"U+1F609",
            "emoji":"😉",
            "description":"Winking Face",
            "keywords":[
                "winking",
                "face"
            ]
        },
        {
            "no":12,
            "code":"U+1F60A",
            "emoji":"😊",
            "description":"Smiling Face With Smiling Eyes",
            "keywords":[
                "smiling",
                "face",
                "smiling",
                "eyes"
            ]
        },
        {
            "no":13,
            "code":"U+1F607",
            "emoji":"😇",
            "description":"Smiling Face With Halo",
            "keywords":[
                "smiling",
                "face",
                "halo"
            ]
        },
        {
            "no":14,
            "code":"U+1F970",
            "emoji":"🥰",
            "description":"Smiling Face With Hearts",
            "keywords":[
                "smiling",
                "face",
                "hearts"
            ]
        },
        {
            "no":15,
            "code":"U+1F60D",
            "emoji":"😍",
            "description":"Smiling Face With Heart-Eyes",
            "keywords":[
                "smiling",
                "face",
                "heart-eyes"
            ]
        },
        {
            "no":16,
            "code":"U+1F929",
            "emoji":"🤩",
            "description":"Star-Struck",
            "keywords":[
                "star-struck"
            ]
        },
        {
            "no":17,
            "code":"U+1F618",
            "emoji":"😘",
            "description":"Face Blowing A Kiss",
            "keywords":[
                "face",
                "blowing",
                "a",
                "kiss"
            ]
        },
        {
            "no":18,
            "code":"U+1F617",
            "emoji":"😗",
            "description":"Kissing Face",
            "keywords":[
                "kissing",
                "face"
            ]
        },
        {
            "no":19,
            "code":"U+263A",
            "emoji":"☺",
            "description":"Smiling Face",
            "keywords":[
                "smiling",
                "face"
            ]
        },
        {
            "no":20,
            "code":"U+1F61A",
            "emoji":"😚",
            "description":"Kissing Face With Closed Eyes",
            "keywords":[
                "kissing",
                "face",
                "closed",
                "eyes"
            ]
        },
        {
            "no":21,
            "code":"U+1F619",
            "emoji":"😙",
            "description":"Kissing Face With Smiling Eyes",
            "keywords":[
                "kissing",
                "face",
                "smiling",
                "eyes"
            ]
        },
        // {
        //     "no":22,
        //     "code":"U+1F972",
        //     "emoji":"🥲",
        //     "description":"Smiling Face With Tear",
        //     "keywords":[
        //         "smiling",
        //         "face",
        //         "tear"
        //     ]
        // },
        {
            "no":23,
            "code":"U+1F60B",
            "emoji":"😋",
            "description":"Face Savoring Food",
            "keywords":[
                "face",
                "savoring",
                "food"
            ]
        },
        {
            "no":24,
            "code":"U+1F61B",
            "emoji":"😛",
            "description":"Face With Tongue",
            "keywords":[
                "face",
                "tongue"
            ]
        },
        {
            "no":25,
            "code":"U+1F61C",
            "emoji":"😜",
            "description":"Winking Face With Tongue",
            "keywords":[
                "winking",
                "face",
                "tongue"
            ]
        },
        {
            "no":26,
            "code":"U+1F92A",
            "emoji":"🤪",
            "description":"Zany Face",
            "keywords":[
                "zany",
                "face"
            ]
        },
        {
            "no":27,
            "code":"U+1F61D",
            "emoji":"😝",
            "description":"Squinting Face With Tongue",
            "keywords":[
                "squinting",
                "face",
                "tongue"
            ]
        },
        {
            "no":28,
            "code":"U+1F911",
            "emoji":"🤑",
            "description":"Money-Mouth Face",
            "keywords":[
                "money-mouth",
                "face"
            ]
        },
        {
            "no":29,
            "code":"U+1F917",
            "emoji":"🤗",
            "description":"Hugging Face",
            "keywords":[
                "hugging",
                "face"
            ]
        },
        {
            "no":30,
            "code":"U+1F92D",
            "emoji":"🤭",
            "description":"Face With Hand Over Mouth",
            "keywords":[
                "face",
                "hand",
                "over",
                "mouth"
            ]
        },
        {
            "no":31,
            "code":"U+1F92B",
            "emoji":"🤫",
            "description":"Shushing Face",
            "keywords":[
                "shushing",
                "face"
            ]
        },
        {
            "no":32,
            "code":"U+1F914",
            "emoji":"🤔",
            "description":"Thinking Face",
            "keywords":[
                "thinking",
                "face"
            ]
        },
        {
            "no":33,
            "code":"U+1F910",
            "emoji":"🤐",
            "description":"Zipper-Mouth Face",
            "keywords":[
                "zipper-mouth",
                "face"
            ]
        },
        {
            "no":34,
            "code":"U+1F928",
            "emoji":"🤨",
            "description":"Face With Raised Eyebrow",
            "keywords":[
                "face",
                "raised",
                "eyebrow"
            ]
        },
        {
            "no":35,
            "code":"U+1F610",
            "emoji":"😐",
            "description":"Neutral Face",
            "keywords":[
                "neutral",
                "face"
            ]
        },
        {
            "no":36,
            "code":"U+1F611",
            "emoji":"😑",
            "description":"Expressionless Face",
            "keywords":[
                "expressionless",
                "face"
            ]
        },
        {
            "no":37,
            "code":"U+1F636",
            "emoji":"😶",
            "description":"Face Without Mouth",
            "keywords":[
                "face",
                "without",
                "mouth"
            ]
        },
        {
            "no":38,
            "code":"U+1F636 U+200D U+1F32B U+FE0F",
            "emoji":"😶‍🌫️",
            "description":"⊛ Face In Clouds",
            "keywords":[
                "⊛",
                "face",
                "clouds"
            ]
        },
        {
            "no":39,
            "code":"U+1F60F",
            "emoji":"😏",
            "description":"Smirking Face",
            "keywords":[
                "smirking",
                "face"
            ]
        },
        {
            "no":40,
            "code":"U+1F612",
            "emoji":"😒",
            "description":"Unamused Face",
            "keywords":[
                "unamused",
                "face"
            ]
        },
        {
            "no":41,
            "code":"U+1F644",
            "emoji":"🙄",
            "description":"Face With Rolling Eyes",
            "keywords":[
                "face",
                "rolling",
                "eyes"
            ]
        },
        {
            "no":42,
            "code":"U+1F62C",
            "emoji":"😬",
            "description":"Grimacing Face",
            "keywords":[
                "grimacing",
                "face"
            ]
        },
        {
            "no":43,
            "code":"U+1F62E U+200D U+1F4A8",
            "emoji":"😮‍💨",
            "description":"⊛ Face Exhaling",
            "keywords":[
                "⊛",
                "face",
                "exhaling"
            ]
        },
        {
            "no":44,
            "code":"U+1F925",
            "emoji":"🤥",
            "description":"Lying Face",
            "keywords":[
                "lying",
                "face"
            ]
        },
        {
            "no":45,
            "code":"U+1F60C",
            "emoji":"😌",
            "description":"Relieved Face",
            "keywords":[
                "relieved",
                "face"
            ]
        },
        {
            "no":46,
            "code":"U+1F614",
            "emoji":"😔",
            "description":"Pensive Face",
            "keywords":[
                "pensive",
                "face"
            ]
        },
        {
            "no":47,
            "code":"U+1F62A",
            "emoji":"😪",
            "description":"Sleepy Face",
            "keywords":[
                "sleepy",
                "face"
            ]
        },
        {
            "no":48,
            "code":"U+1F924",
            "emoji":"🤤",
            "description":"Drooling Face",
            "keywords":[
                "drooling",
                "face"
            ]
        },
        {
            "no":49,
            "code":"U+1F634",
            "emoji":"😴",
            "description":"Sleeping Face",
            "keywords":[
                "sleeping",
                "face"
            ]
        },
        {
            "no":50,
            "code":"U+1F637",
            "emoji":"😷",
            "description":"Face With Medical Mask",
            "keywords":[
                "face",
                "medical",
                "mask"
            ]
        },
        {
            "no":51,
            "code":"U+1F912",
            "emoji":"🤒",
            "description":"Face With Thermometer",
            "keywords":[
                "face",
                "thermometer"
            ]
        },
        {
            "no":52,
            "code":"U+1F915",
            "emoji":"🤕",
            "description":"Face With Head-Bandage",
            "keywords":[
                "face",
                "head-bandage"
            ]
        },
        {
            "no":53,
            "code":"U+1F922",
            "emoji":"🤢",
            "description":"Nauseated Face",
            "keywords":[
                "nauseated",
                "face"
            ]
        },
        {
            "no":54,
            "code":"U+1F92E",
            "emoji":"🤮",
            "description":"Face Vomiting",
            "keywords":[
                "face",
                "vomiting"
            ]
        },
        {
            "no":55,
            "code":"U+1F927",
            "emoji":"🤧",
            "description":"Sneezing Face",
            "keywords":[
                "sneezing",
                "face"
            ]
        },
        {
            "no":56,
            "code":"U+1F975",
            "emoji":"🥵",
            "description":"Hot Face",
            "keywords":[
                "hot",
                "face"
            ]
        },
        {
            "no":57,
            "code":"U+1F976",
            "emoji":"🥶",
            "description":"Cold Face",
            "keywords":[
                "cold",
                "face"
            ]
        },
        {
            "no":58,
            "code":"U+1F974",
            "emoji":"🥴",
            "description":"Woozy Face",
            "keywords":[
                "woozy",
                "face"
            ]
        },
        {
            "no":59,
            "code":"U+1F635",
            "emoji":"😵",
            "description":"Knocked-Out Face",
            "keywords":[
                "knocked-out",
                "face"
            ]
        },
        {
            "no":60,
            "code":"U+1F635 U+200D U+1F4AB",
            "emoji":"😵‍💫",
            "description":"⊛ Face With Spiral Eyes",
            "keywords":[
                "⊛",
                "face",
                "spiral",
                "eyes"
            ]
        },
        {
            "no":61,
            "code":"U+1F92F",
            "emoji":"🤯",
            "description":"Exploding Head",
            "keywords":[
                "exploding",
                "head"
            ]
        },
        {
            "no":62,
            "code":"U+1F920",
            "emoji":"🤠",
            "description":"Cowboy Hat Face",
            "keywords":[
                "cowboy",
                "hat",
                "face"
            ]
        },
        {
            "no":63,
            "code":"U+1F973",
            "emoji":"🥳",
            "description":"Partying Face",
            "keywords":[
                "partying",
                "face"
            ]
        },
        // {
        //     "no":64,
        //     "code":"U+1F978",
        //     "emoji":"🥸",
        //     "description":"Disguised Face",
        //     "keywords":[
        //         "disguised",
        //         "face"
        //     ]
        // },
        {
            "no":65,
            "code":"U+1F60E",
            "emoji":"😎",
            "description":"Smiling Face With Sunglasses",
            "keywords":[
                "smiling",
                "face",
                "sunglasses"
            ]
        },
        {
            "no":66,
            "code":"U+1F913",
            "emoji":"🤓",
            "description":"Nerd Face",
            "keywords":[
                "nerd",
                "face"
            ]
        },
        {
            "no":67,
            "code":"U+1F9D0",
            "emoji":"🧐",
            "description":"Face With Monocle",
            "keywords":[
                "face",
                "monocle"
            ]
        },
        {
            "no":68,
            "code":"U+1F615",
            "emoji":"😕",
            "description":"Confused Face",
            "keywords":[
                "confused",
                "face"
            ]
        },
        {
            "no":69,
            "code":"U+1F61F",
            "emoji":"😟",
            "description":"Worried Face",
            "keywords":[
                "worried",
                "face"
            ]
        },
        {
            "no":70,
            "code":"U+1F641",
            "emoji":"🙁",
            "description":"Slightly Frowning Face",
            "keywords":[
                "slightly",
                "frowning",
                "face"
            ]
        },
        {
            "no":71,
            "code":"U+2639",
            "emoji":"☹",
            "description":"Frowning Face",
            "keywords":[
                "frowning",
                "face"
            ]
        },
        {
            "no":72,
            "code":"U+1F62E",
            "emoji":"😮",
            "description":"Face With Open Mouth",
            "keywords":[
                "face",
                "open",
                "mouth"
            ]
        },
        {
            "no":73,
            "code":"U+1F62F",
            "emoji":"😯",
            "description":"Hushed Face",
            "keywords":[
                "hushed",
                "face"
            ]
        },
        {
            "no":74,
            "code":"U+1F632",
            "emoji":"😲",
            "description":"Astonished Face",
            "keywords":[
                "astonished",
                "face"
            ]
        },
        {
            "no":75,
            "code":"U+1F633",
            "emoji":"😳",
            "description":"Flushed Face",
            "keywords":[
                "flushed",
                "face"
            ]
        },
        {
            "no":76,
            "code":"U+1F97A",
            "emoji":"🥺",
            "description":"Pleading Face",
            "keywords":[
                "pleading",
                "face"
            ]
        },
        {
            "no":77,
            "code":"U+1F626",
            "emoji":"😦",
            "description":"Frowning Face With Open Mouth",
            "keywords":[
                "frowning",
                "face",
                "open",
                "mouth"
            ]
        },
        {
            "no":78,
            "code":"U+1F627",
            "emoji":"😧",
            "description":"Anguished Face",
            "keywords":[
                "anguished",
                "face"
            ]
        },
        {
            "no":79,
            "code":"U+1F628",
            "emoji":"😨",
            "description":"Fearful Face",
            "keywords":[
                "fearful",
                "face"
            ]
        },
        {
            "no":80,
            "code":"U+1F630",
            "emoji":"😰",
            "description":"Anxious Face With Sweat",
            "keywords":[
                "anxious",
                "face",
                "sweat"
            ]
        },
        {
            "no":81,
            "code":"U+1F625",
            "emoji":"😥",
            "description":"Sad But Relieved Face",
            "keywords":[
                "sad",
                "but",
                "relieved",
                "face"
            ]
        },
        {
            "no":82,
            "code":"U+1F622",
            "emoji":"😢",
            "description":"Crying Face",
            "keywords":[
                "crying",
                "face"
            ]
        },
        {
            "no":83,
            "code":"U+1F62D",
            "emoji":"😭",
            "description":"Loudly Crying Face",
            "keywords":[
                "loudly",
                "crying",
                "face"
            ]
        },
        {
            "no":84,
            "code":"U+1F631",
            "emoji":"😱",
            "description":"Face Screaming In Fear",
            "keywords":[
                "face",
                "screaming",
                "fear"
            ]
        },
        {
            "no":85,
            "code":"U+1F616",
            "emoji":"😖",
            "description":"Confounded Face",
            "keywords":[
                "confounded",
                "face"
            ]
        },
        {
            "no":86,
            "code":"U+1F623",
            "emoji":"😣",
            "description":"Persevering Face",
            "keywords":[
                "persevering",
                "face"
            ]
        },
        {
            "no":87,
            "code":"U+1F61E",
            "emoji":"😞",
            "description":"Disappointed Face",
            "keywords":[
                "disappointed",
                "face"
            ]
        },
        {
            "no":88,
            "code":"U+1F613",
            "emoji":"😓",
            "description":"Downcast Face With Sweat",
            "keywords":[
                "downcast",
                "face",
                "sweat"
            ]
        },
        {
            "no":89,
            "code":"U+1F629",
            "emoji":"😩",
            "description":"Weary Face",
            "keywords":[
                "weary",
                "face"
            ]
        },
        {
            "no":90,
            "code":"U+1F62B",
            "emoji":"😫",
            "description":"Tired Face",
            "keywords":[
                "tired",
                "face"
            ]
        },
        {
            "no":91,
            "code":"U+1F971",
            "emoji":"🥱",
            "description":"Yawning Face",
            "keywords":[
                "yawning",
                "face"
            ]
        },
        {
            "no":92,
            "code":"U+1F624",
            "emoji":"😤",
            "description":"Face With Steam From Nose",
            "keywords":[
                "face",
                "steam",
                "from",
                "nose"
            ]
        },
        {
            "no":93,
            "code":"U+1F621",
            "emoji":"😡",
            "description":"Pouting Face",
            "keywords":[
                "pouting",
                "face"
            ]
        },
        {
            "no":94,
            "code":"U+1F620",
            "emoji":"😠",
            "description":"Angry Face",
            "keywords":[
                "angry",
                "face"
            ]
        },
        {
            "no":95,
            "code":"U+1F92C",
            "emoji":"🤬",
            "description":"Face With Symbols On Mouth",
            "keywords":[
                "face",
                "symbols",
                "mouth"
            ]
        },
        {
            "no":96,
            "code":"U+1F608",
            "emoji":"😈",
            "description":"Smiling Face With Horns",
            "keywords":[
                "smiling",
                "face",
                "horns"
            ]
        },
        {
            "no":97,
            "code":"U+1F47F",
            "emoji":"👿",
            "description":"Angry Face With Horns",
            "keywords":[
                "angry",
                "face",
                "horns"
            ]
        },
        {
            "no":98,
            "code":"U+1F480",
            "emoji":"💀",
            "description":"Skull",
            "keywords":[
                "skull"
            ]
        },
        {
            "no":99,
            "code":"U+2620",
            "emoji":"☠",
            "description":"Skull And Crossbones",
            "keywords":[
                "skull",
                "crossbones"
            ]
        },
        {
            "no":100,
            "code":"U+1F4A9",
            "emoji":"💩",
            "description":"Pile Of Poo",
            "keywords":[
                "pile",
                "poo"
            ]
        },
        {
            "no":101,
            "code":"U+1F921",
            "emoji":"🤡",
            "description":"Clown Face",
            "keywords":[
                "clown",
                "face"
            ]
        },
        {
            "no":102,
            "code":"U+1F479",
            "emoji":"👹",
            "description":"Ogre",
            "keywords":[
                "ogre"
            ]
        },
        {
            "no":103,
            "code":"U+1F47A",
            "emoji":"👺",
            "description":"Goblin",
            "keywords":[
                "goblin"
            ]
        },
        {
            "no":104,
            "code":"U+1F47B",
            "emoji":"👻",
            "description":"Ghost",
            "keywords":[
                "ghost"
            ]
        },
        {
            "no":105,
            "code":"U+1F47D",
            "emoji":"👽",
            "description":"Alien",
            "keywords":[
                "alien"
            ]
        },
        {
            "no":106,
            "code":"U+1F47E",
            "emoji":"👾",
            "description":"Alien Monster",
            "keywords":[
                "alien",
                "monster"
            ]
        },
        {
            "no":107,
            "code":"U+1F916",
            "emoji":"🤖",
            "description":"Robot",
            "keywords":[
                "robot"
            ]
        },
        {
            "no":108,
            "code":"U+1F63A",
            "emoji":"😺",
            "description":"Grinning Cat",
            "keywords":[
                "grinning",
                "cat"
            ]
        },
        {
            "no":109,
            "code":"U+1F638",
            "emoji":"😸",
            "description":"Grinning Cat With Smiling Eyes",
            "keywords":[
                "grinning",
                "cat",
                "smiling",
                "eyes"
            ]
        },
        {
            "no":110,
            "code":"U+1F639",
            "emoji":"😹",
            "description":"Cat With Tears Of Joy",
            "keywords":[
                "cat",
                "tears",
                "joy"
            ]
        },
        {
            "no":111,
            "code":"U+1F63B",
            "emoji":"😻",
            "description":"Smiling Cat With Heart-Eyes",
            "keywords":[
                "smiling",
                "cat",
                "heart-eyes"
            ]
        },
        {
            "no":112,
            "code":"U+1F63C",
            "emoji":"😼",
            "description":"Cat With Wry Smile",
            "keywords":[
                "cat",
                "wry",
                "smile"
            ]
        },
        {
            "no":113,
            "code":"U+1F63D",
            "emoji":"😽",
            "description":"Kissing Cat",
            "keywords":[
                "kissing",
                "cat"
            ]
        },
        {
            "no":114,
            "code":"U+1F640",
            "emoji":"🙀",
            "description":"Weary Cat",
            "keywords":[
                "weary",
                "cat"
            ]
        },
        {
            "no":115,
            "code":"U+1F63F",
            "emoji":"😿",
            "description":"Crying Cat",
            "keywords":[
                "crying",
                "cat"
            ]
        },
        {
            "no":116,
            "code":"U+1F63E",
            "emoji":"😾",
            "description":"Pouting Cat",
            "keywords":[
                "pouting",
                "cat"
            ]
        },
        {
            "no":117,
            "code":"U+1F648",
            "emoji":"🙈",
            "description":"See-No-Evil Monkey",
            "keywords":[
                "see-no-evil",
                "monkey"
            ]
        },
        {
            "no":118,
            "code":"U+1F649",
            "emoji":"🙉",
            "description":"Hear-No-Evil Monkey",
            "keywords":[
                "hear-no-evil",
                "monkey"
            ]
        },
        {
            "no":119,
            "code":"U+1F64A",
            "emoji":"🙊",
            "description":"Speak-No-Evil Monkey",
            "keywords":[
                "speak-no-evil",
                "monkey"
            ]
        },
        {
            "no":120,
            "code":"U+1F48B",
            "emoji":"💋",
            "description":"Kiss Mark",
            "keywords":[
                "kiss",
                "mark"
            ]
        },
        {
            "no":121,
            "code":"U+1F48C",
            "emoji":"💌",
            "description":"Love Letter",
            "keywords":[
                "love",
                "letter"
            ]
        },
        {
            "no":143,
            "code":"U+1F4AF",
            "emoji":"💯",
            "description":"Hundred Points",
            "keywords":[
                "hundred",
                "points"
            ]
        },
        {
            "no":144,
            "code":"U+1F4A2",
            "emoji":"💢",
            "description":"Anger Symbol",
            "keywords":[
                "anger",
                "symbol"
            ]
        },
        {
            "no":145,
            "code":"U+1F4A5",
            "emoji":"💥",
            "description":"Collision",
            "keywords":[
                "collision"
            ]
        },
        {
            "no":146,
            "code":"U+1F4AB",
            "emoji":"💫",
            "description":"Dizzy",
            "keywords":[
                "dizzy"
            ]
        },
        {
            "no":147,
            "code":"U+1F4A6",
            "emoji":"💦",
            "description":"Sweat Droplets",
            "keywords":[
                "sweat",
                "droplets"
            ]
        },
        {
            "no":148,
            "code":"U+1F4A8",
            "emoji":"💨",
            "description":"Dashing Away",
            "keywords":[
                "dashing",
                "away"
            ]
        },
        {
            "no":149,
            "code":"U+1F573",
            "emoji":"🕳",
            "description":"Hole",
            "keywords":[
                "hole"
            ]
        },
        {
            "no":151,
            "code":"U+1F4AC",
            "emoji":"💬",
            "description":"Speech Balloon",
            "keywords":[
                "speech",
                "balloon"
            ]
        },
        {
            "no":152,
            "code":"U+1F441 U+FE0F U+200D U+1F5E8 U+FE0F",
            "emoji":"👁️‍🗨️",
            "description":"Eye In Speech Bubble",
            "keywords":[
                "eye",
                "speech",
                "bubble"
            ]
        },
        {
            "no":153,
            "code":"U+1F5E8",
            "emoji":"🗨",
            "description":"Left Speech Bubble",
            "keywords":[
                "left",
                "speech",
                "bubble"
            ]
        },
        {
            "no":154,
            "code":"U+1F5EF",
            "emoji":"🗯",
            "description":"Right Anger Bubble",
            "keywords":[
                "right",
                "anger",
                "bubble"
            ]
        },
        {
            "no":155,
            "code":"U+1F4AD",
            "emoji":"💭",
            "description":"Thought Balloon",
            "keywords":[
                "thought",
                "balloon"
            ]
        },
        {
            "no":156,
            "code":"U+1F4A4",
            "emoji":"💤",
            "description":"Zzz",
            "keywords":[
                "zzz"
            ]
        },
        {
            "no":157,
            "code":"U+1F44B",
            "emoji":"👋",
            "description":"Waving Hand",
            "keywords":[
                "waving",
                "hand"
            ]
        },
        {
            "no":158,
            "code":"U+1F91A",
            "emoji":"🤚",
            "description":"Raised Back Of Hand",
            "keywords":[
                "raised",
                "back",
                "hand"
            ]
        },
        {
            "no":159,
            "code":"U+1F590",
            "emoji":"🖐",
            "description":"Hand With Fingers Splayed",
            "keywords":[
                "hand",
                "fingers",
                "splayed"
            ]
        },
        {
            "no":160,
            "code":"U+270B",
            "emoji":"✋",
            "description":"Raised Hand",
            "keywords":[
                "raised",
                "hand"
            ]
        },
        {
            "no":161,
            "code":"U+1F596",
            "emoji":"🖖",
            "description":"Vulcan Salute",
            "keywords":[
                "vulcan",
                "salute"
            ]
        },
        {
            "no":162,
            "code":"U+1F44C",
            "emoji":"👌",
            "description":"Ok Hand",
            "keywords":[
                "OK",
                "hand"
            ]
        },
        // {
        //     "no":163,
        //     "code":"U+1F90C",
        //     "emoji":"🤌",
        //     "description":"Pinched Fingers",
        //     "keywords":[
        //         "pinched",
        //         "fingers"
        //     ]
        // },
        {
            "no":164,
            "code":"U+1F90F",
            "emoji":"🤏",
            "description":"Pinching Hand",
            "keywords":[
                "pinching",
                "hand"
            ]
        },
        {
            "no":165,
            "code":"U+270C",
            "emoji":"✌",
            "description":"Victory Hand",
            "keywords":[
                "victory",
                "hand"
            ]
        },
        {
            "no":166,
            "code":"U+1F91E",
            "emoji":"🤞",
            "description":"Crossed Fingers",
            "keywords":[
                "crossed",
                "fingers"
            ]
        },
        {
            "no":167,
            "code":"U+1F91F",
            "emoji":"🤟",
            "description":"Love-You Gesture",
            "keywords":[
                "love-you",
                "gesture"
            ]
        },
        {
            "no":168,
            "code":"U+1F918",
            "emoji":"🤘",
            "description":"Sign Of The Horns",
            "keywords":[
                "sign",
                "",
                "horns"
            ]
        },
        {
            "no":169,
            "code":"U+1F919",
            "emoji":"🤙",
            "description":"Call Me Hand",
            "keywords":[
                "call",
                "me",
                "hand"
            ]
        },
        {
            "no":170,
            "code":"U+1F448",
            "emoji":"👈",
            "description":"Backhand Index Pointing Left",
            "keywords":[
                "backhand",
                "index",
                "pointing",
                "left"
            ]
        },
        {
            "no":171,
            "code":"U+1F449",
            "emoji":"👉",
            "description":"Backhand Index Pointing Right",
            "keywords":[
                "backhand",
                "index",
                "pointing",
                "right"
            ]
        },
        {
            "no":172,
            "code":"U+1F446",
            "emoji":"👆",
            "description":"Backhand Index Pointing Up",
            "keywords":[
                "backhand",
                "index",
                "pointing",
                "up"
            ]
        },
        {
            "no":173,
            "code":"U+1F595",
            "emoji":"🖕",
            "description":"Middle Finger",
            "keywords":[
                "middle",
                "finger"
            ]
        },
        {
            "no":174,
            "code":"U+1F447",
            "emoji":"👇",
            "description":"Backhand Index Pointing Down",
            "keywords":[
                "backhand",
                "index",
                "pointing",
                "down"
            ]
        },
        {
            "no":175,
            "code":"U+261D",
            "emoji":"☝",
            "description":"Index Pointing Up",
            "keywords":[
                "index",
                "pointing",
                "up"
            ]
        },
        {
            "no":176,
            "code":"U+1F44D",
            "emoji":"👍",
            "description":"Thumbs Up",
            "keywords":[
                "thumbs",
                "up"
            ]
        },
        {
            "no":177,
            "code":"U+1F44E",
            "emoji":"👎",
            "description":"Thumbs Down",
            "keywords":[
                "thumbs",
                "down"
            ]
        },
        {
            "no":178,
            "code":"U+270A",
            "emoji":"✊",
            "description":"Raised Fist",
            "keywords":[
                "raised",
                "fist"
            ]
        },
        {
            "no":179,
            "code":"U+1F44A",
            "emoji":"👊",
            "description":"Oncoming Fist",
            "keywords":[
                "oncoming",
                "fist"
            ]
        },
        {
            "no":180,
            "code":"U+1F91B",
            "emoji":"🤛",
            "description":"Left-Facing Fist",
            "keywords":[
                "left-facing",
                "fist"
            ]
        },
        {
            "no":181,
            "code":"U+1F91C",
            "emoji":"🤜",
            "description":"Right-Facing Fist",
            "keywords":[
                "right-facing",
                "fist"
            ]
        },
        {
            "no":182,
            "code":"U+1F44F",
            "emoji":"👏",
            "description":"Clapping Hands",
            "keywords":[
                "clapping",
                "hands"
            ]
        },
        {
            "no":183,
            "code":"U+1F64C",
            "emoji":"🙌",
            "description":"Raising Hands",
            "keywords":[
                "raising",
                "hands"
            ]
        },
        {
            "no":184,
            "code":"U+1F450",
            "emoji":"👐",
            "description":"Open Hands",
            "keywords":[
                "open",
                "hands"
            ]
        },
        {
            "no":185,
            "code":"U+1F932",
            "emoji":"🤲",
            "description":"Palms Up Together",
            "keywords":[
                "palms",
                "up",
                "together"
            ]
        },
        {
            "no":186,
            "code":"U+1F91D",
            "emoji":"🤝",
            "description":"Handshake",
            "keywords":[
                "handshake"
            ]
        },
        {
            "no":187,
            "code":"U+1F64F",
            "emoji":"🙏",
            "description":"Folded Hands",
            "keywords":[
                "folded",
                "hands"
            ]
        },
        {
            "no":188,
            "code":"U+270D",
            "emoji":"✍",
            "description":"Writing Hand",
            "keywords":[
                "writing",
                "hand"
            ]
        },
        {
            "no":189,
            "code":"U+1F485",
            "emoji":"💅",
            "description":"Nail Polish",
            "keywords":[
                "nail",
                "polish"
            ]
        },
        {
            "no":190,
            "code":"U+1F933",
            "emoji":"🤳",
            "description":"Selfie",
            "keywords":[
                "selfie"
            ]
        },
        {
            "no":191,
            "code":"U+1F4AA",
            "emoji":"💪",
            "description":"Flexed Biceps",
            "keywords":[
                "flexed",
                "biceps"
            ]
        },
        {
            "no":192,
            "code":"U+1F9BE",
            "emoji":"🦾",
            "description":"Mechanical Arm",
            "keywords":[
                "mechanical",
                "arm"
            ]
        },
        {
            "no":193,
            "code":"U+1F9BF",
            "emoji":"🦿",
            "description":"Mechanical Leg",
            "keywords":[
                "mechanical",
                "leg"
            ]
        },
        {
            "no":194,
            "code":"U+1F9B5",
            "emoji":"🦵",
            "description":"Leg",
            "keywords":[
                "leg"
            ]
        },
        {
            "no":195,
            "code":"U+1F9B6",
            "emoji":"🦶",
            "description":"Foot",
            "keywords":[
                "foot"
            ]
        },
        {
            "no":196,
            "code":"U+1F442",
            "emoji":"👂",
            "description":"Ear",
            "keywords":[
                "ear"
            ]
        },
        {
            "no":197,
            "code":"U+1F9BB",
            "emoji":"🦻",
            "description":"Ear With Hearing Aid",
            "keywords":[
                "ear",
                "hearing",
                "aid"
            ]
        },
        {
            "no":198,
            "code":"U+1F443",
            "emoji":"👃",
            "description":"Nose",
            "keywords":[
                "nose"
            ]
        },
        {
            "no":199,
            "code":"U+1F9E0",
            "emoji":"🧠",
            "description":"Brain",
            "keywords":[
                "brain"
            ]
        },
        // {
        //     "no":200,
        //     "code":"U+1FAC0",
        //     "emoji":"🫀",
        //     "description":"Anatomical Heart",
        //     "keywords":[
        //         "anatomical",
        //         "heart"
        //     ]
        // },
        // {
        //     "no":201,
        //     "code":"U+1FAC1",
        //     "emoji":"🫁",
        //     "description":"Lungs",
        //     "keywords":[
        //         "lungs"
        //     ]
        // },
        {
            "no":202,
            "code":"U+1F9B7",
            "emoji":"🦷",
            "description":"Tooth",
            "keywords":[
                "tooth"
            ]
        },
        {
            "no":203,
            "code":"U+1F9B4",
            "emoji":"🦴",
            "description":"Bone",
            "keywords":[
                "bone"
            ]
        },
        {
            "no":204,
            "code":"U+1F440",
            "emoji":"👀",
            "description":"Eyes",
            "keywords":[
                "eyes"
            ]
        },
        {
            "no":205,
            "code":"U+1F441",
            "emoji":"👁",
            "description":"Eye",
            "keywords":[
                "eye"
            ]
        },
        {
            "no":206,
            "code":"U+1F445",
            "emoji":"👅",
            "description":"Tongue",
            "keywords":[
                "tongue"
            ]
        },
        {
            "no":207,
            "code":"U+1F444",
            "emoji":"👄",
            "description":"Mouth",
            "keywords":[
                "mouth"
            ]
        },
        {
            "no":208,
            "code":"U+1F476",
            "emoji":"👶",
            "description":"Baby",
            "keywords":[
                "baby"
            ]
        },
        {
            "no":209,
            "code":"U+1F9D2",
            "emoji":"🧒",
            "description":"Child",
            "keywords":[
                "child"
            ]
        },
        {
            "no":210,
            "code":"U+1F466",
            "emoji":"👦",
            "description":"Boy",
            "keywords":[
                "boy"
            ]
        },
        {
            "no":211,
            "code":"U+1F467",
            "emoji":"👧",
            "description":"Girl",
            "keywords":[
                "girl"
            ]
        },
        {
            "no":212,
            "code":"U+1F9D1",
            "emoji":"🧑",
            "description":"Person",
            "keywords":[
                "person"
            ]
        },
        {
            "no":213,
            "code":"U+1F471",
            "emoji":"👱",
            "description":"Person: Blond Hair",
            "keywords":[
                "person",
                "blond",
                "hair"
            ]
        },
        {
            "no":214,
            "code":"U+1F468",
            "emoji":"👨",
            "description":"Man",
            "keywords":[
                "man"
            ]
        },
        {
            "no":215,
            "code":"U+1F9D4",
            "emoji":"🧔",
            "description":"Person: Beard",
            "keywords":[
                "person",
                "beard"
            ]
        },
        {
            "no":216,
            "code":"U+1F9D4 U+200D U+2642 U+FE0F",
            "emoji":"🧔‍♂️",
            "description":"⊛ Man: Beard",
            "keywords":[
                "⊛",
                "man",
                "beard"
            ]
        },
        {
            "no":217,
            "code":"U+1F9D4 U+200D U+2640 U+FE0F",
            "emoji":"🧔‍♀️",
            "description":"⊛ Woman: Beard",
            "keywords":[
                "⊛",
                "woman",
                "beard"
            ]
        },
        {
            "no":218,
            "code":"U+1F468 U+200D U+1F9B0",
            "emoji":"👨‍🦰",
            "description":"Man: Red Hair",
            "keywords":[
                "man",
                "red",
                "hair"
            ]
        },
        {
            "no":219,
            "code":"U+1F468 U+200D U+1F9B1",
            "emoji":"👨‍🦱",
            "description":"Man: Curly Hair",
            "keywords":[
                "man",
                "curly",
                "hair"
            ]
        },
        {
            "no":220,
            "code":"U+1F468 U+200D U+1F9B3",
            "emoji":"👨‍🦳",
            "description":"Man: White Hair",
            "keywords":[
                "man",
                "white",
                "hair"
            ]
        },
        {
            "no":221,
            "code":"U+1F468 U+200D U+1F9B2",
            "emoji":"👨‍🦲",
            "description":"Man: Bald",
            "keywords":[
                "man",
                "bald"
            ]
        },
        {
            "no":222,
            "code":"U+1F469",
            "emoji":"👩",
            "description":"Woman",
            "keywords":[
                "woman"
            ]
        },
        {
            "no":223,
            "code":"U+1F469 U+200D U+1F9B0",
            "emoji":"👩‍🦰",
            "description":"Woman: Red Hair",
            "keywords":[
                "woman",
                "red",
                "hair"
            ]
        },
        {
            "no":224,
            "code":"U+1F9D1 U+200D U+1F9B0",
            "emoji":"🧑‍🦰",
            "description":"Person: Red Hair",
            "keywords":[
                "person",
                "red",
                "hair"
            ]
        },
        {
            "no":225,
            "code":"U+1F469 U+200D U+1F9B1",
            "emoji":"👩‍🦱",
            "description":"Woman: Curly Hair",
            "keywords":[
                "woman",
                "curly",
                "hair"
            ]
        },
        {
            "no":226,
            "code":"U+1F9D1 U+200D U+1F9B1",
            "emoji":"🧑‍🦱",
            "description":"Person: Curly Hair",
            "keywords":[
                "person",
                "curly",
                "hair"
            ]
        },
        {
            "no":227,
            "code":"U+1F469 U+200D U+1F9B3",
            "emoji":"👩‍🦳",
            "description":"Woman: White Hair",
            "keywords":[
                "woman",
                "white",
                "hair"
            ]
        },
        {
            "no":228,
            "code":"U+1F9D1 U+200D U+1F9B3",
            "emoji":"🧑‍🦳",
            "description":"Person: White Hair",
            "keywords":[
                "person",
                "white",
                "hair"
            ]
        },
        {
            "no":229,
            "code":"U+1F469 U+200D U+1F9B2",
            "emoji":"👩‍🦲",
            "description":"Woman: Bald",
            "keywords":[
                "woman",
                "bald"
            ]
        },
        {
            "no":230,
            "code":"U+1F9D1 U+200D U+1F9B2",
            "emoji":"🧑‍🦲",
            "description":"Person: Bald",
            "keywords":[
                "person",
                "bald"
            ]
        },
        {
            "no":231,
            "code":"U+1F471 U+200D U+2640 U+FE0F",
            "emoji":"👱‍♀️",
            "description":"Woman: Blond Hair",
            "keywords":[
                "woman",
                "blond",
                "hair"
            ]
        },
        {
            "no":232,
            "code":"U+1F471 U+200D U+2642 U+FE0F",
            "emoji":"👱‍♂️",
            "description":"Man: Blond Hair",
            "keywords":[
                "man",
                "blond",
                "hair"
            ]
        },
        {
            "no":233,
            "code":"U+1F9D3",
            "emoji":"🧓",
            "description":"Older Person",
            "keywords":[
                "older",
                "person"
            ]
        },
        {
            "no":234,
            "code":"U+1F474",
            "emoji":"👴",
            "description":"Old Man",
            "keywords":[
                "old",
                "man"
            ]
        },
        {
            "no":235,
            "code":"U+1F475",
            "emoji":"👵",
            "description":"Old Woman",
            "keywords":[
                "old",
                "woman"
            ]
        },
        {
            "no":236,
            "code":"U+1F64D",
            "emoji":"🙍",
            "description":"Person Frowning",
            "keywords":[
                "person",
                "frowning"
            ]
        },
        {
            "no":237,
            "code":"U+1F64D U+200D U+2642 U+FE0F",
            "emoji":"🙍‍♂️",
            "description":"Man Frowning",
            "keywords":[
                "man",
                "frowning"
            ]
        },
        {
            "no":238,
            "code":"U+1F64D U+200D U+2640 U+FE0F",
            "emoji":"🙍‍♀️",
            "description":"Woman Frowning",
            "keywords":[
                "woman",
                "frowning"
            ]
        },
        {
            "no":239,
            "code":"U+1F64E",
            "emoji":"🙎",
            "description":"Person Pouting",
            "keywords":[
                "person",
                "pouting"
            ]
        },
        {
            "no":240,
            "code":"U+1F64E U+200D U+2642 U+FE0F",
            "emoji":"🙎‍♂️",
            "description":"Man Pouting",
            "keywords":[
                "man",
                "pouting"
            ]
        },
        {
            "no":241,
            "code":"U+1F64E U+200D U+2640 U+FE0F",
            "emoji":"🙎‍♀️",
            "description":"Woman Pouting",
            "keywords":[
                "woman",
                "pouting"
            ]
        },
        {
            "no":242,
            "code":"U+1F645",
            "emoji":"🙅",
            "description":"Person Gesturing No",
            "keywords":[
                "person",
                "gesturing",
                "NO"
            ]
        },
        {
            "no":243,
            "code":"U+1F645 U+200D U+2642 U+FE0F",
            "emoji":"🙅‍♂️",
            "description":"Man Gesturing No",
            "keywords":[
                "man",
                "gesturing",
                "NO"
            ]
        },
        {
            "no":244,
            "code":"U+1F645 U+200D U+2640 U+FE0F",
            "emoji":"🙅‍♀️",
            "description":"Woman Gesturing No",
            "keywords":[
                "woman",
                "gesturing",
                "NO"
            ]
        },
        {
            "no":245,
            "code":"U+1F646",
            "emoji":"🙆",
            "description":"Person Gesturing Ok",
            "keywords":[
                "person",
                "gesturing",
                "OK"
            ]
        },
        {
            "no":246,
            "code":"U+1F646 U+200D U+2642 U+FE0F",
            "emoji":"🙆‍♂️",
            "description":"Man Gesturing Ok",
            "keywords":[
                "man",
                "gesturing",
                "OK"
            ]
        },
        {
            "no":247,
            "code":"U+1F646 U+200D U+2640 U+FE0F",
            "emoji":"🙆‍♀️",
            "description":"Woman Gesturing Ok",
            "keywords":[
                "woman",
                "gesturing",
                "OK"
            ]
        },
        {
            "no":248,
            "code":"U+1F481",
            "emoji":"💁",
            "description":"Person Tipping Hand",
            "keywords":[
                "person",
                "tipping",
                "hand"
            ]
        },
        {
            "no":249,
            "code":"U+1F481 U+200D U+2642 U+FE0F",
            "emoji":"💁‍♂️",
            "description":"Man Tipping Hand",
            "keywords":[
                "man",
                "tipping",
                "hand"
            ]
        },
        {
            "no":250,
            "code":"U+1F481 U+200D U+2640 U+FE0F",
            "emoji":"💁‍♀️",
            "description":"Woman Tipping Hand",
            "keywords":[
                "woman",
                "tipping",
                "hand"
            ]
        },
        {
            "no":251,
            "code":"U+1F64B",
            "emoji":"🙋",
            "description":"Person Raising Hand",
            "keywords":[
                "person",
                "raising",
                "hand"
            ]
        },
        {
            "no":252,
            "code":"U+1F64B U+200D U+2642 U+FE0F",
            "emoji":"🙋‍♂️",
            "description":"Man Raising Hand",
            "keywords":[
                "man",
                "raising",
                "hand"
            ]
        },
        {
            "no":253,
            "code":"U+1F64B U+200D U+2640 U+FE0F",
            "emoji":"🙋‍♀️",
            "description":"Woman Raising Hand",
            "keywords":[
                "woman",
                "raising",
                "hand"
            ]
        },
        {
            "no":254,
            "code":"U+1F9CF",
            "emoji":"🧏",
            "description":"Deaf Person",
            "keywords":[
                "deaf",
                "person"
            ]
        },
        {
            "no":255,
            "code":"U+1F9CF U+200D U+2642 U+FE0F",
            "emoji":"🧏‍♂️",
            "description":"Deaf Man",
            "keywords":[
                "deaf",
                "man"
            ]
        },
        {
            "no":256,
            "code":"U+1F9CF U+200D U+2640 U+FE0F",
            "emoji":"🧏‍♀️",
            "description":"Deaf Woman",
            "keywords":[
                "deaf",
                "woman"
            ]
        },
        {
            "no":257,
            "code":"U+1F647",
            "emoji":"🙇",
            "description":"Person Bowing",
            "keywords":[
                "person",
                "bowing"
            ]
        },
        {
            "no":258,
            "code":"U+1F647 U+200D U+2642 U+FE0F",
            "emoji":"🙇‍♂️",
            "description":"Man Bowing",
            "keywords":[
                "man",
                "bowing"
            ]
        },
        {
            "no":259,
            "code":"U+1F647 U+200D U+2640 U+FE0F",
            "emoji":"🙇‍♀️",
            "description":"Woman Bowing",
            "keywords":[
                "woman",
                "bowing"
            ]
        },
        {
            "no":260,
            "code":"U+1F926",
            "emoji":"🤦",
            "description":"Person Facepalming",
            "keywords":[
                "person",
                "facepalming"
            ]
        },
        {
            "no":261,
            "code":"U+1F926 U+200D U+2642 U+FE0F",
            "emoji":"🤦‍♂️",
            "description":"Man Facepalming",
            "keywords":[
                "man",
                "facepalming"
            ]
        },
        {
            "no":262,
            "code":"U+1F926 U+200D U+2640 U+FE0F",
            "emoji":"🤦‍♀️",
            "description":"Woman Facepalming",
            "keywords":[
                "woman",
                "facepalming"
            ]
        },
        {
            "no":263,
            "code":"U+1F937",
            "emoji":"🤷",
            "description":"Person Shrugging",
            "keywords":[
                "person",
                "shrugging"
            ]
        },
        {
            "no":264,
            "code":"U+1F937 U+200D U+2642 U+FE0F",
            "emoji":"🤷‍♂️",
            "description":"Man Shrugging",
            "keywords":[
                "man",
                "shrugging"
            ]
        },
        {
            "no":265,
            "code":"U+1F937 U+200D U+2640 U+FE0F",
            "emoji":"🤷‍♀️",
            "description":"Woman Shrugging",
            "keywords":[
                "woman",
                "shrugging"
            ]
        },
        {
            "no":266,
            "code":"U+1F9D1 U+200D U+2695 U+FE0F",
            "emoji":"🧑‍⚕️",
            "description":"Health Worker",
            "keywords":[
                "health",
                "worker"
            ]
        },
        {
            "no":267,
            "code":"U+1F468 U+200D U+2695 U+FE0F",
            "emoji":"👨‍⚕️",
            "description":"Man Health Worker",
            "keywords":[
                "man",
                "health",
                "worker"
            ]
        },
        {
            "no":268,
            "code":"U+1F469 U+200D U+2695 U+FE0F",
            "emoji":"👩‍⚕️",
            "description":"Woman Health Worker",
            "keywords":[
                "woman",
                "health",
                "worker"
            ]
        },
        {
            "no":269,
            "code":"U+1F9D1 U+200D U+1F393",
            "emoji":"🧑‍🎓",
            "description":"Student",
            "keywords":[
                "student"
            ]
        },
        {
            "no":270,
            "code":"U+1F468 U+200D U+1F393",
            "emoji":"👨‍🎓",
            "description":"Man Student",
            "keywords":[
                "man",
                "student"
            ]
        },
        {
            "no":271,
            "code":"U+1F469 U+200D U+1F393",
            "emoji":"👩‍🎓",
            "description":"Woman Student",
            "keywords":[
                "woman",
                "student"
            ]
        },
        {
            "no":272,
            "code":"U+1F9D1 U+200D U+1F3EB",
            "emoji":"🧑‍🏫",
            "description":"Teacher",
            "keywords":[
                "teacher"
            ]
        },
        {
            "no":273,
            "code":"U+1F468 U+200D U+1F3EB",
            "emoji":"👨‍🏫",
            "description":"Man Teacher",
            "keywords":[
                "man",
                "teacher"
            ]
        },
        {
            "no":274,
            "code":"U+1F469 U+200D U+1F3EB",
            "emoji":"👩‍🏫",
            "description":"Woman Teacher",
            "keywords":[
                "woman",
                "teacher"
            ]
        },
        {
            "no":275,
            "code":"U+1F9D1 U+200D U+2696 U+FE0F",
            "emoji":"🧑‍⚖️",
            "description":"Judge",
            "keywords":[
                "judge"
            ]
        },
        {
            "no":276,
            "code":"U+1F468 U+200D U+2696 U+FE0F",
            "emoji":"👨‍⚖️",
            "description":"Man Judge",
            "keywords":[
                "man",
                "judge"
            ]
        },
        {
            "no":277,
            "code":"U+1F469 U+200D U+2696 U+FE0F",
            "emoji":"👩‍⚖️",
            "description":"Woman Judge",
            "keywords":[
                "woman",
                "judge"
            ]
        },
        {
            "no":278,
            "code":"U+1F9D1 U+200D U+1F33E",
            "emoji":"🧑‍🌾",
            "description":"Farmer",
            "keywords":[
                "farmer"
            ]
        },
        {
            "no":279,
            "code":"U+1F468 U+200D U+1F33E",
            "emoji":"👨‍🌾",
            "description":"Man Farmer",
            "keywords":[
                "man",
                "farmer"
            ]
        },
        {
            "no":280,
            "code":"U+1F469 U+200D U+1F33E",
            "emoji":"👩‍🌾",
            "description":"Woman Farmer",
            "keywords":[
                "woman",
                "farmer"
            ]
        },
        {
            "no":281,
            "code":"U+1F9D1 U+200D U+1F373",
            "emoji":"🧑‍🍳",
            "description":"Cook",
            "keywords":[
                "cook"
            ]
        },
        {
            "no":282,
            "code":"U+1F468 U+200D U+1F373",
            "emoji":"👨‍🍳",
            "description":"Man Cook",
            "keywords":[
                "man",
                "cook"
            ]
        },
        {
            "no":283,
            "code":"U+1F469 U+200D U+1F373",
            "emoji":"👩‍🍳",
            "description":"Woman Cook",
            "keywords":[
                "woman",
                "cook"
            ]
        },
        {
            "no":284,
            "code":"U+1F9D1 U+200D U+1F527",
            "emoji":"🧑‍🔧",
            "description":"Mechanic",
            "keywords":[
                "mechanic"
            ]
        },
        {
            "no":285,
            "code":"U+1F468 U+200D U+1F527",
            "emoji":"👨‍🔧",
            "description":"Man Mechanic",
            "keywords":[
                "man",
                "mechanic"
            ]
        },
        {
            "no":286,
            "code":"U+1F469 U+200D U+1F527",
            "emoji":"👩‍🔧",
            "description":"Woman Mechanic",
            "keywords":[
                "woman",
                "mechanic"
            ]
        },
        {
            "no":287,
            "code":"U+1F9D1 U+200D U+1F3ED",
            "emoji":"🧑‍🏭",
            "description":"Factory Worker",
            "keywords":[
                "factory",
                "worker"
            ]
        },
        {
            "no":288,
            "code":"U+1F468 U+200D U+1F3ED",
            "emoji":"👨‍🏭",
            "description":"Man Factory Worker",
            "keywords":[
                "man",
                "factory",
                "worker"
            ]
        },
        {
            "no":289,
            "code":"U+1F469 U+200D U+1F3ED",
            "emoji":"👩‍🏭",
            "description":"Woman Factory Worker",
            "keywords":[
                "woman",
                "factory",
                "worker"
            ]
        },
        {
            "no":290,
            "code":"U+1F9D1 U+200D U+1F4BC",
            "emoji":"🧑‍💼",
            "description":"Office Worker",
            "keywords":[
                "office",
                "worker"
            ]
        },
        {
            "no":291,
            "code":"U+1F468 U+200D U+1F4BC",
            "emoji":"👨‍💼",
            "description":"Man Office Worker",
            "keywords":[
                "man",
                "office",
                "worker"
            ]
        },
        {
            "no":292,
            "code":"U+1F469 U+200D U+1F4BC",
            "emoji":"👩‍💼",
            "description":"Woman Office Worker",
            "keywords":[
                "woman",
                "office",
                "worker"
            ]
        },
        {
            "no":293,
            "code":"U+1F9D1 U+200D U+1F52C",
            "emoji":"🧑‍🔬",
            "description":"Scientist",
            "keywords":[
                "scientist"
            ]
        },
        {
            "no":294,
            "code":"U+1F468 U+200D U+1F52C",
            "emoji":"👨‍🔬",
            "description":"Man Scientist",
            "keywords":[
                "man",
                "scientist"
            ]
        },
        {
            "no":295,
            "code":"U+1F469 U+200D U+1F52C",
            "emoji":"👩‍🔬",
            "description":"Woman Scientist",
            "keywords":[
                "woman",
                "scientist"
            ]
        },
        {
            "no":296,
            "code":"U+1F9D1 U+200D U+1F4BB",
            "emoji":"🧑‍💻",
            "description":"Technologist",
            "keywords":[
                "technologist"
            ]
        },
        {
            "no":297,
            "code":"U+1F468 U+200D U+1F4BB",
            "emoji":"👨‍💻",
            "description":"Man Technologist",
            "keywords":[
                "man",
                "technologist"
            ]
        },
        {
            "no":298,
            "code":"U+1F469 U+200D U+1F4BB",
            "emoji":"👩‍💻",
            "description":"Woman Technologist",
            "keywords":[
                "woman",
                "technologist"
            ]
        },
        {
            "no":299,
            "code":"U+1F9D1 U+200D U+1F3A4",
            "emoji":"🧑‍🎤",
            "description":"Singer",
            "keywords":[
                "singer"
            ]
        },
        {
            "no":300,
            "code":"U+1F468 U+200D U+1F3A4",
            "emoji":"👨‍🎤",
            "description":"Man Singer",
            "keywords":[
                "man",
                "singer"
            ]
        },
        {
            "no":301,
            "code":"U+1F469 U+200D U+1F3A4",
            "emoji":"👩‍🎤",
            "description":"Woman Singer",
            "keywords":[
                "woman",
                "singer"
            ]
        },
        {
            "no":302,
            "code":"U+1F9D1 U+200D U+1F3A8",
            "emoji":"🧑‍🎨",
            "description":"Artist",
            "keywords":[
                "artist"
            ]
        },
        {
            "no":303,
            "code":"U+1F468 U+200D U+1F3A8",
            "emoji":"👨‍🎨",
            "description":"Man Artist",
            "keywords":[
                "man",
                "artist"
            ]
        },
        {
            "no":304,
            "code":"U+1F469 U+200D U+1F3A8",
            "emoji":"👩‍🎨",
            "description":"Woman Artist",
            "keywords":[
                "woman",
                "artist"
            ]
        },
        {
            "no":305,
            "code":"U+1F9D1 U+200D U+2708 U+FE0F",
            "emoji":"🧑‍✈️",
            "description":"Pilot",
            "keywords":[
                "pilot"
            ]
        },
        {
            "no":306,
            "code":"U+1F468 U+200D U+2708 U+FE0F",
            "emoji":"👨‍✈️",
            "description":"Man Pilot",
            "keywords":[
                "man",
                "pilot"
            ]
        },
        {
            "no":307,
            "code":"U+1F469 U+200D U+2708 U+FE0F",
            "emoji":"👩‍✈️",
            "description":"Woman Pilot",
            "keywords":[
                "woman",
                "pilot"
            ]
        },
        {
            "no":308,
            "code":"U+1F9D1 U+200D U+1F680",
            "emoji":"🧑‍🚀",
            "description":"Astronaut",
            "keywords":[
                "astronaut"
            ]
        },
        {
            "no":309,
            "code":"U+1F468 U+200D U+1F680",
            "emoji":"👨‍🚀",
            "description":"Man Astronaut",
            "keywords":[
                "man",
                "astronaut"
            ]
        },
        {
            "no":310,
            "code":"U+1F469 U+200D U+1F680",
            "emoji":"👩‍🚀",
            "description":"Woman Astronaut",
            "keywords":[
                "woman",
                "astronaut"
            ]
        },
        {
            "no":311,
            "code":"U+1F9D1 U+200D U+1F692",
            "emoji":"🧑‍🚒",
            "description":"Firefighter",
            "keywords":[
                "firefighter"
            ]
        },
        {
            "no":312,
            "code":"U+1F468 U+200D U+1F692",
            "emoji":"👨‍🚒",
            "description":"Man Firefighter",
            "keywords":[
                "man",
                "firefighter"
            ]
        },
        {
            "no":313,
            "code":"U+1F469 U+200D U+1F692",
            "emoji":"👩‍🚒",
            "description":"Woman Firefighter",
            "keywords":[
                "woman",
                "firefighter"
            ]
        },
        {
            "no":314,
            "code":"U+1F46E",
            "emoji":"👮",
            "description":"Police Officer",
            "keywords":[
                "police",
                "officer"
            ]
        },
        {
            "no":315,
            "code":"U+1F46E U+200D U+2642 U+FE0F",
            "emoji":"👮‍♂️",
            "description":"Man Police Officer",
            "keywords":[
                "man",
                "police",
                "officer"
            ]
        },
        {
            "no":316,
            "code":"U+1F46E U+200D U+2640 U+FE0F",
            "emoji":"👮‍♀️",
            "description":"Woman Police Officer",
            "keywords":[
                "woman",
                "police",
                "officer"
            ]
        },
        {
            "no":317,
            "code":"U+1F575",
            "emoji":"🕵",
            "description":"Detective",
            "keywords":[
                "detective"
            ]
        },
        {
            "no":318,
            "code":"U+1F575 U+FE0F U+200D U+2642 U+FE0F",
            "emoji":"🕵️‍♂️",
            "description":"Man Detective",
            "keywords":[
                "man",
                "detective"
            ]
        },
        {
            "no":319,
            "code":"U+1F575 U+FE0F U+200D U+2640 U+FE0F",
            "emoji":"🕵️‍♀️",
            "description":"Woman Detective",
            "keywords":[
                "woman",
                "detective"
            ]
        },
        {
            "no":320,
            "code":"U+1F482",
            "emoji":"💂",
            "description":"Guard",
            "keywords":[
                "guard"
            ]
        },
        {
            "no":321,
            "code":"U+1F482 U+200D U+2642 U+FE0F",
            "emoji":"💂‍♂️",
            "description":"Man Guard",
            "keywords":[
                "man",
                "guard"
            ]
        },
        {
            "no":322,
            "code":"U+1F482 U+200D U+2640 U+FE0F",
            "emoji":"💂‍♀️",
            "description":"Woman Guard",
            "keywords":[
                "woman",
                "guard"
            ]
        },
        // {
        //     "no":323,
        //     "code":"U+1F977",
        //     "emoji":"🥷",
        //     "description":"Ninja",
        //     "keywords":[
        //         "ninja"
        //     ]
        // },
        {
            "no":324,
            "code":"U+1F477",
            "emoji":"👷",
            "description":"Construction Worker",
            "keywords":[
                "construction",
                "worker"
            ]
        },
        {
            "no":325,
            "code":"U+1F477 U+200D U+2642 U+FE0F",
            "emoji":"👷‍♂️",
            "description":"Man Construction Worker",
            "keywords":[
                "man",
                "construction",
                "worker"
            ]
        },
        {
            "no":326,
            "code":"U+1F477 U+200D U+2640 U+FE0F",
            "emoji":"👷‍♀️",
            "description":"Woman Construction Worker",
            "keywords":[
                "woman",
                "construction",
                "worker"
            ]
        },
        {
            "no":327,
            "code":"U+1F934",
            "emoji":"🤴",
            "description":"Prince",
            "keywords":[
                "prince"
            ]
        },
        {
            "no":328,
            "code":"U+1F478",
            "emoji":"👸",
            "description":"Princess",
            "keywords":[
                "princess"
            ]
        },
        {
            "no":329,
            "code":"U+1F473",
            "emoji":"👳",
            "description":"Person Wearing Turban",
            "keywords":[
                "person",
                "wearing",
                "turban"
            ]
        },
        {
            "no":330,
            "code":"U+1F473 U+200D U+2642 U+FE0F",
            "emoji":"👳‍♂️",
            "description":"Man Wearing Turban",
            "keywords":[
                "man",
                "wearing",
                "turban"
            ]
        },
        {
            "no":331,
            "code":"U+1F473 U+200D U+2640 U+FE0F",
            "emoji":"👳‍♀️",
            "description":"Woman Wearing Turban",
            "keywords":[
                "woman",
                "wearing",
                "turban"
            ]
        },
        {
            "no":332,
            "code":"U+1F472",
            "emoji":"👲",
            "description":"Person With Skullcap",
            "keywords":[
                "person",
                "skullcap"
            ]
        },
        {
            "no":333,
            "code":"U+1F9D5",
            "emoji":"🧕",
            "description":"Woman With Headscarf",
            "keywords":[
                "woman",
                "headscarf"
            ]
        },
        {
            "no":334,
            "code":"U+1F935",
            "emoji":"🤵",
            "description":"Person In Tuxedo",
            "keywords":[
                "person",
                "tuxedo"
            ]
        },
        {
            "no":335,
            "code":"U+1F935 U+200D U+2642 U+FE0F",
            "emoji":"🤵‍♂️",
            "description":"Man In Tuxedo",
            "keywords":[
                "man",
                "tuxedo"
            ]
        },
        {
            "no":336,
            "code":"U+1F935 U+200D U+2640 U+FE0F",
            "emoji":"🤵‍♀️",
            "description":"Woman In Tuxedo",
            "keywords":[
                "woman",
                "tuxedo"
            ]
        },
        {
            "no":337,
            "code":"U+1F470",
            "emoji":"👰",
            "description":"Person With Veil",
            "keywords":[
                "person",
                "veil"
            ]
        },
        {
            "no":338,
            "code":"U+1F470 U+200D U+2642 U+FE0F",
            "emoji":"👰‍♂️",
            "description":"Man With Veil",
            "keywords":[
                "man",
                "veil"
            ]
        },
        {
            "no":339,
            "code":"U+1F470 U+200D U+2640 U+FE0F",
            "emoji":"👰‍♀️",
            "description":"Woman With Veil",
            "keywords":[
                "woman",
                "veil"
            ]
        },
        {
            "no":340,
            "code":"U+1F930",
            "emoji":"🤰",
            "description":"Pregnant Woman",
            "keywords":[
                "pregnant",
                "woman"
            ]
        },
        {
            "no":341,
            "code":"U+1F931",
            "emoji":"🤱",
            "description":"Breast-Feeding",
            "keywords":[
                "breast-feeding"
            ]
        },
        {
            "no":342,
            "code":"U+1F469 U+200D U+1F37C",
            "emoji":"👩‍🍼",
            "description":"Woman Feeding Baby",
            "keywords":[
                "woman",
                "feeding",
                "baby"
            ]
        },
        {
            "no":343,
            "code":"U+1F468 U+200D U+1F37C",
            "emoji":"👨‍🍼",
            "description":"Man Feeding Baby",
            "keywords":[
                "man",
                "feeding",
                "baby"
            ]
        },
        {
            "no":344,
            "code":"U+1F9D1 U+200D U+1F37C",
            "emoji":"🧑‍🍼",
            "description":"Person Feeding Baby",
            "keywords":[
                "person",
                "feeding",
                "baby"
            ]
        },
        {
            "no":345,
            "code":"U+1F47C",
            "emoji":"👼",
            "description":"Baby Angel",
            "keywords":[
                "baby",
                "angel"
            ]
        },
        {
            "no":346,
            "code":"U+1F385",
            "emoji":"🎅",
            "description":"Santa Claus",
            "keywords":[
                "Santa",
                "Claus"
            ]
        },
        {
            "no":347,
            "code":"U+1F936",
            "emoji":"🤶",
            "description":"Mrs. Claus",
            "keywords":[
                "Mrs",
                "Claus"
            ]
        },
        {
            "no":348,
            "code":"U+1F9D1 U+200D U+1F384",
            "emoji":"🧑‍🎄",
            "description":"Mx Claus",
            "keywords":[
                "mx",
                "claus"
            ]
        },
        {
            "no":349,
            "code":"U+1F9B8",
            "emoji":"🦸",
            "description":"Superhero",
            "keywords":[
                "superhero"
            ]
        },
        {
            "no":350,
            "code":"U+1F9B8 U+200D U+2642 U+FE0F",
            "emoji":"🦸‍♂️",
            "description":"Man Superhero",
            "keywords":[
                "man",
                "superhero"
            ]
        },
        {
            "no":351,
            "code":"U+1F9B8 U+200D U+2640 U+FE0F",
            "emoji":"🦸‍♀️",
            "description":"Woman Superhero",
            "keywords":[
                "woman",
                "superhero"
            ]
        },
        {
            "no":352,
            "code":"U+1F9B9",
            "emoji":"🦹",
            "description":"Supervillain",
            "keywords":[
                "supervillain"
            ]
        },
        {
            "no":353,
            "code":"U+1F9B9 U+200D U+2642 U+FE0F",
            "emoji":"🦹‍♂️",
            "description":"Man Supervillain",
            "keywords":[
                "man",
                "supervillain"
            ]
        },
        {
            "no":354,
            "code":"U+1F9B9 U+200D U+2640 U+FE0F",
            "emoji":"🦹‍♀️",
            "description":"Woman Supervillain",
            "keywords":[
                "woman",
                "supervillain"
            ]
        },
        {
            "no":355,
            "code":"U+1F9D9",
            "emoji":"🧙",
            "description":"Mage",
            "keywords":[
                "mage"
            ]
        },
        {
            "no":356,
            "code":"U+1F9D9 U+200D U+2642 U+FE0F",
            "emoji":"🧙‍♂️",
            "description":"Man Mage",
            "keywords":[
                "man",
                "mage"
            ]
        },
        {
            "no":357,
            "code":"U+1F9D9 U+200D U+2640 U+FE0F",
            "emoji":"🧙‍♀️",
            "description":"Woman Mage",
            "keywords":[
                "woman",
                "mage"
            ]
        },
        {
            "no":358,
            "code":"U+1F9DA",
            "emoji":"🧚",
            "description":"Fairy",
            "keywords":[
                "fairy"
            ]
        },
        {
            "no":359,
            "code":"U+1F9DA U+200D U+2642 U+FE0F",
            "emoji":"🧚‍♂️",
            "description":"Man Fairy",
            "keywords":[
                "man",
                "fairy"
            ]
        },
        {
            "no":360,
            "code":"U+1F9DA U+200D U+2640 U+FE0F",
            "emoji":"🧚‍♀️",
            "description":"Woman Fairy",
            "keywords":[
                "woman",
                "fairy"
            ]
        },
        {
            "no":361,
            "code":"U+1F9DB",
            "emoji":"🧛",
            "description":"Vampire",
            "keywords":[
                "vampire"
            ]
        },
        {
            "no":362,
            "code":"U+1F9DB U+200D U+2642 U+FE0F",
            "emoji":"🧛‍♂️",
            "description":"Man Vampire",
            "keywords":[
                "man",
                "vampire"
            ]
        },
        {
            "no":363,
            "code":"U+1F9DB U+200D U+2640 U+FE0F",
            "emoji":"🧛‍♀️",
            "description":"Woman Vampire",
            "keywords":[
                "woman",
                "vampire"
            ]
        },
        {
            "no":364,
            "code":"U+1F9DC",
            "emoji":"🧜",
            "description":"Merperson",
            "keywords":[
                "merperson"
            ]
        },
        {
            "no":365,
            "code":"U+1F9DC U+200D U+2642 U+FE0F",
            "emoji":"🧜‍♂️",
            "description":"Merman",
            "keywords":[
                "merman"
            ]
        },
        {
            "no":366,
            "code":"U+1F9DC U+200D U+2640 U+FE0F",
            "emoji":"🧜‍♀️",
            "description":"Mermaid",
            "keywords":[
                "mermaid"
            ]
        },
        {
            "no":367,
            "code":"U+1F9DD",
            "emoji":"🧝",
            "description":"Elf",
            "keywords":[
                "elf"
            ]
        },
        {
            "no":368,
            "code":"U+1F9DD U+200D U+2642 U+FE0F",
            "emoji":"🧝‍♂️",
            "description":"Man Elf",
            "keywords":[
                "man",
                "elf"
            ]
        },
        {
            "no":369,
            "code":"U+1F9DD U+200D U+2640 U+FE0F",
            "emoji":"🧝‍♀️",
            "description":"Woman Elf",
            "keywords":[
                "woman",
                "elf"
            ]
        },
        {
            "no":370,
            "code":"U+1F9DE",
            "emoji":"🧞",
            "description":"Genie",
            "keywords":[
                "genie"
            ]
        },
        {
            "no":371,
            "code":"U+1F9DE U+200D U+2642 U+FE0F",
            "emoji":"🧞‍♂️",
            "description":"Man Genie",
            "keywords":[
                "man",
                "genie"
            ]
        },
        {
            "no":372,
            "code":"U+1F9DE U+200D U+2640 U+FE0F",
            "emoji":"🧞‍♀️",
            "description":"Woman Genie",
            "keywords":[
                "woman",
                "genie"
            ]
        },
        {
            "no":373,
            "code":"U+1F9DF",
            "emoji":"🧟",
            "description":"Zombie",
            "keywords":[
                "zombie"
            ]
        },
        {
            "no":374,
            "code":"U+1F9DF U+200D U+2642 U+FE0F",
            "emoji":"🧟‍♂️",
            "description":"Man Zombie",
            "keywords":[
                "man",
                "zombie"
            ]
        },
        {
            "no":375,
            "code":"U+1F9DF U+200D U+2640 U+FE0F",
            "emoji":"🧟‍♀️",
            "description":"Woman Zombie",
            "keywords":[
                "woman",
                "zombie"
            ]
        },
        {
            "no":376,
            "code":"U+1F486",
            "emoji":"💆",
            "description":"Person Getting Massage",
            "keywords":[
                "person",
                "getting",
                "massage"
            ]
        },
        {
            "no":377,
            "code":"U+1F486 U+200D U+2642 U+FE0F",
            "emoji":"💆‍♂️",
            "description":"Man Getting Massage",
            "keywords":[
                "man",
                "getting",
                "massage"
            ]
        },
        {
            "no":378,
            "code":"U+1F486 U+200D U+2640 U+FE0F",
            "emoji":"💆‍♀️",
            "description":"Woman Getting Massage",
            "keywords":[
                "woman",
                "getting",
                "massage"
            ]
        },
        {
            "no":379,
            "code":"U+1F487",
            "emoji":"💇",
            "description":"Person Getting Haircut",
            "keywords":[
                "person",
                "getting",
                "haircut"
            ]
        },
        {
            "no":380,
            "code":"U+1F487 U+200D U+2642 U+FE0F",
            "emoji":"💇‍♂️",
            "description":"Man Getting Haircut",
            "keywords":[
                "man",
                "getting",
                "haircut"
            ]
        },
        {
            "no":381,
            "code":"U+1F487 U+200D U+2640 U+FE0F",
            "emoji":"💇‍♀️",
            "description":"Woman Getting Haircut",
            "keywords":[
                "woman",
                "getting",
                "haircut"
            ]
        },
        {
            "no":382,
            "code":"U+1F6B6",
            "emoji":"🚶",
            "description":"Person Walking",
            "keywords":[
                "person",
                "walking"
            ]
        },
        {
            "no":383,
            "code":"U+1F6B6 U+200D U+2642 U+FE0F",
            "emoji":"🚶‍♂️",
            "description":"Man Walking",
            "keywords":[
                "man",
                "walking"
            ]
        },
        {
            "no":384,
            "code":"U+1F6B6 U+200D U+2640 U+FE0F",
            "emoji":"🚶‍♀️",
            "description":"Woman Walking",
            "keywords":[
                "woman",
                "walking"
            ]
        },
        {
            "no":385,
            "code":"U+1F9CD",
            "emoji":"🧍",
            "description":"Person Standing",
            "keywords":[
                "person",
                "standing"
            ]
        },
        {
            "no":386,
            "code":"U+1F9CD U+200D U+2642 U+FE0F",
            "emoji":"🧍‍♂️",
            "description":"Man Standing",
            "keywords":[
                "man",
                "standing"
            ]
        },
        {
            "no":387,
            "code":"U+1F9CD U+200D U+2640 U+FE0F",
            "emoji":"🧍‍♀️",
            "description":"Woman Standing",
            "keywords":[
                "woman",
                "standing"
            ]
        },
        {
            "no":388,
            "code":"U+1F9CE",
            "emoji":"🧎",
            "description":"Person Kneeling",
            "keywords":[
                "person",
                "kneeling"
            ]
        },
        {
            "no":389,
            "code":"U+1F9CE U+200D U+2642 U+FE0F",
            "emoji":"🧎‍♂️",
            "description":"Man Kneeling",
            "keywords":[
                "man",
                "kneeling"
            ]
        },
        {
            "no":390,
            "code":"U+1F9CE U+200D U+2640 U+FE0F",
            "emoji":"🧎‍♀️",
            "description":"Woman Kneeling",
            "keywords":[
                "woman",
                "kneeling"
            ]
        },
        {
            "no":391,
            "code":"U+1F9D1 U+200D U+1F9AF",
            "emoji":"🧑‍🦯",
            "description":"Person With White Cane",
            "keywords":[
                "person",
                "white",
                "cane"
            ]
        },
        {
            "no":392,
            "code":"U+1F468 U+200D U+1F9AF",
            "emoji":"👨‍🦯",
            "description":"Man With White Cane",
            "keywords":[
                "man",
                "white",
                "cane"
            ]
        },
        {
            "no":393,
            "code":"U+1F469 U+200D U+1F9AF",
            "emoji":"👩‍🦯",
            "description":"Woman With White Cane",
            "keywords":[
                "woman",
                "white",
                "cane"
            ]
        },
        {
            "no":394,
            "code":"U+1F9D1 U+200D U+1F9BC",
            "emoji":"🧑‍🦼",
            "description":"Person In Motorized Wheelchair",
            "keywords":[
                "person",
                "motorized",
                "wheelchair"
            ]
        },
        {
            "no":395,
            "code":"U+1F468 U+200D U+1F9BC",
            "emoji":"👨‍🦼",
            "description":"Man In Motorized Wheelchair",
            "keywords":[
                "man",
                "motorized",
                "wheelchair"
            ]
        },
        {
            "no":396,
            "code":"U+1F469 U+200D U+1F9BC",
            "emoji":"👩‍🦼",
            "description":"Woman In Motorized Wheelchair",
            "keywords":[
                "woman",
                "motorized",
                "wheelchair"
            ]
        },
        {
            "no":397,
            "code":"U+1F9D1 U+200D U+1F9BD",
            "emoji":"🧑‍🦽",
            "description":"Person In Manual Wheelchair",
            "keywords":[
                "person",
                "manual",
                "wheelchair"
            ]
        },
        {
            "no":398,
            "code":"U+1F468 U+200D U+1F9BD",
            "emoji":"👨‍🦽",
            "description":"Man In Manual Wheelchair",
            "keywords":[
                "man",
                "manual",
                "wheelchair"
            ]
        },
        {
            "no":399,
            "code":"U+1F469 U+200D U+1F9BD",
            "emoji":"👩‍🦽",
            "description":"Woman In Manual Wheelchair",
            "keywords":[
                "woman",
                "manual",
                "wheelchair"
            ]
        },
        {
            "no":400,
            "code":"U+1F3C3",
            "emoji":"🏃",
            "description":"Person Running",
            "keywords":[
                "person",
                "running"
            ]
        },
        {
            "no":401,
            "code":"U+1F3C3 U+200D U+2642 U+FE0F",
            "emoji":"🏃‍♂️",
            "description":"Man Running",
            "keywords":[
                "man",
                "running"
            ]
        },
        {
            "no":402,
            "code":"U+1F3C3 U+200D U+2640 U+FE0F",
            "emoji":"🏃‍♀️",
            "description":"Woman Running",
            "keywords":[
                "woman",
                "running"
            ]
        },
        {
            "no":403,
            "code":"U+1F483",
            "emoji":"💃",
            "description":"Woman Dancing",
            "keywords":[
                "woman",
                "dancing"
            ]
        },
        {
            "no":404,
            "code":"U+1F57A",
            "emoji":"🕺",
            "description":"Man Dancing",
            "keywords":[
                "man",
                "dancing"
            ]
        },
        {
            "no":405,
            "code":"U+1F574",
            "emoji":"🕴",
            "description":"Person In Suit Levitating",
            "keywords":[
                "person",
                "suit",
                "levitating"
            ]
        },
        {
            "no":406,
            "code":"U+1F46F",
            "emoji":"👯",
            "description":"People With Bunny Ears",
            "keywords":[
                "people",
                "bunny",
                "ears"
            ]
        },
        {
            "no":407,
            "code":"U+1F46F U+200D U+2642 U+FE0F",
            "emoji":"👯‍♂️",
            "description":"Men With Bunny Ears",
            "keywords":[
                "men",
                "bunny",
                "ears"
            ]
        },
        {
            "no":408,
            "code":"U+1F46F U+200D U+2640 U+FE0F",
            "emoji":"👯‍♀️",
            "description":"Women With Bunny Ears",
            "keywords":[
                "women",
                "bunny",
                "ears"
            ]
        },
        {
            "no":409,
            "code":"U+1F9D6",
            "emoji":"🧖",
            "description":"Person In Steamy Room",
            "keywords":[
                "person",
                "steamy",
                "room"
            ]
        },
        {
            "no":410,
            "code":"U+1F9D6 U+200D U+2642 U+FE0F",
            "emoji":"🧖‍♂️",
            "description":"Man In Steamy Room",
            "keywords":[
                "man",
                "steamy",
                "room"
            ]
        },
        {
            "no":411,
            "code":"U+1F9D6 U+200D U+2640 U+FE0F",
            "emoji":"🧖‍♀️",
            "description":"Woman In Steamy Room",
            "keywords":[
                "woman",
                "steamy",
                "room"
            ]
        },
        {
            "no":412,
            "code":"U+1F9D7",
            "emoji":"🧗",
            "description":"Person Climbing",
            "keywords":[
                "person",
                "climbing"
            ]
        },
        {
            "no":413,
            "code":"U+1F9D7 U+200D U+2642 U+FE0F",
            "emoji":"🧗‍♂️",
            "description":"Man Climbing",
            "keywords":[
                "man",
                "climbing"
            ]
        },
        {
            "no":414,
            "code":"U+1F9D7 U+200D U+2640 U+FE0F",
            "emoji":"🧗‍♀️",
            "description":"Woman Climbing",
            "keywords":[
                "woman",
                "climbing"
            ]
        },
        {
            "no":415,
            "code":"U+1F93A",
            "emoji":"🤺",
            "description":"Person Fencing",
            "keywords":[
                "person",
                "fencing"
            ]
        },
        {
            "no":416,
            "code":"U+1F3C7",
            "emoji":"🏇",
            "description":"Horse Racing",
            "keywords":[
                "horse",
                "racing"
            ]
        },
        {
            "no":417,
            "code":"U+26F7",
            "emoji":"⛷",
            "description":"Skier",
            "keywords":[
                "skier"
            ]
        },
        {
            "no":418,
            "code":"U+1F3C2",
            "emoji":"🏂",
            "description":"Snowboarder",
            "keywords":[
                "snowboarder"
            ]
        },
        {
            "no":419,
            "code":"U+1F3CC",
            "emoji":"🏌",
            "description":"Person Golfing",
            "keywords":[
                "person",
                "golfing"
            ]
        },
        {
            "no":420,
            "code":"U+1F3CC U+FE0F U+200D U+2642 U+FE0F",
            "emoji":"🏌️‍♂️",
            "description":"Man Golfing",
            "keywords":[
                "man",
                "golfing"
            ]
        },
        {
            "no":421,
            "code":"U+1F3CC U+FE0F U+200D U+2640 U+FE0F",
            "emoji":"🏌️‍♀️",
            "description":"Woman Golfing",
            "keywords":[
                "woman",
                "golfing"
            ]
        },
        {
            "no":422,
            "code":"U+1F3C4",
            "emoji":"🏄",
            "description":"Person Surfing",
            "keywords":[
                "person",
                "surfing"
            ]
        },
        {
            "no":423,
            "code":"U+1F3C4 U+200D U+2642 U+FE0F",
            "emoji":"🏄‍♂️",
            "description":"Man Surfing",
            "keywords":[
                "man",
                "surfing"
            ]
        },
        {
            "no":424,
            "code":"U+1F3C4 U+200D U+2640 U+FE0F",
            "emoji":"🏄‍♀️",
            "description":"Woman Surfing",
            "keywords":[
                "woman",
                "surfing"
            ]
        },
        {
            "no":425,
            "code":"U+1F6A3",
            "emoji":"🚣",
            "description":"Person Rowing Boat",
            "keywords":[
                "person",
                "rowing",
                "boat"
            ]
        },
        {
            "no":426,
            "code":"U+1F6A3 U+200D U+2642 U+FE0F",
            "emoji":"🚣‍♂️",
            "description":"Man Rowing Boat",
            "keywords":[
                "man",
                "rowing",
                "boat"
            ]
        },
        {
            "no":427,
            "code":"U+1F6A3 U+200D U+2640 U+FE0F",
            "emoji":"🚣‍♀️",
            "description":"Woman Rowing Boat",
            "keywords":[
                "woman",
                "rowing",
                "boat"
            ]
        },
        {
            "no":428,
            "code":"U+1F3CA",
            "emoji":"🏊",
            "description":"Person Swimming",
            "keywords":[
                "person",
                "swimming"
            ]
        },
        {
            "no":429,
            "code":"U+1F3CA U+200D U+2642 U+FE0F",
            "emoji":"🏊‍♂️",
            "description":"Man Swimming",
            "keywords":[
                "man",
                "swimming"
            ]
        },
        {
            "no":430,
            "code":"U+1F3CA U+200D U+2640 U+FE0F",
            "emoji":"🏊‍♀️",
            "description":"Woman Swimming",
            "keywords":[
                "woman",
                "swimming"
            ]
        },
        {
            "no":431,
            "code":"U+26F9",
            "emoji":"⛹",
            "description":"Person Bouncing Ball",
            "keywords":[
                "person",
                "bouncing",
                "ball"
            ]
        },
        {
            "no":432,
            "code":"U+26F9 U+FE0F U+200D U+2642 U+FE0F",
            "emoji":"⛹️‍♂️",
            "description":"Man Bouncing Ball",
            "keywords":[
                "man",
                "bouncing",
                "ball"
            ]
        },
        {
            "no":433,
            "code":"U+26F9 U+FE0F U+200D U+2640 U+FE0F",
            "emoji":"⛹️‍♀️",
            "description":"Woman Bouncing Ball",
            "keywords":[
                "woman",
                "bouncing",
                "ball"
            ]
        },
        {
            "no":434,
            "code":"U+1F3CB",
            "emoji":"🏋",
            "description":"Person Lifting Weights",
            "keywords":[
                "person",
                "lifting",
                "weights"
            ]
        },
        {
            "no":435,
            "code":"U+1F3CB U+FE0F U+200D U+2642 U+FE0F",
            "emoji":"🏋️‍♂️",
            "description":"Man Lifting Weights",
            "keywords":[
                "man",
                "lifting",
                "weights"
            ]
        },
        {
            "no":436,
            "code":"U+1F3CB U+FE0F U+200D U+2640 U+FE0F",
            "emoji":"🏋️‍♀️",
            "description":"Woman Lifting Weights",
            "keywords":[
                "woman",
                "lifting",
                "weights"
            ]
        },
        {
            "no":437,
            "code":"U+1F6B4",
            "emoji":"🚴",
            "description":"Person Biking",
            "keywords":[
                "person",
                "biking"
            ]
        },
        {
            "no":438,
            "code":"U+1F6B4 U+200D U+2642 U+FE0F",
            "emoji":"🚴‍♂️",
            "description":"Man Biking",
            "keywords":[
                "man",
                "biking"
            ]
        },
        {
            "no":439,
            "code":"U+1F6B4 U+200D U+2640 U+FE0F",
            "emoji":"🚴‍♀️",
            "description":"Woman Biking",
            "keywords":[
                "woman",
                "biking"
            ]
        },
        {
            "no":440,
            "code":"U+1F6B5",
            "emoji":"🚵",
            "description":"Person Mountain Biking",
            "keywords":[
                "person",
                "mountain",
                "biking"
            ]
        },
        {
            "no":441,
            "code":"U+1F6B5 U+200D U+2642 U+FE0F",
            "emoji":"🚵‍♂️",
            "description":"Man Mountain Biking",
            "keywords":[
                "man",
                "mountain",
                "biking"
            ]
        },
        {
            "no":442,
            "code":"U+1F6B5 U+200D U+2640 U+FE0F",
            "emoji":"🚵‍♀️",
            "description":"Woman Mountain Biking",
            "keywords":[
                "woman",
                "mountain",
                "biking"
            ]
        },
        {
            "no":443,
            "code":"U+1F938",
            "emoji":"🤸",
            "description":"Person Cartwheeling",
            "keywords":[
                "person",
                "cartwheeling"
            ]
        },
        {
            "no":444,
            "code":"U+1F938 U+200D U+2642 U+FE0F",
            "emoji":"🤸‍♂️",
            "description":"Man Cartwheeling",
            "keywords":[
                "man",
                "cartwheeling"
            ]
        },
        {
            "no":445,
            "code":"U+1F938 U+200D U+2640 U+FE0F",
            "emoji":"🤸‍♀️",
            "description":"Woman Cartwheeling",
            "keywords":[
                "woman",
                "cartwheeling"
            ]
        },
        {
            "no":446,
            "code":"U+1F93C",
            "emoji":"🤼",
            "description":"People Wrestling",
            "keywords":[
                "people",
                "wrestling"
            ]
        },
        {
            "no":447,
            "code":"U+1F93C U+200D U+2642 U+FE0F",
            "emoji":"🤼‍♂️",
            "description":"Men Wrestling",
            "keywords":[
                "men",
                "wrestling"
            ]
        },
        {
            "no":448,
            "code":"U+1F93C U+200D U+2640 U+FE0F",
            "emoji":"🤼‍♀️",
            "description":"Women Wrestling",
            "keywords":[
                "women",
                "wrestling"
            ]
        },
        {
            "no":449,
            "code":"U+1F93D",
            "emoji":"🤽",
            "description":"Person Playing Water Polo",
            "keywords":[
                "person",
                "playing",
                "water",
                "polo"
            ]
        },
        {
            "no":450,
            "code":"U+1F93D U+200D U+2642 U+FE0F",
            "emoji":"🤽‍♂️",
            "description":"Man Playing Water Polo",
            "keywords":[
                "man",
                "playing",
                "water",
                "polo"
            ]
        },
        {
            "no":451,
            "code":"U+1F93D U+200D U+2640 U+FE0F",
            "emoji":"🤽‍♀️",
            "description":"Woman Playing Water Polo",
            "keywords":[
                "woman",
                "playing",
                "water",
                "polo"
            ]
        },
        {
            "no":452,
            "code":"U+1F93E",
            "emoji":"🤾",
            "description":"Person Playing Handball",
            "keywords":[
                "person",
                "playing",
                "handball"
            ]
        },
        {
            "no":453,
            "code":"U+1F93E U+200D U+2642 U+FE0F",
            "emoji":"🤾‍♂️",
            "description":"Man Playing Handball",
            "keywords":[
                "man",
                "playing",
                "handball"
            ]
        },
        {
            "no":454,
            "code":"U+1F93E U+200D U+2640 U+FE0F",
            "emoji":"🤾‍♀️",
            "description":"Woman Playing Handball",
            "keywords":[
                "woman",
                "playing",
                "handball"
            ]
        },
        {
            "no":455,
            "code":"U+1F939",
            "emoji":"🤹",
            "description":"Person Juggling",
            "keywords":[
                "person",
                "juggling"
            ]
        },
        {
            "no":456,
            "code":"U+1F939 U+200D U+2642 U+FE0F",
            "emoji":"🤹‍♂️",
            "description":"Man Juggling",
            "keywords":[
                "man",
                "juggling"
            ]
        },
        {
            "no":457,
            "code":"U+1F939 U+200D U+2640 U+FE0F",
            "emoji":"🤹‍♀️",
            "description":"Woman Juggling",
            "keywords":[
                "woman",
                "juggling"
            ]
        },
        {
            "no":458,
            "code":"U+1F9D8",
            "emoji":"🧘",
            "description":"Person In Lotus Position",
            "keywords":[
                "person",
                "lotus",
                "position"
            ]
        },
        {
            "no":459,
            "code":"U+1F9D8 U+200D U+2642 U+FE0F",
            "emoji":"🧘‍♂️",
            "description":"Man In Lotus Position",
            "keywords":[
                "man",
                "lotus",
                "position"
            ]
        },
        {
            "no":460,
            "code":"U+1F9D8 U+200D U+2640 U+FE0F",
            "emoji":"🧘‍♀️",
            "description":"Woman In Lotus Position",
            "keywords":[
                "woman",
                "lotus",
                "position"
            ]
        },
        {
            "no":461,
            "code":"U+1F6C0",
            "emoji":"🛀",
            "description":"Person Taking Bath",
            "keywords":[
                "person",
                "taking",
                "bath"
            ]
        },
        {
            "no":462,
            "code":"U+1F6CC",
            "emoji":"🛌",
            "description":"Person In Bed",
            "keywords":[
                "person",
                "bed"
            ]
        },
        {
            "no":463,
            "code":"U+1F9D1 U+200D U+1F91D U+200D U+1F9D1",
            "emoji":"🧑‍🤝‍🧑",
            "description":"People Holding Hands",
            "keywords":[
                "people",
                "holding",
                "hands"
            ]
        },
        {
            "no":464,
            "code":"U+1F46D",
            "emoji":"👭",
            "description":"Women Holding Hands",
            "keywords":[
                "women",
                "holding",
                "hands"
            ]
        },
        {
            "no":465,
            "code":"U+1F46B",
            "emoji":"👫",
            "description":"Woman And Man Holding Hands",
            "keywords":[
                "woman",
                "man",
                "holding",
                "hands"
            ]
        },
        {
            "no":466,
            "code":"U+1F46C",
            "emoji":"👬",
            "description":"Men Holding Hands",
            "keywords":[
                "men",
                "holding",
                "hands"
            ]
        },
        {
            "no":467,
            "code":"U+1F48F",
            "emoji":"💏",
            "description":"Kiss",
            "keywords":[
                "kiss"
            ]
        },
        {
            "no":468,
            "code":"U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468",
            "emoji":"👩‍❤️‍💋‍👨",
            "description":"Kiss: Woman, Man",
            "keywords":[
                "kiss",
                "woman",
                "man"
            ]
        },
        {
            "no":469,
            "code":"U+1F468 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F468",
            "emoji":"👨‍❤️‍💋‍👨",
            "description":"Kiss: Man, Man",
            "keywords":[
                "kiss",
                "man",
                "man"
            ]
        },
        {
            "no":470,
            "code":"U+1F469 U+200D U+2764 U+FE0F U+200D U+1F48B U+200D U+1F469",
            "emoji":"👩‍❤️‍💋‍👩",
            "description":"Kiss: Woman, Woman",
            "keywords":[
                "kiss",
                "woman",
                "woman"
            ]
        },
        {
            "no":471,
            "code":"U+1F491",
            "emoji":"💑",
            "description":"Couple With Heart",
            "keywords":[
                "couple",
                "heart"
            ]
        },
        {
            "no":472,
            "code":"U+1F469 U+200D U+2764 U+FE0F U+200D U+1F468",
            "emoji":"👩‍❤️‍👨",
            "description":"Couple With Heart: Woman, Man",
            "keywords":[
                "couple",
                "heart",
                "woman",
                "man"
            ]
        },
        {
            "no":473,
            "code":"U+1F468 U+200D U+2764 U+FE0F U+200D U+1F468",
            "emoji":"👨‍❤️‍👨",
            "description":"Couple With Heart: Man, Man",
            "keywords":[
                "couple",
                "heart",
                "man",
                "man"
            ]
        },
        {
            "no":474,
            "code":"U+1F469 U+200D U+2764 U+FE0F U+200D U+1F469",
            "emoji":"👩‍❤️‍👩",
            "description":"Couple With Heart: Woman, Woman",
            "keywords":[
                "couple",
                "heart",
                "woman",
                "woman"
            ]
        },
        {
            "no":475,
            "code":"U+1F46A",
            "emoji":"👪",
            "description":"Family",
            "keywords":[
                "family"
            ]
        },
        {
            "no":476,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F466",
            "emoji":"👨‍👩‍👦",
            "description":"Family: Man, Woman, Boy",
            "keywords":[
                "family",
                "man",
                "woman",
                "boy"
            ]
        },
        {
            "no":477,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F467",
            "emoji":"👨‍👩‍👧",
            "description":"Family: Man, Woman, Girl",
            "keywords":[
                "family",
                "man",
                "woman",
                "girl"
            ]
        },
        {
            "no":478,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466",
            "emoji":"👨‍👩‍👧‍👦",
            "description":"Family: Man, Woman, Girl, Boy",
            "keywords":[
                "family",
                "man",
                "woman",
                "girl",
                "boy"
            ]
        },
        {
            "no":479,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466",
            "emoji":"👨‍👩‍👦‍👦",
            "description":"Family: Man, Woman, Boy, Boy",
            "keywords":[
                "family",
                "man",
                "woman",
                "boy",
                "boy"
            ]
        },
        {
            "no":480,
            "code":"U+1F468 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467",
            "emoji":"👨‍👩‍👧‍👧",
            "description":"Family: Man, Woman, Girl, Girl",
            "keywords":[
                "family",
                "man",
                "woman",
                "girl",
                "girl"
            ]
        },
        {
            "no":481,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F466",
            "emoji":"👨‍👨‍👦",
            "description":"Family: Man, Man, Boy",
            "keywords":[
                "family",
                "man",
                "man",
                "boy"
            ]
        },
        {
            "no":482,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F467",
            "emoji":"👨‍👨‍👧",
            "description":"Family: Man, Man, Girl",
            "keywords":[
                "family",
                "man",
                "man",
                "girl"
            ]
        },
        {
            "no":483,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F466",
            "emoji":"👨‍👨‍👧‍👦",
            "description":"Family: Man, Man, Girl, Boy",
            "keywords":[
                "family",
                "man",
                "man",
                "girl",
                "boy"
            ]
        },
        {
            "no":484,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F466 U+200D U+1F466",
            "emoji":"👨‍👨‍👦‍👦",
            "description":"Family: Man, Man, Boy, Boy",
            "keywords":[
                "family",
                "man",
                "man",
                "boy",
                "boy"
            ]
        },
        {
            "no":485,
            "code":"U+1F468 U+200D U+1F468 U+200D U+1F467 U+200D U+1F467",
            "emoji":"👨‍👨‍👧‍👧",
            "description":"Family: Man, Man, Girl, Girl",
            "keywords":[
                "family",
                "man",
                "man",
                "girl",
                "girl"
            ]
        },
        {
            "no":486,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F466",
            "emoji":"👩‍👩‍👦",
            "description":"Family: Woman, Woman, Boy",
            "keywords":[
                "family",
                "woman",
                "woman",
                "boy"
            ]
        },
        {
            "no":487,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F467",
            "emoji":"👩‍👩‍👧",
            "description":"Family: Woman, Woman, Girl",
            "keywords":[
                "family",
                "woman",
                "woman",
                "girl"
            ]
        },
        {
            "no":488,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F466",
            "emoji":"👩‍👩‍👧‍👦",
            "description":"Family: Woman, Woman, Girl, Boy",
            "keywords":[
                "family",
                "woman",
                "woman",
                "girl",
                "boy"
            ]
        },
        {
            "no":489,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F466 U+200D U+1F466",
            "emoji":"👩‍👩‍👦‍👦",
            "description":"Family: Woman, Woman, Boy, Boy",
            "keywords":[
                "family",
                "woman",
                "woman",
                "boy",
                "boy"
            ]
        },
        {
            "no":490,
            "code":"U+1F469 U+200D U+1F469 U+200D U+1F467 U+200D U+1F467",
            "emoji":"👩‍👩‍👧‍👧",
            "description":"Family: Woman, Woman, Girl, Girl",
            "keywords":[
                "family",
                "woman",
                "woman",
                "girl",
                "girl"
            ]
        },
        {
            "no":491,
            "code":"U+1F468 U+200D U+1F466",
            "emoji":"👨‍👦",
            "description":"Family: Man, Boy",
            "keywords":[
                "family",
                "man",
                "boy"
            ]
        },
        {
            "no":492,
            "code":"U+1F468 U+200D U+1F466 U+200D U+1F466",
            "emoji":"👨‍👦‍👦",
            "description":"Family: Man, Boy, Boy",
            "keywords":[
                "family",
                "man",
                "boy",
                "boy"
            ]
        },
        {
            "no":493,
            "code":"U+1F468 U+200D U+1F467",
            "emoji":"👨‍👧",
            "description":"Family: Man, Girl",
            "keywords":[
                "family",
                "man",
                "girl"
            ]
        },
        {
            "no":494,
            "code":"U+1F468 U+200D U+1F467 U+200D U+1F466",
            "emoji":"👨‍👧‍👦",
            "description":"Family: Man, Girl, Boy",
            "keywords":[
                "family",
                "man",
                "girl",
                "boy"
            ]
        },
        {
            "no":495,
            "code":"U+1F468 U+200D U+1F467 U+200D U+1F467",
            "emoji":"👨‍👧‍👧",
            "description":"Family: Man, Girl, Girl",
            "keywords":[
                "family",
                "man",
                "girl",
                "girl"
            ]
        },
        {
            "no":496,
            "code":"U+1F469 U+200D U+1F466",
            "emoji":"👩‍👦",
            "description":"Family: Woman, Boy",
            "keywords":[
                "family",
                "woman",
                "boy"
            ]
        },
        {
            "no":497,
            "code":"U+1F469 U+200D U+1F466 U+200D U+1F466",
            "emoji":"👩‍👦‍👦",
            "description":"Family: Woman, Boy, Boy",
            "keywords":[
                "family",
                "woman",
                "boy",
                "boy"
            ]
        },
        {
            "no":498,
            "code":"U+1F469 U+200D U+1F467",
            "emoji":"👩‍👧",
            "description":"Family: Woman, Girl",
            "keywords":[
                "family",
                "woman",
                "girl"
            ]
        },
        {
            "no":499,
            "code":"U+1F469 U+200D U+1F467 U+200D U+1F466",
            "emoji":"👩‍👧‍👦",
            "description":"Family: Woman, Girl, Boy",
            "keywords":[
                "family",
                "woman",
                "girl",
                "boy"
            ]
        },
        {
            "no":500,
            "code":"U+1F469 U+200D U+1F467 U+200D U+1F467",
            "emoji":"👩‍👧‍👧",
            "description":"Family: Woman, Girl, Girl",
            "keywords":[
                "family",
                "woman",
                "girl",
                "girl"
            ]
        },
        {
            "no":501,
            "code":"U+1F5E3",
            "emoji":"🗣",
            "description":"Speaking Head",
            "keywords":[
                "speaking",
                "head"
            ]
        },
        {
            "no":502,
            "code":"U+1F464",
            "emoji":"👤",
            "description":"Bust In Silhouette",
            "keywords":[
                "bust",
                "silhouette"
            ]
        },
        {
            "no":503,
            "code":"U+1F465",
            "emoji":"👥",
            "description":"Busts In Silhouette",
            "keywords":[
                "busts",
                "silhouette"
            ]
        },
        // {
        //     "no":504,
        //     "code":"U+1FAC2",
        //     "emoji":"🫂",
        //     "description":"People Hugging",
        //     "keywords":[
        //         "people",
        //         "hugging"
        //     ]
        // },
        {
            "no":505,
            "code":"U+1F463",
            "emoji":"👣",
            "description":"Footprints",
            "keywords":[
                "footprints"
            ]
        },
        {
            "no":506,
            "code":"U+1F9B0",
            "emoji":"🦰",
            "description":"Red Hair",
            "keywords":[
                "red",
                "hair"
            ]
        },
        {
            "no":507,
            "code":"U+1F9B1",
            "emoji":"🦱",
            "description":"Curly Hair",
            "keywords":[
                "curly",
                "hair"
            ]
        },
        {
            "no":508,
            "code":"U+1F9B3",
            "emoji":"🦳",
            "description":"White Hair",
            "keywords":[
                "white",
                "hair"
            ]
        },
        {
            "no":509,
            "code":"U+1F9B2",
            "emoji":"🦲",
            "description":"Bald",
            "keywords":[
                "bald"
            ]
        }
    ],
    "Animals":[
        {
            "no":510,
            "code":"U+1F435",
            "emoji":"🐵",
            "description":"Monkey Face",
            "keywords":[
                "monkey",
                "face"
            ]
        },
        {
            "no":511,
            "code":"U+1F412",
            "emoji":"🐒",
            "description":"Monkey",
            "keywords":[
                "monkey"
            ]
        },
        {
            "no":512,
            "code":"U+1F98D",
            "emoji":"🦍",
            "description":"Gorilla",
            "keywords":[
                "gorilla"
            ]
        },
        {
            "no":513,
            "code":"U+1F9A7",
            "emoji":"🦧",
            "description":"Orangutan",
            "keywords":[
                "orangutan"
            ]
        },
        {
            "no":514,
            "code":"U+1F436",
            "emoji":"🐶",
            "description":"Dog Face",
            "keywords":[
                "dog",
                "face"
            ]
        },
        {
            "no":515,
            "code":"U+1F415",
            "emoji":"🐕",
            "description":"Dog",
            "keywords":[
                "dog"
            ]
        },
        {
            "no":516,
            "code":"U+1F9AE",
            "emoji":"🦮",
            "description":"Guide Dog",
            "keywords":[
                "guide",
                "dog"
            ]
        },
        {
            "no":517,
            "code":"U+1F415 U+200D U+1F9BA",
            "emoji":"🐕‍🦺",
            "description":"Service Dog",
            "keywords":[
                "service",
                "dog"
            ]
        },
        {
            "no":518,
            "code":"U+1F429",
            "emoji":"🐩",
            "description":"Poodle",
            "keywords":[
                "poodle"
            ]
        },
        {
            "no":519,
            "code":"U+1F43A",
            "emoji":"🐺",
            "description":"Wolf",
            "keywords":[
                "wolf"
            ]
        },
        {
            "no":520,
            "code":"U+1F98A",
            "emoji":"🦊",
            "description":"Fox",
            "keywords":[
                "fox"
            ]
        },
        {
            "no":521,
            "code":"U+1F99D",
            "emoji":"🦝",
            "description":"Raccoon",
            "keywords":[
                "raccoon"
            ]
        },
        {
            "no":522,
            "code":"U+1F431",
            "emoji":"🐱",
            "description":"Cat Face",
            "keywords":[
                "cat",
                "face"
            ]
        },
        {
            "no":523,
            "code":"U+1F408",
            "emoji":"🐈",
            "description":"Cat",
            "keywords":[
                "cat"
            ]
        },
        {
            "no":524,
            "code":"U+1F408 U+200D U+2B1B",
            "emoji":"🐈‍⬛",
            "description":"Black Cat",
            "keywords":[
                "black",
                "cat"
            ]
        },
        {
            "no":525,
            "code":"U+1F981",
            "emoji":"🦁",
            "description":"Lion",
            "keywords":[
                "lion"
            ]
        },
        {
            "no":526,
            "code":"U+1F42F",
            "emoji":"🐯",
            "description":"Tiger Face",
            "keywords":[
                "tiger",
                "face"
            ]
        },
        {
            "no":527,
            "code":"U+1F405",
            "emoji":"🐅",
            "description":"Tiger",
            "keywords":[
                "tiger"
            ]
        },
        {
            "no":528,
            "code":"U+1F406",
            "emoji":"🐆",
            "description":"Leopard",
            "keywords":[
                "leopard"
            ]
        },
        {
            "no":529,
            "code":"U+1F434",
            "emoji":"🐴",
            "description":"Horse Face",
            "keywords":[
                "horse",
                "face"
            ]
        },
        {
            "no":530,
            "code":"U+1F40E",
            "emoji":"🐎",
            "description":"Horse",
            "keywords":[
                "horse"
            ]
        },
        {
            "no":531,
            "code":"U+1F984",
            "emoji":"🦄",
            "description":"Unicorn",
            "keywords":[
                "unicorn"
            ]
        },
        {
            "no":532,
            "code":"U+1F993",
            "emoji":"🦓",
            "description":"Zebra",
            "keywords":[
                "zebra"
            ]
        },
        {
            "no":533,
            "code":"U+1F98C",
            "emoji":"🦌",
            "description":"Deer",
            "keywords":[
                "deer"
            ]
        },
        // {
        //     "no":534,
        //     "code":"U+1F9AC",
        //     "emoji":"🦬",
        //     "description":"Bison",
        //     "keywords":[
        //         "bison"
        //     ]
        // },
        {
            "no":535,
            "code":"U+1F42E",
            "emoji":"🐮",
            "description":"Cow Face",
            "keywords":[
                "cow",
                "face"
            ]
        },
        {
            "no":536,
            "code":"U+1F402",
            "emoji":"🐂",
            "description":"Ox",
            "keywords":[
                "ox"
            ]
        },
        {
            "no":537,
            "code":"U+1F403",
            "emoji":"🐃",
            "description":"Water Buffalo",
            "keywords":[
                "water",
                "buffalo"
            ]
        },
        {
            "no":538,
            "code":"U+1F404",
            "emoji":"🐄",
            "description":"Cow",
            "keywords":[
                "cow"
            ]
        },
        {
            "no":539,
            "code":"U+1F437",
            "emoji":"🐷",
            "description":"Pig Face",
            "keywords":[
                "pig",
                "face"
            ]
        },
        {
            "no":540,
            "code":"U+1F416",
            "emoji":"🐖",
            "description":"Pig",
            "keywords":[
                "pig"
            ]
        },
        {
            "no":541,
            "code":"U+1F417",
            "emoji":"🐗",
            "description":"Boar",
            "keywords":[
                "boar"
            ]
        },
        {
            "no":542,
            "code":"U+1F43D",
            "emoji":"🐽",
            "description":"Pig Nose",
            "keywords":[
                "pig",
                "nose"
            ]
        },
        {
            "no":543,
            "code":"U+1F40F",
            "emoji":"🐏",
            "description":"Ram",
            "keywords":[
                "ram"
            ]
        },
        {
            "no":544,
            "code":"U+1F411",
            "emoji":"🐑",
            "description":"Ewe",
            "keywords":[
                "ewe"
            ]
        },
        {
            "no":545,
            "code":"U+1F410",
            "emoji":"🐐",
            "description":"Goat",
            "keywords":[
                "goat"
            ]
        },
        {
            "no":546,
            "code":"U+1F42A",
            "emoji":"🐪",
            "description":"Camel",
            "keywords":[
                "camel"
            ]
        },
        {
            "no":547,
            "code":"U+1F42B",
            "emoji":"🐫",
            "description":"Two-Hump Camel",
            "keywords":[
                "two-hump",
                "camel"
            ]
        },
        {
            "no":548,
            "code":"U+1F999",
            "emoji":"🦙",
            "description":"Llama",
            "keywords":[
                "llama"
            ]
        },
        {
            "no":549,
            "code":"U+1F992",
            "emoji":"🦒",
            "description":"Giraffe",
            "keywords":[
                "giraffe"
            ]
        },
        {
            "no":550,
            "code":"U+1F418",
            "emoji":"🐘",
            "description":"Elephant",
            "keywords":[
                "elephant"
            ]
        },
        // {
        //     "no":551,
        //     "code":"U+1F9A3",
        //     "emoji":"🦣",
        //     "description":"Mammoth",
        //     "keywords":[
        //         "mammoth"
        //     ]
        // },
        {
            "no":552,
            "code":"U+1F98F",
            "emoji":"🦏",
            "description":"Rhinoceros",
            "keywords":[
                "rhinoceros"
            ]
        },
        {
            "no":553,
            "code":"U+1F99B",
            "emoji":"🦛",
            "description":"Hippopotamus",
            "keywords":[
                "hippopotamus"
            ]
        },
        {
            "no":554,
            "code":"U+1F42D",
            "emoji":"🐭",
            "description":"Mouse Face",
            "keywords":[
                "mouse",
                "face"
            ]
        },
        {
            "no":555,
            "code":"U+1F401",
            "emoji":"🐁",
            "description":"Mouse",
            "keywords":[
                "mouse"
            ]
        },
        {
            "no":556,
            "code":"U+1F400",
            "emoji":"🐀",
            "description":"Rat",
            "keywords":[
                "rat"
            ]
        },
        {
            "no":557,
            "code":"U+1F439",
            "emoji":"🐹",
            "description":"Hamster",
            "keywords":[
                "hamster"
            ]
        },
        {
            "no":558,
            "code":"U+1F430",
            "emoji":"🐰",
            "description":"Rabbit Face",
            "keywords":[
                "rabbit",
                "face"
            ]
        },
        {
            "no":559,
            "code":"U+1F407",
            "emoji":"🐇",
            "description":"Rabbit",
            "keywords":[
                "rabbit"
            ]
        },
        {
            "no":560,
            "code":"U+1F43F",
            "emoji":"🐿",
            "description":"Chipmunk",
            "keywords":[
                "chipmunk"
            ]
        },
        // {
        //     "no":561,
        //     "code":"U+1F9AB",
        //     "emoji":"🦫",
        //     "description":"Beaver",
        //     "keywords":[
        //         "beaver"
        //     ]
        // },
        {
            "no":562,
            "code":"U+1F994",
            "emoji":"🦔",
            "description":"Hedgehog",
            "keywords":[
                "hedgehog"
            ]
        },
        {
            "no":563,
            "code":"U+1F987",
            "emoji":"🦇",
            "description":"Bat",
            "keywords":[
                "bat"
            ]
        },
        {
            "no":564,
            "code":"U+1F43B",
            "emoji":"🐻",
            "description":"Bear",
            "keywords":[
                "bear"
            ]
        },
        {
            "no":565,
            "code":"U+1F43B U+200D U+2744 U+FE0F",
            "emoji":"🐻‍❄️",
            "description":"Polar Bear",
            "keywords":[
                "polar",
                "bear"
            ]
        },
        {
            "no":566,
            "code":"U+1F428",
            "emoji":"🐨",
            "description":"Koala",
            "keywords":[
                "koala"
            ]
        },
        {
            "no":567,
            "code":"U+1F43C",
            "emoji":"🐼",
            "description":"Panda",
            "keywords":[
                "panda"
            ]
        },
        {
            "no":568,
            "code":"U+1F9A5",
            "emoji":"🦥",
            "description":"Sloth",
            "keywords":[
                "sloth"
            ]
        },
        {
            "no":569,
            "code":"U+1F9A6",
            "emoji":"🦦",
            "description":"Otter",
            "keywords":[
                "otter"
            ]
        },
        {
            "no":570,
            "code":"U+1F9A8",
            "emoji":"🦨",
            "description":"Skunk",
            "keywords":[
                "skunk"
            ]
        },
        {
            "no":571,
            "code":"U+1F998",
            "emoji":"🦘",
            "description":"Kangaroo",
            "keywords":[
                "kangaroo"
            ]
        },
        {
            "no":572,
            "code":"U+1F9A1",
            "emoji":"🦡",
            "description":"Badger",
            "keywords":[
                "badger"
            ]
        },
        {
            "no":573,
            "code":"U+1F43E",
            "emoji":"🐾",
            "description":"Paw Prints",
            "keywords":[
                "paw",
                "prints"
            ]
        },
        {
            "no":574,
            "code":"U+1F983",
            "emoji":"🦃",
            "description":"Turkey",
            "keywords":[
                "turkey"
            ]
        },
        {
            "no":575,
            "code":"U+1F414",
            "emoji":"🐔",
            "description":"Chicken",
            "keywords":[
                "chicken"
            ]
        },
        {
            "no":576,
            "code":"U+1F413",
            "emoji":"🐓",
            "description":"Rooster",
            "keywords":[
                "rooster"
            ]
        },
        {
            "no":577,
            "code":"U+1F423",
            "emoji":"🐣",
            "description":"Hatching Chick",
            "keywords":[
                "hatching",
                "chick"
            ]
        },
        {
            "no":578,
            "code":"U+1F424",
            "emoji":"🐤",
            "description":"Baby Chick",
            "keywords":[
                "baby",
                "chick"
            ]
        },
        {
            "no":579,
            "code":"U+1F425",
            "emoji":"🐥",
            "description":"Front-Facing Baby Chick",
            "keywords":[
                "front-facing",
                "baby",
                "chick"
            ]
        },
        {
            "no":580,
            "code":"U+1F426",
            "emoji":"🐦",
            "description":"Bird",
            "keywords":[
                "bird"
            ]
        },
        {
            "no":581,
            "code":"U+1F427",
            "emoji":"🐧",
            "description":"Penguin",
            "keywords":[
                "penguin"
            ]
        },
        {
            "no":582,
            "code":"U+1F54A",
            "emoji":"🕊",
            "description":"Dove",
            "keywords":[
                "dove"
            ]
        },
        {
            "no":583,
            "code":"U+1F985",
            "emoji":"🦅",
            "description":"Eagle",
            "keywords":[
                "eagle"
            ]
        },
        {
            "no":584,
            "code":"U+1F986",
            "emoji":"🦆",
            "description":"Duck",
            "keywords":[
                "duck"
            ]
        },
        {
            "no":585,
            "code":"U+1F9A2",
            "emoji":"🦢",
            "description":"Swan",
            "keywords":[
                "swan"
            ]
        },
        {
            "no":586,
            "code":"U+1F989",
            "emoji":"🦉",
            "description":"Owl",
            "keywords":[
                "owl"
            ]
        },
        // {
        //     "no":587,
        //     "code":"U+1F9A4",
        //     "emoji":"🦤",
        //     "description":"Dodo",
        //     "keywords":[
        //         "dodo"
        //     ]
        // },
        // {
        //     "no":588,
        //     "code":"U+1FAB6",
        //     "emoji":"🪶",
        //     "description":"Feather",
        //     "keywords":[
        //         "feather"
        //     ]
        // },
        {
            "no":589,
            "code":"U+1F9A9",
            "emoji":"🦩",
            "description":"Flamingo",
            "keywords":[
                "flamingo"
            ]
        },
        {
            "no":590,
            "code":"U+1F99A",
            "emoji":"🦚",
            "description":"Peacock",
            "keywords":[
                "peacock"
            ]
        },
        {
            "no":591,
            "code":"U+1F99C",
            "emoji":"🦜",
            "description":"Parrot",
            "keywords":[
                "parrot"
            ]
        },
        {
            "no":592,
            "code":"U+1F438",
            "emoji":"🐸",
            "description":"Frog",
            "keywords":[
                "frog"
            ]
        },
        {
            "no":593,
            "code":"U+1F40A",
            "emoji":"🐊",
            "description":"Crocodile",
            "keywords":[
                "crocodile"
            ]
        },
        {
            "no":594,
            "code":"U+1F422",
            "emoji":"🐢",
            "description":"Turtle",
            "keywords":[
                "turtle"
            ]
        },
        {
            "no":595,
            "code":"U+1F98E",
            "emoji":"🦎",
            "description":"Lizard",
            "keywords":[
                "lizard"
            ]
        },
        {
            "no":596,
            "code":"U+1F40D",
            "emoji":"🐍",
            "description":"Snake",
            "keywords":[
                "snake"
            ]
        },
        {
            "no":597,
            "code":"U+1F432",
            "emoji":"🐲",
            "description":"Dragon Face",
            "keywords":[
                "dragon",
                "face"
            ]
        },
        {
            "no":598,
            "code":"U+1F409",
            "emoji":"🐉",
            "description":"Dragon",
            "keywords":[
                "dragon"
            ]
        },
        {
            "no":599,
            "code":"U+1F995",
            "emoji":"🦕",
            "description":"Sauropod",
            "keywords":[
                "sauropod"
            ]
        },
        {
            "no":600,
            "code":"U+1F996",
            "emoji":"🦖",
            "description":"T-Rex",
            "keywords":[
                "T-Rex"
            ]
        },
        {
            "no":601,
            "code":"U+1F433",
            "emoji":"🐳",
            "description":"Spouting Whale",
            "keywords":[
                "spouting",
                "whale"
            ]
        },
        {
            "no":602,
            "code":"U+1F40B",
            "emoji":"🐋",
            "description":"Whale",
            "keywords":[
                "whale"
            ]
        },
        {
            "no":603,
            "code":"U+1F42C",
            "emoji":"🐬",
            "description":"Dolphin",
            "keywords":[
                "dolphin"
            ]
        },
        // {
        //     "no":604,
        //     "code":"U+1F9AD",
        //     "emoji":"🦭",
        //     "description":"Seal",
        //     "keywords":[
        //         "seal"
        //     ]
        // },
        {
            "no":605,
            "code":"U+1F41F",
            "emoji":"🐟",
            "description":"Fish",
            "keywords":[
                "fish"
            ]
        },
        {
            "no":606,
            "code":"U+1F420",
            "emoji":"🐠",
            "description":"Tropical Fish",
            "keywords":[
                "tropical",
                "fish"
            ]
        },
        {
            "no":607,
            "code":"U+1F421",
            "emoji":"🐡",
            "description":"Blowfish",
            "keywords":[
                "blowfish"
            ]
        },
        {
            "no":608,
            "code":"U+1F988",
            "emoji":"🦈",
            "description":"Shark",
            "keywords":[
                "shark"
            ]
        },
        {
            "no":609,
            "code":"U+1F419",
            "emoji":"🐙",
            "description":"Octopus",
            "keywords":[
                "octopus"
            ]
        },
        {
            "no":610,
            "code":"U+1F41A",
            "emoji":"🐚",
            "description":"Spiral Shell",
            "keywords":[
                "spiral",
                "shell"
            ]
        },
        {
            "no":611,
            "code":"U+1F40C",
            "emoji":"🐌",
            "description":"Snail",
            "keywords":[
                "snail"
            ]
        },
        {
            "no":612,
            "code":"U+1F98B",
            "emoji":"🦋",
            "description":"Butterfly",
            "keywords":[
                "butterfly"
            ]
        },
        {
            "no":613,
            "code":"U+1F41B",
            "emoji":"🐛",
            "description":"Bug",
            "keywords":[
                "bug"
            ]
        },
        {
            "no":614,
            "code":"U+1F41C",
            "emoji":"🐜",
            "description":"Ant",
            "keywords":[
                "ant"
            ]
        },
        {
            "no":615,
            "code":"U+1F41D",
            "emoji":"🐝",
            "description":"Honeybee",
            "keywords":[
                "honeybee"
            ]
        },
        // {
        //     "no":616,
        //     "code":"U+1FAB2",
        //     "emoji":"🪲",
        //     "description":"Beetle",
        //     "keywords":[
        //         "beetle"
        //     ]
        // },
        {
            "no":617,
            "code":"U+1F41E",
            "emoji":"🐞",
            "description":"Lady Beetle",
            "keywords":[
                "lady",
                "beetle"
            ]
        },
        {
            "no":618,
            "code":"U+1F997",
            "emoji":"🦗",
            "description":"Cricket",
            "keywords":[
                "cricket"
            ]
        },
        // {
        //     "no":619,
        //     "code":"U+1FAB3",
        //     "emoji":"🪳",
        //     "description":"Cockroach",
        //     "keywords":[
        //         "cockroach"
        //     ]
        // },
        {
            "no":620,
            "code":"U+1F577",
            "emoji":"🕷",
            "description":"Spider",
            "keywords":[
                "spider"
            ]
        },
        {
            "no":621,
            "code":"U+1F578",
            "emoji":"🕸",
            "description":"Spider Web",
            "keywords":[
                "spider",
                "web"
            ]
        },
        {
            "no":622,
            "code":"U+1F982",
            "emoji":"🦂",
            "description":"Scorpion",
            "keywords":[
                "scorpion"
            ]
        },
        {
            "no":623,
            "code":"U+1F99F",
            "emoji":"🦟",
            "description":"Mosquito",
            "keywords":[
                "mosquito"
            ]
        },
        // {
        //     "no":624,
        //     "code":"U+1FAB0",
        //     "emoji":"🪰",
        //     "description":"Fly",
        //     "keywords":[
        //         "fly"
        //     ]
        // },
        // {
        //     "no":625,
        //     "code":"U+1FAB1",
        //     "emoji":"🪱",
        //     "description":"Worm",
        //     "keywords":[
        //         "worm"
        //     ]
        // },
        {
            "no":626,
            "code":"U+1F9A0",
            "emoji":"🦠",
            "description":"Microbe",
            "keywords":[
                "microbe"
            ]
        }
    ],
    "Nature":[
        {
            "no":627,
            "code":"U+1F490",
            "emoji":"💐",
            "description":"Bouquet",
            "keywords":[
                "bouquet"
            ]
        },
        {
            "no":628,
            "code":"U+1F338",
            "emoji":"🌸",
            "description":"Cherry Blossom",
            "keywords":[
                "cherry",
                "blossom"
            ]
        },
        {
            "no":629,
            "code":"U+1F4AE",
            "emoji":"💮",
            "description":"White Flower",
            "keywords":[
                "white",
                "flower"
            ]
        },
        {
            "no":630,
            "code":"U+1F3F5",
            "emoji":"🏵",
            "description":"Rosette",
            "keywords":[
                "rosette"
            ]
        },
        {
            "no":631,
            "code":"U+1F339",
            "emoji":"🌹",
            "description":"Rose",
            "keywords":[
                "rose"
            ]
        },
        {
            "no":632,
            "code":"U+1F940",
            "emoji":"🥀",
            "description":"Wilted Flower",
            "keywords":[
                "wilted",
                "flower"
            ]
        },
        {
            "no":633,
            "code":"U+1F33A",
            "emoji":"🌺",
            "description":"Hibiscus",
            "keywords":[
                "hibiscus"
            ]
        },
        {
            "no":634,
            "code":"U+1F33B",
            "emoji":"🌻",
            "description":"Sunflower",
            "keywords":[
                "sunflower"
            ]
        },
        {
            "no":635,
            "code":"U+1F33C",
            "emoji":"🌼",
            "description":"Blossom",
            "keywords":[
                "blossom"
            ]
        },
        {
            "no":636,
            "code":"U+1F337",
            "emoji":"🌷",
            "description":"Tulip",
            "keywords":[
                "tulip"
            ]
        },
        {
            "no":637,
            "code":"U+1F331",
            "emoji":"🌱",
            "description":"Seedling",
            "keywords":[
                "seedling"
            ]
        },
        // {
        //     "no":638,
        //     "code":"U+1FAB4",
        //     "emoji":"🪴",
        //     "description":"Potted Plant",
        //     "keywords":[
        //         "potted",
        //         "plant"
        //     ]
        // },
        {
            "no":639,
            "code":"U+1F332",
            "emoji":"🌲",
            "description":"Evergreen Tree",
            "keywords":[
                "evergreen",
                "tree"
            ]
        },
        {
            "no":640,
            "code":"U+1F333",
            "emoji":"🌳",
            "description":"Deciduous Tree",
            "keywords":[
                "deciduous",
                "tree"
            ]
        },
        {
            "no":641,
            "code":"U+1F334",
            "emoji":"🌴",
            "description":"Palm Tree",
            "keywords":[
                "palm",
                "tree"
            ]
        },
        {
            "no":642,
            "code":"U+1F335",
            "emoji":"🌵",
            "description":"Cactus",
            "keywords":[
                "cactus"
            ]
        },
        {
            "no":643,
            "code":"U+1F33E",
            "emoji":"🌾",
            "description":"Sheaf Of Rice",
            "keywords":[
                "sheaf",
                "rice"
            ]
        },
        {
            "no":644,
            "code":"U+1F33F",
            "emoji":"🌿",
            "description":"Herb",
            "keywords":[
                "herb"
            ]
        },
        {
            "no":645,
            "code":"U+2618",
            "emoji":"☘",
            "description":"Shamrock",
            "keywords":[
                "shamrock"
            ]
        },
        {
            "no":646,
            "code":"U+1F340",
            "emoji":"🍀",
            "description":"Four Leaf Clover",
            "keywords":[
                "four",
                "leaf",
                "clover"
            ]
        },
        {
            "no":647,
            "code":"U+1F341",
            "emoji":"🍁",
            "description":"Maple Leaf",
            "keywords":[
                "maple",
                "leaf"
            ]
        },
        {
            "no":648,
            "code":"U+1F342",
            "emoji":"🍂",
            "description":"Fallen Leaf",
            "keywords":[
                "fallen",
                "leaf"
            ]
        },
        {
            "no":649,
            "code":"U+1F343",
            "emoji":"🍃",
            "description":"Leaf Fluttering In Wind",
            "keywords":[
                "leaf",
                "fluttering",
                "wind"
            ]
        },
        {
            "no":947,
            "code":"U+1F311",
            "emoji":"🌑",
            "description":"New Moon",
            "keywords":[
                "new",
                "moon"
            ]
        },
        {
            "no":948,
            "code":"U+1F312",
            "emoji":"🌒",
            "description":"Waxing Crescent Moon",
            "keywords":[
                "waxing",
                "crescent",
                "moon"
            ]
        },
        {
            "no":949,
            "code":"U+1F313",
            "emoji":"🌓",
            "description":"First Quarter Moon",
            "keywords":[
                "first",
                "quarter",
                "moon"
            ]
        },
        {
            "no":950,
            "code":"U+1F314",
            "emoji":"🌔",
            "description":"Waxing Gibbous Moon",
            "keywords":[
                "waxing",
                "gibbous",
                "moon"
            ]
        },
        {
            "no":951,
            "code":"U+1F315",
            "emoji":"🌕",
            "description":"Full Moon",
            "keywords":[
                "full",
                "moon"
            ]
        },
        {
            "no":952,
            "code":"U+1F316",
            "emoji":"🌖",
            "description":"Waning Gibbous Moon",
            "keywords":[
                "waning",
                "gibbous",
                "moon"
            ]
        },
        {
            "no":953,
            "code":"U+1F317",
            "emoji":"🌗",
            "description":"Last Quarter Moon",
            "keywords":[
                "last",
                "quarter",
                "moon"
            ]
        },
        {
            "no":954,
            "code":"U+1F318",
            "emoji":"🌘",
            "description":"Waning Crescent Moon",
            "keywords":[
                "waning",
                "crescent",
                "moon"
            ]
        },
        {
            "no":955,
            "code":"U+1F319",
            "emoji":"🌙",
            "description":"Crescent Moon",
            "keywords":[
                "crescent",
                "moon"
            ]
        },
        {
            "no":956,
            "code":"U+1F31A",
            "emoji":"🌚",
            "description":"New Moon Face",
            "keywords":[
                "new",
                "moon",
                "face"
            ]
        },
        {
            "no":957,
            "code":"U+1F31B",
            "emoji":"🌛",
            "description":"First Quarter Moon Face",
            "keywords":[
                "first",
                "quarter",
                "moon",
                "face"
            ]
        },
        {
            "no":958,
            "code":"U+1F31C",
            "emoji":"🌜",
            "description":"Last Quarter Moon Face",
            "keywords":[
                "last",
                "quarter",
                "moon",
                "face"
            ]
        },
        {
            "no":959,
            "code":"U+1F321",
            "emoji":"🌡",
            "description":"Thermometer",
            "keywords":[
                "thermometer"
            ]
        },
        {
            "no":960,
            "code":"U+2600",
            "emoji":"☀",
            "description":"Sun",
            "keywords":[
                "sun"
            ]
        },
        {
            "no":961,
            "code":"U+1F31D",
            "emoji":"🌝",
            "description":"Full Moon Face",
            "keywords":[
                "full",
                "moon",
                "face"
            ]
        },
        {
            "no":962,
            "code":"U+1F31E",
            "emoji":"🌞",
            "description":"Sun With Face",
            "keywords":[
                "sun",
                "face"
            ]
        },
        {
            "no":963,
            "code":"U+1FA90",
            "emoji":"🪐",
            "description":"Ringed Planet",
            "keywords":[
                "ringed",
                "planet"
            ]
        },
        {
            "no":964,
            "code":"U+2B50",
            "emoji":"⭐",
            "description":"Star",
            "keywords":[
                "star"
            ]
        },
        {
            "no":965,
            "code":"U+1F31F",
            "emoji":"🌟",
            "description":"Glowing Star",
            "keywords":[
                "glowing",
                "star"
            ]
        },
        {
            "no":966,
            "code":"U+1F320",
            "emoji":"🌠",
            "description":"Shooting Star",
            "keywords":[
                "shooting",
                "star"
            ]
        },
        {
            "no":967,
            "code":"U+1F30C",
            "emoji":"🌌",
            "description":"Milky Way",
            "keywords":[
                "milky",
                "way"
            ]
        },
        {
            "no":968,
            "code":"U+2601",
            "emoji":"☁",
            "description":"Cloud",
            "keywords":[
                "cloud"
            ]
        },
        {
            "no":969,
            "code":"U+26C5",
            "emoji":"⛅",
            "description":"Sun Behind Cloud",
            "keywords":[
                "sun",
                "behind",
                "cloud"
            ]
        },
        {
            "no":970,
            "code":"U+26C8",
            "emoji":"⛈",
            "description":"Cloud With Lightning And Rain",
            "keywords":[
                "cloud",
                "lightning",
                "rain"
            ]
        },
        {
            "no":971,
            "code":"U+1F324",
            "emoji":"🌤",
            "description":"Sun Behind Small Cloud",
            "keywords":[
                "sun",
                "behind",
                "small",
                "cloud"
            ]
        },
        {
            "no":972,
            "code":"U+1F325",
            "emoji":"🌥",
            "description":"Sun Behind Large Cloud",
            "keywords":[
                "sun",
                "behind",
                "large",
                "cloud"
            ]
        },
        {
            "no":973,
            "code":"U+1F326",
            "emoji":"🌦",
            "description":"Sun Behind Rain Cloud",
            "keywords":[
                "sun",
                "behind",
                "rain",
                "cloud"
            ]
        },
        {
            "no":974,
            "code":"U+1F327",
            "emoji":"🌧",
            "description":"Cloud With Rain",
            "keywords":[
                "cloud",
                "rain"
            ]
        },
        {
            "no":975,
            "code":"U+1F328",
            "emoji":"🌨",
            "description":"Cloud With Snow",
            "keywords":[
                "cloud",
                "snow"
            ]
        },
        {
            "no":976,
            "code":"U+1F329",
            "emoji":"🌩",
            "description":"Cloud With Lightning",
            "keywords":[
                "cloud",
                "lightning"
            ]
        },
        {
            "no":977,
            "code":"U+1F32A",
            "emoji":"🌪",
            "description":"Tornado",
            "keywords":[
                "tornado"
            ]
        },
        {
            "no":978,
            "code":"U+1F32B",
            "emoji":"🌫",
            "description":"Fog",
            "keywords":[
                "fog"
            ]
        },
        {
            "no":979,
            "code":"U+1F32C",
            "emoji":"🌬",
            "description":"Wind Face",
            "keywords":[
                "wind",
                "face"
            ]
        },
        {
            "no":980,
            "code":"U+1F300",
            "emoji":"🌀",
            "description":"Cyclone",
            "keywords":[
                "cyclone"
            ]
        },
        {
            "no":981,
            "code":"U+1F308",
            "emoji":"🌈",
            "description":"Rainbow",
            "keywords":[
                "rainbow"
            ]
        },
        {
            "no":982,
            "code":"U+1F302",
            "emoji":"🌂",
            "description":"Closed Umbrella",
            "keywords":[
                "closed",
                "umbrella"
            ]
        },
        {
            "no":983,
            "code":"U+2602",
            "emoji":"☂",
            "description":"Umbrella",
            "keywords":[
                "umbrella"
            ]
        },
        {
            "no":984,
            "code":"U+2614",
            "emoji":"☔",
            "description":"Umbrella With Rain Drops",
            "keywords":[
                "umbrella",
                "rain",
                "drops"
            ]
        },
        {
            "no":985,
            "code":"U+26F1",
            "emoji":"⛱",
            "description":"Umbrella On Ground",
            "keywords":[
                "umbrella",
                "ground"
            ]
        },
        {
            "no":986,
            "code":"U+26A1",
            "emoji":"⚡",
            "description":"High Voltage",
            "keywords":[
                "high",
                "voltage"
            ]
        },
        {
            "no":987,
            "code":"U+2744",
            "emoji":"❄",
            "description":"Snowflake",
            "keywords":[
                "snowflake"
            ]
        },
        {
            "no":988,
            "code":"U+2603",
            "emoji":"☃",
            "description":"Snowman",
            "keywords":[
                "snowman"
            ]
        },
        {
            "no":989,
            "code":"U+26C4",
            "emoji":"⛄",
            "description":"Snowman Without Snow",
            "keywords":[
                "snowman",
                "without",
                "snow"
            ]
        },
        {
            "no":990,
            "code":"U+2604",
            "emoji":"☄",
            "description":"Comet",
            "keywords":[
                "comet"
            ]
        },
        {
            "no":991,
            "code":"U+1F525",
            "emoji":"🔥",
            "description":"Fire",
            "keywords":[
                "fire"
            ]
        },
        {
            "no":992,
            "code":"U+1F4A7",
            "emoji":"💧",
            "description":"Droplet",
            "keywords":[
                "droplet"
            ]
        },
        {
            "no":993,
            "code":"U+1F30A",
            "emoji":"🌊",
            "description":"Water Wave",
            "keywords":[
                "water",
                "wave"
            ]
        }
    ],
    "Food":[
        {
            "no":650,
            "code":"U+1F347",
            "emoji":"🍇",
            "description":"Grapes",
            "keywords":[
                "grapes"
            ]
        },
        {
            "no":651,
            "code":"U+1F348",
            "emoji":"🍈",
            "description":"Melon",
            "keywords":[
                "melon"
            ]
        },
        {
            "no":652,
            "code":"U+1F349",
            "emoji":"🍉",
            "description":"Watermelon",
            "keywords":[
                "watermelon"
            ]
        },
        {
            "no":653,
            "code":"U+1F34A",
            "emoji":"🍊",
            "description":"Tangerine",
            "keywords":[
                "tangerine"
            ]
        },
        {
            "no":654,
            "code":"U+1F34B",
            "emoji":"🍋",
            "description":"Lemon",
            "keywords":[
                "lemon"
            ]
        },
        {
            "no":655,
            "code":"U+1F34C",
            "emoji":"🍌",
            "description":"Banana",
            "keywords":[
                "banana"
            ]
        },
        {
            "no":656,
            "code":"U+1F34D",
            "emoji":"🍍",
            "description":"Pineapple",
            "keywords":[
                "pineapple"
            ]
        },
        {
            "no":657,
            "code":"U+1F96D",
            "emoji":"🥭",
            "description":"Mango",
            "keywords":[
                "mango"
            ]
        },
        {
            "no":658,
            "code":"U+1F34E",
            "emoji":"🍎",
            "description":"Red Apple",
            "keywords":[
                "red",
                "apple"
            ]
        },
        {
            "no":659,
            "code":"U+1F34F",
            "emoji":"🍏",
            "description":"Green Apple",
            "keywords":[
                "green",
                "apple"
            ]
        },
        {
            "no":660,
            "code":"U+1F350",
            "emoji":"🍐",
            "description":"Pear",
            "keywords":[
                "pear"
            ]
        },
        {
            "no":661,
            "code":"U+1F351",
            "emoji":"🍑",
            "description":"Peach",
            "keywords":[
                "peach"
            ]
        },
        {
            "no":662,
            "code":"U+1F352",
            "emoji":"🍒",
            "description":"Cherries",
            "keywords":[
                "cherries"
            ]
        },
        {
            "no":663,
            "code":"U+1F353",
            "emoji":"🍓",
            "description":"Strawberry",
            "keywords":[
                "strawberry"
            ]
        },
        // {
        //     "no":664,
        //     "code":"U+1FAD0",
        //     "emoji":"🫐",
        //     "description":"Blueberries",
        //     "keywords":[
        //         "blueberries"
        //     ]
        // },
        {
            "no":665,
            "code":"U+1F95D",
            "emoji":"🥝",
            "description":"Kiwi Fruit",
            "keywords":[
                "kiwi",
                "fruit"
            ]
        },
        {
            "no":666,
            "code":"U+1F345",
            "emoji":"🍅",
            "description":"Tomato",
            "keywords":[
                "tomato"
            ]
        },
        // {
        //     "no":667,
        //     "code":"U+1FAD2",
        //     "emoji":"🫒",
        //     "description":"Olive",
        //     "keywords":[
        //         "olive"
        //     ]
        // },
        {
            "no":668,
            "code":"U+1F965",
            "emoji":"🥥",
            "description":"Coconut",
            "keywords":[
                "coconut"
            ]
        },
        {
            "no":669,
            "code":"U+1F951",
            "emoji":"🥑",
            "description":"Avocado",
            "keywords":[
                "avocado"
            ]
        },
        {
            "no":670,
            "code":"U+1F346",
            "emoji":"🍆",
            "description":"Eggplant",
            "keywords":[
                "eggplant"
            ]
        },
        {
            "no":671,
            "code":"U+1F954",
            "emoji":"🥔",
            "description":"Potato",
            "keywords":[
                "potato"
            ]
        },
        {
            "no":672,
            "code":"U+1F955",
            "emoji":"🥕",
            "description":"Carrot",
            "keywords":[
                "carrot"
            ]
        },
        {
            "no":673,
            "code":"U+1F33D",
            "emoji":"🌽",
            "description":"Ear Of Corn",
            "keywords":[
                "ear",
                "corn"
            ]
        },
        {
            "no":674,
            "code":"U+1F336",
            "emoji":"🌶",
            "description":"Hot Pepper",
            "keywords":[
                "hot",
                "pepper"
            ]
        },
        // {
        //     "no":675,
        //     "code":"U+1FAD1",
        //     "emoji":"🫑",
        //     "description":"Bell Pepper",
        //     "keywords":[
        //         "bell",
        //         "pepper"
        //     ]
        // },
        {
            "no":676,
            "code":"U+1F952",
            "emoji":"🥒",
            "description":"Cucumber",
            "keywords":[
                "cucumber"
            ]
        },
        {
            "no":677,
            "code":"U+1F96C",
            "emoji":"🥬",
            "description":"Leafy Green",
            "keywords":[
                "leafy",
                "green"
            ]
        },
        {
            "no":678,
            "code":"U+1F966",
            "emoji":"🥦",
            "description":"Broccoli",
            "keywords":[
                "broccoli"
            ]
        },
        {
            "no":679,
            "code":"U+1F9C4",
            "emoji":"🧄",
            "description":"Garlic",
            "keywords":[
                "garlic"
            ]
        },
        {
            "no":680,
            "code":"U+1F9C5",
            "emoji":"🧅",
            "description":"Onion",
            "keywords":[
                "onion"
            ]
        },
        {
            "no":681,
            "code":"U+1F344",
            "emoji":"🍄",
            "description":"Mushroom",
            "keywords":[
                "mushroom"
            ]
        },
        {
            "no":682,
            "code":"U+1F95C",
            "emoji":"🥜",
            "description":"Peanuts",
            "keywords":[
                "peanuts"
            ]
        },
        {
            "no":683,
            "code":"U+1F330",
            "emoji":"🌰",
            "description":"Chestnut",
            "keywords":[
                "chestnut"
            ]
        },
        {
            "no":684,
            "code":"U+1F35E",
            "emoji":"🍞",
            "description":"Bread",
            "keywords":[
                "bread"
            ]
        },
        {
            "no":685,
            "code":"U+1F950",
            "emoji":"🥐",
            "description":"Croissant",
            "keywords":[
                "croissant"
            ]
        },
        {
            "no":686,
            "code":"U+1F956",
            "emoji":"🥖",
            "description":"Baguette Bread",
            "keywords":[
                "baguette",
                "bread"
            ]
        },
        // {
        //     "no":687,
        //     "code":"U+1FAD3",
        //     "emoji":"🫓",
        //     "description":"Flatbread",
        //     "keywords":[
        //         "flatbread"
        //     ]
        // },
        {
            "no":688,
            "code":"U+1F968",
            "emoji":"🥨",
            "description":"Pretzel",
            "keywords":[
                "pretzel"
            ]
        },
        {
            "no":689,
            "code":"U+1F96F",
            "emoji":"🥯",
            "description":"Bagel",
            "keywords":[
                "bagel"
            ]
        },
        {
            "no":690,
            "code":"U+1F95E",
            "emoji":"🥞",
            "description":"Pancakes",
            "keywords":[
                "pancakes"
            ]
        },
        {
            "no":691,
            "code":"U+1F9C7",
            "emoji":"🧇",
            "description":"Waffle",
            "keywords":[
                "waffle"
            ]
        },
        {
            "no":692,
            "code":"U+1F9C0",
            "emoji":"🧀",
            "description":"Cheese Wedge",
            "keywords":[
                "cheese",
                "wedge"
            ]
        },
        {
            "no":693,
            "code":"U+1F356",
            "emoji":"🍖",
            "description":"Meat On Bone",
            "keywords":[
                "meat",
                "bone"
            ]
        },
        {
            "no":694,
            "code":"U+1F357",
            "emoji":"🍗",
            "description":"Poultry Leg",
            "keywords":[
                "poultry",
                "leg"
            ]
        },
        {
            "no":695,
            "code":"U+1F969",
            "emoji":"🥩",
            "description":"Cut Of Meat",
            "keywords":[
                "cut",
                "meat"
            ]
        },
        {
            "no":696,
            "code":"U+1F953",
            "emoji":"🥓",
            "description":"Bacon",
            "keywords":[
                "bacon"
            ]
        },
        {
            "no":697,
            "code":"U+1F354",
            "emoji":"🍔",
            "description":"Hamburger",
            "keywords":[
                "hamburger"
            ]
        },
        {
            "no":698,
            "code":"U+1F35F",
            "emoji":"🍟",
            "description":"French Fries",
            "keywords":[
                "french",
                "fries"
            ]
        },
        {
            "no":699,
            "code":"U+1F355",
            "emoji":"🍕",
            "description":"Pizza",
            "keywords":[
                "pizza"
            ]
        },
        {
            "no":700,
            "code":"U+1F32D",
            "emoji":"🌭",
            "description":"Hot Dog",
            "keywords":[
                "hot",
                "dog"
            ]
        },
        {
            "no":701,
            "code":"U+1F96A",
            "emoji":"🥪",
            "description":"Sandwich",
            "keywords":[
                "sandwich"
            ]
        },
        {
            "no":702,
            "code":"U+1F32E",
            "emoji":"🌮",
            "description":"Taco",
            "keywords":[
                "taco"
            ]
        },
        {
            "no":703,
            "code":"U+1F32F",
            "emoji":"🌯",
            "description":"Burrito",
            "keywords":[
                "burrito"
            ]
        },
        // {
        //     "no":704,
        //     "code":"U+1FAD4",
        //     "emoji":"🫔",
        //     "description":"Tamale",
        //     "keywords":[
        //         "tamale"
        //     ]
        // },
        {
            "no":705,
            "code":"U+1F959",
            "emoji":"🥙",
            "description":"Stuffed Flatbread",
            "keywords":[
                "stuffed",
                "flatbread"
            ]
        },
        {
            "no":706,
            "code":"U+1F9C6",
            "emoji":"🧆",
            "description":"Falafel",
            "keywords":[
                "falafel"
            ]
        },
        {
            "no":707,
            "code":"U+1F95A",
            "emoji":"🥚",
            "description":"Egg",
            "keywords":[
                "egg"
            ]
        },
        {
            "no":708,
            "code":"U+1F373",
            "emoji":"🍳",
            "description":"Cooking",
            "keywords":[
                "cooking"
            ]
        },
        {
            "no":709,
            "code":"U+1F958",
            "emoji":"🥘",
            "description":"Shallow Pan Of Food",
            "keywords":[
                "shallow",
                "pan",
                "food"
            ]
        },
        {
            "no":710,
            "code":"U+1F372",
            "emoji":"🍲",
            "description":"Pot Of Food",
            "keywords":[
                "pot",
                "food"
            ]
        },
        // {
        //     "no":711,
        //     "code":"U+1FAD5",
        //     "emoji":"🫕",
        //     "description":"Fondue",
        //     "keywords":[
        //         "fondue"
        //     ]
        // },
        {
            "no":712,
            "code":"U+1F963",
            "emoji":"🥣",
            "description":"Bowl With Spoon",
            "keywords":[
                "bowl",
                "spoon"
            ]
        },
        {
            "no":713,
            "code":"U+1F957",
            "emoji":"🥗",
            "description":"Green Salad",
            "keywords":[
                "green",
                "salad"
            ]
        },
        {
            "no":714,
            "code":"U+1F37F",
            "emoji":"🍿",
            "description":"Popcorn",
            "keywords":[
                "popcorn"
            ]
        },
        {
            "no":715,
            "code":"U+1F9C8",
            "emoji":"🧈",
            "description":"Butter",
            "keywords":[
                "butter"
            ]
        },
        {
            "no":716,
            "code":"U+1F9C2",
            "emoji":"🧂",
            "description":"Salt",
            "keywords":[
                "salt"
            ]
        },
        {
            "no":717,
            "code":"U+1F96B",
            "emoji":"🥫",
            "description":"Canned Food",
            "keywords":[
                "canned",
                "food"
            ]
        },
        {
            "no":718,
            "code":"U+1F371",
            "emoji":"🍱",
            "description":"Bento Box",
            "keywords":[
                "bento",
                "box"
            ]
        },
        {
            "no":719,
            "code":"U+1F358",
            "emoji":"🍘",
            "description":"Rice Cracker",
            "keywords":[
                "rice",
                "cracker"
            ]
        },
        {
            "no":720,
            "code":"U+1F359",
            "emoji":"🍙",
            "description":"Rice Ball",
            "keywords":[
                "rice",
                "ball"
            ]
        },
        {
            "no":721,
            "code":"U+1F35A",
            "emoji":"🍚",
            "description":"Cooked Rice",
            "keywords":[
                "cooked",
                "rice"
            ]
        },
        {
            "no":722,
            "code":"U+1F35B",
            "emoji":"🍛",
            "description":"Curry Rice",
            "keywords":[
                "curry",
                "rice"
            ]
        },
        {
            "no":723,
            "code":"U+1F35C",
            "emoji":"🍜",
            "description":"Steaming Bowl",
            "keywords":[
                "steaming",
                "bowl"
            ]
        },
        {
            "no":724,
            "code":"U+1F35D",
            "emoji":"🍝",
            "description":"Spaghetti",
            "keywords":[
                "spaghetti"
            ]
        },
        {
            "no":725,
            "code":"U+1F360",
            "emoji":"🍠",
            "description":"Roasted Sweet Potato",
            "keywords":[
                "roasted",
                "sweet",
                "potato"
            ]
        },
        {
            "no":726,
            "code":"U+1F362",
            "emoji":"🍢",
            "description":"Oden",
            "keywords":[
                "oden"
            ]
        },
        {
            "no":727,
            "code":"U+1F363",
            "emoji":"🍣",
            "description":"Sushi",
            "keywords":[
                "sushi"
            ]
        },
        {
            "no":728,
            "code":"U+1F364",
            "emoji":"🍤",
            "description":"Fried Shrimp",
            "keywords":[
                "fried",
                "shrimp"
            ]
        },
        {
            "no":729,
            "code":"U+1F365",
            "emoji":"🍥",
            "description":"Fish Cake With Swirl",
            "keywords":[
                "fish",
                "cake",
                "swirl"
            ]
        },
        {
            "no":730,
            "code":"U+1F96E",
            "emoji":"🥮",
            "description":"Moon Cake",
            "keywords":[
                "moon",
                "cake"
            ]
        },
        {
            "no":731,
            "code":"U+1F361",
            "emoji":"🍡",
            "description":"Dango",
            "keywords":[
                "dango"
            ]
        },
        {
            "no":732,
            "code":"U+1F95F",
            "emoji":"🥟",
            "description":"Dumpling",
            "keywords":[
                "dumpling"
            ]
        },
        {
            "no":733,
            "code":"U+1F960",
            "emoji":"🥠",
            "description":"Fortune Cookie",
            "keywords":[
                "fortune",
                "cookie"
            ]
        },
        {
            "no":734,
            "code":"U+1F961",
            "emoji":"🥡",
            "description":"Takeout Box",
            "keywords":[
                "takeout",
                "box"
            ]
        },
        {
            "no":735,
            "code":"U+1F980",
            "emoji":"🦀",
            "description":"Crab",
            "keywords":[
                "crab"
            ]
        },
        {
            "no":736,
            "code":"U+1F99E",
            "emoji":"🦞",
            "description":"Lobster",
            "keywords":[
                "lobster"
            ]
        },
        {
            "no":737,
            "code":"U+1F990",
            "emoji":"🦐",
            "description":"Shrimp",
            "keywords":[
                "shrimp"
            ]
        },
        {
            "no":738,
            "code":"U+1F991",
            "emoji":"🦑",
            "description":"Squid",
            "keywords":[
                "squid"
            ]
        },
        {
            "no":739,
            "code":"U+1F9AA",
            "emoji":"🦪",
            "description":"Oyster",
            "keywords":[
                "oyster"
            ]
        },
        {
            "no":740,
            "code":"U+1F366",
            "emoji":"🍦",
            "description":"Soft Ice Cream",
            "keywords":[
                "soft",
                "ice",
                "cream"
            ]
        },
        {
            "no":741,
            "code":"U+1F367",
            "emoji":"🍧",
            "description":"Shaved Ice",
            "keywords":[
                "shaved",
                "ice"
            ]
        },
        {
            "no":742,
            "code":"U+1F368",
            "emoji":"🍨",
            "description":"Ice Cream",
            "keywords":[
                "ice",
                "cream"
            ]
        },
        {
            "no":743,
            "code":"U+1F369",
            "emoji":"🍩",
            "description":"Doughnut",
            "keywords":[
                "doughnut"
            ]
        },
        {
            "no":744,
            "code":"U+1F36A",
            "emoji":"🍪",
            "description":"Cookie",
            "keywords":[
                "cookie"
            ]
        },
        {
            "no":745,
            "code":"U+1F382",
            "emoji":"🎂",
            "description":"Birthday Cake",
            "keywords":[
                "birthday",
                "cake"
            ]
        },
        {
            "no":746,
            "code":"U+1F370",
            "emoji":"🍰",
            "description":"Shortcake",
            "keywords":[
                "shortcake"
            ]
        },
        {
            "no":747,
            "code":"U+1F9C1",
            "emoji":"🧁",
            "description":"Cupcake",
            "keywords":[
                "cupcake"
            ]
        },
        {
            "no":748,
            "code":"U+1F967",
            "emoji":"🥧",
            "description":"Pie",
            "keywords":[
                "pie"
            ]
        },
        {
            "no":749,
            "code":"U+1F36B",
            "emoji":"🍫",
            "description":"Chocolate Bar",
            "keywords":[
                "chocolate",
                "bar"
            ]
        },
        {
            "no":750,
            "code":"U+1F36C",
            "emoji":"🍬",
            "description":"Candy",
            "keywords":[
                "candy"
            ]
        },
        {
            "no":751,
            "code":"U+1F36D",
            "emoji":"🍭",
            "description":"Lollipop",
            "keywords":[
                "lollipop"
            ]
        },
        {
            "no":752,
            "code":"U+1F36E",
            "emoji":"🍮",
            "description":"Custard",
            "keywords":[
                "custard"
            ]
        },
        {
            "no":753,
            "code":"U+1F36F",
            "emoji":"🍯",
            "description":"Honey Pot",
            "keywords":[
                "honey",
                "pot"
            ]
        },
        {
            "no":754,
            "code":"U+1F37C",
            "emoji":"🍼",
            "description":"Baby Bottle",
            "keywords":[
                "baby",
                "bottle"
            ]
        },
        {
            "no":755,
            "code":"U+1F95B",
            "emoji":"🥛",
            "description":"Glass Of Milk",
            "keywords":[
                "glass",
                "milk"
            ]
        },
        {
            "no":756,
            "code":"U+2615",
            "emoji":"☕",
            "description":"Hot Beverage",
            "keywords":[
                "hot",
                "beverage"
            ]
        },
        // {
        //     "no":757,
        //     "code":"U+1FAD6",
        //     "emoji":"🫖",
        //     "description":"Teapot",
        //     "keywords":[
        //         "teapot"
        //     ]
        // },
        {
            "no":758,
            "code":"U+1F375",
            "emoji":"🍵",
            "description":"Teacup Without Handle",
            "keywords":[
                "teacup",
                "without",
                "handle"
            ]
        },
        {
            "no":759,
            "code":"U+1F376",
            "emoji":"🍶",
            "description":"Sake",
            "keywords":[
                "sake"
            ]
        },
        {
            "no":760,
            "code":"U+1F37E",
            "emoji":"🍾",
            "description":"Bottle With Popping Cork",
            "keywords":[
                "bottle",
                "popping",
                "cork"
            ]
        },
        {
            "no":761,
            "code":"U+1F377",
            "emoji":"🍷",
            "description":"Wine Glass",
            "keywords":[
                "wine",
                "glass"
            ]
        },
        {
            "no":762,
            "code":"U+1F378",
            "emoji":"🍸",
            "description":"Cocktail Glass",
            "keywords":[
                "cocktail",
                "glass"
            ]
        },
        {
            "no":763,
            "code":"U+1F379",
            "emoji":"🍹",
            "description":"Tropical Drink",
            "keywords":[
                "tropical",
                "drink"
            ]
        },
        {
            "no":764,
            "code":"U+1F37A",
            "emoji":"🍺",
            "description":"Beer Mug",
            "keywords":[
                "beer",
                "mug"
            ]
        },
        {
            "no":765,
            "code":"U+1F37B",
            "emoji":"🍻",
            "description":"Clinking Beer Mugs",
            "keywords":[
                "clinking",
                "beer",
                "mugs"
            ]
        },
        {
            "no":766,
            "code":"U+1F942",
            "emoji":"🥂",
            "description":"Clinking Glasses",
            "keywords":[
                "clinking",
                "glasses"
            ]
        },
        {
            "no":767,
            "code":"U+1F943",
            "emoji":"🥃",
            "description":"Tumbler Glass",
            "keywords":[
                "tumbler",
                "glass"
            ]
        },
        {
            "no":768,
            "code":"U+1F964",
            "emoji":"🥤",
            "description":"Cup With Straw",
            "keywords":[
                "cup",
                "straw"
            ]
        },
        // {
        //     "no":769,
        //     "code":"U+1F9CB",
        //     "emoji":"🧋",
        //     "description":"Bubble Tea",
        //     "keywords":[
        //         "bubble",
        //         "tea"
        //     ]
        // },
        {
            "no":770,
            "code":"U+1F9C3",
            "emoji":"🧃",
            "description":"Beverage Box",
            "keywords":[
                "beverage",
                "box"
            ]
        },
        {
            "no":771,
            "code":"U+1F9C9",
            "emoji":"🧉",
            "description":"Mate",
            "keywords":[
                "mate"
            ]
        },
        {
            "no":772,
            "code":"U+1F9CA",
            "emoji":"🧊",
            "description":"Ice",
            "keywords":[
                "ice"
            ]
        },
        {
            "no":773,
            "code":"U+1F962",
            "emoji":"🥢",
            "description":"Chopsticks",
            "keywords":[
                "chopsticks"
            ]
        },
        {
            "no":774,
            "code":"U+1F37D",
            "emoji":"🍽",
            "description":"Fork And Knife With Plate",
            "keywords":[
                "fork",
                "knife",
                "plate"
            ]
        },
        {
            "no":775,
            "code":"U+1F374",
            "emoji":"🍴",
            "description":"Fork And Knife",
            "keywords":[
                "fork",
                "knife"
            ]
        },
        {
            "no":776,
            "code":"U+1F944",
            "emoji":"🥄",
            "description":"Spoon",
            "keywords":[
                "spoon"
            ]
        },
        {
            "no":777,
            "code":"U+1F52A",
            "emoji":"🔪",
            "description":"Kitchen Knife",
            "keywords":[
                "kitchen",
                "knife"
            ]
        }
    ],
    "Travel":[
        {
            "no":779,
            "code":"U+1F30D",
            "emoji":"🌍",
            "description":"Globe Showing Europe-Africa",
            "keywords":[
                "globe",
                "showing",
                "Europe-Africa"
            ]
        },
        {
            "no":780,
            "code":"U+1F30E",
            "emoji":"🌎",
            "description":"Globe Showing Americas",
            "keywords":[
                "globe",
                "showing",
                "Americas"
            ]
        },
        {
            "no":781,
            "code":"U+1F30F",
            "emoji":"🌏",
            "description":"Globe Showing Asia-Australia",
            "keywords":[
                "globe",
                "showing",
                "Asia-Australia"
            ]
        },
        {
            "no":782,
            "code":"U+1F310",
            "emoji":"🌐",
            "description":"Globe With Meridians",
            "keywords":[
                "globe",
                "meridians"
            ]
        },
        {
            "no":783,
            "code":"U+1F5FA",
            "emoji":"🗺",
            "description":"World Map",
            "keywords":[
                "world",
                "map"
            ]
        },
        {
            "no":784,
            "code":"U+1F5FE",
            "emoji":"🗾",
            "description":"Map Of Japan",
            "keywords":[
                "map",
                "Japan"
            ]
        },
        {
            "no":785,
            "code":"U+1F9ED",
            "emoji":"🧭",
            "description":"Compass",
            "keywords":[
                "compass"
            ]
        },
        {
            "no":786,
            "code":"U+1F3D4",
            "emoji":"🏔",
            "description":"Snow-Capped Mountain",
            "keywords":[
                "snow-capped",
                "mountain"
            ]
        },
        {
            "no":787,
            "code":"U+26F0",
            "emoji":"⛰",
            "description":"Mountain",
            "keywords":[
                "mountain"
            ]
        },
        {
            "no":788,
            "code":"U+1F30B",
            "emoji":"🌋",
            "description":"Volcano",
            "keywords":[
                "volcano"
            ]
        },
        {
            "no":789,
            "code":"U+1F5FB",
            "emoji":"🗻",
            "description":"Mount Fuji",
            "keywords":[
                "mount",
                "fuji"
            ]
        },
        {
            "no":790,
            "code":"U+1F3D5",
            "emoji":"🏕",
            "description":"Camping",
            "keywords":[
                "camping"
            ]
        },
        {
            "no":791,
            "code":"U+1F3D6",
            "emoji":"🏖",
            "description":"Beach With Umbrella",
            "keywords":[
                "beach",
                "umbrella"
            ]
        },
        {
            "no":792,
            "code":"U+1F3DC",
            "emoji":"🏜",
            "description":"Desert",
            "keywords":[
                "desert"
            ]
        },
        {
            "no":793,
            "code":"U+1F3DD",
            "emoji":"🏝",
            "description":"Desert Island",
            "keywords":[
                "desert",
                "island"
            ]
        },
        {
            "no":794,
            "code":"U+1F3DE",
            "emoji":"🏞",
            "description":"National Park",
            "keywords":[
                "national",
                "park"
            ]
        },
        {
            "no":795,
            "code":"U+1F3DF",
            "emoji":"🏟",
            "description":"Stadium",
            "keywords":[
                "stadium"
            ]
        },
        {
            "no":796,
            "code":"U+1F3DB",
            "emoji":"🏛",
            "description":"Classical Building",
            "keywords":[
                "classical",
                "building"
            ]
        },
        {
            "no":797,
            "code":"U+1F3D7",
            "emoji":"🏗",
            "description":"Building Construction",
            "keywords":[
                "building",
                "construction"
            ]
        },
        {
            "no":798,
            "code":"U+1F9F1",
            "emoji":"🧱",
            "description":"Brick",
            "keywords":[
                "brick"
            ]
        },
        // {
        //     "no":799,
        //     "code":"U+1FAA8",
        //     "emoji":"🪨",
        //     "description":"Rock",
        //     "keywords":[
        //         "rock"
        //     ]
        // },
        // {
        //     "no":800,
        //     "code":"U+1FAB5",
        //     "emoji":"🪵",
        //     "description":"Wood",
        //     "keywords":[
        //         "wood"
        //     ]
        // },
        // {
        //     "no":801,
        //     "code":"U+1F6D6",
        //     "emoji":"🛖",
        //     "description":"Hut",
        //     "keywords":[
        //         "hut"
        //     ]
        // },
        {
            "no":802,
            "code":"U+1F3D8",
            "emoji":"🏘",
            "description":"Houses",
            "keywords":[
                "houses"
            ]
        },
        {
            "no":803,
            "code":"U+1F3DA",
            "emoji":"🏚",
            "description":"Derelict House",
            "keywords":[
                "derelict",
                "house"
            ]
        },
        {
            "no":804,
            "code":"U+1F3E0",
            "emoji":"🏠",
            "description":"House",
            "keywords":[
                "house"
            ]
        },
        {
            "no":805,
            "code":"U+1F3E1",
            "emoji":"🏡",
            "description":"House With Garden",
            "keywords":[
                "house",
                "garden"
            ]
        },
        {
            "no":806,
            "code":"U+1F3E2",
            "emoji":"🏢",
            "description":"Office Building",
            "keywords":[
                "office",
                "building"
            ]
        },
        {
            "no":807,
            "code":"U+1F3E3",
            "emoji":"🏣",
            "description":"Japanese Post Office",
            "keywords":[
                "Japanese",
                "post",
                "office"
            ]
        },
        {
            "no":808,
            "code":"U+1F3E4",
            "emoji":"🏤",
            "description":"Post Office",
            "keywords":[
                "post",
                "office"
            ]
        },
        {
            "no":809,
            "code":"U+1F3E5",
            "emoji":"🏥",
            "description":"Hospital",
            "keywords":[
                "hospital"
            ]
        },
        {
            "no":810,
            "code":"U+1F3E6",
            "emoji":"🏦",
            "description":"Bank",
            "keywords":[
                "bank"
            ]
        },
        {
            "no":811,
            "code":"U+1F3E8",
            "emoji":"🏨",
            "description":"Hotel",
            "keywords":[
                "hotel"
            ]
        },
        {
            "no":812,
            "code":"U+1F3E9",
            "emoji":"🏩",
            "description":"Love Hotel",
            "keywords":[
                "love",
                "hotel"
            ]
        },
        {
            "no":813,
            "code":"U+1F3EA",
            "emoji":"🏪",
            "description":"Convenience Store",
            "keywords":[
                "convenience",
                "store"
            ]
        },
        {
            "no":814,
            "code":"U+1F3EB",
            "emoji":"🏫",
            "description":"School",
            "keywords":[
                "school"
            ]
        },
        {
            "no":815,
            "code":"U+1F3EC",
            "emoji":"🏬",
            "description":"Department Store",
            "keywords":[
                "department",
                "store"
            ]
        },
        {
            "no":816,
            "code":"U+1F3ED",
            "emoji":"🏭",
            "description":"Factory",
            "keywords":[
                "factory"
            ]
        },
        {
            "no":817,
            "code":"U+1F3EF",
            "emoji":"🏯",
            "description":"Japanese Castle",
            "keywords":[
                "Japanese",
                "castle"
            ]
        },
        {
            "no":818,
            "code":"U+1F3F0",
            "emoji":"🏰",
            "description":"Castle",
            "keywords":[
                "castle"
            ]
        },
        {
            "no":819,
            "code":"U+1F492",
            "emoji":"💒",
            "description":"Wedding",
            "keywords":[
                "wedding"
            ]
        },
        {
            "no":820,
            "code":"U+1F5FC",
            "emoji":"🗼",
            "description":"Tokyo Tower",
            "keywords":[
                "Tokyo",
                "tower"
            ]
        },
        {
            "no":821,
            "code":"U+1F5FD",
            "emoji":"🗽",
            "description":"Statue Of Liberty",
            "keywords":[
                "Statue",
                "Liberty"
            ]
        },
        {
            "no":822,
            "code":"U+26EA",
            "emoji":"⛪",
            "description":"Church",
            "keywords":[
                "church"
            ]
        },
        {
            "no":823,
            "code":"U+1F54C",
            "emoji":"🕌",
            "description":"Mosque",
            "keywords":[
                "mosque"
            ]
        },
        {
            "no":824,
            "code":"U+1F6D5",
            "emoji":"🛕",
            "description":"Hindu Temple",
            "keywords":[
                "hindu",
                "temple"
            ]
        },
        {
            "no":825,
            "code":"U+1F54D",
            "emoji":"🕍",
            "description":"Synagogue",
            "keywords":[
                "synagogue"
            ]
        },
        {
            "no":826,
            "code":"U+26E9",
            "emoji":"⛩",
            "description":"Shinto Shrine",
            "keywords":[
                "shinto",
                "shrine"
            ]
        },
        {
            "no":827,
            "code":"U+1F54B",
            "emoji":"🕋",
            "description":"Kaaba",
            "keywords":[
                "kaaba"
            ]
        },
        {
            "no":828,
            "code":"U+26F2",
            "emoji":"⛲",
            "description":"Fountain",
            "keywords":[
                "fountain"
            ]
        },
        {
            "no":829,
            "code":"U+26FA",
            "emoji":"⛺",
            "description":"Tent",
            "keywords":[
                "tent"
            ]
        },
        {
            "no":830,
            "code":"U+1F301",
            "emoji":"🌁",
            "description":"Foggy",
            "keywords":[
                "foggy"
            ]
        },
        {
            "no":831,
            "code":"U+1F303",
            "emoji":"🌃",
            "description":"Night With Stars",
            "keywords":[
                "night",
                "stars"
            ]
        },
        {
            "no":832,
            "code":"U+1F3D9",
            "emoji":"🏙",
            "description":"Cityscape",
            "keywords":[
                "cityscape"
            ]
        },
        {
            "no":833,
            "code":"U+1F304",
            "emoji":"🌄",
            "description":"Sunrise Over Mountains",
            "keywords":[
                "sunrise",
                "over",
                "mountains"
            ]
        },
        {
            "no":834,
            "code":"U+1F305",
            "emoji":"🌅",
            "description":"Sunrise",
            "keywords":[
                "sunrise"
            ]
        },
        {
            "no":835,
            "code":"U+1F306",
            "emoji":"🌆",
            "description":"Cityscape At Dusk",
            "keywords":[
                "cityscape",
                "at",
                "dusk"
            ]
        },
        {
            "no":836,
            "code":"U+1F307",
            "emoji":"🌇",
            "description":"Sunset",
            "keywords":[
                "sunset"
            ]
        },
        {
            "no":837,
            "code":"U+1F309",
            "emoji":"🌉",
            "description":"Bridge At Night",
            "keywords":[
                "bridge",
                "at",
                "night"
            ]
        },
        {
            "no":838,
            "code":"U+2668",
            "emoji":"♨",
            "description":"Hot Springs",
            "keywords":[
                "hot",
                "springs"
            ]
        },
        {
            "no":839,
            "code":"U+1F3A0",
            "emoji":"🎠",
            "description":"Carousel Horse",
            "keywords":[
                "carousel",
                "horse"
            ]
        },
        {
            "no":840,
            "code":"U+1F3A1",
            "emoji":"🎡",
            "description":"Ferris Wheel",
            "keywords":[
                "ferris",
                "wheel"
            ]
        },
        {
            "no":841,
            "code":"U+1F3A2",
            "emoji":"🎢",
            "description":"Roller Coaster",
            "keywords":[
                "roller",
                "coaster"
            ]
        },
        {
            "no":842,
            "code":"U+1F488",
            "emoji":"💈",
            "description":"Barber Pole",
            "keywords":[
                "barber",
                "pole"
            ]
        },
        {
            "no":843,
            "code":"U+1F3AA",
            "emoji":"🎪",
            "description":"Circus Tent",
            "keywords":[
                "circus",
                "tent"
            ]
        },
        {
            "no":844,
            "code":"U+1F682",
            "emoji":"🚂",
            "description":"Locomotive",
            "keywords":[
                "locomotive"
            ]
        },
        {
            "no":845,
            "code":"U+1F683",
            "emoji":"🚃",
            "description":"Railway Car",
            "keywords":[
                "railway",
                "car"
            ]
        },
        {
            "no":846,
            "code":"U+1F684",
            "emoji":"🚄",
            "description":"High-Speed Train",
            "keywords":[
                "high-speed",
                "train"
            ]
        },
        {
            "no":847,
            "code":"U+1F685",
            "emoji":"🚅",
            "description":"Bullet Train",
            "keywords":[
                "bullet",
                "train"
            ]
        },
        {
            "no":848,
            "code":"U+1F686",
            "emoji":"🚆",
            "description":"Train",
            "keywords":[
                "train"
            ]
        },
        {
            "no":849,
            "code":"U+1F687",
            "emoji":"🚇",
            "description":"Metro",
            "keywords":[
                "metro"
            ]
        },
        {
            "no":850,
            "code":"U+1F688",
            "emoji":"🚈",
            "description":"Light Rail",
            "keywords":[
                "light",
                "rail"
            ]
        },
        {
            "no":851,
            "code":"U+1F689",
            "emoji":"🚉",
            "description":"Station",
            "keywords":[
                "station"
            ]
        },
        {
            "no":852,
            "code":"U+1F68A",
            "emoji":"🚊",
            "description":"Tram",
            "keywords":[
                "tram"
            ]
        },
        {
            "no":853,
            "code":"U+1F69D",
            "emoji":"🚝",
            "description":"Monorail",
            "keywords":[
                "monorail"
            ]
        },
        {
            "no":854,
            "code":"U+1F69E",
            "emoji":"🚞",
            "description":"Mountain Railway",
            "keywords":[
                "mountain",
                "railway"
            ]
        },
        {
            "no":855,
            "code":"U+1F68B",
            "emoji":"🚋",
            "description":"Tram Car",
            "keywords":[
                "tram",
                "car"
            ]
        },
        {
            "no":856,
            "code":"U+1F68C",
            "emoji":"🚌",
            "description":"Bus",
            "keywords":[
                "bus"
            ]
        },
        {
            "no":857,
            "code":"U+1F68D",
            "emoji":"🚍",
            "description":"Oncoming Bus",
            "keywords":[
                "oncoming",
                "bus"
            ]
        },
        {
            "no":858,
            "code":"U+1F68E",
            "emoji":"🚎",
            "description":"Trolleybus",
            "keywords":[
                "trolleybus"
            ]
        },
        {
            "no":859,
            "code":"U+1F690",
            "emoji":"🚐",
            "description":"Minibus",
            "keywords":[
                "minibus"
            ]
        },
        {
            "no":860,
            "code":"U+1F691",
            "emoji":"🚑",
            "description":"Ambulance",
            "keywords":[
                "ambulance"
            ]
        },
        {
            "no":861,
            "code":"U+1F692",
            "emoji":"🚒",
            "description":"Fire Engine",
            "keywords":[
                "fire",
                "engine"
            ]
        },
        {
            "no":862,
            "code":"U+1F693",
            "emoji":"🚓",
            "description":"Police Car",
            "keywords":[
                "police",
                "car"
            ]
        },
        {
            "no":863,
            "code":"U+1F694",
            "emoji":"🚔",
            "description":"Oncoming Police Car",
            "keywords":[
                "oncoming",
                "police",
                "car"
            ]
        },
        {
            "no":864,
            "code":"U+1F695",
            "emoji":"🚕",
            "description":"Taxi",
            "keywords":[
                "taxi"
            ]
        },
        {
            "no":865,
            "code":"U+1F696",
            "emoji":"🚖",
            "description":"Oncoming Taxi",
            "keywords":[
                "oncoming",
                "taxi"
            ]
        },
        {
            "no":866,
            "code":"U+1F697",
            "emoji":"🚗",
            "description":"Automobile",
            "keywords":[
                "automobile"
            ]
        },
        {
            "no":867,
            "code":"U+1F698",
            "emoji":"🚘",
            "description":"Oncoming Automobile",
            "keywords":[
                "oncoming",
                "automobile"
            ]
        },
        {
            "no":868,
            "code":"U+1F699",
            "emoji":"🚙",
            "description":"Sport Utility Vehicle",
            "keywords":[
                "sport",
                "utility",
                "vehicle"
            ]
        },
        // {
        //     "no":869,
        //     "code":"U+1F6FB",
        //     "emoji":"🛻",
        //     "description":"Pickup Truck",
        //     "keywords":[
        //         "pickup",
        //         "truck"
        //     ]
        // },
        {
            "no":870,
            "code":"U+1F69A",
            "emoji":"🚚",
            "description":"Delivery Truck",
            "keywords":[
                "delivery",
                "truck"
            ]
        },
        {
            "no":871,
            "code":"U+1F69B",
            "emoji":"🚛",
            "description":"Articulated Lorry",
            "keywords":[
                "articulated",
                "lorry"
            ]
        },
        {
            "no":872,
            "code":"U+1F69C",
            "emoji":"🚜",
            "description":"Tractor",
            "keywords":[
                "tractor"
            ]
        },
        {
            "no":873,
            "code":"U+1F3CE",
            "emoji":"🏎",
            "description":"Racing Car",
            "keywords":[
                "racing",
                "car"
            ]
        },
        {
            "no":874,
            "code":"U+1F3CD",
            "emoji":"🏍",
            "description":"Motorcycle",
            "keywords":[
                "motorcycle"
            ]
        },
        {
            "no":875,
            "code":"U+1F6F5",
            "emoji":"🛵",
            "description":"Motor Scooter",
            "keywords":[
                "motor",
                "scooter"
            ]
        },
        {
            "no":876,
            "code":"U+1F9BD",
            "emoji":"🦽",
            "description":"Manual Wheelchair",
            "keywords":[
                "manual",
                "wheelchair"
            ]
        },
        {
            "no":877,
            "code":"U+1F9BC",
            "emoji":"🦼",
            "description":"Motorized Wheelchair",
            "keywords":[
                "motorized",
                "wheelchair"
            ]
        },
        {
            "no":878,
            "code":"U+1F6FA",
            "emoji":"🛺",
            "description":"Auto Rickshaw",
            "keywords":[
                "auto",
                "rickshaw"
            ]
        },
        {
            "no":879,
            "code":"U+1F6B2",
            "emoji":"🚲",
            "description":"Bicycle",
            "keywords":[
                "bicycle"
            ]
        },
        {
            "no":880,
            "code":"U+1F6F4",
            "emoji":"🛴",
            "description":"Kick Scooter",
            "keywords":[
                "kick",
                "scooter"
            ]
        },
        {
            "no":881,
            "code":"U+1F6F9",
            "emoji":"🛹",
            "description":"Skateboard",
            "keywords":[
                "skateboard"
            ]
        },
        // {
        //     "no":882,
        //     "code":"U+1F6FC",
        //     "emoji":"🛼",
        //     "description":"Roller Skate",
        //     "keywords":[
        //         "roller",
        //         "skate"
        //     ]
        // },
        {
            "no":883,
            "code":"U+1F68F",
            "emoji":"🚏",
            "description":"Bus Stop",
            "keywords":[
                "bus",
                "stop"
            ]
        },
        {
            "no":884,
            "code":"U+1F6E3",
            "emoji":"🛣",
            "description":"Motorway",
            "keywords":[
                "motorway"
            ]
        },
        {
            "no":885,
            "code":"U+1F6E4",
            "emoji":"🛤",
            "description":"Railway Track",
            "keywords":[
                "railway",
                "track"
            ]
        },
        {
            "no":886,
            "code":"U+1F6E2",
            "emoji":"🛢",
            "description":"Oil Drum",
            "keywords":[
                "oil",
                "drum"
            ]
        },
        {
            "no":887,
            "code":"U+26FD",
            "emoji":"⛽",
            "description":"Fuel Pump",
            "keywords":[
                "fuel",
                "pump"
            ]
        },
        {
            "no":888,
            "code":"U+1F6A8",
            "emoji":"🚨",
            "description":"Police Car Light",
            "keywords":[
                "police",
                "car",
                "light"
            ]
        },
        {
            "no":889,
            "code":"U+1F6A5",
            "emoji":"🚥",
            "description":"Horizontal Traffic Light",
            "keywords":[
                "horizontal",
                "traffic",
                "light"
            ]
        },
        {
            "no":890,
            "code":"U+1F6A6",
            "emoji":"🚦",
            "description":"Vertical Traffic Light",
            "keywords":[
                "vertical",
                "traffic",
                "light"
            ]
        },
        {
            "no":891,
            "code":"U+1F6D1",
            "emoji":"🛑",
            "description":"Stop Sign",
            "keywords":[
                "stop",
                "sign"
            ]
        },
        {
            "no":892,
            "code":"U+1F6A7",
            "emoji":"🚧",
            "description":"Construction",
            "keywords":[
                "construction"
            ]
        },
        {
            "no":893,
            "code":"U+2693",
            "emoji":"⚓",
            "description":"Anchor",
            "keywords":[
                "anchor"
            ]
        },
        {
            "no":894,
            "code":"U+26F5",
            "emoji":"⛵",
            "description":"Sailboat",
            "keywords":[
                "sailboat"
            ]
        },
        {
            "no":895,
            "code":"U+1F6F6",
            "emoji":"🛶",
            "description":"Canoe",
            "keywords":[
                "canoe"
            ]
        },
        {
            "no":896,
            "code":"U+1F6A4",
            "emoji":"🚤",
            "description":"Speedboat",
            "keywords":[
                "speedboat"
            ]
        },
        {
            "no":897,
            "code":"U+1F6F3",
            "emoji":"🛳",
            "description":"Passenger Ship",
            "keywords":[
                "passenger",
                "ship"
            ]
        },
        {
            "no":898,
            "code":"U+26F4",
            "emoji":"⛴",
            "description":"Ferry",
            "keywords":[
                "ferry"
            ]
        },
        {
            "no":899,
            "code":"U+1F6E5",
            "emoji":"🛥",
            "description":"Motor Boat",
            "keywords":[
                "motor",
                "boat"
            ]
        },
        {
            "no":900,
            "code":"U+1F6A2",
            "emoji":"🚢",
            "description":"Ship",
            "keywords":[
                "ship"
            ]
        },
        {
            "no":901,
            "code":"U+2708",
            "emoji":"✈",
            "description":"Airplane",
            "keywords":[
                "airplane"
            ]
        },
        {
            "no":902,
            "code":"U+1F6E9",
            "emoji":"🛩",
            "description":"Small Airplane",
            "keywords":[
                "small",
                "airplane"
            ]
        },
        {
            "no":903,
            "code":"U+1F6EB",
            "emoji":"🛫",
            "description":"Airplane Departure",
            "keywords":[
                "airplane",
                "departure"
            ]
        },
        {
            "no":904,
            "code":"U+1F6EC",
            "emoji":"🛬",
            "description":"Airplane Arrival",
            "keywords":[
                "airplane",
                "arrival"
            ]
        },
        {
            "no":905,
            "code":"U+1FA82",
            "emoji":"🪂",
            "description":"Parachute",
            "keywords":[
                "parachute"
            ]
        },
        {
            "no":906,
            "code":"U+1F4BA",
            "emoji":"💺",
            "description":"Seat",
            "keywords":[
                "seat"
            ]
        },
        {
            "no":907,
            "code":"U+1F681",
            "emoji":"🚁",
            "description":"Helicopter",
            "keywords":[
                "helicopter"
            ]
        },
        {
            "no":908,
            "code":"U+1F69F",
            "emoji":"🚟",
            "description":"Suspension Railway",
            "keywords":[
                "suspension",
                "railway"
            ]
        },
        {
            "no":909,
            "code":"U+1F6A0",
            "emoji":"🚠",
            "description":"Mountain Cableway",
            "keywords":[
                "mountain",
                "cableway"
            ]
        },
        {
            "no":910,
            "code":"U+1F6A1",
            "emoji":"🚡",
            "description":"Aerial Tramway",
            "keywords":[
                "aerial",
                "tramway"
            ]
        },
        {
            "no":911,
            "code":"U+1F6F0",
            "emoji":"🛰",
            "description":"Satellite",
            "keywords":[
                "satellite"
            ]
        },
        {
            "no":912,
            "code":"U+1F680",
            "emoji":"🚀",
            "description":"Rocket",
            "keywords":[
                "rocket"
            ]
        },
        {
            "no":913,
            "code":"U+1F6F8",
            "emoji":"🛸",
            "description":"Flying Saucer",
            "keywords":[
                "flying",
                "saucer"
            ]
        }
    ],
    "Activities":[
        {
            "no":994,
            "code":"U+1F383",
            "emoji":"🎃",
            "description":"Jack-O-Lantern",
            "keywords":[
                "jack-o-lantern"
            ]
        },
        {
            "no":995,
            "code":"U+1F384",
            "emoji":"🎄",
            "description":"Christmas Tree",
            "keywords":[
                "Christmas",
                "tree"
            ]
        },
        {
            "no":996,
            "code":"U+1F386",
            "emoji":"🎆",
            "description":"Fireworks",
            "keywords":[
                "fireworks"
            ]
        },
        {
            "no":997,
            "code":"U+1F387",
            "emoji":"🎇",
            "description":"Sparkler",
            "keywords":[
                "sparkler"
            ]
        },
        {
            "no":998,
            "code":"U+1F9E8",
            "emoji":"🧨",
            "description":"Firecracker",
            "keywords":[
                "firecracker"
            ]
        },
        {
            "no":999,
            "code":"U+2728",
            "emoji":"✨",
            "description":"Sparkles",
            "keywords":[
                "sparkles"
            ]
        },
        {
            "no":1000,
            "code":"U+1F388",
            "emoji":"🎈",
            "description":"Balloon",
            "keywords":[
                "balloon"
            ]
        },
        {
            "no":1001,
            "code":"U+1F389",
            "emoji":"🎉",
            "description":"Party Popper",
            "keywords":[
                "party",
                "popper"
            ]
        },
        {
            "no":1002,
            "code":"U+1F38A",
            "emoji":"🎊",
            "description":"Confetti Ball",
            "keywords":[
                "confetti",
                "ball"
            ]
        },
        {
            "no":1003,
            "code":"U+1F38B",
            "emoji":"🎋",
            "description":"Tanabata Tree",
            "keywords":[
                "tanabata",
                "tree"
            ]
        },
        {
            "no":1004,
            "code":"U+1F38D",
            "emoji":"🎍",
            "description":"Pine Decoration",
            "keywords":[
                "pine",
                "decoration"
            ]
        },
        {
            "no":1005,
            "code":"U+1F38E",
            "emoji":"🎎",
            "description":"Japanese Dolls",
            "keywords":[
                "Japanese",
                "dolls"
            ]
        },
        {
            "no":1006,
            "code":"U+1F38F",
            "emoji":"🎏",
            "description":"Carp Streamer",
            "keywords":[
                "carp",
                "streamer"
            ]
        },
        {
            "no":1007,
            "code":"U+1F390",
            "emoji":"🎐",
            "description":"Wind Chime",
            "keywords":[
                "wind",
                "chime"
            ]
        },
        {
            "no":1008,
            "code":"U+1F391",
            "emoji":"🎑",
            "description":"Moon Viewing Ceremony",
            "keywords":[
                "moon",
                "viewing",
                "ceremony"
            ]
        },
        {
            "no":1009,
            "code":"U+1F9E7",
            "emoji":"🧧",
            "description":"Red Envelope",
            "keywords":[
                "red",
                "envelope"
            ]
        },
        {
            "no":1010,
            "code":"U+1F380",
            "emoji":"🎀",
            "description":"Ribbon",
            "keywords":[
                "ribbon"
            ]
        },
        {
            "no":1011,
            "code":"U+1F381",
            "emoji":"🎁",
            "description":"Wrapped Gift",
            "keywords":[
                "wrapped",
                "gift"
            ]
        },
        {
            "no":1012,
            "code":"U+1F397",
            "emoji":"🎗",
            "description":"Reminder Ribbon",
            "keywords":[
                "reminder",
                "ribbon"
            ]
        },
        {
            "no":1013,
            "code":"U+1F39F",
            "emoji":"🎟",
            "description":"Admission Tickets",
            "keywords":[
                "admission",
                "tickets"
            ]
        },
        {
            "no":1014,
            "code":"U+1F3AB",
            "emoji":"🎫",
            "description":"Ticket",
            "keywords":[
                "ticket"
            ]
        },
        {
            "no":1015,
            "code":"U+1F396",
            "emoji":"🎖",
            "description":"Military Medal",
            "keywords":[
                "military",
                "medal"
            ]
        },
        {
            "no":1016,
            "code":"U+1F3C6",
            "emoji":"🏆",
            "description":"Trophy",
            "keywords":[
                "trophy"
            ]
        },
        {
            "no":1017,
            "code":"U+1F3C5",
            "emoji":"🏅",
            "description":"Sports Medal",
            "keywords":[
                "sports",
                "medal"
            ]
        },
        {
            "no":1018,
            "code":"U+1F947",
            "emoji":"🥇",
            "description":"1st Place Medal",
            "keywords":[
                "1st",
                "place",
                "medal"
            ]
        },
        {
            "no":1019,
            "code":"U+1F948",
            "emoji":"🥈",
            "description":"2nd Place Medal",
            "keywords":[
                "2nd",
                "place",
                "medal"
            ]
        },
        {
            "no":1020,
            "code":"U+1F949",
            "emoji":"🥉",
            "description":"3rd Place Medal",
            "keywords":[
                "3rd",
                "place",
                "medal"
            ]
        },
        {
            "no":1021,
            "code":"U+26BD",
            "emoji":"⚽",
            "description":"Soccer Ball",
            "keywords":[
                "soccer",
                "ball"
            ]
        },
        {
            "no":1022,
            "code":"U+26BE",
            "emoji":"⚾",
            "description":"Baseball",
            "keywords":[
                "baseball"
            ]
        },
        {
            "no":1023,
            "code":"U+1F94E",
            "emoji":"🥎",
            "description":"Softball",
            "keywords":[
                "softball"
            ]
        },
        {
            "no":1024,
            "code":"U+1F3C0",
            "emoji":"🏀",
            "description":"Basketball",
            "keywords":[
                "basketball"
            ]
        },
        {
            "no":1025,
            "code":"U+1F3D0",
            "emoji":"🏐",
            "description":"Volleyball",
            "keywords":[
                "volleyball"
            ]
        },
        {
            "no":1026,
            "code":"U+1F3C8",
            "emoji":"🏈",
            "description":"American Football",
            "keywords":[
                "american",
                "football"
            ]
        },
        {
            "no":1027,
            "code":"U+1F3C9",
            "emoji":"🏉",
            "description":"Rugby Football",
            "keywords":[
                "rugby",
                "football"
            ]
        },
        {
            "no":1028,
            "code":"U+1F3BE",
            "emoji":"🎾",
            "description":"Tennis",
            "keywords":[
                "tennis"
            ]
        },
        {
            "no":1029,
            "code":"U+1F94F",
            "emoji":"🥏",
            "description":"Flying Disc",
            "keywords":[
                "flying",
                "disc"
            ]
        },
        {
            "no":1030,
            "code":"U+1F3B3",
            "emoji":"🎳",
            "description":"Bowling",
            "keywords":[
                "bowling"
            ]
        },
        {
            "no":1031,
            "code":"U+1F3CF",
            "emoji":"🏏",
            "description":"Cricket Game",
            "keywords":[
                "cricket",
                "game"
            ]
        },
        {
            "no":1032,
            "code":"U+1F3D1",
            "emoji":"🏑",
            "description":"Field Hockey",
            "keywords":[
                "field",
                "hockey"
            ]
        },
        {
            "no":1033,
            "code":"U+1F3D2",
            "emoji":"🏒",
            "description":"Ice Hockey",
            "keywords":[
                "ice",
                "hockey"
            ]
        },
        {
            "no":1034,
            "code":"U+1F94D",
            "emoji":"🥍",
            "description":"Lacrosse",
            "keywords":[
                "lacrosse"
            ]
        },
        {
            "no":1035,
            "code":"U+1F3D3",
            "emoji":"🏓",
            "description":"Ping Pong",
            "keywords":[
                "ping",
                "pong"
            ]
        },
        {
            "no":1036,
            "code":"U+1F3F8",
            "emoji":"🏸",
            "description":"Badminton",
            "keywords":[
                "badminton"
            ]
        },
        {
            "no":1037,
            "code":"U+1F94A",
            "emoji":"🥊",
            "description":"Boxing Glove",
            "keywords":[
                "boxing",
                "glove"
            ]
        },
        {
            "no":1038,
            "code":"U+1F94B",
            "emoji":"🥋",
            "description":"Martial Arts Uniform",
            "keywords":[
                "martial",
                "arts",
                "uniform"
            ]
        },
        {
            "no":1039,
            "code":"U+1F945",
            "emoji":"🥅",
            "description":"Goal Net",
            "keywords":[
                "goal",
                "net"
            ]
        },
        {
            "no":1040,
            "code":"U+26F3",
            "emoji":"⛳",
            "description":"Flag In Hole",
            "keywords":[
                "flag",
                "hole"
            ]
        },
        {
            "no":1041,
            "code":"U+26F8",
            "emoji":"⛸",
            "description":"Ice Skate",
            "keywords":[
                "ice",
                "skate"
            ]
        },
        {
            "no":1042,
            "code":"U+1F3A3",
            "emoji":"🎣",
            "description":"Fishing Pole",
            "keywords":[
                "fishing",
                "pole"
            ]
        },
        {
            "no":1043,
            "code":"U+1F93F",
            "emoji":"🤿",
            "description":"Diving Mask",
            "keywords":[
                "diving",
                "mask"
            ]
        },
        {
            "no":1044,
            "code":"U+1F3BD",
            "emoji":"🎽",
            "description":"Running Shirt",
            "keywords":[
                "running",
                "shirt"
            ]
        },
        {
            "no":1045,
            "code":"U+1F3BF",
            "emoji":"🎿",
            "description":"Skis",
            "keywords":[
                "skis"
            ]
        },
        {
            "no":1046,
            "code":"U+1F6F7",
            "emoji":"🛷",
            "description":"Sled",
            "keywords":[
                "sled"
            ]
        },
        {
            "no":1047,
            "code":"U+1F94C",
            "emoji":"🥌",
            "description":"Curling Stone",
            "keywords":[
                "curling",
                "stone"
            ]
        },
        {
            "no":1048,
            "code":"U+1F3AF",
            "emoji":"🎯",
            "description":"Bullseye",
            "keywords":[
                "bullseye"
            ]
        },
        {
            "no":1049,
            "code":"U+1FA80",
            "emoji":"🪀",
            "description":"Yo-Yo",
            "keywords":[
                "yo-yo"
            ]
        },
        {
            "no":1050,
            "code":"U+1FA81",
            "emoji":"🪁",
            "description":"Kite",
            "keywords":[
                "kite"
            ]
        },
        {
            "no":1051,
            "code":"U+1F3B1",
            "emoji":"🎱",
            "description":"Pool 8 Ball",
            "keywords":[
                "pool",
                "8",
                "ball"
            ]
        },
        {
            "no":1052,
            "code":"U+1F52E",
            "emoji":"🔮",
            "description":"Crystal Ball",
            "keywords":[
                "crystal",
                "ball"
            ]
        },
        // {
        //     "no":1053,
        //     "code":"U+1FA84",
        //     "emoji":"🪄",
        //     "description":"Magic Wand",
        //     "keywords":[
        //         "magic",
        //         "wand"
        //     ]
        // },
        {
            "no":1054,
            "code":"U+1F9FF",
            "emoji":"🧿",
            "description":"Nazar Amulet",
            "keywords":[
                "nazar",
                "amulet"
            ]
        },
        {
            "no":1055,
            "code":"U+1F3AE",
            "emoji":"🎮",
            "description":"Video Game",
            "keywords":[
                "video",
                "game"
            ]
        },
        {
            "no":1056,
            "code":"U+1F579",
            "emoji":"🕹",
            "description":"Joystick",
            "keywords":[
                "joystick"
            ]
        },
        {
            "no":1057,
            "code":"U+1F3B0",
            "emoji":"🎰",
            "description":"Slot Machine",
            "keywords":[
                "slot",
                "machine"
            ]
        },
        {
            "no":1058,
            "code":"U+1F3B2",
            "emoji":"🎲",
            "description":"Game Die",
            "keywords":[
                "game",
                "die"
            ]
        },
        {
            "no":1059,
            "code":"U+1F9E9",
            "emoji":"🧩",
            "description":"Puzzle Piece",
            "keywords":[
                "puzzle",
                "piece"
            ]
        },
        {
            "no":1060,
            "code":"U+1F9F8",
            "emoji":"🧸",
            "description":"Teddy Bear",
            "keywords":[
                "teddy",
                "bear"
            ]
        },
        // {
        //     "no":1061,
        //     "code":"U+1FA85",
        //     "emoji":"🪅",
        //     "description":"PiñAta",
        //     "keywords":[
        //         "piñata"
        //     ]
        // },
        // {
        //     "no":1062,
        //     "code":"U+1FA86",
        //     "emoji":"🪆",
        //     "description":"Nesting Dolls",
        //     "keywords":[
        //         "nesting",
        //         "dolls"
        //     ]
        // },
        {
            "no":1063,
            "code":"U+2660",
            "emoji":"♠",
            "description":"Spade Suit",
            "keywords":[
                "spade",
                "suit"
            ]
        },
        {
            "no":1064,
            "code":"U+2665",
            "emoji":"♥",
            "description":"Heart Suit",
            "keywords":[
                "heart",
                "suit"
            ]
        },
        {
            "no":1065,
            "code":"U+2666",
            "emoji":"♦",
            "description":"Diamond Suit",
            "keywords":[
                "diamond",
                "suit"
            ]
        },
        {
            "no":1066,
            "code":"U+2663",
            "emoji":"♣",
            "description":"Club Suit",
            "keywords":[
                "club",
                "suit"
            ]
        },
        {
            "no":1067,
            "code":"U+265F",
            "emoji":"♟",
            "description":"Chess Pawn",
            "keywords":[
                "chess",
                "pawn"
            ]
        },
        {
            "no":1068,
            "code":"U+1F0CF",
            "emoji":"🃏",
            "description":"Joker",
            "keywords":[
                "joker"
            ]
        },
        {
            "no":1069,
            "code":"U+1F004",
            "emoji":"🀄",
            "description":"Mahjong Red Dragon",
            "keywords":[
                "mahjong",
                "red",
                "dragon"
            ]
        },
        {
            "no":1070,
            "code":"U+1F3B4",
            "emoji":"🎴",
            "description":"Flower Playing Cards",
            "keywords":[
                "flower",
                "playing",
                "cards"
            ]
        },
        {
            "no":1071,
            "code":"U+1F3AD",
            "emoji":"🎭",
            "description":"Performing Arts",
            "keywords":[
                "performing",
                "arts"
            ]
        },
        {
            "no":1072,
            "code":"U+1F5BC",
            "emoji":"🖼",
            "description":"Framed Picture",
            "keywords":[
                "framed",
                "picture"
            ]
        },
        {
            "no":1073,
            "code":"U+1F3A8",
            "emoji":"🎨",
            "description":"Artist Palette",
            "keywords":[
                "artist",
                "palette"
            ]
        },
        {
            "no":1074,
            "code":"U+1F9F5",
            "emoji":"🧵",
            "description":"Thread",
            "keywords":[
                "thread"
            ]
        },
        // {
        //     "no":1075,
        //     "code":"U+1FAA1",
        //     "emoji":"🪡",
        //     "description":"Sewing Needle",
        //     "keywords":[
        //         "sewing",
        //         "needle"
        //     ]
        // },
        {
            "no":1076,
            "code":"U+1F9F6",
            "emoji":"🧶",
            "description":"Yarn",
            "keywords":[
                "yarn"
            ]
        },
        // {
        //     "no":1077,
        //     "code":"U+1FAA2",
        //     "emoji":"🪢",
        //     "description":"Knot",
        //     "keywords":[
        //         "knot"
        //     ]
        // }
    ],
    "Objects":[
        {
            "no":1078,
            "code":"U+1F453",
            "emoji":"👓",
            "description":"Glasses",
            "keywords":[
                "glasses"
            ]
        },
        {
            "no":1079,
            "code":"U+1F576",
            "emoji":"🕶",
            "description":"Sunglasses",
            "keywords":[
                "sunglasses"
            ]
        },
        {
            "no":1080,
            "code":"U+1F97D",
            "emoji":"🥽",
            "description":"Goggles",
            "keywords":[
                "goggles"
            ]
        },
        {
            "no":778,
            "code":"U+1F3FA",
            "emoji":"🏺",
            "description":"Amphora",
            "keywords":[
                "amphora"
            ]
        },
        {
            "no":1081,
            "code":"U+1F97C",
            "emoji":"🥼",
            "description":"Lab Coat",
            "keywords":[
                "lab",
                "coat"
            ]
        },
        {
            "no":1082,
            "code":"U+1F9BA",
            "emoji":"🦺",
            "description":"Safety Vest",
            "keywords":[
                "safety",
                "vest"
            ]
        },
        {
            "no":1083,
            "code":"U+1F454",
            "emoji":"👔",
            "description":"Necktie",
            "keywords":[
                "necktie"
            ]
        },
        {
            "no":1084,
            "code":"U+1F455",
            "emoji":"👕",
            "description":"T-Shirt",
            "keywords":[
                "t-shirt"
            ]
        },
        {
            "no":1085,
            "code":"U+1F456",
            "emoji":"👖",
            "description":"Jeans",
            "keywords":[
                "jeans"
            ]
        },
        {
            "no":1086,
            "code":"U+1F9E3",
            "emoji":"🧣",
            "description":"Scarf",
            "keywords":[
                "scarf"
            ]
        },
        {
            "no":1087,
            "code":"U+1F9E4",
            "emoji":"🧤",
            "description":"Gloves",
            "keywords":[
                "gloves"
            ]
        },
        {
            "no":1088,
            "code":"U+1F9E5",
            "emoji":"🧥",
            "description":"Coat",
            "keywords":[
                "coat"
            ]
        },
        {
            "no":1089,
            "code":"U+1F9E6",
            "emoji":"🧦",
            "description":"Socks",
            "keywords":[
                "socks"
            ]
        },
        {
            "no":1090,
            "code":"U+1F457",
            "emoji":"👗",
            "description":"Dress",
            "keywords":[
                "dress"
            ]
        },
        {
            "no":1091,
            "code":"U+1F458",
            "emoji":"👘",
            "description":"Kimono",
            "keywords":[
                "kimono"
            ]
        },
        {
            "no":1092,
            "code":"U+1F97B",
            "emoji":"🥻",
            "description":"Sari",
            "keywords":[
                "sari"
            ]
        },
        {
            "no":1093,
            "code":"U+1FA71",
            "emoji":"🩱",
            "description":"One-Piece Swimsuit",
            "keywords":[
                "one-piece",
                "swimsuit"
            ]
        },
        {
            "no":1094,
            "code":"U+1FA72",
            "emoji":"🩲",
            "description":"Briefs",
            "keywords":[
                "briefs"
            ]
        },
        {
            "no":1095,
            "code":"U+1FA73",
            "emoji":"🩳",
            "description":"Shorts",
            "keywords":[
                "shorts"
            ]
        },
        {
            "no":1096,
            "code":"U+1F459",
            "emoji":"👙",
            "description":"Bikini",
            "keywords":[
                "bikini"
            ]
        },
        {
            "no":1097,
            "code":"U+1F45A",
            "emoji":"👚",
            "description":"Woman’S Clothes",
            "keywords":[
                "woman’s",
                "clothes"
            ]
        },
        {
            "no":1098,
            "code":"U+1F45B",
            "emoji":"👛",
            "description":"Purse",
            "keywords":[
                "purse"
            ]
        },
        {
            "no":1099,
            "code":"U+1F45C",
            "emoji":"👜",
            "description":"Handbag",
            "keywords":[
                "handbag"
            ]
        },
        {
            "no":1100,
            "code":"U+1F45D",
            "emoji":"👝",
            "description":"Clutch Bag",
            "keywords":[
                "clutch",
                "bag"
            ]
        },
        {
            "no":1101,
            "code":"U+1F6CD",
            "emoji":"🛍",
            "description":"Shopping Bags",
            "keywords":[
                "shopping",
                "bags"
            ]
        },
        {
            "no":1102,
            "code":"U+1F392",
            "emoji":"🎒",
            "description":"Backpack",
            "keywords":[
                "backpack"
            ]
        },
        // {
        //     "no":1103,
        //     "code":"U+1FA74",
        //     "emoji":"🩴",
        //     "description":"Thong Sandal",
        //     "keywords":[
        //         "thong",
        //         "sandal"
        //     ]
        // },
        {
            "no":1104,
            "code":"U+1F45E",
            "emoji":"👞",
            "description":"Man’S Shoe",
            "keywords":[
                "man’s",
                "shoe"
            ]
        },
        {
            "no":1105,
            "code":"U+1F45F",
            "emoji":"👟",
            "description":"Running Shoe",
            "keywords":[
                "running",
                "shoe"
            ]
        },
        {
            "no":1106,
            "code":"U+1F97E",
            "emoji":"🥾",
            "description":"Hiking Boot",
            "keywords":[
                "hiking",
                "boot"
            ]
        },
        {
            "no":1107,
            "code":"U+1F97F",
            "emoji":"🥿",
            "description":"Flat Shoe",
            "keywords":[
                "flat",
                "shoe"
            ]
        },
        {
            "no":1108,
            "code":"U+1F460",
            "emoji":"👠",
            "description":"High-Heeled Shoe",
            "keywords":[
                "high-heeled",
                "shoe"
            ]
        },
        {
            "no":1109,
            "code":"U+1F461",
            "emoji":"👡",
            "description":"Woman’S Sandal",
            "keywords":[
                "woman’s",
                "sandal"
            ]
        },
        {
            "no":1110,
            "code":"U+1FA70",
            "emoji":"🩰",
            "description":"Ballet Shoes",
            "keywords":[
                "ballet",
                "shoes"
            ]
        },
        {
            "no":1111,
            "code":"U+1F462",
            "emoji":"👢",
            "description":"Woman’S Boot",
            "keywords":[
                "woman’s",
                "boot"
            ]
        },
        {
            "no":1112,
            "code":"U+1F451",
            "emoji":"👑",
            "description":"Crown",
            "keywords":[
                "crown"
            ]
        },
        {
            "no":1113,
            "code":"U+1F452",
            "emoji":"👒",
            "description":"Woman’S Hat",
            "keywords":[
                "woman’s",
                "hat"
            ]
        },
        {
            "no":1114,
            "code":"U+1F3A9",
            "emoji":"🎩",
            "description":"Top Hat",
            "keywords":[
                "top",
                "hat"
            ]
        },
        {
            "no":1115,
            "code":"U+1F393",
            "emoji":"🎓",
            "description":"Graduation Cap",
            "keywords":[
                "graduation",
                "cap"
            ]
        },
        {
            "no":1116,
            "code":"U+1F9E2",
            "emoji":"🧢",
            "description":"Billed Cap",
            "keywords":[
                "billed",
                "cap"
            ]
        },
        // {
        //     "no":1117,
        //     "code":"U+1FA96",
        //     "emoji":"🪖",
        //     "description":"Military Helmet",
        //     "keywords":[
        //         "military",
        //         "helmet"
        //     ]
        // },
        {
            "no":1118,
            "code":"U+26D1",
            "emoji":"⛑",
            "description":"Rescue Worker’S Helmet",
            "keywords":[
                "rescue",
                "worker’s",
                "helmet"
            ]
        },
        {
            "no":1119,
            "code":"U+1F4FF",
            "emoji":"📿",
            "description":"Prayer Beads",
            "keywords":[
                "prayer",
                "beads"
            ]
        },
        {
            "no":1120,
            "code":"U+1F484",
            "emoji":"💄",
            "description":"Lipstick",
            "keywords":[
                "lipstick"
            ]
        },
        {
            "no":1121,
            "code":"U+1F48D",
            "emoji":"💍",
            "description":"Ring",
            "keywords":[
                "ring"
            ]
        },
        {
            "no":1122,
            "code":"U+1F48E",
            "emoji":"💎",
            "description":"Gem Stone",
            "keywords":[
                "gem",
                "stone"
            ]
        },
        {
            "no":1127,
            "code":"U+1F4E2",
            "emoji":"📢",
            "description":"Loudspeaker",
            "keywords":[
                "loudspeaker"
            ]
        },
        {
            "no":1128,
            "code":"U+1F4E3",
            "emoji":"📣",
            "description":"Megaphone",
            "keywords":[
                "megaphone"
            ]
        },
        {
            "no":1129,
            "code":"U+1F4EF",
            "emoji":"📯",
            "description":"Postal Horn",
            "keywords":[
                "postal",
                "horn"
            ]
        },
        {
            "no":1135,
            "code":"U+1F399",
            "emoji":"🎙",
            "description":"Studio Microphone",
            "keywords":[
                "studio",
                "microphone"
            ]
        },
        {
            "no":1136,
            "code":"U+1F39A",
            "emoji":"🎚",
            "description":"Level Slider",
            "keywords":[
                "level",
                "slider"
            ]
        },
        {
            "no":1137,
            "code":"U+1F39B",
            "emoji":"🎛",
            "description":"Control Knobs",
            "keywords":[
                "control",
                "knobs"
            ]
        },
        {
            "no":1138,
            "code":"U+1F3A4",
            "emoji":"🎤",
            "description":"Microphone",
            "keywords":[
                "microphone"
            ]
        },
        {
            "no":1139,
            "code":"U+1F3A7",
            "emoji":"🎧",
            "description":"Headphone",
            "keywords":[
                "headphone"
            ]
        },
        {
            "no":1140,
            "code":"U+1F4FB",
            "emoji":"📻",
            "description":"Radio",
            "keywords":[
                "radio"
            ]
        },
        {
            "no":1141,
            "code":"U+1F3B7",
            "emoji":"🎷",
            "description":"Saxophone",
            "keywords":[
                "saxophone"
            ]
        },
        // {
        //     "no":1142,
        //     "code":"U+1FA97",
        //     "emoji":"🪗",
        //     "description":"Accordion",
        //     "keywords":[
        //         "accordion"
        //     ]
        // },
        {
            "no":1143,
            "code":"U+1F3B8",
            "emoji":"🎸",
            "description":"Guitar",
            "keywords":[
                "guitar"
            ]
        },
        {
            "no":1144,
            "code":"U+1F3B9",
            "emoji":"🎹",
            "description":"Musical Keyboard",
            "keywords":[
                "musical",
                "keyboard"
            ]
        },
        {
            "no":1145,
            "code":"U+1F3BA",
            "emoji":"🎺",
            "description":"Trumpet",
            "keywords":[
                "trumpet"
            ]
        },
        {
            "no":1146,
            "code":"U+1F3BB",
            "emoji":"🎻",
            "description":"Violin",
            "keywords":[
                "violin"
            ]
        },
        {
            "no":1147,
            "code":"U+1FA95",
            "emoji":"🪕",
            "description":"Banjo",
            "keywords":[
                "banjo"
            ]
        },
        {
            "no":1148,
            "code":"U+1F941",
            "emoji":"🥁",
            "description":"Drum",
            "keywords":[
                "drum"
            ]
        },
        // {
        //     "no":1149,
        //     "code":"U+1FA98",
        //     "emoji":"🪘",
        //     "description":"Long Drum",
        //     "keywords":[
        //         "long",
        //         "drum"
        //     ]
        // },
        {
            "no":1150,
            "code":"U+1F4F1",
            "emoji":"📱",
            "description":"Mobile Phone",
            "keywords":[
                "mobile",
                "phone"
            ]
        },
        {
            "no":1151,
            "code":"U+1F4F2",
            "emoji":"📲",
            "description":"Mobile Phone With Arrow",
            "keywords":[
                "mobile",
                "phone",
                "arrow"
            ]
        },
        {
            "no":1152,
            "code":"U+260E",
            "emoji":"☎",
            "description":"Telephone",
            "keywords":[
                "telephone"
            ]
        },
        {
            "no":1153,
            "code":"U+1F4DE",
            "emoji":"📞",
            "description":"Telephone Receiver",
            "keywords":[
                "telephone",
                "receiver"
            ]
        },
        {
            "no":1154,
            "code":"U+1F4DF",
            "emoji":"📟",
            "description":"Pager",
            "keywords":[
                "pager"
            ]
        },
        {
            "no":1155,
            "code":"U+1F4E0",
            "emoji":"📠",
            "description":"Fax Machine",
            "keywords":[
                "fax",
                "machine"
            ]
        },
        {
            "no":1156,
            "code":"U+1F50B",
            "emoji":"🔋",
            "description":"Battery",
            "keywords":[
                "battery"
            ]
        },
        {
            "no":1157,
            "code":"U+1F50C",
            "emoji":"🔌",
            "description":"Electric Plug",
            "keywords":[
                "electric",
                "plug"
            ]
        },
        {
            "no":1158,
            "code":"U+1F4BB",
            "emoji":"💻",
            "description":"Laptop",
            "keywords":[
                "laptop"
            ]
        },
        {
            "no":1159,
            "code":"U+1F5A5",
            "emoji":"🖥",
            "description":"Desktop Computer",
            "keywords":[
                "desktop",
                "computer"
            ]
        },
        {
            "no":1160,
            "code":"U+1F5A8",
            "emoji":"🖨",
            "description":"Printer",
            "keywords":[
                "printer"
            ]
        },
        {
            "no":1161,
            "code":"U+2328",
            "emoji":"⌨",
            "description":"Keyboard",
            "keywords":[
                "keyboard"
            ]
        },
        {
            "no":1162,
            "code":"U+1F5B1",
            "emoji":"🖱",
            "description":"Computer Mouse",
            "keywords":[
                "computer",
                "mouse"
            ]
        },
        {
            "no":1163,
            "code":"U+1F5B2",
            "emoji":"🖲",
            "description":"Trackball",
            "keywords":[
                "trackball"
            ]
        },
        {
            "no":1164,
            "code":"U+1F4BD",
            "emoji":"💽",
            "description":"Computer Disk",
            "keywords":[
                "computer",
                "disk"
            ]
        },
        {
            "no":1165,
            "code":"U+1F4BE",
            "emoji":"💾",
            "description":"Floppy Disk",
            "keywords":[
                "floppy",
                "disk"
            ]
        },
        {
            "no":1166,
            "code":"U+1F4BF",
            "emoji":"💿",
            "description":"Optical Disk",
            "keywords":[
                "optical",
                "disk"
            ]
        },
        {
            "no":1167,
            "code":"U+1F4C0",
            "emoji":"📀",
            "description":"Dvd",
            "keywords":[
                "dvd"
            ]
        },
        {
            "no":1168,
            "code":"U+1F9EE",
            "emoji":"🧮",
            "description":"Abacus",
            "keywords":[
                "abacus"
            ]
        },
        {
            "no":1169,
            "code":"U+1F3A5",
            "emoji":"🎥",
            "description":"Movie Camera",
            "keywords":[
                "movie",
                "camera"
            ]
        },
        {
            "no":1170,
            "code":"U+1F39E",
            "emoji":"🎞",
            "description":"Film Frames",
            "keywords":[
                "film",
                "frames"
            ]
        },
        {
            "no":1171,
            "code":"U+1F4FD",
            "emoji":"📽",
            "description":"Film Projector",
            "keywords":[
                "film",
                "projector"
            ]
        },
        {
            "no":1172,
            "code":"U+1F3AC",
            "emoji":"🎬",
            "description":"Clapper Board",
            "keywords":[
                "clapper",
                "board"
            ]
        },
        {
            "no":1173,
            "code":"U+1F4FA",
            "emoji":"📺",
            "description":"Television",
            "keywords":[
                "television"
            ]
        },
        {
            "no":1174,
            "code":"U+1F4F7",
            "emoji":"📷",
            "description":"Camera",
            "keywords":[
                "camera"
            ]
        },
        {
            "no":1175,
            "code":"U+1F4F8",
            "emoji":"📸",
            "description":"Camera With Flash",
            "keywords":[
                "camera",
                "flash"
            ]
        },
        {
            "no":1176,
            "code":"U+1F4F9",
            "emoji":"📹",
            "description":"Video Camera",
            "keywords":[
                "video",
                "camera"
            ]
        },
        {
            "no":1177,
            "code":"U+1F4FC",
            "emoji":"📼",
            "description":"Videocassette",
            "keywords":[
                "videocassette"
            ]
        },
        {
            "no":1178,
            "code":"U+1F50D",
            "emoji":"🔍",
            "description":"Magnifying Glass Tilted Left",
            "keywords":[
                "magnifying",
                "glass",
                "tilted",
                "left"
            ]
        },
        {
            "no":1179,
            "code":"U+1F50E",
            "emoji":"🔎",
            "description":"Magnifying Glass Tilted Right",
            "keywords":[
                "magnifying",
                "glass",
                "tilted",
                "right"
            ]
        },
        {
            "no":1180,
            "code":"U+1F56F",
            "emoji":"🕯",
            "description":"Candle",
            "keywords":[
                "candle"
            ]
        },
        {
            "no":1181,
            "code":"U+1F4A1",
            "emoji":"💡",
            "description":"Light Bulb",
            "keywords":[
                "light",
                "bulb"
            ]
        },
        {
            "no":1182,
            "code":"U+1F526",
            "emoji":"🔦",
            "description":"Flashlight",
            "keywords":[
                "flashlight"
            ]
        },
        {
            "no":1183,
            "code":"U+1F3EE",
            "emoji":"🏮",
            "description":"Red Paper Lantern",
            "keywords":[
                "red",
                "paper",
                "lantern"
            ]
        },
        {
            "no":1184,
            "code":"U+1FA94",
            "emoji":"🪔",
            "description":"Diya Lamp",
            "keywords":[
                "diya",
                "lamp"
            ]
        },
        {
            "no":1185,
            "code":"U+1F4D4",
            "emoji":"📔",
            "description":"Notebook With Decorative Cover",
            "keywords":[
                "notebook",
                "decorative",
                "cover"
            ]
        },
        {
            "no":1186,
            "code":"U+1F4D5",
            "emoji":"📕",
            "description":"Closed Book",
            "keywords":[
                "closed",
                "book"
            ]
        },
        {
            "no":1187,
            "code":"U+1F4D6",
            "emoji":"📖",
            "description":"Open Book",
            "keywords":[
                "open",
                "book"
            ]
        },
        {
            "no":1188,
            "code":"U+1F4D7",
            "emoji":"📗",
            "description":"Green Book",
            "keywords":[
                "green",
                "book"
            ]
        },
        {
            "no":1189,
            "code":"U+1F4D8",
            "emoji":"📘",
            "description":"Blue Book",
            "keywords":[
                "blue",
                "book"
            ]
        },
        {
            "no":1190,
            "code":"U+1F4D9",
            "emoji":"📙",
            "description":"Orange Book",
            "keywords":[
                "orange",
                "book"
            ]
        },
        {
            "no":1191,
            "code":"U+1F4DA",
            "emoji":"📚",
            "description":"Books",
            "keywords":[
                "books"
            ]
        },
        {
            "no":1192,
            "code":"U+1F4D3",
            "emoji":"📓",
            "description":"Notebook",
            "keywords":[
                "notebook"
            ]
        },
        {
            "no":1193,
            "code":"U+1F4D2",
            "emoji":"📒",
            "description":"Ledger",
            "keywords":[
                "ledger"
            ]
        },
        {
            "no":1194,
            "code":"U+1F4C3",
            "emoji":"📃",
            "description":"Page With Curl",
            "keywords":[
                "page",
                "curl"
            ]
        },
        {
            "no":1195,
            "code":"U+1F4DC",
            "emoji":"📜",
            "description":"Scroll",
            "keywords":[
                "scroll"
            ]
        },
        {
            "no":1196,
            "code":"U+1F4C4",
            "emoji":"📄",
            "description":"Page Facing Up",
            "keywords":[
                "page",
                "facing",
                "up"
            ]
        },
        {
            "no":1197,
            "code":"U+1F4F0",
            "emoji":"📰",
            "description":"Newspaper",
            "keywords":[
                "newspaper"
            ]
        },
        {
            "no":1198,
            "code":"U+1F5DE",
            "emoji":"🗞",
            "description":"Rolled-Up Newspaper",
            "keywords":[
                "rolled-up",
                "newspaper"
            ]
        },
        {
            "no":1199,
            "code":"U+1F4D1",
            "emoji":"📑",
            "description":"Bookmark Tabs",
            "keywords":[
                "bookmark",
                "tabs"
            ]
        },
        {
            "no":1200,
            "code":"U+1F516",
            "emoji":"🔖",
            "description":"Bookmark",
            "keywords":[
                "bookmark"
            ]
        },
        {
            "no":1201,
            "code":"U+1F3F7",
            "emoji":"🏷",
            "description":"Label",
            "keywords":[
                "label"
            ]
        },
        {
            "no":1202,
            "code":"U+1F4B0",
            "emoji":"💰",
            "description":"Money Bag",
            "keywords":[
                "money",
                "bag"
            ]
        },
        // {
        //     "no":1203,
        //     "code":"U+1FA99",
        //     "emoji":"🪙",
        //     "description":"Coin",
        //     "keywords":[
        //         "coin"
        //     ]
        // },
        {
            "no":1204,
            "code":"U+1F4B4",
            "emoji":"💴",
            "description":"Yen Banknote",
            "keywords":[
                "yen",
                "banknote"
            ]
        },
        {
            "no":1205,
            "code":"U+1F4B5",
            "emoji":"💵",
            "description":"Dollar Banknote",
            "keywords":[
                "dollar",
                "banknote"
            ]
        },
        {
            "no":1206,
            "code":"U+1F4B6",
            "emoji":"💶",
            "description":"Euro Banknote",
            "keywords":[
                "euro",
                "banknote"
            ]
        },
        {
            "no":1207,
            "code":"U+1F4B7",
            "emoji":"💷",
            "description":"Pound Banknote",
            "keywords":[
                "pound",
                "banknote"
            ]
        },
        {
            "no":1208,
            "code":"U+1F4B8",
            "emoji":"💸",
            "description":"Money With Wings",
            "keywords":[
                "money",
                "wings"
            ]
        },
        {
            "no":1209,
            "code":"U+1F4B3",
            "emoji":"💳",
            "description":"Credit Card",
            "keywords":[
                "credit",
                "card"
            ]
        },
        {
            "no":1210,
            "code":"U+1F9FE",
            "emoji":"🧾",
            "description":"Receipt",
            "keywords":[
                "receipt"
            ]
        },
        {
            "no":1211,
            "code":"U+1F4B9",
            "emoji":"💹",
            "description":"Chart Increasing With Yen",
            "keywords":[
                "chart",
                "increasing",
                "yen"
            ]
        },
        {
            "no":1212,
            "code":"U+2709",
            "emoji":"✉",
            "description":"Envelope",
            "keywords":[
                "envelope"
            ]
        },
        {
            "no":1213,
            "code":"U+1F4E7",
            "emoji":"📧",
            "description":"E-Mail",
            "keywords":[
                "e-mail"
            ]
        },
        {
            "no":1214,
            "code":"U+1F4E8",
            "emoji":"📨",
            "description":"Incoming Envelope",
            "keywords":[
                "incoming",
                "envelope"
            ]
        },
        {
            "no":1215,
            "code":"U+1F4E9",
            "emoji":"📩",
            "description":"Envelope With Arrow",
            "keywords":[
                "envelope",
                "arrow"
            ]
        },
        {
            "no":1216,
            "code":"U+1F4E4",
            "emoji":"📤",
            "description":"Outbox Tray",
            "keywords":[
                "outbox",
                "tray"
            ]
        },
        {
            "no":1217,
            "code":"U+1F4E5",
            "emoji":"📥",
            "description":"Inbox Tray",
            "keywords":[
                "inbox",
                "tray"
            ]
        },
        {
            "no":1218,
            "code":"U+1F4E6",
            "emoji":"📦",
            "description":"Package",
            "keywords":[
                "package"
            ]
        },
        {
            "no":1219,
            "code":"U+1F4EB",
            "emoji":"📫",
            "description":"Closed Mailbox With Raised Flag",
            "keywords":[
                "closed",
                "mailbox",
                "raised",
                "flag"
            ]
        },
        {
            "no":1220,
            "code":"U+1F4EA",
            "emoji":"📪",
            "description":"Closed Mailbox With Lowered Flag",
            "keywords":[
                "closed",
                "mailbox",
                "lowered",
                "flag"
            ]
        },
        {
            "no":1221,
            "code":"U+1F4EC",
            "emoji":"📬",
            "description":"Open Mailbox With Raised Flag",
            "keywords":[
                "open",
                "mailbox",
                "raised",
                "flag"
            ]
        },
        {
            "no":1222,
            "code":"U+1F4ED",
            "emoji":"📭",
            "description":"Open Mailbox With Lowered Flag",
            "keywords":[
                "open",
                "mailbox",
                "lowered",
                "flag"
            ]
        },
        {
            "no":1223,
            "code":"U+1F4EE",
            "emoji":"📮",
            "description":"Postbox",
            "keywords":[
                "postbox"
            ]
        },
        {
            "no":1224,
            "code":"U+1F5F3",
            "emoji":"🗳",
            "description":"Ballot Box With Ballot",
            "keywords":[
                "ballot",
                "box",
                "ballot"
            ]
        },
        {
            "no":1225,
            "code":"U+270F",
            "emoji":"✏",
            "description":"Pencil",
            "keywords":[
                "pencil"
            ]
        },
        {
            "no":1226,
            "code":"U+2712",
            "emoji":"✒",
            "description":"Black Nib",
            "keywords":[
                "black",
                "nib"
            ]
        },
        {
            "no":1227,
            "code":"U+1F58B",
            "emoji":"🖋",
            "description":"Fountain Pen",
            "keywords":[
                "fountain",
                "pen"
            ]
        },
        {
            "no":1228,
            "code":"U+1F58A",
            "emoji":"🖊",
            "description":"Pen",
            "keywords":[
                "pen"
            ]
        },
        {
            "no":1229,
            "code":"U+1F58C",
            "emoji":"🖌",
            "description":"Paintbrush",
            "keywords":[
                "paintbrush"
            ]
        },
        {
            "no":1230,
            "code":"U+1F58D",
            "emoji":"🖍",
            "description":"Crayon",
            "keywords":[
                "crayon"
            ]
        },
        {
            "no":1231,
            "code":"U+1F4DD",
            "emoji":"📝",
            "description":"Memo",
            "keywords":[
                "memo"
            ]
        },
        {
            "no":1232,
            "code":"U+1F4BC",
            "emoji":"💼",
            "description":"Briefcase",
            "keywords":[
                "briefcase"
            ]
        },
        {
            "no":1233,
            "code":"U+1F4C1",
            "emoji":"📁",
            "description":"File Folder",
            "keywords":[
                "file",
                "folder"
            ]
        },
        {
            "no":1234,
            "code":"U+1F4C2",
            "emoji":"📂",
            "description":"Open File Folder",
            "keywords":[
                "open",
                "file",
                "folder"
            ]
        },
        {
            "no":1235,
            "code":"U+1F5C2",
            "emoji":"🗂",
            "description":"Card Index Dividers",
            "keywords":[
                "card",
                "index",
                "dividers"
            ]
        },
        {
            "no":1236,
            "code":"U+1F4C5",
            "emoji":"📅",
            "description":"Calendar",
            "keywords":[
                "calendar"
            ]
        },
        {
            "no":1237,
            "code":"U+1F4C6",
            "emoji":"📆",
            "description":"Tear-Off Calendar",
            "keywords":[
                "tear-off",
                "calendar"
            ]
        },
        {
            "no":1238,
            "code":"U+1F5D2",
            "emoji":"🗒",
            "description":"Spiral Notepad",
            "keywords":[
                "spiral",
                "notepad"
            ]
        },
        {
            "no":1239,
            "code":"U+1F5D3",
            "emoji":"🗓",
            "description":"Spiral Calendar",
            "keywords":[
                "spiral",
                "calendar"
            ]
        },
        {
            "no":1240,
            "code":"U+1F4C7",
            "emoji":"📇",
            "description":"Card Index",
            "keywords":[
                "card",
                "index"
            ]
        },
        {
            "no":1241,
            "code":"U+1F4C8",
            "emoji":"📈",
            "description":"Chart Increasing",
            "keywords":[
                "chart",
                "increasing"
            ]
        },
        {
            "no":1242,
            "code":"U+1F4C9",
            "emoji":"📉",
            "description":"Chart Decreasing",
            "keywords":[
                "chart",
                "decreasing"
            ]
        },
        {
            "no":1243,
            "code":"U+1F4CA",
            "emoji":"📊",
            "description":"Bar Chart",
            "keywords":[
                "bar",
                "chart"
            ]
        },
        {
            "no":1244,
            "code":"U+1F4CB",
            "emoji":"📋",
            "description":"Clipboard",
            "keywords":[
                "clipboard"
            ]
        },
        {
            "no":1245,
            "code":"U+1F4CC",
            "emoji":"📌",
            "description":"Pushpin",
            "keywords":[
                "pushpin"
            ]
        },
        {
            "no":1246,
            "code":"U+1F4CD",
            "emoji":"📍",
            "description":"Round Pushpin",
            "keywords":[
                "round",
                "pushpin"
            ]
        },
        {
            "no":1247,
            "code":"U+1F4CE",
            "emoji":"📎",
            "description":"Paperclip",
            "keywords":[
                "paperclip"
            ]
        },
        {
            "no":1248,
            "code":"U+1F587",
            "emoji":"🖇",
            "description":"Linked Paperclips",
            "keywords":[
                "linked",
                "paperclips"
            ]
        },
        {
            "no":1249,
            "code":"U+1F4CF",
            "emoji":"📏",
            "description":"Straight Ruler",
            "keywords":[
                "straight",
                "ruler"
            ]
        },
        {
            "no":1250,
            "code":"U+1F4D0",
            "emoji":"📐",
            "description":"Triangular Ruler",
            "keywords":[
                "triangular",
                "ruler"
            ]
        },
        {
            "no":1251,
            "code":"U+2702",
            "emoji":"✂",
            "description":"Scissors",
            "keywords":[
                "scissors"
            ]
        },
        {
            "no":1252,
            "code":"U+1F5C3",
            "emoji":"🗃",
            "description":"Card File Box",
            "keywords":[
                "card",
                "file",
                "box"
            ]
        },
        {
            "no":1253,
            "code":"U+1F5C4",
            "emoji":"🗄",
            "description":"File Cabinet",
            "keywords":[
                "file",
                "cabinet"
            ]
        },
        {
            "no":1254,
            "code":"U+1F5D1",
            "emoji":"🗑",
            "description":"Wastebasket",
            "keywords":[
                "wastebasket"
            ]
        },
        {
            "no":1255,
            "code":"U+1F512",
            "emoji":"🔒",
            "description":"Locked",
            "keywords":[
                "locked"
            ]
        },
        {
            "no":1256,
            "code":"U+1F513",
            "emoji":"🔓",
            "description":"Unlocked",
            "keywords":[
                "unlocked"
            ]
        },
        {
            "no":1257,
            "code":"U+1F50F",
            "emoji":"🔏",
            "description":"Locked With Pen",
            "keywords":[
                "locked",
                "pen"
            ]
        },
        {
            "no":1258,
            "code":"U+1F510",
            "emoji":"🔐",
            "description":"Locked With Key",
            "keywords":[
                "locked",
                "key"
            ]
        },
        {
            "no":1259,
            "code":"U+1F511",
            "emoji":"🔑",
            "description":"Key",
            "keywords":[
                "key"
            ]
        },
        {
            "no":1260,
            "code":"U+1F5DD",
            "emoji":"🗝",
            "description":"Old Key",
            "keywords":[
                "old",
                "key"
            ]
        },
        {
            "no":1261,
            "code":"U+1F528",
            "emoji":"🔨",
            "description":"Hammer",
            "keywords":[
                "hammer"
            ]
        },
        {
            "no":1262,
            "code":"U+1FA93",
            "emoji":"🪓",
            "description":"Axe",
            "keywords":[
                "axe"
            ]
        },
        {
            "no":1263,
            "code":"U+26CF",
            "emoji":"⛏",
            "description":"Pick",
            "keywords":[
                "pick"
            ]
        },
        {
            "no":1264,
            "code":"U+2692",
            "emoji":"⚒",
            "description":"Hammer And Pick",
            "keywords":[
                "hammer",
                "pick"
            ]
        },
        {
            "no":1265,
            "code":"U+1F6E0",
            "emoji":"🛠",
            "description":"Hammer And Wrench",
            "keywords":[
                "hammer",
                "wrench"
            ]
        },
        {
            "no":1266,
            "code":"U+1F5E1",
            "emoji":"🗡",
            "description":"Dagger",
            "keywords":[
                "dagger"
            ]
        },
        {
            "no":1267,
            "code":"U+2694",
            "emoji":"⚔",
            "description":"Crossed Swords",
            "keywords":[
                "crossed",
                "swords"
            ]
        },
        {
            "no":1268,
            "code":"U+1F52B",
            "emoji":"🔫",
            "description":"Water Pistol",
            "keywords":[
                "water",
                "pistol"
            ]
        },
        {
            "no":150,
            "code":"U+1F4A3",
            "emoji":"💣",
            "description":"Bomb",
            "keywords":[
                "bomb"
            ]
        },
        // {
        //     "no":1269,
        //     "code":"U+1FA83",
        //     "emoji":"🪃",
        //     "description":"Boomerang",
        //     "keywords":[
        //         "boomerang"
        //     ]
        // },
        {
            "no":1270,
            "code":"U+1F3F9",
            "emoji":"🏹",
            "description":"Bow And Arrow",
            "keywords":[
                "bow",
                "arrow"
            ]
        },
        {
            "no":1271,
            "code":"U+1F6E1",
            "emoji":"🛡",
            "description":"Shield",
            "keywords":[
                "shield"
            ]
        },
        // {
        //     "no":1272,
        //     "code":"U+1FA9A",
        //     "emoji":"🪚",
        //     "description":"Carpentry Saw",
        //     "keywords":[
        //         "carpentry",
        //         "saw"
        //     ]
        // },
        {
            "no":1273,
            "code":"U+1F527",
            "emoji":"🔧",
            "description":"Wrench",
            "keywords":[
                "wrench"
            ]
        },
        // {
        //     "no":1274,
        //     "code":"U+1FA9B",
        //     "emoji":"🪛",
        //     "description":"Screwdriver",
        //     "keywords":[
        //         "screwdriver"
        //     ]
        // },
        {
            "no":1275,
            "code":"U+1F529",
            "emoji":"🔩",
            "description":"Nut And Bolt",
            "keywords":[
                "nut",
                "bolt"
            ]
        },
        {
            "no":1276,
            "code":"U+2699",
            "emoji":"⚙",
            "description":"Gear",
            "keywords":[
                "gear"
            ]
        },
        {
            "no":1277,
            "code":"U+1F5DC",
            "emoji":"🗜",
            "description":"Clamp",
            "keywords":[
                "clamp"
            ]
        },
        {
            "no":1278,
            "code":"U+2696",
            "emoji":"⚖",
            "description":"Balance Scale",
            "keywords":[
                "balance",
                "scale"
            ]
        },
        {
            "no":1279,
            "code":"U+1F9AF",
            "emoji":"🦯",
            "description":"White Cane",
            "keywords":[
                "white",
                "cane"
            ]
        },
        {
            "no":1280,
            "code":"U+1F517",
            "emoji":"🔗",
            "description":"Link",
            "keywords":[
                "link"
            ]
        },
        {
            "no":1281,
            "code":"U+26D3",
            "emoji":"⛓",
            "description":"Chains",
            "keywords":[
                "chains"
            ]
        },
        // {
        //     "no":1282,
        //     "code":"U+1FA9D",
        //     "emoji":"🪝",
        //     "description":"Hook",
        //     "keywords":[
        //         "hook"
        //     ]
        // },
        {
            "no":1283,
            "code":"U+1F9F0",
            "emoji":"🧰",
            "description":"Toolbox",
            "keywords":[
                "toolbox"
            ]
        },
        {
            "no":1284,
            "code":"U+1F9F2",
            "emoji":"🧲",
            "description":"Magnet",
            "keywords":[
                "magnet"
            ]
        },
        // {
        //     "no":1285,
        //     "code":"U+1FA9C",
        //     "emoji":"🪜",
        //     "description":"Ladder",
        //     "keywords":[
        //         "ladder"
        //     ]
        // },
        {
            "no":1286,
            "code":"U+2697",
            "emoji":"⚗",
            "description":"Alembic",
            "keywords":[
                "alembic"
            ]
        },
        {
            "no":1287,
            "code":"U+1F9EA",
            "emoji":"🧪",
            "description":"Test Tube",
            "keywords":[
                "test",
                "tube"
            ]
        },
        {
            "no":1288,
            "code":"U+1F9EB",
            "emoji":"🧫",
            "description":"Petri Dish",
            "keywords":[
                "petri",
                "dish"
            ]
        },
        {
            "no":1289,
            "code":"U+1F9EC",
            "emoji":"🧬",
            "description":"Dna",
            "keywords":[
                "dna"
            ]
        },
        {
            "no":1290,
            "code":"U+1F52C",
            "emoji":"🔬",
            "description":"Microscope",
            "keywords":[
                "microscope"
            ]
        },
        {
            "no":1291,
            "code":"U+1F52D",
            "emoji":"🔭",
            "description":"Telescope",
            "keywords":[
                "telescope"
            ]
        },
        {
            "no":1292,
            "code":"U+1F4E1",
            "emoji":"📡",
            "description":"Satellite Antenna",
            "keywords":[
                "satellite",
                "antenna"
            ]
        },
        {
            "no":1293,
            "code":"U+1F489",
            "emoji":"💉",
            "description":"Syringe",
            "keywords":[
                "syringe"
            ]
        },
        {
            "no":1294,
            "code":"U+1FA78",
            "emoji":"🩸",
            "description":"Drop Of Blood",
            "keywords":[
                "drop",
                "blood"
            ]
        },
        {
            "no":1295,
            "code":"U+1F48A",
            "emoji":"💊",
            "description":"Pill",
            "keywords":[
                "pill"
            ]
        },
        {
            "no":1296,
            "code":"U+1FA79",
            "emoji":"🩹",
            "description":"Adhesive Bandage",
            "keywords":[
                "adhesive",
                "bandage"
            ]
        },
        {
            "no":1297,
            "code":"U+1FA7A",
            "emoji":"🩺",
            "description":"Stethoscope",
            "keywords":[
                "stethoscope"
            ]
        },
        {
            "no":1298,
            "code":"U+1F6AA",
            "emoji":"🚪",
            "description":"Door",
            "keywords":[
                "door"
            ]
        },
        // {
        //     "no":1299,
        //     "code":"U+1F6D7",
        //     "emoji":"🛗",
        //     "description":"Elevator",
        //     "keywords":[
        //         "elevator"
        //     ]
        // },
        // {
        //     "no":1300,
        //     "code":"U+1FA9E",
        //     "emoji":"🪞",
        //     "description":"Mirror",
        //     "keywords":[
        //         "mirror"
        //     ]
        // },
        // {
        //     "no":1301,
        //     "code":"U+1FA9F",
        //     "emoji":"🪟",
        //     "description":"Window",
        //     "keywords":[
        //         "window"
        //     ]
        // },
        {
            "no":1302,
            "code":"U+1F6CF",
            "emoji":"🛏",
            "description":"Bed",
            "keywords":[
                "bed"
            ]
        },
        {
            "no":1303,
            "code":"U+1F6CB",
            "emoji":"🛋",
            "description":"Couch And Lamp",
            "keywords":[
                "couch",
                "lamp"
            ]
        },
        {
            "no":1304,
            "code":"U+1FA91",
            "emoji":"🪑",
            "description":"Chair",
            "keywords":[
                "chair"
            ]
        },
        {
            "no":1305,
            "code":"U+1F6BD",
            "emoji":"🚽",
            "description":"Toilet",
            "keywords":[
                "toilet"
            ]
        },
        // {
        //     "no":1306,
        //     "code":"U+1FAA0",
        //     "emoji":"🪠",
        //     "description":"Plunger",
        //     "keywords":[
        //         "plunger"
        //     ]
        // },
        {
            "no":1307,
            "code":"U+1F6BF",
            "emoji":"🚿",
            "description":"Shower",
            "keywords":[
                "shower"
            ]
        },
        {
            "no":1308,
            "code":"U+1F6C1",
            "emoji":"🛁",
            "description":"Bathtub",
            "keywords":[
                "bathtub"
            ]
        },
        // {
        //     "no":1309,
        //     "code":"U+1FAA4",
        //     "emoji":"🪤",
        //     "description":"Mouse Trap",
        //     "keywords":[
        //         "mouse",
        //         "trap"
        //     ]
        // },
        {
            "no":1310,
            "code":"U+1FA92",
            "emoji":"🪒",
            "description":"Razor",
            "keywords":[
                "razor"
            ]
        },
        {
            "no":1311,
            "code":"U+1F9F4",
            "emoji":"🧴",
            "description":"Lotion Bottle",
            "keywords":[
                "lotion",
                "bottle"
            ]
        },
        {
            "no":1312,
            "code":"U+1F9F7",
            "emoji":"🧷",
            "description":"Safety Pin",
            "keywords":[
                "safety",
                "pin"
            ]
        },
        {
            "no":1313,
            "code":"U+1F9F9",
            "emoji":"🧹",
            "description":"Broom",
            "keywords":[
                "broom"
            ]
        },
        {
            "no":1314,
            "code":"U+1F9FA",
            "emoji":"🧺",
            "description":"Basket",
            "keywords":[
                "basket"
            ]
        },
        {
            "no":1315,
            "code":"U+1F9FB",
            "emoji":"🧻",
            "description":"Roll Of Paper",
            "keywords":[
                "roll",
                "paper"
            ]
        },
        // {
        //     "no":1316,
        //     "code":"U+1FAA3",
        //     "emoji":"🪣",
        //     "description":"Bucket",
        //     "keywords":[
        //         "bucket"
        //     ]
        // },
        {
            "no":1317,
            "code":"U+1F9FC",
            "emoji":"🧼",
            "description":"Soap",
            "keywords":[
                "soap"
            ]
        },
        // {
        //     "no":1318,
        //     "code":"U+1FAA5",
        //     "emoji":"🪥",
        //     "description":"Toothbrush",
        //     "keywords":[
        //         "toothbrush"
        //     ]
        // },
        {
            "no":1319,
            "code":"U+1F9FD",
            "emoji":"🧽",
            "description":"Sponge",
            "keywords":[
                "sponge"
            ]
        },
        {
            "no":1320,
            "code":"U+1F9EF",
            "emoji":"🧯",
            "description":"Fire Extinguisher",
            "keywords":[
                "fire",
                "extinguisher"
            ]
        },
        {
            "no":1321,
            "code":"U+1F6D2",
            "emoji":"🛒",
            "description":"Shopping Cart",
            "keywords":[
                "shopping",
                "cart"
            ]
        },
        {
            "no":1322,
            "code":"U+1F6AC",
            "emoji":"🚬",
            "description":"Cigarette",
            "keywords":[
                "cigarette"
            ]
        },
        {
            "no":1323,
            "code":"U+26B0",
            "emoji":"⚰",
            "description":"Coffin",
            "keywords":[
                "coffin"
            ]
        },
        // {
        //     "no":1324,
        //     "code":"U+1FAA6",
        //     "emoji":"🪦",
        //     "description":"Headstone",
        //     "keywords":[
        //         "headstone"
        //     ]
        // },
        {
            "no":1325,
            "code":"U+26B1",
            "emoji":"⚱",
            "description":"Funeral Urn",
            "keywords":[
                "funeral",
                "urn"
            ]
        },
        {
            "no":1326,
            "code":"U+1F5FF",
            "emoji":"🗿",
            "description":"Moai",
            "keywords":[
                "moai"
            ]
        },
        // {
        //     "no":1327,
        //     "code":"U+1FAA7",
        //     "emoji":"🪧",
        //     "description":"Placard",
        //     "keywords":[
        //         "placard"
        //     ]
        // },
        {
            "no":914,
            "code":"U+1F6CE",
            "emoji":"🛎",
            "description":"Bellhop Bell",
            "keywords":[
                "bellhop",
                "bell"
            ]
        },
        {
            "no":915,
            "code":"U+1F9F3",
            "emoji":"🧳",
            "description":"Luggage",
            "keywords":[
                "luggage"
            ]
        },
        {
            "no":916,
            "code":"U+231B",
            "emoji":"⌛",
            "description":"Hourglass Done",
            "keywords":[
                "hourglass",
                "done"
            ]
        },
        {
            "no":917,
            "code":"U+23F3",
            "emoji":"⏳",
            "description":"Hourglass Not Done",
            "keywords":[
                "hourglass",
                "not",
                "done"
            ]
        },
        {
            "no":918,
            "code":"U+231A",
            "emoji":"⌚",
            "description":"Watch",
            "keywords":[
                "watch"
            ]
        },
        {
            "no":919,
            "code":"U+23F0",
            "emoji":"⏰",
            "description":"Alarm Clock",
            "keywords":[
                "alarm",
                "clock"
            ]
        },
        {
            "no":920,
            "code":"U+23F1",
            "emoji":"⏱",
            "description":"Stopwatch",
            "keywords":[
                "stopwatch"
            ]
        },
        {
            "no":921,
            "code":"U+23F2",
            "emoji":"⏲",
            "description":"Timer Clock",
            "keywords":[
                "timer",
                "clock"
            ]
        },
        {
            "no":922,
            "code":"U+1F570",
            "emoji":"🕰",
            "description":"Mantelpiece Clock",
            "keywords":[
                "mantelpiece",
                "clock"
            ]
        }
    ],
    "Symbols":[
        {
            "no":122,
            "code":"U+1F498",
            "emoji":"💘",
            "description":"Heart With Arrow",
            "keywords":[
                "heart",
                "arrow"
            ]
        },
        {
            "no":123,
            "code":"U+1F49D",
            "emoji":"💝",
            "description":"Heart With Ribbon",
            "keywords":[
                "heart",
                "ribbon"
            ]
        },
        {
            "no":124,
            "code":"U+1F496",
            "emoji":"💖",
            "description":"Sparkling Heart",
            "keywords":[
                "sparkling",
                "heart"
            ]
        },
        {
            "no":125,
            "code":"U+1F497",
            "emoji":"💗",
            "description":"Growing Heart",
            "keywords":[
                "growing",
                "heart"
            ]
        },
        {
            "no":126,
            "code":"U+1F493",
            "emoji":"💓",
            "description":"Beating Heart",
            "keywords":[
                "beating",
                "heart"
            ]
        },
        {
            "no":127,
            "code":"U+1F49E",
            "emoji":"💞",
            "description":"Revolving Hearts",
            "keywords":[
                "revolving",
                "hearts"
            ]
        },
        {
            "no":128,
            "code":"U+1F495",
            "emoji":"💕",
            "description":"Two Hearts",
            "keywords":[
                "two",
                "hearts"
            ]
        },
        {
            "no":129,
            "code":"U+1F49F",
            "emoji":"💟",
            "description":"Heart Decoration",
            "keywords":[
                "heart",
                "decoration"
            ]
        },
        {
            "no":130,
            "code":"U+2763",
            "emoji":"❣",
            "description":"Heart Exclamation",
            "keywords":[
                "heart",
                "exclamation"
            ]
        },
        {
            "no":131,
            "code":"U+1F494",
            "emoji":"💔",
            "description":"Broken Heart",
            "keywords":[
                "broken",
                "heart"
            ]
        },
        {
            "no":132,
            "code":"U+2764 U+FE0F U+200D U+1F525",
            "emoji":"❤️‍🔥",
            "description":"⊛ Heart On Fire",
            "keywords":[
                "⊛",
                "heart",
                "fire"
            ]
        },
        {
            "no":133,
            "code":"U+2764 U+FE0F U+200D U+1FA79",
            "emoji":"❤️‍🩹",
            "description":"⊛ Mending Heart",
            "keywords":[
                "⊛",
                "mending",
                "heart"
            ]
        },
        {
            "no":134,
            "code":"U+2764",
            "emoji":"❤",
            "description":"Red Heart",
            "keywords":[
                "red",
                "heart"
            ]
        },
        {
            "no":135,
            "code":"U+1F9E1",
            "emoji":"🧡",
            "description":"Orange Heart",
            "keywords":[
                "orange",
                "heart"
            ]
        },
        {
            "no":136,
            "code":"U+1F49B",
            "emoji":"💛",
            "description":"Yellow Heart",
            "keywords":[
                "yellow",
                "heart"
            ]
        },
        {
            "no":137,
            "code":"U+1F49A",
            "emoji":"💚",
            "description":"Green Heart",
            "keywords":[
                "green",
                "heart"
            ]
        },
        {
            "no":138,
            "code":"U+1F499",
            "emoji":"💙",
            "description":"Blue Heart",
            "keywords":[
                "blue",
                "heart"
            ]
        },
        {
            "no":139,
            "code":"U+1F49C",
            "emoji":"💜",
            "description":"Purple Heart",
            "keywords":[
                "purple",
                "heart"
            ]
        },
        {
            "no":140,
            "code":"U+1F90E",
            "emoji":"🤎",
            "description":"Brown Heart",
            "keywords":[
                "brown",
                "heart"
            ]
        },
        {
            "no":141,
            "code":"U+1F5A4",
            "emoji":"🖤",
            "description":"Black Heart",
            "keywords":[
                "black",
                "heart"
            ]
        },
        {
            "no":142,
            "code":"U+1F90D",
            "emoji":"🤍",
            "description":"White Heart",
            "keywords":[
                "white",
                "heart"
            ]
        },
        {
            "no":1123,
            "code":"U+1F507",
            "emoji":"🔇",
            "description":"Muted Speaker",
            "keywords":[
                "muted",
                "speaker"
            ]
        },
        {
            "no":1124,
            "code":"U+1F508",
            "emoji":"🔈",
            "description":"Speaker Low Volume",
            "keywords":[
                "speaker",
                "low",
                "volume"
            ]
        },
        {
            "no":1125,
            "code":"U+1F509",
            "emoji":"🔉",
            "description":"Speaker Medium Volume",
            "keywords":[
                "speaker",
                "medium",
                "volume"
            ]
        },
        {
            "no":1126,
            "code":"U+1F50A",
            "emoji":"🔊",
            "description":"Speaker High Volume",
            "keywords":[
                "speaker",
                "high",
                "volume"
            ]
        },
        {
            "no":1130,
            "code":"U+1F514",
            "emoji":"🔔",
            "description":"Bell",
            "keywords":[
                "bell"
            ]
        },
        {
            "no":1131,
            "code":"U+1F515",
            "emoji":"🔕",
            "description":"Bell With Slash",
            "keywords":[
                "bell",
                "slash"
            ]
        },
        {
            "no":1132,
            "code":"U+1F3BC",
            "emoji":"🎼",
            "description":"Musical Score",
            "keywords":[
                "musical",
                "score"
            ]
        },
        {
            "no":1133,
            "code":"U+1F3B5",
            "emoji":"🎵",
            "description":"Musical Note",
            "keywords":[
                "musical",
                "note"
            ]
        },
        {
            "no":1134,
            "code":"U+1F3B6",
            "emoji":"🎶",
            "description":"Musical Notes",
            "keywords":[
                "musical",
                "notes"
            ]
        },
        {
            "no":1328,
            "code":"U+1F3E7",
            "emoji":"🏧",
            "description":"Atm Sign",
            "keywords":[
                "ATM",
                "sign"
            ]
        },
        {
            "no":1329,
            "code":"U+1F6AE",
            "emoji":"🚮",
            "description":"Litter In Bin Sign",
            "keywords":[
                "litter",
                "bin",
                "sign"
            ]
        },
        {
            "no":1330,
            "code":"U+1F6B0",
            "emoji":"🚰",
            "description":"Potable Water",
            "keywords":[
                "potable",
                "water"
            ]
        },
        {
            "no":1331,
            "code":"U+267F",
            "emoji":"♿",
            "description":"Wheelchair Symbol",
            "keywords":[
                "wheelchair",
                "symbol"
            ]
        },
        {
            "no":1332,
            "code":"U+1F6B9",
            "emoji":"🚹",
            "description":"Men’S Room",
            "keywords":[
                "men’s",
                "room"
            ]
        },
        {
            "no":1333,
            "code":"U+1F6BA",
            "emoji":"🚺",
            "description":"Women’S Room",
            "keywords":[
                "women’s",
                "room"
            ]
        },
        {
            "no":1334,
            "code":"U+1F6BB",
            "emoji":"🚻",
            "description":"Restroom",
            "keywords":[
                "restroom"
            ]
        },
        {
            "no":1335,
            "code":"U+1F6BC",
            "emoji":"🚼",
            "description":"Baby Symbol",
            "keywords":[
                "baby",
                "symbol"
            ]
        },
        {
            "no":1336,
            "code":"U+1F6BE",
            "emoji":"🚾",
            "description":"Water Closet",
            "keywords":[
                "water",
                "closet"
            ]
        },
        {
            "no":1337,
            "code":"U+1F6C2",
            "emoji":"🛂",
            "description":"Passport Control",
            "keywords":[
                "passport",
                "control"
            ]
        },
        {
            "no":1338,
            "code":"U+1F6C3",
            "emoji":"🛃",
            "description":"Customs",
            "keywords":[
                "customs"
            ]
        },
        {
            "no":1339,
            "code":"U+1F6C4",
            "emoji":"🛄",
            "description":"Baggage Claim",
            "keywords":[
                "baggage",
                "claim"
            ]
        },
        {
            "no":1340,
            "code":"U+1F6C5",
            "emoji":"🛅",
            "description":"Left Luggage",
            "keywords":[
                "left",
                "luggage"
            ]
        },
        {
            "no":1341,
            "code":"U+26A0",
            "emoji":"⚠",
            "description":"Warning",
            "keywords":[
                "warning"
            ]
        },
        {
            "no":1342,
            "code":"U+1F6B8",
            "emoji":"🚸",
            "description":"Children Crossing",
            "keywords":[
                "children",
                "crossing"
            ]
        },
        {
            "no":1343,
            "code":"U+26D4",
            "emoji":"⛔",
            "description":"No Entry",
            "keywords":[
                "no",
                "entry"
            ]
        },
        {
            "no":1344,
            "code":"U+1F6AB",
            "emoji":"🚫",
            "description":"Prohibited",
            "keywords":[
                "prohibited"
            ]
        },
        {
            "no":1345,
            "code":"U+1F6B3",
            "emoji":"🚳",
            "description":"No Bicycles",
            "keywords":[
                "no",
                "bicycles"
            ]
        },
        {
            "no":1346,
            "code":"U+1F6AD",
            "emoji":"🚭",
            "description":"No Smoking",
            "keywords":[
                "no",
                "smoking"
            ]
        },
        {
            "no":1347,
            "code":"U+1F6AF",
            "emoji":"🚯",
            "description":"No Littering",
            "keywords":[
                "no",
                "littering"
            ]
        },
        {
            "no":1348,
            "code":"U+1F6B1",
            "emoji":"🚱",
            "description":"Non-Potable Water",
            "keywords":[
                "non-potable",
                "water"
            ]
        },
        {
            "no":1349,
            "code":"U+1F6B7",
            "emoji":"🚷",
            "description":"No Pedestrians",
            "keywords":[
                "no",
                "pedestrians"
            ]
        },
        {
            "no":1350,
            "code":"U+1F4F5",
            "emoji":"📵",
            "description":"No Mobile Phones",
            "keywords":[
                "no",
                "mobile",
                "phones"
            ]
        },
        {
            "no":1351,
            "code":"U+1F51E",
            "emoji":"🔞",
            "description":"No One Under Eighteen",
            "keywords":[
                "no",
                "one",
                "under",
                "eighteen"
            ]
        },
        {
            "no":1352,
            "code":"U+2622",
            "emoji":"☢",
            "description":"Radioactive",
            "keywords":[
                "radioactive"
            ]
        },
        {
            "no":1353,
            "code":"U+2623",
            "emoji":"☣",
            "description":"Biohazard",
            "keywords":[
                "biohazard"
            ]
        },
        {
            "no":1354,
            "code":"U+2B06",
            "emoji":"⬆",
            "description":"Up Arrow",
            "keywords":[
                "up",
                "arrow"
            ]
        },
        {
            "no":1355,
            "code":"U+2197",
            "emoji":"↗",
            "description":"Up-Right Arrow",
            "keywords":[
                "up-right",
                "arrow"
            ]
        },
        {
            "no":1356,
            "code":"U+27A1",
            "emoji":"➡",
            "description":"Right Arrow",
            "keywords":[
                "right",
                "arrow"
            ]
        },
        {
            "no":1357,
            "code":"U+2198",
            "emoji":"↘",
            "description":"Down-Right Arrow",
            "keywords":[
                "down-right",
                "arrow"
            ]
        },
        {
            "no":1358,
            "code":"U+2B07",
            "emoji":"⬇",
            "description":"Down Arrow",
            "keywords":[
                "down",
                "arrow"
            ]
        },
        {
            "no":1359,
            "code":"U+2199",
            "emoji":"↙",
            "description":"Down-Left Arrow",
            "keywords":[
                "down-left",
                "arrow"
            ]
        },
        {
            "no":1360,
            "code":"U+2B05",
            "emoji":"⬅",
            "description":"Left Arrow",
            "keywords":[
                "left",
                "arrow"
            ]
        },
        {
            "no":1361,
            "code":"U+2196",
            "emoji":"↖",
            "description":"Up-Left Arrow",
            "keywords":[
                "up-left",
                "arrow"
            ]
        },
        {
            "no":1362,
            "code":"U+2195",
            "emoji":"↕",
            "description":"Up-Down Arrow",
            "keywords":[
                "up-down",
                "arrow"
            ]
        },
        {
            "no":1363,
            "code":"U+2194",
            "emoji":"↔",
            "description":"Left-Right Arrow",
            "keywords":[
                "left-right",
                "arrow"
            ]
        },
        {
            "no":1364,
            "code":"U+21A9",
            "emoji":"↩",
            "description":"Right Arrow Curving Left",
            "keywords":[
                "right",
                "arrow",
                "curving",
                "left"
            ]
        },
        {
            "no":1365,
            "code":"U+21AA",
            "emoji":"↪",
            "description":"Left Arrow Curving Right",
            "keywords":[
                "left",
                "arrow",
                "curving",
                "right"
            ]
        },
        {
            "no":1366,
            "code":"U+2934",
            "emoji":"⤴",
            "description":"Right Arrow Curving Up",
            "keywords":[
                "right",
                "arrow",
                "curving",
                "up"
            ]
        },
        {
            "no":1367,
            "code":"U+2935",
            "emoji":"⤵",
            "description":"Right Arrow Curving Down",
            "keywords":[
                "right",
                "arrow",
                "curving",
                "down"
            ]
        },
        {
            "no":1368,
            "code":"U+1F503",
            "emoji":"🔃",
            "description":"Clockwise Vertical Arrows",
            "keywords":[
                "clockwise",
                "vertical",
                "arrows"
            ]
        },
        {
            "no":1369,
            "code":"U+1F504",
            "emoji":"🔄",
            "description":"Counterclockwise Arrows Button",
            "keywords":[
                "counterclockwise",
                "arrows",
                "button"
            ]
        },
        {
            "no":1370,
            "code":"U+1F519",
            "emoji":"🔙",
            "description":"Back Arrow",
            "keywords":[
                "BACK",
                "arrow"
            ]
        },
        {
            "no":1371,
            "code":"U+1F51A",
            "emoji":"🔚",
            "description":"End Arrow",
            "keywords":[
                "END",
                "arrow"
            ]
        },
        {
            "no":1372,
            "code":"U+1F51B",
            "emoji":"🔛",
            "description":"On! Arrow",
            "keywords":[
                "ON!",
                "arrow"
            ]
        },
        {
            "no":1373,
            "code":"U+1F51C",
            "emoji":"🔜",
            "description":"Soon Arrow",
            "keywords":[
                "SOON",
                "arrow"
            ]
        },
        {
            "no":1374,
            "code":"U+1F51D",
            "emoji":"🔝",
            "description":"Top Arrow",
            "keywords":[
                "TOP",
                "arrow"
            ]
        },
        {
            "no":1375,
            "code":"U+1F6D0",
            "emoji":"🛐",
            "description":"Place Of Worship",
            "keywords":[
                "place",
                "worship"
            ]
        },
        {
            "no":1376,
            "code":"U+269B",
            "emoji":"⚛",
            "description":"Atom Symbol",
            "keywords":[
                "atom",
                "symbol"
            ]
        },
        {
            "no":1377,
            "code":"U+1F549",
            "emoji":"🕉",
            "description":"Om",
            "keywords":[
                "om"
            ]
        },
        {
            "no":1378,
            "code":"U+2721",
            "emoji":"✡",
            "description":"Star Of David",
            "keywords":[
                "star",
                "David"
            ]
        },
        {
            "no":1379,
            "code":"U+2638",
            "emoji":"☸",
            "description":"Wheel Of Dharma",
            "keywords":[
                "wheel",
                "dharma"
            ]
        },
        {
            "no":1380,
            "code":"U+262F",
            "emoji":"☯",
            "description":"Yin Yang",
            "keywords":[
                "yin",
                "yang"
            ]
        },
        {
            "no":1381,
            "code":"U+271D",
            "emoji":"✝",
            "description":"Latin Cross",
            "keywords":[
                "latin",
                "cross"
            ]
        },
        {
            "no":1382,
            "code":"U+2626",
            "emoji":"☦",
            "description":"Orthodox Cross",
            "keywords":[
                "orthodox",
                "cross"
            ]
        },
        {
            "no":1383,
            "code":"U+262A",
            "emoji":"☪",
            "description":"Star And Crescent",
            "keywords":[
                "star",
                "crescent"
            ]
        },
        {
            "no":1384,
            "code":"U+262E",
            "emoji":"☮",
            "description":"Peace Symbol",
            "keywords":[
                "peace",
                "symbol"
            ]
        },
        {
            "no":1385,
            "code":"U+1F54E",
            "emoji":"🕎",
            "description":"Menorah",
            "keywords":[
                "menorah"
            ]
        },
        {
            "no":1386,
            "code":"U+1F52F",
            "emoji":"🔯",
            "description":"Dotted Six-Pointed Star",
            "keywords":[
                "dotted",
                "six-pointed",
                "star"
            ]
        },
        {
            "no":1387,
            "code":"U+2648",
            "emoji":"♈",
            "description":"Aries",
            "keywords":[
                "Aries"
            ]
        },
        {
            "no":1388,
            "code":"U+2649",
            "emoji":"♉",
            "description":"Taurus",
            "keywords":[
                "Taurus"
            ]
        },
        {
            "no":1389,
            "code":"U+264A",
            "emoji":"♊",
            "description":"Gemini",
            "keywords":[
                "Gemini"
            ]
        },
        {
            "no":1390,
            "code":"U+264B",
            "emoji":"♋",
            "description":"Cancer",
            "keywords":[
                "Cancer"
            ]
        },
        {
            "no":1391,
            "code":"U+264C",
            "emoji":"♌",
            "description":"Leo",
            "keywords":[
                "Leo"
            ]
        },
        {
            "no":1392,
            "code":"U+264D",
            "emoji":"♍",
            "description":"Virgo",
            "keywords":[
                "Virgo"
            ]
        },
        {
            "no":1393,
            "code":"U+264E",
            "emoji":"♎",
            "description":"Libra",
            "keywords":[
                "Libra"
            ]
        },
        {
            "no":1394,
            "code":"U+264F",
            "emoji":"♏",
            "description":"Scorpio",
            "keywords":[
                "Scorpio"
            ]
        },
        {
            "no":1395,
            "code":"U+2650",
            "emoji":"♐",
            "description":"Sagittarius",
            "keywords":[
                "Sagittarius"
            ]
        },
        {
            "no":1396,
            "code":"U+2651",
            "emoji":"♑",
            "description":"Capricorn",
            "keywords":[
                "Capricorn"
            ]
        },
        {
            "no":1397,
            "code":"U+2652",
            "emoji":"♒",
            "description":"Aquarius",
            "keywords":[
                "Aquarius"
            ]
        },
        {
            "no":1398,
            "code":"U+2653",
            "emoji":"♓",
            "description":"Pisces",
            "keywords":[
                "Pisces"
            ]
        },
        {
            "no":1399,
            "code":"U+26CE",
            "emoji":"⛎",
            "description":"Ophiuchus",
            "keywords":[
                "Ophiuchus"
            ]
        },
        {
            "no":1400,
            "code":"U+1F500",
            "emoji":"🔀",
            "description":"Shuffle Tracks Button",
            "keywords":[
                "shuffle",
                "tracks",
                "button"
            ]
        },
        {
            "no":1401,
            "code":"U+1F501",
            "emoji":"🔁",
            "description":"Repeat Button",
            "keywords":[
                "repeat",
                "button"
            ]
        },
        {
            "no":1402,
            "code":"U+1F502",
            "emoji":"🔂",
            "description":"Repeat Single Button",
            "keywords":[
                "repeat",
                "single",
                "button"
            ]
        },
        {
            "no":1403,
            "code":"U+25B6",
            "emoji":"▶",
            "description":"Play Button",
            "keywords":[
                "play",
                "button"
            ]
        },
        {
            "no":1404,
            "code":"U+23E9",
            "emoji":"⏩",
            "description":"Fast-Forward Button",
            "keywords":[
                "fast-forward",
                "button"
            ]
        },
        {
            "no":1405,
            "code":"U+23ED",
            "emoji":"⏭",
            "description":"Next Track Button",
            "keywords":[
                "next",
                "track",
                "button"
            ]
        },
        {
            "no":1406,
            "code":"U+23EF",
            "emoji":"⏯",
            "description":"Play Or Pause Button",
            "keywords":[
                "play",
                "or",
                "pause",
                "button"
            ]
        },
        {
            "no":1407,
            "code":"U+25C0",
            "emoji":"◀",
            "description":"Reverse Button",
            "keywords":[
                "reverse",
                "button"
            ]
        },
        {
            "no":1408,
            "code":"U+23EA",
            "emoji":"⏪",
            "description":"Fast Reverse Button",
            "keywords":[
                "fast",
                "reverse",
                "button"
            ]
        },
        {
            "no":1409,
            "code":"U+23EE",
            "emoji":"⏮",
            "description":"Last Track Button",
            "keywords":[
                "last",
                "track",
                "button"
            ]
        },
        {
            "no":1410,
            "code":"U+1F53C",
            "emoji":"🔼",
            "description":"Upwards Button",
            "keywords":[
                "upwards",
                "button"
            ]
        },
        {
            "no":1411,
            "code":"U+23EB",
            "emoji":"⏫",
            "description":"Fast Up Button",
            "keywords":[
                "fast",
                "up",
                "button"
            ]
        },
        {
            "no":1412,
            "code":"U+1F53D",
            "emoji":"🔽",
            "description":"Downwards Button",
            "keywords":[
                "downwards",
                "button"
            ]
        },
        {
            "no":1413,
            "code":"U+23EC",
            "emoji":"⏬",
            "description":"Fast Down Button",
            "keywords":[
                "fast",
                "down",
                "button"
            ]
        },
        {
            "no":1414,
            "code":"U+23F8",
            "emoji":"⏸",
            "description":"Pause Button",
            "keywords":[
                "pause",
                "button"
            ]
        },
        {
            "no":1415,
            "code":"U+23F9",
            "emoji":"⏹",
            "description":"Stop Button",
            "keywords":[
                "stop",
                "button"
            ]
        },
        {
            "no":1416,
            "code":"U+23FA",
            "emoji":"⏺",
            "description":"Record Button",
            "keywords":[
                "record",
                "button"
            ]
        },
        {
            "no":1417,
            "code":"U+23CF",
            "emoji":"⏏",
            "description":"Eject Button",
            "keywords":[
                "eject",
                "button"
            ]
        },
        {
            "no":1418,
            "code":"U+1F3A6",
            "emoji":"🎦",
            "description":"Cinema",
            "keywords":[
                "cinema"
            ]
        },
        {
            "no":1419,
            "code":"U+1F505",
            "emoji":"🔅",
            "description":"Dim Button",
            "keywords":[
                "dim",
                "button"
            ]
        },
        {
            "no":1420,
            "code":"U+1F506",
            "emoji":"🔆",
            "description":"Bright Button",
            "keywords":[
                "bright",
                "button"
            ]
        },
        {
            "no":1421,
            "code":"U+1F4F6",
            "emoji":"📶",
            "description":"Antenna Bars",
            "keywords":[
                "antenna",
                "bars"
            ]
        },
        {
            "no":1422,
            "code":"U+1F4F3",
            "emoji":"📳",
            "description":"Vibration Mode",
            "keywords":[
                "vibration",
                "mode"
            ]
        },
        {
            "no":1423,
            "code":"U+1F4F4",
            "emoji":"📴",
            "description":"Mobile Phone Off",
            "keywords":[
                "mobile",
                "phone",
                "off"
            ]
        },
        {
            "no":1424,
            "code":"U+2640",
            "emoji":"♀",
            "description":"Female Sign",
            "keywords":[
                "female",
                "sign"
            ]
        },
        {
            "no":1425,
            "code":"U+2642",
            "emoji":"♂",
            "description":"Male Sign",
            "keywords":[
                "male",
                "sign"
            ]
        },
        {
            "no":1426,
            "code":"U+26A7",
            "emoji":"⚧",
            "description":"Transgender Symbol",
            "keywords":[
                "transgender",
                "symbol"
            ]
        },
        {
            "no":1427,
            "code":"U+2716",
            "emoji":"✖",
            "description":"Multiply",
            "keywords":[
                "multiply"
            ]
        },
        {
            "no":1428,
            "code":"U+2795",
            "emoji":"➕",
            "description":"Plus",
            "keywords":[
                "plus"
            ]
        },
        {
            "no":1429,
            "code":"U+2796",
            "emoji":"➖",
            "description":"Minus",
            "keywords":[
                "minus"
            ]
        },
        {
            "no":1430,
            "code":"U+2797",
            "emoji":"➗",
            "description":"Divide",
            "keywords":[
                "divide"
            ]
        },
        {
            "no":1431,
            "code":"U+267E",
            "emoji":"♾",
            "description":"Infinity",
            "keywords":[
                "infinity"
            ]
        },
        {
            "no":1432,
            "code":"U+203C",
            "emoji":"‼",
            "description":"Double Exclamation Mark",
            "keywords":[
                "double",
                "exclamation",
                "mark"
            ]
        },
        {
            "no":1433,
            "code":"U+2049",
            "emoji":"⁉",
            "description":"Exclamation Question Mark",
            "keywords":[
                "exclamation",
                "question",
                "mark"
            ]
        },
        {
            "no":1434,
            "code":"U+2753",
            "emoji":"❓",
            "description":"Red Question Mark",
            "keywords":[
                "red",
                "question",
                "mark"
            ]
        },
        {
            "no":1435,
            "code":"U+2754",
            "emoji":"❔",
            "description":"White Question Mark",
            "keywords":[
                "white",
                "question",
                "mark"
            ]
        },
        {
            "no":1436,
            "code":"U+2755",
            "emoji":"❕",
            "description":"White Exclamation Mark",
            "keywords":[
                "white",
                "exclamation",
                "mark"
            ]
        },
        {
            "no":1437,
            "code":"U+2757",
            "emoji":"❗",
            "description":"Red Exclamation Mark",
            "keywords":[
                "red",
                "exclamation",
                "mark"
            ]
        },
        {
            "no":1438,
            "code":"U+3030",
            "emoji":"〰",
            "description":"Wavy Dash",
            "keywords":[
                "wavy",
                "dash"
            ]
        },
        {
            "no":1439,
            "code":"U+1F4B1",
            "emoji":"💱",
            "description":"Currency Exchange",
            "keywords":[
                "currency",
                "exchange"
            ]
        },
        {
            "no":1440,
            "code":"U+1F4B2",
            "emoji":"💲",
            "description":"Heavy Dollar Sign",
            "keywords":[
                "heavy",
                "dollar",
                "sign"
            ]
        },
        {
            "no":1441,
            "code":"U+2695",
            "emoji":"⚕",
            "description":"Medical Symbol",
            "keywords":[
                "medical",
                "symbol"
            ]
        },
        {
            "no":1442,
            "code":"U+267B",
            "emoji":"♻",
            "description":"Recycling Symbol",
            "keywords":[
                "recycling",
                "symbol"
            ]
        },
        {
            "no":1443,
            "code":"U+269C",
            "emoji":"⚜",
            "description":"Fleur-De-Lis",
            "keywords":[
                "fleur-de-lis"
            ]
        },
        {
            "no":1444,
            "code":"U+1F531",
            "emoji":"🔱",
            "description":"Trident Emblem",
            "keywords":[
                "trident",
                "emblem"
            ]
        },
        {
            "no":1445,
            "code":"U+1F4DB",
            "emoji":"📛",
            "description":"Name Badge",
            "keywords":[
                "name",
                "badge"
            ]
        },
        {
            "no":1446,
            "code":"U+1F530",
            "emoji":"🔰",
            "description":"Japanese Symbol For Beginner",
            "keywords":[
                "Japanese",
                "symbol",
                "for",
                "beginner"
            ]
        },
        {
            "no":1447,
            "code":"U+2B55",
            "emoji":"⭕",
            "description":"Hollow Red Circle",
            "keywords":[
                "hollow",
                "red",
                "circle"
            ]
        },
        {
            "no":1448,
            "code":"U+2705",
            "emoji":"✅",
            "description":"Check Mark Button",
            "keywords":[
                "check",
                "mark",
                "button"
            ]
        },
        {
            "no":1449,
            "code":"U+2611",
            "emoji":"☑",
            "description":"Check Box With Check",
            "keywords":[
                "check",
                "box",
                "check"
            ]
        },
        {
            "no":1450,
            "code":"U+2714",
            "emoji":"✔",
            "description":"Check Mark",
            "keywords":[
                "check",
                "mark"
            ]
        },
        {
            "no":1451,
            "code":"U+274C",
            "emoji":"❌",
            "description":"Cross Mark",
            "keywords":[
                "cross",
                "mark"
            ]
        },
        {
            "no":1452,
            "code":"U+274E",
            "emoji":"❎",
            "description":"Cross Mark Button",
            "keywords":[
                "cross",
                "mark",
                "button"
            ]
        },
        {
            "no":1453,
            "code":"U+27B0",
            "emoji":"➰",
            "description":"Curly Loop",
            "keywords":[
                "curly",
                "loop"
            ]
        },
        {
            "no":1454,
            "code":"U+27BF",
            "emoji":"➿",
            "description":"Double Curly Loop",
            "keywords":[
                "double",
                "curly",
                "loop"
            ]
        },
        {
            "no":1455,
            "code":"U+303D",
            "emoji":"〽",
            "description":"Part Alternation Mark",
            "keywords":[
                "part",
                "alternation",
                "mark"
            ]
        },
        {
            "no":1456,
            "code":"U+2733",
            "emoji":"✳",
            "description":"Eight-Spoked Asterisk",
            "keywords":[
                "eight-spoked",
                "asterisk"
            ]
        },
        {
            "no":1457,
            "code":"U+2734",
            "emoji":"✴",
            "description":"Eight-Pointed Star",
            "keywords":[
                "eight-pointed",
                "star"
            ]
        },
        {
            "no":1458,
            "code":"U+2747",
            "emoji":"❇",
            "description":"Sparkle",
            "keywords":[
                "sparkle"
            ]
        },
        {
            "no":1459,
            "code":"U+00A9",
            "emoji":"©",
            "description":"Copyright",
            "keywords":[
                "copyright"
            ]
        },
        {
            "no":1460,
            "code":"U+00AE",
            "emoji":"®",
            "description":"Registered",
            "keywords":[
                "registered"
            ]
        },
        {
            "no":1461,
            "code":"U+2122",
            "emoji":"™",
            "description":"Trade Mark",
            "keywords":[
                "trade",
                "mark"
            ]
        },
        {
            "no":1462,
            "code":"U+0023 U+FE0F U+20E3",
            "emoji":"#️⃣",
            "description":"Keycap: #",
            "keywords":[
                "keycap",
                "#"
            ]
        },
        {
            "no":1463,
            "code":"U+002A U+FE0F U+20E3",
            "emoji":"*️⃣",
            "description":"Keycap: *",
            "keywords":[
                "keycap",
                "*"
            ]
        },
        {
            "no":1464,
            "code":"U+0030 U+FE0F U+20E3",
            "emoji":"0️⃣",
            "description":"Keycap: 0",
            "keywords":[
                "keycap",
                "0"
            ]
        },
        {
            "no":1465,
            "code":"U+0031 U+FE0F U+20E3",
            "emoji":"1️⃣",
            "description":"Keycap: 1",
            "keywords":[
                "keycap",
                "1"
            ]
        },
        {
            "no":1466,
            "code":"U+0032 U+FE0F U+20E3",
            "emoji":"2️⃣",
            "description":"Keycap: 2",
            "keywords":[
                "keycap",
                "2"
            ]
        },
        {
            "no":1467,
            "code":"U+0033 U+FE0F U+20E3",
            "emoji":"3️⃣",
            "description":"Keycap: 3",
            "keywords":[
                "keycap",
                "3"
            ]
        },
        {
            "no":1468,
            "code":"U+0034 U+FE0F U+20E3",
            "emoji":"4️⃣",
            "description":"Keycap: 4",
            "keywords":[
                "keycap",
                "4"
            ]
        },
        {
            "no":1469,
            "code":"U+0035 U+FE0F U+20E3",
            "emoji":"5️⃣",
            "description":"Keycap: 5",
            "keywords":[
                "keycap",
                "5"
            ]
        },
        {
            "no":1470,
            "code":"U+0036 U+FE0F U+20E3",
            "emoji":"6️⃣",
            "description":"Keycap: 6",
            "keywords":[
                "keycap",
                "6"
            ]
        },
        {
            "no":1471,
            "code":"U+0037 U+FE0F U+20E3",
            "emoji":"7️⃣",
            "description":"Keycap: 7",
            "keywords":[
                "keycap",
                "7"
            ]
        },
        {
            "no":1472,
            "code":"U+0038 U+FE0F U+20E3",
            "emoji":"8️⃣",
            "description":"Keycap: 8",
            "keywords":[
                "keycap",
                "8"
            ]
        },
        {
            "no":1473,
            "code":"U+0039 U+FE0F U+20E3",
            "emoji":"9️⃣",
            "description":"Keycap: 9",
            "keywords":[
                "keycap",
                "9"
            ]
        },
        {
            "no":1474,
            "code":"U+1F51F",
            "emoji":"🔟",
            "description":"Keycap: 10",
            "keywords":[
                "keycap",
                "10"
            ]
        },
        {
            "no":1475,
            "code":"U+1F520",
            "emoji":"🔠",
            "description":"Input Latin Uppercase",
            "keywords":[
                "input",
                "latin",
                "uppercase"
            ]
        },
        {
            "no":1476,
            "code":"U+1F521",
            "emoji":"🔡",
            "description":"Input Latin Lowercase",
            "keywords":[
                "input",
                "latin",
                "lowercase"
            ]
        },
        {
            "no":1477,
            "code":"U+1F522",
            "emoji":"🔢",
            "description":"Input Numbers",
            "keywords":[
                "input",
                "numbers"
            ]
        },
        {
            "no":1478,
            "code":"U+1F523",
            "emoji":"🔣",
            "description":"Input Symbols",
            "keywords":[
                "input",
                "symbols"
            ]
        },
        {
            "no":1479,
            "code":"U+1F524",
            "emoji":"🔤",
            "description":"Input Latin Letters",
            "keywords":[
                "input",
                "latin",
                "letters"
            ]
        },
        {
            "no":1480,
            "code":"U+1F170",
            "emoji":"🅰",
            "description":"A Button (Blood Type)",
            "keywords":[
                "A",
                "button",
                "(blood",
                "type)"
            ]
        },
        {
            "no":1481,
            "code":"U+1F18E",
            "emoji":"🆎",
            "description":"Ab Button (Blood Type)",
            "keywords":[
                "AB",
                "button",
                "(blood",
                "type)"
            ]
        },
        {
            "no":1482,
            "code":"U+1F171",
            "emoji":"🅱",
            "description":"B Button (Blood Type)",
            "keywords":[
                "B",
                "button",
                "(blood",
                "type)"
            ]
        },
        {
            "no":1483,
            "code":"U+1F191",
            "emoji":"🆑",
            "description":"Cl Button",
            "keywords":[
                "CL",
                "button"
            ]
        },
        {
            "no":1484,
            "code":"U+1F192",
            "emoji":"🆒",
            "description":"Cool Button",
            "keywords":[
                "COOL",
                "button"
            ]
        },
        {
            "no":1485,
            "code":"U+1F193",
            "emoji":"🆓",
            "description":"Free Button",
            "keywords":[
                "FREE",
                "button"
            ]
        },
        {
            "no":1486,
            "code":"U+2139",
            "emoji":"ℹ",
            "description":"Information",
            "keywords":[
                "information"
            ]
        },
        {
            "no":1487,
            "code":"U+1F194",
            "emoji":"🆔",
            "description":"Id Button",
            "keywords":[
                "ID",
                "button"
            ]
        },
        {
            "no":1488,
            "code":"U+24C2",
            "emoji":"Ⓜ",
            "description":"Circled M",
            "keywords":[
                "circled",
                "M"
            ]
        },
        {
            "no":1489,
            "code":"U+1F195",
            "emoji":"🆕",
            "description":"New Button",
            "keywords":[
                "NEW",
                "button"
            ]
        },
        {
            "no":1490,
            "code":"U+1F196",
            "emoji":"🆖",
            "description":"Ng Button",
            "keywords":[
                "NG",
                "button"
            ]
        },
        {
            "no":1491,
            "code":"U+1F17E",
            "emoji":"🅾",
            "description":"O Button (Blood Type)",
            "keywords":[
                "O",
                "button",
                "(blood",
                "type)"
            ]
        },
        {
            "no":1492,
            "code":"U+1F197",
            "emoji":"🆗",
            "description":"Ok Button",
            "keywords":[
                "OK",
                "button"
            ]
        },
        {
            "no":1493,
            "code":"U+1F17F",
            "emoji":"🅿",
            "description":"P Button",
            "keywords":[
                "P",
                "button"
            ]
        },
        {
            "no":1494,
            "code":"U+1F198",
            "emoji":"🆘",
            "description":"Sos Button",
            "keywords":[
                "SOS",
                "button"
            ]
        },
        {
            "no":1495,
            "code":"U+1F199",
            "emoji":"🆙",
            "description":"Up! Button",
            "keywords":[
                "UP!",
                "button"
            ]
        },
        {
            "no":1496,
            "code":"U+1F19A",
            "emoji":"🆚",
            "description":"Vs Button",
            "keywords":[
                "VS",
                "button"
            ]
        },
        {
            "no":1497,
            "code":"U+1F201",
            "emoji":"🈁",
            "description":"Japanese “Here” Button",
            "keywords":[
                "Japanese",
                "“here”",
                "button"
            ]
        },
        {
            "no":1498,
            "code":"U+1F202",
            "emoji":"🈂",
            "description":"Japanese “Service Charge” Button",
            "keywords":[
                "Japanese",
                "“service",
                "charge”",
                "button"
            ]
        },
        {
            "no":1499,
            "code":"U+1F237",
            "emoji":"🈷",
            "description":"Japanese “Monthly Amount” Button",
            "keywords":[
                "Japanese",
                "“monthly",
                "amount”",
                "button"
            ]
        },
        {
            "no":1500,
            "code":"U+1F236",
            "emoji":"🈶",
            "description":"Japanese “Not Free Of Charge” Button",
            "keywords":[
                "Japanese",
                "“not",
                "free",
                "charge”",
                "button"
            ]
        },
        {
            "no":1501,
            "code":"U+1F22F",
            "emoji":"🈯",
            "description":"Japanese “Reserved” Button",
            "keywords":[
                "Japanese",
                "“reserved”",
                "button"
            ]
        },
        {
            "no":1502,
            "code":"U+1F250",
            "emoji":"🉐",
            "description":"Japanese “Bargain” Button",
            "keywords":[
                "Japanese",
                "“bargain”",
                "button"
            ]
        },
        {
            "no":1503,
            "code":"U+1F239",
            "emoji":"🈹",
            "description":"Japanese “Discount” Button",
            "keywords":[
                "Japanese",
                "“discount”",
                "button"
            ]
        },
        {
            "no":1504,
            "code":"U+1F21A",
            "emoji":"🈚",
            "description":"Japanese “Free Of Charge” Button",
            "keywords":[
                "Japanese",
                "“free",
                "charge”",
                "button"
            ]
        },
        {
            "no":1505,
            "code":"U+1F232",
            "emoji":"🈲",
            "description":"Japanese “Prohibited” Button",
            "keywords":[
                "Japanese",
                "“prohibited”",
                "button"
            ]
        },
        {
            "no":1506,
            "code":"U+1F251",
            "emoji":"🉑",
            "description":"Japanese “Acceptable” Button",
            "keywords":[
                "Japanese",
                "“acceptable”",
                "button"
            ]
        },
        {
            "no":1507,
            "code":"U+1F238",
            "emoji":"🈸",
            "description":"Japanese “Application” Button",
            "keywords":[
                "Japanese",
                "“application”",
                "button"
            ]
        },
        {
            "no":1508,
            "code":"U+1F234",
            "emoji":"🈴",
            "description":"Japanese “Passing Grade” Button",
            "keywords":[
                "Japanese",
                "“passing",
                "grade”",
                "button"
            ]
        },
        {
            "no":1509,
            "code":"U+1F233",
            "emoji":"🈳",
            "description":"Japanese “Vacancy” Button",
            "keywords":[
                "Japanese",
                "“vacancy”",
                "button"
            ]
        },
        {
            "no":1510,
            "code":"U+3297",
            "emoji":"㊗",
            "description":"Japanese “Congratulations” Button",
            "keywords":[
                "Japanese",
                "“congratulations”",
                "button"
            ]
        },
        {
            "no":1511,
            "code":"U+3299",
            "emoji":"㊙",
            "description":"Japanese “Secret” Button",
            "keywords":[
                "Japanese",
                "“secret”",
                "button"
            ]
        },
        {
            "no":1512,
            "code":"U+1F23A",
            "emoji":"🈺",
            "description":"Japanese “Open For Business” Button",
            "keywords":[
                "Japanese",
                "“open",
                "for",
                "business”",
                "button"
            ]
        },
        {
            "no":1513,
            "code":"U+1F235",
            "emoji":"🈵",
            "description":"Japanese “No Vacancy” Button",
            "keywords":[
                "Japanese",
                "“no",
                "vacancy”",
                "button"
            ]
        },
        {
            "no":1514,
            "code":"U+1F534",
            "emoji":"🔴",
            "description":"Red Circle",
            "keywords":[
                "red",
                "circle"
            ]
        },
        {
            "no":1515,
            "code":"U+1F7E0",
            "emoji":"🟠",
            "description":"Orange Circle",
            "keywords":[
                "orange",
                "circle"
            ]
        },
        {
            "no":1516,
            "code":"U+1F7E1",
            "emoji":"🟡",
            "description":"Yellow Circle",
            "keywords":[
                "yellow",
                "circle"
            ]
        },
        {
            "no":1517,
            "code":"U+1F7E2",
            "emoji":"🟢",
            "description":"Green Circle",
            "keywords":[
                "green",
                "circle"
            ]
        },
        {
            "no":1518,
            "code":"U+1F535",
            "emoji":"🔵",
            "description":"Blue Circle",
            "keywords":[
                "blue",
                "circle"
            ]
        },
        {
            "no":1519,
            "code":"U+1F7E3",
            "emoji":"🟣",
            "description":"Purple Circle",
            "keywords":[
                "purple",
                "circle"
            ]
        },
        {
            "no":1520,
            "code":"U+1F7E4",
            "emoji":"🟤",
            "description":"Brown Circle",
            "keywords":[
                "brown",
                "circle"
            ]
        },
        {
            "no":1521,
            "code":"U+26AB",
            "emoji":"⚫",
            "description":"Black Circle",
            "keywords":[
                "black",
                "circle"
            ]
        },
        {
            "no":1522,
            "code":"U+26AA",
            "emoji":"⚪",
            "description":"White Circle",
            "keywords":[
                "white",
                "circle"
            ]
        },
        {
            "no":1523,
            "code":"U+1F7E5",
            "emoji":"🟥",
            "description":"Red Square",
            "keywords":[
                "red",
                "square"
            ]
        },
        {
            "no":1524,
            "code":"U+1F7E7",
            "emoji":"🟧",
            "description":"Orange Square",
            "keywords":[
                "orange",
                "square"
            ]
        },
        {
            "no":1525,
            "code":"U+1F7E8",
            "emoji":"🟨",
            "description":"Yellow Square",
            "keywords":[
                "yellow",
                "square"
            ]
        },
        {
            "no":1526,
            "code":"U+1F7E9",
            "emoji":"🟩",
            "description":"Green Square",
            "keywords":[
                "green",
                "square"
            ]
        },
        {
            "no":1527,
            "code":"U+1F7E6",
            "emoji":"🟦",
            "description":"Blue Square",
            "keywords":[
                "blue",
                "square"
            ]
        },
        {
            "no":1528,
            "code":"U+1F7EA",
            "emoji":"🟪",
            "description":"Purple Square",
            "keywords":[
                "purple",
                "square"
            ]
        },
        {
            "no":1529,
            "code":"U+1F7EB",
            "emoji":"🟫",
            "description":"Brown Square",
            "keywords":[
                "brown",
                "square"
            ]
        },
        {
            "no":1530,
            "code":"U+2B1B",
            "emoji":"⬛",
            "description":"Black Large Square",
            "keywords":[
                "black",
                "large",
                "square"
            ]
        },
        {
            "no":1531,
            "code":"U+2B1C",
            "emoji":"⬜",
            "description":"White Large Square",
            "keywords":[
                "white",
                "large",
                "square"
            ]
        },
        {
            "no":1532,
            "code":"U+25FC",
            "emoji":"◼",
            "description":"Black Medium Square",
            "keywords":[
                "black",
                "medium",
                "square"
            ]
        },
        {
            "no":1533,
            "code":"U+25FB",
            "emoji":"◻",
            "description":"White Medium Square",
            "keywords":[
                "white",
                "medium",
                "square"
            ]
        },
        {
            "no":1534,
            "code":"U+25FE",
            "emoji":"◾",
            "description":"Black Medium-Small Square",
            "keywords":[
                "black",
                "medium-small",
                "square"
            ]
        },
        {
            "no":1535,
            "code":"U+25FD",
            "emoji":"◽",
            "description":"White Medium-Small Square",
            "keywords":[
                "white",
                "medium-small",
                "square"
            ]
        },
        {
            "no":1536,
            "code":"U+25AA",
            "emoji":"▪",
            "description":"Black Small Square",
            "keywords":[
                "black",
                "small",
                "square"
            ]
        },
        {
            "no":1537,
            "code":"U+25AB",
            "emoji":"▫",
            "description":"White Small Square",
            "keywords":[
                "white",
                "small",
                "square"
            ]
        },
        {
            "no":1538,
            "code":"U+1F536",
            "emoji":"🔶",
            "description":"Large Orange Diamond",
            "keywords":[
                "large",
                "orange",
                "diamond"
            ]
        },
        {
            "no":1539,
            "code":"U+1F537",
            "emoji":"🔷",
            "description":"Large Blue Diamond",
            "keywords":[
                "large",
                "blue",
                "diamond"
            ]
        },
        {
            "no":1540,
            "code":"U+1F538",
            "emoji":"🔸",
            "description":"Small Orange Diamond",
            "keywords":[
                "small",
                "orange",
                "diamond"
            ]
        },
        {
            "no":1541,
            "code":"U+1F539",
            "emoji":"🔹",
            "description":"Small Blue Diamond",
            "keywords":[
                "small",
                "blue",
                "diamond"
            ]
        },
        {
            "no":1542,
            "code":"U+1F53A",
            "emoji":"🔺",
            "description":"Red Triangle Pointed Up",
            "keywords":[
                "red",
                "triangle",
                "pointed",
                "up"
            ]
        },
        {
            "no":1543,
            "code":"U+1F53B",
            "emoji":"🔻",
            "description":"Red Triangle Pointed Down",
            "keywords":[
                "red",
                "triangle",
                "pointed",
                "down"
            ]
        },
        {
            "no":1544,
            "code":"U+1F4A0",
            "emoji":"💠",
            "description":"Diamond With A Dot",
            "keywords":[
                "diamond",
                "a",
                "dot"
            ]
        },
        {
            "no":1545,
            "code":"U+1F518",
            "emoji":"🔘",
            "description":"Radio Button",
            "keywords":[
                "radio",
                "button"
            ]
        },
        {
            "no":1546,
            "code":"U+1F533",
            "emoji":"🔳",
            "description":"White Square Button",
            "keywords":[
                "white",
                "square",
                "button"
            ]
        },
        {
            "no":1547,
            "code":"U+1F532",
            "emoji":"🔲",
            "description":"Black Square Button",
            "keywords":[
                "black",
                "square",
                "button"
            ]
        },
        {
            "no":923,
            "code":"U+1F55B",
            "emoji":"🕛",
            "description":"Twelve O’Clock",
            "keywords":[
                "twelve",
                "o’clock"
            ]
        },
        {
            "no":924,
            "code":"U+1F567",
            "emoji":"🕧",
            "description":"Twelve-Thirty",
            "keywords":[
                "twelve-thirty"
            ]
        },
        {
            "no":925,
            "code":"U+1F550",
            "emoji":"🕐",
            "description":"One O’Clock",
            "keywords":[
                "one",
                "o’clock"
            ]
        },
        {
            "no":926,
            "code":"U+1F55C",
            "emoji":"🕜",
            "description":"One-Thirty",
            "keywords":[
                "one-thirty"
            ]
        },
        {
            "no":927,
            "code":"U+1F551",
            "emoji":"🕑",
            "description":"Two O’Clock",
            "keywords":[
                "two",
                "o’clock"
            ]
        },
        {
            "no":928,
            "code":"U+1F55D",
            "emoji":"🕝",
            "description":"Two-Thirty",
            "keywords":[
                "two-thirty"
            ]
        },
        {
            "no":929,
            "code":"U+1F552",
            "emoji":"🕒",
            "description":"Three O’Clock",
            "keywords":[
                "three",
                "o’clock"
            ]
        },
        {
            "no":930,
            "code":"U+1F55E",
            "emoji":"🕞",
            "description":"Three-Thirty",
            "keywords":[
                "three-thirty"
            ]
        },
        {
            "no":931,
            "code":"U+1F553",
            "emoji":"🕓",
            "description":"Four O’Clock",
            "keywords":[
                "four",
                "o’clock"
            ]
        },
        {
            "no":932,
            "code":"U+1F55F",
            "emoji":"🕟",
            "description":"Four-Thirty",
            "keywords":[
                "four-thirty"
            ]
        },
        {
            "no":933,
            "code":"U+1F554",
            "emoji":"🕔",
            "description":"Five O’Clock",
            "keywords":[
                "five",
                "o’clock"
            ]
        },
        {
            "no":934,
            "code":"U+1F560",
            "emoji":"🕠",
            "description":"Five-Thirty",
            "keywords":[
                "five-thirty"
            ]
        },
        {
            "no":935,
            "code":"U+1F555",
            "emoji":"🕕",
            "description":"Six O’Clock",
            "keywords":[
                "six",
                "o’clock"
            ]
        },
        {
            "no":936,
            "code":"U+1F561",
            "emoji":"🕡",
            "description":"Six-Thirty",
            "keywords":[
                "six-thirty"
            ]
        },
        {
            "no":937,
            "code":"U+1F556",
            "emoji":"🕖",
            "description":"Seven O’Clock",
            "keywords":[
                "seven",
                "o’clock"
            ]
        },
        {
            "no":938,
            "code":"U+1F562",
            "emoji":"🕢",
            "description":"Seven-Thirty",
            "keywords":[
                "seven-thirty"
            ]
        },
        {
            "no":939,
            "code":"U+1F557",
            "emoji":"🕗",
            "description":"Eight O’Clock",
            "keywords":[
                "eight",
                "o’clock"
            ]
        },
        {
            "no":940,
            "code":"U+1F563",
            "emoji":"🕣",
            "description":"Eight-Thirty",
            "keywords":[
                "eight-thirty"
            ]
        },
        {
            "no":941,
            "code":"U+1F558",
            "emoji":"🕘",
            "description":"Nine O’Clock",
            "keywords":[
                "nine",
                "o’clock"
            ]
        },
        {
            "no":942,
            "code":"U+1F564",
            "emoji":"🕤",
            "description":"Nine-Thirty",
            "keywords":[
                "nine-thirty"
            ]
        },
        {
            "no":943,
            "code":"U+1F559",
            "emoji":"🕙",
            "description":"Ten O’Clock",
            "keywords":[
                "ten",
                "o’clock"
            ]
        },
        {
            "no":944,
            "code":"U+1F565",
            "emoji":"🕥",
            "description":"Ten-Thirty",
            "keywords":[
                "ten-thirty"
            ]
        },
        {
            "no":945,
            "code":"U+1F55A",
            "emoji":"🕚",
            "description":"Eleven O’Clock",
            "keywords":[
                "eleven",
                "o’clock"
            ]
        },
        {
            "no":946,
            "code":"U+1F566",
            "emoji":"🕦",
            "description":"Eleven-Thirty",
            "keywords":[
                "eleven-thirty"
            ]
        }
    ],
    "Flags":[
        {
            "no":1548,
            "code":"U+1F3C1",
            "emoji":"🏁",
            "description":"Chequered Flag",
            "keywords":[
                "chequered",
                "flag"
            ]
        },
        {
            "no":1549,
            "code":"U+1F6A9",
            "emoji":"🚩",
            "description":"Triangular Flag",
            "keywords":[
                "triangular",
                "flag"
            ]
        },
        {
            "no":1550,
            "code":"U+1F38C",
            "emoji":"🎌",
            "description":"Crossed Flags",
            "keywords":[
                "crossed",
                "flags"
            ]
        },
        {
            "no":1551,
            "code":"U+1F3F4",
            "emoji":"🏴",
            "description":"Black Flag",
            "keywords":[
                "black",
                "flag"
            ]
        },
        {
            "no":1552,
            "code":"U+1F3F3",
            "emoji":"🏳",
            "description":"White Flag",
            "keywords":[
                "white",
                "flag"
            ]
        },
        {
            "no":1553,
            "code":"U+1F3F3 U+FE0F U+200D U+1F308",
            "emoji":"🏳️‍🌈",
            "description":"Rainbow Flag",
            "keywords":[
                "rainbow",
                "flag"
            ]
        },
        {
            "no":1554,
            "code":"U+1F3F3 U+FE0F U+200D U+26A7 U+FE0F",
            "emoji":"🏳️‍⚧️",
            "description":"Transgender Flag",
            "keywords":[
                "transgender",
                "flag"
            ]
        },
        {
            "no":1555,
            "code":"U+1F3F4 U+200D U+2620 U+FE0F",
            "emoji":"🏴‍☠️",
            "description":"Pirate Flag",
            "keywords":[
                "pirate",
                "flag"
            ]
        },
        {
            "no":1556,
            "code":"U+1F1E6 U+1F1E8",
            "emoji":"🇦🇨",
            "description":"Flag: Ascension Island",
            "keywords":[
                "flag",
                "Ascension",
                "Island"
            ]
        },
        {
            "no":1557,
            "code":"U+1F1E6 U+1F1E9",
            "emoji":"🇦🇩",
            "description":"Flag: Andorra",
            "keywords":[
                "flag",
                "Andorra"
            ]
        },
        {
            "no":1558,
            "code":"U+1F1E6 U+1F1EA",
            "emoji":"🇦🇪",
            "description":"Flag: United Arab Emirates",
            "keywords":[
                "flag",
                "United",
                "Arab",
                "Emirates"
            ]
        },
        {
            "no":1559,
            "code":"U+1F1E6 U+1F1EB",
            "emoji":"🇦🇫",
            "description":"Flag: Afghanistan",
            "keywords":[
                "flag",
                "Afghanistan"
            ]
        },
        {
            "no":1560,
            "code":"U+1F1E6 U+1F1EC",
            "emoji":"🇦🇬",
            "description":"Flag: Antigua & Barbuda",
            "keywords":[
                "flag",
                "Antigua",
                "&",
                "Barbuda"
            ]
        },
        {
            "no":1561,
            "code":"U+1F1E6 U+1F1EE",
            "emoji":"🇦🇮",
            "description":"Flag: Anguilla",
            "keywords":[
                "flag",
                "Anguilla"
            ]
        },
        {
            "no":1562,
            "code":"U+1F1E6 U+1F1F1",
            "emoji":"🇦🇱",
            "description":"Flag: Albania",
            "keywords":[
                "flag",
                "Albania"
            ]
        },
        {
            "no":1563,
            "code":"U+1F1E6 U+1F1F2",
            "emoji":"🇦🇲",
            "description":"Flag: Armenia",
            "keywords":[
                "flag",
                "Armenia"
            ]
        },
        {
            "no":1564,
            "code":"U+1F1E6 U+1F1F4",
            "emoji":"🇦🇴",
            "description":"Flag: Angola",
            "keywords":[
                "flag",
                "Angola"
            ]
        },
        {
            "no":1565,
            "code":"U+1F1E6 U+1F1F6",
            "emoji":"🇦🇶",
            "description":"Flag: Antarctica",
            "keywords":[
                "flag",
                "Antarctica"
            ]
        },
        {
            "no":1566,
            "code":"U+1F1E6 U+1F1F7",
            "emoji":"🇦🇷",
            "description":"Flag: Argentina",
            "keywords":[
                "flag",
                "Argentina"
            ]
        },
        {
            "no":1567,
            "code":"U+1F1E6 U+1F1F8",
            "emoji":"🇦🇸",
            "description":"Flag: American Samoa",
            "keywords":[
                "flag",
                "American",
                "Samoa"
            ]
        },
        {
            "no":1568,
            "code":"U+1F1E6 U+1F1F9",
            "emoji":"🇦🇹",
            "description":"Flag: Austria",
            "keywords":[
                "flag",
                "Austria"
            ]
        },
        {
            "no":1569,
            "code":"U+1F1E6 U+1F1FA",
            "emoji":"🇦🇺",
            "description":"Flag: Australia",
            "keywords":[
                "flag",
                "Australia"
            ]
        },
        {
            "no":1570,
            "code":"U+1F1E6 U+1F1FC",
            "emoji":"🇦🇼",
            "description":"Flag: Aruba",
            "keywords":[
                "flag",
                "Aruba"
            ]
        },
        {
            "no":1571,
            "code":"U+1F1E6 U+1F1FD",
            "emoji":"🇦🇽",
            "description":"Flag: åLand Islands",
            "keywords":[
                "flag",
                "Åland",
                "Islands"
            ]
        },
        {
            "no":1572,
            "code":"U+1F1E6 U+1F1FF",
            "emoji":"🇦🇿",
            "description":"Flag: Azerbaijan",
            "keywords":[
                "flag",
                "Azerbaijan"
            ]
        },
        {
            "no":1573,
            "code":"U+1F1E7 U+1F1E6",
            "emoji":"🇧🇦",
            "description":"Flag: Bosnia & Herzegovina",
            "keywords":[
                "flag",
                "Bosnia",
                "&",
                "Herzegovina"
            ]
        },
        {
            "no":1574,
            "code":"U+1F1E7 U+1F1E7",
            "emoji":"🇧🇧",
            "description":"Flag: Barbados",
            "keywords":[
                "flag",
                "Barbados"
            ]
        },
        {
            "no":1575,
            "code":"U+1F1E7 U+1F1E9",
            "emoji":"🇧🇩",
            "description":"Flag: Bangladesh",
            "keywords":[
                "flag",
                "Bangladesh"
            ]
        },
        {
            "no":1576,
            "code":"U+1F1E7 U+1F1EA",
            "emoji":"🇧🇪",
            "description":"Flag: Belgium",
            "keywords":[
                "flag",
                "Belgium"
            ]
        },
        {
            "no":1577,
            "code":"U+1F1E7 U+1F1EB",
            "emoji":"🇧🇫",
            "description":"Flag: Burkina Faso",
            "keywords":[
                "flag",
                "Burkina",
                "Faso"
            ]
        },
        {
            "no":1578,
            "code":"U+1F1E7 U+1F1EC",
            "emoji":"🇧🇬",
            "description":"Flag: Bulgaria",
            "keywords":[
                "flag",
                "Bulgaria"
            ]
        },
        {
            "no":1579,
            "code":"U+1F1E7 U+1F1ED",
            "emoji":"🇧🇭",
            "description":"Flag: Bahrain",
            "keywords":[
                "flag",
                "Bahrain"
            ]
        },
        {
            "no":1580,
            "code":"U+1F1E7 U+1F1EE",
            "emoji":"🇧🇮",
            "description":"Flag: Burundi",
            "keywords":[
                "flag",
                "Burundi"
            ]
        },
        {
            "no":1581,
            "code":"U+1F1E7 U+1F1EF",
            "emoji":"🇧🇯",
            "description":"Flag: Benin",
            "keywords":[
                "flag",
                "Benin"
            ]
        },
        {
            "no":1582,
            "code":"U+1F1E7 U+1F1F1",
            "emoji":"🇧🇱",
            "description":"Flag: St. BarthéLemy",
            "keywords":[
                "flag",
                "St",
                "Barthélemy"
            ]
        },
        {
            "no":1583,
            "code":"U+1F1E7 U+1F1F2",
            "emoji":"🇧🇲",
            "description":"Flag: Bermuda",
            "keywords":[
                "flag",
                "Bermuda"
            ]
        },
        {
            "no":1584,
            "code":"U+1F1E7 U+1F1F3",
            "emoji":"🇧🇳",
            "description":"Flag: Brunei",
            "keywords":[
                "flag",
                "Brunei"
            ]
        },
        {
            "no":1585,
            "code":"U+1F1E7 U+1F1F4",
            "emoji":"🇧🇴",
            "description":"Flag: Bolivia",
            "keywords":[
                "flag",
                "Bolivia"
            ]
        },
        {
            "no":1586,
            "code":"U+1F1E7 U+1F1F6",
            "emoji":"🇧🇶",
            "description":"Flag: Caribbean Netherlands",
            "keywords":[
                "flag",
                "Caribbean",
                "Netherlands"
            ]
        },
        {
            "no":1587,
            "code":"U+1F1E7 U+1F1F7",
            "emoji":"🇧🇷",
            "description":"Flag: Brazil",
            "keywords":[
                "flag",
                "Brazil"
            ]
        },
        {
            "no":1588,
            "code":"U+1F1E7 U+1F1F8",
            "emoji":"🇧🇸",
            "description":"Flag: Bahamas",
            "keywords":[
                "flag",
                "Bahamas"
            ]
        },
        {
            "no":1589,
            "code":"U+1F1E7 U+1F1F9",
            "emoji":"🇧🇹",
            "description":"Flag: Bhutan",
            "keywords":[
                "flag",
                "Bhutan"
            ]
        },
        {
            "no":1590,
            "code":"U+1F1E7 U+1F1FB",
            "emoji":"🇧🇻",
            "description":"Flag: Bouvet Island",
            "keywords":[
                "flag",
                "Bouvet",
                "Island"
            ]
        },
        {
            "no":1591,
            "code":"U+1F1E7 U+1F1FC",
            "emoji":"🇧🇼",
            "description":"Flag: Botswana",
            "keywords":[
                "flag",
                "Botswana"
            ]
        },
        {
            "no":1592,
            "code":"U+1F1E7 U+1F1FE",
            "emoji":"🇧🇾",
            "description":"Flag: Belarus",
            "keywords":[
                "flag",
                "Belarus"
            ]
        },
        {
            "no":1593,
            "code":"U+1F1E7 U+1F1FF",
            "emoji":"🇧🇿",
            "description":"Flag: Belize",
            "keywords":[
                "flag",
                "Belize"
            ]
        },
        {
            "no":1594,
            "code":"U+1F1E8 U+1F1E6",
            "emoji":"🇨🇦",
            "description":"Flag: Canada",
            "keywords":[
                "flag",
                "Canada"
            ]
        },
        {
            "no":1595,
            "code":"U+1F1E8 U+1F1E8",
            "emoji":"🇨🇨",
            "description":"Flag: Cocos (Keeling) Islands",
            "keywords":[
                "flag",
                "Cocos",
                "(Keeling)",
                "Islands"
            ]
        },
        {
            "no":1596,
            "code":"U+1F1E8 U+1F1E9",
            "emoji":"🇨🇩",
            "description":"Flag: Congo - Kinshasa",
            "keywords":[
                "flag",
                "Congo",
                "-",
                "Kinshasa"
            ]
        },
        {
            "no":1597,
            "code":"U+1F1E8 U+1F1EB",
            "emoji":"🇨🇫",
            "description":"Flag: Central African Republic",
            "keywords":[
                "flag",
                "Central",
                "African",
                "Republic"
            ]
        },
        {
            "no":1598,
            "code":"U+1F1E8 U+1F1EC",
            "emoji":"🇨🇬",
            "description":"Flag: Congo - Brazzaville",
            "keywords":[
                "flag",
                "Congo",
                "-",
                "Brazzaville"
            ]
        },
        {
            "no":1599,
            "code":"U+1F1E8 U+1F1ED",
            "emoji":"🇨🇭",
            "description":"Flag: Switzerland",
            "keywords":[
                "flag",
                "Switzerland"
            ]
        },
        {
            "no":1600,
            "code":"U+1F1E8 U+1F1EE",
            "emoji":"🇨🇮",
            "description":"Flag: CôTe D’Ivoire",
            "keywords":[
                "flag",
                "Côte",
                "d’Ivoire"
            ]
        },
        {
            "no":1601,
            "code":"U+1F1E8 U+1F1F0",
            "emoji":"🇨🇰",
            "description":"Flag: Cook Islands",
            "keywords":[
                "flag",
                "Cook",
                "Islands"
            ]
        },
        {
            "no":1602,
            "code":"U+1F1E8 U+1F1F1",
            "emoji":"🇨🇱",
            "description":"Flag: Chile",
            "keywords":[
                "flag",
                "Chile"
            ]
        },
        {
            "no":1603,
            "code":"U+1F1E8 U+1F1F2",
            "emoji":"🇨🇲",
            "description":"Flag: Cameroon",
            "keywords":[
                "flag",
                "Cameroon"
            ]
        },
        {
            "no":1604,
            "code":"U+1F1E8 U+1F1F3",
            "emoji":"🇨🇳",
            "description":"Flag: China",
            "keywords":[
                "flag",
                "China"
            ]
        },
        {
            "no":1605,
            "code":"U+1F1E8 U+1F1F4",
            "emoji":"🇨🇴",
            "description":"Flag: Colombia",
            "keywords":[
                "flag",
                "Colombia"
            ]
        },
        {
            "no":1606,
            "code":"U+1F1E8 U+1F1F5",
            "emoji":"🇨🇵",
            "description":"Flag: Clipperton Island",
            "keywords":[
                "flag",
                "Clipperton",
                "Island"
            ]
        },
        {
            "no":1607,
            "code":"U+1F1E8 U+1F1F7",
            "emoji":"🇨🇷",
            "description":"Flag: Costa Rica",
            "keywords":[
                "flag",
                "Costa",
                "Rica"
            ]
        },
        {
            "no":1608,
            "code":"U+1F1E8 U+1F1FA",
            "emoji":"🇨🇺",
            "description":"Flag: Cuba",
            "keywords":[
                "flag",
                "Cuba"
            ]
        },
        {
            "no":1609,
            "code":"U+1F1E8 U+1F1FB",
            "emoji":"🇨🇻",
            "description":"Flag: Cape Verde",
            "keywords":[
                "flag",
                "Cape",
                "Verde"
            ]
        },
        {
            "no":1610,
            "code":"U+1F1E8 U+1F1FC",
            "emoji":"🇨🇼",
            "description":"Flag: CuraçAo",
            "keywords":[
                "flag",
                "Curaçao"
            ]
        },
        {
            "no":1611,
            "code":"U+1F1E8 U+1F1FD",
            "emoji":"🇨🇽",
            "description":"Flag: Christmas Island",
            "keywords":[
                "flag",
                "Christmas",
                "Island"
            ]
        },
        {
            "no":1612,
            "code":"U+1F1E8 U+1F1FE",
            "emoji":"🇨🇾",
            "description":"Flag: Cyprus",
            "keywords":[
                "flag",
                "Cyprus"
            ]
        },
        {
            "no":1613,
            "code":"U+1F1E8 U+1F1FF",
            "emoji":"🇨🇿",
            "description":"Flag: Czechia",
            "keywords":[
                "flag",
                "Czechia"
            ]
        },
        {
            "no":1614,
            "code":"U+1F1E9 U+1F1EA",
            "emoji":"🇩🇪",
            "description":"Flag: Germany",
            "keywords":[
                "flag",
                "Germany"
            ]
        },
        {
            "no":1615,
            "code":"U+1F1E9 U+1F1EC",
            "emoji":"🇩🇬",
            "description":"Flag: Diego Garcia",
            "keywords":[
                "flag",
                "Diego",
                "Garcia"
            ]
        },
        {
            "no":1616,
            "code":"U+1F1E9 U+1F1EF",
            "emoji":"🇩🇯",
            "description":"Flag: Djibouti",
            "keywords":[
                "flag",
                "Djibouti"
            ]
        },
        {
            "no":1617,
            "code":"U+1F1E9 U+1F1F0",
            "emoji":"🇩🇰",
            "description":"Flag: Denmark",
            "keywords":[
                "flag",
                "Denmark"
            ]
        },
        {
            "no":1618,
            "code":"U+1F1E9 U+1F1F2",
            "emoji":"🇩🇲",
            "description":"Flag: Dominica",
            "keywords":[
                "flag",
                "Dominica"
            ]
        },
        {
            "no":1619,
            "code":"U+1F1E9 U+1F1F4",
            "emoji":"🇩🇴",
            "description":"Flag: Dominican Republic",
            "keywords":[
                "flag",
                "Dominican",
                "Republic"
            ]
        },
        {
            "no":1620,
            "code":"U+1F1E9 U+1F1FF",
            "emoji":"🇩🇿",
            "description":"Flag: Algeria",
            "keywords":[
                "flag",
                "Algeria"
            ]
        },
        {
            "no":1621,
            "code":"U+1F1EA U+1F1E6",
            "emoji":"🇪🇦",
            "description":"Flag: Ceuta & Melilla",
            "keywords":[
                "flag",
                "Ceuta",
                "&",
                "Melilla"
            ]
        },
        {
            "no":1622,
            "code":"U+1F1EA U+1F1E8",
            "emoji":"🇪🇨",
            "description":"Flag: Ecuador",
            "keywords":[
                "flag",
                "Ecuador"
            ]
        },
        {
            "no":1623,
            "code":"U+1F1EA U+1F1EA",
            "emoji":"🇪🇪",
            "description":"Flag: Estonia",
            "keywords":[
                "flag",
                "Estonia"
            ]
        },
        {
            "no":1624,
            "code":"U+1F1EA U+1F1EC",
            "emoji":"🇪🇬",
            "description":"Flag: Egypt",
            "keywords":[
                "flag",
                "Egypt"
            ]
        },
        {
            "no":1625,
            "code":"U+1F1EA U+1F1ED",
            "emoji":"🇪🇭",
            "description":"Flag: Western Sahara",
            "keywords":[
                "flag",
                "Western",
                "Sahara"
            ]
        },
        {
            "no":1626,
            "code":"U+1F1EA U+1F1F7",
            "emoji":"🇪🇷",
            "description":"Flag: Eritrea",
            "keywords":[
                "flag",
                "Eritrea"
            ]
        },
        {
            "no":1627,
            "code":"U+1F1EA U+1F1F8",
            "emoji":"🇪🇸",
            "description":"Flag: Spain",
            "keywords":[
                "flag",
                "Spain"
            ]
        },
        {
            "no":1628,
            "code":"U+1F1EA U+1F1F9",
            "emoji":"🇪🇹",
            "description":"Flag: Ethiopia",
            "keywords":[
                "flag",
                "Ethiopia"
            ]
        },
        {
            "no":1629,
            "code":"U+1F1EA U+1F1FA",
            "emoji":"🇪🇺",
            "description":"Flag: European Union",
            "keywords":[
                "flag",
                "European",
                "Union"
            ]
        },
        {
            "no":1630,
            "code":"U+1F1EB U+1F1EE",
            "emoji":"🇫🇮",
            "description":"Flag: Finland",
            "keywords":[
                "flag",
                "Finland"
            ]
        },
        {
            "no":1631,
            "code":"U+1F1EB U+1F1EF",
            "emoji":"🇫🇯",
            "description":"Flag: Fiji",
            "keywords":[
                "flag",
                "Fiji"
            ]
        },
        {
            "no":1632,
            "code":"U+1F1EB U+1F1F0",
            "emoji":"🇫🇰",
            "description":"Flag: Falkland Islands",
            "keywords":[
                "flag",
                "Falkland",
                "Islands"
            ]
        },
        {
            "no":1633,
            "code":"U+1F1EB U+1F1F2",
            "emoji":"🇫🇲",
            "description":"Flag: Micronesia",
            "keywords":[
                "flag",
                "Micronesia"
            ]
        },
        {
            "no":1634,
            "code":"U+1F1EB U+1F1F4",
            "emoji":"🇫🇴",
            "description":"Flag: Faroe Islands",
            "keywords":[
                "flag",
                "Faroe",
                "Islands"
            ]
        },
        {
            "no":1635,
            "code":"U+1F1EB U+1F1F7",
            "emoji":"🇫🇷",
            "description":"Flag: France",
            "keywords":[
                "flag",
                "France"
            ]
        },
        {
            "no":1636,
            "code":"U+1F1EC U+1F1E6",
            "emoji":"🇬🇦",
            "description":"Flag: Gabon",
            "keywords":[
                "flag",
                "Gabon"
            ]
        },
        {
            "no":1637,
            "code":"U+1F1EC U+1F1E7",
            "emoji":"🇬🇧",
            "description":"Flag: United Kingdom",
            "keywords":[
                "flag",
                "United",
                "Kingdom"
            ]
        },
        {
            "no":1638,
            "code":"U+1F1EC U+1F1E9",
            "emoji":"🇬🇩",
            "description":"Flag: Grenada",
            "keywords":[
                "flag",
                "Grenada"
            ]
        },
        {
            "no":1639,
            "code":"U+1F1EC U+1F1EA",
            "emoji":"🇬🇪",
            "description":"Flag: Georgia",
            "keywords":[
                "flag",
                "Georgia"
            ]
        },
        {
            "no":1640,
            "code":"U+1F1EC U+1F1EB",
            "emoji":"🇬🇫",
            "description":"Flag: French Guiana",
            "keywords":[
                "flag",
                "French",
                "Guiana"
            ]
        },
        {
            "no":1641,
            "code":"U+1F1EC U+1F1EC",
            "emoji":"🇬🇬",
            "description":"Flag: Guernsey",
            "keywords":[
                "flag",
                "Guernsey"
            ]
        },
        {
            "no":1642,
            "code":"U+1F1EC U+1F1ED",
            "emoji":"🇬🇭",
            "description":"Flag: Ghana",
            "keywords":[
                "flag",
                "Ghana"
            ]
        },
        {
            "no":1643,
            "code":"U+1F1EC U+1F1EE",
            "emoji":"🇬🇮",
            "description":"Flag: Gibraltar",
            "keywords":[
                "flag",
                "Gibraltar"
            ]
        },
        {
            "no":1644,
            "code":"U+1F1EC U+1F1F1",
            "emoji":"🇬🇱",
            "description":"Flag: Greenland",
            "keywords":[
                "flag",
                "Greenland"
            ]
        },
        {
            "no":1645,
            "code":"U+1F1EC U+1F1F2",
            "emoji":"🇬🇲",
            "description":"Flag: Gambia",
            "keywords":[
                "flag",
                "Gambia"
            ]
        },
        {
            "no":1646,
            "code":"U+1F1EC U+1F1F3",
            "emoji":"🇬🇳",
            "description":"Flag: Guinea",
            "keywords":[
                "flag",
                "Guinea"
            ]
        },
        {
            "no":1647,
            "code":"U+1F1EC U+1F1F5",
            "emoji":"🇬🇵",
            "description":"Flag: Guadeloupe",
            "keywords":[
                "flag",
                "Guadeloupe"
            ]
        },
        {
            "no":1648,
            "code":"U+1F1EC U+1F1F6",
            "emoji":"🇬🇶",
            "description":"Flag: Equatorial Guinea",
            "keywords":[
                "flag",
                "Equatorial",
                "Guinea"
            ]
        },
        {
            "no":1649,
            "code":"U+1F1EC U+1F1F7",
            "emoji":"🇬🇷",
            "description":"Flag: Greece",
            "keywords":[
                "flag",
                "Greece"
            ]
        },
        {
            "no":1650,
            "code":"U+1F1EC U+1F1F8",
            "emoji":"🇬🇸",
            "description":"Flag: South Georgia & South Sandwich Islands",
            "keywords":[
                "flag",
                "South",
                "Georgia",
                "&",
                "South",
                "Sandwich",
                "Islands"
            ]
        },
        {
            "no":1651,
            "code":"U+1F1EC U+1F1F9",
            "emoji":"🇬🇹",
            "description":"Flag: Guatemala",
            "keywords":[
                "flag",
                "Guatemala"
            ]
        },
        {
            "no":1652,
            "code":"U+1F1EC U+1F1FA",
            "emoji":"🇬🇺",
            "description":"Flag: Guam",
            "keywords":[
                "flag",
                "Guam"
            ]
        },
        {
            "no":1653,
            "code":"U+1F1EC U+1F1FC",
            "emoji":"🇬🇼",
            "description":"Flag: Guinea-Bissau",
            "keywords":[
                "flag",
                "Guinea-Bissau"
            ]
        },
        {
            "no":1654,
            "code":"U+1F1EC U+1F1FE",
            "emoji":"🇬🇾",
            "description":"Flag: Guyana",
            "keywords":[
                "flag",
                "Guyana"
            ]
        },
        {
            "no":1655,
            "code":"U+1F1ED U+1F1F0",
            "emoji":"🇭🇰",
            "description":"Flag: Hong Kong Sar China",
            "keywords":[
                "flag",
                "Hong",
                "Kong",
                "SAR",
                "China"
            ]
        },
        {
            "no":1656,
            "code":"U+1F1ED U+1F1F2",
            "emoji":"🇭🇲",
            "description":"Flag: Heard & Mcdonald Islands",
            "keywords":[
                "flag",
                "Heard",
                "&",
                "McDonald",
                "Islands"
            ]
        },
        {
            "no":1657,
            "code":"U+1F1ED U+1F1F3",
            "emoji":"🇭🇳",
            "description":"Flag: Honduras",
            "keywords":[
                "flag",
                "Honduras"
            ]
        },
        {
            "no":1658,
            "code":"U+1F1ED U+1F1F7",
            "emoji":"🇭🇷",
            "description":"Flag: Croatia",
            "keywords":[
                "flag",
                "Croatia"
            ]
        },
        {
            "no":1659,
            "code":"U+1F1ED U+1F1F9",
            "emoji":"🇭🇹",
            "description":"Flag: Haiti",
            "keywords":[
                "flag",
                "Haiti"
            ]
        },
        {
            "no":1660,
            "code":"U+1F1ED U+1F1FA",
            "emoji":"🇭🇺",
            "description":"Flag: Hungary",
            "keywords":[
                "flag",
                "Hungary"
            ]
        },
        {
            "no":1661,
            "code":"U+1F1EE U+1F1E8",
            "emoji":"🇮🇨",
            "description":"Flag: Canary Islands",
            "keywords":[
                "flag",
                "Canary",
                "Islands"
            ]
        },
        {
            "no":1662,
            "code":"U+1F1EE U+1F1E9",
            "emoji":"🇮🇩",
            "description":"Flag: Indonesia",
            "keywords":[
                "flag",
                "Indonesia"
            ]
        },
        {
            "no":1663,
            "code":"U+1F1EE U+1F1EA",
            "emoji":"🇮🇪",
            "description":"Flag: Ireland",
            "keywords":[
                "flag",
                "Ireland"
            ]
        },
        {
            "no":1664,
            "code":"U+1F1EE U+1F1F1",
            "emoji":"🇮🇱",
            "description":"Flag: Israel",
            "keywords":[
                "flag",
                "Israel"
            ]
        },
        {
            "no":1665,
            "code":"U+1F1EE U+1F1F2",
            "emoji":"🇮🇲",
            "description":"Flag: Isle Of Man",
            "keywords":[
                "flag",
                "Isle",
                "Man"
            ]
        },
        {
            "no":1666,
            "code":"U+1F1EE U+1F1F3",
            "emoji":"🇮🇳",
            "description":"Flag: India",
            "keywords":[
                "flag",
                "India"
            ]
        },
        {
            "no":1667,
            "code":"U+1F1EE U+1F1F4",
            "emoji":"🇮🇴",
            "description":"Flag: British Indian Ocean Territory",
            "keywords":[
                "flag",
                "British",
                "Indian",
                "Ocean",
                "Territory"
            ]
        },
        {
            "no":1668,
            "code":"U+1F1EE U+1F1F6",
            "emoji":"🇮🇶",
            "description":"Flag: Iraq",
            "keywords":[
                "flag",
                "Iraq"
            ]
        },
        {
            "no":1669,
            "code":"U+1F1EE U+1F1F7",
            "emoji":"🇮🇷",
            "description":"Flag: Iran",
            "keywords":[
                "flag",
                "Iran"
            ]
        },
        {
            "no":1670,
            "code":"U+1F1EE U+1F1F8",
            "emoji":"🇮🇸",
            "description":"Flag: Iceland",
            "keywords":[
                "flag",
                "Iceland"
            ]
        },
        {
            "no":1671,
            "code":"U+1F1EE U+1F1F9",
            "emoji":"🇮🇹",
            "description":"Flag: Italy",
            "keywords":[
                "flag",
                "Italy"
            ]
        },
        {
            "no":1672,
            "code":"U+1F1EF U+1F1EA",
            "emoji":"🇯🇪",
            "description":"Flag: Jersey",
            "keywords":[
                "flag",
                "Jersey"
            ]
        },
        {
            "no":1673,
            "code":"U+1F1EF U+1F1F2",
            "emoji":"🇯🇲",
            "description":"Flag: Jamaica",
            "keywords":[
                "flag",
                "Jamaica"
            ]
        },
        {
            "no":1674,
            "code":"U+1F1EF U+1F1F4",
            "emoji":"🇯🇴",
            "description":"Flag: Jordan",
            "keywords":[
                "flag",
                "Jordan"
            ]
        },
        {
            "no":1675,
            "code":"U+1F1EF U+1F1F5",
            "emoji":"🇯🇵",
            "description":"Flag: Japan",
            "keywords":[
                "flag",
                "Japan"
            ]
        },
        {
            "no":1676,
            "code":"U+1F1F0 U+1F1EA",
            "emoji":"🇰🇪",
            "description":"Flag: Kenya",
            "keywords":[
                "flag",
                "Kenya"
            ]
        },
        {
            "no":1677,
            "code":"U+1F1F0 U+1F1EC",
            "emoji":"🇰🇬",
            "description":"Flag: Kyrgyzstan",
            "keywords":[
                "flag",
                "Kyrgyzstan"
            ]
        },
        {
            "no":1678,
            "code":"U+1F1F0 U+1F1ED",
            "emoji":"🇰🇭",
            "description":"Flag: Cambodia",
            "keywords":[
                "flag",
                "Cambodia"
            ]
        },
        {
            "no":1679,
            "code":"U+1F1F0 U+1F1EE",
            "emoji":"🇰🇮",
            "description":"Flag: Kiribati",
            "keywords":[
                "flag",
                "Kiribati"
            ]
        },
        {
            "no":1680,
            "code":"U+1F1F0 U+1F1F2",
            "emoji":"🇰🇲",
            "description":"Flag: Comoros",
            "keywords":[
                "flag",
                "Comoros"
            ]
        },
        {
            "no":1681,
            "code":"U+1F1F0 U+1F1F3",
            "emoji":"🇰🇳",
            "description":"Flag: St. Kitts & Nevis",
            "keywords":[
                "flag",
                "St",
                "Kitts",
                "&",
                "Nevis"
            ]
        },
        {
            "no":1682,
            "code":"U+1F1F0 U+1F1F5",
            "emoji":"🇰🇵",
            "description":"Flag: North Korea",
            "keywords":[
                "flag",
                "North",
                "Korea"
            ]
        },
        {
            "no":1683,
            "code":"U+1F1F0 U+1F1F7",
            "emoji":"🇰🇷",
            "description":"Flag: South Korea",
            "keywords":[
                "flag",
                "South",
                "Korea"
            ]
        },
        {
            "no":1684,
            "code":"U+1F1F0 U+1F1FC",
            "emoji":"🇰🇼",
            "description":"Flag: Kuwait",
            "keywords":[
                "flag",
                "Kuwait"
            ]
        },
        {
            "no":1685,
            "code":"U+1F1F0 U+1F1FE",
            "emoji":"🇰🇾",
            "description":"Flag: Cayman Islands",
            "keywords":[
                "flag",
                "Cayman",
                "Islands"
            ]
        },
        {
            "no":1686,
            "code":"U+1F1F0 U+1F1FF",
            "emoji":"🇰🇿",
            "description":"Flag: Kazakhstan",
            "keywords":[
                "flag",
                "Kazakhstan"
            ]
        },
        {
            "no":1687,
            "code":"U+1F1F1 U+1F1E6",
            "emoji":"🇱🇦",
            "description":"Flag: Laos",
            "keywords":[
                "flag",
                "Laos"
            ]
        },
        {
            "no":1688,
            "code":"U+1F1F1 U+1F1E7",
            "emoji":"🇱🇧",
            "description":"Flag: Lebanon",
            "keywords":[
                "flag",
                "Lebanon"
            ]
        },
        {
            "no":1689,
            "code":"U+1F1F1 U+1F1E8",
            "emoji":"🇱🇨",
            "description":"Flag: St. Lucia",
            "keywords":[
                "flag",
                "St",
                "Lucia"
            ]
        },
        {
            "no":1690,
            "code":"U+1F1F1 U+1F1EE",
            "emoji":"🇱🇮",
            "description":"Flag: Liechtenstein",
            "keywords":[
                "flag",
                "Liechtenstein"
            ]
        },
        {
            "no":1691,
            "code":"U+1F1F1 U+1F1F0",
            "emoji":"🇱🇰",
            "description":"Flag: Sri Lanka",
            "keywords":[
                "flag",
                "Sri",
                "Lanka"
            ]
        },
        {
            "no":1692,
            "code":"U+1F1F1 U+1F1F7",
            "emoji":"🇱🇷",
            "description":"Flag: Liberia",
            "keywords":[
                "flag",
                "Liberia"
            ]
        },
        {
            "no":1693,
            "code":"U+1F1F1 U+1F1F8",
            "emoji":"🇱🇸",
            "description":"Flag: Lesotho",
            "keywords":[
                "flag",
                "Lesotho"
            ]
        },
        {
            "no":1694,
            "code":"U+1F1F1 U+1F1F9",
            "emoji":"🇱🇹",
            "description":"Flag: Lithuania",
            "keywords":[
                "flag",
                "Lithuania"
            ]
        },
        {
            "no":1695,
            "code":"U+1F1F1 U+1F1FA",
            "emoji":"🇱🇺",
            "description":"Flag: Luxembourg",
            "keywords":[
                "flag",
                "Luxembourg"
            ]
        },
        {
            "no":1696,
            "code":"U+1F1F1 U+1F1FB",
            "emoji":"🇱🇻",
            "description":"Flag: Latvia",
            "keywords":[
                "flag",
                "Latvia"
            ]
        },
        {
            "no":1697,
            "code":"U+1F1F1 U+1F1FE",
            "emoji":"🇱🇾",
            "description":"Flag: Libya",
            "keywords":[
                "flag",
                "Libya"
            ]
        },
        {
            "no":1698,
            "code":"U+1F1F2 U+1F1E6",
            "emoji":"🇲🇦",
            "description":"Flag: Morocco",
            "keywords":[
                "flag",
                "Morocco"
            ]
        },
        {
            "no":1699,
            "code":"U+1F1F2 U+1F1E8",
            "emoji":"🇲🇨",
            "description":"Flag: Monaco",
            "keywords":[
                "flag",
                "Monaco"
            ]
        },
        {
            "no":1700,
            "code":"U+1F1F2 U+1F1E9",
            "emoji":"🇲🇩",
            "description":"Flag: Moldova",
            "keywords":[
                "flag",
                "Moldova"
            ]
        },
        {
            "no":1701,
            "code":"U+1F1F2 U+1F1EA",
            "emoji":"🇲🇪",
            "description":"Flag: Montenegro",
            "keywords":[
                "flag",
                "Montenegro"
            ]
        },
        {
            "no":1702,
            "code":"U+1F1F2 U+1F1EB",
            "emoji":"🇲🇫",
            "description":"Flag: St. Martin",
            "keywords":[
                "flag",
                "St",
                "Martin"
            ]
        },
        {
            "no":1703,
            "code":"U+1F1F2 U+1F1EC",
            "emoji":"🇲🇬",
            "description":"Flag: Madagascar",
            "keywords":[
                "flag",
                "Madagascar"
            ]
        },
        {
            "no":1704,
            "code":"U+1F1F2 U+1F1ED",
            "emoji":"🇲🇭",
            "description":"Flag: Marshall Islands",
            "keywords":[
                "flag",
                "Marshall",
                "Islands"
            ]
        },
        {
            "no":1705,
            "code":"U+1F1F2 U+1F1F0",
            "emoji":"🇲🇰",
            "description":"Flag: North Macedonia",
            "keywords":[
                "flag",
                "North",
                "Macedonia"
            ]
        },
        {
            "no":1706,
            "code":"U+1F1F2 U+1F1F1",
            "emoji":"🇲🇱",
            "description":"Flag: Mali",
            "keywords":[
                "flag",
                "Mali"
            ]
        },
        {
            "no":1707,
            "code":"U+1F1F2 U+1F1F2",
            "emoji":"🇲🇲",
            "description":"Flag: Myanmar (Burma)",
            "keywords":[
                "flag",
                "Myanmar",
                "(Burma)"
            ]
        },
        {
            "no":1708,
            "code":"U+1F1F2 U+1F1F3",
            "emoji":"🇲🇳",
            "description":"Flag: Mongolia",
            "keywords":[
                "flag",
                "Mongolia"
            ]
        },
        {
            "no":1709,
            "code":"U+1F1F2 U+1F1F4",
            "emoji":"🇲🇴",
            "description":"Flag: Macao Sar China",
            "keywords":[
                "flag",
                "Macao",
                "SAR",
                "China"
            ]
        },
        {
            "no":1710,
            "code":"U+1F1F2 U+1F1F5",
            "emoji":"🇲🇵",
            "description":"Flag: Northern Mariana Islands",
            "keywords":[
                "flag",
                "Northern",
                "Mariana",
                "Islands"
            ]
        },
        {
            "no":1711,
            "code":"U+1F1F2 U+1F1F6",
            "emoji":"🇲🇶",
            "description":"Flag: Martinique",
            "keywords":[
                "flag",
                "Martinique"
            ]
        },
        {
            "no":1712,
            "code":"U+1F1F2 U+1F1F7",
            "emoji":"🇲🇷",
            "description":"Flag: Mauritania",
            "keywords":[
                "flag",
                "Mauritania"
            ]
        },
        {
            "no":1713,
            "code":"U+1F1F2 U+1F1F8",
            "emoji":"🇲🇸",
            "description":"Flag: Montserrat",
            "keywords":[
                "flag",
                "Montserrat"
            ]
        },
        {
            "no":1714,
            "code":"U+1F1F2 U+1F1F9",
            "emoji":"🇲🇹",
            "description":"Flag: Malta",
            "keywords":[
                "flag",
                "Malta"
            ]
        },
        {
            "no":1715,
            "code":"U+1F1F2 U+1F1FA",
            "emoji":"🇲🇺",
            "description":"Flag: Mauritius",
            "keywords":[
                "flag",
                "Mauritius"
            ]
        },
        {
            "no":1716,
            "code":"U+1F1F2 U+1F1FB",
            "emoji":"🇲🇻",
            "description":"Flag: Maldives",
            "keywords":[
                "flag",
                "Maldives"
            ]
        },
        {
            "no":1717,
            "code":"U+1F1F2 U+1F1FC",
            "emoji":"🇲🇼",
            "description":"Flag: Malawi",
            "keywords":[
                "flag",
                "Malawi"
            ]
        },
        {
            "no":1718,
            "code":"U+1F1F2 U+1F1FD",
            "emoji":"🇲🇽",
            "description":"Flag: Mexico",
            "keywords":[
                "flag",
                "Mexico"
            ]
        },
        {
            "no":1719,
            "code":"U+1F1F2 U+1F1FE",
            "emoji":"🇲🇾",
            "description":"Flag: Malaysia",
            "keywords":[
                "flag",
                "Malaysia"
            ]
        },
        {
            "no":1720,
            "code":"U+1F1F2 U+1F1FF",
            "emoji":"🇲🇿",
            "description":"Flag: Mozambique",
            "keywords":[
                "flag",
                "Mozambique"
            ]
        },
        {
            "no":1721,
            "code":"U+1F1F3 U+1F1E6",
            "emoji":"🇳🇦",
            "description":"Flag: Namibia",
            "keywords":[
                "flag",
                "Namibia"
            ]
        },
        {
            "no":1722,
            "code":"U+1F1F3 U+1F1E8",
            "emoji":"🇳🇨",
            "description":"Flag: New Caledonia",
            "keywords":[
                "flag",
                "New",
                "Caledonia"
            ]
        },
        {
            "no":1723,
            "code":"U+1F1F3 U+1F1EA",
            "emoji":"🇳🇪",
            "description":"Flag: Niger",
            "keywords":[
                "flag",
                "Niger"
            ]
        },
        {
            "no":1724,
            "code":"U+1F1F3 U+1F1EB",
            "emoji":"🇳🇫",
            "description":"Flag: Norfolk Island",
            "keywords":[
                "flag",
                "Norfolk",
                "Island"
            ]
        },
        {
            "no":1725,
            "code":"U+1F1F3 U+1F1EC",
            "emoji":"🇳🇬",
            "description":"Flag: Nigeria",
            "keywords":[
                "flag",
                "Nigeria"
            ]
        },
        {
            "no":1726,
            "code":"U+1F1F3 U+1F1EE",
            "emoji":"🇳🇮",
            "description":"Flag: Nicaragua",
            "keywords":[
                "flag",
                "Nicaragua"
            ]
        },
        {
            "no":1727,
            "code":"U+1F1F3 U+1F1F1",
            "emoji":"🇳🇱",
            "description":"Flag: Netherlands",
            "keywords":[
                "flag",
                "Netherlands"
            ]
        },
        {
            "no":1728,
            "code":"U+1F1F3 U+1F1F4",
            "emoji":"🇳🇴",
            "description":"Flag: Norway",
            "keywords":[
                "flag",
                "Norway"
            ]
        },
        {
            "no":1729,
            "code":"U+1F1F3 U+1F1F5",
            "emoji":"🇳🇵",
            "description":"Flag: Nepal",
            "keywords":[
                "flag",
                "Nepal"
            ]
        },
        {
            "no":1730,
            "code":"U+1F1F3 U+1F1F7",
            "emoji":"🇳🇷",
            "description":"Flag: Nauru",
            "keywords":[
                "flag",
                "Nauru"
            ]
        },
        {
            "no":1731,
            "code":"U+1F1F3 U+1F1FA",
            "emoji":"🇳🇺",
            "description":"Flag: Niue",
            "keywords":[
                "flag",
                "Niue"
            ]
        },
        {
            "no":1732,
            "code":"U+1F1F3 U+1F1FF",
            "emoji":"🇳🇿",
            "description":"Flag: New Zealand",
            "keywords":[
                "flag",
                "New",
                "Zealand"
            ]
        },
        {
            "no":1733,
            "code":"U+1F1F4 U+1F1F2",
            "emoji":"🇴🇲",
            "description":"Flag: Oman",
            "keywords":[
                "flag",
                "Oman"
            ]
        },
        {
            "no":1734,
            "code":"U+1F1F5 U+1F1E6",
            "emoji":"🇵🇦",
            "description":"Flag: Panama",
            "keywords":[
                "flag",
                "Panama"
            ]
        },
        {
            "no":1735,
            "code":"U+1F1F5 U+1F1EA",
            "emoji":"🇵🇪",
            "description":"Flag: Peru",
            "keywords":[
                "flag",
                "Peru"
            ]
        },
        {
            "no":1736,
            "code":"U+1F1F5 U+1F1EB",
            "emoji":"🇵🇫",
            "description":"Flag: French Polynesia",
            "keywords":[
                "flag",
                "French",
                "Polynesia"
            ]
        },
        {
            "no":1737,
            "code":"U+1F1F5 U+1F1EC",
            "emoji":"🇵🇬",
            "description":"Flag: Papua New Guinea",
            "keywords":[
                "flag",
                "Papua",
                "New",
                "Guinea"
            ]
        },
        {
            "no":1738,
            "code":"U+1F1F5 U+1F1ED",
            "emoji":"🇵🇭",
            "description":"Flag: Philippines",
            "keywords":[
                "flag",
                "Philippines"
            ]
        },
        {
            "no":1739,
            "code":"U+1F1F5 U+1F1F0",
            "emoji":"🇵🇰",
            "description":"Flag: Pakistan",
            "keywords":[
                "flag",
                "Pakistan"
            ]
        },
        {
            "no":1740,
            "code":"U+1F1F5 U+1F1F1",
            "emoji":"🇵🇱",
            "description":"Flag: Poland",
            "keywords":[
                "flag",
                "Poland"
            ]
        },
        {
            "no":1741,
            "code":"U+1F1F5 U+1F1F2",
            "emoji":"🇵🇲",
            "description":"Flag: St. Pierre & Miquelon",
            "keywords":[
                "flag",
                "St",
                "Pierre",
                "&",
                "Miquelon"
            ]
        },
        {
            "no":1742,
            "code":"U+1F1F5 U+1F1F3",
            "emoji":"🇵🇳",
            "description":"Flag: Pitcairn Islands",
            "keywords":[
                "flag",
                "Pitcairn",
                "Islands"
            ]
        },
        {
            "no":1743,
            "code":"U+1F1F5 U+1F1F7",
            "emoji":"🇵🇷",
            "description":"Flag: Puerto Rico",
            "keywords":[
                "flag",
                "Puerto",
                "Rico"
            ]
        },
        {
            "no":1744,
            "code":"U+1F1F5 U+1F1F8",
            "emoji":"🇵🇸",
            "description":"Flag: Palestinian Territories",
            "keywords":[
                "flag",
                "Palestinian",
                "Territories"
            ]
        },
        {
            "no":1745,
            "code":"U+1F1F5 U+1F1F9",
            "emoji":"🇵🇹",
            "description":"Flag: Portugal",
            "keywords":[
                "flag",
                "Portugal"
            ]
        },
        {
            "no":1746,
            "code":"U+1F1F5 U+1F1FC",
            "emoji":"🇵🇼",
            "description":"Flag: Palau",
            "keywords":[
                "flag",
                "Palau"
            ]
        },
        {
            "no":1747,
            "code":"U+1F1F5 U+1F1FE",
            "emoji":"🇵🇾",
            "description":"Flag: Paraguay",
            "keywords":[
                "flag",
                "Paraguay"
            ]
        },
        {
            "no":1748,
            "code":"U+1F1F6 U+1F1E6",
            "emoji":"🇶🇦",
            "description":"Flag: Qatar",
            "keywords":[
                "flag",
                "Qatar"
            ]
        },
        {
            "no":1749,
            "code":"U+1F1F7 U+1F1EA",
            "emoji":"🇷🇪",
            "description":"Flag: RéUnion",
            "keywords":[
                "flag",
                "Réunion"
            ]
        },
        {
            "no":1750,
            "code":"U+1F1F7 U+1F1F4",
            "emoji":"🇷🇴",
            "description":"Flag: Romania",
            "keywords":[
                "flag",
                "Romania"
            ]
        },
        {
            "no":1751,
            "code":"U+1F1F7 U+1F1F8",
            "emoji":"🇷🇸",
            "description":"Flag: Serbia",
            "keywords":[
                "flag",
                "Serbia"
            ]
        },
        {
            "no":1752,
            "code":"U+1F1F7 U+1F1FA",
            "emoji":"🇷🇺",
            "description":"Flag: Russia",
            "keywords":[
                "flag",
                "Russia"
            ]
        },
        {
            "no":1753,
            "code":"U+1F1F7 U+1F1FC",
            "emoji":"🇷🇼",
            "description":"Flag: Rwanda",
            "keywords":[
                "flag",
                "Rwanda"
            ]
        },
        {
            "no":1754,
            "code":"U+1F1F8 U+1F1E6",
            "emoji":"🇸🇦",
            "description":"Flag: Saudi Arabia",
            "keywords":[
                "flag",
                "Saudi",
                "Arabia"
            ]
        },
        {
            "no":1755,
            "code":"U+1F1F8 U+1F1E7",
            "emoji":"🇸🇧",
            "description":"Flag: Solomon Islands",
            "keywords":[
                "flag",
                "Solomon",
                "Islands"
            ]
        },
        {
            "no":1756,
            "code":"U+1F1F8 U+1F1E8",
            "emoji":"🇸🇨",
            "description":"Flag: Seychelles",
            "keywords":[
                "flag",
                "Seychelles"
            ]
        },
        {
            "no":1757,
            "code":"U+1F1F8 U+1F1E9",
            "emoji":"🇸🇩",
            "description":"Flag: Sudan",
            "keywords":[
                "flag",
                "Sudan"
            ]
        },
        {
            "no":1758,
            "code":"U+1F1F8 U+1F1EA",
            "emoji":"🇸🇪",
            "description":"Flag: Sweden",
            "keywords":[
                "flag",
                "Sweden"
            ]
        },
        {
            "no":1759,
            "code":"U+1F1F8 U+1F1EC",
            "emoji":"🇸🇬",
            "description":"Flag: Singapore",
            "keywords":[
                "flag",
                "Singapore"
            ]
        },
        {
            "no":1760,
            "code":"U+1F1F8 U+1F1ED",
            "emoji":"🇸🇭",
            "description":"Flag: St. Helena",
            "keywords":[
                "flag",
                "St",
                "Helena"
            ]
        },
        {
            "no":1761,
            "code":"U+1F1F8 U+1F1EE",
            "emoji":"🇸🇮",
            "description":"Flag: Slovenia",
            "keywords":[
                "flag",
                "Slovenia"
            ]
        },
        {
            "no":1762,
            "code":"U+1F1F8 U+1F1EF",
            "emoji":"🇸🇯",
            "description":"Flag: Svalbard & Jan Mayen",
            "keywords":[
                "flag",
                "Svalbard",
                "&",
                "Jan",
                "Mayen"
            ]
        },
        {
            "no":1763,
            "code":"U+1F1F8 U+1F1F0",
            "emoji":"🇸🇰",
            "description":"Flag: Slovakia",
            "keywords":[
                "flag",
                "Slovakia"
            ]
        },
        {
            "no":1764,
            "code":"U+1F1F8 U+1F1F1",
            "emoji":"🇸🇱",
            "description":"Flag: Sierra Leone",
            "keywords":[
                "flag",
                "Sierra",
                "Leone"
            ]
        },
        {
            "no":1765,
            "code":"U+1F1F8 U+1F1F2",
            "emoji":"🇸🇲",
            "description":"Flag: San Marino",
            "keywords":[
                "flag",
                "San",
                "Marino"
            ]
        },
        {
            "no":1766,
            "code":"U+1F1F8 U+1F1F3",
            "emoji":"🇸🇳",
            "description":"Flag: Senegal",
            "keywords":[
                "flag",
                "Senegal"
            ]
        },
        {
            "no":1767,
            "code":"U+1F1F8 U+1F1F4",
            "emoji":"🇸🇴",
            "description":"Flag: Somalia",
            "keywords":[
                "flag",
                "Somalia"
            ]
        },
        {
            "no":1768,
            "code":"U+1F1F8 U+1F1F7",
            "emoji":"🇸🇷",
            "description":"Flag: Suriname",
            "keywords":[
                "flag",
                "Suriname"
            ]
        },
        {
            "no":1769,
            "code":"U+1F1F8 U+1F1F8",
            "emoji":"🇸🇸",
            "description":"Flag: South Sudan",
            "keywords":[
                "flag",
                "South",
                "Sudan"
            ]
        },
        {
            "no":1770,
            "code":"U+1F1F8 U+1F1F9",
            "emoji":"🇸🇹",
            "description":"Flag: SãO Tomé & PríNcipe",
            "keywords":[
                "flag",
                "São",
                "Tomé",
                "&",
                "Príncipe"
            ]
        },
        {
            "no":1771,
            "code":"U+1F1F8 U+1F1FB",
            "emoji":"🇸🇻",
            "description":"Flag: El Salvador",
            "keywords":[
                "flag",
                "El",
                "Salvador"
            ]
        },
        {
            "no":1772,
            "code":"U+1F1F8 U+1F1FD",
            "emoji":"🇸🇽",
            "description":"Flag: Sint Maarten",
            "keywords":[
                "flag",
                "Sint",
                "Maarten"
            ]
        },
        {
            "no":1773,
            "code":"U+1F1F8 U+1F1FE",
            "emoji":"🇸🇾",
            "description":"Flag: Syria",
            "keywords":[
                "flag",
                "Syria"
            ]
        },
        {
            "no":1774,
            "code":"U+1F1F8 U+1F1FF",
            "emoji":"🇸🇿",
            "description":"Flag: Eswatini",
            "keywords":[
                "flag",
                "Eswatini"
            ]
        },
        {
            "no":1775,
            "code":"U+1F1F9 U+1F1E6",
            "emoji":"🇹🇦",
            "description":"Flag: Tristan Da Cunha",
            "keywords":[
                "flag",
                "Tristan",
                "da",
                "Cunha"
            ]
        },
        {
            "no":1776,
            "code":"U+1F1F9 U+1F1E8",
            "emoji":"🇹🇨",
            "description":"Flag: Turks & Caicos Islands",
            "keywords":[
                "flag",
                "Turks",
                "&",
                "Caicos",
                "Islands"
            ]
        },
        {
            "no":1777,
            "code":"U+1F1F9 U+1F1E9",
            "emoji":"🇹🇩",
            "description":"Flag: Chad",
            "keywords":[
                "flag",
                "Chad"
            ]
        },
        {
            "no":1778,
            "code":"U+1F1F9 U+1F1EB",
            "emoji":"🇹🇫",
            "description":"Flag: French Southern Territories",
            "keywords":[
                "flag",
                "French",
                "Southern",
                "Territories"
            ]
        },
        {
            "no":1779,
            "code":"U+1F1F9 U+1F1EC",
            "emoji":"🇹🇬",
            "description":"Flag: Togo",
            "keywords":[
                "flag",
                "Togo"
            ]
        },
        {
            "no":1780,
            "code":"U+1F1F9 U+1F1ED",
            "emoji":"🇹🇭",
            "description":"Flag: Thailand",
            "keywords":[
                "flag",
                "Thailand"
            ]
        },
        {
            "no":1781,
            "code":"U+1F1F9 U+1F1EF",
            "emoji":"🇹🇯",
            "description":"Flag: Tajikistan",
            "keywords":[
                "flag",
                "Tajikistan"
            ]
        },
        {
            "no":1782,
            "code":"U+1F1F9 U+1F1F0",
            "emoji":"🇹🇰",
            "description":"Flag: Tokelau",
            "keywords":[
                "flag",
                "Tokelau"
            ]
        },
        {
            "no":1783,
            "code":"U+1F1F9 U+1F1F1",
            "emoji":"🇹🇱",
            "description":"Flag: Timor-Leste",
            "keywords":[
                "flag",
                "Timor-Leste"
            ]
        },
        {
            "no":1784,
            "code":"U+1F1F9 U+1F1F2",
            "emoji":"🇹🇲",
            "description":"Flag: Turkmenistan",
            "keywords":[
                "flag",
                "Turkmenistan"
            ]
        },
        {
            "no":1785,
            "code":"U+1F1F9 U+1F1F3",
            "emoji":"🇹🇳",
            "description":"Flag: Tunisia",
            "keywords":[
                "flag",
                "Tunisia"
            ]
        },
        {
            "no":1786,
            "code":"U+1F1F9 U+1F1F4",
            "emoji":"🇹🇴",
            "description":"Flag: Tonga",
            "keywords":[
                "flag",
                "Tonga"
            ]
        },
        {
            "no":1787,
            "code":"U+1F1F9 U+1F1F7",
            "emoji":"🇹🇷",
            "description":"Flag: Turkey",
            "keywords":[
                "flag",
                "Turkey"
            ]
        },
        {
            "no":1788,
            "code":"U+1F1F9 U+1F1F9",
            "emoji":"🇹🇹",
            "description":"Flag: Trinidad & Tobago",
            "keywords":[
                "flag",
                "Trinidad",
                "&",
                "Tobago"
            ]
        },
        {
            "no":1789,
            "code":"U+1F1F9 U+1F1FB",
            "emoji":"🇹🇻",
            "description":"Flag: Tuvalu",
            "keywords":[
                "flag",
                "Tuvalu"
            ]
        },
        {
            "no":1790,
            "code":"U+1F1F9 U+1F1FC",
            "emoji":"🇹🇼",
            "description":"Flag: Taiwan",
            "keywords":[
                "flag",
                "Taiwan"
            ]
        },
        {
            "no":1791,
            "code":"U+1F1F9 U+1F1FF",
            "emoji":"🇹🇿",
            "description":"Flag: Tanzania",
            "keywords":[
                "flag",
                "Tanzania"
            ]
        },
        {
            "no":1792,
            "code":"U+1F1FA U+1F1E6",
            "emoji":"🇺🇦",
            "description":"Flag: Ukraine",
            "keywords":[
                "flag",
                "Ukraine"
            ]
        },
        {
            "no":1793,
            "code":"U+1F1FA U+1F1EC",
            "emoji":"🇺🇬",
            "description":"Flag: Uganda",
            "keywords":[
                "flag",
                "Uganda"
            ]
        },
        {
            "no":1794,
            "code":"U+1F1FA U+1F1F2",
            "emoji":"🇺🇲",
            "description":"Flag: U.S. Outlying Islands",
            "keywords":[
                "flag",
                "US",
                "Outlying",
                "Islands"
            ]
        },
        {
            "no":1795,
            "code":"U+1F1FA U+1F1F3",
            "emoji":"🇺🇳",
            "description":"Flag: United Nations",
            "keywords":[
                "flag",
                "United",
                "Nations"
            ]
        },
        {
            "no":1796,
            "code":"U+1F1FA U+1F1F8",
            "emoji":"🇺🇸",
            "description":"Flag: United States",
            "keywords":[
                "flag",
                "United",
                "States"
            ]
        },
        {
            "no":1797,
            "code":"U+1F1FA U+1F1FE",
            "emoji":"🇺🇾",
            "description":"Flag: Uruguay",
            "keywords":[
                "flag",
                "Uruguay"
            ]
        },
        {
            "no":1798,
            "code":"U+1F1FA U+1F1FF",
            "emoji":"🇺🇿",
            "description":"Flag: Uzbekistan",
            "keywords":[
                "flag",
                "Uzbekistan"
            ]
        },
        {
            "no":1799,
            "code":"U+1F1FB U+1F1E6",
            "emoji":"🇻🇦",
            "description":"Flag: Vatican City",
            "keywords":[
                "flag",
                "Vatican",
                "City"
            ]
        },
        {
            "no":1800,
            "code":"U+1F1FB U+1F1E8",
            "emoji":"🇻🇨",
            "description":"Flag: St. Vincent & Grenadines",
            "keywords":[
                "flag",
                "St",
                "Vincent",
                "&",
                "Grenadines"
            ]
        },
        {
            "no":1801,
            "code":"U+1F1FB U+1F1EA",
            "emoji":"🇻🇪",
            "description":"Flag: Venezuela",
            "keywords":[
                "flag",
                "Venezuela"
            ]
        },
        {
            "no":1802,
            "code":"U+1F1FB U+1F1EC",
            "emoji":"🇻🇬",
            "description":"Flag: British Virgin Islands",
            "keywords":[
                "flag",
                "British",
                "Virgin",
                "Islands"
            ]
        },
        {
            "no":1803,
            "code":"U+1F1FB U+1F1EE",
            "emoji":"🇻🇮",
            "description":"Flag: U.S. Virgin Islands",
            "keywords":[
                "flag",
                "US",
                "Virgin",
                "Islands"
            ]
        },
        {
            "no":1804,
            "code":"U+1F1FB U+1F1F3",
            "emoji":"🇻🇳",
            "description":"Flag: Vietnam",
            "keywords":[
                "flag",
                "Vietnam"
            ]
        },
        {
            "no":1805,
            "code":"U+1F1FB U+1F1FA",
            "emoji":"🇻🇺",
            "description":"Flag: Vanuatu",
            "keywords":[
                "flag",
                "Vanuatu"
            ]
        },
        {
            "no":1806,
            "code":"U+1F1FC U+1F1EB",
            "emoji":"🇼🇫",
            "description":"Flag: Wallis & Futuna",
            "keywords":[
                "flag",
                "Wallis",
                "&",
                "Futuna"
            ]
        },
        {
            "no":1807,
            "code":"U+1F1FC U+1F1F8",
            "emoji":"🇼🇸",
            "description":"Flag: Samoa",
            "keywords":[
                "flag",
                "Samoa"
            ]
        },
        {
            "no":1808,
            "code":"U+1F1FD U+1F1F0",
            "emoji":"🇽🇰",
            "description":"Flag: Kosovo",
            "keywords":[
                "flag",
                "Kosovo"
            ]
        },
        {
            "no":1809,
            "code":"U+1F1FE U+1F1EA",
            "emoji":"🇾🇪",
            "description":"Flag: Yemen",
            "keywords":[
                "flag",
                "Yemen"
            ]
        },
        {
            "no":1810,
            "code":"U+1F1FE U+1F1F9",
            "emoji":"🇾🇹",
            "description":"Flag: Mayotte",
            "keywords":[
                "flag",
                "Mayotte"
            ]
        },
        {
            "no":1811,
            "code":"U+1F1FF U+1F1E6",
            "emoji":"🇿🇦",
            "description":"Flag: South Africa",
            "keywords":[
                "flag",
                "South",
                "Africa"
            ]
        },
        {
            "no":1812,
            "code":"U+1F1FF U+1F1F2",
            "emoji":"🇿🇲",
            "description":"Flag: Zambia",
            "keywords":[
                "flag",
                "Zambia"
            ]
        },
        {
            "no":1813,
            "code":"U+1F1FF U+1F1FC",
            "emoji":"🇿🇼",
            "description":"Flag: Zimbabwe",
            "keywords":[
                "flag",
                "Zimbabwe"
            ]
        },
        {
            "no":1814,
            "code":"U+1F3F4 U+E0067 U+E0062 U+E0065 U+E006E U+E0067 U+E007F",
            "emoji":"🏴󠁧󠁢󠁥󠁮󠁧󠁿",
            "description":"Flag: England",
            "keywords":[
                "flag",
                "England"
            ]
        },
        {
            "no":1815,
            "code":"U+1F3F4 U+E0067 U+E0062 U+E0073 U+E0063 U+E0074 U+E007F",
            "emoji":"🏴󠁧󠁢󠁳󠁣󠁴󠁿",
            "description":"Flag: Scotland",
            "keywords":[
                "flag",
                "Scotland"
            ]
        },
        {
            "no":1816,
            "code":"U+1F3F4 U+E0067 U+E0062 U+E0077 U+E006C U+E0073 U+E007F",
            "emoji":"🏴󠁧󠁢󠁷󠁬󠁳󠁿",
            "description":"Flag: Wales",
            "keywords":[
                "flag",
                "Wales"
            ]
        }
    ]
};

var Emojician_PickerBlock = {
    data: function() {
        return {
            current_tab: 'People',
            categories: {
                'People': '🙂',
                'Animals': '🐒',
                'Nature': '🌲',
                'Food': '🍓',
                'Travel': '🚀',
                'Activities': '🎾',
                'Objects': '🎩',
                'Symbols': '♥',
                'Flags': '🏳️‍🌈',
            },
            search: '',
            searchresults: [],
            worker: undefined,
            loading: false,
        };
    },
    template: `
        <div class="emojician-container">
            <ul class="emojician-header">
                <li
                    class="tab-item"
                    v-for="(emoji, catname) in categories"
                >
                    <a
                        @click="setTab(catname)"
                        :class="'emoji tooltip' + (current_tab==catname ? ' active' : '')"
                        :data-tooltip="catname"
                    >
                        {{ emoji }}
                    </a>
                </li>
            </ul>

            <div class="emojician-body" ref="body">
                <div class="loading" v-show="loading"></div>
                <a
                    @click="chooseEmoji(e)"
                    :title="e.description"
                    v-for="e in emojis"
                >
                    <span class="emoji">{{ e.emoji }}</span>
                </a>
            </div>

            <div class="emojician-footer">
                <input type="text" class="emojinput" placeholder="Search..." v-model="search" @keyup="keyup"/>
            </div>
        </div>
    `,
    computed: {
        emojis: function() {
            if (this.searchresults.length) {
                return this.searchresults;
            }

            return emojilist[this.current_tab];
        },
    },
    methods: {
        setTab: function(tab) {
            this.terminateWorker();
            this.current_tab = tab;
            this.search = '';
            this.resetSearchResults();
            this.$refs.body.scrollTop = 0;
        },
        chooseEmoji: function(emoji) {
            this.$emit('picked', emoji);
        },
        terminateWorker: function() {
            if (typeof(Worker) !== "undefined" && typeof(this.worker) !== "undefined") {
                this.worker.terminate();
                this.worker = undefined;
            }
        },
        resetSearchResults: function() {
            this.loading = false;
            this.searchresults = [];
            if (this.current_tab == '') {
                this.current_tab = 'People';
            }
        },
        keyup: function() {
            this.terminateWorker();
            this.resetSearchResults();

            if (this.search.length) {
                this.current_tab = '';
                var regexsafe = this.search.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');

                var searchfunc = function(list, search) {
                    var results = [];
                    for (let cat in list) {
                        for (let i=0; i < list[cat].length; i++) {
                            let e = list[cat][i];

                            for (let j=0; j < e.keywords.length; j++) {
                                if ((new RegExp(search, 'i')).test(e.keywords[j])) {
                                    results.push(e);
                                    break; // if it matches one keyword, stop there and don't test other keywords
                                }
                            }
                        }
                    }
                    return results;
                };

                if (typeof(Worker) !== "undefined") {
                    this.loading = true;

                    var workerscript = new Blob([`
                        var searchfunc = ` + searchfunc.toString() + `;
                        self.addEventListener('message', function(e) {
                            var results = searchfunc(e.data.list, e.data.search);
                            self.postMessage(results);
                        }, false);
                    `]);

                    this.worker = new Worker(window.URL.createObjectURL(workerscript));
                    this.worker.onmessage = (e) => {
                        this.loading = false;
                        this.searchresults = e.data;
                    };

                    this.worker.postMessage({
                        'list': emojilist,
                        'search': regexsafe
                    });
                }
                else {
                    this.searchresults = searchfunc(emojilist, regexsafe);
                }
            }
        }
    }
};

var Emojician = {
    components: {
        'emojician-blockpicker': Emojician_PickerBlock
    },
    props: {
        display: {
            type: String, // block, hover, click
            required: true,
            validator: function (value) {
                return ['block', 'hover', 'click'].indexOf(value) !== -1
            }
        },
        direction: {
            type: String, // when hover/click : top, right, bottom, left
            default: 'top',
            validator: function (value) {
                return ['top', 'right', 'bottom', 'left'].indexOf(value) !== -1
            }
        },
    },
    template: `
        <div :class="'emojician-popover emojician-popover-' + direction" v-if="display == 'hover'">
            <slot></slot>
            <div class="emojician-popover-container">
                <emojician-blockpicker v-on="$listeners"></emojician-blockpicker>
            </div>
        </div>

        <div :class="'emojician-popover-click emojician-popover-click-' + direction" v-else-if="display == 'click'">
            <slot></slot>
            <div class="emojician-popover-container">
                <emojician-blockpicker v-on="$listeners"></emojician-blockpicker>
            </div>
        </div>

        <emojician-blockpicker v-else v-on="$listeners"></emojician-blockpicker>
    `
};
