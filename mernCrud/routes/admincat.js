const express = require('express');
const Posts = require('../models/admincat');

const router = express.Router();

//save posts

router.post('/admincat/save',(req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:"post save successfully"
        });
    });
});

//get posts

router.get('/admincat',(req,res)=>{
    Posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                error:err
            });
        }
        return res.status(200).json({
            success:true,
            existingPosts:posts
        });
    });
});

//get a specific post

router.get("/admincat/:id",(req,res) =>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});

//update posts

router.put('/admincat/update/:id',(req,res) => {

    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post) => {

            if(err){
                return res.status(400).json({
                    error:err
                });

            }

            return res.status(200).json({
                success: "Update Succesfully"
            });
        }
    );
});

//delete post

router.delete('/admincat/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{

        if(err)return res.status(400).json({
            message:"Delete unsuccessful",err
        });
        return res.json({
            message:"delete is successful",deletedPost
        });
    });

});



module.exports = router;