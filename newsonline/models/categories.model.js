var db = require('../db/db-connection');

module.exports = {
  all: () => {
    return db.load('select * from newsonline.categories');
  },

  allWithDetails: () => {
    return db.load(`
    SELECT c.id AS idCat, c.Ten, count(tt.id) as num_of_tintuc 
    FROM newsonline.categories c 
    left join newsonline.tintuc tt on tt.idCat= c.id
    group by c.id
    `);
  },
  allByCat: idCat => {
    return db.load(`select * from newsonline.categories where id = ${idCat}`);
  },

  single: id => {
    return db.load(`select * from newsonline.categories where id = ${id}`);
  },

  singleName: Ten => {
    return db.load(`select * from newsonline.categories where TenKhongDau = '${Ten}'`);
  },

  

  add: entity => {
    return db.add('newsonline.categories', entity);
  },

  update: entity => {
    return db.update('newsonline.categories', 'id', entity);
  },

  delete: id => {
    return db.delete('newsonline.categories', 'id', id);
  }
};