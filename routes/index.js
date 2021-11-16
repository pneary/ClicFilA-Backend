var express = require('express');
var globalCount = require('../game')
var router = express.Router();

globalCount.setCount();

router.put('/increase', (req, res) => {
  globalCount.inc();
  res.json({score: globalCount.getCount()});
})

router.put('/decrease', (req, res) => {
  globalCount.dec();
  res.json({score: globalCount.getCount()});
})

router.get('/', (req, res) => {
  res.json({score: globalCount.getCount()});
})
module.exports = router;
