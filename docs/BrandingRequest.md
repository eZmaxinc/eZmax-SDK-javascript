# EZmaxApiDefinitionFull.BrandingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pkiBrandingID** | **Number** | The unique ID of the Branding | [optional] 
**objBrandingDescription** | [**MultilingualBrandingDescription**](MultilingualBrandingDescription.md) |  | 
**eBrandingLogo** | [**FieldEBrandingLogo**](FieldEBrandingLogo.md) |  | 
**sBrandingBase64** | **Blob** | The Base64 encoded binary content of the branding logo. This need to match image type selected in eBrandingLogo if you supply an image. If you select &#39;Default&#39;, the logo will be deleted and the default one will be used. | [optional] 
**eBrandingLogointerface** | [**FieldEBrandingLogointerface**](FieldEBrandingLogointerface.md) |  | [optional] 
**sBrandingLogointerfaceBase64** | **Blob** | The Base64 encoded binary content of the branding logo. This need to match image type selected in eBrandingLogointerface if you supply an image. If you select &#39;Default&#39;, the logo will be deleted and the default one will be used. | [optional] 
**iBrandingColortext** | **Number** | The color of the text. This is a RGB color converted into integer | 
**iBrandingColortextlinkbox** | **Number** | The color of the text in the link box. This is a RGB color converted into integer | 
**iBrandingColortextbutton** | **Number** | The color of the text in the button. This is a RGB color converted into integer | 
**iBrandingColorbackground** | **Number** | The color of the background. This is a RGB color converted into integer | 
**iBrandingColorbackgroundbutton** | **Number** | The color of the background of the button. This is a RGB color converted into integer | 
**iBrandingColorbackgroundsmallbox** | **Number** | The color of the background of the small box. This is a RGB color converted into integer | 
**iBrandingInterfacecolor** | **Number** | The color of the interface. This is a RGB color converted into integer | [optional] 
**sBrandingName** | **String** | The name of the Branding  This value will only be set if you wish to overwrite the default name. If you want to keep the default name, leave this property empty | [optional] 
**sEmailAddress** | **String** | The email address. | [optional] 
**bBrandingIsactive** | **Boolean** | Whether the Branding is active or not | 


