var express = require('express');
var postsModel = require('../../models/tintuc.model');
var categoriesModel = require('../../models/categories.model');
var tagsModel = require('../../models/tag.model');


var router = express.Router();

router.get('/:id', (req, res) => {
  var idPost = req.params.id;
  postsModel.single(idPost)
  .then(async rows => {
    console.log(rows[0])
    var categories = await categoriesModel.single(rows[0].idCat)
    var tags = await tagsModel.single(rows[0].idTag)
    console.log(categories.Ten)
    console.log(tags.Ten)
    res.render('page/post', {
      posts: rows[0],
      categories: categories,
      tags: tags
    });
  }).catch(err => {
    console.log(err);
    res.end('error occured.')
  });
})


module.exports = router;