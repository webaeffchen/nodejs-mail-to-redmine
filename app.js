// Import the config
var config = require('./config.json');

// Import the redmine module
var Redmine = require('redmine');

// Invoke redmine with config
var redmine = new Redmine({
  host: config.redmineServer,
  apiKey: config.redmineKey,
});

// Import the SimpleImap module
var SimpleImap = require('simple-imap');

// Set options for imap
var options = {
  user: config.mailUser,
  password: config.mailPassword,
  host: config.mailServer,
  port: config.mailServerPort,
  tls: config.mailServerTLS,
  mailbox: 'INBOX'
};

// Invoke SimpleImap with options
var simpleImap = new SimpleImap(options);

// Error handling for imap connection
simpleImap.on('error', function(err) {
    console.log(err);
});

// Event for handling new mails
simpleImap.on('mail', function(mail) {
    sendToRedmine(mail);
});

function sendToRedmine(mail){
  // create issue, I use an inbox project
  var issue = {
    project_id: 10,
    subject: mail.subject,
    description: mail.text
  };

  // Post error to redmine
  redmine.postIssue(issue, function(err, data) {
    // Error handling
    if (err) {
      console.log("Error: " + err.message);
      console.log('stack:' + err.stack);
      return;
    }
  });
}

simpleImap.start();