"use strict";
//input
const customerName = document.getElementById("customerName");
const checkingDate = document.getElementById("checkingDate");
const numbersOfDays = document.getElementById("numbersOfDays");
const kingSizeOption = document.getElementById("kingSizeOption");
const queenSizeOption = document.getElementById("queenSizeOption");
const twoBedroomOptions = document.getElementById("twoBedroomOptions");
const numOfAdults = document.getElementById("numOfAdults");
const numOfKids = document.getElementById("numOfKids");
const noDiscount = document.getElementById("noDiscount");
const seniorDiscount = document.getElementById("seniorDiscount");
const militaryDiscount = document.getElementById("militaryDiscount");

//button
const submitBtn = document.getElementById("submitBtn");

//output
const outputOriginalRoomCost = document.getElementById("outputOriginalRoomCost");
const outputDiscount = document.getElementById("outputDiscount");
const outputDiscountRoomCost = document.getElementById("outputDiscountRoomCost");
const outputTaxRate = document.getElementById("outputTax")
const outputTotalCost = document.getElementById("outputTotalCost");
const messageDiv = document.getElementById("messageDiv");


window.onload = function () {
    submitBtn.onclick = onClickedSubmitBtn;
}

function onClickedSubmitBtn() {
    //get the know inputs
    let custNameInput = customerName.value;
    let dateCheckingInput = checkingDate.value;
    let numOfDayStayInput = Number(numbersOfDays.value);
    let kingBedSizeInput = kingSizeOption.checked;
    let queenBedSizeInput = queenSizeOption.checked;
    let twoBedStayInput = twoBedroomOptions.checked;
    let adultNumInput = Number(numOfAdults.value);
    let kidsNumInput = Number(numOfKids.value);
    let noDiscountOptInput = noDiscount.checked;
    let seniorDiscountOptInput = seniorDiscount.checked;
    let militaryDiscountOptInput = militaryDiscount.checked;
    console.log("push");


    //get the unknown

    //todo: set this to "K", "Q", "2B" by looking at the checkboxes

    let roomType = "K";

    let maxOccupance = 0;
    if (kingBedSizeInput) {
        maxOccupance = 2;

        roomType = "K";
    }
    if (queenBedSizeInput) {
        maxOccupance = 5;
        roomType = "Q";
    }
    if (twoBedStayInput) {
        maxOccupance = 6;
        roomType = "2B"
    }

//by the time we get here, we know the room type.

    let numOfOccupants = adultNumInput + kidsNumInput;
    console.log(numOfOccupants);
    // if(kingBedSizeInput == k){
    //     if(numOfOccupants < 2){
    //         let discountAmount = roomCost * pickedDiscountRate;
    //         let discountedRoomCost = roomCost - discountAmount;
    //         let roomTaxRate = 0.12;
    //         let roomTaxAmount = discountedRoomCost * roomTaxRate;
    //         let totalCostOfStay = discountedRoomCost + roomTaxAmount;
    //     }
    //     else{
    //         messageDiv.innerText = "The room you selected will not hold your party";
    //     }
    // }

    //getting the roomrate and cost
    
    let checkinAsDate = new Date(dateCheckingInput);
    let dateMonth = checkinAsDate.getMonth();
    // console.log(dateMonth);
    // console.log(checkinAsDate);
    let roomRate = getRoomRate(roomType, dateMonth);
    let roomCost = numOfDayStayInput * roomRate;

    //Discounts
    let pickedDiscountRate = 0;
    if (noDiscountOptInput) {
        pickedDiscountRate = 0.00;
    }
    else if (seniorDiscountOptInput) {
        pickedDiscountRate = 0.10;
    }
    else if (militaryDiscountOptInput) {
        pickedDiscountRate = 0.20;
    }




  
    //let roomTaxAmount = 


    //Dicounted Room
    let discountAmount = roomCost * pickedDiscountRate;
    let discountedRoomCost = roomCost - discountAmount;
    let roomTaxRate = 0.12;
    let roomTaxAmount = discountedRoomCost * roomTaxRate;
    let totalCostOfStay = discountedRoomCost + roomTaxAmount;



    //now room rate should be set...



    //output result
    outputOriginalRoomCost.innerHTML = roomCost;
    outputDiscount.innerHTML = discountAmount;
    outputDiscountRoomCost.innerHTML = discountedRoomCost;
    outputTaxRate.innerHTML = roomTaxAmount
    outputTotalCost.innerHTML = totalCostOfStay.toFixed(2);
    // - the original room cost
    // - the discount, if any
    // - the discounted room cost
    // - the tax
    // - the total cost of the stay




}

function getRoomRate(roomType, dateMonth) {
    
    //Room Type Max Occupancy
                                            //Jun - Aug
 
                                                   //Rest of Year Rates

    // Queen 5 (inc rollaway)               250.00 150.00
    // King 2                               250.00 150.00
    // 2-Bedroom Suite 6 (inc sleeper sofa) 350.00 210.00
    if (roomType == "K") {
        if(dateMonth >= 5 && dateMonth <= 7 ){
            return 250;
        }
        else{
            return 150;
        }
    }
    if (roomType == "Q") {
        if(dateMonth >= 5 && dateMonth <= 7 ){
            return 250;
        }
        else{
            return 150;
        }
    }
    if (roomType = "2B") {
        if(dateMonth >= 6 && dateMonth <= 7 ){
            return 350;
        }
        else{
            return 210;
        }
    }
    console.log(roomType);

}



