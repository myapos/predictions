import * as constants from '../constants/constants';

/* Clears the storage of persisted objects */
const clearStorage = (storage, version) => {
  if (storage) {
    Object.keys(storage).forEach(key => {
      if (key.match(/persist/ig) && key !== `persist:${constants.persistenseKey}${version}`) {
        // clear old versions of storage
        storage.removeItem(key);
      }
    });
  }
};

/* manages storages depending on the version*/
const manageStorage = version => {
  const storages = [];

  if (window.localStorage) {
    storages.push(window.localStorage);
  }

  if (window.sessionStorage) {
    storages.push(window.sessionStorage);
  }

  /* manage localStorage */

  storages.forEach(storage => clearStorage(storage, version));
};

export default manageStorage;
