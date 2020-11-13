const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){

 let num1 = +req.body.num1;
 let num2 = +req.body.num2;

 let result = num1 + num2;

  res.send("The result of the calculation is " + result);
})

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  let weight = +req.body.weight;
  let height = +req.body.height;

  // console.log(weight, height)

  let result = ((weight/(height * height)) * 703).toFixed(1);

  // console.log(result)

  res.send("Your BMI is " + result)
})

app.listen(3001, function(){
  console.log("The Server is now running on port 3001")
});
