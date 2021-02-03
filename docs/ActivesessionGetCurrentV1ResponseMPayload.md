# EZmaxApiDefinition.ActivesessionGetCurrentV1ResponseMPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sCustomerCode** | **String** | The customer code specific to the client in which the API request is being made | 
**eActivesessionSessiontype** | **String** | The type of session used for the API request call | 
**fkiLanguageID** | **Number** | The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English| | 
**sCompanyNameX** | **String** | The name of the active Company in the current language | 
**sDepartmentNameX** | **String** | The name of the active Department in the current language | 
**a_RegisteredModules** | **[String]** | An Array of Registered modules.  These are the modules that are Licensed to be used by the User or the API Key. | 
**a_Permissions** | **[Number]** | An array of permissions granted to the user or api key | 



## Enum: EActivesessionSessiontypeEnum


* `Normal` (value: `"Normal"`)




