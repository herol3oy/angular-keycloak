# Angular with Keycloak
## Running the keycloak server
- Clone the repo
  - `git clone https://github.com/herol3oy/angular-keycloak.git`
  

- Run the Keycloak serve 
  - Navigate to app dir `cd angular-keycloak`
  - Build and run the container `docker-compose up`
  

- Create a new user to be associated with thefront end app
  - Navigate to `http://localhost:8080/` and enter `Administration Console` by using `username:admin` and `password:admin`
  - Create a new realm by clicking on `Add realm`
  - Type a name and press `create`
  - In the left sidebar under `Manage` click on `Users`
  - Create a new user by clicking on `Add user`. Type your `Username` and press `save`.
  - To add your password to created user click on `Credentials` tab and type your `Password` and `Password Confirmation`. Set the `Temporary` to `OFF` and press `Set Password`.
  

## Running the front end app
- Install dependencies and start the app `npm i && ng serve`
- In the app directory, open `src/app/utility/app.init.ts`
- Type your created `realm` and `clientId`
- Navigate to `http://localhost:4200/` and try to login. The `http://localhost:4200/login` should be secured by Keyloak service and you need to login with your created `username` and `password`

