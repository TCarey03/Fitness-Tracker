Fitness Tracker Journal

Phase 1: Foundations & External Scripting

I put the <script> tag at the bottom of the <body>, after the HTML elements. I chose this location so the browser loads the page content before running the JavaScript. This also makes sure the HTML elements are available if the JavaScript needs to interact with them later.

I created a separate script.js file and connected it to the HTML using the <script src="script.js"></script> tag. I used console.log("Script Loaded") to verify that the external JavaScript file was connected correctly. I also created a variable containing the user's name and used alert() to greet the user.