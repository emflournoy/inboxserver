
'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req,res,next)=>{
  knex('messages')
  .select('*')
  .then((data)=>{
    return res.send(data);
  })
  .catch((err)=>{
    return res.status(400).send(err);
  });
})


module.exports = router;
