# EZmaxApiDefinitionFull.WebhookResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pksCustomerCode** | **String** | The customer code assigned to your account | 
**pkiWebhookID** | **Number** | The Webhook ID. This value is visible in the admin interface. | 
**eWebhookModule** | **String** | The Module generating the Event. | 
**eWebhookEzsignevent** | **String** | This Ezsign Event. This property will be set only if the Module is \&quot;Ezsign\&quot;. | [optional] 
**eWebhookManagementevent** | **String** | This Management Event. This property will be set only if the Module is \&quot;Management\&quot;. | [optional] 
**sWebhookUrl** | **String** | The url being called | 
**bWebhookTest** | **Boolean** | Wheter the webhook received is a manual test or a real event | 
**bWebhookSkipsslvalidation** | **Boolean** | Wheter the server&#39;s SSL certificate should be validated or not. Not recommended for production use. | 
**sWebhookEmailfailed** | **String** | The email that will receive the webhook in case all attempts fail. | 



## Enum: EWebhookModuleEnum


* `Ezsign` (value: `"Ezsign"`)

* `Management` (value: `"Management"`)





## Enum: EWebhookEzsigneventEnum


* `DocumentCompleted` (value: `"DocumentCompleted"`)

* `FolderCompleted` (value: `"FolderCompleted"`)





## Enum: EWebhookManagementeventEnum


* `UserCreated` (value: `"UserCreated"`)




