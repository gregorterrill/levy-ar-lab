const sets = [
  {
    "nrdb": "core",
    "name": "Core Set",
    "type": "core",
    "rotation": 1,
    "released": "2012-09-06",
    "code": "ADN01"
  },
  {
    "nrdb": "genesis",
    "name": "Genesis",
    "type": "cycle",
    "cycleNum": 1,
    "rotation": 1,
    "products": [ 
      {
        "nrdb": "wla",
        "code": "ADN02",
        "name": "What Lies Ahead",
        "released": "2012-12-14"
      },
      { 
        "nrdb": "ta",
        "code": "ADN03",
        "name": "Trace Amount",
        "released": "2013-01-09"
      },
      { 
        "nrdb": "ce",
        "code": "ADN04",
        "name": "Cyber Exodus",
        "released": "2013-02-14"
      },
      { 
        "nrdb": "asis",
        "code": "ADN05",
        "name": "A Study in Static",
        "released": "2013-03-21"
      },
      { 
        "nrdb": "hs",
        "code": "ADN06",
        "name": "Humanity's Shadow",
        "released": "2013-05-02"
      },
      { 
        "nrdb": "fp",
        "code": "ADN07",
        "name": "Future Proof",
        "released": "2013-05-30"
      },
    ]
  },
  {
    "nrdb": "cac",
    "name": "Creation and Control",
    "type": "deluxe",
    "rotation": 0,
    "released": "2013-07-29",
    "code": "ADN08"
  },
  {
    "nrdb": "spin",
    "name": "Spin",
    "type": "cycle",
    "cycleNum": 2,
    "rotation": 1,
    "products": [ 
      {
        "nrdb": "om",
        "code": "ADN09",
        "name": "Opening Moves",
        "released": "2013-09-27"
      },
      { 
        "nrdb": "st",
        "code": "ADN10",
        "name": "Second Thoughts",
        "released": "2013-11-07"
      },
      { 
        "nrdb": "mt",
        "code": "ADN11",
        "name": "Mala Tempora",
        "released": "2013-12-13"
      },
      { 
        "nrdb": "tc",
        "code": "ADN12",
        "name": "True Colors",
        "released": "2014-01-17"
      },
      { 
        "nrdb": "fal",
        "code": "ADN13",
        "name": "Fear and Loathing",
        "released": "2014-02-21"
      },
      { 
        "nrdb": "dt",
        "code": "ADN14",
        "name": "Double Time",
        "released": "2014-03-28"
      }
    ]
  },
  {
    "nrdb": "hap",
    "name": "Honor and Profit",
    "type": "deluxe",
    "rotation": 0,
    "released": "2014-05-02",
    "code": "ADN15"
  },
  {
    "nrdb": "lunar",
    "name": "Lunar",
    "type": "cycle",
    "cycleNum": 3,
    "rotation": 2,
    "products": [ 
      {
        "nrdb": "up",
        "code": "ADN16",
        "name": "Upstalk",
        "released": "2014-07-25"
      },
      { 
        "nrdb": "tsb",
        "code": "ADN17",
        "name": "The Spaces Between",
        "released": "2014-08-15"
      },
      { 
        "nrdb": "fc",
        "code": "ADN18",
        "name": "First Contact",
        "released": "2014-09-15"
      },
      { 
        "nrdb": "uao",
        "code": "ADN19",
        "name": "Up and Over",
        "released": "2014-10-16"
      },
      { 
        "nrdb": "atr",
        "code": "ADN20",
        "name": "All That Remains",
        "released": "2014-11-13"
      },
      { 
        "nrdb": "ts",
        "code": "ADN21",
        "name": "The Source",
        "released": "2014-12-18"
      }
    ]
  },
  {
    "nrdb": "oac",
    "name": "Order and Chaos",
    "type": "deluxe",
    "rotation": 0,
    "released": "2015-01-28",
    "code": "ADN22"
  },
  {
    "nrdb": "sansan",
    "name": "SanSan",
    "type": "cycle",
    "cycleNum": 4,
    "rotation": 2,
    "products": [ 
      {
        "nrdb": "val",
        "code": "ADN23",
        "name": "The Valley",
        "released": "2015-04-03"
      },
      { 
        "nrdb": "bb",
        "code": "ADN24",
        "name": "Breaker Bay",
        "released": "2015-04-24"
      },
      { 
        "nrdb": "cc",
        "code": "ADN25",
        "name": "Chrome City",
        "released": "2015-05-29"
      },
      { 
        "nrdb": "uw",
        "code": "ADN26",
        "name": "The Underway",
        "released": "2015-07-02",
        "mwl": ["Faust"]
      },
      { 
        "nrdb": "oh",
        "code": "ADN27",
        "name": "Old Hollywood",
        "released": "2015-08-06"
      },
      { 
        "nrdb": "uot",
        "code": "ADN28",
        "name": "The Universe of Tomorrow",
        "released": "2015-09-03"
      }
    ]
  },
  {
    "nrdb": "dad",
    "name": "Data and Destiny",
    "type": "deluxe",
    "rotation": 0,
    "released": "2015-10-29",
    "code": "ADN29"
  },
  {
    "nrdb": "mumbad",
    "name": "Mumbad",
    "type": "cycle",
    "cycleNum": 5,
    "rotation": 3,
    "products": [ 
      {
        "nrdb": "kg",
        "code": "ADN30",
        "name": "Kala Ghoda",
        "released": "2016-01-29"
      },
      { 
        "nrdb": "bf",
        "code": "ADN31",
        "name": "Business First",
        "released": "2016-03-11"
      },
      { 
        "nrdb": "dag",
        "code": "ADN32",
        "name": "Democracy and Dogma",
        "released": "2016-04-01",
         "mwl": ["Clone Suffrage Movement","Sensie Actors Union"]
      },
      { 
        "nrdb": "si",
        "code": "ADN33",
        "name": "Salsette Island",
        "released": "2016-04-28"
      },
      { 
        "nrdb": "tlm",
        "code": "ADN34",
        "name": "The Liberated Mind",
        "released": "2016-05-26"
      },
      { 
        "nrdb": "ftm",
        "code": "ADN35",
        "name": "Fear the Masses",
        "released": "2016-06-16"
      }
    ]
  },
  {
    "nrdb": "flashpoint",
    "name": "Flashpoint",
    "type": "cycle",
    "cycleNum": 6,
    "rotation": 3,
    "products": [ 
      {
        "nrdb": "23s",
        "code": "ADN36",
        "name": "23 Seconds",
        "released": "2016-07-14"
      },
      { 
        "nrdb": "bm",
        "code": "ADN37",
        "name": "Blood Money",
        "released": "2016-08-11",
        "mwl": ["Temüjin Contract"]
      },
      { 
        "nrdb": "es",
        "code": "ADN38",
        "name": "Escalation",
        "released": "2016-10-06"
      },
      { 
        "nrdb": "in",
        "code": "ADN39",
        "name": "Intervention",
        "released": "2016-11-03"
      },
      { 
        "nrdb": "ml",
        "code": "ADN40",
        "name": "Martial Law",
        "released": "2016-12-08",
        "mwl": ["Friends in High Places"]
      },
      { 
        "nrdb": "qu",
        "code": "ADN41",
        "name": "Quorum",
        "released": "2017-01-12",
        "mwl": ["Aaron Marrón","Şifr","Violet Level Clearance"]
      }
    ]
  },
  {
    "nrdb": "td",
    "name": "Terminal Directive",
    "type": "campaign",
    "rotation": 0,
    "released": "2017-04-27",
    "code": "ADN42"
  },
  {
    "nrdb": "red-sand",
    "name": "Red Sands",
    "type": "cycle",
    "cycleNum": 7,
    "rotation": 4,
    "products": [ 
      {
        "nrdb": "dc",
        "code": "ADN43",
        "name": "Daedalus Complex",
        "released": "2017-02-23"
      },
      { 
        "nrdb": "so",
        "code": "ADN44",
        "name": "Station One",
        "released": "2017-03-23"
      },
      { 
        "nrdb": "eas",
        "code": "ADN45",
        "name": "Earth's Scion",
        "released": "2017-05-25"
      },
      { 
        "nrdb": "baw",
        "code": "ADN46",
        "name": "Blood and Water",
        "released": "2017-06-22"
      },
      { 
        "nrdb": "fm",
        "code": "ADN47",
        "name": "Free Mars",
        "released": "2017-07-20",
        "mwl": ["Bloo Moose"]
      },
      { 
        "nrdb": "cd",
        "code": "ADN48",
        "name": "Crimson Dust",
        "released": "2017-08-17",
        "mwl": ["Salvaged Vanadis Armory"]
      }
    ]
  },
  {
    "nrdb": "core2",
    "name": "Revised Core Set",
    "type": "core",
    "rotation": 0,
    "released": "2017-12-14",
    "code": "ADN49"
  },
  {
    "nrdb": "kitara",
    "name": "Kitara",
    "type": "cycle",
    "cycleNum": 8,
    "rotation": 4,
    "products": [ 
      {
        "nrdb": "ss",
        "code": "ADN50",
        "name": "Sovereign Sight",
        "released": "2017-12-28"
      },
      { 
        "nrdb": "dtwn",
        "code": "ADN51",
        "name": "Down the White Nile",
        "released": "2018-02-01"
      },
      { 
        "nrdb": "cotc",
        "code": "ADN52",
        "name": "Council of the Crest",
        "released": "2018-03-01"
      },
      { 
        "nrdb": "tdatd",
        "code": "ADN53",
        "name": "The Devil and the Dragon",
        "released": "2018-04-05"
      },
      { 
        "nrdb": "win",
        "code": "ADN54",
        "name": "Whispers in Nalubaale",
        "released": "2018-05-03"
      },
      { 
        "nrdb": "ka",
        "code": "ADN55",
        "name": "Kampala Ascendant",
        "released": "2018-05-31"
      }
    ]
  },
  {
    "nrdb": "rar",
    "name": "Reign and Reverie",
    "type": "deluxe",
    "rotation": 0,
    "released": false,
    "code": "ADN56"
  },
]

export default sets