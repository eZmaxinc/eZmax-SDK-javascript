# EZmaxApiDefinition.ModuleSsprApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ssprRemindUsernamesV1**](ModuleSsprApi.md#ssprRemindUsernamesV1) | **POST** /1/module/sspr/remindUsernames | Remind of forgotten username(s)



## ssprRemindUsernamesV1

> ssprRemindUsernamesV1()

Remind of forgotten username(s)

This endpoint returns an email with the username(s) matching the email address provided in case of forgotten username

### Example

```javascript
import EZmaxApiDefinition from 'e_zmax_api_definition';
let defaultClient = EZmaxApiDefinition.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinition.ModuleSsprApi();
apiInstance.ssprRemindUsernamesV1((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

