module.exports.record = {
  api: {
    create: {method: 'post', url: "http://redbox:9000/redbox/api/v1/object/rdmp"},
    search: {method: 'get', url: "http://redbox:9000/redbox/api/v1/search"},
    getMeta: {method: 'get', url: "http://redbox:9000/redbox/api/v1/recordmetadata/$oid"},
    updateMeta: {method: 'post', url: "http://redbox:9000/redbox/api/v1/recordmetadata/$oid"}
  }
};
