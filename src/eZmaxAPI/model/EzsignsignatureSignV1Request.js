/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.7
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EzsignsignatureSignV1Request model module.
 * @module eZmaxAPI/model/EzsignsignatureSignV1Request
 * @version 1.1.7
 */
class EzsignsignatureSignV1Request {
    /**
     * Constructs a new <code>EzsignsignatureSignV1Request</code>.
     * Request for POST /1/object/ezsignsignature/{pkiEzsignsignatureID}/sign
     * @alias module:eZmaxAPI/model/EzsignsignatureSignV1Request
     * @param bIsAutomatic {Boolean} Indicates if the Ezsignsignature was part of an automatic process or not.  This can only be true if eEzsignsignatureType is **Acknowledgement**, **City**, **Handwritten**, **Initials**, **Name** or **Stamp**. 
     */
    constructor(bIsAutomatic) { 
        
        EzsignsignatureSignV1Request.initialize(this, bIsAutomatic);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, bIsAutomatic) { 
        obj['bIsAutomatic'] = bIsAutomatic;
    }

    /**
     * Constructs a <code>EzsignsignatureSignV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignsignatureSignV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignsignatureSignV1Request} The populated <code>EzsignsignatureSignV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignsignatureSignV1Request();

            if (data.hasOwnProperty('sValue')) {
                obj['sValue'] = ApiClient.convertToType(data['sValue'], 'String');
            }
            if (data.hasOwnProperty('bIsAutomatic')) {
                obj['bIsAutomatic'] = ApiClient.convertToType(data['bIsAutomatic'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The value required for the Ezsignsignature.  This can only be set if eEzsignsignatureType is **City**, **FieldText** or **FieldTextarea**
     * @return {String}
     */
    getSValue() {
        return this.sValue;
    }

    /**
     * Sets The value required for the Ezsignsignature.  This can only be set if eEzsignsignatureType is **City**, **FieldText** or **FieldTextarea**
     * @param {String} sValue The value required for the Ezsignsignature.  This can only be set if eEzsignsignatureType is **City**, **FieldText** or **FieldTextarea**
     */
    setSValue(sValue) {
        this['sValue'] = sValue;
    }
/**
     * Returns Indicates if the Ezsignsignature was part of an automatic process or not.  This can only be true if eEzsignsignatureType is **Acknowledgement**, **City**, **Handwritten**, **Initials**, **Name** or **Stamp**. 
     * @return {Boolean}
     */
    getBIsAutomatic() {
        return this.bIsAutomatic;
    }

    /**
     * Sets Indicates if the Ezsignsignature was part of an automatic process or not.  This can only be true if eEzsignsignatureType is **Acknowledgement**, **City**, **Handwritten**, **Initials**, **Name** or **Stamp**. 
     * @param {Boolean} bIsAutomatic Indicates if the Ezsignsignature was part of an automatic process or not.  This can only be true if eEzsignsignatureType is **Acknowledgement**, **City**, **Handwritten**, **Initials**, **Name** or **Stamp**. 
     */
    setBIsAutomatic(bIsAutomatic) {
        this['bIsAutomatic'] = bIsAutomatic;
    }

}

/**
 * The value required for the Ezsignsignature.  This can only be set if eEzsignsignatureType is **City**, **FieldText** or **FieldTextarea**
 * @member {String} sValue
 */
EzsignsignatureSignV1Request.prototype['sValue'] = undefined;

/**
 * Indicates if the Ezsignsignature was part of an automatic process or not.  This can only be true if eEzsignsignatureType is **Acknowledgement**, **City**, **Handwritten**, **Initials**, **Name** or **Stamp**. 
 * @member {Boolean} bIsAutomatic
 */
EzsignsignatureSignV1Request.prototype['bIsAutomatic'] = undefined;






export default EzsignsignatureSignV1Request;

