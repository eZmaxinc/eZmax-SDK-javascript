# EZmaxApiDefinitionFull.ObjectEzsignsignergroupApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ezsignsignergroupCreateObjectV1**](ObjectEzsignsignergroupApi.md#ezsignsignergroupCreateObjectV1) | **POST** /1/object/ezsignsignergroup | Create a new Ezsignsignergroup
[**ezsignsignergroupDeleteObjectV1**](ObjectEzsignsignergroupApi.md#ezsignsignergroupDeleteObjectV1) | **DELETE** /1/object/ezsignsignergroup/{pkiEzsignsignergroupID} | Delete an existing Ezsignsignergroup
[**ezsignsignergroupEditEzsignsignergroupmembershipsV1**](ObjectEzsignsignergroupApi.md#ezsignsignergroupEditEzsignsignergroupmembershipsV1) | **PUT** /1/object/ezsignsignergroup/{pkiEzsignsignergroupID}/editEzsignsignergroupmemberships | Edit multiple Ezsignsignergroupmemberships
[**ezsignsignergroupEditObjectV1**](ObjectEzsignsignergroupApi.md#ezsignsignergroupEditObjectV1) | **PUT** /1/object/ezsignsignergroup/{pkiEzsignsignergroupID} | Edit an existing Ezsignsignergroup
[**ezsignsignergroupGetEzsignsignergroupmembershipsV1**](ObjectEzsignsignergroupApi.md#ezsignsignergroupGetEzsignsignergroupmembershipsV1) | **GET** /1/object/ezsignsignergroup/{pkiEzsignsignergroupID}/getEzsignsignergroupmemberships | Retrieve an existing Ezsignsignergroup&#39;s Ezsignsignergroupmemberships
[**ezsignsignergroupGetObjectV2**](ObjectEzsignsignergroupApi.md#ezsignsignergroupGetObjectV2) | **GET** /2/object/ezsignsignergroup/{pkiEzsignsignergroupID} | Retrieve an existing Ezsignsignergroup



## ezsignsignergroupCreateObjectV1

> EzsignsignergroupCreateObjectV1Response ezsignsignergroupCreateObjectV1(EzsignsignergroupCreateObjectV1Request)

Create a new Ezsignsignergroup

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignsignergroupApi();
let EzsignsignergroupCreateObjectV1Request = new EZmaxApiDefinitionFull.EzsignsignergroupCreateObjectV1Request(); // EzsignsignergroupCreateObjectV1Request | 
apiInstance.ezsignsignergroupCreateObjectV1(EzsignsignergroupCreateObjectV1Request, (error, data, response) => {
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
 **EzsignsignergroupCreateObjectV1Request** | [**EzsignsignergroupCreateObjectV1Request**](EzsignsignergroupCreateObjectV1Request.md)|  | 

### Return type

[**EzsignsignergroupCreateObjectV1Response**](EzsignsignergroupCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignsignergroupDeleteObjectV1

> EzsignsignergroupDeleteObjectV1Response ezsignsignergroupDeleteObjectV1(pkiEzsignsignergroupID)

Delete an existing Ezsignsignergroup



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignsignergroupApi();
let pkiEzsignsignergroupID = 56; // Number | The unique ID of the Ezsignsignergroup
apiInstance.ezsignsignergroupDeleteObjectV1(pkiEzsignsignergroupID, (error, data, response) => {
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
 **pkiEzsignsignergroupID** | **Number**| The unique ID of the Ezsignsignergroup | 

### Return type

[**EzsignsignergroupDeleteObjectV1Response**](EzsignsignergroupDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignsignergroupEditEzsignsignergroupmembershipsV1

> EzsignsignergroupEditEzsignsignergroupmembershipsV1Response ezsignsignergroupEditEzsignsignergroupmembershipsV1(pkiEzsignsignergroupID, EzsignsignergroupEditEzsignsignergroupmembershipsV1Request)

Edit multiple Ezsignsignergroupmemberships

Using this endpoint, you can edit multiple Ezsignsignergroupmemberships at the same time.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignsignergroupApi();
let pkiEzsignsignergroupID = 56; // Number | 
let EzsignsignergroupEditEzsignsignergroupmembershipsV1Request = new EZmaxApiDefinitionFull.EzsignsignergroupEditEzsignsignergroupmembershipsV1Request(); // EzsignsignergroupEditEzsignsignergroupmembershipsV1Request | 
apiInstance.ezsignsignergroupEditEzsignsignergroupmembershipsV1(pkiEzsignsignergroupID, EzsignsignergroupEditEzsignsignergroupmembershipsV1Request, (error, data, response) => {
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
 **pkiEzsignsignergroupID** | **Number**|  | 
 **EzsignsignergroupEditEzsignsignergroupmembershipsV1Request** | [**EzsignsignergroupEditEzsignsignergroupmembershipsV1Request**](EzsignsignergroupEditEzsignsignergroupmembershipsV1Request.md)|  | 

### Return type

[**EzsignsignergroupEditEzsignsignergroupmembershipsV1Response**](EzsignsignergroupEditEzsignsignergroupmembershipsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignsignergroupEditObjectV1

> EzsignsignergroupEditObjectV1Response ezsignsignergroupEditObjectV1(pkiEzsignsignergroupID, EzsignsignergroupEditObjectV1Request)

Edit an existing Ezsignsignergroup



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignsignergroupApi();
let pkiEzsignsignergroupID = 56; // Number | The unique ID of the Ezsignsignergroup
let EzsignsignergroupEditObjectV1Request = new EZmaxApiDefinitionFull.EzsignsignergroupEditObjectV1Request(); // EzsignsignergroupEditObjectV1Request | 
apiInstance.ezsignsignergroupEditObjectV1(pkiEzsignsignergroupID, EzsignsignergroupEditObjectV1Request, (error, data, response) => {
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
 **pkiEzsignsignergroupID** | **Number**| The unique ID of the Ezsignsignergroup | 
 **EzsignsignergroupEditObjectV1Request** | [**EzsignsignergroupEditObjectV1Request**](EzsignsignergroupEditObjectV1Request.md)|  | 

### Return type

[**EzsignsignergroupEditObjectV1Response**](EzsignsignergroupEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignsignergroupGetEzsignsignergroupmembershipsV1

> EzsignsignergroupGetEzsignsignergroupmembershipsV1Response ezsignsignergroupGetEzsignsignergroupmembershipsV1(pkiEzsignsignergroupID)

Retrieve an existing Ezsignsignergroup&#39;s Ezsignsignergroupmemberships

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignsignergroupApi();
let pkiEzsignsignergroupID = 56; // Number | 
apiInstance.ezsignsignergroupGetEzsignsignergroupmembershipsV1(pkiEzsignsignergroupID, (error, data, response) => {
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
 **pkiEzsignsignergroupID** | **Number**|  | 

### Return type

[**EzsignsignergroupGetEzsignsignergroupmembershipsV1Response**](EzsignsignergroupGetEzsignsignergroupmembershipsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignsignergroupGetObjectV2

> EzsignsignergroupGetObjectV2Response ezsignsignergroupGetObjectV2(pkiEzsignsignergroupID)

Retrieve an existing Ezsignsignergroup



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignsignergroupApi();
let pkiEzsignsignergroupID = 56; // Number | The unique ID of the Ezsignsignergroup
apiInstance.ezsignsignergroupGetObjectV2(pkiEzsignsignergroupID, (error, data, response) => {
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
 **pkiEzsignsignergroupID** | **Number**| The unique ID of the Ezsignsignergroup | 

### Return type

[**EzsignsignergroupGetObjectV2Response**](EzsignsignergroupGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

