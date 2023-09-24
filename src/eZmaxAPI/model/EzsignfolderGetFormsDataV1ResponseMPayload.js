/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
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
 * The EzsignfolderGetFormsDataV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderGetFormsDataV1ResponseMPayload
 * @version 1.2.0
 */
class EzsignfolderGetFormsDataV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderGetFormsDataV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsignfolder/{pkiEzsigndocument}/getFormsData
     * @alias module:eZmaxAPI/model/EzsignfolderGetFormsDataV1ResponseMPayload
     * @param objFormsDataFolder {module:eZmaxAPI/model/CustomFormsDataFolderResponse} 
     */
    constructor(objFormsDataFolder) { 
        
        EzsignfolderGetFormsDataV1ResponseMPayload.initialize(this, objFormsDataFolder);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objFormsDataFolder) { 
        obj['objFormsDataFolder'] = objFormsDataFolder;
    }

    /**
     * Constructs a <code>EzsignfolderGetFormsDataV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetFormsDataV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetFormsDataV1ResponseMPayload} The populated <code>EzsignfolderGetFormsDataV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetFormsDataV1ResponseMPayload();

            if (data.hasOwnProperty('objFormsDataFolder')) {
                obj['objFormsDataFolder'] = CustomFormsDataFolderResponse.constructFromObject(data['objFormsDataFolder']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderGetFormsDataV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderGetFormsDataV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderGetFormsDataV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objFormsDataFolder`
        if (data['objFormsDataFolder']) { // data not null
          CustomFormsDataFolderResponse.validateJSON(data['objFormsDataFolder']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CustomFormsDataFolderResponse}
     */
    getObjFormsDataFolder() {
        return this.objFormsDataFolder;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomFormsDataFolderResponse} objFormsDataFolder
     */
    setObjFormsDataFolder(objFormsDataFolder) {
        this['objFormsDataFolder'] = objFormsDataFolder;
    }

}

EzsignfolderGetFormsDataV1ResponseMPayload.RequiredProperties = ["objFormsDataFolder"];

/**
 * @member {module:eZmaxAPI/model/CustomFormsDataFolderResponse} objFormsDataFolder
 */
EzsignfolderGetFormsDataV1ResponseMPayload.prototype['objFormsDataFolder'] = undefined;






export default EzsignfolderGetFormsDataV1ResponseMPayload;

