'use strict';

angular.module('grubUpClientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap',
  'ngMockE2E',
  'ngMap'
]).config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider.html5Mode(true);
}).run(function($httpBackend) {
  $httpBackend.whenGET(/.*\.html|.*googleapis.*/).passThrough();

  $httpBackend.whenGET('meals/location').respond([
    {
      "name": "A.S. Wee Care",
      "address": "3004 Stayton Street",
      "zip": "15212",
      "lat": 40.472138,
      "long": -80.027886,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:30 AM",
          "9:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "1:00 PM"
        ]
      }
    },
    {
      "name": "Addison Terrace",
      "address": "2061 Bentley Drive #511",
      "zip": "15219",
      "lat": 40.440647,
      "long": -79.977716,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Allegheny Dwellings",
      "address": "1710 Belleau Drive",
      "zip": "15212",
      "lat": 40.46069,
      "long": -80.007177,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Allegheny YMCA",
      "address": "600 W. North Avenue",
      "zip": "15212",
      "lat": 40.45465,
      "long": -80.012901,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:45 AM",
          "9:45 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Ammon Rec Center",
      "address": "2217 Bedford Avenue",
      "zip": "15219",
      "lat": 40.448666,
      "long": -79.977965,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:00 AM",
          "9:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      }
    },
    {
      "name": "AP Summer Academy @ CMU",
      "address": "Scaife Hall on Frew Street",
      "zip": "15213",
      "lat": 40.439453,
      "long": -79.949063,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:30 AM",
          "9:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "1:00 PM"
        ]
      }
    },
    {
      "name": "Arlington Heights",
      "address": "3132 Cordell Place (rear)",
      "zip": "15210",
      "lat": 40.417878,
      "long": -79.963144,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Arlington Rec Center",
      "address": "2201 Salisbury Street",
      "zip": "15210",
      "lat": 32.735687,
      "long": -97.108066,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Arsenal Park",
      "address": "40th & Butler Streets",
      "zip": "15201",
      "lat": 40.468717,
      "long": -79.962291,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Bedford Dwellings - BJWL",
      "address": "2275 Bedford Avenue (rear)",
      "zip": "15219",
      "lat": 38.900739,
      "long": -86.306105,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Beechview Spray Park",
      "address": "1200 Orangewood Ave",
      "zip": "15216",
      "lat": 40.414638,
      "long": -80.018635,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Bethany Baptist Center",
      "address": "7745 Tioga Street",
      "zip": "15208",
      "lat": 40.4506,
      "long": -79.888042,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Bethany House Ministry",
      "address": "1500 Chicago Street",
      "zip": "15214",
      "lat": 40.479197,
      "long": -79.999483,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Bloomfield Rec. Center",
      "address": "408 Ella Street",
      "zip": "15201",
      "lat": 40.461494,
      "long": -79.952649,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Brookline Rec Center",
      "address": "1200 Oakridge Avenue",
      "zip": "15226",
      "lat": 40.391295,
      "long": -80.013033,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:30 AM",
          "1:30 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:30 PM",
          "3:30 PM"
        ]
      }
    },
    {
      "name": "Brothers & Sisters Emerging",
      "address": "5315 Hillcrest St",
      "zip": "15224",
      "lat": 40.46843,
      "long": -79.936895,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Community Empowerment",
      "address": "7120 Kelly Street, 15208",
      "zip": "15208",
      "lat": 40.455813,
      "long": -79.898341,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Elderado Center",
      "address": "900 Delmont Street",
      "zip": "15210",
      "lat": 40.414227,
      "long": -80.003859,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Fowler Pool",
      "address": "2438 Wilson Avenue",
      "zip": "15214",
      "lat": 40.468307,
      "long": -80.013784,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Frazier Field House",
      "address": "Frazier Street @ Dawson",
      "zip": "15213",
      "lat": 40.429775,
      "long": -79.954239,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Garfield Commons",
      "address": "242 Fern Street, 15224",
      "zip": "15224",
      "lat": 40.471244,
      "long": -79.935545,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:15 AM",
          "9:15 AM"
        ]
      },
      "lunch": {
        "hours": [
          "11:30 AM",
          "1:30 PM"
        ]
      }
    },
    {
      "name": "Garfield Jubilee",
      "address": "5325 Penn Avenue",
      "zip": "15224",
      "lat": 40.464632,
      "long": -79.937543,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:00 AM",
          "9:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "11:30 AM",
          "1:30 PM"
        ]
      }
    },
    {
      "name": "Good Samaritan Baptist Church",
      "address": "2500 Webster Avenue",
      "zip": "15219",
      "lat": 40.449473,
      "long": -79.972251,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Grace Memorial Church",
      "address": "1000 Bryn Mawr Road",
      "zip": "15219",
      "lat": 40.451148,
      "long": -79.957081,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Hazelwood - BJWL",
      "address": "944 Johnston Avenue",
      "zip": "15207",
      "lat": 40.406269,
      "long": -79.927904,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Hazelwood YMCA",
      "address": "4713 Chatsworth Avenue",
      "zip": "15207",
      "lat": 40.413047,
      "long": -79.944141,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:30 AM",
          "9:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "1:00 PM"
        ]
      }
    },
    {
      "name": "Homewood - Bruston YWCA",
      "address": "6907 Frankstown Avenue",
      "zip": "15208",
      "lat": 40.458441,
      "long": -79.903288,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:30 AM",
          "9:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Homewood Church of God",
      "address": "7146 Idewild Street",
      "zip": "15208",
      "lat": 40.458047,
      "long": -79.896411,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:30 AM",
          "9:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "1:00 PM"
        ]
      }
    },
    {
      "name": "Homewood North",
      "address": "10 Albertise Street",
      "zip": "15208",
      "lat": 40.450915,
      "long": -79.902478,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Homewood Renaissance Assoc.",
      "address": "7130 Frankstown Ave",
      "zip": "15208",
      "lat": 40.457372,
      "long": -79.897643,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Homewood-Brushton YMCA",
      "address": "7140 Bennett Street",
      "zip": "15208",
      "lat": 40.456545,
      "long": -79.898268,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Inner City Ministries",
      "address": "5643 East liberty Blvd",
      "zip": "15206",
      "lat": 40.467389,
      "long": -79.926368,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Jack Stack Pool",
      "address": "600 Brighton Woods Road",
      "zip": "15212",
      "lat": 40.48725,
      "long": -80.032802,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "12:00 PM"
        ]
      }
    },
    {
      "name": "Jefferson Rec Center",
      "address": "605 Redknap Street",
      "zip": "15212",
      "lat": 40.459453,
      "long": -80.014421,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Junior Police Academy",
      "address": "808 Ridge Ave",
      "zip": "15212",
      "lat": 40.449724,
      "long": -80.013156,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Junior Police Academy",
      "address": "Schenley Park Ice Rink",
      "zip": "15213",
      "lat": 40.431787,
      "long": -79.944775,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Lighthouse Church",
      "address": "810 Fisher Street",
      "zip": "15210",
      "lat": 40.410428,
      "long": -79.974832,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Limbach Center",
      "address": "816 Tripoli Street",
      "zip": "15212",
      "lat": 40.456868,
      "long": -79.997001,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Magee Rec Center",
      "address": "745 Greenfield Avenue",
      "zip": "15217",
      "lat": 40.424389,
      "long": -79.936825,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Mellon Spary Park",
      "address": "Fifth Avenue @ Penn Avenue",
      "zip": "15234",
      "lat": 40.500135,
      "long": -79.859337,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "12:00 PM"
        ]
      }
    },
    {
      "name": "Monumental Baptist Church",
      "address": "2240 Wylie Avenue",
      "zip": "15219",
      "lat": 40.446326,
      "long": -79.975226,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:00 AM",
          "9:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      }
    },
    {
      "name": "Moore Park",
      "address": "Pioneer Avenue",
      "zip": "15226",
      "lat": 39.361915,
      "long": -76.571908,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:30 AM",
          "1:30 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:30 PM",
          "3:30 PM"
        ]
      }
    },
    {
      "name": "Morningside C.O.G.I.C.",
      "address": "5173 Dearborn Street",
      "zip": "15224",
      "lat": 40.465907,
      "long": -79.939892,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "New Grace Baptist Church",
      "address": "566 Brushton Ave",
      "zip": "15208",
      "lat": 40.451627,
      "long": -79.889091,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:00 AM",
          "9:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Northview Heights Gym",
      "address": "525 Mt. Pleasant Road",
      "zip": "15214",
      "lat": 40.478014,
      "long": -79.999949,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Oak Hill/Wadsworth - BJWL",
      "address": "480 Oak Hill Drive",
      "zip": "15219",
      "lat": 41.028602,
      "long": -81.717822,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Ormsby Rec Center",
      "address": "79 South 22nd Street",
      "zip": "15203",
      "lat": 40.429313,
      "long": -79.974536,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Paulson Rec Center",
      "address": "1201 Paulson Avenue",
      "zip": "15206",
      "lat": 40.467984,
      "long": -79.90356,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Phillips Rec Center",
      "address": "201 Parkfield Street",
      "zip": "15210",
      "lat": 40.391543,
      "long": -79.990985,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Pittsburgh Manchester",
      "address": "1612 Manhattan Street",
      "zip": "15233",
      "lat": 40.456455,
      "long": -80.026883,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:30 AM",
          "10:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:30 PM",
          "2:30 PM"
        ]
      }
    },
    {
      "name": "Project Destiny",
      "address": "3737 Brighton Road",
      "zip": "15212",
      "lat": 40.483993,
      "long": -80.035746,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:00 AM",
          "9:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Project Destiny 2",
      "address": "2200 California Avenue",
      "zip": "15212",
      "lat": 40.461089,
      "long": -80.027844,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Ream Pool",
      "address": "321 Merrimac Street",
      "zip": "15211",
      "lat": 40.431384,
      "long": -80.01368,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Salvation Army - Homewood",
      "address": "8020 Frankstown Avenue",
      "zip": "15221",
      "lat": 40.455311,
      "long": -79.88355,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Salvation Army - Northside",
      "address": "100 W North Avenue",
      "zip": "15212",
      "lat": 40.455584,
      "long": -80.007871,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Salvation Army - Westside",
      "address": "1821 Broadhead Road",
      "zip": "15205",
      "lat": 40.470775,
      "long": -79.889454,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Schenley Pool",
      "address": "1 Overlook Drive",
      "zip": "15213",
      "lat": 40.432397,
      "long": -79.941649,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Second East Hills - BJWL",
      "address": "2291 Wilner Drive",
      "zip": "15221",
      "lat": 40.454296,
      "long": -79.869934,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Shadyside Boys & Girls",
      "address": "6 Brownell Place",
      "zip": "15232",
      "lat": 40.454633,
      "long": -79.934647,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Sheraden Park",
      "address": "Aldon Street",
      "zip": "15204",
      "lat": 38.880587,
      "long": -94.75593,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Sixth Mt. Zion Church",
      "address": "6556 Shetland Avenue",
      "zip": "15206",
      "lat": 40.462193,
      "long": -79.908196,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:00 AM",
          "9:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "St. Andrew's Lutheran Church",
      "address": "218 Alter Street",
      "zip": "15106",
      "lat": 40.41498,
      "long": -80.075166,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "The Open Door",
      "address": "12 Stratmore Street",
      "zip": "15205",
      "lat": 40.441226,
      "long": -80.056788,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:30 AM",
          "9:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "1:00 PM"
        ]
      }
    },
    {
      "name": "Thelma Lovette YMCA",
      "address": "2114 Centre Ave",
      "zip": "15219",
      "lat": 40.444447,
      "long": -79.977918,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:00 AM",
          "9:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "11:45 AM",
          "1:45 PM"
        ]
      }
    },
    {
      "name": "Trinity Baptist Church",
      "address": "2415 Ligonier Street",
      "zip": "15201",
      "lat": 40.461601,
      "long": -79.967112,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:30 AM",
          "9:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Trinity Lutheran Church",
      "address": "601 Brownsville Rd",
      "zip": "15210",
      "lat": 40.410457,
      "long": -79.989985,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Troy Hill Spray Park",
      "address": "1200 Goettman St",
      "zip": "15212",
      "lat": 40.458252,
      "long": -79.989803,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Valley View Presbyterian",
      "address": "604 N. Aiken Avenue",
      "zip": "15206",
      "lat": 40.471115,
      "long": -79.932391,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "Warrington Rec Center",
      "address": "329 E. Warrington Ave",
      "zip": "15210",
      "lat": 40.421141,
      "long": -80.000901,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "1:00 PM"
        ]
      },
      "snack": {
        "hours": [
          "2:00 PM",
          "3:00 PM"
        ]
      }
    },
    {
      "name": "Wesley Center",
      "address": "2701 Centre Avenue",
      "zip": "15219",
      "lat": 40.447535,
      "long": -79.967331,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    },
    {
      "name": "West Penn Rec Center",
      "address": "450 30th Street",
      "zip": "15219",
      "lat": 40.455687,
      "long": -79.969608,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "8:30 AM",
          "9:30 AM"
        ]
      },
      "lunch": {
        "hours": [
          "11:30 AM",
          "1:30 PM"
        ]
      }
    },
    {
      "name": "White Lily Baptist Church",
      "address": "3621 Chartiers Avenue",
      "zip": "15204",
      "lat": 40.45809,
      "long": -80.070192,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "lunch": {
        "hours": [
          "11:00 AM",
          "11:00 PM"
        ]
      }
    },
    {
      "name": "YMCA Hilltop Center",
      "address": "500 Brownsville Road",
      "zip": "15210",
      "lat": 40.411944,
      "long": -79.989851,
      "menu_type": "Cold",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "snack": {
        "hours": [
          "3:00 PM",
          "4:00 PM"
        ]
      }
    },
    {
      "name": "Youth Empowerment - BJWL",
      "address": "415 Mt. Pleasant Road (rear)",
      "zip": "15214",
      "lat": 41.040443,
      "long": -76.427481,
      "menu_type": "Hot",
      "days": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday"
      ],
      "breakfast": {
        "hours": [
          "9:00 AM",
          "10:00 AM"
        ]
      },
      "lunch": {
        "hours": [
          "12:00 PM",
          "2:00 PM"
        ]
      }
    }
  ]);
});