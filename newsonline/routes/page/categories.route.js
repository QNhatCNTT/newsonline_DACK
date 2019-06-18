var express = require('express');
var categoriesModel = require('../../models/categories.model');
var tagsModel = require('../../models/tag.model');
var postsModel = require('../../models/tintuc.model');

var router = express.Router();

router.get('/:tenkhongdau', (req, res) => {
  var ten = req.params.tenkhongdau;
  categoriesModel.singleName(ten)
  .then(async rows => {
    console.log(rows)
    var posts = await postsModel.allByCat(rows[0].id)
    console.log(rows[0])
    res.render('page/categories', {
      categories: rows[0],
      posts: posts
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