# Section 5 – Refactoring Code Smells in Practice

For this activity I had to practice refactoring some smelly code.

## What was refactored

First I had renamed all the values into more readable and clearn names, for eaxmple the reset button was "bR" so i changed it into "reset". Thay way the values can be easy to understand.

Next, I cleaned up some of the bloted comments, I got rid of the ones that seeme to be repeated and added some simpaler comments.

Finally, I noted that the last two line of code in each event listener was repeated so I created a function called "document_change" to handle the changes done on the page. This is an example of having repeated code smell (stink), so creating a function will clean it up just a little bit.
