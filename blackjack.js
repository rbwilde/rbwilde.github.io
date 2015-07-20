console.log("linked");

var cardNames = ["ace","king","queen","jack","10","9","8","7","6","5","4","3","2","ace","king","queen","jack","10","9","8","7","6","5","4","3","2","ace","king","queen","jack","10","9","8","7","6","5","4","3","2","ace","king","queen","jack","10","9","8","7","6","5","4","3","2"];
var cardValues = [11,10,10,10,10,9,8,7,6,5,4,3,2,11,10,10,10,10,9,8,7,6,5,4,3,2,11,10,10,10,10,9,8,7,6,5,4,3,2,11,10,10,10,10,9,8,7,6,5,4,3,2];
var cardImages = ["cards/card-aceofspades.png","cards/card-kingofspades.png","cards/card-queenofspades.png","cards/card-jackofspades.png","cards/card-10ofspades.png","cards/card-9ofspades.png","cards/card-8ofspades.png","cards/card-7ofspades.png","cards/card-6ofspades.png","cards/card-5ofspades.png","cards/card-4ofspades.png","cards/card-3ofspades.png","cards/card-2ofspades.png","cards/card-aceofdiamonds.png","cards/card-kingofdiamonds.png","cards/card-queenofdiamonds.png","cards/card-jackofdiamonds.png","cards/card-10ofdiamonds.png","cards/card-9ofdiamonds.png","cards/card-8ofdiamonds.png","cards/card-7ofdiamonds.png","cards/card-6ofdiamonds.png","cards/card-5ofdiamonds.png","cards/card-4ofdiamonds.png","cards/card-3ofdiamonds.png","cards/card-2ofdiamonds.png","cards/card-aceofclubs.png","cards/card-kingofclubs.png","cards/card-queenofclubs.png","cards/card-jackofclubs.png","cards/card-10ofclubs.png","cards/card-9ofclubs.png","cards/card-8ofclubs.png","cards/card-7ofclubs.png","cards/card-6ofclubs.png","cards/card-5ofclubs.png","cards/card-4ofclubs.png","cards/card-3ofclubs.png","cards/card-2ofclubs.png","cards/card-aceofhearts.png","cards/card-kingofhearts.png","cards/card-queenofhearts.png","cards/card-jackofhearts.png","cards/card-10ofhearts.png","cards/card-9ofhearts.png","cards/card-8ofhearts.png","cards/card-7ofhearts.png","cards/card-6ofhearts.png","cards/card-5ofhearts.png","cards/card-4ofhearts.png","cards/card-3ofhearts.png","cards/card-2ofhearts.png"];
var theDeck = [];
var newGame = $("#deal")

newGame.on("click",function(){
	game.render();
	
})

var Deck= function Deck(names, values, imgs){
	this.cardNames = names;
	this.cardValues = values;
	this.cardImages = imgs;
};

var Blackjack = function Blackjack(deck){
	this.deck=deck;
	this.bet = function bet(){
		var $redChip = $(".red");
		var $blueChip = $(".blue");
		var $greenChip = $(".green");
		var $potDiv = $("<div>").attr("class","pot")
		var $bankDiv = $("<div>").attr("id","bank")
		$bank = 5000;
		$thePot = 0;
		var $potImage = $("#potImage").hide();
		
		$redChip.on("click",function (e){
			$potImage.show();	
			$thePot = parseInt($thePot) + parseInt($(this).val());
			$bank = parseInt($bank) - parseInt($(this).val());
			$(".pot").text("$"+ $thePot);
			$("#bank").text("$" +$bank);
				});
		$(".pot").text("$"+ $thePot);
		$("#bank").text($bank);
		
		$blueChip.on("click",function (e){
			$potImage.show();	
			$thePot = parseInt($thePot) + parseInt($(this).val());
			$bank = parseInt($bank) - parseInt($(this).val());
			$(".pot").text("$"+ $thePot);
			$("#bank").text("$" +$bank);
				});
		$(".pot").text("$"+ $thePot);
		$("#bank").text($bank);
		
		$greenChip.on("click",function (e){
			$potImage.show();
			$thePot = parseInt($thePot) + parseInt($(this).val());
			$bank = parseInt($bank) - parseInt($(this).val());
			$(".pot").text("$" + $thePot);	
			$("#bank").text($bank);
				});
		$(".pot").text("$" + $thePot);
		$("#bank").text("$" +$bank);
	
		$bankDiv.append($bank);
		$potDiv.append($thePot);
		
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

		var $playerSeatLeft = $("#playerCard1");
		var $dealerSeatLeft = $("#dealerCard1");
		var $playerSeatRight = $("#playerCard2");
		var $dealerSeatRight = $("#dealerCard2");

		var $playerCard1 = $("<img>").attr("src",playerHand[0].cardImages);
		var $dealerCard1 = $("<img>").attr("src",dealerHand[0].cardImages);
		var $playerCard2 = $("<img>").attr("src",playerHand[1].cardImages);
		var $dealerCard2 = $("<img>").attr("src",dealerHand[1].cardImages);

  		var $playerHandValue = parseInt(playerHand[0].cardValues)+parseInt(playerHand[1].cardValues);
  		var $dealerHandValue = parseInt(dealerHand[0].cardValues)+parseInt(dealerHand[1].cardValues);

  		$playerSeatLeft.append($playerCard1);
  		$playerSeatRight.append($playerCard2);
  		$dealerSeatLeft.append($dealerCard1);
  		$dealerSeatRight.append($dealerCard2);
		$(".totalP").text($playerHandValue);
		$(".totalD").text($dealerHandValue);

			if($playerHandValue===21){
				$(playerHand).each(function (i){
					if($(this).cardValues===11 && $(this).cardValues===10){
						console.log("Blackjack!");
						winnerBlackjack();
					}				
				})
			};
		
		var $hit = $("#hit").text("Hit");
		var $stay = $("#stay").text("Stay");
		
		$("#hitstay").append($hit, $stay);
		
		$hit.on("click",function(){
			var $hitCard = theDeck[Math.floor(Math.random() * theDeck.length)];
			playerHand.push($hitCard);
			var $lastCard = playerHand[playerHand.length-1]
			var $playerCardHit = $("<img>").attr("src",$lastCard.cardImages);
			$playerCardHit.attr("class","newCard");
			$playerHandValue = parseInt($playerHandValue) + parseInt($lastCard.cardValues);
			$playerSeatLeft.append($playerCardHit);
			$(".totalP").text($playerHandValue);
			
			if($playerHandValue>21){
				$(playerHand).each(function (i){
					if($(this).attr("cardValues")===11 && $playerHandValue>21){
						$playerHandValue = parseInt($playerHandValue) - 10;
						$(this).attr("cardValues",1);
						$(".totalP").text($playerHandValue);
					}
				})
			};

			if($playerHandValue>21){
				$(".pot").empty();
				$(".message").text("BUST! YOU LOSE!")
					//insert bust modal?
				// $("#restart").empty();

			}
		});//hit button end	
	
			$stay.on("click",function(){
				//make dealer card visible
				var dealerHit = setInterval(function(){
					var $dealerHandValue = $(".totalD").html();
					var $playerHandValue = $(".totalP").html();

					if($dealerHandValue>21){
				$(dealerHand).each(function (i){
					if($(this).attr("cardValues")===11 && $dealerHandValue>21){
						$dealerHandValue = parseInt($dealerHandValue) - 10;
						$(this).attr("cardValues",1);
						$(".totalD").text($dealerHandValue);
					}
				})
			};
					if($dealerHandValue<17){
						var $hitCard = theDeck[Math.floor(Math.random() * theDeck.length)];
						dealerHand.push($hitCard);
						var $lastCard = dealerHand[dealerHand.length-1]
						var $dealerCardHit = $("<img>").attr("src",$lastCard.cardImages);
						$dealerCardHit.attr("class","newCard");
						$dealerHandValue = parseInt($dealerHandValue) + parseInt($lastCard.cardValues);
						$dealerSeatRight.append($dealerCardHit);
						$(".totalD").text($dealerHandValue);
					};
					if($dealerHandValue>21){
						$(".message").text("DEALER BUST! YOU WIN!")
						clearInterval(dealerHit);
						$("#bank").text((parseInt($("#bank").val())*2) + parseInt($(".pot").val()));
						console.log($(".pot").html());
						$(".pot").html("$"+"0");
						console.log($("#bank").val());
					};

					if($dealerHandValue>=17){
						if($playerHandValue>$dealerHandValue){
						$(".message").text("YOU WIN!");
						$("#bank").html((parseInt($(".pot").html()) * 2) + parseInt($("#bank").html()));
						$(".pot").html("$"+"0");
						} else if($playerHandValue<$dealerHandValue){
						$(".message").text("YOU LOSE!");
						$(".pot").empty();

						}
					};

					if($playerHandValue===$dealerHandValue){
						$(".message").text("Push!");
						$("#bank").html(parseInt($(".pot").html()) + parseInt($("#bank").html()));
						$(".pot").html("$"+"0");

					};


		}, 1000);//end of interval

				})
			},

	this.render = function render(){
		playerHand = [];
		dealerHand = [];
		this.bet();
		this.dealCards();

	}


};//blackjack end
for(var i=0;i<cardImages.length;i++){
	var names = cardNames[i];
	var values = cardValues[i];
	var imgs = cardImages[i];

	var createDeck = new Deck(names,values,imgs);	

	theDeck.push(createDeck);
};// console.log(theDeck);

var game = new Blackjack();

game.render();





