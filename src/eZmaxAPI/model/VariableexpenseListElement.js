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
import FieldEVariableexpenseTaxable from './FieldEVariableexpenseTaxable';

/**
 * The VariableexpenseListElement model module.
 * @module eZmaxAPI/model/VariableexpenseListElement
 * @version 1.1.18
 */
class VariableexpenseListElement {
    /**
     * Constructs a new <code>VariableexpenseListElement</code>.
     * A Variableexpense List Element
     * @alias module:eZmaxAPI/model/VariableexpenseListElement
     * @param pkiVariableexpenseID {Number} The unique ID of the Variableexpense
     */
    constructor(pkiVariableexpenseID) { 
        
        VariableexpenseListElement.initialize(this, pkiVariableexpenseID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiVariableexpenseID) { 
        obj['pkiVariableexpenseID'] = pkiVariableexpenseID;
    }

    /**
     * Constructs a <code>VariableexpenseListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/VariableexpenseListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/VariableexpenseListElement} The populated <code>VariableexpenseListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableexpenseListElement();

            if (data.hasOwnProperty('pkiVariableexpenseID')) {
                obj['pkiVariableexpenseID'] = ApiClient.convertToType(data['pkiVariableexpenseID'], 'Number');
            }
            if (data.hasOwnProperty('sVariableexpenseCode')) {
                obj['sVariableexpenseCode'] = ApiClient.convertToType(data['sVariableexpenseCode'], 'String');
            }
            if (data.hasOwnProperty('sVariableexpenseDescriptionX')) {
                obj['sVariableexpenseDescriptionX'] = ApiClient.convertToType(data['sVariableexpenseDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('eVariableexpenseTaxable')) {
                obj['eVariableexpenseTaxable'] = FieldEVariableexpenseTaxable.constructFromObject(data['eVariableexpenseTaxable']);
            }
            if (data.hasOwnProperty('bVariableexpenseIsactive')) {
                obj['bVariableexpenseIsactive'] = ApiClient.convertToType(data['bVariableexpenseIsactive'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VariableexpenseListElement</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VariableexpenseListElement</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VariableexpenseListElement.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sVariableexpenseCode'] && !(typeof data['sVariableexpenseCode'] === 'string' || data['sVariableexpenseCode'] instanceof String)) {
            throw new Error("Expected the field `sVariableexpenseCode` to be a primitive type in the JSON string but got " + data['sVariableexpenseCode']);
        }
        // ensure the json data is a string
        if (data['sVariableexpenseDescriptionX'] && !(typeof data['sVariableexpenseDescriptionX'] === 'string' || data['sVariableexpenseDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sVariableexpenseDescriptionX` to be a primitive type in the JSON string but got " + data['sVariableexpenseDescriptionX']);
        }

        return true;
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
     * Returns The code of the Variableexpense
     * @return {String}
     */
    getSVariableexpenseCode() {
        return this.sVariableexpenseCode;
    }

    /**
     * Sets The code of the Variableexpense
     * @param {String} sVariableexpenseCode The code of the Variableexpense
     */
    setSVariableexpenseCode(sVariableexpenseCode) {
        this['sVariableexpenseCode'] = sVariableexpenseCode;
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
     * @return {module:eZmaxAPI/model/FieldEVariableexpenseTaxable}
     */
    getEVariableexpenseTaxable() {
        return this.eVariableexpenseTaxable;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEVariableexpenseTaxable} eVariableexpenseTaxable
     */
    setEVariableexpenseTaxable(eVariableexpenseTaxable) {
        this['eVariableexpenseTaxable'] = eVariableexpenseTaxable;
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

VariableexpenseListElement.RequiredProperties = ["pkiVariableexpenseID"];

/**
 * The unique ID of the Variableexpense
 * @member {Number} pkiVariableexpenseID
 */
VariableexpenseListElement.prototype['pkiVariableexpenseID'] = undefined;

/**
 * The code of the Variableexpense
 * @member {String} sVariableexpenseCode
 */
VariableexpenseListElement.prototype['sVariableexpenseCode'] = undefined;

/**
 * The description of the Variableexpense in the language of the requester
 * @member {String} sVariableexpenseDescriptionX
 */
VariableexpenseListElement.prototype['sVariableexpenseDescriptionX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEVariableexpenseTaxable} eVariableexpenseTaxable
 */
VariableexpenseListElement.prototype['eVariableexpenseTaxable'] = undefined;

/**
 * Whether the variableexpense is active or not
 * @member {Boolean} bVariableexpenseIsactive
 */
VariableexpenseListElement.prototype['bVariableexpenseIsactive'] = undefined;






export default VariableexpenseListElement;

