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
 * The PaymenttermAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/PaymenttermAutocompleteElementResponse
 * @version 1.2.0
 */
class PaymenttermAutocompleteElementResponse {
    /**
     * Constructs a new <code>PaymenttermAutocompleteElementResponse</code>.
     * A Paymentterm AutocompleteElement Response
     * @alias module:eZmaxAPI/model/PaymenttermAutocompleteElementResponse
     * @param pkiPaymenttermID {Number} The unique ID of the Paymentterm
     * @param sPaymenttermDescriptionX {String} The description of the Paymentterm in the language of the requester
     * @param bPaymenttermIsactive {Boolean} Whether the Paymentterm is active or not
     */
    constructor(pkiPaymenttermID, sPaymenttermDescriptionX, bPaymenttermIsactive) { 
        
        PaymenttermAutocompleteElementResponse.initialize(this, pkiPaymenttermID, sPaymenttermDescriptionX, bPaymenttermIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiPaymenttermID, sPaymenttermDescriptionX, bPaymenttermIsactive) { 
        obj['pkiPaymenttermID'] = pkiPaymenttermID;
        obj['sPaymenttermDescriptionX'] = sPaymenttermDescriptionX;
        obj['bPaymenttermIsactive'] = bPaymenttermIsactive;
    }

    /**
     * Constructs a <code>PaymenttermAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PaymenttermAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PaymenttermAutocompleteElementResponse} The populated <code>PaymenttermAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PaymenttermAutocompleteElementResponse();

            if (data.hasOwnProperty('pkiPaymenttermID')) {
                obj['pkiPaymenttermID'] = ApiClient.convertToType(data['pkiPaymenttermID'], 'Number');
            }
            if (data.hasOwnProperty('sPaymenttermDescriptionX')) {
                obj['sPaymenttermDescriptionX'] = ApiClient.convertToType(data['sPaymenttermDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('bPaymenttermIsactive')) {
                obj['bPaymenttermIsactive'] = ApiClient.convertToType(data['bPaymenttermIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PaymenttermAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PaymenttermAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PaymenttermAutocompleteElementResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sPaymenttermDescriptionX'] && !(typeof data['sPaymenttermDescriptionX'] === 'string' || data['sPaymenttermDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sPaymenttermDescriptionX` to be a primitive type in the JSON string but got " + data['sPaymenttermDescriptionX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Paymentterm
     * @return {Number}
     */
    getPkiPaymenttermID() {
        return this.pkiPaymenttermID;
    }

    /**
     * Sets The unique ID of the Paymentterm
     * @param {Number} pkiPaymenttermID The unique ID of the Paymentterm
     */
    setPkiPaymenttermID(pkiPaymenttermID) {
        this['pkiPaymenttermID'] = pkiPaymenttermID;
    }
/**
     * Returns The description of the Paymentterm in the language of the requester
     * @return {String}
     */
    getSPaymenttermDescriptionX() {
        return this.sPaymenttermDescriptionX;
    }

    /**
     * Sets The description of the Paymentterm in the language of the requester
     * @param {String} sPaymenttermDescriptionX The description of the Paymentterm in the language of the requester
     */
    setSPaymenttermDescriptionX(sPaymenttermDescriptionX) {
        this['sPaymenttermDescriptionX'] = sPaymenttermDescriptionX;
    }
/**
     * Returns Whether the Paymentterm is active or not
     * @return {Boolean}
     */
    getBPaymenttermIsactive() {
        return this.bPaymenttermIsactive;
    }

    /**
     * Sets Whether the Paymentterm is active or not
     * @param {Boolean} bPaymenttermIsactive Whether the Paymentterm is active or not
     */
    setBPaymenttermIsactive(bPaymenttermIsactive) {
        this['bPaymenttermIsactive'] = bPaymenttermIsactive;
    }

}

PaymenttermAutocompleteElementResponse.RequiredProperties = ["pkiPaymenttermID", "sPaymenttermDescriptionX", "bPaymenttermIsactive"];

/**
 * The unique ID of the Paymentterm
 * @member {Number} pkiPaymenttermID
 */
PaymenttermAutocompleteElementResponse.prototype['pkiPaymenttermID'] = undefined;

/**
 * The description of the Paymentterm in the language of the requester
 * @member {String} sPaymenttermDescriptionX
 */
PaymenttermAutocompleteElementResponse.prototype['sPaymenttermDescriptionX'] = undefined;

/**
 * Whether the Paymentterm is active or not
 * @member {Boolean} bPaymenttermIsactive
 */
PaymenttermAutocompleteElementResponse.prototype['bPaymenttermIsactive'] = undefined;






export default PaymenttermAutocompleteElementResponse;

