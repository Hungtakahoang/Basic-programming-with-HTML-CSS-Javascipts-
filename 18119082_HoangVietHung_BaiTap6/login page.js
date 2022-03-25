var CORRECT_USER_1 = 'hoangviethung';
var CORRECT_PASS_1 = '18119082';
var CORRECT_EMAIL_1 ='18119082@student.hcmute.edu.vn';

var CORRECT_USER_2 = 'nguyenvanluong';
var CORRECT_PASS_2 = '18119094';
var CORRECT_EMAIL_2 ='18119094@student.hcmute.edu.vn';


var inputUserName = document.getElementById('usernameId');
var inputPassWord = document.getElementById('passwordId');
var inputEmail = document.getElementById('emailId');

var formLogin = document.getElementById('form-login');

//kiểm tra sưk kiện
if(formLogin.attachEvent) {
	formLogin.attachEvent('submit', CheckUser);	
} else {
	formLogin.addEventListener('submit', CheckUser);
}

function CheckUser (e) {
	var str = "Access SmartHome";
	var access = str.link("https://fhqlms.hcmute.edu.vn/");
	var username = inputUserName.value;
	var password = inputPassWord.value;
	var email = inputEmail.value;

	if(username == CORRECT_USER_1)
	{
		if(password == CORRECT_PASS_1)
		{
			if(email == CORRECT_EMAIL_1)
			{	
				//alert('Sign in Success');
				window.open("file:///D:/2020-2021%20HKII/Basic%20and%20Application%20of%20IoTs%20(Pratice%20class)/Homework/18119082_HoangVietHung_BaiTap6/dashboard2.html")
			}
			else
			{
				alert('Email Invalid!');
			}
		}
		else
		{
			alert('Password Invalid!');
		}
	}
	else
	{
		alert('Username Invalid!');
	}


	if(username == CORRECT_USER_2)
	{
		if(password == CORRECT_PASS_2)
		{
			if(email == CORRECT_EMAIL_2)
			{	
				//alert('Sign in Success');
				window.open("file:///D:/2020-2021%20HKII/Basic%20and%20Application%20of%20IoTs%20(Pratice%20class)/Homework/18119082_HoangVietHung_BaiTap6/dashboard2.html")
			}
			else
			{
				alert('Email Invalid!');
			}
		}
		else
		{
			alert('Password Invalid!');
		}
	}
	else
	{
		alert('Username Invalid!');
	}
}