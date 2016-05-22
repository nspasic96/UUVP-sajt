function processTravelForm() {
    var firstName = document.myTravelForm.firstname.value;
    var lastName = document.myTravelForm.lastname.value;
    var destination = document.myTravelForm.destination.value;
    
    var travelerInfo = '<div>First Name: ' + firstName + ', Last Name: '
    + lastName + ', Destination: ' + destination + '</div>';

    document.getElementById("travelerInfo").innerHTML += travelerInfo;
    
}