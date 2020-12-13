var rfc = require('node-rfc');

function callRfc(req, res) {
  const rfcName = req.params.rfc;
  const credentials = req.body.credentials;
  const params = req.body.params;

  console.log(req.params.rfc);
  console.log(req.body.credentials);
  console.log(req.body.params);

  var client = new rfc.Client(credentials);

  console.log('Client Version: ', client.getVersion());
  console.log('Are we connected?', client.ping());

  console.log('Connecting...');
  client.connect(function (err) {
    if (err) {
      console.error('could not connect to server', err);
      return res.status(400).json(err);
    }

    console.log(`Calling ${rfcName}`);
    console.time(`RFC ${rfcName} returned in`);
    client.invoke(rfcName, params, function (err, resRfc) {
      if (err) {
        console.error(`Error calling ${rfcName}`, err);
        return res.status(400).json(err);
      }

      console.log(`Data returned successfully from RFC ${rfcName}`);
      console.timeEnd(`RFC ${rfcName} returned in`);
      return res.status(200).json(resRfc);
    });
  });
}

module.exports = {
  callRfc,
};
