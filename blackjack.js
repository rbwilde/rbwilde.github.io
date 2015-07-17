


console.log("linked");

var cardNames = ["ace","king","queen","jack","10","9","8","7","6","5","4","3","2","ace","king","queen","jack","10","9","8","7","6","5","4","3","2","ace","king","queen","jack","10","9","8","7","6","5","4","3","2","ace","king","queen","jack","10","9","8","7","6","5","4","3","2"];
var cardValues = [11,10,10,10,10,9,8,7,6,5,4,3,2,11,10,10,10,10,9,8,7,6,5,4,3,2,11,10,10,10,10,9,8,7,6,5,4,3,2,11,10,10,10,10,9,8,7,6,5,4,3,2];
var cardImages = ["cards/ace_of_spades.png","cards/king_of_spades.png","cards/queen_of_spades.png","cards/jack_of_spades.png","cards/10_of_spades.png","cards/9_of_spades.png","cards/8_of_spades.png","cards/7_of_spades.png","cards/6_of_spades.png","cards/5_of_spades.png","cards/4_of_spades.png","cards/3_of_spades.png","cards/2_of_spades.png","cards/ace_of_diamonds.png","cards/king_of_diamonds.png","cards/queen_of_diamonds.png","cards/jack_of_diamonds.png","cards/10_of_diamonds.png","cards/9_of_diamonds.png","cards/8_of_diamonds.png","cards/7_of_diamonds.png","cards/6_of_diamonds.png","cards/5_of_diamonds.png","cards/4_of_diamonds.png","cards/3_of_diamonds.png","cards/2_of_diamonds.png","cards/ace_of_clubs.png","cards/king_of_clubs.png","cards/queen_of_clubs.png","cards/jack_of_clubs.png","cards/10_of_clubs.png","cards/9_of_clubs.png","cards/8_of_clubs.png","cards/7_of_clubs.png","cards/6_of_clubs.png","cards/5_of_clubs.png","cards/4_of_clubs.png","cards/3_of_clubs.png","cards/2_of_clubs.png","cards/ace_of_hearts.png","cards/king_of_hearts.png","cards/queen_of_hearts.png","cards/jack_of_hearts.png","cards/10_of_hearts.png","cards/9_of_hearts.png","cards/8_of_hearts.png","cards/7_of_hearts.png","cards/6_of_hearts.png","cards/5_of_hearts.png","cards/4_of_hearts.png","cards/3_of_hearts.png","cards/2_of_hearts.png"];
var theDeck = [];



var Deck= function Deck(names, values, imgs){
	this.cardNames = names;
	this.cardValues = values;
	this.cardImages = imgs;
};

var Blackjack = function Blackjack(deck){
	this.deck=deck;
	this.bet = function bet(){
		var $betAmount = $("<input>").attr("placeholder","How much?");
		var $placeBet = $("<button>").text("Place your bet");
		var $betDiv = $("<div>").attr("class","bet");
		var $potDiv = $("<div>").attr("class","pot")
		// var $bankDiv = $("<div>").attr("id","bank")
		var $bank = 1000;
		var $thePot = 0;
		$placeBet.on("click",function (e){
			$thePot = $($betAmount).val();
			// $($bank).val() - $($betAmount).val() === $(".bank").val();
				$potDiv.append($thePot);
				$("#middle").append($potDiv);
				$(".bank").append($bank);
				console.log($($bank).val());
		});

		$betDiv.append($betAmount,$placeBet);
		$("#middle").append($betDiv);
		$("#bank").append($bank);
		//if game is won pot + 0.5 goes to bank
		//if lost pot disappears or moves to money lost
	},
	this.dealCards = function dealCards(Deck){
		  
		  function shuffle(array) {
    		var currentIndex = array.length
      		, temporaryValue
      		, randomIndex;

    		while (0 !== currentIndex) {

      		randomIndex = Math.floor(Math.random() * currentIndex);
      		currentIndex -= 1;

      		temporaryValue = array[currentIndex];
      		array[currentIndex] = array[randomIndex];
      		array[randomIndex] = temporaryValue;
    		}

    		return array;
  			}
  			shuffle(theDeck);
  		
		var playerHand = [];
		var dealerHand = [];
  			playerHand.push(theDeck[0]);
  			dealerHand.push(theDeck[1]);
  			playerHand.push(theDeck[2]);
  			dealerHand.push(theDeck[3]);

		var $playerSeat = $("#player");
		var $dealerSeat = $("#dealer");
		var $playerCard1 = $("<img>").attr("src",playerHand[0].cardImages);
		var $dealerCard1 = $("<img>").attr("src",dealerHand[0].cardImages);
		var $playerCard2 = $("<img>").attr("src",playerHand[1].cardImages);
		var $dealerCard2 = $("<img>").attr("src",dealerHand[1].cardImages);
  		

  		$playerSeat.append($playerCard1, $playerCard2);
  		$dealerSeat.append($dealerCard1, $dealerCard2);
	

	},


	this.render = function render(){
		$(".container").empty();
		this.bet();
		this.dealCards();
	}



}

for(var i=0;i<cardImages.length;i++){
	var names = cardNames[i];
	var values = cardValues[i];
	var imgs = cardImages[i];

	var createDeck = new Deck(names,values,imgs);	

	theDeck.push(createDeck);
}
// console.log(theDeck);

var game = new Blackjack(theDeck);

game.render();