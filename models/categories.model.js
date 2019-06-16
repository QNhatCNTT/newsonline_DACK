var db = require('../db/db-connection');

module.exports = {
  all: () => {
    return db.load('select * from categories');
  },

  allWithDetails: () => {
    return db.load(`
      select c.id, c.Ten, count(t.id) as num_of_tag
      from categories c left join tag t on c.id = t.idCat
      group by c.id, c.Ten
    `);
  },

  single: id => {
    return db.load(`select * from categories where id = ${id}`);
  },

  add: entity => {
    return db.add('categories', entity);
  },

  update: entity => {
    return db.update('categories', 'id', entity);
  },

  delete: id => {
    return db.delete('categories', 'id', id);
  }
};