var db = require('../db/db-connection');

module.exports = {
  all: () => {
    return db.load('select * from newsonline.tintuc');
  },

  allWithDetails: () => {
    return db.load(`
    SELECT tt.id, tt.TieuDe, count(cmt.idTinTuc) as num_of_comment
    FROM newsonline.tintuc tt 
    left join newsonline.comment cmt on tt.id=cmt.idTinTuc
    group by tt.id
    `);
  },

  allByCat: idCat => {
    return db.load(`select * from newsonline.tintuc where idCat = ${idCat}`);
  },

  allByTag: idTag => {
    return db.load(`select * from newsonline.tintuc where idTag = ${idTag}`);
  },
  
  
  pageByCat: (idCat, limit, offset) => {
    return db.load(`select * from newsonline.tintuc where idCat = ${idCat} limit ${limit} offset ${offset}`);
  },

  countByCat: idCat => {
    return db.load(`select count(*) as total from newsonline.tintuc where idCat = ${idCat}`);
  },

  pageByTag: (idTag, limit, offset) => {
    return db.load(`select * from newsonline.tintuc where idTag = ${idTag} limit ${limit} offset ${offset}`);
  },

  countByTag: idTag => {
    return db.load(`select count(*) as total from newsonline.tintuc where idTag = ${idTag}`);
  },

  singleIdTag : id =>{
    return db.load(`select idTag from newsonline.tintuc where id = ${id}`);
  },

  singleIdCat : id =>{
    return db.load(`select idCat from newsonline.tintuc where id = ${id}`);
  },

  single: id => {
    return db.load(`select * from newsonline.tintuc where id = ${id}`);
  },
  

  add: entity => {
    return db.add('newsonline.tintuc', entity);
  },

  update: entity => {
    return db.update('newsonline.tintuc', 'id', entity);
  },

  delete: id => {
    return db.delete('newsonline.tintuc', 'id', id);
  }
};