# EZmaxApiDefinitionFull.GlobalEzmaxcustomerApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalEzmaxcustomerGetConfigurationV1**](GlobalEzmaxcustomerApi.md#globalEzmaxcustomerGetConfigurationV1) | **GET** /1/ezmaxcustomer/{pksEzmaxcustomerCode}/getConfiguration | Get ezmaxcustomer configuration



## globalEzmaxcustomerGetConfigurationV1

> GlobalEzmaxcustomerGetConfigurationV1Response globalEzmaxcustomerGetConfigurationV1(pksEzmaxcustomerCode)

Get ezmaxcustomer configuration

Retrieve the ezmaxcustomer&#39;s specific configuration. This will help locate the proper region (ie: sInfrastructureregionCode) and the proper environment (ie: sInfrastructureenvironmenttypeDescription) where the customer&#39;s data is stored.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.GlobalEzmaxcustomerApi();
let pksEzmaxcustomerCode = "pksEzmaxcustomerCode_example"; // String | 
apiInstance.globalEzmaxcustomerGetConfigurationV1(pksEzmaxcustomerCode, (error, data, response) => {
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
 **pksEzmaxcustomerCode** | **String**|  | 

### Return type

[**GlobalEzmaxcustomerGetConfigurationV1Response**](GlobalEzmaxcustomerGetConfigurationV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

