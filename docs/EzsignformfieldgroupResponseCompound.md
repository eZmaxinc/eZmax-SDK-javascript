# EZmaxApiDefinition.EzsignformfieldgroupResponseCompound

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiEzsignformfieldgroupID** | **Number** | The unique ID of the Ezsignformfieldgroup | 
**fkiEzsigndocumentID** | **Number** | The unique ID of the Ezsigndocument | 
**eEzsignformfieldgroupType** | [**FieldEEzsignformfieldgroupType**](FieldEEzsignformfieldgroupType.md) |  | 
**eEzsignformfieldgroupSignerrequirement** | [**FieldEEzsignformfieldgroupSignerrequirement**](FieldEEzsignformfieldgroupSignerrequirement.md) |  | 
**sEzsignformfieldgroupLabel** | **String** | The Label for the Ezsignformfieldgroup | 
**iEzsignformfieldgroupStep** | **Number** | The step when the Ezsignsigner will be invited to fill the form fields | 
**sEzsignformfieldgroupDefaultvalue** | **String** | The default value for the Ezsignformfieldgroup | 
**iEzsignformfieldgroupFilledmin** | **Number** | The minimum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup | 
**iEzsignformfieldgroupFilledmax** | **Number** | The maximum number of Ezsignformfield that must be filled in the Ezsignformfieldgroup | 
**bEzsignformfieldgroupReadonly** | **Boolean** | Whether the Ezsignformfieldgroup is read only or not. | 
**iEzsignformfieldgroupMaxlength** | **Number** | The maximum length for the value in the Ezsignformfieldgroup  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea** | [optional] 
**bEzsignformfieldgroupEncrypted** | **Boolean** | Whether the Ezsignformfieldgroup is encrypted in the database or not. Encrypted values are not displayed on the Ezsigndocument. This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea** | [optional] 
**sEzsignformfieldgroupRegexp** | **String** | A regular expression to indicate what values are acceptable for the Ezsignformfieldgroup.  This can only be set if eEzsignformfieldgroupType is **Text** or **Textarea** | [optional] 
**tEzsignformfieldgroupTooltip** | **String** | A tooltip that will be presented to Ezsignsigner about the Ezsignformfieldgroup | [optional] 
**eEzsignformfieldgroupTooltipposition** | [**FieldEEzsignformfieldgroupTooltipposition**](FieldEEzsignformfieldgroupTooltipposition.md) |  | [optional] 
**a_objEzsignformfield** | [**[EzsignformfieldResponseCompound]**](EzsignformfieldResponseCompound.md) |  | 
**a_objDropdownElement** | [**[CustomDropdownElementResponseCompound]**](CustomDropdownElementResponseCompound.md) |  | [optional] 
**a_objEzsignformfieldgroupsigner** | [**EzsignformfieldgroupsignerResponseCompound**](EzsignformfieldgroupsignerResponseCompound.md) |  | 


