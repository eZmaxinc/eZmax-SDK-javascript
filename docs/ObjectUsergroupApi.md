# EZmaxApiDefinitionFull.ObjectUsergroupApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usergroupCreateObjectV1**](ObjectUsergroupApi.md#usergroupCreateObjectV1) | **POST** /1/object/usergroup | Create a new Usergroup
[**usergroupEditObjectV1**](ObjectUsergroupApi.md#usergroupEditObjectV1) | **PUT** /1/object/usergroup/{pkiUsergroupID} | Edit an existing Usergroup
[**usergroupEditPermissionsV1**](ObjectUsergroupApi.md#usergroupEditPermissionsV1) | **PUT** /1/object/usergroup/{pkiUsergroupID}/editPermissions | Edit multiple Permissions
[**usergroupEditUsergroupdelegationsV1**](ObjectUsergroupApi.md#usergroupEditUsergroupdelegationsV1) | **PUT** /1/object/usergroup/{pkiUsergroupID}/editUsergroupdelegations | Edit multiple Usergroupdelegations
[**usergroupEditUsergroupmembershipsV1**](ObjectUsergroupApi.md#usergroupEditUsergroupmembershipsV1) | **PUT** /1/object/usergroup/{pkiUsergroupID}/editUsergroupmemberships | Edit multiple Usergroupmemberships
[**usergroupGetAutocompleteV2**](ObjectUsergroupApi.md#usergroupGetAutocompleteV2) | **GET** /2/object/usergroup/getAutocomplete/{sSelector} | Retrieve Usergroups and IDs
[**usergroupGetListV1**](ObjectUsergroupApi.md#usergroupGetListV1) | **GET** /1/object/usergroup/getList | Retrieve Usergroup list
[**usergroupGetObjectV2**](ObjectUsergroupApi.md#usergroupGetObjectV2) | **GET** /2/object/usergroup/{pkiUsergroupID} | Retrieve an existing Usergroup
[**usergroupGetPermissionsV1**](ObjectUsergroupApi.md#usergroupGetPermissionsV1) | **GET** /1/object/usergroup/{pkiUsergroupID}/getPermissions | Retrieve an existing Usergroup&#39;s Permissions
[**usergroupGetUsergroupdelegationsV1**](ObjectUsergroupApi.md#usergroupGetUsergroupdelegationsV1) | **GET** /1/object/usergroup/{pkiUsergroupID}/getUsergroupdelegations | Retrieve an existing Usergroup&#39;s Usergroupdelegations
[**usergroupGetUsergroupmembershipsV1**](ObjectUsergroupApi.md#usergroupGetUsergroupmembershipsV1) | **GET** /1/object/usergroup/{pkiUsergroupID}/getUsergroupmemberships | Retrieve an existing Usergroup&#39;s Usergroupmemberships



## usergroupCreateObjectV1

> UsergroupCreateObjectV1Response usergroupCreateObjectV1(UsergroupCreateObjectV1Request)

Create a new Usergroup

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let UsergroupCreateObjectV1Request = new EZmaxApiDefinitionFull.UsergroupCreateObjectV1Request(); // UsergroupCreateObjectV1Request | 
apiInstance.usergroupCreateObjectV1(UsergroupCreateObjectV1Request, (error, data, response) => {
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
 **UsergroupCreateObjectV1Request** | [**UsergroupCreateObjectV1Request**](UsergroupCreateObjectV1Request.md)|  | 

### Return type

[**UsergroupCreateObjectV1Response**](UsergroupCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupEditObjectV1

> UsergroupEditObjectV1Response usergroupEditObjectV1(pkiUsergroupID, UsergroupEditObjectV1Request)

Edit an existing Usergroup



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let pkiUsergroupID = 56; // Number | 
let UsergroupEditObjectV1Request = new EZmaxApiDefinitionFull.UsergroupEditObjectV1Request(); // UsergroupEditObjectV1Request | 
apiInstance.usergroupEditObjectV1(pkiUsergroupID, UsergroupEditObjectV1Request, (error, data, response) => {
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
 **pkiUsergroupID** | **Number**|  | 
 **UsergroupEditObjectV1Request** | [**UsergroupEditObjectV1Request**](UsergroupEditObjectV1Request.md)|  | 

### Return type

[**UsergroupEditObjectV1Response**](UsergroupEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupEditPermissionsV1

> UsergroupEditPermissionsV1Response usergroupEditPermissionsV1(pkiUsergroupID, UsergroupEditPermissionsV1Request)

Edit multiple Permissions

Using this endpoint, you can edit multiple Permissions at the same time.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let pkiUsergroupID = 56; // Number | 
let UsergroupEditPermissionsV1Request = new EZmaxApiDefinitionFull.UsergroupEditPermissionsV1Request(); // UsergroupEditPermissionsV1Request | 
apiInstance.usergroupEditPermissionsV1(pkiUsergroupID, UsergroupEditPermissionsV1Request, (error, data, response) => {
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
 **pkiUsergroupID** | **Number**|  | 
 **UsergroupEditPermissionsV1Request** | [**UsergroupEditPermissionsV1Request**](UsergroupEditPermissionsV1Request.md)|  | 

### Return type

[**UsergroupEditPermissionsV1Response**](UsergroupEditPermissionsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupEditUsergroupdelegationsV1

> UsergroupEditUsergroupdelegationsV1Response usergroupEditUsergroupdelegationsV1(pkiUsergroupID, UsergroupEditUsergroupdelegationsV1Request)

Edit multiple Usergroupdelegations

Edit multiple Usergroupdelegations

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let pkiUsergroupID = 56; // Number | 
let UsergroupEditUsergroupdelegationsV1Request = new EZmaxApiDefinitionFull.UsergroupEditUsergroupdelegationsV1Request(); // UsergroupEditUsergroupdelegationsV1Request | 
apiInstance.usergroupEditUsergroupdelegationsV1(pkiUsergroupID, UsergroupEditUsergroupdelegationsV1Request, (error, data, response) => {
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
 **pkiUsergroupID** | **Number**|  | 
 **UsergroupEditUsergroupdelegationsV1Request** | [**UsergroupEditUsergroupdelegationsV1Request**](UsergroupEditUsergroupdelegationsV1Request.md)|  | 

### Return type

[**UsergroupEditUsergroupdelegationsV1Response**](UsergroupEditUsergroupdelegationsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupEditUsergroupmembershipsV1

> UsergroupEditUsergroupmembershipsV1Response usergroupEditUsergroupmembershipsV1(pkiUsergroupID, UsergroupEditUsergroupmembershipsV1Request)

Edit multiple Usergroupmemberships

Using this endpoint, you can edit multiple Usergroupmemberships at the same time.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let pkiUsergroupID = 56; // Number | 
let UsergroupEditUsergroupmembershipsV1Request = new EZmaxApiDefinitionFull.UsergroupEditUsergroupmembershipsV1Request(); // UsergroupEditUsergroupmembershipsV1Request | 
apiInstance.usergroupEditUsergroupmembershipsV1(pkiUsergroupID, UsergroupEditUsergroupmembershipsV1Request, (error, data, response) => {
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
 **pkiUsergroupID** | **Number**|  | 
 **UsergroupEditUsergroupmembershipsV1Request** | [**UsergroupEditUsergroupmembershipsV1Request**](UsergroupEditUsergroupmembershipsV1Request.md)|  | 

### Return type

[**UsergroupEditUsergroupmembershipsV1Response**](UsergroupEditUsergroupmembershipsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## usergroupGetAutocompleteV2

> UsergroupGetAutocompleteV2Response usergroupGetAutocompleteV2(sSelector, opts)

Retrieve Usergroups and IDs

Get the list of Usergroup to be used in a dropdown or autocomplete control.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let sSelector = "sSelector_example"; // String | The type of Usergroups to return
let opts = {
  'eFilterActive': "'Active'", // String | Specify which results we want to display.
  'sQuery': "sQuery_example", // String | Allow to filter the returned results
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage() // HeaderAcceptLanguage | 
};
apiInstance.usergroupGetAutocompleteV2(sSelector, opts, (error, data, response) => {
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
 **sSelector** | **String**| The type of Usergroups to return | 
 **eFilterActive** | **String**| Specify which results we want to display. | [optional] [default to &#39;Active&#39;]
 **sQuery** | **String**| Allow to filter the returned results | [optional] 
 **Accept_Language** | [**HeaderAcceptLanguage**](.md)|  | [optional] 

### Return type

[**UsergroupGetAutocompleteV2Response**](UsergroupGetAutocompleteV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupGetListV1

> UsergroupGetListV1Response usergroupGetListV1(opts)

Retrieve Usergroup list



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let opts = {
  'eOrderBy': "eOrderBy_example", // String | Specify how you want the results to be sorted
  'iRowMax': 10000, // Number | 
  'iRowOffset': 0, // Number | 
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage(), // HeaderAcceptLanguage | 
  'sFilter': "sFilter_example" // String | 
};
apiInstance.usergroupGetListV1(opts, (error, data, response) => {
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

[**UsergroupGetListV1Response**](UsergroupGetListV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet


## usergroupGetObjectV2

> UsergroupGetObjectV2Response usergroupGetObjectV2(pkiUsergroupID)

Retrieve an existing Usergroup



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let pkiUsergroupID = 56; // Number | 
apiInstance.usergroupGetObjectV2(pkiUsergroupID, (error, data, response) => {
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
 **pkiUsergroupID** | **Number**|  | 

### Return type

[**UsergroupGetObjectV2Response**](UsergroupGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupGetPermissionsV1

> UsergroupGetPermissionsV1Response usergroupGetPermissionsV1(pkiUsergroupID)

Retrieve an existing Usergroup&#39;s Permissions

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let pkiUsergroupID = 56; // Number | 
apiInstance.usergroupGetPermissionsV1(pkiUsergroupID, (error, data, response) => {
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
 **pkiUsergroupID** | **Number**|  | 

### Return type

[**UsergroupGetPermissionsV1Response**](UsergroupGetPermissionsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupGetUsergroupdelegationsV1

> UsergroupGetUsergroupdelegationsV1Response usergroupGetUsergroupdelegationsV1(pkiUsergroupID)

Retrieve an existing Usergroup&#39;s Usergroupdelegations

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let pkiUsergroupID = 56; // Number | 
apiInstance.usergroupGetUsergroupdelegationsV1(pkiUsergroupID, (error, data, response) => {
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
 **pkiUsergroupID** | **Number**|  | 

### Return type

[**UsergroupGetUsergroupdelegationsV1Response**](UsergroupGetUsergroupdelegationsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usergroupGetUsergroupmembershipsV1

> UsergroupGetUsergroupmembershipsV1Response usergroupGetUsergroupmembershipsV1(pkiUsergroupID)

Retrieve an existing Usergroup&#39;s Usergroupmemberships

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectUsergroupApi();
let pkiUsergroupID = 56; // Number | 
apiInstance.usergroupGetUsergroupmembershipsV1(pkiUsergroupID, (error, data, response) => {
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
 **pkiUsergroupID** | **Number**|  | 

### Return type

[**UsergroupGetUsergroupmembershipsV1Response**](UsergroupGetUsergroupmembershipsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

