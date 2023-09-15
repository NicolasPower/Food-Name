import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

window.Buffer = window.Buffer || require("buffer").Buffer; 

const spotifyClientKey = process.env.REACT_APP_SPOTIFY_CLIENT_KEY;
const spotifySecretKey = process.env.REACT_APP_SPOTIFY_SECRET_KEY;
const namsorKey = process.env.REACT_APP_NAMSOR_KEY;
const edamamKey = process.env.REACT_APP_EDAMAM_KEY;


var isoCountries = new Object();
var isoCountries = {
  AF: "Afghanistan",
  AX: "Aland Islands",
  AL: "Albania",
  DZ: "Algeria",
  AS: "American Samoa",
  AD: "Andorra",
  AO: "Angola",
  AI: "Anguilla",
  AQ: "Antarctica",
  AG: "Antigua And Barbuda",
  AR: "Argentina",
  AM: "Armenia",
  AW: "Aruba",
  AU: "Australia",
  AT: "Austria",
  AZ: "Azerbaijan",
  BS: "Bahamas",
  BH: "Bahrain",
  BD: "Bangladesh",
  BB: "Barbados",
  BY: "Belarus",
  BE: "Belgium",
  BZ: "Belize",
  BJ: "Benin",
  BM: "Bermuda",
  BT: "Bhutan",
  BO: "Bolivia",
  BA: "Bosnia And Herzegovina",
  BW: "Botswana",
  BV: "Bouvet Island",
  BR: "Brazil",
  IO: "British Indian Ocean Territory",
  BN: "Brunei Darussalam",
  BG: "Bulgaria",
  BF: "Burkina Faso",
  BI: "Burundi",
  KH: "Cambodia",
  CM: "Cameroon",
  CA: "Canada",
  CV: "Cape Verde",
  KY: "Cayman Islands",
  CF: "Central African Republic",
  TD: "Chad",
  CL: "Chile",
  CN: "China",
  CX: "Christmas Island",
  CC: "Cocos (Keeling) Islands",
  CO: "Colombia",
  KM: "Comoros",
  CG: "Congo",
  CD: "Congo, Democratic Republic",
  CK: "Cook Islands",
  CR: "Costa Rica",
  CI: "Cote D'Ivoire",
  HR: "Croatia",
  CU: "Cuba",
  CY: "Cyprus",
  CZ: "Czech Republic",
  DK: "Denmark",
  DJ: "Djibouti",
  DM: "Dominica",
  DO: "Dominican Republic",
  EC: "Ecuador",
  EG: "Egypt",
  SV: "El Salvador",
  GQ: "Equatorial Guinea",
  ER: "Eritrea",
  EE: "Estonia",
  ET: "Ethiopia",
  FK: "Falkland Islands (Malvinas)",
  FO: "Faroe Islands",
  FJ: "Fiji",
  FI: "Finland",
  FR: "France",
  GF: "French Guiana",
  PF: "French Polynesia",
  TF: "French Southern Territories",
  GA: "Gabon",
  GM: "Gambia",
  GE: "Georgia",
  DE: "Germany",
  GH: "Ghana",
  GI: "Gibraltar",
  GR: "Greece",
  GL: "Greenland",
  GD: "Grenada",
  GP: "Guadeloupe",
  GU: "Guam",
  GT: "Guatemala",
  GG: "Guernsey",
  GN: "Guinea",
  GW: "Guinea-Bissau",
  GY: "Guyana",
  HT: "Haiti",
  HM: "Heard Island & Mcdonald Islands",
  VA: "Holy See (Vatican City State)",
  HN: "Honduras",
  HK: "Hong Kong",
  HU: "Hungary",
  IS: "Iceland",
  IN: "India",
  ID: "Indonesia",
  IR: "Iran, Islamic Republic Of",
  IQ: "Iraq",
  IE: "Ireland",
  IM: "Isle Of Man",
  IL: "Israel",
  IT: "Italy",
  JM: "Jamaica",
  JP: "Japan",
  JE: "Jersey",
  JO: "Jordan",
  KZ: "Kazakhstan",
  KE: "Kenya",
  KI: "Kiribati",
  KR: "Korea",
  KW: "Kuwait",
  KG: "Kyrgyzstan",
  LA: "Lao People's Democratic Republic",
  LV: "Latvia",
  LB: "Lebanon",
  LS: "Lesotho",
  LR: "Liberia",
  LY: "Libyan Arab Jamahiriya",
  LI: "Liechtenstein",
  LT: "Lithuania",
  LU: "Luxembourg",
  MO: "Macao",
  MK: "Macedonia",
  MG: "Madagascar",
  MW: "Malawi",
  MY: "Malaysia",
  MV: "Maldives",
  ML: "Mali",
  MT: "Malta",
  MH: "Marshall Islands",
  MQ: "Martinique",
  MR: "Mauritania",
  MU: "Mauritius",
  YT: "Mayotte",
  MX: "Mexico",
  FM: "Micronesia, Federated States Of",
  MD: "Moldova",
  MC: "Monaco",
  MN: "Mongolia",
  ME: "Montenegro",
  MS: "Montserrat",
  MA: "Morocco",
  MZ: "Mozambique",
  MM: "Myanmar",
  NA: "Namibia",
  NR: "Nauru",
  NP: "Nepal",
  NL: "Netherlands",
  AN: "Netherlands Antilles",
  NC: "New Caledonia",
  NZ: "New Zealand",
  NI: "Nicaragua",
  NE: "Niger",
  NG: "Nigeria",
  NU: "Niue",
  NF: "Norfolk Island",
  MP: "Northern Mariana Islands",
  NO: "Norway",
  OM: "Oman",
  PK: "Pakistan",
  PW: "Palau",
  PS: "Palestinian Territory, Occupied",
  PA: "Panama",
  PG: "Papua New Guinea",
  PY: "Paraguay",
  PE: "Peru",
  PH: "Philippines",
  PN: "Pitcairn",
  PL: "Poland",
  PT: "Portugal",
  PR: "Puerto Rico",
  QA: "Qatar",
  RE: "Reunion",
  RO: "Romania",
  RU: "Russian Federation",
  RW: "Rwanda",
  BL: "Saint Barthelemy",
  SH: "Saint Helena",
  KN: "Saint Kitts And Nevis",
  LC: "Saint Lucia",
  MF: "Saint Martin",
  PM: "Saint Pierre And Miquelon",
  VC: "Saint Vincent And Grenadines",
  WS: "Samoa",
  SM: "San Marino",
  ST: "Sao Tome And Principe",
  SA: "Saudi Arabia",
  SN: "Senegal",
  RS: "Serbia",
  SC: "Seychelles",
  SL: "Sierra Leone",
  SG: "Singapore",
  SK: "Slovakia",
  SI: "Slovenia",
  SB: "Solomon Islands",
  SO: "Somalia",
  ZA: "South Africa",
  GS: "South Georgia And Sandwich Isl.",
  ES: "Spain",
  LK: "Sri Lanka",
  SD: "Sudan",
  SR: "Suriname",
  SJ: "Svalbard And Jan Mayen",
  SZ: "Swaziland",
  SE: "Sweden",
  CH: "Switzerland",
  SY: "Syrian Arab Republic",
  TW: "Taiwan",
  TJ: "Tajikistan",
  TZ: "Tanzania",
  TH: "Thailand",
  TL: "Timor-Leste",
  TG: "Togo",
  TK: "Tokelau",
  TO: "Tonga",
  TT: "Trinidad And Tobago",
  TN: "Tunisia",
  TR: "Turkey",
  TM: "Turkmenistan",
  TC: "Turks And Caicos Islands",
  TV: "Tuvalu",
  UG: "Uganda",
  UA: "Ukraine",
  AE: "United Arab Emirates",
  GB: "United Kingdom",
  US: "United States",
  UM: "United States Outlying Islands",
  UY: "Uruguay",
  UZ: "Uzbekistan",
  VU: "Vanuatu",
  VE: "Venezuela",
  VN: "Viet Nam",
  VG: "Virgin Islands, British",
  VI: "Virgin Islands, U.S.",
  WF: "Wallis And Futuna",
  EH: "Western Sahara",
  YE: "Yemen",
  ZM: "Zambia",
  ZW: "Zimbabwe",
};

function Name() {
  const [nameData, setNameData] = useState(null);
  const [name, setName] = useState(null);
  const [country, setCountry] = useState(null);
  const [token, setToken] = useState(null);
  const [albumLink, setAlbumLink] = useState(null);
  const [albumName, setAlbumName] = useState(null);
  const [recipeName, setRecipeName] = useState(null);
  const [recipeLink, setRecipeLink] = useState(null);

  const [loadingName, setLoadingName] = useState(true);
  const [loadingSong, setLoadingSong] = useState(true);
  const [loadingRecipe, setLoadingRecipe] = useState(true);
  const [loading, setLoading] = useState(true);

  const firstName = sessionStorage.getItem("firstName");
  const lastName = sessionStorage.getItem("lastName");

  

  const router = useNavigate()

  //const axios = require("axios");


  useEffect(() => {
    fetch(
      "https://v2.namsor.com/NamSorAPIv2/api2/json/origin/" +
        firstName +
        "/" +
        lastName,
      {
        method: "GET",
        headers: { "X-API-KEY": namsorKey },
      }
    )
      .then((response) => response.json())
      .then((json) => {
        setNameData(json);
        setName(firstName + " " + lastName);
        setLoadingName(false);
      })
      .catch((err) => {
        console.error(err);
        setLoadingName(false);
      });
  }, [firstName, lastName]);

  useEffect(() => {
    if (!loadingName) {
      nameDataget();
      getSong();
      getRecipe();
    }
  });

  function nameDataget() {
    setCountry(isoCountries[nameData.countryOrigin]);
  }

  function getSong() {
    if (loadingSong) {
      const authOptions = {
        method: "post",
        url: "https://accounts.spotify.com/api/token",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(spotifyClientKey + ":" + spotifySecretKey).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: "grant_type=client_credentials",
      };

      axios(authOptions)
        .then((authResponse) => {
          if (authResponse.status === 200) {
            const token = authResponse.data.access_token;
            setToken(token);
            const options = {
              method: "get",
              url:
                "https://api.spotify.com/v1/search?q=top+50+" +
                country +
                "+songs&type=playlist&market=" +
                nameData.countryOrigin +
                "&limit=1&offset=0",
              headers: {
                Authorization: "Bearer " + token,
              },
            };

            return axios(options);
          } else {
            console.error("Authentication failed");
          }
        })
        .then((spotifyResponse) => {
          setAlbumLink(
            spotifyResponse.data.playlists.items[0].external_urls.spotify
          );
          setAlbumName(spotifyResponse.data.playlists.items[0].name);
          setLoadingSong(false);
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  }



  function getRecipe() {
    if (loadingRecipe) {
      fetch(
        "https://api.edamam.com/api/recipes/v2?type=public&q=" +
          country +
          "&app_id=542b0f76&app_key=%20"+edamamKey+"%09",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((json) => {
          setRecipeName(json.hits[0].recipe.label);
          setRecipeLink(json.hits[0].recipe.shareAs);
          setLoadingRecipe(false);
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }

  while (loading) {
    if (!loadingName && !loadingSong && !loadingRecipe) {
      setLoading(false);
    }
    return (
      <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 to-blue-500">
        <h1 className="p-1">loading</h1>
      </div>
    );
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-purple-500 to-blue-500">
      <div className="flex flex-col bg-gray-600 rounded p-1 w-6/12">
        <h1 className="font-bold">{name}</h1>
        <p>Wow so cool! Your name Originates from {country}</p>
      </div>
    
      <div className="flex flex-row rounded w-6/12 justify-between pt-1">
        <div className="py-1 pr-1 w-2/5 ">
          <div className="flex flex-col flex-wrap  bg-emerald-700 rounded p-1 h-auto">
            
            <a className="text-blue-800 underline" href={albumLink}>
              {albumName} 
            </a>
            <p>
              is a popular playlist from {country}
            </p> 
          </div>
        </div>
       
        <div className="p-1 w-2/5">
        <div className="flex flex-col flex-wrap bg-orange-400 rounded p-1 h-auto">
          <p>here is a popular recipe from there</p>
          <a className="text-blue-800 underline" href={recipeLink}>{recipeName}</a>
        </div>
        </div>
        <button 
          type='button'//Button
          className='bg-emerald-800 border-gray-600 placeholder-gray-400 text-white focus:bg-emerald-500 focus:font-bold border text-sm w-1/5 p-1 rounded'
          id="button"
          onClick={() => router('/')}>
          Back
        </button>
      </div>
    </div>
  );
}

export default Name;
