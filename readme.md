# Express • [TodoMVC](http://todomvc.com)

> Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.

&ndash; _[Express](https://expressjs.com/)_

## Resources

- [Website]()
- [Documentation]()
- [Used by]()
- [Blog]()
- [FAQ]()

### Articles

- [Interesting article]()

### Support

- [Stack Overflow](http://stackoverflow.com/questions/tagged/__)
- [Google Groups]()
- [Twitter](http://twitter.com/__)
- [Google+]()

*Let us [know](https://github.com/tastejs/todomvc/issues) if you discover anything worth sharing.*


## Implementation

In contrast to a typical [TodoMVC](https://todomvc.com) app, this app does not
utilize a frontend JavaScript framework or make use of client-side capabilities
such as `localStorage`.  Instead, it illustrates how to build a todo app using
a backend for application logic and persistence, along with HTML forms for
interaction.

This app illustrates how to build a todo app using [Node.js](https://nodejs.org/)
along with the [Express](https://expressjs.com/) web framework.  Data is
persisted to a [SQLite](https://www.sqlite.org/) database.

[EJS](https://ejs.co/) templates are used to generate HTML, which is styled
using vanilla CSS.  HTML forms are used to modify data, rather than an HTTP
API.  That being said, the forms serialize data in a format inspired by
[Todo-Backend](https://todobackend.com/).

To run this app, clone the repository and install dependencies:

```bash
$ git clone https://github.com/jaredhanson/todos-express-sqlite.git
$ cd todos-express-sqlite
$ npm install
```

Then start the server:

```
$ npm start
```

Navigate to [`http://localhost:3000`](http://localhost:3000).

The scaffolding for this app was generated using [Express application generator](https://expressjs.com/en/starter/generator.html):

```bash
$ express -v ejs todos-express-sqlite
```

## Credit

Created by [Jared Hanson](https://www.jaredhanson.me/)
