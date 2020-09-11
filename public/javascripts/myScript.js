

// validate Transfer
function validateTransfer(form) {

    if (form.fromAccount.value == 'select') {
        alert("Please Select a Sender Account");
        return false;
    } 
    else if (form.toAccount.value == 'select') {
        alert("Please Select a Receiver Account");
        return false;
    } 
    else if (form.amount.value == '') {
        alert("Please Enter an Amount");
        return false;
    } 
}
