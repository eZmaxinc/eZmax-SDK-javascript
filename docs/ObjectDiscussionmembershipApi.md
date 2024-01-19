# EZmaxApiDefinitionFull.ObjectDiscussionmembershipApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**discussionmembershipCreateObjectV1**](ObjectDiscussionmembershipApi.md#discussionmembershipCreateObjectV1) | **POST** /1/object/discussionmembership | Create a new Discussionmembership
[**discussionmembershipDeleteObjectV1**](ObjectDiscussionmembershipApi.md#discussionmembershipDeleteObjectV1) | **DELETE** /1/object/discussionmembership/{pkiDiscussionmembershipID} | Delete an existing Discussionmembership



## discussionmembershipCreateObjectV1

> DiscussionmembershipCreateObjectV1Response discussionmembershipCreateObjectV1(DiscussionmembershipCreateObjectV1Request)

Create a new Discussionmembership

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectDiscussionmembershipApi();
let DiscussionmembershipCreateObjectV1Request = new EZmaxApiDefinitionFull.DiscussionmembershipCreateObjectV1Request(); // DiscussionmembershipCreateObjectV1Request | 
apiInstance.discussionmembershipCreateObjectV1(DiscussionmembershipCreateObjectV1Request, (error, data, response) => {
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
 **DiscussionmembershipCreateObjectV1Request** | [**DiscussionmembershipCreateObjectV1Request**](DiscussionmembershipCreateObjectV1Request.md)|  | 

### Return type

[**DiscussionmembershipCreateObjectV1Response**](DiscussionmembershipCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## discussionmembershipDeleteObjectV1

> DiscussionmembershipDeleteObjectV1Response discussionmembershipDeleteObjectV1(pkiDiscussionmembershipID)

Delete an existing Discussionmembership



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectDiscussionmembershipApi();
let pkiDiscussionmembershipID = 56; // Number | The unique ID of the Discussionmembership
apiInstance.discussionmembershipDeleteObjectV1(pkiDiscussionmembershipID, (error, data, response) => {
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
 **pkiDiscussionmembershipID** | **Number**| The unique ID of the Discussionmembership | 

### Return type

[**DiscussionmembershipDeleteObjectV1Response**](DiscussionmembershipDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

