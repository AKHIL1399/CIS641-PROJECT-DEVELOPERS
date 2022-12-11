# Overview

Matrix is a full-service digital e-commerce website that serves as a one-stop shop for all of your fashion and lifestyle requirements. With the biggest choice of brands and items on its web, it provides a hassle-free and delightful shopping experience to shoppers around the country.

# Software Requirements

A software requirements specification describes the purpose, requirements, and type of software to be developed. This also includes income and software costs.

## Functional Requirements

 ### Login page 

* |FR1| Every customer should be created an account before entering the website. |
* |FR2| Everyone should have a username and the username field shouldn’t be empty. |
* |FR3| Every customer should have a valid password. |
* |FR4| If he/she is a new customer then they should go to the signup page and enter all the details like email, phone number, and address. |
* |FR5| customers have valid usernames and passwords then they can enter them into the website. |

### Registration page

* |FR6| Before login to the website every customer needs to register. |
* |FR7| The customer must enter his/her details like name, phone number, and address. |
* |FR8| If the customer didn’t add the required details, then it should throw an error |
* |FR9| The phone number must be a 10-digit number, if not it shouldn’t be valid. |
* |FR10| Once the customer register, he/she should be able to Login Page for the next time. |

 ### User interface

* |FR11| The UI should be more interactive and easily guided by the customer. |
* |FR12| User interface should have a search bar so that customers can easily find what they need. |
* |FR13| The UI must contain trending products and special deals. |
* |FR14| The UI should be able to display product details and descriptions. |
* |FR15| The UI must have a Cart that helps customers to checkout easily. |

### Orders and checkout

* |FR16| The customer must place at least one item in their cart. |
* |FR17| Before they check out, they must select the proper payment type like cash on delivery or card. |
* |FR18| The mailing addresses should be not empty, and they must enter a valid zip code. |
* |FR19| The tracking id for the order should be sent to their respective mail. |
* |FR20| If they have any coupons, they can apply them here. |

### Payment’s method

* |FR21| The customer either selects cash on delivery or they can pay through a card. |
* |FR22| If they are paying through a card, then they must enter valid card details. |
* |FR23| If the payment was successful, then the receipt was sent to their email id. |
* |FR24| For an unsuccessful payment they are not able to checkout. |
* |FR25| If they opt for cash on delivery, then invoice send along with order. |




## Non-Functional Requirements

### Performance

* | NFR1 |  When user search for a product in a search engine, the product should be displayed quickly in relation to the related word that we are looking for. |
* | NFR2 | When user open the website, there should be no delays so that the user can research more products in less time, as it takes longer when visiting a store. |
* | NFR3 | When the website is busy and has plenty of visits, the user should have a good experience without any website loading delays. |
* | NFR4 | The website shall allow users to log in more quickly. |
* | NFR5 | The specifications could apply to background operations that are not visible to users. |

### Security

* | NFR6 | When a user creates an account, the password should be strong so that no one can access the account. |
* | NFR7 | While resetting the password, a one-time password must be sent to the user's email or phone number. |
* | NFR8 | The system must safeguard sensitive data, like saved card details on the account. | 
* | NFR9 | When the user wants to change his login information in the account, the system must ask security questions to which the user only knows the answers.so that other people cannot change the login details. |
* | NFR10 | When there are too many failed login attempts, the system shall send an email to the user's email address and phone number. |

### Usability

* | NFR11 |The website shall load efficiently even with a slower internet connection. |
* | NFR12 |The user interface on the site should be simple to make it easy for every user to use. |      
* | NFR13 |Within a few simple clicks that everyone can understand, users shall be able to place their orders. |
* | NFR14 |The website shall have all major shopping categories on the homepage for user convenience, and when they click on one, it should take them immediately to the products without requiring further browsing. |
* | NFR15 |The user shall share the website's merchandise links with others. The link takes them to the products when they click on it. |

### Compatibility

* | NFR16 | The website supports  windows Operating Version. | 
* | NFR17 | The website supports  MacOS 11. |
* | NFR18 | Angular must be used to develop the system's front end user interface. |
* | NFR19 | Angular cli 11 shall be used to build the system. |
* | NFR20 | Node.js 14.17.3  shall  be used to implement the backend logic. |

### Maintainability

* | NFR21 | The website should be updated based on the user reviews so that they will get a good experience. |
* | NFR22 | The product should be shown based on reviews and ratings. (Search engine optimization). |
* | NFR23 | The customer’s data should be secured (website security). |
* | NFR24 | There should be a quick response from the website. |
* | NFR25 | The site is maintained by the application server the database is utilized to maintain the data. |

# Change management plan

This section explains the steps  and roles involved in managing and controlling change during the project's execution and control phases. The transition or transformation of processes is addressed in the change management plan.

1. ***How will you train people to use it?***

we will create a demo video tutorial and put in the website as a reference for the new users in which the user can see 

*  The interface of the website and the functionalities.
*  How to use register and sign in the page 
*  How to make the order and make the payement 

This will make the people easy how to use the website and how to make any order from the website.

2.  ***How will you ensure it integrates within their ecosystem/software?***

The application has three parts, 
1. Front end
2. Backend
3. Database

First we have to upload the database on the server that supports the mongoDB after successful db uploading, we have to put the collection string of the server in our backend data connection string. And provide proper user name and password of the database, after this we have to upload the backend at any node supported hosting server so we can access the api's of the application globally. 
Once tthis process will be done then we replace the local uri with server uri for calling the api. And then upload tje front end to any node supported server.

3. ***How will you ensure that it any discovered issues are resolved?***

We ensure that all the issues in our website are resolved for this purpose we use whiteBox testing anf blackBox testing. Further we use penetration technique to stable the app. The methodology / approach that we used is manual and automation, to ensure that there will no issues at client side after deployment. 
If customer raises any issue, there will be a support team to facilitate our valuable customer.
We prioritize the issues according to their nature.

* P1 defines that the issue is critical and will be resolved within an hour
* P2 issue defines that the issue is Normal andwill be resolved within a day. 
* P3 issues defines that the priority of this issue is low and  can be fixed within a week

# Traceability links

Traceability links the relationship between requirements and the artifacts such as usecase diagram, class diagram, activity diagram.

## Use Case Diagram Traceability

* | UseCase1 | Registration | FR4, FR6, FR7, FR8, FR9, FR10 |
* | UseCase2 | User Interface| FR11, FR12, FR13, NFR6, NFR7 |

## Class Diagram Traceability

*  | Orders| FR16, FR17, FR18, FR19, FR20 |
*  | Payment | FR21, FR22, FR23, FR24, FR25 |

## Activity Diagram Traceability

* | ActivityDiagram_1 | login | FR1, FR2, FR3, FR4, FR5 |
* | ActivityDiagram_2 | orders| FR16, FR17, FR18, FR19, FR20 |


# Software Artifacts

This session describes the overview of the class diagaram , usecase diagarm and activity diagaram

1. **Use Case Diagarm for**  [User Interface](https://github.com/AKHIL1399/GVSU-CIS641-PROJECT_DEVELOPERS/blob/master/artifacts/functional-models/Use%20case%20Diagrams.pdf)

2. **Use Case Diagarm for** [Registration](https://github.com/AKHIL1399/GVSU-CIS641-PROJECT_DEVELOPERS/blob/master/artifacts/functional-models/Registration.pdf)

3. **Class Diagarm for** [Order's](https://github.com/AKHIL1399/GVSU-CIS641-PROJECT_DEVELOPERS/blob/master/artifacts/functional-models/Class%20Diagram.pdf)

4. **Class Diagarm for** [Payment](https://github.com/AKHIL1399/GVSU-CIS641-PROJECT_DEVELOPERS/blob/master/artifacts/functional-models/class_diagram_payment.pdf)

5. **Activity Diagarm for**  [login](https://github.com/AKHIL1399/GVSU-CIS641-PROJECT_DEVELOPERS/blob/master/artifacts/functional-models/activity_diagram_login2.pdf)

6. **Activity Diagarm for**  [Orders](https://github.com/AKHIL1399/GVSU-CIS641-PROJECT_DEVELOPERS/blob/master/artifacts/functional-models/Activity%20Diagrams%20order.pdf)

