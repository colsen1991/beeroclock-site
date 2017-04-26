function init() {
  initCommon();
  const data = initData();
  initClock(data.initialTime, data.timeZoneData);
};
