/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomFormsDataFolderResponse from './CustomFormsDataFolderResponse';

/**
 * The EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload
 * @version 1.1.11
 */
class EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignbulksendtransmission/{pkiEzsignbulksendtransmissionID}/getFormsData
     * @alias module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload
     * @param a_objFormsDataFolder {Array.<module:eZmaxAPI/model/CustomFormsDataFolderResponse>} 
     */
    constructor(a_objFormsDataFolder) { 
        
        EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload.initialize(this, a_objFormsDataFolder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objFormsDataFolder) { 
        obj['a_objFormsDataFolder'] = a_objFormsDataFolder;
    }

    /**
     * Constructs a <code>EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload} The populated <code>EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload();

            if (data.hasOwnProperty('a_objFormsDataFolder')) {
                obj['a_objFormsDataFolder'] = ApiClient.convertToType(data['a_objFormsDataFolder'], [CustomFormsDataFolderResponse]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CustomFormsDataFolderResponse>}
     */
    getAObjFormsDataFolder() {
        return this.a_objFormsDataFolder;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomFormsDataFolderResponse>} a_objFormsDataFolder
     */
    setAObjFormsDataFolder(a_objFormsDataFolder) {
        this['a_objFormsDataFolder'] = a_objFormsDataFolder;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/CustomFormsDataFolderResponse>} a_objFormsDataFolder
 */
EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload.prototype['a_objFormsDataFolder'] = undefined;






export default EzsignbulksendtransmissionGetFormsDataV1ResponseMPayload;

