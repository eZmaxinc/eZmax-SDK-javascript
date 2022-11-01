/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload
 * @version 1.1.14
 */
class EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload</code>.
     * Payload for PUT /1/object/ezsigntemplatepackage/{pkiEzsigntemplatepackageID}/editEzsigntemplatepackagesigners
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload
     * @param a_pkiEzsigntemplatepackagesignerID {Array.<Number>} 
     */
    constructor(a_pkiEzsigntemplatepackagesignerID) { 
        
        EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload.initialize(this, a_pkiEzsigntemplatepackagesignerID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_pkiEzsigntemplatepackagesignerID) { 
        obj['a_pkiEzsigntemplatepackagesignerID'] = a_pkiEzsigntemplatepackagesignerID;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload} The populated <code>EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload();

            if (data.hasOwnProperty('a_pkiEzsigntemplatepackagesignerID')) {
                obj['a_pkiEzsigntemplatepackagesignerID'] = ApiClient.convertToType(data['a_pkiEzsigntemplatepackagesignerID'], ['Number']);
            }
        }
        return obj;
    }

/**
     * @return {Array.<Number>}
     */
    getAPkiEzsigntemplatepackagesignerID() {
        return this.a_pkiEzsigntemplatepackagesignerID;
    }

    /**
     * @param {Array.<Number>} a_pkiEzsigntemplatepackagesignerID
     */
    setAPkiEzsigntemplatepackagesignerID(a_pkiEzsigntemplatepackagesignerID) {
        this['a_pkiEzsigntemplatepackagesignerID'] = a_pkiEzsigntemplatepackagesignerID;
    }

}

/**
 * @member {Array.<Number>} a_pkiEzsigntemplatepackagesignerID
 */
EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload.prototype['a_pkiEzsigntemplatepackagesignerID'] = undefined;






export default EzsigntemplatepackageEditEzsigntemplatepackagesignersV1ResponseMPayload;

