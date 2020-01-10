let departureDate, returnDate;
function myDepartureFunction(event) {
    let dateValue = event.target.value;
    departureDate = dateValue;
}
function myReturnFunction(event) {
    let returnValue = event.target.value;
    returnDate = returnValue;
}
function myFunction() {
    alert(`Departure is ${departureDate} and return is ${returnDate}`);
}
function swap() {
    //city strings swapped
    var temp = fromCity;
    fromCity = toCity;
    toCity = temp;

    //airport str swapped
    temp = fromAirport;
    fromAirport = toAirport;
    toAirport = temp;

    fromAirportElement.innerText = fromAirport;
    toAirportElement.innerText = toAirport;

    fromCityElement.setAttribute('value', fromCity);
    toCityElement.setAttribute('value', toCity);

}

function switchToSelected(selectedItem) {
    var itemList = ['flights', 'hotels', 'home', 'holiday', 'train', 'bus', 'cab', 'visa',
        'giftcard', 'more'
    ];
    itemList.forEach((item) => {
        var element = document.getElementById(item);
        element.classList.remove('selected');
        if (item == selectedItem) {
            element.classList.add('selected');
        }
    });
}
// this is for modal box