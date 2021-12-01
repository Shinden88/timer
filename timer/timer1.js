// process.stdout.write('\x07');


const numbers = process.argv.slice(2);


let alarm = function(numbers) {
  numbers.forEach(number => { 
    if (!Number.isNaN(number) && number > 0) {
      const delay = number * 600;
      setTimeout(() => {
        process.stdout.write(".");
      }, delay);
    } 
  });
};

alarm(numbers);

//node timer1.js 10 3 5 15 9 

//it works iwth a "."  xD