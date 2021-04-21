const usersDB = require('./usersDB.json');

module.exports = {
  getConnections() {
    return usersDB;
  }
};
