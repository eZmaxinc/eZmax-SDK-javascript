# EZmaxApiDefinition.ObjectEzsignbulksendtransmissionApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ezsignbulksendtransmissionGetObjectV1**](ObjectEzsignbulksendtransmissionApi.md#ezsignbulksendtransmissionGetObjectV1) | **GET** /1/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID} | Retrieve an existing Ezsignbulksendtransmission



## ezsignbulksendtransmissionGetObjectV1

> EzsignbulksendtransmissionGetObjectV1Response ezsignbulksendtransmissionGetObjectV1(pkiEzsignbulksendtransmissionID)

Retrieve an existing Ezsignbulksendtransmission



### Example

```javascript
import EZmaxApiDefinition from 'e_zmax_api_definition';
let defaultClient = EZmaxApiDefinition.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinition.ObjectEzsignbulksendtransmissionApi();
let pkiEzsignbulksendtransmissionID = 56; // Number | 
apiInstance.ezsignbulksendtransmissionGetObjectV1(pkiEzsignbulksendtransmissionID, (error, data, response) => {
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
 **pkiEzsignbulksendtransmissionID** | **Number**|  | 

### Return type

[**EzsignbulksendtransmissionGetObjectV1Response**](EzsignbulksendtransmissionGetObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

