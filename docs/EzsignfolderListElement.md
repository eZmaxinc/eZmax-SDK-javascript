# EZmaxApiDefinitionFull.EzsignfolderListElement

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsignfolderID** | **Number** | The unique ID of the Ezsignfolder | 
**fkiEzsignfoldertypeID** | **Number** | The unique ID of the Ezsignfoldertype. | 
**eEzsignfoldertypePrivacylevel** | [**FieldEEzsignfoldertypePrivacylevel**](FieldEEzsignfoldertypePrivacylevel.md) |  | 
**sEzsignfoldertypeNameX** | **String** | The name of the Ezsignfoldertype in the language of the requester | 
**sEzsignfolderDescription** | **String** | The description of the Ezsignfolder | 
**eEzsignfolderStep** | [**FieldEEzsignfolderStep**](FieldEEzsignfolderStep.md) |  | 
**dtCreatedDate** | **String** | The date and time at which the object was created | 
**dtEzsignfolderDelayedsenddate** | **String** | The date and time at which the Ezsignfolder will be sent in the future. | [optional] 
**dtEzsignfolderSentdate** | **String** | The date and time at which the Ezsignfolder was sent the last time. | [optional] 
**dtEzsignfolderDuedate** | **String** | The maximum date and time at which the Ezsignfolder can be signed. | [optional] 
**iEzsigndocument** | **Number** | The total number of Ezsigndocument in the folder | 
**iEzsigndocumentEdm** | **Number** | The total number of Ezsigndocument in the folder that were saved in the edm system | 
**iEzsignsignature** | **Number** | The total number of signature blocks in all Ezsigndocuments in the folder | 
**iEzsignsignatureSigned** | **Number** | The total number of already signed signature blocks in all Ezsigndocuments in the folder | 
**iEzsignformfieldgroup** | **Number** | The total number of Ezsignformfieldgroup in all Ezsigndocuments in the folder | 
**iEzsignformfieldgroupCompleted** | **Number** | The total number of completed Ezsignformfieldgroup in all Ezsigndocuments in the folder | 
**bEzsignformHasdependencies** | **Boolean** | Whether the Ezsignform/Ezsignsignatures has dependencies or not | [optional] 
**dEzsignfolderCompletedpercentage** | **String** | Whether the Ezsignform/Ezsignsignatures has dependencies or not | 


