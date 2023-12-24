# EZmaxApiDefinitionFull.CustomCommunicationsenderResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fkiAgentID** | **Number** | The unique ID of the Agent. | [optional] 
**fkiBrokerID** | **Number** | The unique ID of the Broker. | [optional] 
**fkiUserID** | **Number** | The unique ID of the User | [optional] 
**fkiMailboxsharedID** | **Number** | The unique ID of the Mailboxshared | [optional] 
**fkiPhonelinesharedID** | **Number** | The unique ID of the Phonelineshared | [optional] 
**eCommunicationsenderObjecttype** | **String** |  | 
**objContactName** | [**CustomContactNameResponse**](CustomContactNameResponse.md) |  | 
**objEmail** | [**EmailResponseCompound**](EmailResponseCompound.md) |  | [optional] 
**objPhoneFax** | [**PhoneResponseCompound**](PhoneResponseCompound.md) |  | [optional] 
**objPhoneSMS** | [**PhoneResponseCompound**](PhoneResponseCompound.md) |  | [optional] 



## Enum: ECommunicationsenderObjecttypeEnum


* `Agent` (value: `"Agent"`)

* `Broker` (value: `"Broker"`)

* `User` (value: `"User"`)

* `Mailboxshared` (value: `"Mailboxshared"`)

* `Phonelineshared` (value: `"Phonelineshared"`)




