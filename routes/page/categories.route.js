var express = require('express');
var categoryModel = require('../../models/categories.model');

var router = express.Router();

router.get('/',(req,res) =>{
    var p=categoryModel.add();
    p.then(rows=>{
        console.log(rows);
        res.render('page/danhsach');
    }).catch(err=>{
        console.log(err);
        var entity ={
            Ten: req.body
        }
    });
    
})
module.exports = router;