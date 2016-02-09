# nodejs-mail-to-redmine
That is a super simple and quite lazy application I hacked together because I am using Redmine on a shared webspace where none of the other ways to make tickets from a mail is working.

What you need:
* Mail with IMAP and an address, where you send your tickets to be.
* Redmine with an API key for your user.
* A server or webspace which allows you to run Node scripts as service or at least as cronjob.

# setup
* Fill in the config file with your credentials.
* Run `npm install` to install all needed node modules.
* Then run `node app` to start the app for the first time.
* If everything runs fine, you can establish a service or cronjob for the script to run permanently or at least on an interval.

That's it!