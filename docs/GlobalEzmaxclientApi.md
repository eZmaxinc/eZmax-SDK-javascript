# EZmaxApiDefinitionFull.GlobalEzmaxclientApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalEzmaxclientVersionV1**](GlobalEzmaxclientApi.md#globalEzmaxclientVersionV1) | **GET** /1/ezmaxclient/{pksEzmaxclientOs}/version | Retrieve the latest version of the Ezmaxclient



## globalEzmaxclientVersionV1

> GlobalEzmaxclientVersionV1Response globalEzmaxclientVersionV1(pksEzmaxclientOs)

Retrieve the latest version of the Ezmaxclient

Retrieve the latest version of the Ezmaxclient that is available on the store.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';

let apiInstance = new EZmaxApiDefinitionFull.GlobalEzmaxclientApi();
let pksEzmaxclientOs = new EZmaxApiDefinitionFull.FieldPksEzmaxclientOs(); // FieldPksEzmaxclientOs | 
apiInstance.globalEzmaxclientVersionV1(pksEzmaxclientOs, (error, data, response) => {
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
 **pksEzmaxclientOs** | [**FieldPksEzmaxclientOs**](.md)|  | 

### Return type

[**GlobalEzmaxclientVersionV1Response**](GlobalEzmaxclientVersionV1Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

