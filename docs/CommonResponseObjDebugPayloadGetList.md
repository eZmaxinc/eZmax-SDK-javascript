# EZmaxApiDefinition.CommonResponseObjDebugPayloadGetList

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iVersionMin** | **Number** | The minimum version of the function that can be called | 
**iVersionMax** | **Number** | The maximum version of the function that can be called | 
**a_RequiredPermission** | **[Number]** | An array of permissions required to access this function.  If the value \&quot;0\&quot; is present in the array, anyone can call this function.  You must have one of the permission to access the function. You don&#39;t need to have all of them. | 
**a_Filter** | [**CommonResponseFilter**](CommonResponseFilter.md) |  | 
**a_OrderBy** | **{String: String}** | List of available values for *eOrderBy* | 


