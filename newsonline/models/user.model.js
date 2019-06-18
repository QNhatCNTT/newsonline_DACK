var db = require('../db/db-connection');

module.exports = {
  all: () => {
    return db.load('select * from newsonline.users');
  },

  allWithDetails: () => {
    return db.load(`
    SELECT tg.id, tg.Ten, count(tt.id) as num_of_tintuc 
    FROM newsonline.tag tg 
    left join newsonline.tintuc tt on tt.idTag = tg.id
    group by tg.id
    `);
  },

  single: id => {
    return db.load(`select * from newsonline.users where id = ${id}`);
  },

  add: entity => {
    return db.add('newsonline.users', entity);
  },

  update: entity => {
    return db.update('newsonline.users', 'id', entity);
  },

  delete: id => {
    return db.delete('newsonline.users', 'id', id);
  }
};