function validationForm(){
	let nameCustomer = document.getElementById("nameCustomer").value;
	let emailCustomer = document.getElementById("emailCustomer").value;
	let phoneCustomer = document.getElementById("phoneCustomer").value;
	let inquiryCustomer = document.getElementById("inquiryCustomer").value;
	let addionalInformation = document.getElementById("addionalInformation").value;
	
	if(nameCustomer == ""){
		alert("Name must be filled out");
	    return false;
	}
	
	if(emailCustomer == ""){
		alert("Email must be filled out");
	    return false;
	}
	
	if(phoneCustomer == ""){
		alert("Phone must be filled out");
	    return false;
	}
	
	if(inquiryCustomer == 0){
		alert("Select option");
	    return false;
	}
	
	if(addionalInformation == ""){
		alert("Add more information");
	    return false;
	}
	
	
	
}