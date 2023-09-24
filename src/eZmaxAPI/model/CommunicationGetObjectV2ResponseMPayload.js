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
import CommunicationResponseCompound from './CommunicationResponseCompound';

/**
 * The CommunicationGetObjectV2ResponseMPayload model module.
 * @module eZmaxAPI/model/CommunicationGetObjectV2ResponseMPayload
 * @version 1.2.0
 */
class CommunicationGetObjectV2ResponseMPayload {
    /**
     * Constructs a new <code>CommunicationGetObjectV2ResponseMPayload</code>.
     * Payload for GET /2/object/communication/{pkiCommunicationID}
     * @alias module:eZmaxAPI/model/CommunicationGetObjectV2ResponseMPayload
     * @param objCommunication {module:eZmaxAPI/model/CommunicationResponseCompound} 
     */
    constructor(objCommunication) { 
        
        CommunicationGetObjectV2ResponseMPayload.initialize(this, objCommunication);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objCommunication) { 
        obj['objCommunication'] = objCommunication;
    }

    /**
     * Constructs a <code>CommunicationGetObjectV2ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationGetObjectV2ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationGetObjectV2ResponseMPayload} The populated <code>CommunicationGetObjectV2ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationGetObjectV2ResponseMPayload();

            if (data.hasOwnProperty('objCommunication')) {
                obj['objCommunication'] = CommunicationResponseCompound.constructFromObject(data['objCommunication']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationGetObjectV2ResponseMPayload</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationGetObjectV2ResponseMPayload</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationGetObjectV2ResponseMPayload.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objCommunication`
        if (data['objCommunication']) { // data not null
          CommunicationResponseCompound.validateJSON(data['objCommunication']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CommunicationResponseCompound}
     */
    getObjCommunication() {
        return this.objCommunication;
    }

    /**
     * @param {module:eZmaxAPI/model/CommunicationResponseCompound} objCommunication
     */
    setObjCommunication(objCommunication) {
        this['objCommunication'] = objCommunication;
    }

}

CommunicationGetObjectV2ResponseMPayload.RequiredProperties = ["objCommunication"];

/**
 * @member {module:eZmaxAPI/model/CommunicationResponseCompound} objCommunication
 */
CommunicationGetObjectV2ResponseMPayload.prototype['objCommunication'] = undefined;






export default CommunicationGetObjectV2ResponseMPayload;

