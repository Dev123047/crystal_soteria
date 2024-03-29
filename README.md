Introduction :

This project can be regarded as a simple "file management system". One might argue that this "Linux written in JavaScript". To some extent that is true(due to the GNU commands), but I prefer to call it the prior.
This project is completely written in JavaScript. It uses HTML and jQuery.Terminal *just* to let us interact with the scripts.

Motive:

The main motive behind this project was "nothing on the server side", what it basically means is that everything, yes *everything* happens on the client side *only*.

Security : 

You might think that that might compromise the security of the files, but it uses SHA3 for logging in and AES for the encryption and decryption of the files.
The files *sort of* use LUKS like encryption. For example, if you login to "User1", it decrypts the content(using the input password) and stores all the data of that particular user in a separate variable(say "data"). When you switch to another user "User2", it decrypts the data of that user and stores the decrypted data in "data".

Commands :

Now that you have the knowledge of its working, lets look at the commands availible.

1) su [username] : This command is used to login to a user. After entering, say "su User1", it prompts you for the password of that user, if the password is successfully authenticated it decrypts the data of that user and stores it in a variable.

2) ls [al, td] : This command is used to list all the directories, sub directories and all the files of that user with respect to that directory and on the basis of argument provided. "al" lists *all* of the directories, subdirectories and files till no more sub directories remain(considering the current working directory as the top level directory. "td" enlists only the contents of the current working directory, without expanding into the subdirectory of the current working directory.

3) cd [dir] : This command is used to change the current working directory. If ".." is used, it goes the parent directory. If no value is provided, it goes the home directory of the user. Otherwise, it goes to the subdirectory *provided its present in the current working directory*.

4) getwcwd : Returns the current working directory.

5) cat : Catenates the content of the given file *provided its present in the current working directory*.

Test User credentials :
1) Username : test_user1
2) Password : testpassone
