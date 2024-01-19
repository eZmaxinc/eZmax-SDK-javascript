# EZmaxApiDefinitionFull.ObjectDiscussionmessageApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discussionmessageCreateObjectV1**](ObjectDiscussionmessageApi.md#discussionmessageCreateObjectV1) | **POST** /1/object/discussionmessage | Create a new Discussionmessage
[**discussionmessageDeleteObjectV1**](ObjectDiscussionmessageApi.md#discussionmessageDeleteObjectV1) | **DELETE** /1/object/discussionmessage/{pkiDiscussionmessageID} | Delete an existing Discussionmessage
[**discussionmessagePatchObjectV1**](ObjectDiscussionmessageApi.md#discussionmessagePatchObjectV1) | **PATCH** /1/object/discussionmessage/{pkiDiscussionmessageID} | Patch an existing Discussionmessage



## discussionmessageCreateObjectV1

> DiscussionmessageCreateObjectV1Response discussionmessageCreateObjectV1(DiscussionmessageCreateObjectV1Request)

Create a new Discussionmessage

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectDiscussionmessageApi();
let DiscussionmessageCreateObjectV1Request = new EZmaxApiDefinitionFull.DiscussionmessageCreateObjectV1Request(); // DiscussionmessageCreateObjectV1Request | 
apiInstance.discussionmessageCreateObjectV1(DiscussionmessageCreateObjectV1Request, (error, data, response) => {
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
 **DiscussionmessageCreateObjectV1Request** | [**DiscussionmessageCreateObjectV1Request**](DiscussionmessageCreateObjectV1Request.md)|  | 

### Return type

[**DiscussionmessageCreateObjectV1Response**](DiscussionmessageCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## discussionmessageDeleteObjectV1

> DiscussionmessageDeleteObjectV1Response discussionmessageDeleteObjectV1(pkiDiscussionmessageID)

Delete an existing Discussionmessage



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectDiscussionmessageApi();
let pkiDiscussionmessageID = 56; // Number | The unique ID of the Discussionmessage
apiInstance.discussionmessageDeleteObjectV1(pkiDiscussionmessageID, (error, data, response) => {
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
 **pkiDiscussionmessageID** | **Number**| The unique ID of the Discussionmessage | 

### Return type

[**DiscussionmessageDeleteObjectV1Response**](DiscussionmessageDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## discussionmessagePatchObjectV1

> DiscussionmessagePatchObjectV1Response discussionmessagePatchObjectV1(pkiDiscussionmessageID, DiscussionmessagePatchObjectV1Request)

Patch an existing Discussionmessage



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectDiscussionmessageApi();
let pkiDiscussionmessageID = 56; // Number | The unique ID of the Discussionmessage
let DiscussionmessagePatchObjectV1Request = new EZmaxApiDefinitionFull.DiscussionmessagePatchObjectV1Request(); // DiscussionmessagePatchObjectV1Request | 
apiInstance.discussionmessagePatchObjectV1(pkiDiscussionmessageID, DiscussionmessagePatchObjectV1Request, (error, data, response) => {
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
 **pkiDiscussionmessageID** | **Number**| The unique ID of the Discussionmessage | 
 **DiscussionmessagePatchObjectV1Request** | [**DiscussionmessagePatchObjectV1Request**](DiscussionmessagePatchObjectV1Request.md)|  | 

### Return type

[**DiscussionmessagePatchObjectV1Response**](DiscussionmessagePatchObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

