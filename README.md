# ID_OpenHouse_website

One or two paragraphs providing an overview of your project. Tell us about your project.

Essentially, this part is your sales pitch.
 
## Design Process

This website is to give the site's target audience who are students/learners trying to find out more about Ngee Ann Polytechnic, more insight to the 8 academic schools(not including IS) Ngee Ann Poly has to offer, so that they will know what course they might be interested in and would want to take. Users will be able to explore the 8 schools from the Home Page by clicking on a school they are interested in, and from there they will be redirected to the respective school pages to learn more about the courses offered. Users will then be able to click "Learn More" to find out more about each course as they are redirected to the respective course pages. Users will also be able to go to the Quiz page to attempt quizzes to test their knowledge on NP and find out which school in NP is most suitable for them. Users can also go the "Contact Us" Page to view NP's contact details and a map that shows where NP is located. The page also shows the individual contact details of each school if the user wants to contact the school for more details. The footer at the bottom of each page also provide links to NP's respective social media pages.
 
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
- Individual School Pages - allows users to view the different diplomas offered in each school
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
   - The project uses **Bootstrap** for the icons in the footer
- [LottieFiles](https://lottiefiles.com/)
   - The project uses **Lotie Files** to have a loading animation.
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google Fonts** to have more variety of fonts available
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
- The text for each diploma section in the BA page was copied from the indivdual diploma pages from the [official NP BA page](https://www.np.edu.sg/ba/Pages/default.aspx)
- The text for each diploma section in the DE page was copied from the indivdual diploma pages from the [official NP DE page](https://www.np.edu.sg/de/Pages/default.aspx)
- The text for each diploma section in the SOE page was copied from the indivdual diploma pages from the [official NP SOE page](https://www.np.edu.sg/soe/Pages/default.aspx)
- The text for each diploma section in the HMS page was copied from the indivdual diploma pages from the [official NP HMS page](https://www.np.edu.sg/hms/Pages/default.aspx)
- The text for each diploma section in the HS page was copied from the indivdual diploma pages from the [official HS  page](https://www.np.edu.sg/hs/Pages/default.aspx)
- The text for each diploma section in the FMS page was copied from the indivdual diploma pages from the [official NP FMS page](https://www.np.edu.sg/fms/Pages/default.aspx)
- The text for each diploma section in the ICT page was copied from the indivdual diploma pages from the [official NP ICT page](https://www.np.edu.sg/ict/Pages/default.aspx)
- The text for each diploma section in the LSCT page was copied from the indivdual diploma pages from the [official NP LSCT page](https://www.np.edu.sg/lsct/Pages/default.aspx)

### Media
- The photos used at the beginning of each of the school page were obtained from screenshots of the [NP 360 Virutal Tour](https://www1.np.edu.sg/corpcomm/vtour/tour.html)
- The photos used for each diploma course was obtained from each of the respective offical NP diploma pages
- The photo of the NP logo was obtained from the offical NP page
- The photo used of NP in the Home Page was obtained from [NP LinkedIn Page](https://www.linkedin.com/school/ngee-ann-polytechnic/?originalSubdomain=sg)
### Acknowledgements
- I received inspiration for this project from the [official NP page](https://www.np.edu.sg/Pages/default.aspx)
