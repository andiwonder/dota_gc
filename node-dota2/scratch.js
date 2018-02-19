
var fs = require('fs');
const ProtoBuf = require('protobufjs');
var path = require('path');

var buffer = fs.readFileSync((path.join(__dirname) + '/test2.txt'));
console.log('buffer length is ' + buffer.byteLength);
var builder = ProtoBuf.loadSync(path.join(__dirname) + '/proto/dota_match_metadata.proto');

var decoded_message = builder.CDOTAMatchMetadata.decode(buffer);
var json = decoded_message(JSON.stringify(decoded_message));
console.log(json);







