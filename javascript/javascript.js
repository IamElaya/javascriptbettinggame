
number = Math.round((Math.random() * 10))%10 + 1;


initial_money = 100;

do
    {
      guess = prompt("What is your guess?");
      var bet = parseInt(prompt("How much do you want to bet?"));
      
      if (guess == number) {
        initial_money += bet;
        document.write("Correct!");
        document.write("You now have #"+initial_money+"dollars");
      }
      else {
        if (guess == (number + 1) || guess == (number - 1)) {
          document.write("Close! You don't lose anymoney");
          document.write("You now have #"+initial_money+"dollars");
        }
        else {
          (initial_money) -= (bet);
          document.write("Wrong guess!");
          document.write("You now have #"+initial_money+"dollars");
        }
      }



    } while (initial_money > 0);

console.log(number);
console.log(initial_money);
 



