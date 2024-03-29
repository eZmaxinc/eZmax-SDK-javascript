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
import WebsiteRequest from './WebsiteRequest';

/**
 * The WebsiteRequestCompound model module.
 * @module eZmaxAPI/model/WebsiteRequestCompound
 * @version 1.1.18
 */
class WebsiteRequestCompound {
    /**
     * Constructs a new <code>WebsiteRequestCompound</code>.
     * A Website Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/WebsiteRequestCompound
     * @implements module:eZmaxAPI/model/WebsiteRequest
     * @param fkiWebsitetypeID {Number} The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
     * @param sWebsiteAddress {String} The URL of the website.
     */
    constructor(fkiWebsitetypeID, sWebsiteAddress) { 
        WebsiteRequest.initialize(this, fkiWebsitetypeID, sWebsiteAddress);
        WebsiteRequestCompound.initialize(this, fkiWebsitetypeID, sWebsiteAddress);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiWebsitetypeID, sWebsiteAddress) { 
        obj['fkiWebsitetypeID'] = fkiWebsitetypeID;
        obj['sWebsiteAddress'] = sWebsiteAddress;
    }

    /**
     * Constructs a <code>WebsiteRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebsiteRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebsiteRequestCompound} The populated <code>WebsiteRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsiteRequestCompound();
            WebsiteRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('fkiWebsitetypeID')) {
                obj['fkiWebsitetypeID'] = ApiClient.convertToType(data['fkiWebsitetypeID'], 'Number');
            }
            if (data.hasOwnProperty('sWebsiteAddress')) {
                obj['sWebsiteAddress'] = ApiClient.convertToType(data['sWebsiteAddress'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebsiteRequestCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebsiteRequestCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of WebsiteRequestCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sWebsiteAddress'] && !(typeof data['sWebsiteAddress'] === 'string' || data['sWebsiteAddress'] instanceof String)) {
            throw new Error("Expected the field `sWebsiteAddress` to be a primitive type in the JSON string but got " + data['sWebsiteAddress']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
     * minimum: 0
     * @return {Number}
     */
    getFkiWebsitetypeID() {
        return this.fkiWebsitetypeID;
    }

    /**
     * Sets The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
     * @param {Number} fkiWebsitetypeID The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
     */
    setFkiWebsitetypeID(fkiWebsitetypeID) {
        this['fkiWebsitetypeID'] = fkiWebsitetypeID;
    }
/**
     * Returns The URL of the website.
     * @return {String}
     */
    getSWebsiteAddress() {
        return this.sWebsiteAddress;
    }

    /**
     * Sets The URL of the website.
     * @param {String} sWebsiteAddress The URL of the website.
     */
    setSWebsiteAddress(sWebsiteAddress) {
        this['sWebsiteAddress'] = sWebsiteAddress;
    }

}

WebsiteRequestCompound.RequiredProperties = ["fkiWebsitetypeID", "sWebsiteAddress"];

/**
 * The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
 * @member {Number} fkiWebsitetypeID
 */
WebsiteRequestCompound.prototype['fkiWebsitetypeID'] = undefined;

/**
 * The URL of the website.
 * @member {String} sWebsiteAddress
 */
WebsiteRequestCompound.prototype['sWebsiteAddress'] = undefined;


// Implement WebsiteRequest interface:
/**
 * The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
 * @member {Number} fkiWebsitetypeID
 */
WebsiteRequest.prototype['fkiWebsitetypeID'] = undefined;
/**
 * The URL of the website.
 * @member {String} sWebsiteAddress
 */
WebsiteRequest.prototype['sWebsiteAddress'] = undefined;




export default WebsiteRequestCompound;

