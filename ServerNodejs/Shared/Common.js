function getMessageAPI(code, message, result) {
    var messageBody = {
        statusCode: code,
        message: message,
        data: result
    }
    return messageBody;
}

module.exports = {
    getMessageAPI : getMessageAPI
}