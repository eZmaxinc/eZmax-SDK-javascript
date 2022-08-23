# EZmaxApiDefinitionFull.ObjectWebhookApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**webhookCreateObjectV1**](ObjectWebhookApi.md#webhookCreateObjectV1) | **POST** /1/object/webhook | Create a new Webhook
[**webhookDeleteObjectV1**](ObjectWebhookApi.md#webhookDeleteObjectV1) | **DELETE** /1/object/webhook/{pkiWebhookID} | Delete an existing Webhook
[**webhookEditObjectV1**](ObjectWebhookApi.md#webhookEditObjectV1) | **PUT** /1/object/webhook/{pkiWebhookID} | Edit an existing Webhook
[**webhookGetHistoryV1**](ObjectWebhookApi.md#webhookGetHistoryV1) | **GET** /1/object/webhook/{pkiWebhookID}/getHistory | Retrieve the logs for recent Webhook calls
[**webhookGetListV1**](ObjectWebhookApi.md#webhookGetListV1) | **GET** /1/object/webhook/getList | Retrieve Webhook list
[**webhookGetObjectV1**](ObjectWebhookApi.md#webhookGetObjectV1) | **GET** /1/object/webhook/{pkiWebhookID} | Retrieve an existing Webhook
[**webhookTestUrlV1**](ObjectWebhookApi.md#webhookTestUrlV1) | **POST** /1/object/webhook/{pkiWebhookID}/test | Test the Webhook by calling the Url



## webhookCreateObjectV1

> WebhookCreateObjectV1Response webhookCreateObjectV1(WebhookCreateObjectV1Request)

Create a new Webhook

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectWebhookApi();
let WebhookCreateObjectV1Request = new EZmaxApiDefinitionFull.WebhookCreateObjectV1Request(); // WebhookCreateObjectV1Request | 
apiInstance.webhookCreateObjectV1(WebhookCreateObjectV1Request, (error, data, response) => {
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
 **WebhookCreateObjectV1Request** | [**WebhookCreateObjectV1Request**](WebhookCreateObjectV1Request.md)|  | 

### Return type

[**WebhookCreateObjectV1Response**](WebhookCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhookDeleteObjectV1

> WebhookDeleteObjectV1Response webhookDeleteObjectV1(pkiWebhookID)

Delete an existing Webhook



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectWebhookApi();
let pkiWebhookID = 56; // Number | 
apiInstance.webhookDeleteObjectV1(pkiWebhookID, (error, data, response) => {
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
 **pkiWebhookID** | **Number**|  | 

### Return type

[**WebhookDeleteObjectV1Response**](WebhookDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookEditObjectV1

> WebhookEditObjectV1Response webhookEditObjectV1(pkiWebhookID, WebhookEditObjectV1Request)

Edit an existing Webhook



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectWebhookApi();
let pkiWebhookID = 56; // Number | 
let WebhookEditObjectV1Request = new EZmaxApiDefinitionFull.WebhookEditObjectV1Request(); // WebhookEditObjectV1Request | 
apiInstance.webhookEditObjectV1(pkiWebhookID, WebhookEditObjectV1Request, (error, data, response) => {
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
 **pkiWebhookID** | **Number**|  | 
 **WebhookEditObjectV1Request** | [**WebhookEditObjectV1Request**](WebhookEditObjectV1Request.md)|  | 

### Return type

[**WebhookEditObjectV1Response**](WebhookEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## webhookGetHistoryV1

> WebhookGetHistoryV1Response webhookGetHistoryV1(pkiWebhookID, eWebhookHistoryinterval)

Retrieve the logs for recent Webhook calls



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectWebhookApi();
let pkiWebhookID = 56; // Number | 
let eWebhookHistoryinterval = "eWebhookHistoryinterval_example"; // String | The number of days to return
apiInstance.webhookGetHistoryV1(pkiWebhookID, eWebhookHistoryinterval, (error, data, response) => {
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
 **pkiWebhookID** | **Number**|  | 
 **eWebhookHistoryinterval** | **String**| The number of days to return | 

### Return type

[**WebhookGetHistoryV1Response**](WebhookGetHistoryV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookGetListV1

> WebhookGetListV1Response webhookGetListV1(opts)

Retrieve Webhook list

Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eWebhookModule | Ezsign&lt;br&gt;Management | | eWebhookEzsignevent | DocumentCompleted&lt;br&gt;FolderCompleted | | eWebhookManagementevent | UserCreated |

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectWebhookApi();
let opts = {
  'eOrderBy': "eOrderBy_example", // String | Specify how you want the results to be sorted
  'iRowMax': 56, // Number | 
  'iRowOffset': 56, // Number | 
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage(), // HeaderAcceptLanguage | 
  'sFilter': "sFilter_example" // String | 
};
apiInstance.webhookGetListV1(opts, (error, data, response) => {
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

[**WebhookGetListV1Response**](WebhookGetListV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet


## webhookGetObjectV1

> WebhookGetObjectV1Response webhookGetObjectV1(pkiWebhookID)

Retrieve an existing Webhook



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectWebhookApi();
let pkiWebhookID = 56; // Number | 
apiInstance.webhookGetObjectV1(pkiWebhookID, (error, data, response) => {
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
 **pkiWebhookID** | **Number**|  | 

### Return type

[**WebhookGetObjectV1Response**](WebhookGetObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## webhookTestUrlV1

> WebhookTestV1Response webhookTestUrlV1(pkiWebhookID)

Test the Webhook by calling the Url



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectWebhookApi();
let pkiWebhookID = 56; // Number | 
apiInstance.webhookTestUrlV1(pkiWebhookID, (error, data, response) => {
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
 **pkiWebhookID** | **Number**|  | 

### Return type

[**WebhookTestV1Response**](WebhookTestV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

