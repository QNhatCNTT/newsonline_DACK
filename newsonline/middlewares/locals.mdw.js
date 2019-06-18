var categoryModel = require('../models/categories.model');

module.exports = (req, res, next) => {
  categoryModel.allWithDetails().then(rows => {
    res.locals.lcCategories = rows;
    next();
  })
}