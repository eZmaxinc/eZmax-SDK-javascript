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
import EzsignpageResponseCompound from './EzsignpageResponseCompound';

/**
 * The EzsigndocumentGetEzsignpagesV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseMPayload
 * @version 1.1.18
 */
class EzsigndocumentGetEzsignpagesV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigndocumentGetEzsignpagesV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigndocument/{pkiEzsigndocument}/getEzsignpages
     * @alias module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseMPayload
     * @param a_objEzsignpage {Array.<module:eZmaxAPI/model/EzsignpageResponseCompound>} 
     */
    constructor(a_objEzsignpage) { 
        
        EzsigndocumentGetEzsignpagesV1ResponseMPayload.initialize(this, a_objEzsignpage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignpage) { 
        obj['a_objEzsignpage'] = a_objEzsignpage;
    }

    /**
     * Constructs a <code>EzsigndocumentGetEzsignpagesV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentGetEzsignpagesV1ResponseMPayload} The populated <code>EzsigndocumentGetEzsignpagesV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentGetEzsignpagesV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsignpage')) {
                obj['a_objEzsignpage'] = ApiClient.convertToType(data['a_objEzsignpage'], [EzsignpageResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentGetEzsignpagesV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentGetEzsignpagesV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentGetEzsignpagesV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignpage']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignpage'])) {
                throw new Error("Expected the field `a_objEzsignpage` to be an array in the JSON data but got " + data['a_objEzsignpage']);
            }
            // validate the optional field `a_objEzsignpage` (array)
            for (const item of data['a_objEzsignpage']) {
                EzsignpageResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignpageResponseCompound>}
     */
    getAObjEzsignpage() {
        return this.a_objEzsignpage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignpageResponseCompound>} a_objEzsignpage
     */
    setAObjEzsignpage(a_objEzsignpage) {
        this['a_objEzsignpage'] = a_objEzsignpage;
    }

}

EzsigndocumentGetEzsignpagesV1ResponseMPayload.RequiredProperties = ["a_objEzsignpage"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignpageResponseCompound>} a_objEzsignpage
 */
EzsigndocumentGetEzsignpagesV1ResponseMPayload.prototype['a_objEzsignpage'] = undefined;






export default EzsigndocumentGetEzsignpagesV1ResponseMPayload;

