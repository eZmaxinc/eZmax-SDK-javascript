# EZmaxApiDefinitionFull.ObjectDepartmentApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**departmentGetAutocompleteV1**](ObjectDepartmentApi.md#departmentGetAutocompleteV1) | **GET** /1/object/department/getAutocomplete/{sSelector} | Retrieve Departments and IDs
[**departmentGetMembersV1**](ObjectDepartmentApi.md#departmentGetMembersV1) | **GET** /1/object/department/{pkiDepartmentID}/getMembers | Retrieve an existing Department&#39;s members



## departmentGetAutocompleteV1

> CommonGetAutocompleteV1Response departmentGetAutocompleteV1(sSelector, opts)

Retrieve Departments and IDs

Get the list of Department to be used in a dropdown or autocomplete control.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectDepartmentApi();
let sSelector = "sSelector_example"; // String | The type of Departments to return
let opts = {
  'eFilterActive': "'Active'", // String | Specify which results we want to display.
  'sQuery': "sQuery_example", // String | Allow to filter the returned results
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage() // HeaderAcceptLanguage | 
};
apiInstance.departmentGetAutocompleteV1(sSelector, opts, (error, data, response) => {
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
 **sSelector** | **String**| The type of Departments to return | 
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


## departmentGetMembersV1

> DepartmentGetMembersV1Response departmentGetMembersV1(pkiDepartmentID)

Retrieve an existing Department&#39;s members



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectDepartmentApi();
let pkiDepartmentID = 56; // Number | 
apiInstance.departmentGetMembersV1(pkiDepartmentID, (error, data, response) => {
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
 **pkiDepartmentID** | **Number**|  | 

### Return type

[**DepartmentGetMembersV1Response**](DepartmentGetMembersV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

