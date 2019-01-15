const BASE_URL_DATABASE = "mongodb://localhost:27017/";
const DATABASE_NAME = "GenLook";
const API_ACCESS_KEY_DEV = "so39r7fgwk10sncbcks7qiwo4bcfnsk203yrw19w7dhao2937gjgtyghfggrdf6567r4";
const ERROR_MESSAGE_UNAUTHORIZED = {
    statusCode:401,
    message:'Unauthorized'
}
const ERROR_MESSAGE_DATA_NOT_FOUND = {
    statusCode:402,
    message:'Data Not Found',
    data:[]
}
const ERROR_MESSAGE_REQUEST_NOT_FOUNT = {
    statusCode:404,
    message:"Request Not Found"
}

const ERROR_MESSAGE_LOGIN_FAIL = {
    statusCode: 200,
    message: "Login Fail"
}
const STATUS_CODE_QUERY_FAIL = 400;
const STATUS_CODE_QUERY_SUCCESS = 200;
module.exports = {
    BASE_URL_DATABASE : BASE_URL_DATABASE,
    DATABASE_NAME : DATABASE_NAME,
    API_ACCESS_KEY_DEV: API_ACCESS_KEY_DEV,
    ERROR_MESSAGE_UNAUTHORIZED: ERROR_MESSAGE_UNAUTHORIZED,
    ERROR_MESSAGE_DATA_NOT_FOUND: ERROR_MESSAGE_DATA_NOT_FOUND,
    ERROR_MESSAGE_REQUEST_NOT_FOUNT: ERROR_MESSAGE_REQUEST_NOT_FOUNT,
    STATUS_CODE_QUERY_FAIL : STATUS_CODE_QUERY_FAIL,
    STATUS_CODE_QUERY_SUCCESS: STATUS_CODE_QUERY_SUCCESS,
    ERROR_MESSAGE_LOGIN_FAIL: ERROR_MESSAGE_LOGIN_FAIL
};