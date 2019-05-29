const express = require('express');
const mongodb = require('mongodb');
const loadCollection = require('./../../database.js');

const router = express.Router();

// Get
router.get('/', async(req, res) => {
  const posts = await loadCollection('posts');
  res.send(await posts.find({}).toArray());
});

router.get('/:id', async (req, res) => {
  const posts = await loadCollection('posts');
  let data = await posts.findOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.send(data);
});

// Add
router.post('/', async (req, res) => {
  const posts = await loadCollection('posts');
  await posts.insertOne({
    text: req.body.text,
    createdAt: new Date()
  });
  res.status(201).send();
});

// update
router.put('/:id', async (req, res) => {
  const posts = await loadCollection('posts');
  await posts.updateOne(
    { _id: new mongodb.ObjectID(req.params.id) },
    { $set: { text: req.body.text, updatedAt: new Date() } }
  );
  res.status(200).send();
});

// Delete
router.delete('/:id', async (req, res) => {
  const posts = await loadCollection('posts');
  await posts.deleteOne({ _id: new mongodb.ObjectID(req.params.id) });
  res.status(200).send();
});

module.exports = router;
