/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.11
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomEzsignfoldersignerassociationstatusResponse from './CustomEzsignfoldersignerassociationstatusResponse';

/**
 * The EzsigndocumentResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzsigndocumentResponseCompoundAllOf
 * @version 1.1.11
 */
class EzsigndocumentResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzsigndocumentResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzsigndocumentResponseCompoundAllOf
     * @param iEzsigndocumentStepformtotal {Number} The total number of steps in the form filling phase
     * @param iEzsigndocumentStepformcurrent {Number} The current step in the form filling phase
     * @param iEzsigndocumentStepsignaturetotal {Number} The total number of steps in the signature filling phase
     * @param iEzsigndocumentStepsignatureCurrent {Number} The current step in the signature phase
     * @param a_objEzsignfoldersignerassociationstatus {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>} 
     */
    constructor(iEzsigndocumentStepformtotal, iEzsigndocumentStepformcurrent, iEzsigndocumentStepsignaturetotal, iEzsigndocumentStepsignatureCurrent, a_objEzsignfoldersignerassociationstatus) { 
        
        EzsigndocumentResponseCompoundAllOf.initialize(this, iEzsigndocumentStepformtotal, iEzsigndocumentStepformcurrent, iEzsigndocumentStepsignaturetotal, iEzsigndocumentStepsignatureCurrent, a_objEzsignfoldersignerassociationstatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, iEzsigndocumentStepformtotal, iEzsigndocumentStepformcurrent, iEzsigndocumentStepsignaturetotal, iEzsigndocumentStepsignatureCurrent, a_objEzsignfoldersignerassociationstatus) { 
        obj['iEzsigndocumentStepformtotal'] = iEzsigndocumentStepformtotal;
        obj['iEzsigndocumentStepformcurrent'] = iEzsigndocumentStepformcurrent;
        obj['iEzsigndocumentStepsignaturetotal'] = iEzsigndocumentStepsignaturetotal;
        obj['iEzsigndocumentStepsignatureCurrent'] = iEzsigndocumentStepsignatureCurrent;
        obj['a_objEzsignfoldersignerassociationstatus'] = a_objEzsignfoldersignerassociationstatus;
    }

    /**
     * Constructs a <code>EzsigndocumentResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigndocumentResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigndocumentResponseCompoundAllOf} The populated <code>EzsigndocumentResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigndocumentResponseCompoundAllOf();

            if (data.hasOwnProperty('iEzsigndocumentStepformtotal')) {
                obj['iEzsigndocumentStepformtotal'] = ApiClient.convertToType(data['iEzsigndocumentStepformtotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentStepformcurrent')) {
                obj['iEzsigndocumentStepformcurrent'] = ApiClient.convertToType(data['iEzsigndocumentStepformcurrent'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentStepsignaturetotal')) {
                obj['iEzsigndocumentStepsignaturetotal'] = ApiClient.convertToType(data['iEzsigndocumentStepsignaturetotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsigndocumentStepsignatureCurrent')) {
                obj['iEzsigndocumentStepsignatureCurrent'] = ApiClient.convertToType(data['iEzsigndocumentStepsignatureCurrent'], 'Number');
            }
            if (data.hasOwnProperty('a_objEzsignfoldersignerassociationstatus')) {
                obj['a_objEzsignfoldersignerassociationstatus'] = ApiClient.convertToType(data['a_objEzsignfoldersignerassociationstatus'], [CustomEzsignfoldersignerassociationstatusResponse]);
            }
        }
        return obj;
    }

/**
     * Returns The total number of steps in the form filling phase
     * @return {Number}
     */
    getIEzsigndocumentStepformtotal() {
        return this.iEzsigndocumentStepformtotal;
    }

    /**
     * Sets The total number of steps in the form filling phase
     * @param {Number} iEzsigndocumentStepformtotal The total number of steps in the form filling phase
     */
    setIEzsigndocumentStepformtotal(iEzsigndocumentStepformtotal) {
        this['iEzsigndocumentStepformtotal'] = iEzsigndocumentStepformtotal;
    }
/**
     * Returns The current step in the form filling phase
     * @return {Number}
     */
    getIEzsigndocumentStepformcurrent() {
        return this.iEzsigndocumentStepformcurrent;
    }

    /**
     * Sets The current step in the form filling phase
     * @param {Number} iEzsigndocumentStepformcurrent The current step in the form filling phase
     */
    setIEzsigndocumentStepformcurrent(iEzsigndocumentStepformcurrent) {
        this['iEzsigndocumentStepformcurrent'] = iEzsigndocumentStepformcurrent;
    }
/**
     * Returns The total number of steps in the signature filling phase
     * @return {Number}
     */
    getIEzsigndocumentStepsignaturetotal() {
        return this.iEzsigndocumentStepsignaturetotal;
    }

    /**
     * Sets The total number of steps in the signature filling phase
     * @param {Number} iEzsigndocumentStepsignaturetotal The total number of steps in the signature filling phase
     */
    setIEzsigndocumentStepsignaturetotal(iEzsigndocumentStepsignaturetotal) {
        this['iEzsigndocumentStepsignaturetotal'] = iEzsigndocumentStepsignaturetotal;
    }
/**
     * Returns The current step in the signature phase
     * @return {Number}
     */
    getIEzsigndocumentStepsignatureCurrent() {
        return this.iEzsigndocumentStepsignatureCurrent;
    }

    /**
     * Sets The current step in the signature phase
     * @param {Number} iEzsigndocumentStepsignatureCurrent The current step in the signature phase
     */
    setIEzsigndocumentStepsignatureCurrent(iEzsigndocumentStepsignatureCurrent) {
        this['iEzsigndocumentStepsignatureCurrent'] = iEzsigndocumentStepsignatureCurrent;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>}
     */
    getAObjEzsignfoldersignerassociationstatus() {
        return this.a_objEzsignfoldersignerassociationstatus;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>} a_objEzsignfoldersignerassociationstatus
     */
    setAObjEzsignfoldersignerassociationstatus(a_objEzsignfoldersignerassociationstatus) {
        this['a_objEzsignfoldersignerassociationstatus'] = a_objEzsignfoldersignerassociationstatus;
    }

}

/**
 * The total number of steps in the form filling phase
 * @member {Number} iEzsigndocumentStepformtotal
 */
EzsigndocumentResponseCompoundAllOf.prototype['iEzsigndocumentStepformtotal'] = undefined;

/**
 * The current step in the form filling phase
 * @member {Number} iEzsigndocumentStepformcurrent
 */
EzsigndocumentResponseCompoundAllOf.prototype['iEzsigndocumentStepformcurrent'] = undefined;

/**
 * The total number of steps in the signature filling phase
 * @member {Number} iEzsigndocumentStepsignaturetotal
 */
EzsigndocumentResponseCompoundAllOf.prototype['iEzsigndocumentStepsignaturetotal'] = undefined;

/**
 * The current step in the signature phase
 * @member {Number} iEzsigndocumentStepsignatureCurrent
 */
EzsigndocumentResponseCompoundAllOf.prototype['iEzsigndocumentStepsignatureCurrent'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse>} a_objEzsignfoldersignerassociationstatus
 */
EzsigndocumentResponseCompoundAllOf.prototype['a_objEzsignfoldersignerassociationstatus'] = undefined;






export default EzsigndocumentResponseCompoundAllOf;

