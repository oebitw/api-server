# api-server

# basic-api-server

## Author: Omar Ewies
* [Tests Report](https://github.com/oebitw/api-server/actions)

* [Heroku Deployment](https://oebitw-api-server.herokuapp.com/)

* [Pull Request](https://github.com/oebitw/api-server/pull/1)

## Setup

1) Clone the repo
2) npm init -y.
3) npm install.
4) Create .env file with PORT=3030.

## Test
* npm test


## Run the app
* npm start

## End points

### `/clothes`

[https://oebitw-api-server.herokuapp.com/api/v1/clothes](https://oebitw-api-server.herokuapp.com/api/v1/clothes)

* You can add clothes by sending post request using postman.

* You can get the data for all the clothes by sending get request.

* You can get the data for specific clothes using its ID by sending get request
` http://localhost:3030/api/v1/clothes/1215`

* You can update the data for specific clothes using its ID by sending put request
` http://localhost:3030/api/v1/clothes/1215`

* You can delete the data for specific clothes using its ID by sending delete request
` http://localhost:3030/api/v1/clothes/1215`


### `/food`

[https://oebitw-api-server.herokuapp.com/api/v1/food](https://oebitw-api-server.herokuapp.com/api/v1/food)

* You can add food by sending post request using postman.

* You can get the data for all the food by sending get request.

* You can get the data for specific food using its ID by sending get request
` http://localhost:3030/api/v1/food/1514`

* You can update the data for specific food using its ID by sending put request
` http://localhost:3030/api/v1/food/1514`

* You can delete the data for specific food using its ID by sending delete request
` http://localhost:3030/api/v1/food/1514`



## UML

![](./img/uml.jpg)

