# EZmaxApiDefinitionFull.ObjectUserstagedApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**userstagedDeleteObjectV1**](ObjectUserstagedApi.md#userstagedDeleteObjectV1) | **DELETE** /1/object/userstaged/{pkiUserstagedID} | Delete an existing Userstaged
[**userstagedGetListV1**](ObjectUserstagedApi.md#userstagedGetListV1) | **GET** /1/object/userstaged/getList | Retrieve Userstaged list
[**userstagedGetObjectV2**](ObjectUserstagedApi.md#userstagedGetObjectV2) | **GET** /2/object/userstaged/{pkiUserstagedID} | Retrieve an existing Userstaged
[**userstagedMapV1**](ObjectUserstagedApi.md#userstagedMapV1) | **POST** /1/object/userstaged/{pkiUserstagedID}/map | Map the Userstaged to an existing user



## userstagedDeleteObjectV1

> UserstagedDeleteObjectV1Response userstagedDeleteObjectV1(pkiUserstagedID)

Delete an existing Userstaged



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUserstagedApi();
let pkiUserstagedID = 56; // Number | The unique ID of the Userstaged
apiInstance.userstagedDeleteObjectV1(pkiUserstagedID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pkiUserstagedID** | **Number**| The unique ID of the Userstaged | 

### Return type

[**UserstagedDeleteObjectV1Response**](UserstagedDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userstagedGetListV1

> UserstagedGetListV1Response userstagedGetListV1(opts)

Retrieve Userstaged list



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUserstagedApi();
let opts = {
  'eOrderBy': "eOrderBy_example", // String | Specify how you want the results to be sorted
  'iRowMax': 10000, // Number | 
  'iRowOffset': 0, // Number | 
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage(), // HeaderAcceptLanguage | 
  'sFilter': "sFilter_example" // String | 
};
apiInstance.userstagedGetListV1(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **eOrderBy** | **String**| Specify how you want the results to be sorted | [optional] 
 **iRowMax** | **Number**|  | [optional] [default to 10000]
 **iRowOffset** | **Number**|  | [optional] [default to 0]
 **Accept_Language** | [**HeaderAcceptLanguage**](.md)|  | [optional] 
 **sFilter** | **String**|  | [optional] 

### Return type

[**UserstagedGetListV1Response**](UserstagedGetListV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet


## userstagedGetObjectV2

> UserstagedGetObjectV2Response userstagedGetObjectV2(pkiUserstagedID)

Retrieve an existing Userstaged



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUserstagedApi();
let pkiUserstagedID = 56; // Number | The unique ID of the Userstaged
apiInstance.userstagedGetObjectV2(pkiUserstagedID, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pkiUserstagedID** | **Number**| The unique ID of the Userstaged | 

### Return type

[**UserstagedGetObjectV2Response**](UserstagedGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## userstagedMapV1

> UserstagedMapV1Response userstagedMapV1(pkiUserstagedID, UserstagedMapV1Request)

Map the Userstaged to an existing user



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUserstagedApi();
let pkiUserstagedID = 56; // Number | The unique ID of the Userstaged
let UserstagedMapV1Request = new EZmaxApiDefinitionFull.UserstagedMapV1Request(); // UserstagedMapV1Request | 
apiInstance.userstagedMapV1(pkiUserstagedID, UserstagedMapV1Request, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **pkiUserstagedID** | **Number**| The unique ID of the Userstaged | 
 **UserstagedMapV1Request** | [**UserstagedMapV1Request**](UserstagedMapV1Request.md)|  | 

### Return type

[**UserstagedMapV1Response**](UserstagedMapV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

