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
import MultilingualVariableexpenseDescription from './MultilingualVariableexpenseDescription';

/**
 * The VariableexpenseRequest model module.
 * @module eZmaxAPI/model/VariableexpenseRequest
 * @version 1.1.18
 */
class VariableexpenseRequest {
    /**
     * Constructs a new <code>VariableexpenseRequest</code>.
     * A Variableexpense Object
     * @alias module:eZmaxAPI/model/VariableexpenseRequest
     * @param sVariableexpenseCode {String} The code of the Variableexpense
     * @param objVariableexpenseDescription {module:eZmaxAPI/model/MultilingualVariableexpenseDescription} 
     * @param eVariableexpenseTaxable {module:eZmaxAPI/model/FieldEVariableexpenseTaxable} 
     * @param bVariableexpenseIsactive {Boolean} Whether the variableexpense is active or not
     */
    constructor(sVariableexpenseCode, objVariableexpenseDescription, eVariableexpenseTaxable, bVariableexpenseIsactive) { 
        
        VariableexpenseRequest.initialize(this, sVariableexpenseCode, objVariableexpenseDescription, eVariableexpenseTaxable, bVariableexpenseIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, sVariableexpenseCode, objVariableexpenseDescription, eVariableexpenseTaxable, bVariableexpenseIsactive) { 
        obj['sVariableexpenseCode'] = sVariableexpenseCode;
        obj['objVariableexpenseDescription'] = objVariableexpenseDescription;
        obj['eVariableexpenseTaxable'] = eVariableexpenseTaxable;
        obj['bVariableexpenseIsactive'] = bVariableexpenseIsactive;
    }

    /**
     * Constructs a <code>VariableexpenseRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/VariableexpenseRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/VariableexpenseRequest} The populated <code>VariableexpenseRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VariableexpenseRequest();

            if (data.hasOwnProperty('pkiVariableexpenseID')) {
                obj['pkiVariableexpenseID'] = ApiClient.convertToType(data['pkiVariableexpenseID'], 'Number');
            }
            if (data.hasOwnProperty('sVariableexpenseCode')) {
                obj['sVariableexpenseCode'] = ApiClient.convertToType(data['sVariableexpenseCode'], 'String');
            }
            if (data.hasOwnProperty('objVariableexpenseDescription')) {
                obj['objVariableexpenseDescription'] = MultilingualVariableexpenseDescription.constructFromObject(data['objVariableexpenseDescription']);
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
     * Validates the JSON data with respect to <code>VariableexpenseRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VariableexpenseRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VariableexpenseRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sVariableexpenseCode'] && !(typeof data['sVariableexpenseCode'] === 'string' || data['sVariableexpenseCode'] instanceof String)) {
            throw new Error("Expected the field `sVariableexpenseCode` to be a primitive type in the JSON string but got " + data['sVariableexpenseCode']);
        }
        // validate the optional field `objVariableexpenseDescription`
        if (data['objVariableexpenseDescription']) { // data not null
          MultilingualVariableexpenseDescription.validateJSON(data['objVariableexpenseDescription']);
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
     * @return {module:eZmaxAPI/model/MultilingualVariableexpenseDescription}
     */
    getObjVariableexpenseDescription() {
        return this.objVariableexpenseDescription;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualVariableexpenseDescription} objVariableexpenseDescription
     */
    setObjVariableexpenseDescription(objVariableexpenseDescription) {
        this['objVariableexpenseDescription'] = objVariableexpenseDescription;
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

VariableexpenseRequest.RequiredProperties = ["sVariableexpenseCode", "objVariableexpenseDescription", "eVariableexpenseTaxable", "bVariableexpenseIsactive"];

/**
 * The unique ID of the Variableexpense
 * @member {Number} pkiVariableexpenseID
 */
VariableexpenseRequest.prototype['pkiVariableexpenseID'] = undefined;

/**
 * The code of the Variableexpense
 * @member {String} sVariableexpenseCode
 */
VariableexpenseRequest.prototype['sVariableexpenseCode'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualVariableexpenseDescription} objVariableexpenseDescription
 */
VariableexpenseRequest.prototype['objVariableexpenseDescription'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEVariableexpenseTaxable} eVariableexpenseTaxable
 */
VariableexpenseRequest.prototype['eVariableexpenseTaxable'] = undefined;

/**
 * Whether the variableexpense is active or not
 * @member {Boolean} bVariableexpenseIsactive
 */
VariableexpenseRequest.prototype['bVariableexpenseIsactive'] = undefined;






export default VariableexpenseRequest;

