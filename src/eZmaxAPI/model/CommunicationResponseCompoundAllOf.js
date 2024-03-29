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
import CommunicationattachmentResponseCompound from './CommunicationattachmentResponseCompound';
import CommunicationexternalrecipientResponseCompound from './CommunicationexternalrecipientResponseCompound';
import CommunicationrecipientResponseCompound from './CommunicationrecipientResponseCompound';

/**
 * The CommunicationResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/CommunicationResponseCompoundAllOf
 * @version 1.1.18
 */
class CommunicationResponseCompoundAllOf {
    /**
     * Constructs a new <code>CommunicationResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/CommunicationResponseCompoundAllOf
     * @param a_objCommunicationattachment {Array.<module:eZmaxAPI/model/CommunicationattachmentResponseCompound>} 
     * @param a_objCommunicationrecipient {Array.<module:eZmaxAPI/model/CommunicationrecipientResponseCompound>} 
     * @param a_objCommunicationexternalrecipient {Array.<module:eZmaxAPI/model/CommunicationexternalrecipientResponseCompound>} 
     */
    constructor(a_objCommunicationattachment, a_objCommunicationrecipient, a_objCommunicationexternalrecipient) { 
        
        CommunicationResponseCompoundAllOf.initialize(this, a_objCommunicationattachment, a_objCommunicationrecipient, a_objCommunicationexternalrecipient);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objCommunicationattachment, a_objCommunicationrecipient, a_objCommunicationexternalrecipient) { 
        obj['a_objCommunicationattachment'] = a_objCommunicationattachment;
        obj['a_objCommunicationrecipient'] = a_objCommunicationrecipient;
        obj['a_objCommunicationexternalrecipient'] = a_objCommunicationexternalrecipient;
    }

    /**
     * Constructs a <code>CommunicationResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CommunicationResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CommunicationResponseCompoundAllOf} The populated <code>CommunicationResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CommunicationResponseCompoundAllOf();

            if (data.hasOwnProperty('a_objCommunicationattachment')) {
                obj['a_objCommunicationattachment'] = ApiClient.convertToType(data['a_objCommunicationattachment'], [CommunicationattachmentResponseCompound]);
            }
            if (data.hasOwnProperty('a_objCommunicationrecipient')) {
                obj['a_objCommunicationrecipient'] = ApiClient.convertToType(data['a_objCommunicationrecipient'], [CommunicationrecipientResponseCompound]);
            }
            if (data.hasOwnProperty('a_objCommunicationexternalrecipient')) {
                obj['a_objCommunicationexternalrecipient'] = ApiClient.convertToType(data['a_objCommunicationexternalrecipient'], [CommunicationexternalrecipientResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CommunicationResponseCompoundAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CommunicationResponseCompoundAllOf</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CommunicationResponseCompoundAllOf.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        if (data['a_objCommunicationattachment']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objCommunicationattachment'])) {
                throw new Error("Expected the field `a_objCommunicationattachment` to be an array in the JSON data but got " + data['a_objCommunicationattachment']);
            }
            // validate the optional field `a_objCommunicationattachment` (array)
            for (const item of data['a_objCommunicationattachment']) {
                CommunicationattachmentResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objCommunicationrecipient']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objCommunicationrecipient'])) {
                throw new Error("Expected the field `a_objCommunicationrecipient` to be an array in the JSON data but got " + data['a_objCommunicationrecipient']);
            }
            // validate the optional field `a_objCommunicationrecipient` (array)
            for (const item of data['a_objCommunicationrecipient']) {
                CommunicationrecipientResponseCompound.validateJSON(item);
            };
        }
        if (data['a_objCommunicationexternalrecipient']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objCommunicationexternalrecipient'])) {
                throw new Error("Expected the field `a_objCommunicationexternalrecipient` to be an array in the JSON data but got " + data['a_objCommunicationexternalrecipient']);
            }
            // validate the optional field `a_objCommunicationexternalrecipient` (array)
            for (const item of data['a_objCommunicationexternalrecipient']) {
                CommunicationexternalrecipientResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/CommunicationattachmentResponseCompound>}
     */
    getAObjCommunicationattachment() {
        return this.a_objCommunicationattachment;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommunicationattachmentResponseCompound>} a_objCommunicationattachment
     */
    setAObjCommunicationattachment(a_objCommunicationattachment) {
        this['a_objCommunicationattachment'] = a_objCommunicationattachment;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CommunicationrecipientResponseCompound>}
     */
    getAObjCommunicationrecipient() {
        return this.a_objCommunicationrecipient;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommunicationrecipientResponseCompound>} a_objCommunicationrecipient
     */
    setAObjCommunicationrecipient(a_objCommunicationrecipient) {
        this['a_objCommunicationrecipient'] = a_objCommunicationrecipient;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CommunicationexternalrecipientResponseCompound>}
     */
    getAObjCommunicationexternalrecipient() {
        return this.a_objCommunicationexternalrecipient;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CommunicationexternalrecipientResponseCompound>} a_objCommunicationexternalrecipient
     */
    setAObjCommunicationexternalrecipient(a_objCommunicationexternalrecipient) {
        this['a_objCommunicationexternalrecipient'] = a_objCommunicationexternalrecipient;
    }

}

CommunicationResponseCompoundAllOf.RequiredProperties = ["a_objCommunicationattachment", "a_objCommunicationrecipient", "a_objCommunicationexternalrecipient"];

/**
 * @member {Array.<module:eZmaxAPI/model/CommunicationattachmentResponseCompound>} a_objCommunicationattachment
 */
CommunicationResponseCompoundAllOf.prototype['a_objCommunicationattachment'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CommunicationrecipientResponseCompound>} a_objCommunicationrecipient
 */
CommunicationResponseCompoundAllOf.prototype['a_objCommunicationrecipient'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CommunicationexternalrecipientResponseCompound>} a_objCommunicationexternalrecipient
 */
CommunicationResponseCompoundAllOf.prototype['a_objCommunicationexternalrecipient'] = undefined;






export default CommunicationResponseCompoundAllOf;

