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
 * The EzmaxinvoicingAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/EzmaxinvoicingAutocompleteElementResponse
 * @version 1.2.0
 */
class EzmaxinvoicingAutocompleteElementResponse {
    /**
     * Constructs a new <code>EzmaxinvoicingAutocompleteElementResponse</code>.
     * A Ezmaxinvoicing AutocompleteElement Response
     * @alias module:eZmaxAPI/model/EzmaxinvoicingAutocompleteElementResponse
     * @param yyyymmEzmaxinvoicing {String} The YYYYMM period of the Ezmaxinvoicing
     * @param pkiEzmaxinvoicingID {Number} The unique ID of the Ezmaxinvoicing
     * @param bEzmaxinvoicingIsactive {Boolean} Whether the Ezmaxinvoicing is active or not
     */
    constructor(yyyymmEzmaxinvoicing, pkiEzmaxinvoicingID, bEzmaxinvoicingIsactive) { 
        
        EzmaxinvoicingAutocompleteElementResponse.initialize(this, yyyymmEzmaxinvoicing, pkiEzmaxinvoicingID, bEzmaxinvoicingIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, yyyymmEzmaxinvoicing, pkiEzmaxinvoicingID, bEzmaxinvoicingIsactive) { 
        obj['yyyymmEzmaxinvoicing'] = yyyymmEzmaxinvoicing;
        obj['pkiEzmaxinvoicingID'] = pkiEzmaxinvoicingID;
        obj['bEzmaxinvoicingIsactive'] = bEzmaxinvoicingIsactive;
    }

    /**
     * Constructs a <code>EzmaxinvoicingAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingAutocompleteElementResponse} The populated <code>EzmaxinvoicingAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingAutocompleteElementResponse();

            if (data.hasOwnProperty('yyyymmEzmaxinvoicing')) {
                obj['yyyymmEzmaxinvoicing'] = ApiClient.convertToType(data['yyyymmEzmaxinvoicing'], 'String');
            }
            if (data.hasOwnProperty('pkiEzmaxinvoicingID')) {
                obj['pkiEzmaxinvoicingID'] = ApiClient.convertToType(data['pkiEzmaxinvoicingID'], 'Number');
            }
            if (data.hasOwnProperty('bEzmaxinvoicingIsactive')) {
                obj['bEzmaxinvoicingIsactive'] = ApiClient.convertToType(data['bEzmaxinvoicingIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingAutocompleteElementResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['yyyymmEzmaxinvoicing'] && !(typeof data['yyyymmEzmaxinvoicing'] === 'string' || data['yyyymmEzmaxinvoicing'] instanceof String)) {
            throw new Error("Expected the field `yyyymmEzmaxinvoicing` to be a primitive type in the JSON string but got " + data['yyyymmEzmaxinvoicing']);
        }

        return true;
    }

/**
     * Returns The YYYYMM period of the Ezmaxinvoicing
     * @return {String}
     */
    getYyyymmEzmaxinvoicing() {
        return this.yyyymmEzmaxinvoicing;
    }

    /**
     * Sets The YYYYMM period of the Ezmaxinvoicing
     * @param {String} yyyymmEzmaxinvoicing The YYYYMM period of the Ezmaxinvoicing
     */
    setYyyymmEzmaxinvoicing(yyyymmEzmaxinvoicing) {
        this['yyyymmEzmaxinvoicing'] = yyyymmEzmaxinvoicing;
    }
/**
     * Returns The unique ID of the Ezmaxinvoicing
     * minimum: 0
     * @return {Number}
     */
    getPkiEzmaxinvoicingID() {
        return this.pkiEzmaxinvoicingID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicing
     * @param {Number} pkiEzmaxinvoicingID The unique ID of the Ezmaxinvoicing
     */
    setPkiEzmaxinvoicingID(pkiEzmaxinvoicingID) {
        this['pkiEzmaxinvoicingID'] = pkiEzmaxinvoicingID;
    }
/**
     * Returns Whether the Ezmaxinvoicing is active or not
     * @return {Boolean}
     */
    getBEzmaxinvoicingIsactive() {
        return this.bEzmaxinvoicingIsactive;
    }

    /**
     * Sets Whether the Ezmaxinvoicing is active or not
     * @param {Boolean} bEzmaxinvoicingIsactive Whether the Ezmaxinvoicing is active or not
     */
    setBEzmaxinvoicingIsactive(bEzmaxinvoicingIsactive) {
        this['bEzmaxinvoicingIsactive'] = bEzmaxinvoicingIsactive;
    }

}

EzmaxinvoicingAutocompleteElementResponse.RequiredProperties = ["yyyymmEzmaxinvoicing", "pkiEzmaxinvoicingID", "bEzmaxinvoicingIsactive"];

/**
 * The YYYYMM period of the Ezmaxinvoicing
 * @member {String} yyyymmEzmaxinvoicing
 */
EzmaxinvoicingAutocompleteElementResponse.prototype['yyyymmEzmaxinvoicing'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicing
 * @member {Number} pkiEzmaxinvoicingID
 */
EzmaxinvoicingAutocompleteElementResponse.prototype['pkiEzmaxinvoicingID'] = undefined;

/**
 * Whether the Ezmaxinvoicing is active or not
 * @member {Boolean} bEzmaxinvoicingIsactive
 */
EzmaxinvoicingAutocompleteElementResponse.prototype['bEzmaxinvoicingIsactive'] = undefined;






export default EzmaxinvoicingAutocompleteElementResponse;

