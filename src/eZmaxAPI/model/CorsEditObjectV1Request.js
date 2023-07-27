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
import CorsRequestCompound from './CorsRequestCompound';

/**
 * The CorsEditObjectV1Request model module.
 * @module eZmaxAPI/model/CorsEditObjectV1Request
 * @version 1.1.18
 */
class CorsEditObjectV1Request {
    /**
     * Constructs a new <code>CorsEditObjectV1Request</code>.
     * Request for PUT /1/object/cors/{pkiCorsID}
     * @alias module:eZmaxAPI/model/CorsEditObjectV1Request
     * @param objCors {module:eZmaxAPI/model/CorsRequestCompound} 
     */
    constructor(objCors) { 
        
        CorsEditObjectV1Request.initialize(this, objCors);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objCors) { 
        obj['objCors'] = objCors;
    }

    /**
     * Constructs a <code>CorsEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CorsEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CorsEditObjectV1Request} The populated <code>CorsEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CorsEditObjectV1Request();

            if (data.hasOwnProperty('objCors')) {
                obj['objCors'] = CorsRequestCompound.constructFromObject(data['objCors']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CorsEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CorsEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CorsEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objCors`
        if (data['objCors']) { // data not null
          CorsRequestCompound.validateJSON(data['objCors']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CorsRequestCompound}
     */
    getObjCors() {
        return this.objCors;
    }

    /**
     * @param {module:eZmaxAPI/model/CorsRequestCompound} objCors
     */
    setObjCors(objCors) {
        this['objCors'] = objCors;
    }

}

CorsEditObjectV1Request.RequiredProperties = ["objCors"];

/**
 * @member {module:eZmaxAPI/model/CorsRequestCompound} objCors
 */
CorsEditObjectV1Request.prototype['objCors'] = undefined;






export default CorsEditObjectV1Request;

