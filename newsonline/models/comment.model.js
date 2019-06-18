var db = require('../db/db-connection');

module.exports = {
  all: () => {
    return db.load('select * from newsonline.comment');
  },

  allByUser: idUser => {
    return db.load(`select * from newsonline.comment where idUser = ${idUser}`);
  },

  allByTinTuc: idTinTuc => {
    return db.load(`select * from newsonline.comment where idTinTuc = ${idTinTuc}`);
  },
  
  contCmt: idCmt => {
    return db.load(`select count(*) as total from newsonline.comment where id = ${idCmt}`);
  },

  add: entity => {
    return db.add('newsonline.comment', entity);
  },

  update: entity => {
    return db.update('newsonline.comment', 'id', entity);
  },

  delete: id => {
    return db.delete('newsonline.comment', 'id', id);
  }
};