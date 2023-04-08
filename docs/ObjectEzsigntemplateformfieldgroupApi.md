# EZmaxApiDefinitionFull.ObjectEzsigntemplateformfieldgroupApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ezsigntemplateformfieldgroupCreateObjectV1**](ObjectEzsigntemplateformfieldgroupApi.md#ezsigntemplateformfieldgroupCreateObjectV1) | **POST** /1/object/ezsigntemplateformfieldgroup | Create a new Ezsigntemplateformfieldgroup
[**ezsigntemplateformfieldgroupDeleteObjectV1**](ObjectEzsigntemplateformfieldgroupApi.md#ezsigntemplateformfieldgroupDeleteObjectV1) | **DELETE** /1/object/ezsigntemplateformfieldgroup/{pkiEzsigntemplateformfieldgroupID} | Delete an existing Ezsigntemplateformfieldgroup
[**ezsigntemplateformfieldgroupEditObjectV1**](ObjectEzsigntemplateformfieldgroupApi.md#ezsigntemplateformfieldgroupEditObjectV1) | **PUT** /1/object/ezsigntemplateformfieldgroup/{pkiEzsigntemplateformfieldgroupID} | Edit an existing Ezsigntemplateformfieldgroup
[**ezsigntemplateformfieldgroupGetObjectV2**](ObjectEzsigntemplateformfieldgroupApi.md#ezsigntemplateformfieldgroupGetObjectV2) | **GET** /2/object/ezsigntemplateformfieldgroup/{pkiEzsigntemplateformfieldgroupID} | Retrieve an existing Ezsigntemplateformfieldgroup



## ezsigntemplateformfieldgroupCreateObjectV1

> EzsigntemplateformfieldgroupCreateObjectV1Response ezsigntemplateformfieldgroupCreateObjectV1(EzsigntemplateformfieldgroupCreateObjectV1Request)

Create a new Ezsigntemplateformfieldgroup

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsigntemplateformfieldgroupApi();
let EzsigntemplateformfieldgroupCreateObjectV1Request = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupCreateObjectV1Request(); // EzsigntemplateformfieldgroupCreateObjectV1Request | 
apiInstance.ezsigntemplateformfieldgroupCreateObjectV1(EzsigntemplateformfieldgroupCreateObjectV1Request, (error, data, response) => {
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
 **EzsigntemplateformfieldgroupCreateObjectV1Request** | [**EzsigntemplateformfieldgroupCreateObjectV1Request**](EzsigntemplateformfieldgroupCreateObjectV1Request.md)|  | 

### Return type

[**EzsigntemplateformfieldgroupCreateObjectV1Response**](EzsigntemplateformfieldgroupCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsigntemplateformfieldgroupDeleteObjectV1

> EzsigntemplateformfieldgroupDeleteObjectV1Response ezsigntemplateformfieldgroupDeleteObjectV1(pkiEzsigntemplateformfieldgroupID)

Delete an existing Ezsigntemplateformfieldgroup



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsigntemplateformfieldgroupApi();
let pkiEzsigntemplateformfieldgroupID = 56; // Number | 
apiInstance.ezsigntemplateformfieldgroupDeleteObjectV1(pkiEzsigntemplateformfieldgroupID, (error, data, response) => {
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
 **pkiEzsigntemplateformfieldgroupID** | **Number**|  | 

### Return type

[**EzsigntemplateformfieldgroupDeleteObjectV1Response**](EzsigntemplateformfieldgroupDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsigntemplateformfieldgroupEditObjectV1

> EzsigntemplateformfieldgroupEditObjectV1Response ezsigntemplateformfieldgroupEditObjectV1(pkiEzsigntemplateformfieldgroupID, EzsigntemplateformfieldgroupEditObjectV1Request)

Edit an existing Ezsigntemplateformfieldgroup



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsigntemplateformfieldgroupApi();
let pkiEzsigntemplateformfieldgroupID = 56; // Number | 
let EzsigntemplateformfieldgroupEditObjectV1Request = new EZmaxApiDefinitionFull.EzsigntemplateformfieldgroupEditObjectV1Request(); // EzsigntemplateformfieldgroupEditObjectV1Request | 
apiInstance.ezsigntemplateformfieldgroupEditObjectV1(pkiEzsigntemplateformfieldgroupID, EzsigntemplateformfieldgroupEditObjectV1Request, (error, data, response) => {
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
 **pkiEzsigntemplateformfieldgroupID** | **Number**|  | 
 **EzsigntemplateformfieldgroupEditObjectV1Request** | [**EzsigntemplateformfieldgroupEditObjectV1Request**](EzsigntemplateformfieldgroupEditObjectV1Request.md)|  | 

### Return type

[**EzsigntemplateformfieldgroupEditObjectV1Response**](EzsigntemplateformfieldgroupEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsigntemplateformfieldgroupGetObjectV2

> EzsigntemplateformfieldgroupGetObjectV2Response ezsigntemplateformfieldgroupGetObjectV2(pkiEzsigntemplateformfieldgroupID)

Retrieve an existing Ezsigntemplateformfieldgroup



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsigntemplateformfieldgroupApi();
let pkiEzsigntemplateformfieldgroupID = 56; // Number | 
apiInstance.ezsigntemplateformfieldgroupGetObjectV2(pkiEzsigntemplateformfieldgroupID, (error, data, response) => {
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
 **pkiEzsigntemplateformfieldgroupID** | **Number**|  | 

### Return type

[**EzsigntemplateformfieldgroupGetObjectV2Response**](EzsigntemplateformfieldgroupGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

