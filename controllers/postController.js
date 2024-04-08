const mongoose = require("mongoose");
const Post = require("../models/PostSchema");

const getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find({ }).sort({ createdAt: -1 })
    res.status(200).json({ allPosts })
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

const getPost = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).json({ error: "post does not exists" });
  try {
    const post = await Post.findById(id);
    if(!post) return res.status(404).json({ error: "post does not exists" })
    res.status(200).json(post);
  } catch (err) {
    console.log(err.message);
  }
};

const createPost = async (req, res) => {
  try {
    const newPost = new Post(req.body);
    await newPost
      .save()
      .then(() => {
        res.status(200).json(newPost);
      })
      .catch((err) => {
        console.log(err.mesaage);
        res.status(400).json({ message: err.message });
      });
  } catch (err) {
    console.log(err.message);
  }
};

const deletePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ error: "post does not exists" });
    try {
        const post = await Post.findById(id);
        if(!post) return res.status(404).json({ error: "post does not exists" })  
        const deletedPost = await Post.findOneAndDelete({ _id: id });
        res.status(200).json({ deletedPost })
    } catch (err) {

    }
};

const updatePost = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id))
      return res.status(404).json({ error: "post does not exists" });
    try {
        const post = await Post.findById(id);
        if(!post) return res.status(404).json({ error: "post does not exists" })  
        const updatedPost = await Post.findOneAndUpdate({ _id: id }, { ...req.body });
        res.status(200).json({ updatedPost })
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
};

module.exports = { getAllPosts, getPost, createPost, deletePost, updatePost };
