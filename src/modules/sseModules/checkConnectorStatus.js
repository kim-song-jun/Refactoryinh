const isDisconnectedOrGameExit = (msg) =>
  ['DISCONNECTED', 'GAME_EXIT'].includes(msg.args[1]);
const isConnected = (msg) => msg.args[1] === 'CONNECTED';

const handleConnectorStatusChanged = (msg) => {
  if (isDisconnectedOrGameExit(msg)) {
    // logic
    return;
  }

  if (isConnected(msg)) {
    // logic2
    return;
  }

  // logic3
};

const handleConnectorGameSelected = (msg) => {
  // logic4
};

const handleEvent = (msg) => {
  switch (msg.event) {
    case 'connector-ststus-changed':
      return handleConnectorStatusChanged(msg);
    case 'connector-game-selected':
      return handleConnectorGameSelected(msg);
    default:
      break;
  }
};

const checkConnectorStatus = (msg) => {
  const MSG = JSON.parse(msg);
  handleEvent(MSG);
};

export {checkConnectorStatus};
