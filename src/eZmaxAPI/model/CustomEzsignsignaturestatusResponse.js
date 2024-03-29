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
 * The CustomEzsignsignaturestatusResponse model module.
 * @module eZmaxAPI/model/CustomEzsignsignaturestatusResponse
 * @version 1.1.18
 */
class CustomEzsignsignaturestatusResponse {
    /**
     * Constructs a new <code>CustomEzsignsignaturestatusResponse</code>.
     * A Ezsignsignaturestatus Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse
     * @param eEzsignsignaturestatusSteptype {module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse.EEzsignsignaturestatusSteptypeEnum} Type of step
     * @param iEzsignsignaturestatusStep {Number} The step at which the Ezsignsigner will be invited to sign or fill the form fields
     * @param iEzsignsignaturestatusTotal {Number} The total number of signature or form fields the Ezsignsigner must process at the current step
     * @param iEzsignsignaturestatusSigned {Number} The number of signature or form fields the Ezsignsigner has already processed at the current step
     */
    constructor(eEzsignsignaturestatusSteptype, iEzsignsignaturestatusStep, iEzsignsignaturestatusTotal, iEzsignsignaturestatusSigned) { 
        
        CustomEzsignsignaturestatusResponse.initialize(this, eEzsignsignaturestatusSteptype, iEzsignsignaturestatusStep, iEzsignsignaturestatusTotal, iEzsignsignaturestatusSigned);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eEzsignsignaturestatusSteptype, iEzsignsignaturestatusStep, iEzsignsignaturestatusTotal, iEzsignsignaturestatusSigned) { 
        obj['eEzsignsignaturestatusSteptype'] = eEzsignsignaturestatusSteptype;
        obj['iEzsignsignaturestatusStep'] = iEzsignsignaturestatusStep;
        obj['iEzsignsignaturestatusTotal'] = iEzsignsignaturestatusTotal;
        obj['iEzsignsignaturestatusSigned'] = iEzsignsignaturestatusSigned;
    }

    /**
     * Constructs a <code>CustomEzsignsignaturestatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse} The populated <code>CustomEzsignsignaturestatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignsignaturestatusResponse();

            if (data.hasOwnProperty('eEzsignsignaturestatusSteptype')) {
                obj['eEzsignsignaturestatusSteptype'] = ApiClient.convertToType(data['eEzsignsignaturestatusSteptype'], 'String');
            }
            if (data.hasOwnProperty('iEzsignsignaturestatusStep')) {
                obj['iEzsignsignaturestatusStep'] = ApiClient.convertToType(data['iEzsignsignaturestatusStep'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignaturestatusTotal')) {
                obj['iEzsignsignaturestatusTotal'] = ApiClient.convertToType(data['iEzsignsignaturestatusTotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignsignaturestatusSigned')) {
                obj['iEzsignsignaturestatusSigned'] = ApiClient.convertToType(data['iEzsignsignaturestatusSigned'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CustomEzsignsignaturestatusResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CustomEzsignsignaturestatusResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CustomEzsignsignaturestatusResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['eEzsignsignaturestatusSteptype'] && !(typeof data['eEzsignsignaturestatusSteptype'] === 'string' || data['eEzsignsignaturestatusSteptype'] instanceof String)) {
            throw new Error("Expected the field `eEzsignsignaturestatusSteptype` to be a primitive type in the JSON string but got " + data['eEzsignsignaturestatusSteptype']);
        }

        return true;
    }

/**
     * Returns Type of step
     * @return {module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse.EEzsignsignaturestatusSteptypeEnum}
     */
    getEEzsignsignaturestatusSteptype() {
        return this.eEzsignsignaturestatusSteptype;
    }

    /**
     * Sets Type of step
     * @param {module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse.EEzsignsignaturestatusSteptypeEnum} eEzsignsignaturestatusSteptype Type of step
     */
    setEEzsignsignaturestatusSteptype(eEzsignsignaturestatusSteptype) {
        this['eEzsignsignaturestatusSteptype'] = eEzsignsignaturestatusSteptype;
    }
/**
     * Returns The step at which the Ezsignsigner will be invited to sign or fill the form fields
     * @return {Number}
     */
    getIEzsignsignaturestatusStep() {
        return this.iEzsignsignaturestatusStep;
    }

    /**
     * Sets The step at which the Ezsignsigner will be invited to sign or fill the form fields
     * @param {Number} iEzsignsignaturestatusStep The step at which the Ezsignsigner will be invited to sign or fill the form fields
     */
    setIEzsignsignaturestatusStep(iEzsignsignaturestatusStep) {
        this['iEzsignsignaturestatusStep'] = iEzsignsignaturestatusStep;
    }
/**
     * Returns The total number of signature or form fields the Ezsignsigner must process at the current step
     * @return {Number}
     */
    getIEzsignsignaturestatusTotal() {
        return this.iEzsignsignaturestatusTotal;
    }

    /**
     * Sets The total number of signature or form fields the Ezsignsigner must process at the current step
     * @param {Number} iEzsignsignaturestatusTotal The total number of signature or form fields the Ezsignsigner must process at the current step
     */
    setIEzsignsignaturestatusTotal(iEzsignsignaturestatusTotal) {
        this['iEzsignsignaturestatusTotal'] = iEzsignsignaturestatusTotal;
    }
/**
     * Returns The number of signature or form fields the Ezsignsigner has already processed at the current step
     * @return {Number}
     */
    getIEzsignsignaturestatusSigned() {
        return this.iEzsignsignaturestatusSigned;
    }

    /**
     * Sets The number of signature or form fields the Ezsignsigner has already processed at the current step
     * @param {Number} iEzsignsignaturestatusSigned The number of signature or form fields the Ezsignsigner has already processed at the current step
     */
    setIEzsignsignaturestatusSigned(iEzsignsignaturestatusSigned) {
        this['iEzsignsignaturestatusSigned'] = iEzsignsignaturestatusSigned;
    }

}

CustomEzsignsignaturestatusResponse.RequiredProperties = ["eEzsignsignaturestatusSteptype", "iEzsignsignaturestatusStep", "iEzsignsignaturestatusTotal", "iEzsignsignaturestatusSigned"];

/**
 * Type of step
 * @member {module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse.EEzsignsignaturestatusSteptypeEnum} eEzsignsignaturestatusSteptype
 */
CustomEzsignsignaturestatusResponse.prototype['eEzsignsignaturestatusSteptype'] = undefined;

/**
 * The step at which the Ezsignsigner will be invited to sign or fill the form fields
 * @member {Number} iEzsignsignaturestatusStep
 */
CustomEzsignsignaturestatusResponse.prototype['iEzsignsignaturestatusStep'] = undefined;

/**
 * The total number of signature or form fields the Ezsignsigner must process at the current step
 * @member {Number} iEzsignsignaturestatusTotal
 */
CustomEzsignsignaturestatusResponse.prototype['iEzsignsignaturestatusTotal'] = undefined;

/**
 * The number of signature or form fields the Ezsignsigner has already processed at the current step
 * @member {Number} iEzsignsignaturestatusSigned
 */
CustomEzsignsignaturestatusResponse.prototype['iEzsignsignaturestatusSigned'] = undefined;





/**
 * Allowed values for the <code>eEzsignsignaturestatusSteptype</code> property.
 * @enum {String}
 * @readonly
 */
CustomEzsignsignaturestatusResponse['EEzsignsignaturestatusSteptypeEnum'] = {

    /**
     * value: "Form"
     * @const
     */
    "Form": "Form",

    /**
     * value: "Signature"
     * @const
     */
    "Signature": "Signature"
};



export default CustomEzsignsignaturestatusResponse;

