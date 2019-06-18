var express = require('express');
var categoriesModel = require('../../models/tintuc.model');


var router = express.Router();

router.get('/:id', (req, res) => {
  var id = req.params.id;
  categoriesModel.allByCat(id)
  .then(rows => {
    console.log(rows[0])
    
    res.render('page/categories', {
      categories: rows[0]
    });
  }).catch(err => {
    console.log(err);
    res.end('error occured.')
  });
})

router.get('/tags/:idTag',async(req, res) => {
  var idTag = req.params.idTag;

  var tags = await tagsModel.allByTag(idTag)
  var tags = tags[0]
    
  var categories = await categoriesModel.single(tags.idCat)
  var categories =  categories[0]
  console.log(categories.Ten)
  res.render('page/tags', {
    tags,
    categories
  }
)})

module.exports = router;