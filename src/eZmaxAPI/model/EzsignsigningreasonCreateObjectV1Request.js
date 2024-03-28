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
import EzsignsigningreasonRequestCompound from './EzsignsigningreasonRequestCompound';

/**
 * The EzsignsigningreasonCreateObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignsigningreasonCreateObjectV1Request
 * @version 1.2.0
 */
class EzsignsigningreasonCreateObjectV1Request {
    /**
     * Constructs a new <code>EzsignsigningreasonCreateObjectV1Request</code>.
     * Request for POST /1/object/ezsignsigningreason
     * @alias module:eZmaxAPI/model/EzsignsigningreasonCreateObjectV1Request
     * @param a_objEzsignsigningreason {Array.<module:eZmaxAPI/model/EzsignsigningreasonRequestCompound>} 
     */
    constructor(a_objEzsignsigningreason) { 
        
        EzsignsigningreasonCreateObjectV1Request.initialize(this, a_objEzsignsigningreason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignsigningreason) { 
        obj['a_objEzsignsigningreason'] = a_objEzsignsigningreason;
    }

    /**
     * Constructs a <code>EzsignsigningreasonCreateObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsigningreasonCreateObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsigningreasonCreateObjectV1Request} The populated <code>EzsignsigningreasonCreateObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsigningreasonCreateObjectV1Request();

            if (data.hasOwnProperty('a_objEzsignsigningreason')) {
                obj['a_objEzsignsigningreason'] = ApiClient.convertToType(data['a_objEzsignsigningreason'], [EzsignsigningreasonRequestCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsigningreasonCreateObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsigningreasonCreateObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsigningreasonCreateObjectV1Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignsigningreason']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignsigningreason'])) {
                throw new Error("Expected the field `a_objEzsignsigningreason` to be an array in the JSON data but got " + data['a_objEzsignsigningreason']);
            }
            // validate the optional field `a_objEzsignsigningreason` (array)
            for (const item of data['a_objEzsignsigningreason']) {
                EzsignsigningreasonRequestCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignsigningreasonRequestCompound>}
     */
    getAObjEzsignsigningreason() {
        return this.a_objEzsignsigningreason;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignsigningreasonRequestCompound>} a_objEzsignsigningreason
     */
    setAObjEzsignsigningreason(a_objEzsignsigningreason) {
        this['a_objEzsignsigningreason'] = a_objEzsignsigningreason;
    }

}

EzsignsigningreasonCreateObjectV1Request.RequiredProperties = ["a_objEzsignsigningreason"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignsigningreasonRequestCompound>} a_objEzsignsigningreason
 */
EzsignsigningreasonCreateObjectV1Request.prototype['a_objEzsignsigningreason'] = undefined;






export default EzsignsigningreasonCreateObjectV1Request;

