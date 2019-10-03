//This file holds any configuration variables we may need 
//'config.js' is ignored by git to protect sensitive information, such as your database's username and password
//copy this file's contents to another file 'config.js' and store your MongoLab uri there

module.exports = {
    db: {
      uri: 'mongodb+srv://boba21:applepen@cen3031-rraxq.mongodb.net/test?retryWrites=true&w=majority'//place the URI of your mongo database here.
    }, 
    openCage: {
      key: '73d0a46fd4394ad0818a77cdf988c5c5' //place your openCage public key here - Sign-up for a free key https://opencagedata.com/
    },
    port: 8080
  }; 