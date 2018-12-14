/* 
Your start-up's BA has told marketing that your website has a large audience in Scandinavia and surrounding countries. Marketing thinks it would be great to welcome visitors to the site in their own language. Luckily you already use an API that detects the user's location, so this is an easy win.

The Task
Think of a way to store the languages as a database (eg an object). The languages are listed below so you can copy and paste!
Write a 'welcome' function that takes a parameter 'language' (always a string), and returns a greeting - if you have it in your database. It should default to English if the language is not in the database.

english: 'Welcome',
czech: 'Vitejte',
danish: 'Velkomst',
dutch: 'Welkom',

Original kata: https://www.codewars.com/kata/welcome/javascript
*/
function welcome(language) {
  var languageWelcomeObj = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom'
  };
  if (language in languageWelcomeObj) {
    return languageWelcomeObj[language];
  } else {
    return languageWelcomeObj.english;
  }
}

/*
Let's build a matchmaking system that helps discover jobs for developers based on a number of factors.

One of the simplest, yet most important factors is compensation. As developers we know how much money we need to support our lifestyle, so we generally have a rough idea of the minimum salary we would be satisfied with.

Let's give this a try. We'll create a function match which takes a candidate and a job, which will either return a boolean indicating whether the job is a valid match for the candidate.

A candidate will have a minimum salary, so it will look like this:

candidate = {
  minSalary: 120000
}

A job will have a maximum salary, so it will look like this:

job = {
  maxSalary: 140000
}

For a valid match, the candidate's minimum salary must be less than or equal to the job's maximum salary.

Original kata: https://www.codewars.com/kata/job-matching-number-1
*/

function match(candidate, job) {
  if (candidate.minSalary <= job.maxSalary) {
    return true;
  } else {
    return false;
  }
}