Bluecore -from Sam for a Forward Deployed Engineer position -You can answer in whatever language or pseudocode you want, but this was for a JavaScript position engineer position

NOTE DO NOT READ PAST QUESTION 1 BEFORE SOlVING QUESTION 1 OR YOU'L SPOIL THE FUN

I give you a method ,arrayMethod, that will return the first value in an array when you call the method. Each additional time you call arrayMethod it will return the next value in the array until it reaches the end of the array and returns null. After returning null, the next time you call arrayMethod it will return the first value in the array again and continue to move through the array until returning null again. Please note that arrayMethod can be used on any array of any size.

example of how this works: A = [1, 2, 3, 4]

If you call arrayMethod on A twice it will return “2” from A If you call arrayMethod a fifth time it will return “NULL” If you call arrayMethod a sixth time it will return “1” from A if you call arrayMethod an eight time it will return “3” from A

A.arrayMethod() = 1
A.arrayMethod().arrayMethod() = 2

Question 1. I need you to write me a method that will return a random value from any array that arrayMethod is being applied to. Lets call this randomValueMethod

(solve the above before reading Question 2)

Question 2. Revise your solution so that your randomValueMethod does not use arrays to store any data from arrayMethod (assuming you haven’t already done this in Question 1)

(solve the above before reading Question 3)

Question 3 Revise your solution again so that your randomValueMethod does not require arrayMethod to return any value more than once