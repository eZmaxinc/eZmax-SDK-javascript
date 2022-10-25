# EZmaxApiDefinitionFull.CustomEzsignfoldersignerassociationActionableElementResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsignfoldersignerassociationID** | **Number** | The unique ID of the Ezsignfoldersignerassociation | 
**fkiEzsignfolderID** | **Number** | The unique ID of the Ezsignfolder | 
**bEzsignfoldersignerassociationReceivecopy** | **Boolean** | If this flag is true. The signatory will receive a copy of every signed Ezsigndocument even if it ain&#39;t required to sign the document. | 
**tEzsignfoldersignerassociationMessage** | **String** | A custom text message that will be added to the email sent. | 
**objUser** | [**EzsignfoldersignerassociationResponseCompoundUser**](EzsignfoldersignerassociationResponseCompoundUser.md) |  | [optional] 
**objEzsignsigner** | [**EzsignsignerResponseCompound**](EzsignsignerResponseCompound.md) |  | [optional] 
**bEzsignfoldersignerassociationHasactionableelementsCurrent** | **Boolean** | Indicates if the Ezsignfoldersignerassociation has actionable elements in the current step | 
**bEzsignfoldersignerassociationHasactionableelementsFuture** | **Boolean** | Indicates if the Ezsignfoldersignerassociation has actionable elements in a future step | [optional] 

