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
 * The VariableexpenseAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/VariableexpenseAutocompleteElementResponse
 * @version 1.2.0
 */
class VariableexpenseAutocompleteElementResponse {
    /**
     * Constructs a new <code>VariableexpenseAutocompleteElementResponse</code>.
     * A Variableexpense AutocompleteElement Response
     * @alias module:eZmaxAPI/model/VariableexpenseAutocompleteElementResponse
     * @param sVariableexpenseDescriptionX {String} The description of the Variableexpense in the language of the requester
     * @param pkiVariableexpenseID {Number} The unique ID of the Variableexpense
     * @param bVariableexpenseIsactive {Boolean} Whether the variableexpense is active or not
     */
    constructor(sVariableexpenseDescriptionX, pkiVariableexpenseID, bVariableexpenseIsactive) { 
        
        VariableexpenseAutocompleteElementResponse.initialize(this, sVariableexpenseDescriptionX, pkiVariableexpenseID, bVariableexpenseIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sVariableexpenseDescriptionX, pkiVariableexpenseID, bVariableexpenseIsactive) { 
        obj['sVariableexpenseDescriptionX'] = sVariableexpenseDescriptionX;
        obj['pkiVariableexpenseID'] = pkiVariableexpenseID;
        obj['bVariableexpenseIsactive'] = bVariableexpenseIsactive;
    }

    /**
     * Constructs a <code>VariableexpenseAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/VariableexpenseAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/VariableexpenseAutocompleteElementResponse} The populated <code>VariableexpenseAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableexpenseAutocompleteElementResponse();

            if (data.hasOwnProperty('sVariableexpenseDescriptionX')) {
                obj['sVariableexpenseDescriptionX'] = ApiClient.convertToType(data['sVariableexpenseDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('pkiVariableexpenseID')) {
                obj['pkiVariableexpenseID'] = ApiClient.convertToType(data['pkiVariableexpenseID'], 'Number');
            }
            if (data.hasOwnProperty('bVariableexpenseIsactive')) {
                obj['bVariableexpenseIsactive'] = ApiClient.convertToType(data['bVariableexpenseIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VariableexpenseAutocompleteElementResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VariableexpenseAutocompleteElementResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VariableexpenseAutocompleteElementResponse.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sVariableexpenseDescriptionX'] && !(typeof data['sVariableexpenseDescriptionX'] === 'string' || data['sVariableexpenseDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sVariableexpenseDescriptionX` to be a primitive type in the JSON string but got " + data['sVariableexpenseDescriptionX']);
        }

        return true;
    }

/**
     * Returns The description of the Variableexpense in the language of the requester
     * @return {String}
     */
    getSVariableexpenseDescriptionX() {
        return this.sVariableexpenseDescriptionX;
    }

    /**
     * Sets The description of the Variableexpense in the language of the requester
     * @param {String} sVariableexpenseDescriptionX The description of the Variableexpense in the language of the requester
     */
    setSVariableexpenseDescriptionX(sVariableexpenseDescriptionX) {
        this['sVariableexpenseDescriptionX'] = sVariableexpenseDescriptionX;
    }
/**
     * Returns The unique ID of the Variableexpense
     * minimum: 1
     * maximum: 255
     * @return {Number}
     */
    getPkiVariableexpenseID() {
        return this.pkiVariableexpenseID;
    }

    /**
     * Sets The unique ID of the Variableexpense
     * @param {Number} pkiVariableexpenseID The unique ID of the Variableexpense
     */
    setPkiVariableexpenseID(pkiVariableexpenseID) {
        this['pkiVariableexpenseID'] = pkiVariableexpenseID;
    }
/**
     * Returns Whether the variableexpense is active or not
     * @return {Boolean}
     */
    getBVariableexpenseIsactive() {
        return this.bVariableexpenseIsactive;
    }

    /**
     * Sets Whether the variableexpense is active or not
     * @param {Boolean} bVariableexpenseIsactive Whether the variableexpense is active or not
     */
    setBVariableexpenseIsactive(bVariableexpenseIsactive) {
        this['bVariableexpenseIsactive'] = bVariableexpenseIsactive;
    }

}

VariableexpenseAutocompleteElementResponse.RequiredProperties = ["sVariableexpenseDescriptionX", "pkiVariableexpenseID", "bVariableexpenseIsactive"];

/**
 * The description of the Variableexpense in the language of the requester
 * @member {String} sVariableexpenseDescriptionX
 */
VariableexpenseAutocompleteElementResponse.prototype['sVariableexpenseDescriptionX'] = undefined;

/**
 * The unique ID of the Variableexpense
 * @member {Number} pkiVariableexpenseID
 */
VariableexpenseAutocompleteElementResponse.prototype['pkiVariableexpenseID'] = undefined;

/**
 * Whether the variableexpense is active or not
 * @member {Boolean} bVariableexpenseIsactive
 */
VariableexpenseAutocompleteElementResponse.prototype['bVariableexpenseIsactive'] = undefined;






export default VariableexpenseAutocompleteElementResponse;

