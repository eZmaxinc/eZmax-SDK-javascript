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

/**
 * The MultilingualEzsignsignergroupDescription model module.
 * @module eZmaxAPI/model/MultilingualEzsignsignergroupDescription
 * @version 1.1.18
 */
class MultilingualEzsignsignergroupDescription {
    /**
     * Constructs a new <code>MultilingualEzsignsignergroupDescription</code>.
     * Description of the Ezsignsignergroup
     * @alias module:eZmaxAPI/model/MultilingualEzsignsignergroupDescription
     */
    constructor() { 
        
        MultilingualEzsignsignergroupDescription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultilingualEzsignsignergroupDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/MultilingualEzsignsignergroupDescription} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/MultilingualEzsignsignergroupDescription} The populated <code>MultilingualEzsignsignergroupDescription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultilingualEzsignsignergroupDescription();

            if (data.hasOwnProperty('sEzsignsignergroupDescription1')) {
                obj['sEzsignsignergroupDescription1'] = ApiClient.convertToType(data['sEzsignsignergroupDescription1'], 'String');
            }
            if (data.hasOwnProperty('sEzsignsignergroupDescription2')) {
                obj['sEzsignsignergroupDescription2'] = ApiClient.convertToType(data['sEzsignsignergroupDescription2'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>MultilingualEzsignsignergroupDescription</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>MultilingualEzsignsignergroupDescription</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['sEzsignsignergroupDescription1'] && !(typeof data['sEzsignsignergroupDescription1'] === 'string' || data['sEzsignsignergroupDescription1'] instanceof String)) {
            throw new Error("Expected the field `sEzsignsignergroupDescription1` to be a primitive type in the JSON string but got " + data['sEzsignsignergroupDescription1']);
        }
        // ensure the json data is a string
        if (data['sEzsignsignergroupDescription2'] && !(typeof data['sEzsignsignergroupDescription2'] === 'string' || data['sEzsignsignergroupDescription2'] instanceof String)) {
            throw new Error("Expected the field `sEzsignsignergroupDescription2` to be a primitive type in the JSON string but got " + data['sEzsignsignergroupDescription2']);
        }

        return true;
    }

/**
     * Returns The description of the Ezsignsignergroup in French
     * @return {String}
     */
    getSEzsignsignergroupDescription1() {
        return this.sEzsignsignergroupDescription1;
    }

    /**
     * Sets The description of the Ezsignsignergroup in French
     * @param {String} sEzsignsignergroupDescription1 The description of the Ezsignsignergroup in French
     */
    setSEzsignsignergroupDescription1(sEzsignsignergroupDescription1) {
        this['sEzsignsignergroupDescription1'] = sEzsignsignergroupDescription1;
    }
/**
     * Returns The description of the Ezsignsignergroup in English
     * @return {String}
     */
    getSEzsignsignergroupDescription2() {
        return this.sEzsignsignergroupDescription2;
    }

    /**
     * Sets The description of the Ezsignsignergroup in English
     * @param {String} sEzsignsignergroupDescription2 The description of the Ezsignsignergroup in English
     */
    setSEzsignsignergroupDescription2(sEzsignsignergroupDescription2) {
        this['sEzsignsignergroupDescription2'] = sEzsignsignergroupDescription2;
    }

}



/**
 * The description of the Ezsignsignergroup in French
 * @member {String} sEzsignsignergroupDescription1
 */
MultilingualEzsignsignergroupDescription.prototype['sEzsignsignergroupDescription1'] = undefined;

/**
 * The description of the Ezsignsignergroup in English
 * @member {String} sEzsignsignergroupDescription2
 */
MultilingualEzsignsignergroupDescription.prototype['sEzsignsignergroupDescription2'] = undefined;






export default MultilingualEzsignsignergroupDescription;

