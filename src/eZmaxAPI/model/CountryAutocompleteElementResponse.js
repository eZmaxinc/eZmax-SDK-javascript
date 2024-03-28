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
 * The CountryAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/CountryAutocompleteElementResponse
 * @version 1.2.0
 */
class CountryAutocompleteElementResponse {
    /**
     * Constructs a new <code>CountryAutocompleteElementResponse</code>.
     * A Country AutocompleteElement Response
     * @alias module:eZmaxAPI/model/CountryAutocompleteElementResponse
     * @param pkiCountryID {Number} The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
     * @param sCountryNameX {String} The name of the Country in the language of the requester
     * @param sCountryShortname {String} The shortname of the Country
     * @param bCountryIsactive {Boolean} Whether the Country is active or not
     */
    constructor(pkiCountryID, sCountryNameX, sCountryShortname, bCountryIsactive) { 
        
        CountryAutocompleteElementResponse.initialize(this, pkiCountryID, sCountryNameX, sCountryShortname, bCountryIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiCountryID, sCountryNameX, sCountryShortname, bCountryIsactive) { 
        obj['pkiCountryID'] = pkiCountryID;
        obj['sCountryNameX'] = sCountryNameX;
        obj['sCountryShortname'] = sCountryShortname;
        obj['bCountryIsactive'] = bCountryIsactive;
    }

    /**
     * Constructs a <code>CountryAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CountryAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CountryAutocompleteElementResponse} The populated <code>CountryAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CountryAutocompleteElementResponse();

            if (data.hasOwnProperty('pkiCountryID')) {
                obj['pkiCountryID'] = ApiClient.convertToType(data['pkiCountryID'], 'Number');
            }
            if (data.hasOwnProperty('sCountryNameX')) {
                obj['sCountryNameX'] = ApiClient.convertToType(data['sCountryNameX'], 'String');
            }
            if (data.hasOwnProperty('sCountryShortname')) {
                obj['sCountryShortname'] = ApiClient.convertToType(data['sCountryShortname'], 'String');
            }
            if (data.hasOwnProperty('bCountryIsactive')) {
                obj['bCountryIsactive'] = ApiClient.convertToType(data['bCountryIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CountryAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CountryAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CountryAutocompleteElementResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sCountryNameX'] && !(typeof data['sCountryNameX'] === 'string' || data['sCountryNameX'] instanceof String)) {
            throw new Error("Expected the field `sCountryNameX` to be a primitive type in the JSON string but got " + data['sCountryNameX']);
        }
        // ensure the json data is a string
        if (data['sCountryShortname'] && !(typeof data['sCountryShortname'] === 'string' || data['sCountryShortname'] instanceof String)) {
            throw new Error("Expected the field `sCountryShortname` to be a primitive type in the JSON string but got " + data['sCountryShortname']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
     * minimum: 0
     * @return {Number}
     */
    getPkiCountryID() {
        return this.pkiCountryID;
    }

    /**
     * Sets The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
     * @param {Number} pkiCountryID The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
     */
    setPkiCountryID(pkiCountryID) {
        this['pkiCountryID'] = pkiCountryID;
    }
/**
     * Returns The name of the Country in the language of the requester
     * @return {String}
     */
    getSCountryNameX() {
        return this.sCountryNameX;
    }

    /**
     * Sets The name of the Country in the language of the requester
     * @param {String} sCountryNameX The name of the Country in the language of the requester
     */
    setSCountryNameX(sCountryNameX) {
        this['sCountryNameX'] = sCountryNameX;
    }
/**
     * Returns The shortname of the Country
     * @return {String}
     */
    getSCountryShortname() {
        return this.sCountryShortname;
    }

    /**
     * Sets The shortname of the Country
     * @param {String} sCountryShortname The shortname of the Country
     */
    setSCountryShortname(sCountryShortname) {
        this['sCountryShortname'] = sCountryShortname;
    }
/**
     * Returns Whether the Country is active or not
     * @return {Boolean}
     */
    getBCountryIsactive() {
        return this.bCountryIsactive;
    }

    /**
     * Sets Whether the Country is active or not
     * @param {Boolean} bCountryIsactive Whether the Country is active or not
     */
    setBCountryIsactive(bCountryIsactive) {
        this['bCountryIsactive'] = bCountryIsactive;
    }

}

CountryAutocompleteElementResponse.RequiredProperties = ["pkiCountryID", "sCountryNameX", "sCountryShortname", "bCountryIsactive"];

/**
 * The unique ID of the Country.  Here are some common values (Complete list must be retrieved from API):  |Value|Description| |-|-| |1|Canada| |2|United-States|
 * @member {Number} pkiCountryID
 */
CountryAutocompleteElementResponse.prototype['pkiCountryID'] = undefined;

/**
 * The name of the Country in the language of the requester
 * @member {String} sCountryNameX
 */
CountryAutocompleteElementResponse.prototype['sCountryNameX'] = undefined;

/**
 * The shortname of the Country
 * @member {String} sCountryShortname
 */
CountryAutocompleteElementResponse.prototype['sCountryShortname'] = undefined;

/**
 * Whether the Country is active or not
 * @member {Boolean} bCountryIsactive
 */
CountryAutocompleteElementResponse.prototype['bCountryIsactive'] = undefined;






export default CountryAutocompleteElementResponse;

