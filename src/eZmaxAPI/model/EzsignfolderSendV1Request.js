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

/**
 * The EzsignfolderSendV1Request model module.
 * @module eZmaxAPI/model/EzsignfolderSendV1Request
 * @version 1.2.0
 */
class EzsignfolderSendV1Request {
    /**
     * Constructs a new <code>EzsignfolderSendV1Request</code>.
     * Request for POST /1/object/ezsignfolder/{pkiEzsignfolderID}/send
     * @alias module:eZmaxAPI/model/EzsignfolderSendV1Request
     * @param tExtraMessage {String} A custom text message that will be added to the email sent.
     */
    constructor(tExtraMessage) { 
        
        EzsignfolderSendV1Request.initialize(this, tExtraMessage);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, tExtraMessage) { 
        obj['tExtraMessage'] = tExtraMessage;
    }

    /**
     * Constructs a <code>EzsignfolderSendV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfolderSendV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfolderSendV1Request} The populated <code>EzsignfolderSendV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfolderSendV1Request();

            if (data.hasOwnProperty('tExtraMessage')) {
                obj['tExtraMessage'] = ApiClient.convertToType(data['tExtraMessage'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsignfolderSendV1Request</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsignfolderSendV1Request</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsignfolderSendV1Request.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['tExtraMessage'] && !(typeof data['tExtraMessage'] === 'string' || data['tExtraMessage'] instanceof String)) {
            throw new Error("Expected the field `tExtraMessage` to be a primitive type in the JSON string but got " + data['tExtraMessage']);
        }

        return true;
    }

/**
     * Returns A custom text message that will be added to the email sent.
     * @return {String}
     */
    getTExtraMessage() {
        return this.tExtraMessage;
    }

    /**
     * Sets A custom text message that will be added to the email sent.
     * @param {String} tExtraMessage A custom text message that will be added to the email sent.
     */
    setTExtraMessage(tExtraMessage) {
        this['tExtraMessage'] = tExtraMessage;
    }

}

EzsignfolderSendV1Request.RequiredProperties = ["tExtraMessage"];

/**
 * A custom text message that will be added to the email sent.
 * @member {String} tExtraMessage
 */
EzsignfolderSendV1Request.prototype['tExtraMessage'] = undefined;






export default EzsignfolderSendV1Request;

