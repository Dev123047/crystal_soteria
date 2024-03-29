Crystal Soteria
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Index

1) Introduction
2) Motive
3) Purpose(s)
4) Security
5) Data Storage Structure
6) Adding new users(pre defined)
7) Commands
8) Test User Credentials

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Introduction :

This project can be regarded as a simple "file management system". One might argue that this "Linux written in JavaScript". To some extent that is true(due to the GNU commands), but I prefer to call it the prior.
This project is completely written in JavaScript. It uses HTML and jQuery.Terminal *just* to let us interact with the scripts.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Motive:

The main motive behind this project was "nothing on the server side", what it basically means is that everything, yes *everything* happens on the client side *only*.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Purpose(s):

This project can be used for many purposes. I intended it for first and foremost 2 : 

1) Linux-on-the go : This project can be very useful in simulating the very basic commands (until now) of Linux and using it on-the-go (without the need of downloading anything). Thus it may help in tinkering the interest for the same.

2) For CTF's or Online Puzzles : It can certainly also be used as a unique interface for CTFs and web based riddles.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Security : 

You might think that that might compromise the security of the files, but it uses SHA3 for logging in and AES for the encryption and decryption of the files.
The files *sort of* use LUKS like encryption. For example, if you login to "User1", it decrypts the content(using the input password) and stores all the data of that particular user in a separate variable(say "data"). When you switch to another user "User2", it decrypts the data of that user and stores the decrypted data in "data".

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Data Storage Structure : 

All the data is stored in form of a JSON string, AES encrypted with the password of that user(as explained in Security). Each key in the *JSON* string is a directory/subdirectory *full paths(starting from home directory)*. The value of each key is a list containing its directories and files with *full paths(starting from home directory)*. The last index of every value is a dictionary containing keys as names of files(in the directory *if any*) and values as the contents of the file as a string.

The AES ecrypted string is decrypted then parsed and then stored in the variable that is used to access the contents.

--> Data in decrypted form for `test_user1` has been added in `files.json`

*NOTE : One may change the structure to suit their uses BUT all scripts are written to suit this particular format of storage.*

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Adding new users(Pre defined) :

To add new users, you may use the provided `hash_generator.html` to generate the required hash and store it in `hashed` variable(defined in `index.html`) with the key as the username and the hash as the value to that key.

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Commands :

Now that you have the knowledge of its working, lets look at the commands availible.

1) su [username] : This command is used to login to a user. After entering, say "su User1", it prompts you for the password of that user, if the password is successfully authenticated it decrypts the data of that user and stores it in a variable.

2) ls [al, td] : This command is used to list all the directories, sub directories and all the files of that user with respect to that directory and on the basis of argument provided. "al" lists *all* of the directories, subdirectories and files till no more sub directories remain(considering the current working directory as the top level directory. "td" enlists only the contents of the current working directory, without expanding into the subdirectory of the current working directory.

3) cd [dir] : This command is used to change the current working directory. If ".." is used, it goes the parent directory. If no value is provided, it goes the home directory of the user. Otherwise, it goes to the subdirectory *provided its present in the current working directory*.

4) getcwd : Returns the current working directory.

5) cat : Catenates the content of the given file *provided its present in the current working directory*.

6) mkdir [directory_name] : Creates a directory in the current working directory. *Note : All the new directories made with this command wont be retained when the window/tab is refreshed, other than the ones pre-made.*

-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Test User credentials :
1) Username : test_user1
2) Password : testpassone
