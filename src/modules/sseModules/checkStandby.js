export const checkStandBy = (event, analyzer) => {
  console.log('>> checkStandBy', event.data);
  analyzer.ANALYZER_STANDBY = true;
  window.router.push('/SelectPage');
  console.log(window.location.pathname);
};

export default checkStandBy;
