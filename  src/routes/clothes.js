'use strict';

///////////////////////
//// Dependencies ////
/////////////////////

const express = require('express');
const router = express.Router();


///////////////////////
//// Imports      ////
/////////////////////

// Validator
const validator = require('../middleware/validator.js');


// Models
const Clothes = require('../models/data-collection-class.js');
const clothesModel = require('../models/clothes.js');
const clothes = new Clothes(clothesModel);



///////////////////////
//// ROUTES    ///////
/////////////////////

//get (READ)
router.get('/', getClothesHandler);
router.get('/:id', validator, getClothesByIdHandler);

//post (CREATE)
router.post('/', createClothesHandler);

//put (UPDATE)
router.put('/:id', validator, updateClothesHandler);

//delete (DELETE)
router.delete('/:id', validator, deleteClothesHandler);




// http://localhost:3030/api/v1/clothes/

async function getClothesHandler(req, res, next) {
  try{
    const resObj = await clothes.read();
    if (resObj.length === 0) {
      res.json('No Data');
    } else{
      res.json(resObj);
    }
  }catch(error){
    next(error);
  }
}



async function getClothesByIdHandler(req, res, next) {
  try {
    const resObj = await clothes.read(req.params.id);
    res.json(resObj[0]);        
  } catch (error) {
    next(error);        
  }
}

async function createClothesHandler(req, res, next) {
  const clothesObject = req.body;
  try {
    const resObj = await clothes.create(clothesObject);
    res.status(201).json(resObj);        
  } catch (error) {
    next(error);        
  }
}

async function updateClothesHandler(req, res, next) {
  const clothesObject = req.body;
  try {
    const resObj = await clothes.update(req.params.id, clothesObject);
    res.json(resObj);      
  } catch (error) {
    next(error);      
  }
}

async function deleteClothesHandler(req, res, next) {
  try {
    const resObj = await clothes.delete(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}


module.exports =router;