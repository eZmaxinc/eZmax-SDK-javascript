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
 * The MultilingualApikeyDescription model module.
 * @module eZmaxAPI/model/MultilingualApikeyDescription
 * @version 1.1.7
 */
class MultilingualApikeyDescription {
    /**
     * Constructs a new <code>MultilingualApikeyDescription</code>.
     * Description of the API Key  
     * @alias module:eZmaxAPI/model/MultilingualApikeyDescription
     */
    constructor() { 
        
        MultilingualApikeyDescription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultilingualApikeyDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/MultilingualApikeyDescription} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/MultilingualApikeyDescription} The populated <code>MultilingualApikeyDescription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultilingualApikeyDescription();

            if (data.hasOwnProperty('sApikeyDescription1')) {
                obj['sApikeyDescription1'] = ApiClient.convertToType(data['sApikeyDescription1'], 'String');
            }
            if (data.hasOwnProperty('sApikeyDescription2')) {
                obj['sApikeyDescription2'] = ApiClient.convertToType(data['sApikeyDescription2'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The description of the Apikey in French
     * @return {String}
     */
    getSApikeyDescription1() {
        return this.sApikeyDescription1;
    }

    /**
     * Sets The description of the Apikey in French
     * @param {String} sApikeyDescription1 The description of the Apikey in French
     */
    setSApikeyDescription1(sApikeyDescription1) {
        this['sApikeyDescription1'] = sApikeyDescription1;
    }
/**
     * Returns The description of the Apikey in English
     * @return {String}
     */
    getSApikeyDescription2() {
        return this.sApikeyDescription2;
    }

    /**
     * Sets The description of the Apikey in English
     * @param {String} sApikeyDescription2 The description of the Apikey in English
     */
    setSApikeyDescription2(sApikeyDescription2) {
        this['sApikeyDescription2'] = sApikeyDescription2;
    }

}

/**
 * The description of the Apikey in French
 * @member {String} sApikeyDescription1
 */
MultilingualApikeyDescription.prototype['sApikeyDescription1'] = undefined;

/**
 * The description of the Apikey in English
 * @member {String} sApikeyDescription2
 */
MultilingualApikeyDescription.prototype['sApikeyDescription2'] = undefined;






export default MultilingualApikeyDescription;

