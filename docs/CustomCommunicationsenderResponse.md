# EZmaxApiDefinitionFull.CustomCommunicationsenderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fkiAgentID** | **Number** | The unique ID of the Agent. | [optional] 
**fkiBrokerID** | **Number** | The unique ID of the Broker. | [optional] 
**fkiUserID** | **Number** | The unique ID of the User | [optional] 
**fkiMailboxsharedID** | **Number** | The unique ID of the Mailboxshared | [optional] 
**eCommunicationsenderObjecttype** | **String** |  | 
**objContactName** | [**CustomContactNameResponse**](CustomContactNameResponse.md) |  | 
**sEmailAddress** | **String** | The email address. | [optional] 
**sPhoneE164** | **String** | A phone number in E.164 Format | [optional] 



## Enum: ECommunicationsenderObjecttypeEnum


* `Agent` (value: `"Agent"`)

* `Broker` (value: `"Broker"`)

* `User` (value: `"User"`)

* `Mailboxshared` (value: `"Mailboxshared"`)




