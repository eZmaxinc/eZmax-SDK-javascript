# e_zmax_api_definition

EZmaxApiDefinition - JavaScript client for e_zmax_api_definition
This API expose all the functionnalities for the eZmax and eZsign applications.
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 1.1.4
- Package version: 1.1.4
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://www.ezmax.ca/en/contact](https://www.ezmax.ca/en/contact)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install e_zmax_api_definition --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your e_zmax_api_definition from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/ezmaxinc/ezmax-sdk-javascript
then install it via:

```shell
    npm install ezmaxinc/ezmax-sdk-javascript --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var EZmaxApiDefinition = require('e_zmax_api_definition');

var defaultClient = EZmaxApiDefinition.ApiClient.instance;
// Configure API key authorization: Authorization
var Authorization = defaultClient.authentications['Authorization'];
Authorization.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Authorization.apiKeyPrefix['Authorization'] = "Token"

var api = new EZmaxApiDefinition.GlobalCustomerApi()
var pksCustomerCode = "pksCustomerCode_example"; // {String} 
var opts = {
  'sInfrastructureproductCode': "sInfrastructureproductCode_example" // {String} The infrastructure product Code  If undefined, \"appcluster01\" is assumed
};
var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.globalCustomerGetEndpointV1(pksCustomerCode, opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://prod.api.appcluster01.ca-central-1.ezmax.com/rest*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*EZmaxApiDefinition.GlobalCustomerApi* | [**globalCustomerGetEndpointV1**](docs/GlobalCustomerApi.md#globalCustomerGetEndpointV1) | **GET** /1/customer/{pksCustomerCode}/endpoint | Get customer endpoint
*EZmaxApiDefinition.ModuleAuthenticateApi* | [**authenticateAuthenticateV2**](docs/ModuleAuthenticateApi.md#authenticateAuthenticateV2) | **POST** /2/module/authenticate/authenticate/{eSessionType} | Authenticate a user
*EZmaxApiDefinition.ModuleListApi* | [**listGetListpresentationV1**](docs/ModuleListApi.md#listGetListpresentationV1) | **GET** /1/module/list/listpresentation/{sListName} | Get all Listpresentation for a specific list
*EZmaxApiDefinition.ModuleListApi* | [**listSaveListpresentationV1**](docs/ModuleListApi.md#listSaveListpresentationV1) | **POST** /1/module/list/listpresentation/{sListName} | Save all Listpresentation for a specific list
*EZmaxApiDefinition.ModuleSsprApi* | [**ssprResetPasswordRequestV1**](docs/ModuleSsprApi.md#ssprResetPasswordRequestV1) | **POST** /1/module/sspr/resetPasswordRequest | Reset Password Request
*EZmaxApiDefinition.ModuleSsprApi* | [**ssprResetPasswordV1**](docs/ModuleSsprApi.md#ssprResetPasswordV1) | **POST** /1/module/sspr/resetPassword | Reset Password
*EZmaxApiDefinition.ModuleSsprApi* | [**ssprSendUsernamesV1**](docs/ModuleSsprApi.md#ssprSendUsernamesV1) | **POST** /1/module/sspr/sendUsernames | Send username(s)
*EZmaxApiDefinition.ModuleSsprApi* | [**ssprUnlockAccountRequestV1**](docs/ModuleSsprApi.md#ssprUnlockAccountRequestV1) | **POST** /1/module/sspr/unlockAccountRequest | Unlock Account Request
*EZmaxApiDefinition.ModuleSsprApi* | [**ssprUnlockAccountV1**](docs/ModuleSsprApi.md#ssprUnlockAccountV1) | **POST** /1/module/sspr/unlockAccount | Unlock Account
*EZmaxApiDefinition.ModuleSsprApi* | [**ssprValidateTokenV1**](docs/ModuleSsprApi.md#ssprValidateTokenV1) | **POST** /1/module/sspr/validateToken | Validate Token
*EZmaxApiDefinition.ModuleUserApi* | [**userCreateEzsignuserV1**](docs/ModuleUserApi.md#userCreateEzsignuserV1) | **POST** /1/module/user/createezsignuser | Create a new User of type Ezsignuser
*EZmaxApiDefinition.ObjectActivesessionApi* | [**activesessionGetCurrentV1**](docs/ObjectActivesessionApi.md#activesessionGetCurrentV1) | **GET** /1/object/activesession/getCurrent | Get Current Activesession
*EZmaxApiDefinition.ObjectApikeyApi* | [**apikeyCreateObjectV1**](docs/ObjectApikeyApi.md#apikeyCreateObjectV1) | **POST** /1/object/apikey | Create a new Apikey
*EZmaxApiDefinition.ObjectEzsignbulksendApi* | [**ezsignbulksendGetListV1**](docs/ObjectEzsignbulksendApi.md#ezsignbulksendGetListV1) | **GET** /1/object/ezsignbulksend/getList | Retrieve Ezsignbulksend list
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentApplyEzsigntemplateV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentApplyEzsigntemplateV1) | **POST** /1/object/ezsigndocument/{pkiEzsigndocumentID}/applyezsigntemplate | Apply an Ezsign Template to the Ezsigndocument.
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentApplyEzsigntemplateV2**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentApplyEzsigntemplateV2) | **POST** /2/object/ezsigndocument/{pkiEzsigndocumentID}/applyEzsigntemplate | Apply an Ezsign Template to the Ezsigndocument.
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentCreateObjectV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentCreateObjectV1) | **POST** /1/object/ezsigndocument | Create a new Ezsigndocument
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentDeleteObjectV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentDeleteObjectV1) | **DELETE** /1/object/ezsigndocument/{pkiEzsigndocumentID} | Delete an existing Ezsigndocument
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentGetDownloadUrlV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentGetDownloadUrlV1) | **GET** /1/object/ezsigndocument/{pkiEzsigndocumentID}/getDownloadUrl/{eDocumentType} | Retrieve a URL to download documents.
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentGetEzsignpagesV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentGetEzsignpagesV1) | **GET** /1/object/ezsigndocument/{pkiEzsigndocumentID}/getEzsignpages | Retrieve an existing Ezsigndocument&#39;s Ezsignpages
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentGetFormDataV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentGetFormDataV1) | **GET** /1/object/ezsigndocument/{pkiEzsigndocumentID}/getFormData | Retrieve an existing Ezsigndocument&#39;s Form Data
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentGetObjectV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentGetObjectV1) | **GET** /1/object/ezsigndocument/{pkiEzsigndocumentID} | Retrieve an existing Ezsigndocument
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentGetWordsPositionsV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentGetWordsPositionsV1) | **POST** /1/object/ezsigndocument/{pkiEzsigndocumentID}/getWordsPositions | Retrieve positions X,Y of given words from a Ezsigndocument
*EZmaxApiDefinition.ObjectEzsigndocumentApi* | [**ezsigndocumentPatchObjectV1**](docs/ObjectEzsigndocumentApi.md#ezsigndocumentPatchObjectV1) | **PATCH** /1/object/ezsigndocument/{pkiEzsigndocumentID} | Patch an existing Ezsigndocument
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderCreateObjectV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderCreateObjectV1) | **POST** /1/object/ezsignfolder | Create a new Ezsignfolder
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderDeleteObjectV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderDeleteObjectV1) | **DELETE** /1/object/ezsignfolder/{pkiEzsignfolderID} | Delete an existing Ezsignfolder
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderEditObjectV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderEditObjectV1) | **PUT** /1/object/ezsignfolder/{pkiEzsignfolderID} | Modify an existing Ezsignfolder
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderGetEzsigndocumentsV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderGetEzsigndocumentsV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getEzsigndocuments | Retrieve an existing Ezsignfolder&#39;s Ezsigndocuments
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderGetEzsignfoldersignerassociationsV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderGetEzsignfoldersignerassociationsV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getEzsignfoldersignerassociations | Retrieve an existing Ezsignfolder&#39;s Ezsignfoldersignerassociations
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderGetFormsDataV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderGetFormsDataV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID}/getFormsData | Retrieve an existing Ezsignfolder&#39;s forms data
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderGetListV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderGetListV1) | **GET** /1/object/ezsignfolder/getList | Retrieve Ezsignfolder list
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderGetObjectV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderGetObjectV1) | **GET** /1/object/ezsignfolder/{pkiEzsignfolderID} | Retrieve an existing Ezsignfolder
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderSendV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderSendV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/send | Send the Ezsignfolder to the signatories for signature
*EZmaxApiDefinition.ObjectEzsignfolderApi* | [**ezsignfolderUnsendV1**](docs/ObjectEzsignfolderApi.md#ezsignfolderUnsendV1) | **POST** /1/object/ezsignfolder/{pkiEzsignfolderID}/unsend | Unsend the Ezsignfolder
*EZmaxApiDefinition.ObjectEzsignfoldersignerassociationApi* | [**ezsignfoldersignerassociationCreateObjectV1**](docs/ObjectEzsignfoldersignerassociationApi.md#ezsignfoldersignerassociationCreateObjectV1) | **POST** /1/object/ezsignfoldersignerassociation | Create a new Ezsignfoldersignerassociation
*EZmaxApiDefinition.ObjectEzsignfoldersignerassociationApi* | [**ezsignfoldersignerassociationDeleteObjectV1**](docs/ObjectEzsignfoldersignerassociationApi.md#ezsignfoldersignerassociationDeleteObjectV1) | **DELETE** /1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID} | Delete an existing Ezsignfoldersignerassociation
*EZmaxApiDefinition.ObjectEzsignfoldersignerassociationApi* | [**ezsignfoldersignerassociationGetInPersonLoginUrlV1**](docs/ObjectEzsignfoldersignerassociationApi.md#ezsignfoldersignerassociationGetInPersonLoginUrlV1) | **GET** /1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID}/getInPersonLoginUrl | Retrieve a Login Url to allow In-Person signing
*EZmaxApiDefinition.ObjectEzsignfoldersignerassociationApi* | [**ezsignfoldersignerassociationGetObjectV1**](docs/ObjectEzsignfoldersignerassociationApi.md#ezsignfoldersignerassociationGetObjectV1) | **GET** /1/object/ezsignfoldersignerassociation/{pkiEzsignfoldersignerassociationID} | Retrieve an existing Ezsignfoldersignerassociation
*EZmaxApiDefinition.ObjectEzsignfoldertypeApi* | [**ezsignfoldertypeGetAutocompleteV1**](docs/ObjectEzsignfoldertypeApi.md#ezsignfoldertypeGetAutocompleteV1) | **GET** /1/object/ezsignfoldertype/getAutocomplete/{sSelector} | Retrieve Ezsignfoldertypes and IDs
*EZmaxApiDefinition.ObjectEzsignfoldertypeApi* | [**ezsignfoldertypeGetListV1**](docs/ObjectEzsignfoldertypeApi.md#ezsignfoldertypeGetListV1) | **GET** /1/object/ezsignfoldertype/getList | Retrieve Ezsignfoldertype list
*EZmaxApiDefinition.ObjectEzsignsignatureApi* | [**ezsignsignatureCreateObjectV1**](docs/ObjectEzsignsignatureApi.md#ezsignsignatureCreateObjectV1) | **POST** /1/object/ezsignsignature | Create a new Ezsignsignature
*EZmaxApiDefinition.ObjectEzsignsignatureApi* | [**ezsignsignatureDeleteObjectV1**](docs/ObjectEzsignsignatureApi.md#ezsignsignatureDeleteObjectV1) | **DELETE** /1/object/ezsignsignature/{pkiEzsignsignatureID} | Delete an existing Ezsignsignature
*EZmaxApiDefinition.ObjectEzsignsignatureApi* | [**ezsignsignatureGetObjectV1**](docs/ObjectEzsignsignatureApi.md#ezsignsignatureGetObjectV1) | **GET** /1/object/ezsignsignature/{pkiEzsignsignatureID} | Retrieve an existing Ezsignsignature
*EZmaxApiDefinition.ObjectEzsigntemplatepackageApi* | [**ezsigntemplatepackageGetListV1**](docs/ObjectEzsigntemplatepackageApi.md#ezsigntemplatepackageGetListV1) | **GET** /1/object/ezsigntemplatepackage/getList | Retrieve Ezsigntemplatepackage list
*EZmaxApiDefinition.ObjectFranchisebrokerApi* | [**franchisebrokerGetAutocompleteV1**](docs/ObjectFranchisebrokerApi.md#franchisebrokerGetAutocompleteV1) | **GET** /1/object/franchisebroker/getAutocomplete/{sSelector} | Retrieve Franchisebrokers and IDs
*EZmaxApiDefinition.ObjectFranchiseofficeApi* | [**franchiseofficeGetAutocompleteV1**](docs/ObjectFranchiseofficeApi.md#franchiseofficeGetAutocompleteV1) | **GET** /1/object/franchiseoffice/getAutocomplete/{sSelector} | Retrieve Franchiseoffices and IDs
*EZmaxApiDefinition.ObjectFranchisereferalincomeApi* | [**franchisereferalincomeCreateObjectV1**](docs/ObjectFranchisereferalincomeApi.md#franchisereferalincomeCreateObjectV1) | **POST** /1/object/franchisereferalincome | Create a new Franchisereferalincome
*EZmaxApiDefinition.ObjectPeriodApi* | [**periodGetAutocompleteV1**](docs/ObjectPeriodApi.md#periodGetAutocompleteV1) | **GET** /1/object/period/getAutocomplete/{sSelector} | Retrieve Periods and IDs


## Documentation for Models

 - [EZmaxApiDefinition.ActivesessionGetCurrentV1Response](docs/ActivesessionGetCurrentV1Response.md)
 - [EZmaxApiDefinition.ActivesessionGetCurrentV1ResponseAllOf](docs/ActivesessionGetCurrentV1ResponseAllOf.md)
 - [EZmaxApiDefinition.ActivesessionGetCurrentV1ResponseMPayload](docs/ActivesessionGetCurrentV1ResponseMPayload.md)
 - [EZmaxApiDefinition.ActivesessionResponse](docs/ActivesessionResponse.md)
 - [EZmaxApiDefinition.ActivesessionResponseCompound](docs/ActivesessionResponseCompound.md)
 - [EZmaxApiDefinition.ActivesessionResponseCompoundAllOf](docs/ActivesessionResponseCompoundAllOf.md)
 - [EZmaxApiDefinition.ActivesessionResponseCompoundApikey](docs/ActivesessionResponseCompoundApikey.md)
 - [EZmaxApiDefinition.ActivesessionResponseCompoundUser](docs/ActivesessionResponseCompoundUser.md)
 - [EZmaxApiDefinition.AddressRequest](docs/AddressRequest.md)
 - [EZmaxApiDefinition.ApikeyCreateObjectV1Request](docs/ApikeyCreateObjectV1Request.md)
 - [EZmaxApiDefinition.ApikeyCreateObjectV1Response](docs/ApikeyCreateObjectV1Response.md)
 - [EZmaxApiDefinition.ApikeyCreateObjectV1ResponseAllOf](docs/ApikeyCreateObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.ApikeyCreateObjectV1ResponseMPayload](docs/ApikeyCreateObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.ApikeyRequest](docs/ApikeyRequest.md)
 - [EZmaxApiDefinition.ApikeyRequestCompound](docs/ApikeyRequestCompound.md)
 - [EZmaxApiDefinition.ApikeyResponse](docs/ApikeyResponse.md)
 - [EZmaxApiDefinition.AttemptResponse](docs/AttemptResponse.md)
 - [EZmaxApiDefinition.AuthenticateAuthenticateV2Request](docs/AuthenticateAuthenticateV2Request.md)
 - [EZmaxApiDefinition.AuthenticateAuthenticateV2Response](docs/AuthenticateAuthenticateV2Response.md)
 - [EZmaxApiDefinition.AuthenticateAuthenticateV2ResponseAllOf](docs/AuthenticateAuthenticateV2ResponseAllOf.md)
 - [EZmaxApiDefinition.AuthenticateAuthenticateV2ResponseMPayload](docs/AuthenticateAuthenticateV2ResponseMPayload.md)
 - [EZmaxApiDefinition.CommonAudit](docs/CommonAudit.md)
 - [EZmaxApiDefinition.CommonGetAutocompleteV1Response](docs/CommonGetAutocompleteV1Response.md)
 - [EZmaxApiDefinition.CommonGetAutocompleteV1ResponseAllOf](docs/CommonGetAutocompleteV1ResponseAllOf.md)
 - [EZmaxApiDefinition.CommonGetListV1ResponseMPayload](docs/CommonGetListV1ResponseMPayload.md)
 - [EZmaxApiDefinition.CommonResponse](docs/CommonResponse.md)
 - [EZmaxApiDefinition.CommonResponseError](docs/CommonResponseError.md)
 - [EZmaxApiDefinition.CommonResponseErrorSTemporaryFileUrl](docs/CommonResponseErrorSTemporaryFileUrl.md)
 - [EZmaxApiDefinition.CommonResponseErrorSTemporaryFileUrlAllOf](docs/CommonResponseErrorSTemporaryFileUrlAllOf.md)
 - [EZmaxApiDefinition.CommonResponseFilter](docs/CommonResponseFilter.md)
 - [EZmaxApiDefinition.CommonResponseGetList](docs/CommonResponseGetList.md)
 - [EZmaxApiDefinition.CommonResponseObjDebug](docs/CommonResponseObjDebug.md)
 - [EZmaxApiDefinition.CommonResponseObjDebugPayload](docs/CommonResponseObjDebugPayload.md)
 - [EZmaxApiDefinition.CommonResponseObjDebugPayloadGetList](docs/CommonResponseObjDebugPayloadGetList.md)
 - [EZmaxApiDefinition.CommonResponseObjDebugPayloadGetListAllOf](docs/CommonResponseObjDebugPayloadGetListAllOf.md)
 - [EZmaxApiDefinition.CommonResponseObjSQLQuery](docs/CommonResponseObjSQLQuery.md)
 - [EZmaxApiDefinition.CommonWebhook](docs/CommonWebhook.md)
 - [EZmaxApiDefinition.ContactRequest](docs/ContactRequest.md)
 - [EZmaxApiDefinition.ContactRequestCompound](docs/ContactRequestCompound.md)
 - [EZmaxApiDefinition.ContactRequestCompoundAllOf](docs/ContactRequestCompoundAllOf.md)
 - [EZmaxApiDefinition.ContactinformationsRequest](docs/ContactinformationsRequest.md)
 - [EZmaxApiDefinition.ContactinformationsRequestCompound](docs/ContactinformationsRequestCompound.md)
 - [EZmaxApiDefinition.ContactinformationsRequestCompoundAllOf](docs/ContactinformationsRequestCompoundAllOf.md)
 - [EZmaxApiDefinition.CustomAutocompleteElementResponse](docs/CustomAutocompleteElementResponse.md)
 - [EZmaxApiDefinition.CustomEzsignfoldersignerassociationstatusResponse](docs/CustomEzsignfoldersignerassociationstatusResponse.md)
 - [EZmaxApiDefinition.CustomEzsignsignaturestatusResponse](docs/CustomEzsignsignaturestatusResponse.md)
 - [EZmaxApiDefinition.CustomFormDataDocumentResponse](docs/CustomFormDataDocumentResponse.md)
 - [EZmaxApiDefinition.CustomFormDataSignerResponse](docs/CustomFormDataSignerResponse.md)
 - [EZmaxApiDefinition.CustomFormsDataFolderResponse](docs/CustomFormsDataFolderResponse.md)
 - [EZmaxApiDefinition.CustomWordPositionOccurenceResponse](docs/CustomWordPositionOccurenceResponse.md)
 - [EZmaxApiDefinition.CustomWordPositionWordResponse](docs/CustomWordPositionWordResponse.md)
 - [EZmaxApiDefinition.EmailRequest](docs/EmailRequest.md)
 - [EZmaxApiDefinition.EzsignbulksendGetListV1Response](docs/EzsignbulksendGetListV1Response.md)
 - [EZmaxApiDefinition.EzsignbulksendGetListV1ResponseAllOf](docs/EzsignbulksendGetListV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignbulksendGetListV1ResponseMPayload](docs/EzsignbulksendGetListV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignbulksendGetListV1ResponseMPayloadAllOf](docs/EzsignbulksendGetListV1ResponseMPayloadAllOf.md)
 - [EZmaxApiDefinition.EzsignbulksendListElement](docs/EzsignbulksendListElement.md)
 - [EZmaxApiDefinition.EzsigndocumentApplyEzsigntemplateV1Request](docs/EzsigndocumentApplyEzsigntemplateV1Request.md)
 - [EZmaxApiDefinition.EzsigndocumentApplyEzsigntemplateV1Response](docs/EzsigndocumentApplyEzsigntemplateV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentApplyEzsigntemplateV2Request](docs/EzsigndocumentApplyEzsigntemplateV2Request.md)
 - [EZmaxApiDefinition.EzsigndocumentApplyEzsigntemplateV2Response](docs/EzsigndocumentApplyEzsigntemplateV2Response.md)
 - [EZmaxApiDefinition.EzsigndocumentCreateObjectV1Request](docs/EzsigndocumentCreateObjectV1Request.md)
 - [EZmaxApiDefinition.EzsigndocumentCreateObjectV1Response](docs/EzsigndocumentCreateObjectV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentCreateObjectV1ResponseAllOf](docs/EzsigndocumentCreateObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsigndocumentCreateObjectV1ResponseMPayload](docs/EzsigndocumentCreateObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsigndocumentDeleteObjectV1Response](docs/EzsigndocumentDeleteObjectV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentGetDownloadUrlV1Response](docs/EzsigndocumentGetDownloadUrlV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentGetDownloadUrlV1ResponseAllOf](docs/EzsigndocumentGetDownloadUrlV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsigndocumentGetDownloadUrlV1ResponseMPayload](docs/EzsigndocumentGetDownloadUrlV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsigndocumentGetEzsignpagesV1Response](docs/EzsigndocumentGetEzsignpagesV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentGetEzsignpagesV1ResponseAllOf](docs/EzsigndocumentGetEzsignpagesV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsigndocumentGetEzsignpagesV1ResponseMPayload](docs/EzsigndocumentGetEzsignpagesV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsigndocumentGetFormDataV1Response](docs/EzsigndocumentGetFormDataV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentGetFormDataV1ResponseAllOf](docs/EzsigndocumentGetFormDataV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsigndocumentGetFormDataV1ResponseMPayload](docs/EzsigndocumentGetFormDataV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsigndocumentGetObjectV1Response](docs/EzsigndocumentGetObjectV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentGetObjectV1ResponseAllOf](docs/EzsigndocumentGetObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsigndocumentGetObjectV1ResponseMPayload](docs/EzsigndocumentGetObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsigndocumentGetWordsPositionsV1Request](docs/EzsigndocumentGetWordsPositionsV1Request.md)
 - [EZmaxApiDefinition.EzsigndocumentGetWordsPositionsV1Response](docs/EzsigndocumentGetWordsPositionsV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentGetWordsPositionsV1ResponseAllOf](docs/EzsigndocumentGetWordsPositionsV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsigndocumentPatchObjectV1Request](docs/EzsigndocumentPatchObjectV1Request.md)
 - [EZmaxApiDefinition.EzsigndocumentPatchObjectV1Response](docs/EzsigndocumentPatchObjectV1Response.md)
 - [EZmaxApiDefinition.EzsigndocumentRequest](docs/EzsigndocumentRequest.md)
 - [EZmaxApiDefinition.EzsigndocumentRequestCompound](docs/EzsigndocumentRequestCompound.md)
 - [EZmaxApiDefinition.EzsigndocumentRequestPatch](docs/EzsigndocumentRequestPatch.md)
 - [EZmaxApiDefinition.EzsigndocumentResponse](docs/EzsigndocumentResponse.md)
 - [EZmaxApiDefinition.EzsigndocumentResponseCompound](docs/EzsigndocumentResponseCompound.md)
 - [EZmaxApiDefinition.EzsigndocumentResponseCompoundAllOf](docs/EzsigndocumentResponseCompoundAllOf.md)
 - [EZmaxApiDefinition.EzsignfolderCreateObjectV1Request](docs/EzsignfolderCreateObjectV1Request.md)
 - [EZmaxApiDefinition.EzsignfolderCreateObjectV1Response](docs/EzsignfolderCreateObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderCreateObjectV1ResponseAllOf](docs/EzsignfolderCreateObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfolderCreateObjectV1ResponseMPayload](docs/EzsignfolderCreateObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfolderDeleteObjectV1Response](docs/EzsignfolderDeleteObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderEditObjectV1Request](docs/EzsignfolderEditObjectV1Request.md)
 - [EZmaxApiDefinition.EzsignfolderEditObjectV1Response](docs/EzsignfolderEditObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderGetEzsigndocumentsV1Response](docs/EzsignfolderGetEzsigndocumentsV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderGetEzsigndocumentsV1ResponseAllOf](docs/EzsignfolderGetEzsigndocumentsV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfolderGetEzsigndocumentsV1ResponseMPayload](docs/EzsignfolderGetEzsigndocumentsV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1Response](docs/EzsignfolderGetEzsignfoldersignerassociationsV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1ResponseAllOf](docs/EzsignfolderGetEzsignfoldersignerassociationsV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload](docs/EzsignfolderGetEzsignfoldersignerassociationsV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfolderGetFormsDataV1Response](docs/EzsignfolderGetFormsDataV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderGetFormsDataV1ResponseAllOf](docs/EzsignfolderGetFormsDataV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfolderGetFormsDataV1ResponseMPayload](docs/EzsignfolderGetFormsDataV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfolderGetListV1Response](docs/EzsignfolderGetListV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderGetListV1ResponseAllOf](docs/EzsignfolderGetListV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfolderGetListV1ResponseMPayload](docs/EzsignfolderGetListV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfolderGetListV1ResponseMPayloadAllOf](docs/EzsignfolderGetListV1ResponseMPayloadAllOf.md)
 - [EZmaxApiDefinition.EzsignfolderGetObjectV1Response](docs/EzsignfolderGetObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseAllOf](docs/EzsignfolderGetObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfolderGetObjectV1ResponseMPayload](docs/EzsignfolderGetObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfolderListElement](docs/EzsignfolderListElement.md)
 - [EZmaxApiDefinition.EzsignfolderRequest](docs/EzsignfolderRequest.md)
 - [EZmaxApiDefinition.EzsignfolderRequestCompound](docs/EzsignfolderRequestCompound.md)
 - [EZmaxApiDefinition.EzsignfolderResponse](docs/EzsignfolderResponse.md)
 - [EZmaxApiDefinition.EzsignfolderResponseCompound](docs/EzsignfolderResponseCompound.md)
 - [EZmaxApiDefinition.EzsignfolderSendV1Request](docs/EzsignfolderSendV1Request.md)
 - [EZmaxApiDefinition.EzsignfolderSendV1Response](docs/EzsignfolderSendV1Response.md)
 - [EZmaxApiDefinition.EzsignfolderUnsendV1Response](docs/EzsignfolderUnsendV1Response.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationCreateObjectV1Request](docs/EzsignfoldersignerassociationCreateObjectV1Request.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationCreateObjectV1Response](docs/EzsignfoldersignerassociationCreateObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationCreateObjectV1ResponseAllOf](docs/EzsignfoldersignerassociationCreateObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationCreateObjectV1ResponseMPayload](docs/EzsignfoldersignerassociationCreateObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationDeleteObjectV1Response](docs/EzsignfoldersignerassociationDeleteObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationGetInPersonLoginUrlV1Response](docs/EzsignfoldersignerassociationGetInPersonLoginUrlV1Response.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseAllOf](docs/EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload](docs/EzsignfoldersignerassociationGetInPersonLoginUrlV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationGetObjectV1Response](docs/EzsignfoldersignerassociationGetObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationGetObjectV1ResponseAllOf](docs/EzsignfoldersignerassociationGetObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationGetObjectV1ResponseMPayload](docs/EzsignfoldersignerassociationGetObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationRequest](docs/EzsignfoldersignerassociationRequest.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationRequestCompound](docs/EzsignfoldersignerassociationRequestCompound.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationRequestCompoundAllOf](docs/EzsignfoldersignerassociationRequestCompoundAllOf.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationResponse](docs/EzsignfoldersignerassociationResponse.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationResponseCompound](docs/EzsignfoldersignerassociationResponseCompound.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationResponseCompoundAllOf](docs/EzsignfoldersignerassociationResponseCompoundAllOf.md)
 - [EZmaxApiDefinition.EzsignfoldersignerassociationResponseCompoundUser](docs/EzsignfoldersignerassociationResponseCompoundUser.md)
 - [EZmaxApiDefinition.EzsignfoldertypeGetListV1Response](docs/EzsignfoldertypeGetListV1Response.md)
 - [EZmaxApiDefinition.EzsignfoldertypeGetListV1ResponseAllOf](docs/EzsignfoldertypeGetListV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignfoldertypeGetListV1ResponseMPayload](docs/EzsignfoldertypeGetListV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignfoldertypeGetListV1ResponseMPayloadAllOf](docs/EzsignfoldertypeGetListV1ResponseMPayloadAllOf.md)
 - [EZmaxApiDefinition.EzsignfoldertypeListElement](docs/EzsignfoldertypeListElement.md)
 - [EZmaxApiDefinition.EzsignformfieldResponse](docs/EzsignformfieldResponse.md)
 - [EZmaxApiDefinition.EzsignformfieldResponseCompound](docs/EzsignformfieldResponseCompound.md)
 - [EZmaxApiDefinition.EzsignformfieldgroupResponse](docs/EzsignformfieldgroupResponse.md)
 - [EZmaxApiDefinition.EzsignformfieldgroupResponseCompound](docs/EzsignformfieldgroupResponseCompound.md)
 - [EZmaxApiDefinition.EzsignformfieldgroupResponseCompoundAllOf](docs/EzsignformfieldgroupResponseCompoundAllOf.md)
 - [EZmaxApiDefinition.EzsignpageResponse](docs/EzsignpageResponse.md)
 - [EZmaxApiDefinition.EzsignsignatureCreateObjectV1Request](docs/EzsignsignatureCreateObjectV1Request.md)
 - [EZmaxApiDefinition.EzsignsignatureCreateObjectV1Response](docs/EzsignsignatureCreateObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignsignatureCreateObjectV1ResponseAllOf](docs/EzsignsignatureCreateObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignsignatureCreateObjectV1ResponseMPayload](docs/EzsignsignatureCreateObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsignsignatureDeleteObjectV1Response](docs/EzsignsignatureDeleteObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignsignatureGetObjectV1Response](docs/EzsignsignatureGetObjectV1Response.md)
 - [EZmaxApiDefinition.EzsignsignatureGetObjectV1ResponseAllOf](docs/EzsignsignatureGetObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsignsignatureRequest](docs/EzsignsignatureRequest.md)
 - [EZmaxApiDefinition.EzsignsignatureRequestCompound](docs/EzsignsignatureRequestCompound.md)
 - [EZmaxApiDefinition.EzsignsignatureRequestCompoundAllOf](docs/EzsignsignatureRequestCompoundAllOf.md)
 - [EZmaxApiDefinition.EzsignsignaturecustomdateRequest](docs/EzsignsignaturecustomdateRequest.md)
 - [EZmaxApiDefinition.EzsignsignerRequest](docs/EzsignsignerRequest.md)
 - [EZmaxApiDefinition.EzsignsignerRequestCompound](docs/EzsignsignerRequestCompound.md)
 - [EZmaxApiDefinition.EzsignsignerRequestCompoundAllOf](docs/EzsignsignerRequestCompoundAllOf.md)
 - [EZmaxApiDefinition.EzsignsignerRequestCompoundContact](docs/EzsignsignerRequestCompoundContact.md)
 - [EZmaxApiDefinition.EzsignsignerResponse](docs/EzsignsignerResponse.md)
 - [EZmaxApiDefinition.EzsignsignerResponseCompound](docs/EzsignsignerResponseCompound.md)
 - [EZmaxApiDefinition.EzsignsignerResponseCompoundAllOf](docs/EzsignsignerResponseCompoundAllOf.md)
 - [EZmaxApiDefinition.EzsignsignerResponseCompoundContact](docs/EzsignsignerResponseCompoundContact.md)
 - [EZmaxApiDefinition.EzsigntemplatepackageGetListV1Response](docs/EzsigntemplatepackageGetListV1Response.md)
 - [EZmaxApiDefinition.EzsigntemplatepackageGetListV1ResponseAllOf](docs/EzsigntemplatepackageGetListV1ResponseAllOf.md)
 - [EZmaxApiDefinition.EzsigntemplatepackageGetListV1ResponseMPayload](docs/EzsigntemplatepackageGetListV1ResponseMPayload.md)
 - [EZmaxApiDefinition.EzsigntemplatepackageGetListV1ResponseMPayloadAllOf](docs/EzsigntemplatepackageGetListV1ResponseMPayloadAllOf.md)
 - [EZmaxApiDefinition.EzsigntemplatepackageListElement](docs/EzsigntemplatepackageListElement.md)
 - [EZmaxApiDefinition.FieldEActivesessionSessiontype](docs/FieldEActivesessionSessiontype.md)
 - [EZmaxApiDefinition.FieldEActivesessionWeekdaystart](docs/FieldEActivesessionWeekdaystart.md)
 - [EZmaxApiDefinition.FieldEEzsigndocumentStep](docs/FieldEEzsigndocumentStep.md)
 - [EZmaxApiDefinition.FieldEEzsignfolderSendreminderfrequency](docs/FieldEEzsignfolderSendreminderfrequency.md)
 - [EZmaxApiDefinition.FieldEEzsignfolderStep](docs/FieldEEzsignfolderStep.md)
 - [EZmaxApiDefinition.FieldEEzsignfoldertypePrivacylevel](docs/FieldEEzsignfoldertypePrivacylevel.md)
 - [EZmaxApiDefinition.FieldEEzsignsignatureType](docs/FieldEEzsignsignatureType.md)
 - [EZmaxApiDefinition.FieldEEzsigntemplatepackageType](docs/FieldEEzsigntemplatepackageType.md)
 - [EZmaxApiDefinition.FieldEPhoneType](docs/FieldEPhoneType.md)
 - [EZmaxApiDefinition.FieldEUserType](docs/FieldEUserType.md)
 - [EZmaxApiDefinition.FieldEUserTypeSSPR](docs/FieldEUserTypeSSPR.md)
 - [EZmaxApiDefinition.FranchisereferalincomeCreateObjectV1Request](docs/FranchisereferalincomeCreateObjectV1Request.md)
 - [EZmaxApiDefinition.FranchisereferalincomeCreateObjectV1Response](docs/FranchisereferalincomeCreateObjectV1Response.md)
 - [EZmaxApiDefinition.FranchisereferalincomeCreateObjectV1ResponseAllOf](docs/FranchisereferalincomeCreateObjectV1ResponseAllOf.md)
 - [EZmaxApiDefinition.FranchisereferalincomeCreateObjectV1ResponseMPayload](docs/FranchisereferalincomeCreateObjectV1ResponseMPayload.md)
 - [EZmaxApiDefinition.FranchisereferalincomeRequest](docs/FranchisereferalincomeRequest.md)
 - [EZmaxApiDefinition.FranchisereferalincomeRequestCompound](docs/FranchisereferalincomeRequestCompound.md)
 - [EZmaxApiDefinition.FranchisereferalincomeRequestCompoundAllOf](docs/FranchisereferalincomeRequestCompoundAllOf.md)
 - [EZmaxApiDefinition.GlobalCustomerGetEndpointV1Response](docs/GlobalCustomerGetEndpointV1Response.md)
 - [EZmaxApiDefinition.HeaderAcceptLanguage](docs/HeaderAcceptLanguage.md)
 - [EZmaxApiDefinition.ListGetListpresentationV1Response](docs/ListGetListpresentationV1Response.md)
 - [EZmaxApiDefinition.ListGetListpresentationV1ResponseAllOf](docs/ListGetListpresentationV1ResponseAllOf.md)
 - [EZmaxApiDefinition.ListGetListpresentationV1ResponseMPayload](docs/ListGetListpresentationV1ResponseMPayload.md)
 - [EZmaxApiDefinition.ListSaveListpresentationV1Request](docs/ListSaveListpresentationV1Request.md)
 - [EZmaxApiDefinition.ListSaveListpresentationV1Response](docs/ListSaveListpresentationV1Response.md)
 - [EZmaxApiDefinition.ListpresentationRequest](docs/ListpresentationRequest.md)
 - [EZmaxApiDefinition.MultilingualApikeyDescription](docs/MultilingualApikeyDescription.md)
 - [EZmaxApiDefinition.PhoneRequest](docs/PhoneRequest.md)
 - [EZmaxApiDefinition.SsprResetPasswordRequestV1Request](docs/SsprResetPasswordRequestV1Request.md)
 - [EZmaxApiDefinition.SsprResetPasswordV1Request](docs/SsprResetPasswordV1Request.md)
 - [EZmaxApiDefinition.SsprSendUsernamesV1Request](docs/SsprSendUsernamesV1Request.md)
 - [EZmaxApiDefinition.SsprUnlockAccountRequestV1Request](docs/SsprUnlockAccountRequestV1Request.md)
 - [EZmaxApiDefinition.SsprUnlockAccountV1Request](docs/SsprUnlockAccountV1Request.md)
 - [EZmaxApiDefinition.SsprValidateTokenV1Request](docs/SsprValidateTokenV1Request.md)
 - [EZmaxApiDefinition.UNUSEDEzsigndocumentEditObjectV1Request](docs/UNUSEDEzsigndocumentEditObjectV1Request.md)
 - [EZmaxApiDefinition.UNUSEDEzsigndocumentEditObjectV1Response](docs/UNUSEDEzsigndocumentEditObjectV1Response.md)
 - [EZmaxApiDefinition.UNUSEDEzsignfolderEditObjectV1Request](docs/UNUSEDEzsignfolderEditObjectV1Request.md)
 - [EZmaxApiDefinition.UNUSEDEzsignfolderEditObjectV1Response](docs/UNUSEDEzsignfolderEditObjectV1Response.md)
 - [EZmaxApiDefinition.UNUSEDEzsignfoldersignerassociationEditObjectV1Request](docs/UNUSEDEzsignfoldersignerassociationEditObjectV1Request.md)
 - [EZmaxApiDefinition.UNUSEDEzsignfoldersignerassociationEditObjectV1Response](docs/UNUSEDEzsignfoldersignerassociationEditObjectV1Response.md)
 - [EZmaxApiDefinition.UNUSEDEzsignsignatureEditObjectV1Request](docs/UNUSEDEzsignsignatureEditObjectV1Request.md)
 - [EZmaxApiDefinition.UNUSEDEzsignsignatureEditObjectV1Response](docs/UNUSEDEzsignsignatureEditObjectV1Response.md)
 - [EZmaxApiDefinition.UserCreateEzsignuserV1Request](docs/UserCreateEzsignuserV1Request.md)
 - [EZmaxApiDefinition.UserCreateEzsignuserV1Response](docs/UserCreateEzsignuserV1Response.md)
 - [EZmaxApiDefinition.UserCreateEzsignuserV1ResponseAllOf](docs/UserCreateEzsignuserV1ResponseAllOf.md)
 - [EZmaxApiDefinition.UserCreateEzsignuserV1ResponseMPayload](docs/UserCreateEzsignuserV1ResponseMPayload.md)
 - [EZmaxApiDefinition.UserResponse](docs/UserResponse.md)
 - [EZmaxApiDefinition.WebhookEzsignDocumentCompleted](docs/WebhookEzsignDocumentCompleted.md)
 - [EZmaxApiDefinition.WebhookEzsignDocumentCompletedAllOf](docs/WebhookEzsignDocumentCompletedAllOf.md)
 - [EZmaxApiDefinition.WebhookEzsignFolderCompleted](docs/WebhookEzsignFolderCompleted.md)
 - [EZmaxApiDefinition.WebhookEzsignFolderCompletedAllOf](docs/WebhookEzsignFolderCompletedAllOf.md)
 - [EZmaxApiDefinition.WebhookResponse](docs/WebhookResponse.md)
 - [EZmaxApiDefinition.WebhookUserUserCreated](docs/WebhookUserUserCreated.md)
 - [EZmaxApiDefinition.WebhookUserUserCreatedAllOf](docs/WebhookUserUserCreatedAllOf.md)
 - [EZmaxApiDefinition.WebsiteRequest](docs/WebsiteRequest.md)


## Documentation for Authorization



### Authorization


- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

