/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.0.43
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The EmailRequest model module.
 * @module eZmaxAPI/model/EmailRequest
 * @version 1.0.43
 */
class EmailRequest {
    /**
     * Constructs a new <code>EmailRequest</code>.
     * A Contact Object
     * @alias module:eZmaxAPI/model/EmailRequest
     * @param fkiEmailtypeID {Number} The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
     * @param sEmailAddress {String} The email address.
     */
    constructor(fkiEmailtypeID, sEmailAddress) { 
        
        EmailRequest.initialize(this, fkiEmailtypeID, sEmailAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEmailtypeID, sEmailAddress) { 
        obj['fkiEmailtypeID'] = fkiEmailtypeID;
        obj['sEmailAddress'] = sEmailAddress;
    }

    /**
     * Constructs a <code>EmailRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EmailRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EmailRequest} The populated <code>EmailRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailRequest();

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
     * Returns The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
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

/**
 * The unique ID of the Emailtype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home|
 * @member {Number} fkiEmailtypeID
 */
EmailRequest.prototype['fkiEmailtypeID'] = undefined;

/**
 * The email address.
 * @member {String} sEmailAddress
 */
EmailRequest.prototype['sEmailAddress'] = undefined;






export default EmailRequest;

