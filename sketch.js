var input = [];
var result = "Sem Resultados";

var CalculatorBase, ResultScreen;
//  var nothing;
var OneButton;
var TwoButton;
var ThreeButton;
var FourButton;
var FiveButton;
var SixButton;
var SevenButton;
var EightButton;
var NineButton;
var ZeroButton;

var PlusButton, MinusButton, MultiplicationButton, DivisionButton, RaizQuadradaButton, 
PotenciaButton, 
ClearButton, DeleteButton, ResultButton;

var ResultText;

var Load = false;

var numbers = "";

var allNumbers = [];

var dot = false;

var raizQuadrada = false;

var operation = "";

var potencianumbers = "";

var keyBoardDelayTime = true;

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

var initialWidth, newWidthAdded;

var operationPreviewText, numberPreviewText;

var oldNumbers = [''];

var digitSound

function preload(){
  digitSound = loadSound('DigitSoundEffect.mp3');
  digitSound.setVolume(0.8);
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  initialWidth = width;
  
  CalculatorBase = createImg("nothing.png");
  CalculatorBase.class("AddCalculatorBase");
  CalculatorBase.position(windowWidth / 2 - 120, height / 2 - 200 );

  ResultScreen = createButton("");
  ResultScreen.class("AddResultScreen");
  ResultScreen.position(width / 2 - 105, height / 2 - 190);

  ResultText = createElement("h3");
  ResultText.position(ResultScreen.x, ResultScreen.y-5);
  ResultText.size(250, 24);
  ResultText.style("text-align", 'center');
  //ResultText.style("background-color", 'blue');
  
  ResultText.html(result);
  
  numberPreviewText = createElement("h3");
  if(!isMobile){
    numberPreviewText.position(ResultScreen.x, ResultScreen.y-5-ResultScreen.height);
  }else{
    numberPreviewText.position(ResultScreen.x, ResultScreen.y-ResultScreen.height/2);//ResultScreen.y-5
  }
  numberPreviewText.size(250, 12);
  numberPreviewText.style('font-size', '12px');
  numberPreviewText.style('color', 'blue');
  numberPreviewText.style("text-align", 'center');
  //numberPreviewText.style("background-color", 'lightblue');

  numberPreviewText.html("");

  operationPreviewText = createElement("h3");
  if(!isMobile){
    operationPreviewText.position(ResultScreen.x+5, ResultScreen.y-5-ResultScreen.height);
  }else{
    operationPreviewText.position(ResultScreen.x+5, ResultScreen.y-ResultScreen.height/2);//ResultScreen.y-5
  }
  operationPreviewText.size(12, 12);
  operationPreviewText.style('font-size', '12px');
  operationPreviewText.style('color', 'blue');
  operationPreviewText.style("text-align", 'center');
  //operationPreviewText.style("background-color", 'lightblue');

  

  OneButton = createButton("1");
  OneButton.class("AddButton");
  /*OneButton.style("width", '68px');OneButton.style("height", '69px');
  OneButton.style("border-radius", '10px');
  OneButton.style("background-color", '#dde016');
  OneButton.style("font-size", '35px'); 
  OneButton.style("padding", '10px'); 
  OneButton.style("background-size", 'cover');
  OneButton.style("display", 'inline-block');
  OneButton.style("cursor", 'pointer');
  OneButton.style("-webkit-transition-duration", '0.0s');
  OneButton.style("transition-duration", '0.0s');
  OneButton.style("outline", 'none');*/
  //OneButton.mousePressed(handleOne);
  //OneButton.mousePressed(calculate(1));
  
  TwoButton = createButton("2");
  TwoButton.class("AddButton");
  //TwoButton.mousePressed(handleTwo);
  //TwoButton.mousePressed(calculate(2));
  
  ThreeButton = createButton("3");
  ThreeButton.class("AddButton");
  //ThreeButton.mousePressed(handleThree);
  //ThreeButton.mousePressed(calculate(3));
  
  FourButton = createButton("4");
  FourButton.class("AddButton");
  //FourButton.mousePressed(handleFour);
  //FourButton.mousePressed(calculate(4));
  
  FiveButton = createButton("5");
  FiveButton.class("AddButton");
  //FiveButton.mousePressed(handleFive);
  //FiveButton.mousePressed(calculate(5));
  
  SixButton = createButton("6");
  SixButton.class("AddButton");
  //SixButton.mousePressed(handleSix);
  //SixButton.mousePressed(calculate(6));
  
  SevenButton = createButton("7");
  SevenButton.class("AddButton");
  //SevenButton.mousePressed(handleSeven);
  //SevenButton.mousePressed(calculate(7));
  
  EightButton = createButton("8");
  EightButton.class("AddButton");
  //EightButton.mousePressed(handleEight);
  //EightButton.mousePressed(calculate(8));
  
  NineButton = createButton("9");
  NineButton.class("AddButton");
  //NineButton.mousePressed(handleNine);
  //NineButton.mousePressed(calculate(9));
  
  ZeroButton = createButton("0");
  ZeroButton.class("AddButtonLarge");
  //ZeroButton.mousePressed(handleZero);
  //ZeroButton.mousePressed(calculate(0));
  
  PlusButton = createButton("+");
  PlusButton.class("AddButton");
  //PlusButton.mousePressed(handlePlus);
  //PlusButton.mousePressed(calculate("+"));
  
  MinusButton = createButton("-");
  MinusButton.class("AddButton");
  //MinusButton.mousePressed(handleMinus);
  //MinusButton.mousePressed(calculate("-"));
  
  MultiplicationButton = createButton("×|*");//× //x
  MultiplicationButton.class("AddButton");
  //MultiplicationButton.mousePressed(handleMultiply);
  //MultiplicationButton.mousePressed(calculate("*"));
  
  DivisionButton = createButton(":|/");
  DivisionButton.class("AddButton");
  //DivisionButton.mousePressed(handleDivide);
  //DivisionButton.mousePressed(calculate("/"));

  RaizQuadradaButton = createButton("√");
  RaizQuadradaButton.class("AddSmallButton");

  PotenciaButton = createButton("xY");//&#x00B2
  PotenciaButton.class("AddSmallButton");
  
  DeleteButton = createButton("Del");
  DeleteButton.class("AddButton");
  //DeleteButton.mousePressed(calculate("delete"));
  
  ResultButton = createButton("=");
  //ResultButton.class("AddButtonLarge");
  ResultButton.class("AddButton");
  //ResultButton.mousePressed(handleResult);
  //ResultButton.mousePressed(calculate("result"));
  
  DotButton = createButton(",|.");
  DotButton.class("AddButton");
  //DotButton.mousePressed(handleDot);
  //DotButton.mousePressed(calculate("."));
  
  ClearButton = createButton("C");
  ClearButton.class("AddButton");
  //ClearButton.mousePressed(handleClear);
  //ClearButton.mousePressed(calculate("clear"));

  CalculatorBase.position(windowWidth / 2 - 120, height / 2 - 200);
  OneButton.position(windowWidth / 2 - 120+1, height / 2 + 80);
  TwoButton.position(windowWidth / 2 - 50+1, height / 2 + 80);
  ThreeButton.position(windowWidth / 2 + 20+1, height / 2 + 80);
  FourButton.position(windowWidth / 2 - 120+1, height / 2 + 10);
  FiveButton.position(windowWidth / 2 - 50+1, height / 2 + 10);
  SixButton.position(windowWidth / 2 + 20+1, height / 2 + 10);
  SevenButton.position(windowWidth / 2 - 120+1, height / 2 - 60);
  EightButton.position(windowWidth / 2 - 50+1, height / 2 - 60);
  NineButton.position(windowWidth / 2 + 20+1, height / 2 - 60);
  ZeroButton.position(windowWidth / 2 - 120+1, height / 2 + 150);
  DotButton.position(windowWidth / 2 + 20+1, height / 2 + 150);
  ClearButton.position(windowWidth / 2 - 120+1, height / 2 - 130);
  DeleteButton.position(windowWidth / 2 - 50+1, height / 2 - 130);
  //ResultButton.position(windowWidth / 2 + 20+1, height / 2 - 130);
  ResultButton.position(windowWidth / 2 + 90+1, height / 2 - 130);
  PlusButton.position(windowWidth / 2 + 90+1, height / 2 - 60);
  MinusButton.position(windowWidth / 2 + 90+1, height / 2 + 10);
  MultiplicationButton.position(windowWidth / 2 + 90+1, height / 2 + 80);
  DivisionButton.position(windowWidth / 2 + 90+1, height / 2 + 150);
  RaizQuadradaButton.position(windowWidth / 2 + 20+1, height / 2 - 130);
  PotenciaButton.position(windowWidth / 2 + 20+1, height / 2 - 95);
  ResultScreen.position(windowWidth / 2 - 105, height / 2 - 190);
  if(!isMobile){
    operationPreviewText.position(ResultScreen.x+5, ResultScreen.y-5-ResultScreen.height);
    numberPreviewText.position(ResultScreen.x, ResultScreen.y-5-ResultScreen.height);
  }else{
    operationPreviewText.position(ResultScreen.x+5, ResultScreen.y-ResultScreen.height/2);//ResultScreen.y-5
    numberPreviewText.position(ResultScreen.x, ResultScreen.y-ResultScreen.height/2);//ResultScreen.y-5
  }
  
  OneButton.mousePressed(handleOne);
  TwoButton.mousePressed(handleTwo);
  ThreeButton.mousePressed(handleThree);
  FourButton.mousePressed(handleFour);
  FiveButton.mousePressed(handleFive);
  SixButton.mousePressed(handleSix);
  SevenButton.mousePressed(handleSeven);
  EightButton.mousePressed(handleEight);
  NineButton.mousePressed(handleNine);
  ZeroButton.mousePressed(handleZero);
  PlusButton.mousePressed(handlePlus);
  MinusButton.mousePressed(handleMinus);
  MultiplicationButton.mousePressed(handleMultiply);
  DivisionButton.mousePressed(handleDivide);
  RaizQuadradaButton.mousePressed(handleRaizQuadrada);
  PotenciaButton.mousePressed(handlePotencia);
  ResultButton.mousePressed(handleResult);
  DeleteButton.mousePressed(handleDelete);
  DotButton.mousePressed(handleDot);
  ClearButton.mousePressed(handleClear);

  numbers = "";
}

function draw(){
  //calculate();
  background('orange');
  //console.log(CalculatorBase.height);

  if(numbers !== ""){
    numberPreviewText.html(numbers);
  }else{
    numberPreviewText.html("");
  }

  ResultText.html(result);
  ResultText.position(ResultScreen.x, ResultScreen.y-5);

  if(operation == "plus"){
    operationPreviewText.html("+");
  }else if(operation == "minus"){
    operationPreviewText.html("-");
  }else if(operation == "multiply"){
    operationPreviewText.html("x|*");
  }else if(operation == "divide"){
    operationPreviewText.html(":|/");
  }else{
    operationPreviewText.html("");
  }
  
  /*textSize(45);
  textAlign("center");
  fill('darkorange');
  stroke('cyan');
  if(initialWidth == width){
    text("Só Uma Calculadora...", width / 2, 45);
  }else{
    text("Só Uma Calculadora...", width / 2-newWidthAdded/2, 45);
  }*/

  /*if(keyCode == "49" || keyCode == "35"){
    key = '';
    keyCode = 0;
    if(keyBoardDelayTime == true){
      handleOne();
    }
    key = '';
    keyCode = 0;
  }

  if(keyIsDown(49)){
    console.log("EEEEEEEE");
  }
  
  setTimeout(() => {
    if(keyBoardDelayTime == false){
      keyBoardDelayTime = true;
    }
  }, 2);*/

  if(!isMobile){

    
    /*if(initialWidth == windowWidth){
      CalculatorBase.position(width / 2 - CalculatorBase.width/2.32, height / 2 - 200);
      CalculatorBase.position(windowWidth / 2 - 120, height / 2 - 200);
    }else{
      CalculatorBase.position(windowWidth / 2 - 120, height / 2 - 200);
      CalculatorBase.size('260px', '400px');
      console.log(CalculatorBase.width, CalculatorBase.height);
    }*/
    CalculatorBase.position(windowWidth / 2 - 120, height / 2 - 200);
    /* OneButton.position(windowWidth / 2 - 120, height / 2 + 80);
    TwoButton.position(windowWidth / 2 - 50, height / 2 + 80);
    ThreeButton.position(windowWidth / 2 + 20, height / 2 + 80);
    FourButton.position(windowWidth / 2 - 120, height / 2 + 10);
    FiveButton.position(windowWidth / 2 - 50, height / 2 + 10);
    SixButton.position(windowWidth / 2 + 20, height / 2 + 10);
    SevenButton.position(windowWidth / 2 - 120, height / 2 - 60);
    EightButton.position(windowWidth / 2 - 50, height / 2 - 60);
    NineButton.position(windowWidth / 2 + 20, height / 2 - 60);
    ZeroButton.position(windowWidth / 2 - 120, height / 2 + 150);
    DotButton.position(windowWidth / 2 + 20, height / 2 + 150);
    ClearButton.position(windowWidth / 2 - 120, height / 2 - 130);
    DeleteButton.position(windowWidth / 2 - 50, height / 2 - 130);
    ResultButton.position(windowWidth / 2 + 20, height / 2 - 130);
    PlusButton.position(windowWidth / 2 + 90, height / 2 - 60);
    MinusButton.position(windowWidth / 2 + 90, height / 2 + 10);
    MultiplicationButton.position(windowWidth / 2 + 90, height / 2 + 80);
    DivisionButton.position(windowWidth / 2 + 90, height / 2 + 150);  */
    OneButton.position(windowWidth / 2 - 120+1, height / 2 + 80);
    TwoButton.position(windowWidth / 2 - 50+1, height / 2 + 80);
    ThreeButton.position(windowWidth / 2 + 20+1, height / 2 + 80);
    FourButton.position(windowWidth / 2 - 120+1, height / 2 + 10);
    FiveButton.position(windowWidth / 2 - 50+1, height / 2 + 10);
    SixButton.position(windowWidth / 2 + 20+1, height / 2 + 10);
    SevenButton.position(windowWidth / 2 - 120+1, height / 2 - 60);
    EightButton.position(windowWidth / 2 - 50+1, height / 2 - 60);
    NineButton.position(windowWidth / 2 + 20+1, height / 2 - 60);
    ZeroButton.position(windowWidth / 2 - 120+1, height / 2 + 150);
    DotButton.position(windowWidth / 2 + 20+1, height / 2 + 150);
    ClearButton.position(windowWidth / 2 - 120+1, height / 2 - 130);
    DeleteButton.position(windowWidth / 2 - 50+1, height / 2 - 130);
    //ResultButton.position(windowWidth / 2 + 20+1, height / 2 - 130);
    ResultButton.position(windowWidth / 2 + 90+1, height / 2 - 130);
    PlusButton.position(windowWidth / 2 + 90+1, height / 2 - 60);
    MinusButton.position(windowWidth / 2 + 90+1, height / 2 + 10);
    MultiplicationButton.position(windowWidth / 2 + 90+1, height / 2 + 80);
    DivisionButton.position(windowWidth / 2 + 90+1, height / 2 + 150);
    RaizQuadradaButton.position(windowWidth / 2 + 20+1, height / 2 - 130);
    PotenciaButton.position(windowWidth / 2 + 20+1, height / 2 - 95);
    ResultScreen.position(windowWidth / 2 - 105, height / 2 - 190);
    ResultText.position(ResultScreen.x, ResultScreen.y-5);

  }
  if(keyWentDown(35)){
    console.log("EEEEEEEE");
  }
  if(!isMobile){
    operationPreviewText.position(ResultScreen.x+5, ResultScreen.y-5-ResultScreen.height);
    numberPreviewText.position(ResultScreen.x, ResultScreen.y-5-ResultScreen.height);
  }else{
    operationPreviewText.position(ResultScreen.x+5, ResultScreen.y-ResultScreen.height/2);//ResultScreen.y-5
    numberPreviewText.position(ResultScreen.x, ResultScreen.y-ResultScreen.height/2);//ResultScreen.y-5
  }
  
  fill('cyan');
  stroke('green');
  //text(input, windowWidth, windowHeight);

  drawSprites();
}

/*function calculate(number){
  if(number == 0){
    input.push(0);
  }
  if(number == 1){
    input.push(1);
  }
  if(number == 2){
    input.push(2);
  }
  if(number == 3){
    input.push(3);
  }
  if(number == 4){
    input.push(4);
  }
  if(number == 5){
    input.push(5);
  }
  if(number == 6){
    input.push(6);
  }
  if(number == 7){
    input.push(7);
  }
  if(number == 8){
    input.push(8);
  }
  if(number == 9){
    input.push(9);
  }
  if(number == "delete" && input.length >= 1){
    input.pop();
  }else{
    
  }
  if(number == "+"){// && input.length >= 1){
    input.push("+");
  }else{
    
  }
  if(number == "-"){// && input.length >= 1){
    input.push("-");
  }else{
    
  }
  if(number == "/"){// && input.length >= 1){
    input.push("/");
  }else{
    
  }
  if(number == "*"){// && input.length >= 1){
    input.push("*");
  }else{
    
  }
  if(number == "."){// && input.length >= 1){
    input.push(".");
  }else{
    
  }
  if(number == "clear" && input.length >= 1){
    for(var i = 0; i <= input.length; i++){
      input.pop();
    }
    if(result != "Sem Resultados"){
      result = "Sem Resultados";
    }
  }else{
      
  }
  if(number == "result" && input.length >= 1){
    result = input;
    for(var i = 0; i <= input.length; i++){
      input.pop();
    }
    //console.log(result);
  }else{
    
  }
  //console.log(input);
  if(Load == false){
    for(var i = 0; i <= input.length; i++){
      input.pop();
    }
    if(result != "Sem Resultados"){
      result = "Sem Resultados";
    }
    if(input.length = 0 && Load == false && result == "Sem Resultados"){
      Load = true;
    }
  }
}*/

/*function handleNumbers(number){
  if(number == "+"){
    allNumbers.push(numbers);
    numbers = "";
    console.log(numbers, allNumbers);
  }else if(number == "=" && allNumbers.length >= 2){
    for(var e = 0; e < allNumbers.length; e = e+1){
      if(result == "Sem Resultados"){
        result = 0;
      }
      var othernumber = allNumbers[e];
      console.log("e:"+e);
      result = result+othernumber;
      console.log("result:"+result);
    }
    
  }
  else if(number == 1 || number == 2 || number == 3 || number == 4 || number == 5
    || number == 6 || number == 7 || number == 8 || number == 9 || number == 0){
    numbers = numbers+""+number;
    console.log(numbers);
  }
  
}*/

function keyTyped() {
  if(key !== ''){
    if(key == '=' || key === 'Enter' || key === '.' || key === ',' || key === '/' || key === '*'
    || key === '-'|| key === '+'|| key === '0'|| key === '9'|| key === '8' || key === '7'
    || key === '6'|| key === '5'|| key === '4'|| key === '3'|| key === '2'|| key === '1'){
      digitSound.play();
    }
    if (key === '1') {
      handleOne();
    } else if (key === '2') {
      handleTwo();
    }
    else if (key === '3') {
      handleThree();
    }
    else if (key === '4') {
      handleFour();
    }
    else if (key === '5') {
      handleFive();
    }
    else if (key === '6') {
      handleSix();
    }
    else if (key === '7') {
      handleSeven();
    }
    else if (key === '8') {
      handleEight();
    }
    else if (key === '9') {
      handleNine();
    }
    else if (key === '0') {
      handleZero();
    }
    else if (key === '+') {
      handlePlus();
    }
    else if (key === '-') {
      handleMinus();
    }
    else if (key === '*') {
      handleMultiply();
    }
    else if (key === '/') {
      handleDivide();
    }
    else if (key === '.' || key === ',') {
      handleDot();
    }
    else if (key === '=' || key === 'Enter') {
      handleResult();
    }
    // uncomment to prevent any default behavior
    // return false;
  }
  
}

function handleOne(){
  numbers = numbers+""+1;
  console.log(numbers);

  oldNumbers.push(numbers);
}

function handleTwo(){
  numbers = numbers+""+2;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleThree(){
  numbers = numbers+""+3;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleFour(){
  numbers = numbers+""+4;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleFive(){
  numbers = numbers+""+5;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleSix(){
  numbers = numbers+""+6;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleSeven(){
  numbers = numbers+""+7;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleEight(){
  numbers = numbers+""+8;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleNine(){
  numbers = numbers+""+9;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleZero(){
  numbers = numbers+""+0;
  console.log(numbers);
  
  oldNumbers.push(numbers);
}

function handleClear(){
  numbers = "";
  result = "Sem Resultados";
  allNumbers = [];
  dot = false;
  operation = "";
  oldNumbers = [''];
}

function handleDot(){
  if(dot == false && numbers !== ""){
    numbers = numbers+".";
    dot = true;

      
    oldNumbers.push(numbers);
  }
  console.log(numbers);
}

function handleResult(){
  if(numbers !== ""){
    allNumbers.push(numbers);
    numbers = "";
    console.log(numbers, allNumbers);
    dot = false;
  }
  if(allNumbers.length === 1 && result !== "Sem Resultados"){
    allNumbers.push('0');
  }

  //if(potencianumbers !== "" && allNumbers.length < 2){
  //  result = pow(result, potencianumbers);
  //  potencianumbers = "";
  //}

  if(allNumbers.length >= 2 || result !== "Sem Resultados"){
    var othernumber = allNumbers[e];
    var othernumber2 = allNumbers[e+1];
    var SubtractionToWork;
    if(result == "Sem Resultados" || operation == "divide" || operation == "multiply"){
      SubtractionToWork = 1;
    }else if(result !== "Sem Resultados" && allNumbers.length !== 1 && operation !== "divide"
    && operation !== "multiply"){
      SubtractionToWork = 0;
    }
    for(var e = 0; e < allNumbers.length-SubtractionToWork; e = e+1){
      if(result !== "Sem Resultados"){
        othernumber2 = allNumbers[e];
      }
      if(result == "Sem Resultados"){
        if(operation == "plus"){
          if(e == 0 && result == "Sem Resultados"){
            othernumber = allNumbers[e];
          }
          othernumber2 = allNumbers[e+1];
          //result = 0;
        }else if(operation == "minus"){
          //result = allNumbers[e];
          if(e == 0 && result == "Sem Resultados"){
            othernumber = allNumbers[e];
          }
          othernumber2 = allNumbers[e+1];
        }else if(operation == "multiply"){
          //result = 1;
          if(e == 0 && result == "Sem Resultados"){
            othernumber = allNumbers[e];
          }
          othernumber2 = allNumbers[e+1];
        }else if(operation == "divide" && e == 0){
          //result = allNumbers[e];
          if(e == 0 && result == "Sem Resultados"){
            othernumber = allNumbers[e];
          }
          othernumber2 = allNumbers[e+1];
        }
        
      }
      if(e == 0 && result == "Sem Resultados"){
        othernumber = parseFloat(othernumber);
      }else if(e !== 0 && result !== "Sem Resultados"){
        result = parseFloat(result);
      }

      if(potencianumbers !== ""){
        potencianumbers = parseFloat(potencianumbers);
      }

      othernumber2 = parseFloat(othernumber2);
      if(result == "Sem Resultados"){
        console.log("number1:"+othernumber, "number2:"+othernumber2);
      }else{
        console.log("number1:"+result, "number2:"+othernumber2);
      }
      console.log("e:"+e);
      console.log("operation:"+operation);
      console.log(allNumbers[e]);
      if(operation == "plus"){
        if(e == 0 && result == "Sem Resultados"){
          result = othernumber+othernumber2;
        }else if(result !== "Sem Resultados"){
          result = result+othernumber2;
        }
      }
      if(operation == "minus"){
        if(e == 0 && result == "Sem Resultados"){
          result = othernumber-othernumber2;
        }else if(result !== "Sem Resultados"){
          result = result-othernumber2;
        }
      }
      if(operation == "multiply"){
        if(e == 0 && result == "Sem Resultados"){
          result = othernumber*othernumber2;
        }else if(result !== "Sem Resultados"){
          result = result*othernumber2;
        }
      }
      if(operation == "divide"){
        if(e == 0 && result == "Sem Resultados"){
          result = othernumber/othernumber2;
        }else if(result !== "Sem Resultados"){
          result = result/othernumber2;
        }
      }
      //if(potencianumbers !== ""){
      //  result = pow(result, potencianumbers);
      //  potencianumbers = "";
      //}
      console.log("result:"+result);
    }
    allNumbers = [];
    oldNumbers = [''];
  }
}

function handlePlus(){
  if(numbers !== ""){
    allNumbers.push(numbers);
    numbers = "";
    dot = false;
    console.log(numbers, allNumbers);
    operation = "plus";

    oldNumbers = [''];
  }
  if(result !== "Sem Resultados" && operation !== "plus"){
    operation = "plus";
  }
  
}

function handleMinus(){
  if(numbers !== ""){
    allNumbers.push(numbers);
    numbers = "";
    dot = false;
    console.log(numbers, allNumbers);
    operation = "minus";

    oldNumbers = [''];
  }
  if(result !== "Sem Resultados" && operation !== "minus"){
    operation = "minus";
  }
}

function handleMultiply(){
  if(numbers !== ""){
    allNumbers.push(numbers);
    numbers = "";
    dot = false;
    console.log(numbers, allNumbers);
    operation = "multiply";

    oldNumbers = [''];
  }
  if(result !== "Sem Resultados" && operation !== "multiply"){
    operation = "multiply";
  }
}

function handleDivide(){
  if(numbers !== ""){
    allNumbers.push(numbers);
    numbers = "";
    dot = false;
    console.log(numbers, allNumbers);
    operation = "divide";

    oldNumbers = [''];
  }
  if(result !== "Sem Resultados" && operation !== "divide"){
    operation = "divide";
  }
}

function handleRaizQuadrada(){
  /*if(numbers !== ""){
    //console.log('Math.sqrt('+numbers+')');
    numbers = 'Math.sqrt('+numbers+')';
    allNumbers.push(numbers);
    numbers = "";
    dot = false;
    console.log(numbers, allNumbers);
    raizQuadrada = true;
  }*/
  if(result !== "Sem Resultados"){
    result = Math.sqrt(result);
  }
}

function handlePotencia(){
  if(numbers !== "" && result !== "Sem Resultados" && potencianumbers == ""){
    potencianumbers = numbers;
    numbers = "";
    console.log("Potencia:"+potencianumbers);
    result = pow(result, potencianumbers);
    console.log(result);

    potencianumbers = "";
  }
}

function handleDelete(){
  if(oldNumbers.length > 1){
    numbers = oldNumbers[oldNumbers.length-2];
    oldNumbers.pop();
    console.log(numbers);
  }
}

function windowResized() {
  if(!isMobile && windowWidth > width){
    resizeCanvas(windowWidth, height);
    if(initialWidth !== width){
      newWidthAdded = width - initialWidth;
    }
  }
}
