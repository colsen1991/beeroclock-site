const text = (function () {
  function getCurrentTimeZoneData(time, timeZoneData) {
    const utcHours = time.getUTCHours();

    if (utcHours >= 5 && utcHours <= 23) {
      return timeZoneData[ 17 - utcHours ];
    }
    else {
      return timeZoneData[ -7 - utcHours ]
    }
  }

  function replaceSpacesWithPlus(string) {
    return string.replace(/\s/g, '+');
  }

  function getGoogleMapsLink(city, country) {
    return `https://www.google.com.au/maps/search/${replaceSpacesWithPlus(city)},+${replaceSpacesWithPlus(country)}`;
  }

  function setAnswerAndPhrase(time, timeZoneData) {
    const answer = document.querySelector('#answer');
    const phraseEl = document.querySelector('#phrase');

    if (tools.isPastBeerOClock(time)) {
      answer.innerHTML = `<strong>It's well past beer o'clock where you're now, mate!</strong>`;
      phraseEl.innerText = 'Get your drink on! Cheers!';
    } else {
      const { city, country, phrase, lang } = getCurrentTimeZoneData(time, timeZoneData);
      answer.innerHTML = `<strong>It's beer o'clock in <a role="link" href="${getGoogleMapsLink(city, country)}" target="_blank" rel="noopener nofollow">${city}, ${country}</a></strong>.`;
      phraseEl.innerText = `${phrase} (That's "Cheers!" in ${lang})!`;
    }
  }

  return {
    setAnswerAndPhrase,
    init(time, timeZoneData) {
      setTimeout(() => tools.fadeIn('#answer'), 1000);
      setTimeout(() => tools.fadeIn('#phrase'), 1500);

      setAnswerAndPhrase(time, timeZoneData);
    }
  }
})();
