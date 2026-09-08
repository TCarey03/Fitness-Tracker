Journal:
Phase 1
Where did you put your script tag? Why?

I put my script tag at the bottom of the HTML body, right before the closing </body> tag. I chose this location because it allows the HTML elements on the page to load before the JavaScript runs. This will be useful later when the JavaScript needs to interact with elements on the webpage.

I also used a separate script.js file instead of putting the JavaScript directly in the HTML because the assignment requires an external script. Using a separate file also helps keep the HTML and JavaScript organized.

-----------------------------------

Phase 2

Instead of just numbers, try typing text into the prompts. How does the program react?

When I enter numbers into the prompts, the program converts the values into numbers and multiplies them to calculate the total volume.

When I enter text instead of numbers, the `Number()` function cannot convert the text into a valid number. The result becomes `NaN`, which means "Not a Number." The program does not completely stop, but the calculation cannot produce a valid numerical result.

I learned that values returned from `prompt()` are strings, so I need to convert them to numbers before using them in mathematical calculations.

--------------------------------------

Phase 3

How did you put your string together? What are some other ways you could do it?

I put my string together by using the `+` operator to combine the user's name and their total volume with the rest of the message. This allowed me to create one complete message from several different pieces of information.

Another way I could create the string is by using a template literal with backticks. Template literals allow me to put variables directly inside the string using `${}`. I think this method can make longer strings easier to read.

I also experimented with escape characters such as `\n` to create a new line in a string.
