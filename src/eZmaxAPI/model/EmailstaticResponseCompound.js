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
import EmailstaticResponse from './EmailstaticResponse';

/**
 * The EmailstaticResponseCompound model module.
 * @module eZmaxAPI/model/EmailstaticResponseCompound
 * @version 1.1.18
 */
class EmailstaticResponseCompound {
    /**
     * Constructs a new <code>EmailstaticResponseCompound</code>.
     * An Emailstatic Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EmailstaticResponseCompound
     * @implements module:eZmaxAPI/model/EmailstaticResponse
     * @param pkiEmailstaticID {Number} The unique ID of the Emailstatic
     * @param sEmailstaticAddress {String} The email address.
     */
    constructor(pkiEmailstaticID, sEmailstaticAddress) { 
        EmailstaticResponse.initialize(this, pkiEmailstaticID, sEmailstaticAddress);
        EmailstaticResponseCompound.initialize(this, pkiEmailstaticID, sEmailstaticAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEmailstaticID, sEmailstaticAddress) { 
        obj['pkiEmailstaticID'] = pkiEmailstaticID;
        obj['sEmailstaticAddress'] = sEmailstaticAddress;
    }

    /**
     * Constructs a <code>EmailstaticResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EmailstaticResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EmailstaticResponseCompound} The populated <code>EmailstaticResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailstaticResponseCompound();
            EmailstaticResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEmailstaticID')) {
                obj['pkiEmailstaticID'] = ApiClient.convertToType(data['pkiEmailstaticID'], 'Number');
            }
            if (data.hasOwnProperty('sEmailstaticAddress')) {
                obj['sEmailstaticAddress'] = ApiClient.convertToType(data['sEmailstaticAddress'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailstaticResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailstaticResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailstaticResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEmailstaticAddress'] && !(typeof data['sEmailstaticAddress'] === 'string' || data['sEmailstaticAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailstaticAddress` to be a primitive type in the JSON string but got " + data['sEmailstaticAddress']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Emailstatic
     * minimum: 0
     * @return {Number}
     */
    getPkiEmailstaticID() {
        return this.pkiEmailstaticID;
    }

    /**
     * Sets The unique ID of the Emailstatic
     * @param {Number} pkiEmailstaticID The unique ID of the Emailstatic
     */
    setPkiEmailstaticID(pkiEmailstaticID) {
        this['pkiEmailstaticID'] = pkiEmailstaticID;
    }
/**
     * Returns The email address.
     * @return {String}
     */
    getSEmailstaticAddress() {
        return this.sEmailstaticAddress;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailstaticAddress The email address.
     */
    setSEmailstaticAddress(sEmailstaticAddress) {
        this['sEmailstaticAddress'] = sEmailstaticAddress;
    }

}

EmailstaticResponseCompound.RequiredProperties = ["pkiEmailstaticID", "sEmailstaticAddress"];

/**
 * The unique ID of the Emailstatic
 * @member {Number} pkiEmailstaticID
 */
EmailstaticResponseCompound.prototype['pkiEmailstaticID'] = undefined;

/**
 * The email address.
 * @member {String} sEmailstaticAddress
 */
EmailstaticResponseCompound.prototype['sEmailstaticAddress'] = undefined;


// Implement EmailstaticResponse interface:
/**
 * The unique ID of the Emailstatic
 * @member {Number} pkiEmailstaticID
 */
EmailstaticResponse.prototype['pkiEmailstaticID'] = undefined;
/**
 * The email address.
 * @member {String} sEmailstaticAddress
 */
EmailstaticResponse.prototype['sEmailstaticAddress'] = undefined;




export default EmailstaticResponseCompound;

