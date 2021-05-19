'use strict';

require('dotenv').config();
const supergoose = require('@code-fellows/supergoose');
const { app } = require('../ src/server.js');
const request = supergoose(app);

let id;


describe('API SERVER TEST', () => {
  it('Testing Home page', async () => {
    const response = await request.get('/');
    expect(response.status).toEqual(200);
    expect(response.text).toEqual('Hello from the other side');
  });
  it('Testing invalid routes', async () => {
    const response = await request.get('/anything');
    expect(response.status).toEqual(404);
  });
});

describe('Test Clothes', () => {


  it('Test getting empty clothes data using GET /clothes', async () => {
    const response = await request.get('/api/v1/clothes');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual('No Data');
  });


  it('Test Creating new clothes using POST /clothes', async () => {
    const response = await request.post('/api/v1/clothes').send({
      category: 'men',
      type: 'suit',
    });
    expect(response.status).toEqual(201);
    expect(response.body.type).toEqual('suit');
    id = response.body._id;
  });

  it('Test getting all clothes data using GET /clothes', async () => {
    const response = await request.get('/api/v1/clothes');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it('Test getting specific clothes data using GET /clothes/id', async () => {
    const response = await request.get(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.type).toEqual('suit');
  });
  it(`Test throwing an error if ID doesn't exist using GET /clothes`, async () => {
    const response = await request.get(`/api/v1/clothes/1`);
    expect(response.status).toEqual(500);
  });
  it('Test updating data using PUT /clothes/id', async () => {
    const response = await request.put(`/api/v1/clothes/${id}`).send({
      category: 'women',
      type: 'dress',
    });
    expect(response.status).toEqual(200);
    expect(response.body.category).toEqual('women');
    expect(response.body.type).toEqual('dress');
  });
  it('should throwing an error when updating clothes with invalid ID using  PUT /clothes/id', async () => {
    const response = await request.put(`/api/v1/clothes/1`);
    expect(response.status).toEqual(500);
  });
  it('Test deleting clothes using delete /clothes/id', async () => {
    const response = await request.delete(`/api/v1/clothes/${id}`);
    expect(response.status).toEqual(200);
  });
  it(`Test throwing an error if ID doesn't exist using on DELETE /clothes`, async () => {
    const response = await request.delete(`/api/v1/clothes/1`);
    expect(response.status).toEqual(500);
  });
});



describe('Test Food', () => {


  it('Test getting empty food data using GET /food', async () => {
    const response = await request.get('/api/v1/food');
    expect(response.status).toEqual(200);
    expect(response.body).toEqual('No Data');
  });


  it('Test Creating new food using POST /food', async () => {
    const response = await request.post('/api/v1/food').send({
      category: 'fast food',
      type: 'spaghetti',
    });
    expect(response.status).toEqual(201);
    expect(response.body.type).toEqual('spaghetti');
    id = response.body._id;
  });

  it('Test getting all food data using GET /food', async () => {
    const response = await request.get('/api/v1/food');
    expect(response.status).toEqual(200);
    expect(Array.isArray(response.body)).toBeTruthy();
  });
  it('Test getting specific food data using GET /food/id', async () => {
    const response = await request.get(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
    expect(response.body.type).toEqual('spaghetti');
  });
  it(`Test throwing an error if ID doesn't exist using GET /food`, async () => {
    const response = await request.get(`/api/v1/food/1`);
    expect(response.status).toEqual(500);
  });
  it('Test updating data using PUT /food/id', async () => {
    const response = await request.put(`/api/v1/food/${id}`).send({
      category: 'fast food',
      type: 'burger',
    });
    expect(response.status).toEqual(200);
    expect(response.body.category).toEqual('fast food');
    expect(response.body.type).toEqual('burger');
  });
  it('should throwing an error when updating food with invalid ID using  PUT /food/id', async () => {
    const response = await request.put(`/api/v1/food/1`);
    expect(response.status).toEqual(500);
  });
  it('Test deleting food using delete /food/id', async () => {
    const response = await request.delete(`/api/v1/food/${id}`);
    expect(response.status).toEqual(200);
  });
  it(`Test throwing an error if ID doesn't exist using on DELETE /food`, async () => {
    const response = await request.delete(`/api/v1/food/1`);
    expect(response.status).toEqual(500);
  });
});



