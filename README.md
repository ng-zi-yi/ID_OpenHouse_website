# ID_OpenHouse_website
This website is to give the site's target audience who are students/learners trying to find out more about Ngee Ann Polytechnic, more insight to the 8 academic schools(not including IS) Ngee Ann Poly has to offer, so that they will know what course they might be interested in and would want to take. Users will be able to explore the 8 schools from the Home Page by clicking on a school they are interested in, and from there they will be redirected to the respective school pages to learn more about the courses offered. Users will then be able to click "Learn More" to find out more about each course as they are redirected to the respective course pages. Users will also be able to go to the Quiz page to attempt quizzes to test their knowledge on NP and find out which school in NP is most suitable for them. Users can also go the "Contact Us" Page to view NP's contact details and a map that shows where NP is located. The page also shows the individual contact details of each school if the user wants to contact the school for more details. The footer at the bottom of each page also provide links to NP's respective social media pages.
 
## Design Process
As this website is targeted towards students/learners trying to find out more about Ngee Ann Polytechnic, this website is designed to help them learn more about what NP has to offer. To do this, we have created 4 main sections, the Home Page, Individual School Pages, Quiz Page, Contact Us Page. The Home Page is designed to show users what are the 8 academic schools in NP, and below that section there is a button that users can click to be redirected to the quiz page for them to find out which school is most suitable for them. From the Home Page, users will be able to choose/click on a school they would like to explore and they will then be redirected to the respective school's page. For example, if user wants to find out more about School of Business & Accountancy, they will click on that and be redirected to the page for SCHOOL OF BUSINESS & ACCOUNTANCY. To make the website feel more interactive, there is a "Discover Our Courses" button in each of the school pages under the main school title for users to click on, and the website will then scroll down to the Full-Time Courses section. These individual school pages have been designed to be more interactive for users as users can hover over any course and a box shadow of each school's respective colour will appear. Users can also choose to find out more about a course by clicking the "Learn More" button to be redirected to a new tab of the respective diploma course. So as a student that is interested in the School of Business & Accountancy but is not sure what course I should take, I want to be able to view what courses are available in NP BA, so that I can learn more about them and choose a diploma course I am interested in. As a student that is just exploring what the different polytechnics have to offer, I want to be able to view the different schools in NP and each schools courses, so that I can decide if NP is the polytechnic for me. The Quiz Page allows users to try out 2 types of quizzes, "Find Out What School in NP Fits You" and "Is NP The Polytechnic School For You?". As a student who does not know what course to take yet, I want to be able to do a quiz, so that I can easily find out what school in NP is most suitable for me. As a student that is just exploring the different polytechnics, I want to find out whether NP is a good polytechnic for me to study in, so that I can decide on a polytechnic to study in. With the help of the quizzes provided in our website, users will be able to easily answer their questions as well. The Contact Us Page is designed in a way that displays NP's address and contact details so that users will be able to know where and who to contact if they have any additional queries. A map is also provided for them to find their way to NP. The contact details of the individual schools are also provided so that students can just email or call that particular school if they have any directed questions. As a student that wants to enquire more about the School of Health Sciences in NP, I want to be able to easily get their contact details, so that I can contact them about my queries. Hence, this project is the best way to be able to help users achieve what they need. 

Our initial wireframe mockup is located in this Assignment folder. We have changed some details since the initial wireframe mockup, so not everything is exactly the same as the the drawing
## Features

In this section, you should go over the different parts of your project, and describe each in a sentence or so.
 
### Existing Features
- Navigation Header - allows users to navigate between different pages
- Home Page - allows users to view the different schools in NP
- Individual School Pages - allows users to view the different diplomas offered in each school
- Quiz Page - allows users to find out what school matches their interest and if NP is the right school for them
- Contact Page - allows users to view NP's contact and individual schools' contact for further enquiry
- After scrolling past all the schools in the Home Page, there is a button that redirects them to the Quiz Page when clicked
- For the Contact Page, there is a navigation bar that scrolls to the selected school's telphone no and email
- For the Quiz Page, once the user gets their result. They are able to see the top 3 schools that matches their interest
- Footer contains links to NP's social media platforms


In addition, you may also use this section to discuss plans for additional features to be implemented in the future:

### Features Left to Implement
- Another feature idea

## Technologies Used
- [JQuery](https://jquery.com)
    - The project uses **JQuery** to simplify DOM manipulation.
- [RestDB](https://restdb.io/)
- [Bootstrap](https://getbootstrap.com/)
   - The project uses **Bootstrap** for the icons in the footer and navbar
- [LottieFiles](https://lottiefiles.com/)
   - The project uses **Lottie Files** to have a loading animation.
- [Google Fonts](https://fonts.google.com/)
    - The project uses **Google Fonts** to have more variety of fonts available
- [Google Maps API](https://developers.google.com/maps/documentation/embed/map-generator)
    - The project uses **Google Maps API** for the Contact Us Page
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
