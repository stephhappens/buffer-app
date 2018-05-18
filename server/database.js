const fs = require('fs');
const path = require('path');

const database = {}

database._data = {};

database.init = (done) => {
  fs.readdir(path.join(__dirname, './database'), (err, files) => {
    if (err) {
      return done(err);
    }
    let filesRead = 0;
    files.forEach((file) => {
      fs.readFile(path.join(__dirname, './database', file), (err, content) => {
        if (err) {
          return done(err);
        }
        try {
          const data = content && content.length ? JSON.parse(content) : [];
          const collection = file.replace('.json', '');
          database._data[collection] = data;
        } catch (err) {
          throw new Error(`Error parsing json file contents: ${file}`);
        }
        filesRead = filesRead + 1;
        if (filesRead === files.length) {
          done();
        }
      })
    })
  })
}

database.get = (collection, sort = 'created_at', limit = 10, offset = 0) => {
  return database._data[collection]
    .sort((a, b) => a[sort] > b[sort] ? -1 : 1)
    .slice(offset, offset + limit);
};

module.exports = database;
