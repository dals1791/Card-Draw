
/////////////////////////
//CREATES THE "ADD A CARD" DIV, ADDS STYLING, AND APPENDS IT TO THE BODY
//////////////////////////
const $starterDiv = $("<div>");
const $container = $("<div>")
const $body = $("body");
$body.append($container);
$container.append($starterDiv);
$starterDiv.text("Draw a Card");
$starterDiv.addClass("divStarter").addClass("card");
$container.addClass("container");


///////////////////////////
//ARRAY OF TAROT CARDS
///////////////////////////

const cards = [
    'https://www.trustedtarot.com/img/cards/the-fool.png',
    'https://www.trustedtarot.com/img/cards/the-magician.png',
    'https://www.trustedtarot.com/img/cards/the-high-priestess.png',
    'https://www.trustedtarot.com/img/cards/the-empress.png',
    'https://www.trustedtarot.com/img/cards/the-emperor.png',
    'https://www.trustedtarot.com/img/cards/the-heirophant.png',
    'https://www.trustedtarot.com/img/cards/the-chariot.png',
    'https://www.trustedtarot.com/img/cards/strength.png',
    'https://www.trustedtarot.com/img/cards/the-hermit.png',
    'https://www.trustedtarot.com/img/cards/wheel-of-fortune.png',
    'https://www.trustedtarot.com/img/cards/justice.png',
    'https://www.trustedtarot.com/img/cards/the-hanged-man.png',
    'https://www.trustedtarot.com/img/cards/death.png',
    'https://www.trustedtarot.com/img/cards/temperance.png',
    'https://www.trustedtarot.com/img/cards/the-tower.png',
    'https://www.trustedtarot.com/img/cards/the-moon.png'
  ]
////////////////////////////////////
////Random Card generator on click
//////////////////////////////
const addCard = function (){
    const countImgChild = $("img").length;
        if (countImgChild>6){
            $('.divNew').remove() //removes all 7 cards after 7 cards are drwan to start new 
        }
        else{
        const randNum = Math.floor(Math.random()*cards.length); //creates a random number based on array size
        const $divNew = $("<img>"); //makes a new img for the new card
        $divNew.attr("src", cards[randNum]);//assigns a source attribute to the img
        $divNew.addClass("card");//gives styling to new div
        $divNew.addClass("divNew")//gives new cards class name
        $container.append($divNew)//appends new image to container
        
        $divNew.on("click", (event)=>{
            addCard()
        });   
    }
        
    }

    $starterDiv.on("click", (event)=>{
        addCard()
    });
   

   
     
    



