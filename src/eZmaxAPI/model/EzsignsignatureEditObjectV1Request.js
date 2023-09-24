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
import EzsignsignatureRequestCompound from './EzsignsignatureRequestCompound';

/**
 * The EzsignsignatureEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignsignatureEditObjectV1Request
 * @version 1.2.0
 */
class EzsignsignatureEditObjectV1Request {
    /**
     * Constructs a new <code>EzsignsignatureEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsignsignature/{pkiEzsignsignatureID}
     * @alias module:eZmaxAPI/model/EzsignsignatureEditObjectV1Request
     * @param objEzsignsignature {module:eZmaxAPI/model/EzsignsignatureRequestCompound} 
     */
    constructor(objEzsignsignature) { 
        
        EzsignsignatureEditObjectV1Request.initialize(this, objEzsignsignature);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignsignature) { 
        obj['objEzsignsignature'] = objEzsignsignature;
    }

    /**
     * Constructs a <code>EzsignsignatureEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureEditObjectV1Request} The populated <code>EzsignsignatureEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureEditObjectV1Request();

            if (data.hasOwnProperty('objEzsignsignature')) {
                obj['objEzsignsignature'] = EzsignsignatureRequestCompound.constructFromObject(data['objEzsignsignature']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsignatureEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsignatureEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsignatureEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsignsignature`
        if (data['objEzsignsignature']) { // data not null
          EzsignsignatureRequestCompound.validateJSON(data['objEzsignsignature']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignsignatureRequestCompound}
     */
    getObjEzsignsignature() {
        return this.objEzsignsignature;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsignatureRequestCompound} objEzsignsignature
     */
    setObjEzsignsignature(objEzsignsignature) {
        this['objEzsignsignature'] = objEzsignsignature;
    }

}

EzsignsignatureEditObjectV1Request.RequiredProperties = ["objEzsignsignature"];

/**
 * @member {module:eZmaxAPI/model/EzsignsignatureRequestCompound} objEzsignsignature
 */
EzsignsignatureEditObjectV1Request.prototype['objEzsignsignature'] = undefined;






export default EzsignsignatureEditObjectV1Request;

