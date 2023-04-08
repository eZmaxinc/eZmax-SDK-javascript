/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplatedocumentpageResponseCompound from './EzsigntemplatedocumentpageResponseCompound';

/**
 * The EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload
 * @version 1.1.17
 */
class EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload</code>.
     * Payload for GET /1/object/ezsigntemplatedocument/{pkiEzsigntemplatedocumentID}/getEzsigntemplatedocumentpages
     * @alias module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload
     * @param a_objEzsigntemplatedocumentpage {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentpageResponseCompound>} 
     */
    constructor(a_objEzsigntemplatedocumentpage) { 
        
        EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload.initialize(this, a_objEzsigntemplatedocumentpage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsigntemplatedocumentpage) { 
        obj['a_objEzsigntemplatedocumentpage'] = a_objEzsigntemplatedocumentpage;
    }

    /**
     * Constructs a <code>EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload} The populated <code>EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload();

            if (data.hasOwnProperty('a_objEzsigntemplatedocumentpage')) {
                obj['a_objEzsigntemplatedocumentpage'] = ApiClient.convertToType(data['a_objEzsigntemplatedocumentpage'], [EzsigntemplatedocumentpageResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsigntemplatedocumentpage']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigntemplatedocumentpage'])) {
                throw new Error("Expected the field `a_objEzsigntemplatedocumentpage` to be an array in the JSON data but got " + data['a_objEzsigntemplatedocumentpage']);
            }
            // validate the optional field `a_objEzsigntemplatedocumentpage` (array)
            for (const item of data['a_objEzsigntemplatedocumentpage']) {
                EzsigntemplatedocumentpageResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentpageResponseCompound>}
     */
    getAObjEzsigntemplatedocumentpage() {
        return this.a_objEzsigntemplatedocumentpage;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentpageResponseCompound>} a_objEzsigntemplatedocumentpage
     */
    setAObjEzsigntemplatedocumentpage(a_objEzsigntemplatedocumentpage) {
        this['a_objEzsigntemplatedocumentpage'] = a_objEzsigntemplatedocumentpage;
    }

}

EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload.RequiredProperties = ["a_objEzsigntemplatedocumentpage"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplatedocumentpageResponseCompound>} a_objEzsigntemplatedocumentpage
 */
EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload.prototype['a_objEzsigntemplatedocumentpage'] = undefined;






export default EzsigntemplatedocumentGetEzsigntemplatedocumentpagesV1ResponseMPayload;

