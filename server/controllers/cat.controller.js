/*const express = require('express');
const { getCatById, getCatsList, deleteCat, updateCat, createCat } = require('../services/cat.service');

const catRouter = express.Router();

// Create
const createCatController = async (req, res) => {
  try {
    const result = await createCat(req.body);
    res.send(result);
  } catch (error) {
    res.error(error);
  }
}

// Get
const getCatListController = async (req, res) => {
  try {
    const result = await getCatsList();
    res.send(result);
  } catch (error) {
    res.error(error);
  }
}

// Update
const updateCatController = async (req, res) => {
  try {
    const result = await updateCat(req.body);
    res.send(result);
  } catch (error) {
    res.error(error);
  }
}

// Delete
const deleteCatController = async (req, res) => {
  try {
    const catId = await deleteCat(req.body);
    res.send(catId);
  } catch (error) {
    res.error(error);
  }
}

// /cat/

// /cat
catRouter.post('/', createCatController);
// /cat
catRouter.get('/', getCatListController);
// /cat
catRouter.put('/', updateCatController);
// /cat/2312321
catRouter.delete('/:catId', deleteCatController);

module.exports = catRouter;

*/