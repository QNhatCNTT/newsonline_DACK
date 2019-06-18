var db = require('../db/db-connection');

module.exports = {
  all: () => {
    return db.load('select * from newsonline.tag');
  },

  allWithDetails: () => {
      return db.load(`SELECT tg.id as idTag, tg.Ten, count(tt.id) as num_of_tintuc 
      FROM newsonline.tag tg 
      left join newsonline.tintuc tt on tt.idTag = tg.id
      group by tg.id
      `);
  },

  allByTag: idTag => {
    return db.load(`select * from newsonline.tag where id = ${idTag}`);
  },

  single: id => {
    return db.load(`select * from newsonline.tag where id = ${id}`);
  },
  
  singleNameTag: Ten=>{
    return db.load(`select * from newsonline.tag where TenKhongDau = '${Ten}'`);
  },

  

  add: entity => {
    return db.add('newsonline.tag', entity);
  },

  update: entity => {
    return db.update('newsonline.tag', 'id', entity);
  },

  delete: id => {
    return db.delete('newsonline.tag', 'id', id);
  }
};