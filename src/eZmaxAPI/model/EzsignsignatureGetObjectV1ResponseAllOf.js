/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.2
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignsignatureGetObjectV1ResponseAllOf model module.
 * @module eZmaxAPI/model/EzsignsignatureGetObjectV1ResponseAllOf
 * @version 1.1.2
 */
class EzsignsignatureGetObjectV1ResponseAllOf {
    /**
     * Constructs a new <code>EzsignsignatureGetObjectV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsignsignatureGetObjectV1ResponseAllOf
     * @param mPayload {Object} Payload for the /1/object/ezsignsignature/getObject API Request
     */
    constructor(mPayload) { 
        
        EzsignsignatureGetObjectV1ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>EzsignsignatureGetObjectV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureGetObjectV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureGetObjectV1ResponseAllOf} The populated <code>EzsignsignatureGetObjectV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureGetObjectV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = ApiClient.convertToType(data['mPayload'], Object);
            }
        }
        return obj;
    }

/**
     * Returns Payload for the /1/object/ezsignsignature/getObject API Request
     * @return {Object}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * Sets Payload for the /1/object/ezsignsignature/getObject API Request
     * @param {Object} mPayload Payload for the /1/object/ezsignsignature/getObject API Request
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * Payload for the /1/object/ezsignsignature/getObject API Request
 * @member {Object} mPayload
 */
EzsignsignatureGetObjectV1ResponseAllOf.prototype['mPayload'] = undefined;






export default EzsignsignatureGetObjectV1ResponseAllOf;

