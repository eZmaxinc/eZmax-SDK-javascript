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
 * The BillingentityinternalAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/BillingentityinternalAutocompleteElementResponse
 * @version 1.2.0
 */
class BillingentityinternalAutocompleteElementResponse {
    /**
     * Constructs a new <code>BillingentityinternalAutocompleteElementResponse</code>.
     * A Billingentityinternal AutocompleteElement Response
     * @alias module:eZmaxAPI/model/BillingentityinternalAutocompleteElementResponse
     * @param pkiBillingentityinternalID {Number} The unique ID of the Billingentityinternal.
     * @param sBillingentityinternalDescriptionX {String} The description of the Billingentityinternal in the language of the requester
     * @param bBillingentityinternalIsactive {Boolean} Whether the Billingentityinternal is active or not
     */
    constructor(pkiBillingentityinternalID, sBillingentityinternalDescriptionX, bBillingentityinternalIsactive) { 
        
        BillingentityinternalAutocompleteElementResponse.initialize(this, pkiBillingentityinternalID, sBillingentityinternalDescriptionX, bBillingentityinternalIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiBillingentityinternalID, sBillingentityinternalDescriptionX, bBillingentityinternalIsactive) { 
        obj['pkiBillingentityinternalID'] = pkiBillingentityinternalID;
        obj['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
        obj['bBillingentityinternalIsactive'] = bBillingentityinternalIsactive;
    }

    /**
     * Constructs a <code>BillingentityinternalAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalAutocompleteElementResponse} The populated <code>BillingentityinternalAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalAutocompleteElementResponse();

            if (data.hasOwnProperty('pkiBillingentityinternalID')) {
                obj['pkiBillingentityinternalID'] = ApiClient.convertToType(data['pkiBillingentityinternalID'], 'Number');
            }
            if (data.hasOwnProperty('sBillingentityinternalDescriptionX')) {
                obj['sBillingentityinternalDescriptionX'] = ApiClient.convertToType(data['sBillingentityinternalDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('bBillingentityinternalIsactive')) {
                obj['bBillingentityinternalIsactive'] = ApiClient.convertToType(data['bBillingentityinternalIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalAutocompleteElementResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sBillingentityinternalDescriptionX'] && !(typeof data['sBillingentityinternalDescriptionX'] === 'string' || data['sBillingentityinternalDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sBillingentityinternalDescriptionX` to be a primitive type in the JSON string but got " + data['sBillingentityinternalDescriptionX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Billingentityinternal.
     * minimum: 0
     * @return {Number}
     */
    getPkiBillingentityinternalID() {
        return this.pkiBillingentityinternalID;
    }

    /**
     * Sets The unique ID of the Billingentityinternal.
     * @param {Number} pkiBillingentityinternalID The unique ID of the Billingentityinternal.
     */
    setPkiBillingentityinternalID(pkiBillingentityinternalID) {
        this['pkiBillingentityinternalID'] = pkiBillingentityinternalID;
    }
/**
     * Returns The description of the Billingentityinternal in the language of the requester
     * @return {String}
     */
    getSBillingentityinternalDescriptionX() {
        return this.sBillingentityinternalDescriptionX;
    }

    /**
     * Sets The description of the Billingentityinternal in the language of the requester
     * @param {String} sBillingentityinternalDescriptionX The description of the Billingentityinternal in the language of the requester
     */
    setSBillingentityinternalDescriptionX(sBillingentityinternalDescriptionX) {
        this['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
    }
/**
     * Returns Whether the Billingentityinternal is active or not
     * @return {Boolean}
     */
    getBBillingentityinternalIsactive() {
        return this.bBillingentityinternalIsactive;
    }

    /**
     * Sets Whether the Billingentityinternal is active or not
     * @param {Boolean} bBillingentityinternalIsactive Whether the Billingentityinternal is active or not
     */
    setBBillingentityinternalIsactive(bBillingentityinternalIsactive) {
        this['bBillingentityinternalIsactive'] = bBillingentityinternalIsactive;
    }

}

BillingentityinternalAutocompleteElementResponse.RequiredProperties = ["pkiBillingentityinternalID", "sBillingentityinternalDescriptionX", "bBillingentityinternalIsactive"];

/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} pkiBillingentityinternalID
 */
BillingentityinternalAutocompleteElementResponse.prototype['pkiBillingentityinternalID'] = undefined;

/**
 * The description of the Billingentityinternal in the language of the requester
 * @member {String} sBillingentityinternalDescriptionX
 */
BillingentityinternalAutocompleteElementResponse.prototype['sBillingentityinternalDescriptionX'] = undefined;

/**
 * Whether the Billingentityinternal is active or not
 * @member {Boolean} bBillingentityinternalIsactive
 */
BillingentityinternalAutocompleteElementResponse.prototype['bBillingentityinternalIsactive'] = undefined;






export default BillingentityinternalAutocompleteElementResponse;

