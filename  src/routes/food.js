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
const Food = require('../models/data-collection-class.js');
const foodModel = require('../models/food.js');
const food = new Food(foodModel);



///////////////////////
//// ROUTES    ///////
/////////////////////

//get (READ)
router.get('/', getFoodHandler);
router.get('/:id', validator, getFoodByIdHandler);

//post (CREATE)
router.post('/', createFoodHandler);

//put (UPDATE)
router.put('/:id', validator, updateFoodHandler);

//delete (DELETE)
router.delete('/:id', validator, deleteFoodHandler);




// http://localhost:3030/api/v1/food/

async function getFoodHandler(req, res, next) {
  try{
    const resObj = await food.read();
    if (resObj.length === 0) {
      res.json('No Data');
    } else{
      res.json(resObj);
    }
  }catch(error){
    next(error);
  }
}



async function getFoodByIdHandler(req, res, next) {
  try {
    const resObj = await food.read(req.params.id);
    res.json(resObj[0]);        
  } catch (error) {
    next(error);        
  }
}

async function createFoodHandler(req, res, next) {
  const foodObject = req.body;
  try {
    const resObj = await food.create(foodObject);
    res.status(201).json(resObj);        
  } catch (error) {
    next(error);        
  }
}

async function updateFoodHandler(req, res, next) {
  const foodObject = req.body;
  try {
    const resObj = await food.update(req.params.id, foodObject);
    res.json(resObj);      
  } catch (error) {
    next(error);      
  }
}

async function deleteFoodHandler(req, res, next) {
  try {
    const resObj = await food.delete(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}


module.exports =router;