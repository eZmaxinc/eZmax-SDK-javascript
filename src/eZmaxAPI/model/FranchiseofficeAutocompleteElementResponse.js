/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.15
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The FranchiseofficeAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/FranchiseofficeAutocompleteElementResponse
 * @version 1.1.15
 */
class FranchiseofficeAutocompleteElementResponse {
    /**
     * Constructs a new <code>FranchiseofficeAutocompleteElementResponse</code>.
     * A Franchiseoffice AutocompleteElement Response
     * @alias module:eZmaxAPI/model/FranchiseofficeAutocompleteElementResponse
     * @param sFranchiseofficeDescription {String} The description of the Franchiseoffice in the language of the requester
     * @param pkiFranchiseofficeID {Number} The unique ID of the Franchisereoffice
     * @param bFranchiseofficeIsactive {Boolean} Whether the Franchiseoffice is active or not
     */
    constructor(sFranchiseofficeDescription, pkiFranchiseofficeID, bFranchiseofficeIsactive) { 
        
        FranchiseofficeAutocompleteElementResponse.initialize(this, sFranchiseofficeDescription, pkiFranchiseofficeID, bFranchiseofficeIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sFranchiseofficeDescription, pkiFranchiseofficeID, bFranchiseofficeIsactive) { 
        obj['sFranchiseofficeDescription'] = sFranchiseofficeDescription;
        obj['pkiFranchiseofficeID'] = pkiFranchiseofficeID;
        obj['bFranchiseofficeIsactive'] = bFranchiseofficeIsactive;
    }

    /**
     * Constructs a <code>FranchiseofficeAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/FranchiseofficeAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/FranchiseofficeAutocompleteElementResponse} The populated <code>FranchiseofficeAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FranchiseofficeAutocompleteElementResponse();

            if (data.hasOwnProperty('sFranchiseofficeDescription')) {
                obj['sFranchiseofficeDescription'] = ApiClient.convertToType(data['sFranchiseofficeDescription'], 'String');
            }
            if (data.hasOwnProperty('pkiFranchiseofficeID')) {
                obj['pkiFranchiseofficeID'] = ApiClient.convertToType(data['pkiFranchiseofficeID'], 'Number');
            }
            if (data.hasOwnProperty('bFranchiseofficeIsactive')) {
                obj['bFranchiseofficeIsactive'] = ApiClient.convertToType(data['bFranchiseofficeIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The description of the Franchiseoffice in the language of the requester
     * @return {String}
     */
    getSFranchiseofficeDescription() {
        return this.sFranchiseofficeDescription;
    }

    /**
     * Sets The description of the Franchiseoffice in the language of the requester
     * @param {String} sFranchiseofficeDescription The description of the Franchiseoffice in the language of the requester
     */
    setSFranchiseofficeDescription(sFranchiseofficeDescription) {
        this['sFranchiseofficeDescription'] = sFranchiseofficeDescription;
    }
/**
     * Returns The unique ID of the Franchisereoffice
     * minimum: 0
     * @return {Number}
     */
    getPkiFranchiseofficeID() {
        return this.pkiFranchiseofficeID;
    }

    /**
     * Sets The unique ID of the Franchisereoffice
     * @param {Number} pkiFranchiseofficeID The unique ID of the Franchisereoffice
     */
    setPkiFranchiseofficeID(pkiFranchiseofficeID) {
        this['pkiFranchiseofficeID'] = pkiFranchiseofficeID;
    }
/**
     * Returns Whether the Franchiseoffice is active or not
     * @return {Boolean}
     */
    getBFranchiseofficeIsactive() {
        return this.bFranchiseofficeIsactive;
    }

    /**
     * Sets Whether the Franchiseoffice is active or not
     * @param {Boolean} bFranchiseofficeIsactive Whether the Franchiseoffice is active or not
     */
    setBFranchiseofficeIsactive(bFranchiseofficeIsactive) {
        this['bFranchiseofficeIsactive'] = bFranchiseofficeIsactive;
    }

}

/**
 * The description of the Franchiseoffice in the language of the requester
 * @member {String} sFranchiseofficeDescription
 */
FranchiseofficeAutocompleteElementResponse.prototype['sFranchiseofficeDescription'] = undefined;

/**
 * The unique ID of the Franchisereoffice
 * @member {Number} pkiFranchiseofficeID
 */
FranchiseofficeAutocompleteElementResponse.prototype['pkiFranchiseofficeID'] = undefined;

/**
 * Whether the Franchiseoffice is active or not
 * @member {Boolean} bFranchiseofficeIsactive
 */
FranchiseofficeAutocompleteElementResponse.prototype['bFranchiseofficeIsactive'] = undefined;






export default FranchiseofficeAutocompleteElementResponse;

