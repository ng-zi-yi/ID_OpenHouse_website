# ID_OpenHouse_website

One or two paragraphs providing an overview of your project. Tell us about your project.

Essentially, this part is your sales pitch.
 
## Design Process
 
Provide us insights about your design process, focusing on who this website is for, what it is that they want to achieve and how your project is the best way to help them achieve these things.

In particular, as part of this section we recommend that you provide a list of User Stories, with the following general structure:
- As a user type, I want to perform an action, so that I can achieve a goal.

This section is also where you would share links to any wireframes, mockups, diagrams etc. that you created as part of the design process. 
These files should themselves either be included as a pdf file in the project itself (in an separate directory)
Include the Adobe XD wireframe as a folder. You can include the XD share url. 

## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Navigation Header - allows users to navigate between different pages
- Home/School Page - allows users to view the different schools in NP
- Diploma Page - allows users to view the different diplomas offered in each school
- Quiz Page - allows users to find out what school matches their interest
- Contact Page - allows users to view NP's contact and individual schools' contact for further enquiry
- After scrolling past all the schools in the Home Page, there is a button that redirects them to the Quiz Page when clicked
- For the Contact Page, there is a navigation bar that scrolls to the selected school's telphone no and email
- For the Quiz Page, once the user gets their result. They are able to see the top 3 schools that matches their interest
- Footer contains links to NP's social media platforms
- ...

In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used

In this section, you should mention all of the languages, frameworks, libraries, and any other tools that you have used to construct this project. For each, provide its name, a link to its official site and a short sentence of why it was used.

- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [RestDB](https://restdb.io/)
- [Bootstrap](https://getbootstrap.com/)
- [LottieFiles](https://lottiefiles.com/)
- [Google Fonts](https://fonts.google.com/)
- [HTML](https://html.com/)
- CSS
- [JavaScript](https://www.javascript.com/)


## Testing

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

2. Scrolling Effect:
    1. Go to the Home Page
    2. Click on the "Discover Our Schools" button and ensure that the page smoothly scrolls down to the Schools section
    3. Go to each School Page from the Home Page and click on "Discover Our Courses" button and ensure that the page smoothly scrolls down to the Full-Time Courses section

3. Navigation Menu:
    1. Go to the Home Page
    2. Try to click on Quiz in the navigation bar and verify that the page goes to the Quiz Page
    3. Try to click on Contact Us in the navigation bar and verify that the page goes to the Contact Us Page
    4. Try to click on School in the navigation bar and verify that the page goes back to the Home Page
    5. On Mobile screen size, the navigation bar should change to a hamburger menu 
    6. Try to click on the hamburger icon and ensure that the navigation opens up

4. Redirect Links:
    1. Go to the Home Page
    2. Click on each of the schools and ensure that you are redirected to the respective school pages and not the wrong school page
    3. Go to each of the School Pages from the Home Page
    4. Click on each of the "Learn More" buttons and ensure that you are redirected to their respective diploma pages in a new tab and not the wrong page

5. Responsive Home Page:
    1. Make the screen size larger than 991px
    2. The school display section should display the 8 schools in 2 rows of 4 schools each
    3. Make the screen size 991px-559px
    4. The school display section will change from 2 rows of 4 schools each to 2 columns of 4 schools each
    5. Make the screen size 558px and lower
    6. The school display section will change from 2 columns of 4 rows each to 1 column of 8 schools
    7. The font sizes will also decrease as the screen size decreases

6. Responsive Individual School Pages:
    1. Make the screen size larger than 1230px
    2. The Full-Time Courses section should display each course item as a course picture on the left followed by the course information on the right
    3. Make the screen size 1230px and lower
    4. The Full-Time Courses section should display each course item as a course picture followed by the course information below
    5. The padding for the course section will also decrease as the screen size decreases
    6. The font sizes on the page should also decrease as the screen size decreases
    
In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

## Credits

### Content
- The text for section Y was copied from the [Wikipedia article Z](https://en.wikipedia.org/wiki/Z)

### Media
- The photos used in this site were obtained from ...

### Acknowledgements

- I received inspiration for this project from X
