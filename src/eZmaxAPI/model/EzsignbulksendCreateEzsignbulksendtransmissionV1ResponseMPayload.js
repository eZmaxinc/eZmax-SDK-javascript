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
import EzsignbulksendtransmissionResponse from './EzsignbulksendtransmissionResponse';

/**
 * The EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload model module.
 * @module eZmaxAPI/model/EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload
 * @version 1.2.0
 */
class EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload {
    /**
     * Constructs a new <code>EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload</code>.
     * Payload for POST /1/object/ezsignbulksend/{pkiEzsignbulksendID}/createEzsignbulksendtransmission
     * @alias module:eZmaxAPI/model/EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload
     * @param objEzsignbulksendtransmission {module:eZmaxAPI/model/EzsignbulksendtransmissionResponse} 
     */
    constructor(objEzsignbulksendtransmission) { 
        
        EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload.initialize(this, objEzsignbulksendtransmission);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objEzsignbulksendtransmission) { 
        obj['objEzsignbulksendtransmission'] = objEzsignbulksendtransmission;
    }

    /**
     * Constructs a <code>EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload} The populated <code>EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload();

            if (data.hasOwnProperty('objEzsignbulksendtransmission')) {
                obj['objEzsignbulksendtransmission'] = EzsignbulksendtransmissionResponse.constructFromObject(data['objEzsignbulksendtransmission']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objEzsignbulksendtransmission`
        if (data['objEzsignbulksendtransmission']) { // data not null
          EzsignbulksendtransmissionResponse.validateJSON(data['objEzsignbulksendtransmission']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/EzsignbulksendtransmissionResponse}
     */
    getObjEzsignbulksendtransmission() {
        return this.objEzsignbulksendtransmission;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsignbulksendtransmissionResponse} objEzsignbulksendtransmission
     */
    setObjEzsignbulksendtransmission(objEzsignbulksendtransmission) {
        this['objEzsignbulksendtransmission'] = objEzsignbulksendtransmission;
    }

}

EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload.RequiredProperties = ["objEzsignbulksendtransmission"];

/**
 * @member {module:eZmaxAPI/model/EzsignbulksendtransmissionResponse} objEzsignbulksendtransmission
 */
EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload.prototype['objEzsignbulksendtransmission'] = undefined;






export default EzsignbulksendCreateEzsignbulksendtransmissionV1ResponseMPayload;

