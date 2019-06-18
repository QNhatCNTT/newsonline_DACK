var express = require('express');
var categoriesModel = require('../../models/categories.model');
var tagsModel = require('../../models/tag.model');
var postsModel = require('../../models/tintuc.model');

var router = express.Router();

router.get('/:tenkhongdau', (req, res) => {
  var ten = req.params.tenkhongdau;
  categoriesModel.singleName(ten)
  .then(async rows => {
    
    var posts = await postsModel.allByCat(rows[0].id)
    //console.log(rows[0])
    //console.log(posts[0])
    res.render('page/categories', {
      categories: rows[0],
      posts: posts
    });
  }).catch(err => {
    console.log(err);
    res.end('error occured.')
  });
})

router.get('/tags/:id',async(req, res) => {
  var idTag = req.params.id;

  tagsModel.allByTag(idTag)
  .then(async rows => {
    console.log(rows[0])
    var categories = await categoriesModel.single(rows[0].idCat)
    var categories =  categories[0]
    console.log(categories.Ten)
    
    res.render('page/tags', {
      tags: rows[0],
      categories
    })
  })
  
})

router.get('/post/:id', async(req, res) => {
    var idPost = req.params.id;
    postsModel.single(idPost)
    .then(async rows => {
      console.log(rows[0])
      var categories = await categoriesModel.single(rows[0].idCat)
      var categories =  categories[0]
      var tags = await tagsModel.single(rows[0].idTag)
      var tags =  tags[0]
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
    })
  })

module.exports = router;