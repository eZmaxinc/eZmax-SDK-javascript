# EZmaxApiDefinitionFull.ObjectEzsigntemplatepackagemembershipApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ezsigntemplatepackagemembershipCreateObjectV1**](ObjectEzsigntemplatepackagemembershipApi.md#ezsigntemplatepackagemembershipCreateObjectV1) | **POST** /1/object/ezsigntemplatepackagemembership | Create a new Ezsigntemplatepackagemembership
[**ezsigntemplatepackagemembershipDeleteObjectV1**](ObjectEzsigntemplatepackagemembershipApi.md#ezsigntemplatepackagemembershipDeleteObjectV1) | **DELETE** /1/object/ezsigntemplatepackagemembership/{pkiEzsigntemplatepackagemembershipID} | Delete an existing Ezsigntemplatepackagemembership
[**ezsigntemplatepackagemembershipGetObjectV1**](ObjectEzsigntemplatepackagemembershipApi.md#ezsigntemplatepackagemembershipGetObjectV1) | **GET** /1/object/ezsigntemplatepackagemembership/{pkiEzsigntemplatepackagemembershipID} | Retrieve an existing Ezsigntemplatepackagemembership



## ezsigntemplatepackagemembershipCreateObjectV1

> EzsigntemplatepackagemembershipCreateObjectV1Response ezsigntemplatepackagemembershipCreateObjectV1(EzsigntemplatepackagemembershipCreateObjectV1Request)

Create a new Ezsigntemplatepackagemembership

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsigntemplatepackagemembershipApi();
let EzsigntemplatepackagemembershipCreateObjectV1Request = new EZmaxApiDefinitionFull.EzsigntemplatepackagemembershipCreateObjectV1Request(); // EzsigntemplatepackagemembershipCreateObjectV1Request | 
apiInstance.ezsigntemplatepackagemembershipCreateObjectV1(EzsigntemplatepackagemembershipCreateObjectV1Request, (error, data, response) => {
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
 **EzsigntemplatepackagemembershipCreateObjectV1Request** | [**EzsigntemplatepackagemembershipCreateObjectV1Request**](EzsigntemplatepackagemembershipCreateObjectV1Request.md)|  | 

### Return type

[**EzsigntemplatepackagemembershipCreateObjectV1Response**](EzsigntemplatepackagemembershipCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsigntemplatepackagemembershipDeleteObjectV1

> EzsigntemplatepackagemembershipDeleteObjectV1Response ezsigntemplatepackagemembershipDeleteObjectV1(pkiEzsigntemplatepackagemembershipID)

Delete an existing Ezsigntemplatepackagemembership



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsigntemplatepackagemembershipApi();
let pkiEzsigntemplatepackagemembershipID = 56; // Number | 
apiInstance.ezsigntemplatepackagemembershipDeleteObjectV1(pkiEzsigntemplatepackagemembershipID, (error, data, response) => {
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
 **pkiEzsigntemplatepackagemembershipID** | **Number**|  | 

### Return type

[**EzsigntemplatepackagemembershipDeleteObjectV1Response**](EzsigntemplatepackagemembershipDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsigntemplatepackagemembershipGetObjectV1

> EzsigntemplatepackagemembershipGetObjectV1Response ezsigntemplatepackagemembershipGetObjectV1(pkiEzsigntemplatepackagemembershipID)

Retrieve an existing Ezsigntemplatepackagemembership



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsigntemplatepackagemembershipApi();
let pkiEzsigntemplatepackagemembershipID = 56; // Number | 
apiInstance.ezsigntemplatepackagemembershipGetObjectV1(pkiEzsigntemplatepackagemembershipID, (error, data, response) => {
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
 **pkiEzsigntemplatepackagemembershipID** | **Number**|  | 

### Return type

[**EzsigntemplatepackagemembershipGetObjectV1Response**](EzsigntemplatepackagemembershipGetObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json
