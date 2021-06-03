# EZmaxApiDefinition.ModuleAuthenticateApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**authenticateAuthenticateV2**](ModuleAuthenticateApi.md#authenticateAuthenticateV2) | **POST** /2/module/authenticate/authenticate/{eSessionType} | Authenticate a user



## authenticateAuthenticateV2

> AuthenticateAuthenticateV2Response authenticateAuthenticateV2(eSessionType, AuthenticateAuthenticateV2Request)

Authenticate a user

This endpoint authenticates a user.

### Example

```javascript
import EZmaxApiDefinition from 'e_zmax_api_definition';
let defaultClient = EZmaxApiDefinition.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinition.ModuleAuthenticateApi();
let eSessionType = "eSessionType_example"; // String | 
let AuthenticateAuthenticateV2Request = new EZmaxApiDefinition.AuthenticateAuthenticateV2Request(); // AuthenticateAuthenticateV2Request | 
apiInstance.authenticateAuthenticateV2(eSessionType, AuthenticateAuthenticateV2Request, (error, data, response) => {
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
 **eSessionType** | **String**|  | 
 **AuthenticateAuthenticateV2Request** | [**AuthenticateAuthenticateV2Request**](AuthenticateAuthenticateV2Request.md)|  | 

### Return type

[**AuthenticateAuthenticateV2Response**](AuthenticateAuthenticateV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

