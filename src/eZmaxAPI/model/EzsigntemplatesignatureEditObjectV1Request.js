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
import EzsigntemplatesignatureRequestCompound from './EzsigntemplatesignatureRequestCompound';

/**
 * The EzsigntemplatesignatureEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsigntemplatesignatureEditObjectV1Request
 * @version 1.2.0
 */
class EzsigntemplatesignatureEditObjectV1Request {
    /**
     * Constructs a new <code>EzsigntemplatesignatureEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsigntemplatesignature/{pkiEzsigntemplatesignatureID}
     * @alias module:eZmaxAPI/model/EzsigntemplatesignatureEditObjectV1Request
     * @param objEzsigntemplatesignature {module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound} 
     */
    constructor(objEzsigntemplatesignature) { 
        
        EzsigntemplatesignatureEditObjectV1Request.initialize(this, objEzsigntemplatesignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsigntemplatesignature) { 
        obj['objEzsigntemplatesignature'] = objEzsigntemplatesignature;
    }

    /**
     * Constructs a <code>EzsigntemplatesignatureEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureEditObjectV1Request} The populated <code>EzsigntemplatesignatureEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatesignatureEditObjectV1Request();

            if (data.hasOwnProperty('objEzsigntemplatesignature')) {
                obj['objEzsigntemplatesignature'] = EzsigntemplatesignatureRequestCompound.constructFromObject(data['objEzsigntemplatesignature']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplatesignatureEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplatesignatureEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplatesignatureEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsigntemplatesignature`
        if (data['objEzsigntemplatesignature']) { // data not null
          EzsigntemplatesignatureRequestCompound.validateJSON(data['objEzsigntemplatesignature']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound}
     */
    getObjEzsigntemplatesignature() {
        return this.objEzsigntemplatesignature;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound} objEzsigntemplatesignature
     */
    setObjEzsigntemplatesignature(objEzsigntemplatesignature) {
        this['objEzsigntemplatesignature'] = objEzsigntemplatesignature;
    }

}

EzsigntemplatesignatureEditObjectV1Request.RequiredProperties = ["objEzsigntemplatesignature"];

/**
 * @member {module:eZmaxAPI/model/EzsigntemplatesignatureRequestCompound} objEzsigntemplatesignature
 */
EzsigntemplatesignatureEditObjectV1Request.prototype['objEzsigntemplatesignature'] = undefined;






export default EzsigntemplatesignatureEditObjectV1Request;

