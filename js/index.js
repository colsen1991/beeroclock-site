initErrorHandling();

initServiceWorker();

const { initialTime, timeZoneData } = initData();

initClock(initialTime, timeZoneData);

text.init(initialTime, timeZoneData);
