# EZmaxApiDefinitionFull.GlobalCustomerApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**globalCustomerGetEndpointV1**](GlobalCustomerApi.md#globalCustomerGetEndpointV1) | **GET** /1/customer/{pksCustomerCode}/endpoint | Get customer endpoint



## globalCustomerGetEndpointV1

> GlobalCustomerGetEndpointV1Response globalCustomerGetEndpointV1(pksCustomerCode, opts)

Get customer endpoint

Retrieve the customer&#39;s specific server endpoint where to send requests. This will help locate the proper region (ie: sInfrastructureregionCode) and the proper environment (ie: sInfrastructureenvironmenttypeDescription) where the customer&#39;s data is stored.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';

let apiInstance = new EZmaxApiDefinitionFull.GlobalCustomerApi();
let pksCustomerCode = "pksCustomerCode_example"; // String | 
let opts = {
  'sInfrastructureproductCode': "sInfrastructureproductCode_example" // String | The infrastructure product Code  If undefined, \"appcluster01\" is assumed
};
apiInstance.globalCustomerGetEndpointV1(pksCustomerCode, opts, (error, data, response) => {
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
 **pksCustomerCode** | **String**|  | 
 **sInfrastructureproductCode** | **String**| The infrastructure product Code  If undefined, \&quot;appcluster01\&quot; is assumed | [optional] 

### Return type

[**GlobalCustomerGetEndpointV1Response**](GlobalCustomerGetEndpointV1Response.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

