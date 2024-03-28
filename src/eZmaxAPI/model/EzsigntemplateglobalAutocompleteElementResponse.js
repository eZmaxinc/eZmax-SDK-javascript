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
 * The EzsigntemplateglobalAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/EzsigntemplateglobalAutocompleteElementResponse
 * @version 1.2.0
 */
class EzsigntemplateglobalAutocompleteElementResponse {
    /**
     * Constructs a new <code>EzsigntemplateglobalAutocompleteElementResponse</code>.
     * A Ezsigntemplate AutocompleteElement Response
     * @alias module:eZmaxAPI/model/EzsigntemplateglobalAutocompleteElementResponse
     * @param pkiEzsigntemplateglobalID {Number} The unique ID of the Ezsigntemplateglobal
     * @param sEzsigntemplateglobalDescription {String} The description of the Ezsigntemplate
     * @param bEzsigntemplateglobalIsactive {Boolean} Whether the Ezsigntemplate is active or not
     */
    constructor(pkiEzsigntemplateglobalID, sEzsigntemplateglobalDescription, bEzsigntemplateglobalIsactive) { 
        
        EzsigntemplateglobalAutocompleteElementResponse.initialize(this, pkiEzsigntemplateglobalID, sEzsigntemplateglobalDescription, bEzsigntemplateglobalIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplateglobalID, sEzsigntemplateglobalDescription, bEzsigntemplateglobalIsactive) { 
        obj['pkiEzsigntemplateglobalID'] = pkiEzsigntemplateglobalID;
        obj['sEzsigntemplateglobalDescription'] = sEzsigntemplateglobalDescription;
        obj['bEzsigntemplateglobalIsactive'] = bEzsigntemplateglobalIsactive;
    }

    /**
     * Constructs a <code>EzsigntemplateglobalAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateglobalAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateglobalAutocompleteElementResponse} The populated <code>EzsigntemplateglobalAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateglobalAutocompleteElementResponse();

            if (data.hasOwnProperty('pkiEzsigntemplateglobalID')) {
                obj['pkiEzsigntemplateglobalID'] = ApiClient.convertToType(data['pkiEzsigntemplateglobalID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplateglobalDescription')) {
                obj['sEzsigntemplateglobalDescription'] = ApiClient.convertToType(data['sEzsigntemplateglobalDescription'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplateglobalIsactive')) {
                obj['bEzsigntemplateglobalIsactive'] = ApiClient.convertToType(data['bEzsigntemplateglobalIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplateglobalAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplateglobalAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplateglobalAutocompleteElementResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sEzsigntemplateglobalDescription'] && !(typeof data['sEzsigntemplateglobalDescription'] === 'string' || data['sEzsigntemplateglobalDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplateglobalDescription` to be a primitive type in the JSON string but got " + data['sEzsigntemplateglobalDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplateglobal
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplateglobalID() {
        return this.pkiEzsigntemplateglobalID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplateglobal
     * @param {Number} pkiEzsigntemplateglobalID The unique ID of the Ezsigntemplateglobal
     */
    setPkiEzsigntemplateglobalID(pkiEzsigntemplateglobalID) {
        this['pkiEzsigntemplateglobalID'] = pkiEzsigntemplateglobalID;
    }
/**
     * Returns The description of the Ezsigntemplate
     * @return {String}
     */
    getSEzsigntemplateglobalDescription() {
        return this.sEzsigntemplateglobalDescription;
    }

    /**
     * Sets The description of the Ezsigntemplate
     * @param {String} sEzsigntemplateglobalDescription The description of the Ezsigntemplate
     */
    setSEzsigntemplateglobalDescription(sEzsigntemplateglobalDescription) {
        this['sEzsigntemplateglobalDescription'] = sEzsigntemplateglobalDescription;
    }
/**
     * Returns Whether the Ezsigntemplate is active or not
     * @return {Boolean}
     */
    getBEzsigntemplateglobalIsactive() {
        return this.bEzsigntemplateglobalIsactive;
    }

    /**
     * Sets Whether the Ezsigntemplate is active or not
     * @param {Boolean} bEzsigntemplateglobalIsactive Whether the Ezsigntemplate is active or not
     */
    setBEzsigntemplateglobalIsactive(bEzsigntemplateglobalIsactive) {
        this['bEzsigntemplateglobalIsactive'] = bEzsigntemplateglobalIsactive;
    }

}

EzsigntemplateglobalAutocompleteElementResponse.RequiredProperties = ["pkiEzsigntemplateglobalID", "sEzsigntemplateglobalDescription", "bEzsigntemplateglobalIsactive"];

/**
 * The unique ID of the Ezsigntemplateglobal
 * @member {Number} pkiEzsigntemplateglobalID
 */
EzsigntemplateglobalAutocompleteElementResponse.prototype['pkiEzsigntemplateglobalID'] = undefined;

/**
 * The description of the Ezsigntemplate
 * @member {String} sEzsigntemplateglobalDescription
 */
EzsigntemplateglobalAutocompleteElementResponse.prototype['sEzsigntemplateglobalDescription'] = undefined;

/**
 * Whether the Ezsigntemplate is active or not
 * @member {Boolean} bEzsigntemplateglobalIsactive
 */
EzsigntemplateglobalAutocompleteElementResponse.prototype['bEzsigntemplateglobalIsactive'] = undefined;






export default EzsigntemplateglobalAutocompleteElementResponse;
