# EZmaxApiDefinitionFull.ObjectEzsignfolderApi

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ezsignfolderArchiveV1**](ObjectEzsignfolderApi.md#ezsignfolderArchiveV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/archive | Archive the Ezsignfolder
[**ezsignfolderBatchDownloadV1**](ObjectEzsignfolderApi.md#ezsignfolderBatchDownloadV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/batchDownload | Download multiples files from an Ezsignfolder
[**ezsignfolderCreateObjectV1**](ObjectEzsignfolderApi.md#ezsignfolderCreateObjectV1) | **POST** /1/object/ezsignfolder | Create a new Ezsignfolder
[**ezsignfolderCreateObjectV2**](ObjectEzsignfolderApi.md#ezsignfolderCreateObjectV2) | **POST** /2/object/ezsignfolder | Create a new Ezsignfolder
[**ezsignfolderDeleteObjectV1**](ObjectEzsignfolderApi.md#ezsignfolderDeleteObjectV1) | **DELETE** /1/object/ezsignfolder/{pkiEzsignfolderID} | Delete an existing Ezsignfolder
[**ezsignfolderDisposeEzsignfoldersV1**](ObjectEzsignfolderApi.md#ezsignfolderDisposeEzsignfoldersV1) | **POST** /1/object/ezsignfolder/disposeEzsignfolders | Dispose Ezsignfolders
[**ezsignfolderDisposeV1**](ObjectEzsignfolderApi.md#ezsignfolderDisposeV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/dispose | Dispose the Ezsignfolder
[**ezsignfolderEditObjectV1**](ObjectEzsignfolderApi.md#ezsignfolderEditObjectV1) | **PUT** /1/object/ezsignfolder/{pkiEzsignfolderID} | Edit an existing Ezsignfolder
[**ezsignfolderGetActionableElementsV1**](ObjectEzsignfolderApi.md#ezsignfolderGetActionableElementsV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getActionableElements | Retrieve actionable elements for the Ezsignfolder
[**ezsignfolderGetCommunicationCountV1**](ObjectEzsignfolderApi.md#ezsignfolderGetCommunicationCountV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getCommunicationCount | Retrieve Communication count
[**ezsignfolderGetCommunicationListV1**](ObjectEzsignfolderApi.md#ezsignfolderGetCommunicationListV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getCommunicationList | Retrieve Communication list
[**ezsignfolderGetEzsigndocumentsV1**](ObjectEzsignfolderApi.md#ezsignfolderGetEzsigndocumentsV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getEzsigndocuments | Retrieve an existing Ezsignfolder&#39;s Ezsigndocuments
[**ezsignfolderGetEzsignfoldersignerassociationsV1**](ObjectEzsignfolderApi.md#ezsignfolderGetEzsignfoldersignerassociationsV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getEzsignfoldersignerassociations | Retrieve an existing Ezsignfolder&#39;s Ezsignfoldersignerassociations
[**ezsignfolderGetEzsignsignaturesAutomaticV1**](ObjectEzsignfolderApi.md#ezsignfolderGetEzsignsignaturesAutomaticV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getEzsignsignaturesAutomatic | Retrieve an existing Ezsignfolder&#39;s automatic Ezsignsignatures
[**ezsignfolderGetFormsDataV1**](ObjectEzsignfolderApi.md#ezsignfolderGetFormsDataV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getFormsData | Retrieve an existing Ezsignfolder&#39;s forms data
[**ezsignfolderGetListV1**](ObjectEzsignfolderApi.md#ezsignfolderGetListV1) | **GET** /1/object/ezsignfolder/getList | Retrieve Ezsignfolder list
[**ezsignfolderGetObjectV1**](ObjectEzsignfolderApi.md#ezsignfolderGetObjectV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID} | Retrieve an existing Ezsignfolder
[**ezsignfolderGetObjectV2**](ObjectEzsignfolderApi.md#ezsignfolderGetObjectV2) | **GET** /2/object/ezsignfolder/{pkiEzsignfolderID} | Retrieve an existing Ezsignfolder
[**ezsignfolderImportEzsignfoldersignerassociationsV1**](ObjectEzsignfolderApi.md#ezsignfolderImportEzsignfoldersignerassociationsV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/importEzsignfoldersignerassociations | Import an existing Ezsignfoldersignerassociation into this Ezsignfolder
[**ezsignfolderImportEzsigntemplatepackageV1**](ObjectEzsignfolderApi.md#ezsignfolderImportEzsigntemplatepackageV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/importEzsigntemplatepackage | Import an Ezsigntemplatepackage in the Ezsignfolder.
[**ezsignfolderReorderV1**](ObjectEzsignfolderApi.md#ezsignfolderReorderV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/reorder | Reorder Ezsigndocuments in the Ezsignfolder
[**ezsignfolderSendV1**](ObjectEzsignfolderApi.md#ezsignfolderSendV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/send | Send the Ezsignfolder to the signatories for signature
[**ezsignfolderSendV2**](ObjectEzsignfolderApi.md#ezsignfolderSendV2) | **POST** /2/object/ezsignfolder/{pkiEzsignfolderID}/send | Send the Ezsignfolder to the signatories for signature
[**ezsignfolderSendV3**](ObjectEzsignfolderApi.md#ezsignfolderSendV3) | **POST** /3/object/ezsignfolder/{pkiEzsignfolderID}/send | Send the Ezsignfolder to the signatories for signature
[**ezsignfolderUnsendV1**](ObjectEzsignfolderApi.md#ezsignfolderUnsendV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/unsend | Unsend the Ezsignfolder



## ezsignfolderArchiveV1

> EzsignfolderArchiveV1Response ezsignfolderArchiveV1(pkiEzsignfolderID, body)

Archive the Ezsignfolder



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let body = {key: null}; // Object | 
apiInstance.ezsignfolderArchiveV1(pkiEzsignfolderID, body, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **body** | **Object**|  | 

### Return type

[**EzsignfolderArchiveV1Response**](EzsignfolderArchiveV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderBatchDownloadV1

> File ezsignfolderBatchDownloadV1(pkiEzsignfolderID, EzsignfolderBatchDownloadV1Request)

Download multiples files from an Ezsignfolder

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let EzsignfolderBatchDownloadV1Request = new EZmaxApiDefinitionFull.EzsignfolderBatchDownloadV1Request(); // EzsignfolderBatchDownloadV1Request | 
apiInstance.ezsignfolderBatchDownloadV1(pkiEzsignfolderID, EzsignfolderBatchDownloadV1Request, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **EzsignfolderBatchDownloadV1Request** | [**EzsignfolderBatchDownloadV1Request**](EzsignfolderBatchDownloadV1Request.md)|  | 

### Return type

**File**

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/zip, application/json


## ezsignfolderCreateObjectV1

> EzsignfolderCreateObjectV1Response ezsignfolderCreateObjectV1(EzsignfolderCreateObjectV1Request)

Create a new Ezsignfolder

The endpoint allows to create one or many elements at once.  The array can contain simple (Just the object) or compound (The object and its child) objects.  Creating compound elements allows to reduce the multiple requests to create all child objects.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let EzsignfolderCreateObjectV1Request = [new EZmaxApiDefinitionFull.EzsignfolderCreateObjectV1Request()]; // [EzsignfolderCreateObjectV1Request] | 
apiInstance.ezsignfolderCreateObjectV1(EzsignfolderCreateObjectV1Request, (error, data, response) => {
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
 **EzsignfolderCreateObjectV1Request** | [**[EzsignfolderCreateObjectV1Request]**](EzsignfolderCreateObjectV1Request.md)|  | 

### Return type

[**EzsignfolderCreateObjectV1Response**](EzsignfolderCreateObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderCreateObjectV2

> EzsignfolderCreateObjectV2Response ezsignfolderCreateObjectV2(EzsignfolderCreateObjectV2Request)

Create a new Ezsignfolder

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let EzsignfolderCreateObjectV2Request = new EZmaxApiDefinitionFull.EzsignfolderCreateObjectV2Request(); // EzsignfolderCreateObjectV2Request | 
apiInstance.ezsignfolderCreateObjectV2(EzsignfolderCreateObjectV2Request, (error, data, response) => {
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
 **EzsignfolderCreateObjectV2Request** | [**EzsignfolderCreateObjectV2Request**](EzsignfolderCreateObjectV2Request.md)|  | 

### Return type

[**EzsignfolderCreateObjectV2Response**](EzsignfolderCreateObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderDeleteObjectV1

> EzsignfolderDeleteObjectV1Response ezsignfolderDeleteObjectV1(pkiEzsignfolderID)

Delete an existing Ezsignfolder

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderDeleteObjectV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderDeleteObjectV1Response**](EzsignfolderDeleteObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderDisposeEzsignfoldersV1

> EzsignfolderDisposeEzsignfoldersV1Response ezsignfolderDisposeEzsignfoldersV1(EzsignfolderDisposeEzsignfoldersV1Request)

Dispose Ezsignfolders



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let EzsignfolderDisposeEzsignfoldersV1Request = new EZmaxApiDefinitionFull.EzsignfolderDisposeEzsignfoldersV1Request(); // EzsignfolderDisposeEzsignfoldersV1Request | 
apiInstance.ezsignfolderDisposeEzsignfoldersV1(EzsignfolderDisposeEzsignfoldersV1Request, (error, data, response) => {
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
 **EzsignfolderDisposeEzsignfoldersV1Request** | [**EzsignfolderDisposeEzsignfoldersV1Request**](EzsignfolderDisposeEzsignfoldersV1Request.md)|  | 

### Return type

[**EzsignfolderDisposeEzsignfoldersV1Response**](EzsignfolderDisposeEzsignfoldersV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderDisposeV1

> EzsignfolderDisposeV1Response ezsignfolderDisposeV1(pkiEzsignfolderID, body)

Dispose the Ezsignfolder



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let body = {key: null}; // Object | 
apiInstance.ezsignfolderDisposeV1(pkiEzsignfolderID, body, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **body** | **Object**|  | 

### Return type

[**EzsignfolderDisposeV1Response**](EzsignfolderDisposeV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderEditObjectV1

> EzsignfolderEditObjectV1Response ezsignfolderEditObjectV1(pkiEzsignfolderID, EzsignfolderEditObjectV1Request)

Edit an existing Ezsignfolder



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let EzsignfolderEditObjectV1Request = new EZmaxApiDefinitionFull.EzsignfolderEditObjectV1Request(); // EzsignfolderEditObjectV1Request | 
apiInstance.ezsignfolderEditObjectV1(pkiEzsignfolderID, EzsignfolderEditObjectV1Request, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **EzsignfolderEditObjectV1Request** | [**EzsignfolderEditObjectV1Request**](EzsignfolderEditObjectV1Request.md)|  | 

### Return type

[**EzsignfolderEditObjectV1Response**](EzsignfolderEditObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderGetActionableElementsV1

> EzsignfolderGetActionableElementsV1Response ezsignfolderGetActionableElementsV1(pkiEzsignfolderID)

Retrieve actionable elements for the Ezsignfolder

Return the Ezsignsignatures that can be signed and Ezsignformfieldgroups that can be filled by the current user at the current step in the process

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetActionableElementsV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetActionableElementsV1Response**](EzsignfolderGetActionableElementsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderGetCommunicationCountV1

> EzsignfolderGetCommunicationCountV1Response ezsignfolderGetCommunicationCountV1(pkiEzsignfolderID)

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

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetCommunicationCountV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetCommunicationCountV1Response**](EzsignfolderGetCommunicationCountV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderGetCommunicationListV1

> EzsignfolderGetCommunicationListV1Response ezsignfolderGetCommunicationListV1(pkiEzsignfolderID)

Retrieve Communication list



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetCommunicationListV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetCommunicationListV1Response**](EzsignfolderGetCommunicationListV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderGetEzsigndocumentsV1

> EzsignfolderGetEzsigndocumentsV1Response ezsignfolderGetEzsigndocumentsV1(pkiEzsignfolderID)

Retrieve an existing Ezsignfolder&#39;s Ezsigndocuments



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetEzsigndocumentsV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetEzsigndocumentsV1Response**](EzsignfolderGetEzsigndocumentsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderGetEzsignfoldersignerassociationsV1

> EzsignfolderGetEzsignfoldersignerassociationsV1Response ezsignfolderGetEzsignfoldersignerassociationsV1(pkiEzsignfolderID)

Retrieve an existing Ezsignfolder&#39;s Ezsignfoldersignerassociations



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetEzsignfoldersignerassociationsV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetEzsignfoldersignerassociationsV1Response**](EzsignfolderGetEzsignfoldersignerassociationsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderGetEzsignsignaturesAutomaticV1

> EzsignfolderGetEzsignsignaturesAutomaticV1Response ezsignfolderGetEzsignsignaturesAutomaticV1(pkiEzsignfolderID)

Retrieve an existing Ezsignfolder&#39;s automatic Ezsignsignatures

Return the Ezsignsignatures that can be signed by the current user at the current step in the process

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetEzsignsignaturesAutomaticV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetEzsignsignaturesAutomaticV1Response**](EzsignfolderGetEzsignsignaturesAutomaticV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderGetFormsDataV1

> EzsignfolderGetFormsDataV1Response ezsignfolderGetFormsDataV1(pkiEzsignfolderID)

Retrieve an existing Ezsignfolder&#39;s forms data



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetFormsDataV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetFormsDataV1Response**](EzsignfolderGetFormsDataV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/zip


## ezsignfolderGetListV1

> EzsignfolderGetListV1Response ezsignfolderGetListV1(opts)

Retrieve Ezsignfolder list

Enum values that can be filtered in query parameter *sFilter*:  | Variable | Valid values | |---|---| | eEzsignfolderStep | Unsent&lt;br&gt;Sent&lt;br&gt;PartiallySigned&lt;br&gt;Expired&lt;br&gt;Completed&lt;br&gt;Archived&lt;br&gt;Disposed| | eEzsignfoldertypePrivacylevel | User&lt;br&gt;Usergroup |

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let opts = {
  'eOrderBy': "eOrderBy_example", // String | Specify how you want the results to be sorted
  'iRowMax': 10000, // Number | 
  'iRowOffset': 0, // Number | 
  'Accept_Language': new EZmaxApiDefinitionFull.HeaderAcceptLanguage(), // HeaderAcceptLanguage | 
  'sFilter': "sFilter_example" // String | 
};
apiInstance.ezsignfolderGetListV1(opts, (error, data, response) => {
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

[**EzsignfolderGetListV1Response**](EzsignfolderGetListV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet


## ezsignfolderGetObjectV1

> EzsignfolderGetObjectV1Response ezsignfolderGetObjectV1(pkiEzsignfolderID)

Retrieve an existing Ezsignfolder

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetObjectV1(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetObjectV1Response**](EzsignfolderGetObjectV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderGetObjectV2

> EzsignfolderGetObjectV2Response ezsignfolderGetObjectV2(pkiEzsignfolderID)

Retrieve an existing Ezsignfolder



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
apiInstance.ezsignfolderGetObjectV2(pkiEzsignfolderID, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 

### Return type

[**EzsignfolderGetObjectV2Response**](EzsignfolderGetObjectV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## ezsignfolderImportEzsignfoldersignerassociationsV1

> EzsignfolderImportEzsignfoldersignerassociationsV1Response ezsignfolderImportEzsignfoldersignerassociationsV1(pkiEzsignfolderID, EzsignfolderImportEzsignfoldersignerassociationsV1Request)

Import an existing Ezsignfoldersignerassociation into this Ezsignfolder



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let EzsignfolderImportEzsignfoldersignerassociationsV1Request = new EZmaxApiDefinitionFull.EzsignfolderImportEzsignfoldersignerassociationsV1Request(); // EzsignfolderImportEzsignfoldersignerassociationsV1Request | 
apiInstance.ezsignfolderImportEzsignfoldersignerassociationsV1(pkiEzsignfolderID, EzsignfolderImportEzsignfoldersignerassociationsV1Request, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **EzsignfolderImportEzsignfoldersignerassociationsV1Request** | [**EzsignfolderImportEzsignfoldersignerassociationsV1Request**](EzsignfolderImportEzsignfoldersignerassociationsV1Request.md)|  | 

### Return type

[**EzsignfolderImportEzsignfoldersignerassociationsV1Response**](EzsignfolderImportEzsignfoldersignerassociationsV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderImportEzsigntemplatepackageV1

> EzsignfolderImportEzsigntemplatepackageV1Response ezsignfolderImportEzsigntemplatepackageV1(pkiEzsignfolderID, EzsignfolderImportEzsigntemplatepackageV1Request)

Import an Ezsigntemplatepackage in the Ezsignfolder.

This endpoint imports all of the Ezsigntemplates from the Ezsigntemplatepackage into the Ezsignfolder as Ezsigndocuments.  This allows to automatically apply all the Ezsigntemplateformfieldgroups and Ezsigntemplatesignatures on the newly created Ezsigndocuments in a single step.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let EzsignfolderImportEzsigntemplatepackageV1Request = new EZmaxApiDefinitionFull.EzsignfolderImportEzsigntemplatepackageV1Request(); // EzsignfolderImportEzsigntemplatepackageV1Request | 
apiInstance.ezsignfolderImportEzsigntemplatepackageV1(pkiEzsignfolderID, EzsignfolderImportEzsigntemplatepackageV1Request, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **EzsignfolderImportEzsigntemplatepackageV1Request** | [**EzsignfolderImportEzsigntemplatepackageV1Request**](EzsignfolderImportEzsigntemplatepackageV1Request.md)|  | 

### Return type

[**EzsignfolderImportEzsigntemplatepackageV1Response**](EzsignfolderImportEzsigntemplatepackageV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderReorderV1

> EzsignfolderReorderV1Response ezsignfolderReorderV1(pkiEzsignfolderID, EzsignfolderReorderV1Request)

Reorder Ezsigndocuments in the Ezsignfolder

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let EzsignfolderReorderV1Request = new EZmaxApiDefinitionFull.EzsignfolderReorderV1Request(); // EzsignfolderReorderV1Request | 
apiInstance.ezsignfolderReorderV1(pkiEzsignfolderID, EzsignfolderReorderV1Request, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **EzsignfolderReorderV1Request** | [**EzsignfolderReorderV1Request**](EzsignfolderReorderV1Request.md)|  | 

### Return type

[**EzsignfolderReorderV1Response**](EzsignfolderReorderV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderSendV1

> EzsignfolderSendV1Response ezsignfolderSendV1(pkiEzsignfolderID, EzsignfolderSendV1Request)

Send the Ezsignfolder to the signatories for signature



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let EzsignfolderSendV1Request = new EZmaxApiDefinitionFull.EzsignfolderSendV1Request(); // EzsignfolderSendV1Request | 
apiInstance.ezsignfolderSendV1(pkiEzsignfolderID, EzsignfolderSendV1Request, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **EzsignfolderSendV1Request** | [**EzsignfolderSendV1Request**](EzsignfolderSendV1Request.md)|  | 

### Return type

[**EzsignfolderSendV1Response**](EzsignfolderSendV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderSendV2

> EzsignfolderSendV2Response ezsignfolderSendV2(pkiEzsignfolderID, EzsignfolderSendV2Request)

Send the Ezsignfolder to the signatories for signature



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let EzsignfolderSendV2Request = new EZmaxApiDefinitionFull.EzsignfolderSendV2Request(); // EzsignfolderSendV2Request | 
apiInstance.ezsignfolderSendV2(pkiEzsignfolderID, EzsignfolderSendV2Request, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **EzsignfolderSendV2Request** | [**EzsignfolderSendV2Request**](EzsignfolderSendV2Request.md)|  | 

### Return type

[**EzsignfolderSendV2Response**](EzsignfolderSendV2Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderSendV3

> EzsignfolderSendV3Response ezsignfolderSendV3(pkiEzsignfolderID, EzsignfolderSendV3Request)

Send the Ezsignfolder to the signatories for signature



### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let EzsignfolderSendV3Request = new EZmaxApiDefinitionFull.EzsignfolderSendV3Request(); // EzsignfolderSendV3Request | 
apiInstance.ezsignfolderSendV3(pkiEzsignfolderID, EzsignfolderSendV3Request, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **EzsignfolderSendV3Request** | [**EzsignfolderSendV3Request**](EzsignfolderSendV3Request.md)|  | 

### Return type

[**EzsignfolderSendV3Response**](EzsignfolderSendV3Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## ezsignfolderUnsendV1

> EzsignfolderUnsendV1Response ezsignfolderUnsendV1(pkiEzsignfolderID, body)

Unsend the Ezsignfolder

Once an Ezsignfolder has been sent to signatories, it cannot be modified.  Using this endpoint, you can unsend the Ezsignfolder and make it modifiable again.  Signatories will receive an email informing them the signature process was aborted and they might receive a new invitation to sign.  ⚠️ Warning: Any signature previously made by signatories on \&quot;Non-completed\&quot; Ezsigndocuments will be lost.

### Example

```javascript
import EZmaxApiDefinitionFull from 'e_zmax_api_definition__full';
let defaultClient = EZmaxApiDefinitionFull.ApiClient.instance;
// Configure API key authorization: Authorization
let Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = 'YOUR API KEY';
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix = 'Token';

let apiInstance = new EZmaxApiDefinitionFull.ObjectEzsignfolderApi();
let pkiEzsignfolderID = 56; // Number | 
let body = {key: null}; // Object | 
apiInstance.ezsignfolderUnsendV1(pkiEzsignfolderID, body, (error, data, response) => {
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
 **pkiEzsignfolderID** | **Number**|  | 
 **body** | **Object**|  | 

### Return type

[**EzsignfolderUnsendV1Response**](EzsignfolderUnsendV1Response.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

