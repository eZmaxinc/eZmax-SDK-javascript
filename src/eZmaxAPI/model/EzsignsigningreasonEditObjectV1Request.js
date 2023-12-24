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
 * The EzsignsigningreasonEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignsigningreasonEditObjectV1Request
 * @version 1.2.0
 */
class EzsignsigningreasonEditObjectV1Request {
    /**
     * Constructs a new <code>EzsignsigningreasonEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsignsigningreason/{pkiEzsignsigningreasonID}
     * @alias module:eZmaxAPI/model/EzsignsigningreasonEditObjectV1Request
     * @param objEzsignsigningreason {module:eZmaxAPI/model/EzsignsigningreasonRequestCompound} 
     */
    constructor(objEzsignsigningreason) { 
        
        EzsignsigningreasonEditObjectV1Request.initialize(this, objEzsignsigningreason);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignsigningreason) { 
        obj['objEzsignsigningreason'] = objEzsignsigningreason;
    }

    /**
     * Constructs a <code>EzsignsigningreasonEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsigningreasonEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsigningreasonEditObjectV1Request} The populated <code>EzsignsigningreasonEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsigningreasonEditObjectV1Request();

            if (data.hasOwnProperty('objEzsignsigningreason')) {
                obj['objEzsignsigningreason'] = EzsignsigningreasonRequestCompound.constructFromObject(data['objEzsignsigningreason']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignsigningreasonEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignsigningreasonEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignsigningreasonEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsignsigningreason`
        if (data['objEzsignsigningreason']) { // data not null
          EzsignsigningreasonRequestCompound.validateJSON(data['objEzsignsigningreason']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignsigningreasonRequestCompound}
     */
    getObjEzsignsigningreason() {
        return this.objEzsignsigningreason;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignsigningreasonRequestCompound} objEzsignsigningreason
     */
    setObjEzsignsigningreason(objEzsignsigningreason) {
        this['objEzsignsigningreason'] = objEzsignsigningreason;
    }

}

EzsignsigningreasonEditObjectV1Request.RequiredProperties = ["objEzsignsigningreason"];

/**
 * @member {module:eZmaxAPI/model/EzsignsigningreasonRequestCompound} objEzsignsigningreason
 */
EzsignsigningreasonEditObjectV1Request.prototype['objEzsignsigningreason'] = undefined;






export default EzsignsigningreasonEditObjectV1Request;

