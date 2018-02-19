var fs = require('fs');
const ProtoBuf = require('protobufjs');
var path = require('path');

var buffer = fs.readFileSync((path.join(__dirname) + '/test.txt'));
console.log('buffer length is ' + buffer.byteLength);

var builder = ProtoBuf.loadSync(path.join(__dirname) + '/proto/dota_match_metadata.proto');
// var decoded_message = builder.CDOTAMatchMetadataFile.decode(buffer);
// console.log(decoded_message);

try {
  var decodedMessage = builder.CDOTAMatchMetadataFile.decode(buffer);
} catch (e) {
  if (e instanceof ProtoBuf.util.ProtocolError) {
    console.log(e.instance);
  } else {
    console.log('wire format is invalid');
  }
};








