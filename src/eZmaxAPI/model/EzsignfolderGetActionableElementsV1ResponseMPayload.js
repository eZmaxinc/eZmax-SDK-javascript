/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsignformfieldgroupResponseCompound from './EzsignformfieldgroupResponseCompound';
import EzsignsignatureResponseCompound from './EzsignsignatureResponseCompound';

/**
 * The EzsignfolderGetActionableElementsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderGetActionableElementsV1ResponseMPayload
 * @version 1.1.13
 */
class EzsignfolderGetActionableElementsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderGetActionableElementsV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignfolder/{pkiEzsignfolderID}/getActionableElements
     * @alias module:eZmaxAPI/model/EzsignfolderGetActionableElementsV1ResponseMPayload
     * @param a_objEzsignsignature {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>} 
     * @param a_objEzsignformfieldgroup {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>} 
     */
    constructor(a_objEzsignsignature, a_objEzsignformfieldgroup) { 
        
        EzsignfolderGetActionableElementsV1ResponseMPayload.initialize(this, a_objEzsignsignature, a_objEzsignformfieldgroup);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignsignature, a_objEzsignformfieldgroup) { 
        obj['a_objEzsignsignature'] = a_objEzsignsignature;
        obj['a_objEzsignformfieldgroup'] = a_objEzsignformfieldgroup;
    }

    /**
     * Constructs a <code>EzsignfolderGetActionableElementsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetActionableElementsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetActionableElementsV1ResponseMPayload} The populated <code>EzsignfolderGetActionableElementsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetActionableElementsV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignsignature')) {
                obj['a_objEzsignsignature'] = ApiClient.convertToType(data['a_objEzsignsignature'], [EzsignsignatureResponseCompound]);
            }
            if (data.hasOwnProperty('a_objEzsignformfieldgroup')) {
                obj['a_objEzsignformfieldgroup'] = ApiClient.convertToType(data['a_objEzsignformfieldgroup'], [EzsignformfieldgroupResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>}
     */
    getAObjEzsignsignature() {
        return this.a_objEzsignsignature;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>} a_objEzsignsignature
     */
    setAObjEzsignsignature(a_objEzsignsignature) {
        this['a_objEzsignsignature'] = a_objEzsignsignature;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>}
     */
    getAObjEzsignformfieldgroup() {
        return this.a_objEzsignformfieldgroup;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>} a_objEzsignformfieldgroup
     */
    setAObjEzsignformfieldgroup(a_objEzsignformfieldgroup) {
        this['a_objEzsignformfieldgroup'] = a_objEzsignformfieldgroup;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignsignatureResponseCompound>} a_objEzsignsignature
 */
EzsignfolderGetActionableElementsV1ResponseMPayload.prototype['a_objEzsignsignature'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignformfieldgroupResponseCompound>} a_objEzsignformfieldgroup
 */
EzsignfolderGetActionableElementsV1ResponseMPayload.prototype['a_objEzsignformfieldgroup'] = undefined;






export default EzsignfolderGetActionableElementsV1ResponseMPayload;

