# EZmaxApiDefinitionFull.ObjectEzsignfoldertypeApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ezsignfoldertypeCreateObjectV1**](ObjectEzsignfoldertypeApi.md#ezsignfoldertypeCreateObjectV1) | **POST** /1/object/ezsignfoldertype | Create a new Ezsignfoldertype
[**ezsignfoldertypeEditObjectV1**](ObjectEzsignfoldertypeApi.md#ezsignfoldertypeEditObjectV1) | **PUT** /1/object/ezsignfoldertype/{pkiEzsignfoldertypeID} | Edit an existing Ezsignfoldertype
[**ezsignfoldertypeGetAutocompleteV1**](ObjectEzsignfoldertypeApi.md#ezsignfoldertypeGetAutocompleteV1) | **GET** /1/object/ezsignfoldertype/getAutocomplete/{sSelector} | Retrieve Ezsignfoldertypes and IDs
[**ezsignfoldertypeGetListV1**](ObjectEzsignfoldertypeApi.md#ezsignfoldertypeGetListV1) | **GET** /1/object/ezsignfoldertype/getList | Retrieve Ezsignfoldertype list
[**ezsignfoldertypeGetObjectV1**](ObjectEzsignfoldertypeApi.md#ezsignfoldertypeGetObjectV1) | **GET** /1/object/ezsignfoldertype/{pkiEzsignfoldertypeID} | Retrieve an existing Ezsignfoldertype



## ezsignfoldertypeCreateObjectV1

> EzsignfoldertypeCreateObjectV1Response ezsignfoldertypeCreateObjectV1(EzsignfoldertypeCreateObjectV1Request)

Create a new Ezsignfoldertype

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfoldertypeApi();
let EzsignfoldertypeCreateObjectV1Request = new EZmaxApiDefinitionFull.EzsignfoldertypeCreateObjectV1Request(); // EzsignfoldertypeCreateObjectV1Request | 
apiInstance.ezsignfoldertypeCreateObjectV1(EzsignfoldertypeCreateObjectV1Request, (error, data, response) => {
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
 **EzsignfoldertypeCreateObjectV1Request** | [**EzsignfoldertypeCreateObjectV1Request**](EzsignfoldertypeCreateObjectV1Request.md)|  | 

### Return type

[**EzsignfoldertypeCreateObjectV1Response**](EzsignfoldertypeCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfoldertypeEditObjectV1

> EzsignfoldertypeEditObjectV1Response ezsignfoldertypeEditObjectV1(pkiEzsignfoldertypeID, EzsignfoldertypeEditObjectV1Request)

Edit an existing Ezsignfoldertype



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfoldertypeApi();
let pkiEzsignfoldertypeID = 56; // Number | 
let EzsignfoldertypeEditObjectV1Request = new EZmaxApiDefinitionFull.EzsignfoldertypeEditObjectV1Request(); // EzsignfoldertypeEditObjectV1Request | 
apiInstance.ezsignfoldertypeEditObjectV1(pkiEzsignfoldertypeID, EzsignfoldertypeEditObjectV1Request, (error, data, response) => {
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
 **pkiEzsignfoldertypeID** | **Number**|  | 
 **EzsignfoldertypeEditObjectV1Request** | [**EzsignfoldertypeEditObjectV1Request**](EzsignfoldertypeEditObjectV1Request.md)|  | 

### Return type

[**EzsignfoldertypeEditObjectV1Response**](EzsignfoldertypeEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfoldertypeGetAutocompleteV1

> CommonGetAutocompleteV1Response ezsignfoldertypeGetAutocompleteV1(sSelector, opts)

Retrieve Ezsignfoldertypes and IDs

Get the list of Ezsignfoldertypes to be used in a dropdown or autocomplete control.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfoldertypeApi();
let sSelector = "sSelector_example"; // String | The type of Ezsignfoldertypes to return
let opts = {
  'eFilterActive': "'Active'", // String | Specify which results we want to display.
  'sQuery': "sQuery_example", // String | Allow to filter the returned results
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage() // HeaderAcceptLanguage | 
};
apiInstance.ezsignfoldertypeGetAutocompleteV1(sSelector, opts, (error, data, response) => {
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
 **sSelector** | **String**| The type of Ezsignfoldertypes to return | 
 **eFilterActive** | **String**| Specify which results we want to display. | [optional] [default to &#39;Active&#39;]
 **sQuery** | **String**| Allow to filter the returned results | [optional] 
 **Accept_Language** | [**HeaderAcceptLanguage**](.md)|  | [optional] 

### Return type

[**CommonGetAutocompleteV1Response**](CommonGetAutocompleteV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfoldertypeGetListV1

> EzsignfoldertypeGetListV1Response ezsignfoldertypeGetListV1(opts)

Retrieve Ezsignfoldertype list

Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eEzsignfoldertypePrivacylevel | User&lt;br&gt;Usergroup |

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfoldertypeApi();
let opts = {
  'eOrderBy': "eOrderBy_example", // String | Specify how you want the results to be sorted
  'iRowMax': 56, // Number | 
  'iRowOffset': 56, // Number | 
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage(), // HeaderAcceptLanguage | 
  'sFilter': "sFilter_example" // String | 
};
apiInstance.ezsignfoldertypeGetListV1(opts, (error, data, response) => {
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
 **iRowOffset** | **Number**|  | [optional] 
 **Accept_Language** | [**HeaderAcceptLanguage**](.md)|  | [optional] 
 **sFilter** | **String**|  | [optional] 

### Return type

[**EzsignfoldertypeGetListV1Response**](EzsignfoldertypeGetListV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet


## ezsignfoldertypeGetObjectV1

> EzsignfoldertypeGetObjectV1Response ezsignfoldertypeGetObjectV1(pkiEzsignfoldertypeID)

Retrieve an existing Ezsignfoldertype



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfoldertypeApi();
let pkiEzsignfoldertypeID = 56; // Number | 
apiInstance.ezsignfoldertypeGetObjectV1(pkiEzsignfoldertypeID, (error, data, response) => {
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
 **pkiEzsignfoldertypeID** | **Number**|  | 

### Return type

[**EzsignfoldertypeGetObjectV1Response**](EzsignfoldertypeGetObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

