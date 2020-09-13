# AdmitKard-backend
Video link :-
https://drive.google.com/file/d/1Z1p9vhLd28SzxtXICO3O49sXTYMW-DF7/view?usp=sharing

About service.

This service provides three endpoints 

1.https://admitkard-v1.herokuapp.com/questions/get :- 
This is a GET request which gives you all the questions in the question bank.
Given above is the herokuapp link which can be run in postman to see all the questions stored in question bank.


2.https://admitkard-v1.herokuapp.com/questions/insert :-
This is the post request for adding the questions in the question bank.
Given above is the herokuapp link which can be run in postman to insert questions in the question bank.
This request takes body as input from the user in the json format.
An example is given below,
{
    "query":"Question you want to insert",
    "topic":"Related Topics",
    "tags" : ["Array of tags you want to add"]
}.
You can select between following topics and tags
Topics :

top-colleges,
qualifying-criteria,
education,
sports,
general-knowledge,
news.

Tags : 

stanford-university,
usa,
admission,
engineering,
top,
India,
medical,
higher-education,
sports,
cricket,
football.

3.https://admitkard-v1.herokuapp.com/questions/search :-
This is the post request for searching a string in the question bank. You will get related questions according to your search you can either search tags or any keyword in the question. Result will be an array which will contain all the related questions according to your search.
This link can be run in postman.

This request takes input body in json format. You are required to give a pattern in the body in below format
{
  "pattern" : "Pattern you want to search"
}

All the validations for inserting and searching questions are done.
