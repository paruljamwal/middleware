const express = require("express");
const bookmodel = require("../model/bookmodel");
const router = express.Router();

//post book

router.post("", async (req, res) => {
  try {
    const book = await bookmodel.create(req.body);
    return res.status(201).send({ Book: book });
  } catch (err) {
    return res
      .status(404)
      .send("Something went wrong please try after sometime.");
  }
});

//get all books
router.get("", Books, async (req, res) => {
  try {
    const book = await bookmodel.find({}).lean().exec();
    return res.status(201).send({ Book: book });
  } catch (err) {
    return res
      .status(404)
      .send("Something went wrong please try after sometime.");
  }
});

//get one book
router.get("/:name", singlebook, async (req, res) => {
  try {
    const book = await bookmodel.find(req.params.name);
    return res.status(201).send({ BookName: book });
  } catch (err) {
    return res
      .status(404)
      .send("Something went wrong please try after sometime.");
  }
});
function Books(req, res, next) {
    console.log("Fetching all Books");
  next();
}

function singlebook(req, res, next) {
     if(req.name==req.params.name){
        next();
    }
    else{
      return res.send("err");
    }
  
}

module.exports = router;
