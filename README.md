# Project Title:

"Personal Budget Tracker"

# Project Description:

This repository contains the frontend, which was originally intended to be used with the api in this repo: https://github.com/personnamedmike/phase-3-sinatra-react-project.

This project was for "phase 3" of Flatiron School school's Software Engineering bootcamp. We had 4 days to complete a fullstack app. The assignment was to play around with Active Record, Sinatra, Ruby, and connect it with a React frontend.

In a sense, this project was a second iteration of tzjorden's and my app, "Unrekt Crypto Tracker." https://github.com/personnamedmike/unrekt-crypto-tracker. The key differences were that we wrote cleaner code this time, and implemented our own backend.

This first iteration of Personal Budget Tracker is less buggy than Unrekt Crypto Tracker, and is useful enough to use in your everyday life.

# How to Install and Run Personal Budget Tracker

Currently the best and most secure way to run this project is by forking and cloning both repositories. This repo you're currently in is for the api, and you can fork the frontend here https://personnamedmike.github.io/personal-budget-tracker/.

Running this app on your local machine and storing data on a local sqlite3 database will ensure a base level of privacy of your financial transactions.

# How to use this project

Setup:

1. Head over to this repo and follow the instructtions in that README.md file first: https://github.com/personnamedmike/phase-3-sinatra-react-project.
2. After your server is up and running, fork and clone this repo.
3. Navigate into the project directly, and run the following commands:
   % npm install && npm start

Add an expense: navigate to the Expenses route, add details about your expense, click 'Add Expense'. This can also be done on the home page

Add income: navigate to the Income route, add details about income, click "Add Income". This can also be done on the home page

To delete an entry, click on the garbage can icon at the end of its line.

To mark an expense as paid, click on the 🅇 icon. If a line item is marked with the ✅ icon, that means it's been paid off.

To view a basic summary of your finances, visit the Summary tab. This shows a sum of your income, expenses, and the difference between a sum of both

# Credits

Other collaborators on this product:
TzJorden: https://github.com/tzjorden
JoshHayles: https://github.com/JoshHayles

--

MIT License

Copyright (c) 2022 PersonNamedMike

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
