exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({data: [{name: "John"}, {name: "Jane"}]}),
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Expose-Headers": "*",
      "X-Total-Count": 121,
      "X-Current-Count": 20,
      "X-Max-Records": 20,
    },
  };
}
