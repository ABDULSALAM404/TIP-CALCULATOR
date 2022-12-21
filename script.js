const amount = document.getElementById("inputBill");
const tip = document.getElementById("inputTip");
const numberofpeoplediv = document.getElementById("numberofpeople");
const dollar = document.getElementById("perpersontotal");

//get number of people from numberofpeoplediv
let numberofpeople = Number(numberofpeoplediv.innerText);

// ** Calculate the total bill per person **
const CalculateBill =  () => {
      // get bill from user input & convert it into a number
      let bill = Number(amount.value);
     // get the tip from user & convert it into a percentage (divide by 100)
     let tippercentage = Number(tip.value) / 100;
       // calculate the total (tip amount + bill)
     let total = bill + tippercentage;
       // calculate the per person total (total divided by number of people)
    let perpersontotal = total / numberofpeople;
    // update the perPersonTotal on DOM & show it to user
    dollar.innerText = `$${perpersontotal.toFixed(2)}`;
}

// ** Splits the bill between more people **

const increasepeople = () => {
     // increment the amount of people
     numberofpeople += 1;
    // update the DOM with the new number of people
    numberofpeoplediv.innerText = numberofpeople;
    // calculate the bill based on the new number of people
    CalculateBill();
}

const decreasepeople = () => {
    if(numberofpeople <= 1) {
        throw alert("Hey! you can not have less than 1 person");
    } 
    numberofpeople -= 1;
    numberofpeoplediv.innerText = numberofpeople;
    CalculateBill();
}
