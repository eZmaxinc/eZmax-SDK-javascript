/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.9
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload
 * @version 1.1.9
 */
class EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload</code>.
     * Payload for PUT /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/editEzsigntemplateformfieldgroups
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload
     * @param a_pkiEzsigntemplateformfieldgroupID {Array.<Number>} 
     */
    constructor(a_pkiEzsigntemplateformfieldgroupID) { 
        
        EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload.initialize(this, a_pkiEzsigntemplateformfieldgroupID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplateformfieldgroupID) { 
        obj['a_pkiEzsigntemplateformfieldgroupID'] = a_pkiEzsigntemplateformfieldgroupID;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload} The populated <code>EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplateformfieldgroupID')) {
                obj['a_pkiEzsigntemplateformfieldgroupID'] = ApiClient.convertToType(data['a_pkiEzsigntemplateformfieldgroupID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplateformfieldgroupID() {
        return this.a_pkiEzsigntemplateformfieldgroupID;
    }

    /**
     * @param {Array.<Number>} a_pkiEzsigntemplateformfieldgroupID
     */
    setAPkiEzsigntemplateformfieldgroupID(a_pkiEzsigntemplateformfieldgroupID) {
        this['a_pkiEzsigntemplateformfieldgroupID'] = a_pkiEzsigntemplateformfieldgroupID;
    }

}

/**
 * @member {Array.<Number>} a_pkiEzsigntemplateformfieldgroupID
 */
EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload.prototype['a_pkiEzsigntemplateformfieldgroupID'] = undefined;






export default EzsigntemplatedocumentEditEzsigntemplateformfieldgroupsV1ResponseMPayload;

