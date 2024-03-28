# EZmaxApiDefinitionFull.ObjectUsergroupexternalApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usergroupexternalCreateObjectV1**](ObjectUsergroupexternalApi.md#usergroupexternalCreateObjectV1) | **POST** /1/object/usergroupexternal | Create a new Usergroupexternal
[**usergroupexternalDeleteObjectV1**](ObjectUsergroupexternalApi.md#usergroupexternalDeleteObjectV1) | **DELETE** /1/object/usergroupexternal/{pkiUsergroupexternalID} | Delete an existing Usergroupexternal
[**usergroupexternalEditObjectV1**](ObjectUsergroupexternalApi.md#usergroupexternalEditObjectV1) | **PUT** /1/object/usergroupexternal/{pkiUsergroupexternalID} | Edit an existing Usergroupexternal
[**usergroupexternalGetAutocompleteV2**](ObjectUsergroupexternalApi.md#usergroupexternalGetAutocompleteV2) | **GET** /2/object/usergroupexternal/getAutocomplete/{sSelector} | Retrieve Usergroupexternals and IDs
[**usergroupexternalGetListV1**](ObjectUsergroupexternalApi.md#usergroupexternalGetListV1) | **GET** /1/object/usergroupexternal/getList | Retrieve Usergroupexternal list
[**usergroupexternalGetObjectV2**](ObjectUsergroupexternalApi.md#usergroupexternalGetObjectV2) | **GET** /2/object/usergroupexternal/{pkiUsergroupexternalID} | Retrieve an existing Usergroupexternal
[**usergroupexternalGetUsergroupexternalmembershipsV1**](ObjectUsergroupexternalApi.md#usergroupexternalGetUsergroupexternalmembershipsV1) | **GET** /1/object/usergroupexternal/{pkiUsergroupexternalID}/getUsergroupexternalmemberships | Retrieve an existing Usergroupexternal&#39;s Usergroupexternalmemberships
[**usergroupexternalGetUsergroupsV1**](ObjectUsergroupexternalApi.md#usergroupexternalGetUsergroupsV1) | **GET** /1/object/usergroupexternal/{pkiUsergroupexternalID}/getUsergroups | Get Usergroupexternal&#39;s Usergroups



## usergroupexternalCreateObjectV1

> UsergroupexternalCreateObjectV1Response usergroupexternalCreateObjectV1(UsergroupexternalCreateObjectV1Request)

Create a new Usergroupexternal

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupexternalApi();
let UsergroupexternalCreateObjectV1Request = new EZmaxApiDefinitionFull.UsergroupexternalCreateObjectV1Request(); // UsergroupexternalCreateObjectV1Request | 
apiInstance.usergroupexternalCreateObjectV1(UsergroupexternalCreateObjectV1Request, (error, data, response) => {
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
 **UsergroupexternalCreateObjectV1Request** | [**UsergroupexternalCreateObjectV1Request**](UsergroupexternalCreateObjectV1Request.md)|  | 

### Return type

[**UsergroupexternalCreateObjectV1Response**](UsergroupexternalCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupexternalDeleteObjectV1

> UsergroupexternalDeleteObjectV1Response usergroupexternalDeleteObjectV1(pkiUsergroupexternalID)

Delete an existing Usergroupexternal



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupexternalApi();
let pkiUsergroupexternalID = 56; // Number | The unique ID of the Usergroupexternal
apiInstance.usergroupexternalDeleteObjectV1(pkiUsergroupexternalID, (error, data, response) => {
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
 **pkiUsergroupexternalID** | **Number**| The unique ID of the Usergroupexternal | 

### Return type

[**UsergroupexternalDeleteObjectV1Response**](UsergroupexternalDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupexternalEditObjectV1

> UsergroupexternalEditObjectV1Response usergroupexternalEditObjectV1(pkiUsergroupexternalID, UsergroupexternalEditObjectV1Request)

Edit an existing Usergroupexternal



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupexternalApi();
let pkiUsergroupexternalID = 56; // Number | The unique ID of the Usergroupexternal
let UsergroupexternalEditObjectV1Request = new EZmaxApiDefinitionFull.UsergroupexternalEditObjectV1Request(); // UsergroupexternalEditObjectV1Request | 
apiInstance.usergroupexternalEditObjectV1(pkiUsergroupexternalID, UsergroupexternalEditObjectV1Request, (error, data, response) => {
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
 **pkiUsergroupexternalID** | **Number**| The unique ID of the Usergroupexternal | 
 **UsergroupexternalEditObjectV1Request** | [**UsergroupexternalEditObjectV1Request**](UsergroupexternalEditObjectV1Request.md)|  | 

### Return type

[**UsergroupexternalEditObjectV1Response**](UsergroupexternalEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupexternalGetAutocompleteV2

> UsergroupexternalGetAutocompleteV2Response usergroupexternalGetAutocompleteV2(sSelector, opts)

Retrieve Usergroupexternals and IDs

Get the list of Usergroupexternal to be used in a dropdown or autocomplete control.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupexternalApi();
let sSelector = "sSelector_example"; // String | The type of Usergroupexternals to return
let opts = {
  'eFilterActive': "'Active'", // String | Specify which results we want to display.
  'sQuery': "sQuery_example", // String | Allow to filter the returned results
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage() // HeaderAcceptLanguage | 
};
apiInstance.usergroupexternalGetAutocompleteV2(sSelector, opts, (error, data, response) => {
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
 **sSelector** | **String**| The type of Usergroupexternals to return | 
 **eFilterActive** | **String**| Specify which results we want to display. | [optional] [default to &#39;Active&#39;]
 **sQuery** | **String**| Allow to filter the returned results | [optional] 
 **Accept_Language** | [**HeaderAcceptLanguage**](.md)|  | [optional] 

### Return type

[**UsergroupexternalGetAutocompleteV2Response**](UsergroupexternalGetAutocompleteV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupexternalGetListV1

> UsergroupexternalGetListV1Response usergroupexternalGetListV1(opts)

Retrieve Usergroupexternal list



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupexternalApi();
let opts = {
  'eOrderBy': "eOrderBy_example", // String | Specify how you want the results to be sorted
  'iRowMax': 56, // Number | 
  'iRowOffset': 0, // Number | 
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage(), // HeaderAcceptLanguage | 
  'sFilter': "sFilter_example" // String | 
};
apiInstance.usergroupexternalGetListV1(opts, (error, data, response) => {
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
 **iRowMax** | **Number**|  | [optional] 
 **iRowOffset** | **Number**|  | [optional] [default to 0]
 **Accept_Language** | [**HeaderAcceptLanguage**](.md)|  | [optional] 
 **sFilter** | **String**|  | [optional] 

### Return type

[**UsergroupexternalGetListV1Response**](UsergroupexternalGetListV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet


## usergroupexternalGetObjectV2

> UsergroupexternalGetObjectV2Response usergroupexternalGetObjectV2(pkiUsergroupexternalID)

Retrieve an existing Usergroupexternal



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupexternalApi();
let pkiUsergroupexternalID = 56; // Number | The unique ID of the Usergroupexternal
apiInstance.usergroupexternalGetObjectV2(pkiUsergroupexternalID, (error, data, response) => {
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
 **pkiUsergroupexternalID** | **Number**| The unique ID of the Usergroupexternal | 

### Return type

[**UsergroupexternalGetObjectV2Response**](UsergroupexternalGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupexternalGetUsergroupexternalmembershipsV1

> UsergroupexternalGetUsergroupexternalmembershipsV1Response usergroupexternalGetUsergroupexternalmembershipsV1(pkiUsergroupexternalID)

Retrieve an existing Usergroupexternal&#39;s Usergroupexternalmemberships

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupexternalApi();
let pkiUsergroupexternalID = 56; // Number | 
apiInstance.usergroupexternalGetUsergroupexternalmembershipsV1(pkiUsergroupexternalID, (error, data, response) => {
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
 **pkiUsergroupexternalID** | **Number**|  | 

### Return type

[**UsergroupexternalGetUsergroupexternalmembershipsV1Response**](UsergroupexternalGetUsergroupexternalmembershipsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupexternalGetUsergroupsV1

> UsergroupexternalGetUsergroupsV1Response usergroupexternalGetUsergroupsV1(pkiUsergroupexternalID)

Get Usergroupexternal&#39;s Usergroups

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupexternalApi();
let pkiUsergroupexternalID = 56; // Number | 
apiInstance.usergroupexternalGetUsergroupsV1(pkiUsergroupexternalID, (error, data, response) => {
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
 **pkiUsergroupexternalID** | **Number**|  | 

### Return type

[**UsergroupexternalGetUsergroupsV1Response**](UsergroupexternalGetUsergroupsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

