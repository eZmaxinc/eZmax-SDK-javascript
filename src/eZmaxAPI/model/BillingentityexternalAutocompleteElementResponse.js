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
 * The BillingentityexternalAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/BillingentityexternalAutocompleteElementResponse
 * @version 1.1.18
 */
class BillingentityexternalAutocompleteElementResponse {
    /**
     * Constructs a new <code>BillingentityexternalAutocompleteElementResponse</code>.
     * A Billingentityexternal AutocompleteElement Response
     * @alias module:eZmaxAPI/model/BillingentityexternalAutocompleteElementResponse
     * @param pkiBillingentityexternalID {Number} The unique ID of the Billingentityexternal
     * @param sBillingentityexternalDescription {String} The description of the Billingentityexternal
     * @param bBillingentityexternalIsactive {Boolean} Whether the Billingentityexternal is active or not
     */
    constructor(pkiBillingentityexternalID, sBillingentityexternalDescription, bBillingentityexternalIsactive) { 
        
        BillingentityexternalAutocompleteElementResponse.initialize(this, pkiBillingentityexternalID, sBillingentityexternalDescription, bBillingentityexternalIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiBillingentityexternalID, sBillingentityexternalDescription, bBillingentityexternalIsactive) { 
        obj['pkiBillingentityexternalID'] = pkiBillingentityexternalID;
        obj['sBillingentityexternalDescription'] = sBillingentityexternalDescription;
        obj['bBillingentityexternalIsactive'] = bBillingentityexternalIsactive;
    }

    /**
     * Constructs a <code>BillingentityexternalAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityexternalAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityexternalAutocompleteElementResponse} The populated <code>BillingentityexternalAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityexternalAutocompleteElementResponse();

            if (data.hasOwnProperty('pkiBillingentityexternalID')) {
                obj['pkiBillingentityexternalID'] = ApiClient.convertToType(data['pkiBillingentityexternalID'], 'Number');
            }
            if (data.hasOwnProperty('sBillingentityexternalDescription')) {
                obj['sBillingentityexternalDescription'] = ApiClient.convertToType(data['sBillingentityexternalDescription'], 'String');
            }
            if (data.hasOwnProperty('bBillingentityexternalIsactive')) {
                obj['bBillingentityexternalIsactive'] = ApiClient.convertToType(data['bBillingentityexternalIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityexternalAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityexternalAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityexternalAutocompleteElementResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sBillingentityexternalDescription'] && !(typeof data['sBillingentityexternalDescription'] === 'string' || data['sBillingentityexternalDescription'] instanceof String)) {
            throw new Error("Expected the field `sBillingentityexternalDescription` to be a primitive type in the JSON string but got " + data['sBillingentityexternalDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Billingentityexternal
     * minimum: 1
     * @return {Number}
     */
    getPkiBillingentityexternalID() {
        return this.pkiBillingentityexternalID;
    }

    /**
     * Sets The unique ID of the Billingentityexternal
     * @param {Number} pkiBillingentityexternalID The unique ID of the Billingentityexternal
     */
    setPkiBillingentityexternalID(pkiBillingentityexternalID) {
        this['pkiBillingentityexternalID'] = pkiBillingentityexternalID;
    }
/**
     * Returns The description of the Billingentityexternal
     * @return {String}
     */
    getSBillingentityexternalDescription() {
        return this.sBillingentityexternalDescription;
    }

    /**
     * Sets The description of the Billingentityexternal
     * @param {String} sBillingentityexternalDescription The description of the Billingentityexternal
     */
    setSBillingentityexternalDescription(sBillingentityexternalDescription) {
        this['sBillingentityexternalDescription'] = sBillingentityexternalDescription;
    }
/**
     * Returns Whether the Billingentityexternal is active or not
     * @return {Boolean}
     */
    getBBillingentityexternalIsactive() {
        return this.bBillingentityexternalIsactive;
    }

    /**
     * Sets Whether the Billingentityexternal is active or not
     * @param {Boolean} bBillingentityexternalIsactive Whether the Billingentityexternal is active or not
     */
    setBBillingentityexternalIsactive(bBillingentityexternalIsactive) {
        this['bBillingentityexternalIsactive'] = bBillingentityexternalIsactive;
    }

}

BillingentityexternalAutocompleteElementResponse.RequiredProperties = ["pkiBillingentityexternalID", "sBillingentityexternalDescription", "bBillingentityexternalIsactive"];

/**
 * The unique ID of the Billingentityexternal
 * @member {Number} pkiBillingentityexternalID
 */
BillingentityexternalAutocompleteElementResponse.prototype['pkiBillingentityexternalID'] = undefined;

/**
 * The description of the Billingentityexternal
 * @member {String} sBillingentityexternalDescription
 */
BillingentityexternalAutocompleteElementResponse.prototype['sBillingentityexternalDescription'] = undefined;

/**
 * Whether the Billingentityexternal is active or not
 * @member {Boolean} bBillingentityexternalIsactive
 */
BillingentityexternalAutocompleteElementResponse.prototype['bBillingentityexternalIsactive'] = undefined;






export default BillingentityexternalAutocompleteElementResponse;

