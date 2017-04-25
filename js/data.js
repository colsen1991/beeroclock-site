const data = (function () {
  class TimeZoneData {
    constructor(city, country, phrase, lang) {
      this.city = city;
      this.country = country;
      this.phrase = phrase;
      this.lang = lang;
    }
  }

  return {
    time: new Date(),
    timeZoneData: {
      '-6': new TimeZoneData('Mexico City', 'Mexico', '¡Salud', 'Spanish'),
      '-5': new TimeZoneData('New York', 'USA', 'Cheers!', 'English'),
      '-4': new TimeZoneData('	Fredericton', 'Canada', 'À votre santé', 'French'),
      '-3': new TimeZoneData('Nuuk', 'Greenland', 'Bunden i vejret eller resten i håret', 'Danish'),
      '-2': new TimeZoneData('King Edward Point', 'South Georgia and the South Sandwich Islands (SGSSI)', 'Cheers', 'English'),
      '-1': new TimeZoneData('Tasiilaq', 'Greenland', 'Kasuutta', 'Greenlandic'),
      '0': new TimeZoneData('Reykjavík', 'Iceland', 'Skál', 'Icelandic'),
      '1': new TimeZoneData('Tunis', 'Tunisia', 'Fee saḥitkum', 'Arabic'),
      '2': new TimeZoneData('Lilongwe', 'Malawi', 'Tikondwere', 'Chichewa'),
      '3': new TimeZoneData('Moscow', 'Russia', 'Za zdorov\'e', 'Russian'),
      '4': new TimeZoneData('Tibilisi', 'Georgia', 'Gagimarjos', 'Georgian'),
      '5': new TimeZoneData('Tashkent', 'Uzbekistan', 'Oldik', 'Uzbek'),
      '6': new TimeZoneData('Bishkek', 'Kyrgystan', 'Den soolugubuz üchün', 'Kyrgyz'),
      '7': new TimeZoneData('Hanoi', 'Vietnam', 'Chúc sức khoẻ', 'Vietnamese'),
      '8': new TimeZoneData('Taipei', 'Taiwan', 'Ho͘ ta là', 'Traditional Chinese'),
      '9': new TimeZoneData('Seoul', 'South Korea', 'Wihayeo', 'Korean'),
      '10': new TimeZoneData('Brisbane', 'Australia', 'Cheers mate! Grab me a Fosters from the Esky in the back of my ute!', 'Australian'),
      '11': new TimeZoneData('Bougainville Island', 'Papua New Guinea', 'God blesim yu', 'Tok Pisin'),
      '12': new TimeZoneData('Funafuti', 'Tuvalu', 'Manuia', 'Tuvaluan'),
      '13': new TimeZoneData('Fakaofo', 'Tokelau', 'Patipati nā lima', 'Tokelauan'),
      '14': new TimeZoneData('Line Islands', 'Kiribati', 'Marurung', 'Gilbertese'),
      '15': new TimeZoneData('Baker Island', 'USA', 'Cheers dude', 'English'),
      '16': new TimeZoneData('Niue', 'New Zealand', 'Cheers', 'English'),
      '17': new TimeZoneData('Honolulu', 'USA', 'Huli pau', 'Hawaiian')
    }
  }
})();
