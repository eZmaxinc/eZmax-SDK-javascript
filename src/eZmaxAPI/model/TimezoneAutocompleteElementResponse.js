/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The TimezoneAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/TimezoneAutocompleteElementResponse
 * @version 1.1.13
 */
class TimezoneAutocompleteElementResponse {
    /**
     * Constructs a new <code>TimezoneAutocompleteElementResponse</code>.
     * A Timezone AutocompleteElement Response
     * @alias module:eZmaxAPI/model/TimezoneAutocompleteElementResponse
     * @param sTimezoneName {String} The description of the Timezone in the language of the requester
     * @param pkiTimezoneID {Number} The unique ID of the Timezone
     * @param bTimezoneIsactive {Boolean} Whether the Timezone is active or not
     */
    constructor(sTimezoneName, pkiTimezoneID, bTimezoneIsactive) { 
        
        TimezoneAutocompleteElementResponse.initialize(this, sTimezoneName, pkiTimezoneID, bTimezoneIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sTimezoneName, pkiTimezoneID, bTimezoneIsactive) { 
        obj['sTimezoneName'] = sTimezoneName;
        obj['pkiTimezoneID'] = pkiTimezoneID;
        obj['bTimezoneIsactive'] = bTimezoneIsactive;
    }

    /**
     * Constructs a <code>TimezoneAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/TimezoneAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/TimezoneAutocompleteElementResponse} The populated <code>TimezoneAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TimezoneAutocompleteElementResponse();

            if (data.hasOwnProperty('sTimezoneName')) {
                obj['sTimezoneName'] = ApiClient.convertToType(data['sTimezoneName'], 'String');
            }
            if (data.hasOwnProperty('pkiTimezoneID')) {
                obj['pkiTimezoneID'] = ApiClient.convertToType(data['pkiTimezoneID'], 'Number');
            }
            if (data.hasOwnProperty('bTimezoneIsactive')) {
                obj['bTimezoneIsactive'] = ApiClient.convertToType(data['bTimezoneIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The description of the Timezone in the language of the requester
     * @return {String}
     */
    getSTimezoneName() {
        return this.sTimezoneName;
    }

    /**
     * Sets The description of the Timezone in the language of the requester
     * @param {String} sTimezoneName The description of the Timezone in the language of the requester
     */
    setSTimezoneName(sTimezoneName) {
        this['sTimezoneName'] = sTimezoneName;
    }
/**
     * Returns The unique ID of the Timezone
     * minimum: 0
     * @return {Number}
     */
    getPkiTimezoneID() {
        return this.pkiTimezoneID;
    }

    /**
     * Sets The unique ID of the Timezone
     * @param {Number} pkiTimezoneID The unique ID of the Timezone
     */
    setPkiTimezoneID(pkiTimezoneID) {
        this['pkiTimezoneID'] = pkiTimezoneID;
    }
/**
     * Returns Whether the Timezone is active or not
     * @return {Boolean}
     */
    getBTimezoneIsactive() {
        return this.bTimezoneIsactive;
    }

    /**
     * Sets Whether the Timezone is active or not
     * @param {Boolean} bTimezoneIsactive Whether the Timezone is active or not
     */
    setBTimezoneIsactive(bTimezoneIsactive) {
        this['bTimezoneIsactive'] = bTimezoneIsactive;
    }

}

/**
 * The description of the Timezone in the language of the requester
 * @member {String} sTimezoneName
 */
TimezoneAutocompleteElementResponse.prototype['sTimezoneName'] = undefined;

/**
 * The unique ID of the Timezone
 * @member {Number} pkiTimezoneID
 */
TimezoneAutocompleteElementResponse.prototype['pkiTimezoneID'] = undefined;

/**
 * Whether the Timezone is active or not
 * @member {Boolean} bTimezoneIsactive
 */
TimezoneAutocompleteElementResponse.prototype['bTimezoneIsactive'] = undefined;






export default TimezoneAutocompleteElementResponse;

