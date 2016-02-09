
 // var guess = window.guess.value;
  // var bet = window.bet.value;

  // if(bet != null) {
  //   bet = 3;
  // }
  // window.bet.value

// do
//     {
//       // guess = prompt("What is your guess?");
//       // var bet = parseInt(prompt("How much do you want to bet?"));
     

//     } while (initial_money > 0);

// // console.log(number);
// console.log(initial_money);

// var bet;
var initial_money = 100;
 
$('form').on('submit', function(e){
  e.preventDefault(); 
 
  var number = Math.round((Math.random() * 10))%10 + 1;
  
  var guess = $('#guess').val();
  var bet = $('#bet').val();
  
 if (guess == number) {
        initial_money += bet;
        $("h2").text("Correct!");
        $("span").text("You now have #"+initial_money+"dollars");
      }
      else {
        if (guess == (number + 1) || guess == (number - 1)) {
          $("h2").text("Close! You don't lose anymoney");
          $("span").text("You now have #"+initial_money+"dollars");
        }
        else {
          (initial_money) -= (bet);
          $("h2").text("Wrong guess!");
          $("span").text("You now have #"+initial_money+"dollars");
        }
      };
  console.log(bet, guess);
});






