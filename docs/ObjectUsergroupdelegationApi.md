# EZmaxApiDefinitionFull.ObjectUsergroupdelegationApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usergroupdelegationCreateObjectV1**](ObjectUsergroupdelegationApi.md#usergroupdelegationCreateObjectV1) | **POST** /1/object/usergroupdelegation | Create a new Usergroupdelegation
[**usergroupdelegationDeleteObjectV1**](ObjectUsergroupdelegationApi.md#usergroupdelegationDeleteObjectV1) | **DELETE** /1/object/usergroupdelegation/{pkiUsergroupdelegationID} | Delete an existing Usergroupdelegation
[**usergroupdelegationEditObjectV1**](ObjectUsergroupdelegationApi.md#usergroupdelegationEditObjectV1) | **PUT** /1/object/usergroupdelegation/{pkiUsergroupdelegationID} | Edit an existing Usergroupdelegation
[**usergroupdelegationGetObjectV2**](ObjectUsergroupdelegationApi.md#usergroupdelegationGetObjectV2) | **GET** /2/object/usergroupdelegation/{pkiUsergroupdelegationID} | Retrieve an existing Usergroupdelegation



## usergroupdelegationCreateObjectV1

> UsergroupdelegationCreateObjectV1Response usergroupdelegationCreateObjectV1(UsergroupdelegationCreateObjectV1Request)

Create a new Usergroupdelegation

The endpoint allows to create one or many elements at once.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupdelegationApi();
let UsergroupdelegationCreateObjectV1Request = new EZmaxApiDefinitionFull.UsergroupdelegationCreateObjectV1Request(); // UsergroupdelegationCreateObjectV1Request | 
apiInstance.usergroupdelegationCreateObjectV1(UsergroupdelegationCreateObjectV1Request, (error, data, response) => {
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
 **UsergroupdelegationCreateObjectV1Request** | [**UsergroupdelegationCreateObjectV1Request**](UsergroupdelegationCreateObjectV1Request.md)|  | 

### Return type

[**UsergroupdelegationCreateObjectV1Response**](UsergroupdelegationCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupdelegationDeleteObjectV1

> UsergroupdelegationDeleteObjectV1Response usergroupdelegationDeleteObjectV1(pkiUsergroupdelegationID)

Delete an existing Usergroupdelegation



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupdelegationApi();
let pkiUsergroupdelegationID = 56; // Number | The unique ID of the Usergroupdelegation
apiInstance.usergroupdelegationDeleteObjectV1(pkiUsergroupdelegationID, (error, data, response) => {
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
 **pkiUsergroupdelegationID** | **Number**| The unique ID of the Usergroupdelegation | 

### Return type

[**UsergroupdelegationDeleteObjectV1Response**](UsergroupdelegationDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupdelegationEditObjectV1

> UsergroupdelegationEditObjectV1Response usergroupdelegationEditObjectV1(pkiUsergroupdelegationID, UsergroupdelegationEditObjectV1Request)

Edit an existing Usergroupdelegation



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupdelegationApi();
let pkiUsergroupdelegationID = 56; // Number | The unique ID of the Usergroupdelegation
let UsergroupdelegationEditObjectV1Request = new EZmaxApiDefinitionFull.UsergroupdelegationEditObjectV1Request(); // UsergroupdelegationEditObjectV1Request | 
apiInstance.usergroupdelegationEditObjectV1(pkiUsergroupdelegationID, UsergroupdelegationEditObjectV1Request, (error, data, response) => {
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
 **pkiUsergroupdelegationID** | **Number**| The unique ID of the Usergroupdelegation | 
 **UsergroupdelegationEditObjectV1Request** | [**UsergroupdelegationEditObjectV1Request**](UsergroupdelegationEditObjectV1Request.md)|  | 

### Return type

[**UsergroupdelegationEditObjectV1Response**](UsergroupdelegationEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupdelegationGetObjectV2

> UsergroupdelegationGetObjectV2Response usergroupdelegationGetObjectV2(pkiUsergroupdelegationID)

Retrieve an existing Usergroupdelegation



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupdelegationApi();
let pkiUsergroupdelegationID = 56; // Number | The unique ID of the Usergroupdelegation
apiInstance.usergroupdelegationGetObjectV2(pkiUsergroupdelegationID, (error, data, response) => {
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
 **pkiUsergroupdelegationID** | **Number**| The unique ID of the Usergroupdelegation | 

### Return type

[**UsergroupdelegationGetObjectV2Response**](UsergroupdelegationGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

