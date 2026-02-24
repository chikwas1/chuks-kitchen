SYSTEM OVERVIEW : Chucks kitchen is a user friendly app design and created for users to easily navigate their order/menu and get it delivered to them. Here is how it works, as a new user, you are required to sign up after signing up your account will have been created now you can log in with your username/phone number and email. Upon logging in, the user is presented with the landing page where such user can navigate their profile and various user stories, this then lead us to the backend where all database,clicks,payment and logic are being recievced,stored,proccessed and corresponding response are sent to the user.

![USER REGISTRATION AND ACCESS FLOW DIAGRAM](https://github.com/user-attachments/assets/2f44c350-9010-4566-9771-0b36ec2a65d7)
UESR REGISTRATION AND ACCESS FLOW DIAGRAM : For a user to have access to the app, such user will have to login with a device connected to the internet. Firstly, user clicks ont he login button then get a pop up asking if such user have registered before, if yes,the login form is display and if not the registration form is dispaly. On the registration page, various prompt requesting user data will pop up, this prompt are made to validate user details, comfirm user and create an account for the user after which user account is activated and can login in.

![USER TYPE - CUSTOMER](https://github.com/user-attachments/assets/594e281c-eb38-41fb-9ce0-e35832e12e47)
USER TYPE - CUSTOMER : The on-screen display for customers are made user-friendly and easy usage(user excperience) whereby upon logging in, user acan star making order, choose their menu which is stored in cart,proceed to payment - where user can input card details and with be stored in the database for seemless transaction anytime the user want to make payment with same card, an option is also provided toa add new card if the user wish to. after payment is made,processed and comfirmed such user get notified via mail or sms with the order details and delivery follow suit with a dashboard to track delivery status.

![USER TYPE - ADMIN(chuks kitchen)](https://github.com/user-attachments/assets/4d50d29c-bc34-4d53-96f9-ec2e7e0aa9e6)
USER TYPE -ADMIN (chuks kitchen) : As  an admin,you also have access to this app and the system flow whereby upon login in you will be verified beofre accessing the system. After verification, acess is gained, admin can then add food items, manage various categories, update price list and perform other functions.

![ORDERING FLOW COMPLEXITY](https://github.com/user-attachments/assets/a4a96d23-c0d3-4cc4-9948-18f1f4548e3a)
ORDERING FLOW COMPLEXITY : When a log in, the system present such user with a landing-page consisting of the user dashboard, navigation bar and other options. To make an order, the user clicks on the order button and generate order, next is to checkout and the payment page will display, if the user wish to proceed with the payment an option is provided, if the user click "yes", the total price of the order is calculated and displayed for the user to initiate payment. Upon payment by the user the order is created/stored, payment is then processed, recieved and comfirmed. This process and logic is done behind the scene by the backend web developers. After the payment confirmation, the order is set for delivery.

![ORDER STATUS LIFE CYCLE ](https://github.com/user-attachments/assets/cf260beb-79e8-4fef-a4ec-5eb058a663a4)
User can track their corder from the app as a button is a provided to keep track of their order status. This process is known isa the ORDER STATUS LIFE CYCLE. When an order is made, the order status is automaticcaly activated and the status of every order made flow from Pending -> Confirmed -> Preparing -> Out For Delivery -> Completed(deliverd) then a button is provided whereby user can cancel order (if necessary).

ASSUMPTIONS: For practical functionality and logic of this system of function as intended, an array was appended to serve as an in-memory database. Below is the in-memory array;
//in-memory Database (Using array)
let foodMenu = [
  {id:1, menu_category:"Popular", menu: "Jollof Rice & Fried Chicken", price:"N3,500"},
  {id:2, menu_category:"Swallow & Soup", menu: "Eba & Egusi Soup (Goat Meat)", price:"N4,500"},
  {id:3, menu_category:"Jollof Rice & Entrees", menu: "Jollof Rice, Smoked Chicken & plantain", price:"N3,800"}
];

SCALABILTY : Consistent upgrade, improvement,debugging and destructuring of code keeps the app and system running and scalable without lagging even when users increase in numbers.
