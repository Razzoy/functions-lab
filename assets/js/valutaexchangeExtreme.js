const calculateButton = document.getElementById('calculateButt');


function showResult(myEuroResult, myDollarResult, myDanishAmount){
    const resultElement = document.getElementById('result');
    resultElement.innerHTML = myDanishAmount + 'Danske kroner bliver til: ' + myEuroResult + ' euro og ' + myDollarResult + ' dollars';
}






