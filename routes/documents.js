const express = require('express');
const router = express.Router();
const Document = require('../models/Document');

// get all the projects
router.get('/', (req, res, next) => {
  Document.find()
    .then(documents => {
      res.status(200).json(documents);
    })
    .catch(err => {
      res.json(err);
    })

});

// get a specfic project
// to check if id is a valid mongo object id: mongoose.Types.ObjectId.isValid(_id)
router.get('/:id', (req, res, next) => {
  Project.findById(req.params.id)
    .then(document => {
      if (!document) {
        console.log('no document');
        res.status(404).json(document);
      } else {
        res.status(200).json(document);
      }
    })
    .catch(err => {
      res.json(err);
    })
});

// create a project
router.post('/', (req, res) => {
  const { title, description } = req.body;
  const owner = req.user._id;
  Document.create({
    title,
    description,
    owner
  })
    .then(document => {
      res.status(201).json(document);
    })
    .catch(err => {
      res.json(err);
    })
})

// update a project
router.put('/:id', (req, res, next) => {
  const { title, description } = req.body;
  Document.findByIdAndUpdate(
    req.params.id,
    { title, description },
    // this ensures that we are getting the updated document as a return 
    { new: true }
  )
    .then(document => {
      console.log(document);
      res.status(200).json(document);
    })
    .catch(err => {

    })
});

router.delete('/:id', (req, res, next) => {
  Document.findByIdAndDelete(req.params.id)
    .then(document => {
      res.status(200).json({ message: 'ok' })
    })
    .catch(err => {
      res.json(err);
    })
});




module.exports = router;