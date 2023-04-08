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
import EzsigndocumentRequestCompound from './EzsigndocumentRequestCompound';

/**
 * The EzsigndocumentCreateObjectV2Request model module.
 * @module eZmaxAPI/model/EzsigndocumentCreateObjectV2Request
 * @version 1.1.17
 */
class EzsigndocumentCreateObjectV2Request {
    /**
     * Constructs a new <code>EzsigndocumentCreateObjectV2Request</code>.
     * Request for POST /2/object/ezsigndocument
     * @alias module:eZmaxAPI/model/EzsigndocumentCreateObjectV2Request
     * @param a_objEzsigndocument {Array.<module:eZmaxAPI/model/EzsigndocumentRequestCompound>} 
     */
    constructor(a_objEzsigndocument) { 
        
        EzsigndocumentCreateObjectV2Request.initialize(this, a_objEzsigndocument);
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
     * Constructs a <code>EzsigndocumentCreateObjectV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentCreateObjectV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentCreateObjectV2Request} The populated <code>EzsigndocumentCreateObjectV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentCreateObjectV2Request();

            if (data.hasOwnProperty('a_objEzsigndocument')) {
                obj['a_objEzsigndocument'] = ApiClient.convertToType(data['a_objEzsigndocument'], [EzsigndocumentRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigndocumentCreateObjectV2Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigndocumentCreateObjectV2Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigndocumentCreateObjectV2Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsigndocument']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigndocument'])) {
                throw new Error("Expected the field `a_objEzsigndocument` to be an array in the JSON data but got " + data['a_objEzsigndocument']);
            }
            // validate the optional field `a_objEzsigndocument` (array)
            for (const item of data['a_objEzsigndocument']) {
                EzsigndocumentRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsigndocumentRequestCompound>}
     */
    getAObjEzsigndocument() {
        return this.a_objEzsigndocument;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigndocumentRequestCompound>} a_objEzsigndocument
     */
    setAObjEzsigndocument(a_objEzsigndocument) {
        this['a_objEzsigndocument'] = a_objEzsigndocument;
    }

}

EzsigndocumentCreateObjectV2Request.RequiredProperties = ["a_objEzsigndocument"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigndocumentRequestCompound>} a_objEzsigndocument
 */
EzsigndocumentCreateObjectV2Request.prototype['a_objEzsigndocument'] = undefined;






export default EzsigndocumentCreateObjectV2Request;

