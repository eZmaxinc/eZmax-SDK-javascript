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
 * The PhonetypeAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/PhonetypeAutocompleteElementResponse
 * @version 1.1.18
 */
class PhonetypeAutocompleteElementResponse {
    /**
     * Constructs a new <code>PhonetypeAutocompleteElementResponse</code>.
     * A Phonetype AutocompleteElement Response
     * @alias module:eZmaxAPI/model/PhonetypeAutocompleteElementResponse
     * @param pkiPhonetypeID {Number} The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     * @param sPhonetypeNameX {String} The name of the Phonetype in the language of the requester
     * @param bPhonetypeIsactive {Boolean} Whether the Phonetype is active or not
     */
    constructor(pkiPhonetypeID, sPhonetypeNameX, bPhonetypeIsactive) { 
        
        PhonetypeAutocompleteElementResponse.initialize(this, pkiPhonetypeID, sPhonetypeNameX, bPhonetypeIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiPhonetypeID, sPhonetypeNameX, bPhonetypeIsactive) { 
        obj['pkiPhonetypeID'] = pkiPhonetypeID;
        obj['sPhonetypeNameX'] = sPhonetypeNameX;
        obj['bPhonetypeIsactive'] = bPhonetypeIsactive;
    }

    /**
     * Constructs a <code>PhonetypeAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/PhonetypeAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/PhonetypeAutocompleteElementResponse} The populated <code>PhonetypeAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PhonetypeAutocompleteElementResponse();

            if (data.hasOwnProperty('pkiPhonetypeID')) {
                obj['pkiPhonetypeID'] = ApiClient.convertToType(data['pkiPhonetypeID'], 'Number');
            }
            if (data.hasOwnProperty('sPhonetypeNameX')) {
                obj['sPhonetypeNameX'] = ApiClient.convertToType(data['sPhonetypeNameX'], 'String');
            }
            if (data.hasOwnProperty('bPhonetypeIsactive')) {
                obj['bPhonetypeIsactive'] = ApiClient.convertToType(data['bPhonetypeIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>PhonetypeAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>PhonetypeAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of PhonetypeAutocompleteElementResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sPhonetypeNameX'] && !(typeof data['sPhonetypeNameX'] === 'string' || data['sPhonetypeNameX'] instanceof String)) {
            throw new Error("Expected the field `sPhonetypeNameX` to be a primitive type in the JSON string but got " + data['sPhonetypeNameX']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     * minimum: 0
     * @return {Number}
     */
    getPkiPhonetypeID() {
        return this.pkiPhonetypeID;
    }

    /**
     * Sets The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     * @param {Number} pkiPhonetypeID The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
     */
    setPkiPhonetypeID(pkiPhonetypeID) {
        this['pkiPhonetypeID'] = pkiPhonetypeID;
    }
/**
     * Returns The name of the Phonetype in the language of the requester
     * @return {String}
     */
    getSPhonetypeNameX() {
        return this.sPhonetypeNameX;
    }

    /**
     * Sets The name of the Phonetype in the language of the requester
     * @param {String} sPhonetypeNameX The name of the Phonetype in the language of the requester
     */
    setSPhonetypeNameX(sPhonetypeNameX) {
        this['sPhonetypeNameX'] = sPhonetypeNameX;
    }
/**
     * Returns Whether the Phonetype is active or not
     * @return {Boolean}
     */
    getBPhonetypeIsactive() {
        return this.bPhonetypeIsactive;
    }

    /**
     * Sets Whether the Phonetype is active or not
     * @param {Boolean} bPhonetypeIsactive Whether the Phonetype is active or not
     */
    setBPhonetypeIsactive(bPhonetypeIsactive) {
        this['bPhonetypeIsactive'] = bPhonetypeIsactive;
    }

}

PhonetypeAutocompleteElementResponse.RequiredProperties = ["pkiPhonetypeID", "sPhonetypeNameX", "bPhonetypeIsactive"];

/**
 * The unique ID of the Phonetype.  Valid values:  |Value|Description| |-|-| |1|Office| |2|Home| |3|Mobile| |4|Fax| |5|Pager| |6|Toll Free|
 * @member {Number} pkiPhonetypeID
 */
PhonetypeAutocompleteElementResponse.prototype['pkiPhonetypeID'] = undefined;

/**
 * The name of the Phonetype in the language of the requester
 * @member {String} sPhonetypeNameX
 */
PhonetypeAutocompleteElementResponse.prototype['sPhonetypeNameX'] = undefined;

/**
 * Whether the Phonetype is active or not
 * @member {Boolean} bPhonetypeIsactive
 */
PhonetypeAutocompleteElementResponse.prototype['bPhonetypeIsactive'] = undefined;






export default PhonetypeAutocompleteElementResponse;

