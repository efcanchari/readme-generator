
# Readme-Generator

## Description

The Readme-Generator is a NodeJS application designed to simplify the creation of README.md files for projects. It prompts the user for input through the terminal and generates a README file based on the responses, streamlining documentation and saving time.

## Installation

Clone this repository and run the following command in your project directory to install necessary dependencies:

```bash
npm install
```

## Usage

To start the application, navigate to the root directory of the project in your terminal and execute:

```bash
node index.js
```

Follow the on-screen prompts to input your project details.

## Features

- Dynamic README generation based on user input.
- Customizable sections including project title, description, installation instructions, usage guidelines, contribution rules, and test procedures.
- Automatic inclusion of a license badge based on user selection.

## Contributing

Contributions are welcome. To contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit your changes (`git commit -am 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a pull request.

## Tests

To run tests, use:

```bash
npm test
```

## Key Functions

### writeToFile

`writeToFile` ensures no overwriting of existing README files by appending a timestamp to the new file's name if a file with the same name already exists.

### init

`init` is the main function that kickstarts the application, collecting user input through a series of prompts and generating the README file accordingly.

## Questions

For questions or concerns, please reach out to me via:

- GitHub: [efcanchari](https://github.com/efcanchari)
- Email: frank.lapa@itexp.co.uk
