/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigndocumentResponseCompound from './EzsigndocumentResponseCompound';

/**
 * The EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload
 * @version 1.1.7
 */
class EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsignfolder/{pkiEzsignfolderID}/importEzsigntemplatepackage
     * @alias module:eZmaxAPI/model/EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload
     * @param a_objEzsigndocument {Array.<module:eZmaxAPI/model/EzsigndocumentResponseCompound>} 
     */
    constructor(a_objEzsigndocument) { 
        
        EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload.initialize(this, a_objEzsigndocument);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigndocument) { 
        obj['a_objEzsigndocument'] = a_objEzsigndocument;
    }

    /**
     * Constructs a <code>EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload} The populated <code>EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigndocument')) {
                obj['a_objEzsigndocument'] = ApiClient.convertToType(data['a_objEzsigndocument'], [EzsigndocumentResponseCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigndocumentResponseCompound>}
     */
    getAObjEzsigndocument() {
        return this.a_objEzsigndocument;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigndocumentResponseCompound>} a_objEzsigndocument
     */
    setAObjEzsigndocument(a_objEzsigndocument) {
        this['a_objEzsigndocument'] = a_objEzsigndocument;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigndocumentResponseCompound>} a_objEzsigndocument
 */
EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload.prototype['a_objEzsigndocument'] = undefined;






export default EzsignfolderImportEzsigntemplatepackageV1ResponseMPayload;
