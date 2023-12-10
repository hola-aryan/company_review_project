const reviewModels = require('../models/reviewModels');
const { Op } = require('sequelize');

exports.getReview = (req, res, next) => {
  const searchCompName = req.query.search; 
    reviewModels.findAll({where: {compName :{
      [Op.eq]: searchCompName
    }}} )
    .then(review => {
      res.json({ review });
      console.log(review);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'Internal Server Error' });
    });
};

exports.postAddReview = async (req, res, next) => {
    console.log('Request received:', req.body); // Log the request body to check if data is reaching the server
  
    const compName = req.body.compName;
    const pros = req.body.pros;
    const cons = req.body.cons;
    const rating = req.body.rating;
  
    try {
      const data = await reviewModels.create({ compName, pros, cons,rating });
      console.log("Data added to the database:", data);
      res.status(201).json({ newExpenseDetail: data });
    } catch (error) {
      console.error('Error adding data to the database:', error);
      console.log("The value is not added");
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };