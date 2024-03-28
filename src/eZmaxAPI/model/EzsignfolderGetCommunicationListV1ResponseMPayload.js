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
import CustomCommunicationListElementResponse from './CustomCommunicationListElementResponse';

/**
 * The EzsignfolderGetCommunicationListV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignfolderGetCommunicationListV1ResponseMPayload
 * @version 1.2.0
 */
class EzsignfolderGetCommunicationListV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignfolderGetCommunicationListV1ResponseMPayload</code>.
     * Response for GET /1/object/ezsignfolder/{pkiEzsignfolderID}/getCommunicationList
     * @alias module:eZmaxAPI/model/EzsignfolderGetCommunicationListV1ResponseMPayload
     * @param a_objCommunication {Array.<module:eZmaxAPI/model/CustomCommunicationListElementResponse>} 
     */
    constructor(a_objCommunication) { 
        
        EzsignfolderGetCommunicationListV1ResponseMPayload.initialize(this, a_objCommunication);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objCommunication) { 
        obj['a_objCommunication'] = a_objCommunication;
    }

    /**
     * Constructs a <code>EzsignfolderGetCommunicationListV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderGetCommunicationListV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderGetCommunicationListV1ResponseMPayload} The populated <code>EzsignfolderGetCommunicationListV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderGetCommunicationListV1ResponseMPayload();

            if (data.hasOwnProperty('a_objCommunication')) {
                obj['a_objCommunication'] = ApiClient.convertToType(data['a_objCommunication'], [CustomCommunicationListElementResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderGetCommunicationListV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderGetCommunicationListV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderGetCommunicationListV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objCommunication']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objCommunication'])) {
                throw new Error("Expected the field `a_objCommunication` to be an array in the JSON data but got " + data['a_objCommunication']);
            }
            // validate the optional field `a_objCommunication` (array)
            for (const item of data['a_objCommunication']) {
                CustomCommunicationListElementResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CustomCommunicationListElementResponse>}
     */
    getAObjCommunication() {
        return this.a_objCommunication;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomCommunicationListElementResponse>} a_objCommunication
     */
    setAObjCommunication(a_objCommunication) {
        this['a_objCommunication'] = a_objCommunication;
    }

}

EzsignfolderGetCommunicationListV1ResponseMPayload.RequiredProperties = ["a_objCommunication"];

/**
 * @member {Array.<module:eZmaxAPI/model/CustomCommunicationListElementResponse>} a_objCommunication
 */
EzsignfolderGetCommunicationListV1ResponseMPayload.prototype['a_objCommunication'] = undefined;






export default EzsignfolderGetCommunicationListV1ResponseMPayload;

