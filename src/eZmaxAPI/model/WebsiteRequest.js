/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The WebsiteRequest model module.
 * @module eZmaxAPI/model/WebsiteRequest
 * @version 1.1.0
 */
class WebsiteRequest {
    /**
     * Constructs a new <code>WebsiteRequest</code>.
     * A Website Object
     * @alias module:eZmaxAPI/model/WebsiteRequest
     * @param fkiWebsitetypeID {Number} The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
     * @param sWebsiteAddress {String} The URL of the website.
     */
    constructor(fkiWebsitetypeID, sWebsiteAddress) { 
        
        WebsiteRequest.initialize(this, fkiWebsitetypeID, sWebsiteAddress);
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
     * Constructs a <code>WebsiteRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/WebsiteRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/WebsiteRequest} The populated <code>WebsiteRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebsiteRequest();

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
     * Returns The unique ID of the Websitetype.  Valid values:  |Value|Description| |-|-| |1|Website| |2|Twitter| |3|Facebook| |4|Survey|
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






export default WebsiteRequest;

