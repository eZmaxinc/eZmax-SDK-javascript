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
import EzsignfoldertypeRequestCompoundV2 from './EzsignfoldertypeRequestCompoundV2';

/**
 * The EzsignfoldertypeCreateObjectV2Request model module.
 * @module eZmaxAPI/model/EzsignfoldertypeCreateObjectV2Request
 * @version 1.2.0
 */
class EzsignfoldertypeCreateObjectV2Request {
    /**
     * Constructs a new <code>EzsignfoldertypeCreateObjectV2Request</code>.
     * Request for POST /2/object/ezsignfoldertype
     * @alias module:eZmaxAPI/model/EzsignfoldertypeCreateObjectV2Request
     * @param a_objEzsignfoldertype {Array.<module:eZmaxAPI/model/EzsignfoldertypeRequestCompoundV2>} 
     */
    constructor(a_objEzsignfoldertype) { 
        
        EzsignfoldertypeCreateObjectV2Request.initialize(this, a_objEzsignfoldertype);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objEzsignfoldertype) { 
        obj['a_objEzsignfoldertype'] = a_objEzsignfoldertype;
    }

    /**
     * Constructs a <code>EzsignfoldertypeCreateObjectV2Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeCreateObjectV2Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeCreateObjectV2Request} The populated <code>EzsignfoldertypeCreateObjectV2Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeCreateObjectV2Request();

            if (data.hasOwnProperty('a_objEzsignfoldertype')) {
                obj['a_objEzsignfoldertype'] = ApiClient.convertToType(data['a_objEzsignfoldertype'], [EzsignfoldertypeRequestCompoundV2]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfoldertypeCreateObjectV2Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfoldertypeCreateObjectV2Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfoldertypeCreateObjectV2Request.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objEzsignfoldertype']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsignfoldertype'])) {
                throw new Error("Expected the field `a_objEzsignfoldertype` to be an array in the JSON data but got " + data['a_objEzsignfoldertype']);
            }
            // validate the optional field `a_objEzsignfoldertype` (array)
            for (const item of data['a_objEzsignfoldertype']) {
                EzsignfoldertypeRequestCompoundV2.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/EzsignfoldertypeRequestCompoundV2>}
     */
    getAObjEzsignfoldertype() {
        return this.a_objEzsignfoldertype;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsignfoldertypeRequestCompoundV2>} a_objEzsignfoldertype
     */
    setAObjEzsignfoldertype(a_objEzsignfoldertype) {
        this['a_objEzsignfoldertype'] = a_objEzsignfoldertype;
    }

}

EzsignfoldertypeCreateObjectV2Request.RequiredProperties = ["a_objEzsignfoldertype"];

/**
 * @member {Array.<module:eZmaxAPI/model/EzsignfoldertypeRequestCompoundV2>} a_objEzsignfoldertype
 */
EzsignfoldertypeCreateObjectV2Request.prototype['a_objEzsignfoldertype'] = undefined;






export default EzsignfoldertypeCreateObjectV2Request;
