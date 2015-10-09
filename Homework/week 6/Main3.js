/* use this to test out your function */
window.onload = function() {
	fillIn();
}

var country_codes = [
    ["af", "AFG", "Afghanistan"],
    ["ax", "ALA", "�land Islands"],
    ["al", "ALB", "Albania"],
    ["dz", "DZA", "Algeria"],
    ["as", "ASM", "American Samoa"],
    ["ad", "AND", "Andorra"],
    ["ao", "AGO", "Angola"],
    ["ai", "AIA", "Anguilla"],
    ["aq", "ATA", "Antarctica"],
    ["ag", "ATG", "Antigua and Barbuda"],
    ["ar", "ARG", "Argentina"],
    ["am", "ARM", "Armenia"],
    ["aw", "ABW", "Aruba"],
    ["au", "AUS", "Australia"],
    ["at", "AUT", "Austria"],
    ["az", "AZE", "Azerbaijan"],
    ["bs", "BHS", "Bahamas"],
    ["bh", "BHR", "Bahrain"],
    ["bd", "BGD", "Bangladesh"],
    ["bb", "BRB", "Barbados"],
    ["by", "BLR", "Belarus"],
    ["be", "BEL", "Belgium"],
    ["bz", "BLZ", "Belize"],
    ["bj", "BEN", "Benin"],
    ["bm", "BMU", "Bermuda"],
    ["bt", "BTN", "Bhutan"],
    ["bo", "BOL", "Bolivia, Plurinational State of"],
    ["bq", "BES", "Bonaire, Sint Eustatius and Saba"],
    ["ba", "BIH", "Bosnia and Herzegovina"],
    ["bw", "BWA", "Botswana"],
    ["bv", "BVT", "Bouvet Island"],
    ["br", "BRA", "Brazil"],
    ["io", "IOT", "British Indian Ocean Territory"],
    ["bn", "BRN", "Brunei Darussalam"],
    ["bg", "BGR", "Bulgaria"],
    ["bf", "BFA", "Burkina Faso"],
    ["bi", "BDI", "Burundi"],
    ["kh", "KHM", "Cambodia"],
    ["cm", "CMR", "Cameroon"],
    ["ca", "CAN", "Canada"],
    ["cv", "CPV", "Cape Verde"],
    ["ky", "CYM", "Cayman Islands"],
    ["cf", "CAF", "Central African Republic"],
    ["td", "TCD", "Chad"],
    ["cl", "CHL", "Chile"],
    ["cn", "CHN", "China"],
    ["cx", "CXR", "Christmas Island"],
    ["cc", "CCK", "Cocos (Keeling) Islands"],
    ["co", "COL", "Colombia"],
    ["km", "COM", "Comoros"],
    ["cg", "COG", "Congo"],
    ["cd", "COD", "Congo, the Democratic Republic of the"],
    ["ck", "COK", "Cook Islands"],
    ["cr", "CRI", "Costa Rica"],
    ["ci", "CIV", "C�te d'Ivoire"],
    ["hr", "HRV", "Croatia"],
    ["cu", "CUB", "Cuba"],
    ["cw", "CUW", "Cura�ao"],
    ["cy", "CYP", "Cyprus"],
    ["cz", "CZE", "Czech Republic"],
    ["dk", "DNK", "Denmark"],
    ["dj", "DJI", "Djibouti"],
    ["dm", "DMA", "Dominica"],
    ["do", "DOM", "Dominican Republic"],
    ["ec", "ECU", "Ecuador"],
    ["eg", "EGY", "Egypt"],
    ["sv", "SLV", "El Salvador"],
    ["gq", "GNQ", "Equatorial Guinea"],
    ["er", "ERI", "Eritrea"],
    ["ee", "EST", "Estonia"],
    ["et", "ETH", "Ethiopia"],
    ["fk", "FLK", "Falkland Islands (Malvinas)"],
    ["fo", "FRO", "Faroe Islands"],
    ["fj", "FJI", "Fiji"],
    ["fi", "FIN", "Finland"],
    ["fr", "FRA", "France"],
    ["gf", "GUF", "French Guiana"],
    ["pf", "PYF", "French Polynesia"],
    ["tf", "ATF", "French Southern Territories"],
    ["ga", "GAB", "Gabon"],
    ["gm", "GMB", "Gambia"],
    ["ge", "GEO", "Georgia"],
    ["de", "DEU", "Germany"],
    ["gh", "GHA", "Ghana"],
    ["gi", "GIB", "Gibraltar"],
    ["gr", "GRC", "Greece"],
    ["gl", "GRL", "Greenland"],
    ["gd", "GRD", "Grenada"],
    ["gp", "GLP", "Guadeloupe"],
    ["gu", "GUM", "Guam"],
    ["gt", "GTM", "Guatemala"],
    ["gg", "GGY", "Guernsey"],
    ["gn", "GIN", "Guinea"],
    ["gw", "GNB", "Guinea-Bissau"],
    ["gy", "GUY", "Guyana"],
    ["ht", "HTI", "Haiti"],
    ["hm", "HMD", "Heard Island and McDonald Islands"],
    ["va", "VAT", "Holy See (Vatican City State)"],
    ["hn", "HND", "Honduras"],
    ["hk", "HKG", "Hong Kong"],
    ["hu", "HUN", "Hungary"],
    ["is", "ISL", "Iceland"],
    ["in", "IND", "India"],
    ["id", "IDN", "Indonesia"],
    ["ir", "IRN", "Iran, Islamic Republic of"],
    ["iq", "IRQ", "Iraq"],
    ["ie", "IRL", "Ireland"],
    ["im", "IMN", "Isle of Man"],
    ["il", "ISR", "Israel"],
    ["it", "ITA", "Italy"],
    ["jm", "JAM", "Jamaica"],
    ["jp", "JPN", "Japan"],
    ["je", "JEY", "Jersey"],
    ["jo", "JOR", "Jordan"],
    ["kz", "KAZ", "Kazakhstan"],
    ["ke", "KEN", "Kenya"],
    ["ki", "KIR", "Kiribati"],
    ["kp", "PRK", "Korea, Democratic People's Republic of"],
    ["kr", "KOR", "Korea, Republic of"],
    ["kw", "KWT", "Kuwait"],
    ["kg", "KGZ", "Kyrgyzstan"],
    ["la", "LAO", "Lao People's Democratic Republic"],
    ["lv", "LVA", "Latvia"],
    ["lb", "LBN", "Lebanon"],
    ["ls", "LSO", "Lesotho"],
    ["lr", "LBR", "Liberia"],
    ["ly", "LBY", "Libya"],
    ["li", "LIE", "Liechtenstein"],
    ["lt", "LTU", "Lithuania"],
    ["lu", "LUX", "Luxembourg"],
    ["mo", "MAC", "Macao"],
    ["mk", "MKD", "Macedonia, the former Yugoslav Republic of"],
    ["mg", "MDG", "Madagascar"],
    ["mw", "MWI", "Malawi"],
    ["my", "MYS", "Malaysia"],
    ["mv", "MDV", "Maldives"],
    ["ml", "MLI", "Mali"],
    ["mt", "MLT", "Malta"],
    ["mh", "MHL", "Marshall Islands"],
    ["mq", "MTQ", "Martinique"],
    ["mr", "MRT", "Mauritania"],
    ["mu", "MUS", "Mauritius"],
    ["yt", "MYT", "Mayotte"],
    ["mx", "MEX", "Mexico"],
    ["fm", "FSM", "Micronesia, Federated States of"],
    ["md", "MDA", "Moldova, Republic of"],
    ["mc", "MCO", "Monaco"],
    ["mn", "MNG", "Mongolia"],
    ["me", "MNE", "Montenegro"],
    ["ms", "MSR", "Montserrat"],
    ["ma", "MAR", "Morocco"],
    ["mz", "MOZ", "Mozambique"],
    ["mm", "MMR", "Myanmar"],
    ["na", "NAM", "Namibia"],
    ["nr", "NRU", "Nauru"],
    ["np", "NPL", "Nepal"],
    ["nl", "NLD", "Netherlands"],
    ["nc", "NCL", "New Caledonia"],
    ["nz", "NZL", "New Zealand"],
    ["ni", "NIC", "Nicaragua"],
    ["ne", "NER", "Niger"],
    ["ng", "NGA", "Nigeria"],
    ["nu", "NIU", "Niue"],
    ["nf", "NFK", "Norfolk Island"],
    ["mp", "MNP", "Northern Mariana Islands"],
    ["no", "NOR", "Norway"],
    ["om", "OMN", "Oman"],
    ["pk", "PAK", "Pakistan"],
    ["pw", "PLW", "Palau"],
    ["ps", "PSE", "Palestine, State of"],
    ["pa", "PAN", "Panama"],
    ["pg", "PNG", "Papua New Guinea"],
    ["py", "PRY", "Paraguay"],
    ["pe", "PER", "Peru"],
    ["ph", "PHL", "Philippines"],
    ["pn", "PCN", "Pitcairn"],
    ["pl", "POL", "Poland"],
    ["pt", "PRT", "Portugal"],
    ["pr", "PRI", "Puerto Rico"],
    ["qa", "QAT", "Qatar"],
    ["re", "REU", "R�union"],
    ["ro", "ROU", "Romania"],
    ["ru", "RUS", "Russian Federation"],
    ["rw", "RWA", "Rwanda"],
    ["bl", "BLM", "Saint Barth�lemy"],
    ["sh", "SHN", "Saint Helena, Ascension and Tristan da Cunha"],
    ["kn", "KNA", "Saint Kitts and Nevis"],
    ["lc", "LCA", "Saint Lucia"],
    ["mf", "MAF", "Saint Martin (French part)"],
    ["pm", "SPM", "Saint Pierre and Miquelon"],
    ["vc", "VCT", "Saint Vincent and the Grenadines"],
    ["ws", "WSM", "Samoa"],
    ["sm", "SMR", "San Marino"],
    ["st", "STP", "Sao Tome and Principe"],
    ["sa", "SAU", "Saudi Arabia"],
    ["sn", "SEN", "Senegal"],
    ["rs", "SRB", "Serbia"],
    ["sc", "SYC", "Seychelles"],
    ["sl", "SLE", "Sierra Leone"],
    ["sg", "SGP", "Singapore"],
    ["sx", "SXM", "Sint Maarten (Dutch part)"],
    ["sk", "SVK", "Slovakia"],
    ["si", "SVN", "Slovenia"],
    ["sb", "SLB", "Solomon Islands"],
    ["so", "SOM", "Somalia"],
    ["za", "ZAF", "South Africa"],
    ["gs", "SGS", "South Georgia and the South Sandwich Islands"],
    ["ss", "SSD", "South Sudan"],
    ["es", "ESP", "Spain"],
    ["lk", "LKA", "Sri Lanka"],
    ["sd", "SDN", "Sudan"],
    ["sr", "SUR", "Suriname"],
    ["sj", "SJM", "Svalbard and Jan Mayen"],
    ["sz", "SWZ", "Swaziland"],
    ["se", "SWE", "Sweden"],
    ["ch", "CHE", "Switzerland"],
    ["sy", "SYR", "Syrian Arab Republic"],
    ["tw", "TWN", "Taiwan, Province of China"],
    ["tj", "TJK", "Tajikistan"],
    ["tz", "TZA", "Tanzania, United Republic of"],
    ["th", "THA", "Thailand"],
    ["tl", "TLS", "Timor-Leste"],
    ["tg", "TGO", "Togo"],
    ["tk", "TKL", "Tokelau"],
    ["to", "TON", "Tonga"],
    ["tt", "TTO", "Trinidad and Tobago"],
    ["tn", "TUN", "Tunisia"],
    ["tr", "TUR", "Turkey"],
    ["tm", "TKM", "Turkmenistan"],
    ["tc", "TCA", "Turks and Caicos Islands"],
    ["tv", "TUV", "Tuvalu"],
    ["ug", "UGA", "Uganda"],
    ["ua", "UKR", "Ukraine"],
    ["ae", "ARE", "United Arab Emirates"],
    ["gb", "GBR", "United Kingdom"],
    ["us", "USA", "United States"],
    ["um", "UMI", "United States Minor Outlying Islands"],
    ["uy", "URY", "Uruguay"],
    ["uz", "UZB", "Uzbekistan"],
    ["vu", "VUT", "Vanuatu"],
    ["ve", "VEN", "Venezuela, Bolivarian Republic of"],
    ["vn", "VNM", "Viet Nam"],
    ["vg", "VGB", "Virgin Islands, British"],
    ["vi", "VIR", "Virgin Islands, U.S."],
    ["wf", "WLF", "Wallis and Futuna"],
    ["eh", "ESH", "Western Sahara"],
    ["ye", "YEM", "Yemen"],
    ["zm", "ZMB", "Zambia"],
    ["zw", "ZWE", "Zimbabwe"] ];

var colors = ["#33CC33","#19A347","#008A2E","#006B24","#004C1A","#002E0F","#001F00","#003300","#000F00"];	
	
var data = {"points": [["Afghanistan", "31627506"], ["Angola", "24227524"], ["Albania", "2894475"], ["Arab World", "385272539"], ["United Arab Emirates", "9086139"], ["Argentina", "42980026"], ["Armenia", "3006154"], ["American Samoa", "55434"], ["Antigua and Barbuda", "90900"], ["Australia", "23490736"], ["Austria", "8534492"], ["Azerbaijan", "9537823"], ["Burundi", "10816860"], ["Belgium", "11225207"], ["Benin", "10598482"], ["Burkina Faso", "17589198"], ["Bangladesh", "159077513"], ["Bulgaria", "7226291"], ["Bahrain", "1361930"], ["Bahamas, The", "383054"], ["Bosnia and Herzegovina", "3817554"], ["Belarus", "9470000"], ["Belize", "351706"], ["Bermuda", "65181"], ["Bolivia", "10561887"], ["Brazil", "206077898"], ["Barbados", "283380"], ["Brunei Darussalam", "417394"], ["Bhutan", "765008"], ["Botswana", "2219937"], ["Central African Republic", "4804316"], ["Canada", "35540419"], ["Central Europe and the Baltics", "103455497"], ["Switzerland", "8190229"], ["Channel Islands", "162917"], ["Chile", "17762647"], ["China", "1364270000"], ["Cote d'Ivoire", "22157107"], ["Cameroon", "22773014"], ["Congo, Rep.", "4504962"], ["Colombia", "47791393"], ["Comoros", "769991"], ["Cabo Verde", "513906"], ["Costa Rica", "4757606"], ["Caribbean small states", "7013555"], ["Cuba", "11379111"], ["Curacao", "155872"], ["Cayman Islands", "59172"], ["Cyprus", "1153658"], ["Czech Republic", "10510566"], ["Germany", "80889505"], ["Djibouti", "876174"], ["Dominica", "72341"], ["Denmark", "5639565"], ["Dominican Republic", "10405943"], ["Algeria", "38934334"], ["Ecuador", "15902916"], ["Egypt, Arab Rep.", "89579670"], ["Euro area", "338733933"], ["Eritrea", "5110444"], ["Spain", "46404602"], ["Estonia", "1313645"], ["Ethiopia", "96958732"], ["European Union", "508314883"], ["Finland", "5463596"], ["Fiji", "886450"], ["France", "66206930"], ["Faeroe Islands", "48221"], ["Micronesia, Fed. Sts.", "104044"], ["Gabon", "1687673"], ["United Kingdom", "64510376"], ["Georgia", "4504100"], ["Ghana", "26786598"], ["Guinea", "12275527"], ["Gambia, The", "1928201"], ["Guinea-Bissau", "1800513"], ["Equatorial Guinea", "820885"], ["Greece", "10957740"], ["Grenada", "106349"], ["Greenland", "56295"], ["Guatemala", "16015494"], ["Guam", "167543"], ["Guyana", "763893"], ["High income", "1398791060"], ["Hong Kong SAR, China", "7241700"], ["Honduras", "7961680"], ["Croatia", "4236400"], ["Haiti", "10572029"], ["Hungary", "9861673"], ["Indonesia", "254454778"], ["Isle of Man", "87127"], ["India", "1295291543"], ["Not classified", ""], ["Ireland", "4612719"], ["Iran, Islamic Rep.", "78143644"], ["Iraq", "34812326"], ["Iceland", "327589"], ["Israel", "8215300"], ["Italy", "61336387"], ["Jamaica", "2721252"], ["Jordan", "6607000"], ["Japan", "127131800"], ["Kazakhstan", "17289111"], ["Kenya", "44863583"], ["Kyrgyz Republic", "5834200"], ["Cambodia", "15328136"], ["Kiribati", "110470"], ["St. Kitts and Nevis", "54944"], ["Korea, Rep.", "50423955"], ["Kosovo", "1823149"], ["Kuwait", "3753121"], ["Lao PDR", "6689300"], ["Lebanon", "4546774"], ["Liberia", "4396554"], ["Libya", "6258984"], ["St. Lucia", "183645"], ["Low income", "621977594"], ["Liechtenstein", "37286"], ["Sri Lanka", "20639000"], ["Lower middle income", "2879097001"], ["Low & middle income", "5861861196"], ["Lesotho", "2109197"], ["Lithuania", "2929323"], ["Luxembourg", "556074"], ["Latvia", "1990351"], ["Macao SAR, China", "577914"], ["St. Martin (French part)", "31530"], ["Morocco", "33921203"], ["Monaco", "37623"], ["Moldova", "3556400"], ["Madagascar", "23571713"], ["Maldives", "357415"], ["Mexico", "125385833"], ["Marshall Islands", "52898"], ["Middle income", "5239883602"], ["Macedonia, FYR", "2075625"], ["Mali", "17086022"], ["Malta", "427404"], ["Myanmar", "53437159"], ["Montenegro", "621800"], ["Mongolia", "2909871"], ["Northern Mariana Islands", "54541"], ["Mozambique", "27216276"], ["Mauritania", "3969625"], ["Mauritius", "1260934"], ["Malawi", "16695253"], ["Malaysia", "29901997"], ["North America", "354462656"], ["Namibia", "2402858"], ["New Caledonia", "266000"], ["Niger", "19113728"], ["Nigeria", "177475986"], ["Nicaragua", "6013913"], ["Netherlands", "16854183"], ["High income: nonOECD", "328764693"], ["Norway", "5136475"], ["Nepal", "28174724"], ["New Zealand", "4509700"], ["High income: OECD", "1070026367"], ["OECD members", "1271344548"], ["Oman", "4236057"], ["Other small states", "20893579"], ["Pakistan", "185044286"], ["Panama", "3867535"], ["Peru", "30973148"], ["Philippines", "99138690"], ["Palau", "21097"], ["Papua New Guinea", "7463577"], ["Poland", "37995529"], ["Puerto Rico", "3548397"], ["Korea, Dem. Rep.", "25026772"], ["Portugal", "10397393"], ["Paraguay", "6552518"], ["Pacific island small states", "2313337"], ["French Polynesia", "279781"], ["Qatar", "2172065"], ["Romania", "19910995"], ["Russian Federation", "143819569"], ["Rwanda", "11341544"], ["South Asia", "1720976995"], ["Saudi Arabia", "30886545"], ["Sudan", "39350274"], ["Senegal", "14672557"], ["Singapore", "5469700"], ["Solomon Islands", "572171"], ["Sierra Leone", "6315627"], ["El Salvador", "6107706"], ["San Marino", "31595"], ["Somalia", "10517569"], ["Serbia", "7129428"], ["Sub-Saharan Africa (developing only)", "973402912"], ["South Sudan", "11911184"], ["Sub-Saharan Africa (all income levels)", "974315323"], ["Small states", "30220471"], ["Sao Tome and Principe", "186342"], ["Suriname", "538248"], ["Slovak Republic", "5418506"], ["Slovenia", "2062218"], ["Sweden", "9689555"], ["Swaziland", "1269112"], ["Sint Maarten (Dutch part)", "37664"], ["Seychelles", "91526"], ["Syrian Arab Republic", "22157800"], ["Turks and Caicos Islands", "33740"], ["Chad", "13587053"], ["Togo", "7115163"], ["Thailand", "67725979"], ["Tajikistan", "8295840"], ["Turkmenistan", "5307188"], ["Timor-Leste", "1212107"], ["Tonga", "105586"], ["Trinidad and Tobago", "1354483"], ["Tunisia", "10996600"], ["Turkey", "75932348"], ["Tuvalu", "9893"], ["Taiwan, China", ""], ["Tanzania", "51822621"], ["Uganda", "37782971"], ["Ukraine", "45362900"], ["Upper middle income", "2360786601"], ["Uruguay", "3419516"], ["United States", "318857056"], ["Uzbekistan", "30742500"], ["St. Vincent and the Grenadines", "109360"], ["Venezuela, RB", "30693827"], ["Virgin Islands (U.S.)", "104170"], ["Vietnam", "90730000"], ["Vanuatu", "258883"], ["West Bank and Gaza", "4294682"], ["World", "7260652256"], ["Samoa", "191845"], ["Yemen, Rep.", "26183676"], ["South Africa", "54001953"], ["Congo, Dem. Rep.", "74877030"], ["Zambia", "15721343"], ["Zimbabwe", "15245855"]]};
function fillIn(){
	for (point in data.points){
		var country = data.points[point][0];
		var code;
		var population = data.points[point][1];
		for (name in country_codes){
			if (country == country_codes[name][2]){
				code = country_codes[name][0]
			}
		}
		console.log(code);
		if (population < 5000000){
			changeColor(code,colors[0]);
		}
		else if (population > 5000000 && population < 10000000){
			changeColor(code,colors[1]);
		}
		else if (population > 10000000 && population < 15000000){
			changeColor(code,colors[2]);
		}
		else if (population > 15000000 && population < 20000000){
			changeColor(code,colors[3]);
		}
		else if (population > 20000000 && population < 25000000){
			changeColor(code,colors[4]);
		}
		else if (population > 25000000 && population < 30000000){
			changeColor(code,colors[5]);
		}
		else if (population > 30000000 && population < 35000000){
			changeColor(code,colors[6]);
		}
		else if (population > 35000000 && population < 40000000 ){
			changeColor(code,colors[7]);
		}
		else if (population > 40000000  ){
			changeColor(code,colors[8]);
		}

	}
}
/* changeColor takes a path ID and a color (hex value)
   and changes that path's fill color */
function changeColor(id, color) {
    document.getElementById(id).style.fill = color;   
}