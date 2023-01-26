# EZmaxApiDefinitionFull.ModuleCommunicationApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**communicationGetCommunicationCountV1**](ModuleCommunicationApi.md#communicationGetCommunicationCountV1) | **GET** /1/module/communication/getCount | Retrieve Communication count



## communicationGetCommunicationCountV1

> CommunicationGetCountV1Response communicationGetCommunicationCountV1(eCommunicationObjecttype, opts)

Retrieve Communication count



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ModuleCommunicationApi();
let eCommunicationObjecttype = "eCommunicationObjecttype_example"; // String | The object type for the Communication
let opts = {
  'pkiEzsignfolderID': 56 // Number | The unique ID of the Ezsignfolder
};
apiInstance.communicationGetCommunicationCountV1(eCommunicationObjecttype, opts, (error, data, response) => {
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
 **eCommunicationObjecttype** | **String**| The object type for the Communication | 
 **pkiEzsignfolderID** | **Number**| The unique ID of the Ezsignfolder | [optional] 

### Return type

[**CommunicationGetCountV1Response**](CommunicationGetCountV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

