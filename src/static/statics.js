import DR from '../assets/images/main/clubs/Dr.png';
import WO from '../assets/images/main/clubs/Wo.png';
import IRON from '../assets/images/main/clubs/iron.png';
import WD from '../assets/images/main/clubs/Wd.png';
import PT from '../assets/images/main/clubs/Pt.png';

export const URL = {
  dev: 'http://localhost:8000',
  lime: 'http://192.168.0.47:8000',
  labtop: 'http://192.168.0.83:8000',
};

export const DUMMY = {
  data: {
    total: '-',
    carry: '-',
    run: '-',
    speedMps: '-',
    launchAngle: '-',
    azimuth: '-',
    club: '-',
    sideSpin: '-',
    backSpin: '-',
  },
  length: 11,
};

export const CLUB_IMAGES = [DR, WO, IRON, WD, PT];

const statics = {
  URL: URL.labtop,
  DUMMY: DUMMY,
  CLUB_IMAGES: CLUB_IMAGES,
};

export default statics;
