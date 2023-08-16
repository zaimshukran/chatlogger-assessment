# Chatlogger Technical Assessment
This is a chatlogger website built for a technical assessment where it takes a text file as an input and validates whether it is a text file or not. Then it will read the text file containing a chat log and given a number k, will determine the top k chattiest users.

## How it's done:
**Tech Used:** HTML, JavaScript, PHP, CSS
Used html input as well as event listeners to implement drag and drop for file upload. Validates whether the file is a text file by using mime type. It will then take that text file and display the content as an iframe on the page. It also will save the uploaded text file to the uploads local folder. 

The second part of the application to read the text file and determine the top k chattiest users is incomplete. However, I believe that the implementation should use a regex to identify the users. Then a hashmap can be used to organise the information. The words can be counted using split and the spaces between the words. Then a queue can be used to sort the hashmap by descending order. 
