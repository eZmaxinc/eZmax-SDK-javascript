# EZmaxApiDefinitionFull.BrandingResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiBrandingID** | **Number** | The unique ID of the Branding | 
**fkiEmailID** | **Number** | The unique ID of the Email | [optional] 
**objBrandingDescription** | [**MultilingualBrandingDescription**](MultilingualBrandingDescription.md) |  | 
**sBrandingDescriptionX** | **String** | The Description of the Branding in the language of the requester | 
**sBrandingName** | **String** | The name of the Branding  This value will only be set if you wish to overwrite the default name. If you want to keep the default name, leave this property empty | [optional] 
**sEmailAddress** | **String** | The email address. | [optional] 
**eBrandingLogo** | [**FieldEBrandingLogo**](FieldEBrandingLogo.md) |  | 
**iBrandingColortext** | **Number** | The color of the text. This is a RGB color converted into integer | 
**iBrandingColortextlinkbox** | **Number** | The color of the text in the link box. This is a RGB color converted into integer | 
**iBrandingColortextbutton** | **Number** | The color of the text in the button. This is a RGB color converted into integer | 
**iBrandingColorbackground** | **Number** | The color of the background. This is a RGB color converted into integer | 
**iBrandingColorbackgroundbutton** | **Number** | The color of the background of the button. This is a RGB color converted into integer | 
**iBrandingColorbackgroundsmallbox** | **Number** | The color of the background of the small box. This is a RGB color converted into integer | 
**bBrandingIsactive** | **Boolean** | Whether the Branding is active or not | 


