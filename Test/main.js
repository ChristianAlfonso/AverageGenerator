const submitBtn = document.querySelector('#sumBtn');
const firstSub = document.querySelector('#firstSub');
const secondSub = document.querySelector('#secondSub');
const thirdSub = document.querySelector('#thirdSub');
const fourthSub = document.querySelector('#fourthSub');
const fifthSub = document.querySelector('#fifthSub');
const sixthSub = document.querySelector('#sixthSub');
const sevenSub = document.querySelector('#seventhSub');
const eightSub = document.querySelector('#eightSub');

const calculator = () => {
    let theSum = 0;

    theSum = Number(firstSub.value) + Number(secondSub.value) +
        Number(thirdSub.value) + Number(fourthSub.value) + Number(fifthSub.value) + Number(sixthSub.value) + Number(seventhSub.value) + Number(eightSub.value)

    let theAvg = theSum / 8
    let showPassing = theAvg

    if (showPassing >= 100) {
        document.querySelector('#h2').innerHTML = `Invalid Grade`;        
    } else if (showPassing >= 95) {
        document.querySelector('#h2').innerHTML = `Your average is ${theAvg} with High Honors`;
    } else if (showPassing >= 90) {
        document.querySelector('#h2').innerHTML = `Your average is ${theAvg} with Honors`;
    } else if (showPassing >= 75) {
        document.querySelector('#h2').innerHTML = `Your average is ${theAvg}, You passed!`;
    } else {
        document.querySelector('#h2').innerHTML = `Your average is ${theAvg}, You Failed!`;
    }

}

