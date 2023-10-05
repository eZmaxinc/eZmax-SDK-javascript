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
 * The LanguageAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/LanguageAutocompleteElementResponse
 * @version 1.2.0
 */
class LanguageAutocompleteElementResponse {
    /**
     * Constructs a new <code>LanguageAutocompleteElementResponse</code>.
     * A Language AutocompleteElement Response
     * @alias module:eZmaxAPI/model/LanguageAutocompleteElementResponse
     * @param pkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sLanguageNameX {String} The Name of the Language in the language of the requester
     * @param bLanguageIsactive {Boolean} Whether the Language is active or not
     */
    constructor(pkiLanguageID, sLanguageNameX, bLanguageIsactive) { 
        
        LanguageAutocompleteElementResponse.initialize(this, pkiLanguageID, sLanguageNameX, bLanguageIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiLanguageID, sLanguageNameX, bLanguageIsactive) { 
        obj['pkiLanguageID'] = pkiLanguageID;
        obj['sLanguageNameX'] = sLanguageNameX;
        obj['bLanguageIsactive'] = bLanguageIsactive;
    }

    /**
     * Constructs a <code>LanguageAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/LanguageAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/LanguageAutocompleteElementResponse} The populated <code>LanguageAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LanguageAutocompleteElementResponse();

            if (data.hasOwnProperty('pkiLanguageID')) {
                obj['pkiLanguageID'] = ApiClient.convertToType(data['pkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sLanguageNameX')) {
                obj['sLanguageNameX'] = ApiClient.convertToType(data['sLanguageNameX'], 'String');
            }
            if (data.hasOwnProperty('bLanguageIsactive')) {
                obj['bLanguageIsactive'] = ApiClient.convertToType(data['bLanguageIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LanguageAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LanguageAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of LanguageAutocompleteElementResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sLanguageNameX'] && !(typeof data['sLanguageNameX'] === 'string' || data['sLanguageNameX'] instanceof String)) {
            throw new Error("Expected the field `sLanguageNameX` to be a primitive type in the JSON string but got " + data['sLanguageNameX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * minimum: 1
     * maximum: 2
     * @return {Number}
     */
    getPkiLanguageID() {
        return this.pkiLanguageID;
    }

    /**
     * Sets The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param {Number} pkiLanguageID The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    setPkiLanguageID(pkiLanguageID) {
        this['pkiLanguageID'] = pkiLanguageID;
    }
/**
     * Returns The Name of the Language in the language of the requester
     * @return {String}
     */
    getSLanguageNameX() {
        return this.sLanguageNameX;
    }

    /**
     * Sets The Name of the Language in the language of the requester
     * @param {String} sLanguageNameX The Name of the Language in the language of the requester
     */
    setSLanguageNameX(sLanguageNameX) {
        this['sLanguageNameX'] = sLanguageNameX;
    }
/**
     * Returns Whether the Language is active or not
     * @return {Boolean}
     */
    getBLanguageIsactive() {
        return this.bLanguageIsactive;
    }

    /**
     * Sets Whether the Language is active or not
     * @param {Boolean} bLanguageIsactive Whether the Language is active or not
     */
    setBLanguageIsactive(bLanguageIsactive) {
        this['bLanguageIsactive'] = bLanguageIsactive;
    }

}

LanguageAutocompleteElementResponse.RequiredProperties = ["pkiLanguageID", "sLanguageNameX", "bLanguageIsactive"];

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} pkiLanguageID
 */
LanguageAutocompleteElementResponse.prototype['pkiLanguageID'] = undefined;

/**
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
LanguageAutocompleteElementResponse.prototype['sLanguageNameX'] = undefined;

/**
 * Whether the Language is active or not
 * @member {Boolean} bLanguageIsactive
 */
LanguageAutocompleteElementResponse.prototype['bLanguageIsactive'] = undefined;






export default LanguageAutocompleteElementResponse;

