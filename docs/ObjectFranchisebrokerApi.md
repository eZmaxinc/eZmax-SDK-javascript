# EZmaxApiDefinition.ObjectFranchisebrokerApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**franchisebrokerGetAutocompleteV1**](ObjectFranchisebrokerApi.md#franchisebrokerGetAutocompleteV1) | **GET** /1/object/franchisebroker/getAutocomplete/{sSelector} | Retrieve Franchisebrokers and IDs



## franchisebrokerGetAutocompleteV1

> CommonGetAutocompleteV1Response franchisebrokerGetAutocompleteV1(sSelector, opts)

Retrieve Franchisebrokers and IDs

Get the list of Franchisebrokers to be used in a dropdown or autocomplete control.

### Example

```javascript
import EZmaxApiDefinition from 'e_zmax_api_definition';
let defaultClient = EZmaxApiDefinition.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinition.ObjectFranchisebrokerApi();
let sSelector = "sSelector_example"; // String | The type of Franchisebrokers to return
let opts = {
  'sQuery': "sQuery_example" // String | Allow to filter the returned results
};
apiInstance.franchisebrokerGetAutocompleteV1(sSelector, opts, (error, data, response) => {
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
 **sSelector** | **String**| The type of Franchisebrokers to return | 
 **sQuery** | **String**| Allow to filter the returned results | [optional] 

### Return type

[**CommonGetAutocompleteV1Response**](CommonGetAutocompleteV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

