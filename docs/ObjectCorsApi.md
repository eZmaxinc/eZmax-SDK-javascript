# EZmaxApiDefinitionFull.ObjectCorsApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**corsCreateObjectV1**](ObjectCorsApi.md#corsCreateObjectV1) | **POST** /1/object/cors | Create a new Cors
[**corsDeleteObjectV1**](ObjectCorsApi.md#corsDeleteObjectV1) | **DELETE** /1/object/cors/{pkiCorsID} | Delete an existing Cors
[**corsEditObjectV1**](ObjectCorsApi.md#corsEditObjectV1) | **PUT** /1/object/cors/{pkiCorsID} | Edit an existing Cors
[**corsGetObjectV2**](ObjectCorsApi.md#corsGetObjectV2) | **GET** /2/object/cors/{pkiCorsID} | Retrieve an existing Cors



## corsCreateObjectV1

> CorsCreateObjectV1Response corsCreateObjectV1(CorsCreateObjectV1Request)

Create a new Cors

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectCorsApi();
let CorsCreateObjectV1Request = new EZmaxApiDefinitionFull.CorsCreateObjectV1Request(); // CorsCreateObjectV1Request | 
apiInstance.corsCreateObjectV1(CorsCreateObjectV1Request, (error, data, response) => {
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
 **CorsCreateObjectV1Request** | [**CorsCreateObjectV1Request**](CorsCreateObjectV1Request.md)|  | 

### Return type

[**CorsCreateObjectV1Response**](CorsCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## corsDeleteObjectV1

> CorsDeleteObjectV1Response corsDeleteObjectV1(pkiCorsID)

Delete an existing Cors



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectCorsApi();
let pkiCorsID = 56; // Number | The unique ID of the Cors
apiInstance.corsDeleteObjectV1(pkiCorsID, (error, data, response) => {
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
 **pkiCorsID** | **Number**| The unique ID of the Cors | 

### Return type

[**CorsDeleteObjectV1Response**](CorsDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## corsEditObjectV1

> CorsEditObjectV1Response corsEditObjectV1(pkiCorsID, CorsEditObjectV1Request)

Edit an existing Cors



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectCorsApi();
let pkiCorsID = 56; // Number | The unique ID of the Cors
let CorsEditObjectV1Request = new EZmaxApiDefinitionFull.CorsEditObjectV1Request(); // CorsEditObjectV1Request | 
apiInstance.corsEditObjectV1(pkiCorsID, CorsEditObjectV1Request, (error, data, response) => {
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
 **pkiCorsID** | **Number**| The unique ID of the Cors | 
 **CorsEditObjectV1Request** | [**CorsEditObjectV1Request**](CorsEditObjectV1Request.md)|  | 

### Return type

[**CorsEditObjectV1Response**](CorsEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## corsGetObjectV2

> CorsGetObjectV2Response corsGetObjectV2(pkiCorsID)

Retrieve an existing Cors



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectCorsApi();
let pkiCorsID = 56; // Number | The unique ID of the Cors
apiInstance.corsGetObjectV2(pkiCorsID, (error, data, response) => {
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
 **pkiCorsID** | **Number**| The unique ID of the Cors | 

### Return type

[**CorsGetObjectV2Response**](CorsGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

