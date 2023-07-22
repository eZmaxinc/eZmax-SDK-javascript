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
import EmailResponse from './EmailResponse';

/**
 * The EmailResponseCompound model module.
 * @module eZmaxAPI/model/EmailResponseCompound
 * @version 1.1.18
 */
class EmailResponseCompound {
    /**
     * Constructs a new <code>EmailResponseCompound</code>.
     * An Email Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/EmailResponseCompound
     * @implements module:eZmaxAPI/model/EmailResponse
     * @param pkiEmailID {Number} The unique ID of the Email
     * @param fkiEmailtypeID {Number} The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
     * @param sEmailAddress {String} The email address.
     */
    constructor(pkiEmailID, fkiEmailtypeID, sEmailAddress) { 
        EmailResponse.initialize(this, pkiEmailID, fkiEmailtypeID, sEmailAddress);
        EmailResponseCompound.initialize(this, pkiEmailID, fkiEmailtypeID, sEmailAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEmailID, fkiEmailtypeID, sEmailAddress) { 
        obj['pkiEmailID'] = pkiEmailID;
        obj['fkiEmailtypeID'] = fkiEmailtypeID;
        obj['sEmailAddress'] = sEmailAddress;
    }

    /**
     * Constructs a <code>EmailResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EmailResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EmailResponseCompound} The populated <code>EmailResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailResponseCompound();
            EmailResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEmailID')) {
                obj['pkiEmailID'] = ApiClient.convertToType(data['pkiEmailID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEmailtypeID')) {
                obj['fkiEmailtypeID'] = ApiClient.convertToType(data['fkiEmailtypeID'], 'Number');
            }
            if (data.hasOwnProperty('sEmailAddress')) {
                obj['sEmailAddress'] = ApiClient.convertToType(data['sEmailAddress'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EmailResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEmailAddress'] && !(typeof data['sEmailAddress'] === 'string' || data['sEmailAddress'] instanceof String)) {
            throw new Error("Expected the field `sEmailAddress` to be a primitive type in the JSON string but got " + data['sEmailAddress']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Email
     * minimum: 1
     * maximum: 16777215
     * @return {Number}
     */
    getPkiEmailID() {
        return this.pkiEmailID;
    }

    /**
     * Sets The unique ID of the Email
     * @param {Number} pkiEmailID The unique ID of the Email
     */
    setPkiEmailID(pkiEmailID) {
        this['pkiEmailID'] = pkiEmailID;
    }
/**
     * Returns The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
     * minimum: 0
     * @return {Number}
     */
    getFkiEmailtypeID() {
        return this.fkiEmailtypeID;
    }

    /**
     * Sets The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
     * @param {Number} fkiEmailtypeID The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
     */
    setFkiEmailtypeID(fkiEmailtypeID) {
        this['fkiEmailtypeID'] = fkiEmailtypeID;
    }
/**
     * Returns The email address.
     * @return {String}
     */
    getSEmailAddress() {
        return this.sEmailAddress;
    }

    /**
     * Sets The email address.
     * @param {String} sEmailAddress The email address.
     */
    setSEmailAddress(sEmailAddress) {
        this['sEmailAddress'] = sEmailAddress;
    }

}

EmailResponseCompound.RequiredProperties = ["pkiEmailID", "fkiEmailtypeID", "sEmailAddress"];

/**
 * The unique ID of the Email
 * @member {Number} pkiEmailID
 */
EmailResponseCompound.prototype['pkiEmailID'] = undefined;

/**
 * The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
 * @member {Number} fkiEmailtypeID
 */
EmailResponseCompound.prototype['fkiEmailtypeID'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
EmailResponseCompound.prototype['sEmailAddress'] = undefined;


// Implement EmailResponse interface:
/**
 * The unique ID of the Email
 * @member {Number} pkiEmailID
 */
EmailResponse.prototype['pkiEmailID'] = undefined;
/**
 * The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
 * @member {Number} fkiEmailtypeID
 */
EmailResponse.prototype['fkiEmailtypeID'] = undefined;
/**
 * The email address.
 * @member {String} sEmailAddress
 */
EmailResponse.prototype['sEmailAddress'] = undefined;




export default EmailResponseCompound;
