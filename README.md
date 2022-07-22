![](https://img.shields.io/badge/Microverse-blueviolet)

# Testing for Add Remove function in To Do List App 

- Jest framework is used  for testing.
- Created  (addremove.test.js) for a file containing the add item and delete item functions that you want to test.
- Tests are written for pure functions. Some of those functions however will update localStorage and manipulate the DOM. For those, mocks are used. 
- A storage object is mocked  to "imitate" localStorage operations.
- HTML is mocked  to test if add/delete functions add or remove exactly one  element to/from the list in the DOM.
- describe() method is used. 
- function for editing the task description.
- function for updating an item's 'completed' status.
- the "Clear all completed" function.
- group tests using the describe() method.

## Built With

- Html
- Css
- Java script

## Frameworks
- webpack
- jest

## Live Demo 

[Live Demo Link](https://krishnabot.github.io/To-Do-List/dist/)

## Getting Started 

- Use `git clone https://github.com/Krishnabot/To-Do-List.git.git` to clone this repo in your Local machine.
- In terminal  run `npm run build ` and then `npm start` to run application. 
- Manually can be accessed in `http://localhost:8081/`.
- In terminal run `npm test` to run test. 

## Author

👤 **Krishna**

- GitHub: [@Krishnabot](https://github.com/Krishnabot)
- Twitter: [@last_matrix](https://twitter.com/last_matrix)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/krishna-prasad-acharya-3596bb130/)

## Collaboration Partner

- GitHub: [@Jeanbulambo](https://github.com/Jeanbulambo)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](../../issues/).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

## 📝 License

This project is [MIT](./MIT.md) licensed.
