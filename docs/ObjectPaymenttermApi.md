# EZmaxApiDefinitionFull.ObjectPaymenttermApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**paymenttermCreateObjectV1**](ObjectPaymenttermApi.md#paymenttermCreateObjectV1) | **POST** /1/object/paymentterm | Create a new Paymentterm
[**paymenttermEditObjectV1**](ObjectPaymenttermApi.md#paymenttermEditObjectV1) | **PUT** /1/object/paymentterm/{pkiPaymenttermID} | Edit an existing Paymentterm
[**paymenttermGetAutocompleteV2**](ObjectPaymenttermApi.md#paymenttermGetAutocompleteV2) | **GET** /2/object/paymentterm/getAutocomplete/{sSelector} | Retrieve Paymentterms and IDs
[**paymenttermGetListV1**](ObjectPaymenttermApi.md#paymenttermGetListV1) | **GET** /1/object/paymentterm/getList | Retrieve Paymentterm list
[**paymenttermGetObjectV2**](ObjectPaymenttermApi.md#paymenttermGetObjectV2) | **GET** /2/object/paymentterm/{pkiPaymenttermID} | Retrieve an existing Paymentterm



## paymenttermCreateObjectV1

> PaymenttermCreateObjectV1Response paymenttermCreateObjectV1(PaymenttermCreateObjectV1Request)

Create a new Paymentterm

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectPaymenttermApi();
let PaymenttermCreateObjectV1Request = new EZmaxApiDefinitionFull.PaymenttermCreateObjectV1Request(); // PaymenttermCreateObjectV1Request | 
apiInstance.paymenttermCreateObjectV1(PaymenttermCreateObjectV1Request, (error, data, response) => {
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
 **PaymenttermCreateObjectV1Request** | [**PaymenttermCreateObjectV1Request**](PaymenttermCreateObjectV1Request.md)|  | 

### Return type

[**PaymenttermCreateObjectV1Response**](PaymenttermCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymenttermEditObjectV1

> PaymenttermEditObjectV1Response paymenttermEditObjectV1(pkiPaymenttermID, PaymenttermEditObjectV1Request)

Edit an existing Paymentterm



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectPaymenttermApi();
let pkiPaymenttermID = 56; // Number | 
let PaymenttermEditObjectV1Request = new EZmaxApiDefinitionFull.PaymenttermEditObjectV1Request(); // PaymenttermEditObjectV1Request | 
apiInstance.paymenttermEditObjectV1(pkiPaymenttermID, PaymenttermEditObjectV1Request, (error, data, response) => {
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
 **pkiPaymenttermID** | **Number**|  | 
 **PaymenttermEditObjectV1Request** | [**PaymenttermEditObjectV1Request**](PaymenttermEditObjectV1Request.md)|  | 

### Return type

[**PaymenttermEditObjectV1Response**](PaymenttermEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## paymenttermGetAutocompleteV2

> PaymenttermGetAutocompleteV2Response paymenttermGetAutocompleteV2(sSelector, opts)

Retrieve Paymentterms and IDs

Get the list of Paymentterm to be used in a dropdown or autocomplete control.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectPaymenttermApi();
let sSelector = "sSelector_example"; // String | The type of Paymentterms to return
let opts = {
  'eFilterActive': "'Active'", // String | Specify which results we want to display.
  'sQuery': "sQuery_example", // String | Allow to filter the returned results
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage() // HeaderAcceptLanguage | 
};
apiInstance.paymenttermGetAutocompleteV2(sSelector, opts, (error, data, response) => {
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
 **sSelector** | **String**| The type of Paymentterms to return | 
 **eFilterActive** | **String**| Specify which results we want to display. | [optional] [default to &#39;Active&#39;]
 **sQuery** | **String**| Allow to filter the returned results | [optional] 
 **Accept_Language** | [**HeaderAcceptLanguage**](.md)|  | [optional] 

### Return type

[**PaymenttermGetAutocompleteV2Response**](PaymenttermGetAutocompleteV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## paymenttermGetListV1

> PaymenttermGetListV1Response paymenttermGetListV1(opts)

Retrieve Paymentterm list

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectPaymenttermApi();
let opts = {
  'eOrderBy': "eOrderBy_example", // String | Specify how you want the results to be sorted
  'iRowMax': 10000, // Number | 
  'iRowOffset': 0, // Number | 
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage(), // HeaderAcceptLanguage | 
  'sFilter': "sFilter_example" // String | 
};
apiInstance.paymenttermGetListV1(opts, (error, data, response) => {
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
 **iRowMax** | **Number**|  | [optional] [default to 10000]
 **iRowOffset** | **Number**|  | [optional] [default to 0]
 **Accept_Language** | [**HeaderAcceptLanguage**](.md)|  | [optional] 
 **sFilter** | **String**|  | [optional] 

### Return type

[**PaymenttermGetListV1Response**](PaymenttermGetListV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet


## paymenttermGetObjectV2

> PaymenttermGetObjectV2Response paymenttermGetObjectV2(pkiPaymenttermID)

Retrieve an existing Paymentterm



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectPaymenttermApi();
let pkiPaymenttermID = 56; // Number | 
apiInstance.paymenttermGetObjectV2(pkiPaymenttermID, (error, data, response) => {
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
 **pkiPaymenttermID** | **Number**|  | 

### Return type

[**PaymenttermGetObjectV2Response**](PaymenttermGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

