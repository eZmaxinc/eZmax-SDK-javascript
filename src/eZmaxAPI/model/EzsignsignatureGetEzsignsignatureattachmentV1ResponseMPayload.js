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
import EzsignsignatureattachmentResponse from './EzsignsignatureattachmentResponse';

/**
 * The EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload
 * @version 1.2.0
 */
class EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload</code>.
     * Response for GET /1/object/ezsignsignature/{pkiEzsignsignatureID}/getEzsignsignatureattachment
     * @alias module:eZmaxAPI/model/EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload
     * @param a_objEzsignsignatureattachment {Array.<module:eZmaxAPI/model/EzsignsignatureattachmentResponse>} 
     */
    constructor(a_objEzsignsignatureattachment) { 
        
        EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload.initialize(this, a_objEzsignsignatureattachment);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignsignatureattachment) { 
        obj['a_objEzsignsignatureattachment'] = a_objEzsignsignatureattachment;
    }

    /**
     * Constructs a <code>EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload} The populated <code>EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignsignatureattachment')) {
                obj['a_objEzsignsignatureattachment'] = ApiClient.convertToType(data['a_objEzsignsignatureattachment'], [EzsignsignatureattachmentResponse]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignsignatureattachment']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignsignatureattachment'])) {
                throw new Error("Expected the field `a_objEzsignsignatureattachment` to be an array in the JSON data but got " + data['a_objEzsignsignatureattachment']);
            }
            // validate the optional field `a_objEzsignsignatureattachment` (array)
            for (const item of data['a_objEzsignsignatureattachment']) {
                EzsignsignatureattachmentResponse.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignsignatureattachmentResponse>}
     */
    getAObjEzsignsignatureattachment() {
        return this.a_objEzsignsignatureattachment;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignsignatureattachmentResponse>} a_objEzsignsignatureattachment
     */
    setAObjEzsignsignatureattachment(a_objEzsignsignatureattachment) {
        this['a_objEzsignsignatureattachment'] = a_objEzsignsignatureattachment;
    }

}

EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload.RequiredProperties = ["a_objEzsignsignatureattachment"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignsignatureattachmentResponse>} a_objEzsignsignatureattachment
 */
EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload.prototype['a_objEzsignsignatureattachment'] = undefined;






export default EzsignsignatureGetEzsignsignatureattachmentV1ResponseMPayload;

