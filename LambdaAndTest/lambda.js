let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {

    ddb.put({
        TableName: 'LambdaAndDDB',
        Item: {
            'pKey': 1,
            'pName': 'test',
            'pVersion': 1
        }
    }).promise().then(function (data) {
        //your logic goes here
    }).catch(function (err) {
        //handle error
    });

    callback(null, { "message": "Successfully executed" });
}