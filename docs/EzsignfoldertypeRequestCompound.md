# EZmaxApiDefinitionFull.EzsignfoldertypeRequestCompound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsignfoldertypeID** | **Number** | The unique ID of the Ezsignfoldertype. | [optional] 
**objEzsignfoldertypeName** | [**MultilingualEzsignfoldertypeName**](MultilingualEzsignfoldertypeName.md) |  | 
**fkiBrandingID** | **Number** | The unique ID of the Branding | 
**fkiBillingentityinternalID** | **Number** | The unique ID of the Billingentityinternal. | [optional] 
**fkiUsergroupID** | **Number** | The unique ID of the Usergroup | [optional] 
**fkiUsergroupIDRestricted** | **Number** | The unique ID of the Usergroup | [optional] 
**fkiEzsigntsarequirementID** | **Number** | The unique ID of the Ezsigntsarequirement.  Determine if a Time Stamping Authority should add a timestamp on each of the signature. Valid values:  |Value|Description| |-|-| |1|No. TSA Timestamping will requested. This will make all signatures a lot faster since no round-trip to the TSA server will be required. Timestamping will be made using eZsign server&#39;s time.| |2|Best effort. Timestamping from a Time Stamping Authority will be requested but is not mandatory. In the very improbable case it cannot be completed, the timestamping will be made using eZsign server&#39;s time. **Additional fee applies**| |3|Mandatory. Timestamping from a Time Stamping Authority will be requested and is mandatory. In the very improbable case it cannot be completed, the signature will fail and the user will be asked to retry. **Additional fee applies**| | [optional] 
**sEmailAddressSigned** | **String** | The email address. | [optional] 
**sEmailAddressSummary** | **String** | The email address. | [optional] 
**eEzsignfoldertypePrivacylevel** | [**FieldEEzsignfoldertypePrivacylevel**](FieldEEzsignfoldertypePrivacylevel.md) |  | 
**eEzsignfoldertypeSendreminderfrequency** | [**FieldEEzsignfoldertypeSendreminderfrequency**](FieldEEzsignfoldertypeSendreminderfrequency.md) |  | [optional] 
**iEzsignfoldertypeArchivaldays** | **Number** | The number of days before the archival of Ezsignfolders created using this Ezsignfoldertype | 
**eEzsignfoldertypeDisposal** | [**FieldEEzsignfoldertypeDisposal**](FieldEEzsignfoldertypeDisposal.md) |  | 
**iEzsignfoldertypeDisposaldays** | **Number** | The number of days after the archival before the disposal of the Ezsignfolder | [optional] 
**iEzsignfoldertypeDeadlinedays** | **Number** | The number of days to get all Ezsignsignatures | 
**bEzsignfoldertypeSendattatchmentsigner** | **Boolean** | Whether we send the Ezsigndocument and the proof as attachment in the email | 
**bEzsignfoldertypeSendsignedtodocumentowner** | **Boolean** | Whether we send the signed Ezsigndocument to the Ezsigndocument&#39;s owner | 
**bEzsignfoldertypeSendsignedtofolderowner** | **Boolean** | Whether we send the signed Ezsigndocument to the Ezsignfolder&#39;s owner | 
**bEzsignfoldertypeSendsignedtofullgroup** | **Boolean** | Whether we send the signed Ezsigndocument to the Usergroup that has acces to all Ezsignfolders | [optional] 
**bEzsignfoldertypeSendsignedtolimitedgroup** | **Boolean** | Whether we send the signed Ezsigndocument to the Usergroup that has acces to only their own Ezsignfolders | [optional] 
**bEzsignfoldertypeSendsignedtocolleague** | **Boolean** | Whether we send the signed Ezsigndocument to the colleagues | 
**bEzsignfoldertypeSendsummarytodocumentowner** | **Boolean** | Whether we send the summary to the Ezsigndocument&#39;s owner | 
**bEzsignfoldertypeSendsummarytofolderowner** | **Boolean** | Whether we send the summary to the Ezsignfolder&#39;s owner | 
**bEzsignfoldertypeSendsummarytofullgroup** | **Boolean** | Whether we send the summary to the Usergroup that has acces to all Ezsignfolders | [optional] 
**bEzsignfoldertypeSendsummarytolimitedgroup** | **Boolean** | Whether we send the summary to the Usergroup that has acces to only their own Ezsignfolders | [optional] 
**bEzsignfoldertypeSendsummarytocolleague** | **Boolean** | Whether we send the summary to the colleagues | 
**bEzsignfoldertypeIncludeproofsigner** | **Boolean** | Whether we include the proof with the signed Ezsigndocument for Ezsignsigners | 
**bEzsignfoldertypeIncludeproofuser** | **Boolean** | Whether we include the proof with the signed Ezsigndocument for users | 
**bEzsignfoldertypeIsactive** | **Boolean** | Whether the Ezsignfoldertype is active or not | 
**a_fkiUserIDSigned** | **[Number]** |  | [optional] 
**a_fkiUserIDSummary** | **[Number]** |  | [optional] 

