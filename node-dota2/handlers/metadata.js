var Dota2 = require("../index"),
    util = require("util");

Dota2.Dota2Client.prototype.getMatchMetaData = function(version, match_id, callback) {
  callback = callback || null;

  /* DESCRIPTION OF METHOD */
  this.Logger.debug("Sending match meta-data request");

  var payload = {
    version: version,
    match_id: match_id
  };


  if (!this._gcReady) {
    if (this.debug) util.log("GC not ready, please listen for the 'ready' event.");
    return null;
  }
  if (this.debug) util.log("Sending getMatchMetaData");

  // this._client.toGC(this._appid, (Dota2.schema.lookupEnum("EDOTAGCMsg").values.k_EMsgGCDOTAMatchMetadata | protoMask), payload, callback);

  this.sendToGC(  Dota2.schema.lookupEnum("EDOTAGCMsg").values.k_EMsgGCDOTAMatchMetadata,
                  Dota2.schema.lookupType("CDOTAMatchMetadataFile").encode(payload).finish());

};

var handlers = Dota2.Dota2Client.prototype._handlers;