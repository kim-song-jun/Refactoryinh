import {readyPlay} from '../audio/play';

export const checkReady = (event, analyzer) => {
  analyzer.ANALYZER_READY = true;
  readyPlay();
  window.router.push('/MainPage/ReadyPage');
};
