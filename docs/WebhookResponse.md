# EZmaxApiDefinitionFull.WebhookResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiWebhookID** | **Number** | The unique ID of the Webhook | 
**sWebhookDescription** | **String** | The description of the Webhook | 
**fkiEzsignfoldertypeID** | **Number** | The unique ID of the Ezsignfoldertype. | [optional] 
**sEzsignfoldertypeNameX** | **String** | The name of the Ezsignfoldertype in the language of the requester | [optional] 
**eWebhookModule** | [**FieldEWebhookModule**](FieldEWebhookModule.md) |  | 
**eWebhookEzsignevent** | [**FieldEWebhookEzsignevent**](FieldEWebhookEzsignevent.md) |  | [optional] 
**eWebhookManagementevent** | [**FieldEWebhookManagementevent**](FieldEWebhookManagementevent.md) |  | [optional] 
**sWebhookUrl** | **String** | The URL of the Webhook callback | 
**sWebhookEmailfailed** | **String** | The email that will receive the Webhook in case all attempts fail | 
**bWebhookIsactive** | **Boolean** | Whether the Webhook is active or not | [optional] 
**bWebhookSkipsslvalidation** | **Boolean** | Wheter the server&#39;s SSL certificate should be validated or not. Not recommended to skip for production use | 


