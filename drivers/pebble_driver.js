
var PebbleDriver = module.exports = function(pebble) {
  this.pebble = pebble;
  this.state = 'online';
  this.type = 'smartwatch';
  this.name = 'Matts Pebble';
  this.data = {
    Pebble: 'EAE8'
  };
};

PebbleDriver.prototype.init = function(config) {
  config
    .when('online', { allow: [ 'sms', 'email' ] })
    .map('sms', this.sendSms, [{ name: 'sender', type: 'text'}, { name: 'body', type: 'text'}])
    .map('email', this.sendEmail, [{ name: 'sender', type: 'text'}, { name:'subject', type: 'text'}, { name: 'body', type: 'text' }]);
};

PebbleDriver.prototype.sendSms = function(sender, body, cb) {
  this.pebble.sms(sender, body, function(err) {
    if(err) {
      console.log('Error writing to pebble!');
    } else {
      cb();
    }
  });

};

PebbleDriver.prototype.sendEmail = function(sender, subject, body, cb) {
  this.pebble.email(sender, subject, body, function(err) {
    if(err) {
      console.log('Error writing to pebble');
    } else {
      cb();
    }
  });
};
