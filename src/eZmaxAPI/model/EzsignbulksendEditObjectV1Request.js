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
import EzsignbulksendRequestCompound from './EzsignbulksendRequestCompound';

/**
 * The EzsignbulksendEditObjectV1Request model module.
 * @module eZmaxAPI/model/EzsignbulksendEditObjectV1Request
 * @version 1.1.18
 */
class EzsignbulksendEditObjectV1Request {
    /**
     * Constructs a new <code>EzsignbulksendEditObjectV1Request</code>.
     * Request for PUT /1/object/ezsignbulksend/{pkiEzsignbulksendID}
     * @alias module:eZmaxAPI/model/EzsignbulksendEditObjectV1Request
     * @param objEzsignbulksend {module:eZmaxAPI/model/EzsignbulksendRequestCompound} 
     */
    constructor(objEzsignbulksend) { 
        
        EzsignbulksendEditObjectV1Request.initialize(this, objEzsignbulksend);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignbulksend) { 
        obj['objEzsignbulksend'] = objEzsignbulksend;
    }

    /**
     * Constructs a <code>EzsignbulksendEditObjectV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendEditObjectV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendEditObjectV1Request} The populated <code>EzsignbulksendEditObjectV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendEditObjectV1Request();

            if (data.hasOwnProperty('objEzsignbulksend')) {
                obj['objEzsignbulksend'] = EzsignbulksendRequestCompound.constructFromObject(data['objEzsignbulksend']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignbulksendEditObjectV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksendEditObjectV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksendEditObjectV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsignbulksend`
        if (data['objEzsignbulksend']) { // data not null
          EzsignbulksendRequestCompound.validateJSON(data['objEzsignbulksend']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignbulksendRequestCompound}
     */
    getObjEzsignbulksend() {
        return this.objEzsignbulksend;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendRequestCompound} objEzsignbulksend
     */
    setObjEzsignbulksend(objEzsignbulksend) {
        this['objEzsignbulksend'] = objEzsignbulksend;
    }

}

EzsignbulksendEditObjectV1Request.RequiredProperties = ["objEzsignbulksend"];

/**
 * @member {module:eZmaxAPI/model/EzsignbulksendRequestCompound} objEzsignbulksend
 */
EzsignbulksendEditObjectV1Request.prototype['objEzsignbulksend'] = undefined;






export default EzsignbulksendEditObjectV1Request;

