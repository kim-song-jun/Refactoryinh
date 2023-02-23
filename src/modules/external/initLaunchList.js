import statics from '../../static/statics';

const filter = (loop) => new Array(loop).fill(statics.DUMMY.data);

export const initLaunchedList = (launchedList, length) => {
  let loop = length - launchedList.length;
  return [...launchedList, ...filter(loop)];
};

export const initArray = (analyzer, fullPageStore) => {
  fullPageStore.LAUNCHED_LIST = [
    ...fullPageStore.LAUNCHED_LIST,
    analyzer.ANALYZER_LAUNCH,
  ];

  fullPageStore.TABLE_DATA =
    fullPageStore.LAUNCHED_LIST.length < statics.DUMMY.length
      ? initLaunchedList(fullPageStore.LAUNCHED_LIST, statics.DUMMY.length)
      : (fullPageStore.TABLE_DATA = [...fullPageStore.LAUNCHED_LIST]);
};
