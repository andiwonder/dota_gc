var fs = require('fs');
const ProtoBuf = require('protobufjs');
var path = require('path');

var body = Buffer.from([]);
fs.readFileSync('./test.txt', function read(err, data) {
  if (err) {
    throw err;
  }
  body = data;
  console.log(body);
});

var builder = ProtoBuf.loadSync(path.join(__dirname) + '/proto/dota_match_metadata.proto');
var decoded_message = builder.CDOTAMatchMetadataFile;
console.log(decoded_message);










