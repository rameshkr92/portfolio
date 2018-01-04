#Portfolio App

- - -
Mongo Express Angular Node - TDD/TAD - with Karma, Protractor, & Jasmine

  * including
    * <a href="https://github.com/oblador/angular-scroll" target="_blank">Angular Scroll</a>
    * <a href="https://github.com/ncb000gt/node.bcrypt.js" target="_blank">bcrypt</a>
    * <a href="http://getbootstrap.com/" target="_blank">Bootstrap</a>
    * <a href="https://github.com/auth0/node-jsonwebtoken" target="_blank">jsonwebtoken</a>
    * <a href="http://socket.io/" target="_blank">Socket.io</a>
    * <a href="https://angular-ui.github.io/bootstrap/" target="_blank">UI-Bootstrap</a>
    * <a href="http://www.wunderground.com/weather/api/" target="_blank">Weather Underground API</a>

- - -
###Install:
######Requirements:
  * <a href="https://nodejs.org/" target="_blank">Node</a>
  * <a href="https://www.mongodb.org/" target="_blank">MongoDB</a>
  * <a href="http://bower.io/" target="_blank">Bower</a>
  * <a href="http://gruntjs.com/" target="_blank">Grunt</a>

- - -
```
https://github.com/rameshkr92/portfolio.git
cd portfolio
npm install
```
- - -

#####Base Directory Tree
(doesn't have all the files listed)
```
.
├── angular
│   ├── bower_components
│   ├── css
│   │   ├── normalize.css
│   │   └── style.css
│   ├── img
│   │   └── favicon
│   │       └── favicon.ico
│   ├── js
│   │   ├── app.js
│   │   ├── directives
│   │   │   └── directive.js
│   │   ├── filters
│   │   │   └── filters.js
│   │   └── providers
│   │       ├── factory.js
│   │       └── services.js
│   └── views
│       ├── error.ejs
│       ├── index.ejs
│       └── partials
│           └── main.html
├── bower.json
├── config
│   ├── config.js
│   ├── mongoose.js
│   └── routes
│       └── routes.js
├── db_setup
│   ├── buildStatesDB.js
│   └── buildUsersDB.js
├── express
│   ├── controllers
│   │   └── users.js
│   ├── models
│   │   └── user.js
│   └── services
│       └── dbUtility.js
├── node_modules
├── package.json
├── server.js
└── test
    ├── e2e
    │   ├── helpers
    │   │   └── homepageHelper.js
    │   ├── page-objects
    │   │   └── homePage.js
    │   └── users
    │       └── homePage.js
    ├── karma.conf.js
    ├── protractor-conf.js
    └── unit
        ├── objects
        │   └── mockUserObjectFactory.js
        └── users
            └── usersDirectiveSpec.js
```
