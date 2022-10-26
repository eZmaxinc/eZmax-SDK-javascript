/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The MultilingualNotificationtestName model module.
 * @module eZmaxAPI/model/MultilingualNotificationtestName
 * @version 1.1.12
 */
class MultilingualNotificationtestName {
    /**
     * Constructs a new <code>MultilingualNotificationtestName</code>.
     * Name of the Notificationtest
     * @alias module:eZmaxAPI/model/MultilingualNotificationtestName
     */
    constructor() { 
        
        MultilingualNotificationtestName.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultilingualNotificationtestName</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/MultilingualNotificationtestName} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/MultilingualNotificationtestName} The populated <code>MultilingualNotificationtestName</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultilingualNotificationtestName();

            if (data.hasOwnProperty('sNotificationtestName1')) {
                obj['sNotificationtestName1'] = ApiClient.convertToType(data['sNotificationtestName1'], 'String');
            }
            if (data.hasOwnProperty('sNotificationtestName2')) {
                obj['sNotificationtestName2'] = ApiClient.convertToType(data['sNotificationtestName2'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The name of the Notificationtest in French
     * @return {String}
     */
    getSNotificationtestName1() {
        return this.sNotificationtestName1;
    }

    /**
     * Sets The name of the Notificationtest in French
     * @param {String} sNotificationtestName1 The name of the Notificationtest in French
     */
    setSNotificationtestName1(sNotificationtestName1) {
        this['sNotificationtestName1'] = sNotificationtestName1;
    }
/**
     * Returns The name of the Notificationtest in English
     * @return {String}
     */
    getSNotificationtestName2() {
        return this.sNotificationtestName2;
    }

    /**
     * Sets The name of the Notificationtest in English
     * @param {String} sNotificationtestName2 The name of the Notificationtest in English
     */
    setSNotificationtestName2(sNotificationtestName2) {
        this['sNotificationtestName2'] = sNotificationtestName2;
    }

}

/**
 * The name of the Notificationtest in French
 * @member {String} sNotificationtestName1
 */
MultilingualNotificationtestName.prototype['sNotificationtestName1'] = undefined;

/**
 * The name of the Notificationtest in English
 * @member {String} sNotificationtestName2
 */
MultilingualNotificationtestName.prototype['sNotificationtestName2'] = undefined;






export default MultilingualNotificationtestName;

