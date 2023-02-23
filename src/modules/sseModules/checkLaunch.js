import {niceShot} from '../audio/play';
import {ipcRenderer} from 'electron';
import {initArray, initLaunchedList} from '../external/initLaunchList';

export const checkLaunch = (event, analyzer, multiWindow, game) => {
  let MSG = JSON.parse(`${event.data}`);
  if (!MSG.launched) return;
  analyzer.ANALYZER_LAUNCH = MSG;
  niceShot();
  if (!multiWindow.OPEN_MULTI_WINDOW)
    window.router.push('/MainPage/ResultPage');
  if (game.IS_GAME_START) window.router.push('/GameControllerPage');
  window.router.push('/ControllerPage');
  ipcRenderer.send('SECONDWINDOW', 'LaunchSecond');
};

const loop = (fullPage) =>
  setInterval(() => {
    fullPage
      .getVideoClip()
      .then((res) => {
        console.log(res);
        clearInterval(loop);
      })
      .catch((e) => {
        console.log('CLIP ERROR >> retrying....', e);
      });
  }, 500);

export const checkLaunchExternal = (event, analyzer, fullPage) => {
  let MSG = JSON.parse(`${event.data}`);
  if (!MSG.launched) return;

  analyzer.ANALYZER_LAUNCH = MSG;
  niceShot();

  initArray();
  fullPage.CONTROLLER_CURRENT_FORCUS = fullPage.LAUNCHED_LIST.length - 1;
  fullPage.CONTROLLER_CURRENT_SELECT = fullPage.LAUNCHED_LIST.length - 1;
  fullPage.SELECT_LAUNCHED_DATA = analyzer.ANALYZER_LAUNCH;

  ipcRenderer.send('SECONDWINDOW', 'LaunchExternal');

  loop(fullPage);
};
