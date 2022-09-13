# Welcome to the LogicGate Front End Code Challenge

This repository contains an Angular application. Start by downloading the zip file or cloning this project to your local machine:

```bash
git clone https://github.com/LogicGateTech/front-end.git
```

When you're done zip the project directory, upload it to Dropbox, Google Drive, or somewhere else, and send a link to the zip file to the person that sent you this.

## Setup

You will need to install [Node.js](https://nodejs.org/en/) and [npm](https://www.npmjs.com/get-npm) on your computer in order to run the project.

After installing the Angular CLI (instructions below) run `ng --version` to see which node version you need to run the project. If you are unsure what version of Node.js runs on your system, run `node -v` in a terminal window.

Install the Angular CLI. `npm install -g @angular/cli`

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.7.

Run `npm install`

## Development

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## The Assignment

* Transform a data object we provide using JavaScript/Typescript.

* You will find the challenge and instructions in `src/app/main.component.ts`. Add your code to the `getAnimalsByClass()` method.

* If you are applying for SE I you do not need to remove duplicates or run the tests to see if they pass.

* If you are applying for SE II or SE III. Run `ng test` to see if your solution passes.

Transform the "animalsByContinent" object (see `mock-animals.ts`) so that animals
across every continent are organized by "class" and alphabetized by "name."
Remove any duplicates. Try to make the transformation efficient, as you may have
to manipulate a very large dataset.

The result should be an object with a single key for each distinct animal
class within the dataset (mammal, reptile, bird, etc). Each of these class
keys should map to a list of animal objects of that class (see the adjacent
test file and view the `getMockAnimalsByClass()` function for an example).
These lists should not contain duplicates and should be alphabetized from
"A" to "z".

* As you complete the challenge, please take some time to write up some details regarding your general thought process (e.g. trade-offs you are choosing to make, what you would do if you had more time, how your code would perform against a larger dataset, and similar).

* We want to respect the time you're taking to do this coding challenge, and also don't want to limit you to any specific time frame. Our estimation is that this may take between 2 and 4 hours.

* Please contact us if you run into any issues setting up the project. It will not in any way affect how we grade your work sample (see next section).

## Grading

We will be using the following criteria for grading your submission. Here’s what we are looking for:

* Communication: this is where your short write up detailing your process comes in.

* JavaScript: you were able to efficiently manipulate the data object we provided.

* Organization/Naming: how clean your code is and how clearly you name variables, etc.

* Readability: your code is easy to read and understand.

* Ability to follow specific instructions: you followed all instructions we provided.

* Ability to follow existing code patterns: you took existing code into consideration when writing your code.

## Notes

We realize not every candidate will know Angular and we do not require candidates to know Angular before we hire them. We believe that this work sample should be achievable for those who do not know Angular, as the main goal can be satisfied via vanilla JavaScript. We do not expect you to know anything about how Angular components work or how the templates render.

We are looking for any kind of feedback about the work sample process, including whether you think this challenge provides an appropriate assessment of your frontend abilities, whether the challenge took too long, etc. We will send you a little survey to fill out after you turn in your project.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
