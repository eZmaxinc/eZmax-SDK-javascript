# EZmaxApiDefinition.WebhookResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiWebhookID** | **Number** | The Webhook ID. This value is visible in the admin interface. | 
**eWebhookModule** | **String** | The Module generating the Event. | 
**eWebhookEzsignevent** | **String** | This Ezsign Event. This property will be set only if the Module is \&quot;Ezsign\&quot;. | [optional] 
**pksCustomerCode** | **String** | The Customer Code in which the event was generated | 
**sWebhookUrl** | **String** | The url being called | 
**sWebhookEmailfailed** | **String** | The email that will receive the webhook in case all attempts fail. | 
**eWebhookManagementevent** | **String** | This Management Event. This property will be set only if the Module is \&quot;Management\&quot;. | [optional] 



## Enum: EWebhookModuleEnum


* `Ezsign` (value: `"Ezsign"`)

* `Management` (value: `"Management"`)





## Enum: EWebhookEzsigneventEnum


* `DocumentCompleted` (value: `"DocumentCompleted"`)

* `FolderCompleted` (value: `"FolderCompleted"`)





## Enum: EWebhookManagementeventEnum


* `UserCreated` (value: `"UserCreated"`)




