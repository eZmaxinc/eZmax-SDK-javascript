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
import CustomCommunicationsenderResponse from './CustomCommunicationsenderResponse';

/**
 * The InscriptionGetCommunicationsendersV1ResponseMPayload model module.
 * @module eZmaxAPI/model/InscriptionGetCommunicationsendersV1ResponseMPayload
 * @version 1.2.0
 */
class InscriptionGetCommunicationsendersV1ResponseMPayload {
    /**
     * Constructs a new <code>InscriptionGetCommunicationsendersV1ResponseMPayload</code>.
     * Response for GET /1/object/inscription/{pkiInscriptionID}/getCommunicationsenders
     * @alias module:eZmaxAPI/model/InscriptionGetCommunicationsendersV1ResponseMPayload
     * @param a_objCommunicationsenders {Array.<module:eZmaxAPI/model/CustomCommunicationsenderResponse>} 
     */
    constructor(a_objCommunicationsenders) { 
        
        InscriptionGetCommunicationsendersV1ResponseMPayload.initialize(this, a_objCommunicationsenders);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objCommunicationsenders) { 
        obj['a_objCommunicationsenders'] = a_objCommunicationsenders;
    }

    /**
     * Constructs a <code>InscriptionGetCommunicationsendersV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/InscriptionGetCommunicationsendersV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/InscriptionGetCommunicationsendersV1ResponseMPayload} The populated <code>InscriptionGetCommunicationsendersV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InscriptionGetCommunicationsendersV1ResponseMPayload();

            if (data.hasOwnProperty('a_objCommunicationsenders')) {
                obj['a_objCommunicationsenders'] = ApiClient.convertToType(data['a_objCommunicationsenders'], [CustomCommunicationsenderResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>InscriptionGetCommunicationsendersV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>InscriptionGetCommunicationsendersV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of InscriptionGetCommunicationsendersV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objCommunicationsenders']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objCommunicationsenders'])) {
                throw new Error("Expected the field `a_objCommunicationsenders` to be an array in the JSON data but got " + data['a_objCommunicationsenders']);
            }
            // validate the optional field `a_objCommunicationsenders` (array)
            for (const item of data['a_objCommunicationsenders']) {
                CustomCommunicationsenderResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CustomCommunicationsenderResponse>}
     */
    getAObjCommunicationsenders() {
        return this.a_objCommunicationsenders;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomCommunicationsenderResponse>} a_objCommunicationsenders
     */
    setAObjCommunicationsenders(a_objCommunicationsenders) {
        this['a_objCommunicationsenders'] = a_objCommunicationsenders;
    }

}

InscriptionGetCommunicationsendersV1ResponseMPayload.RequiredProperties = ["a_objCommunicationsenders"];

/**
 * @member {Array.<module:eZmaxAPI/model/CustomCommunicationsenderResponse>} a_objCommunicationsenders
 */
InscriptionGetCommunicationsendersV1ResponseMPayload.prototype['a_objCommunicationsenders'] = undefined;






export default InscriptionGetCommunicationsendersV1ResponseMPayload;
