/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
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
 * The EzsignbulksendGetFormsDataV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload
 * @version 1.1.18
 */
class EzsignbulksendGetFormsDataV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendGetFormsDataV1ResponseMPayload</code>.
     * Payload for GET/1/object/ezsignbulksend/{pkiEzsignbulksendID}/getFormsData
     * @alias module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload
     * @param a_objFormsDataFolder {Array.<module:eZmaxAPI/model/CustomFormsDataFolderResponse>} 
     */
    constructor(a_objFormsDataFolder) { 
        
        EzsignbulksendGetFormsDataV1ResponseMPayload.initialize(this, a_objFormsDataFolder);
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
     * Constructs a <code>EzsignbulksendGetFormsDataV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendGetFormsDataV1ResponseMPayload} The populated <code>EzsignbulksendGetFormsDataV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendGetFormsDataV1ResponseMPayload();

            if (data.hasOwnProperty('a_objFormsDataFolder')) {
                obj['a_objFormsDataFolder'] = ApiClient.convertToType(data['a_objFormsDataFolder'], [CustomFormsDataFolderResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignbulksendGetFormsDataV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksendGetFormsDataV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksendGetFormsDataV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objFormsDataFolder']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objFormsDataFolder'])) {
                throw new Error("Expected the field `a_objFormsDataFolder` to be an array in the JSON data but got " + data['a_objFormsDataFolder']);
            }
            // validate the optional field `a_objFormsDataFolder` (array)
            for (const item of data['a_objFormsDataFolder']) {
                CustomFormsDataFolderResponse.validateJSON(item);
            };
        }

        return true;
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

EzsignbulksendGetFormsDataV1ResponseMPayload.RequiredProperties = ["a_objFormsDataFolder"];

/**
 * @member {Array.<module:eZmaxAPI/model/CustomFormsDataFolderResponse>} a_objFormsDataFolder
 */
EzsignbulksendGetFormsDataV1ResponseMPayload.prototype['a_objFormsDataFolder'] = undefined;






export default EzsignbulksendGetFormsDataV1ResponseMPayload;

