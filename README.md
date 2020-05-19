# burger
Project incorporating node.js, mySQL, and Handlebars skills. 

Relevant links:

Heroku:

    https://jeffs-bootcamp-burger-app.herokuapp.com/

GitHub:

    https://jeff-ashear.github.io/burger/
    https://github.com/Jeff-Ashear/burger.git

    

1. The purpose of this app is to demonstrate basic fascility with mySQL and Handlebars, using routes and db queries.  The user will be able to enter the name of their own burger to update the database.  Then "devour the burger" by changing the value of a database element, and handlebars will the update the view by moving that burger from a column on the left to a column on the right.

2. The app is in a basic MCV arcitechture.  A config folder holds the connection file (which maps out the basic connection to the database), and the ORM (which queries and updates the database).  The burgerModel.js app then passes data to and from the model and the view.  The above constitutes the Model portion of the stack.  The controller section is burgerController.js file.  This file handles routing and facilitates the user input to manipulate the database. Finally, the views folder contains Handlebars files which translate the back end into a UI.

3. Instructions for using the app:  Enter the name of burger in the field in the center column and click submit.  This will push your burger through the routing to the ORM and query the db.  Your burger will be added to the db, and return through the stack to appear in the "Yummy burgers" column.  Click the "Devour" button to change the status of the burger form uneaten to eaten in the db, as well as moving it to the "Devoured column on the right.

4. No video of this project is available.

5. Links to the deployed site:
    https://jeffs-bootcamp-burger-app.herokuapp.com/
     https://jeff-ashear.github.io/burger/

Link to the code repo:
    https://github.com/Jeff-Ashear/burger.git

6. Technologies used are as follows:
    -MySQL is the database
    -Handlebars creates the view
    -ORM relates the two
    -Express is the server, which runs on
    -Node.js
    -Bootstrap for the layout and styling
    -Heroku for hosting the app
    -GitHub for hosting the code repo

7. This app was developed by Jeff Ashear
