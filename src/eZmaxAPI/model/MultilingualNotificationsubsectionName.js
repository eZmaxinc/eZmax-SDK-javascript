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
 * The MultilingualNotificationsubsectionName model module.
 * @module eZmaxAPI/model/MultilingualNotificationsubsectionName
 * @version 1.2.0
 */
class MultilingualNotificationsubsectionName {
    /**
     * Constructs a new <code>MultilingualNotificationsubsectionName</code>.
     * Name of the Notificationsubsection
     * @alias module:eZmaxAPI/model/MultilingualNotificationsubsectionName
     */
    constructor() { 
        
        MultilingualNotificationsubsectionName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultilingualNotificationsubsectionName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/MultilingualNotificationsubsectionName} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/MultilingualNotificationsubsectionName} The populated <code>MultilingualNotificationsubsectionName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultilingualNotificationsubsectionName();

            if (data.hasOwnProperty('sNotificationsubsectionName1')) {
                obj['sNotificationsubsectionName1'] = ApiClient.convertToType(data['sNotificationsubsectionName1'], 'String');
            }
            if (data.hasOwnProperty('sNotificationsubsectionName2')) {
                obj['sNotificationsubsectionName2'] = ApiClient.convertToType(data['sNotificationsubsectionName2'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultilingualNotificationsubsectionName</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultilingualNotificationsubsectionName</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sNotificationsubsectionName1'] && !(typeof data['sNotificationsubsectionName1'] === 'string' || data['sNotificationsubsectionName1'] instanceof String)) {
            throw new Error("Expected the field `sNotificationsubsectionName1` to be a primitive type in the JSON string but got " + data['sNotificationsubsectionName1']);
        }
        // ensure the json data is a string
        if (data['sNotificationsubsectionName2'] && !(typeof data['sNotificationsubsectionName2'] === 'string' || data['sNotificationsubsectionName2'] instanceof String)) {
            throw new Error("Expected the field `sNotificationsubsectionName2` to be a primitive type in the JSON string but got " + data['sNotificationsubsectionName2']);
        }

        return true;
    }

/**
     * Returns The name of the Notificationsubsection in French
     * @return {String}
     */
    getSNotificationsubsectionName1() {
        return this.sNotificationsubsectionName1;
    }

    /**
     * Sets The name of the Notificationsubsection in French
     * @param {String} sNotificationsubsectionName1 The name of the Notificationsubsection in French
     */
    setSNotificationsubsectionName1(sNotificationsubsectionName1) {
        this['sNotificationsubsectionName1'] = sNotificationsubsectionName1;
    }
/**
     * Returns The name of the Notificationsubsection in English
     * @return {String}
     */
    getSNotificationsubsectionName2() {
        return this.sNotificationsubsectionName2;
    }

    /**
     * Sets The name of the Notificationsubsection in English
     * @param {String} sNotificationsubsectionName2 The name of the Notificationsubsection in English
     */
    setSNotificationsubsectionName2(sNotificationsubsectionName2) {
        this['sNotificationsubsectionName2'] = sNotificationsubsectionName2;
    }

}



/**
 * The name of the Notificationsubsection in French
 * @member {String} sNotificationsubsectionName1
 */
MultilingualNotificationsubsectionName.prototype['sNotificationsubsectionName1'] = undefined;

/**
 * The name of the Notificationsubsection in English
 * @member {String} sNotificationsubsectionName2
 */
MultilingualNotificationsubsectionName.prototype['sNotificationsubsectionName2'] = undefined;






export default MultilingualNotificationsubsectionName;

