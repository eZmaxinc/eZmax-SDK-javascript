/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.8
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomEzsignfoldertransmissionSignerResponse from './CustomEzsignfoldertransmissionSignerResponse';
import FieldEEzsignfolderStep from './FieldEEzsignfolderStep';

/**
 * The CustomEzsignfoldertransmissionResponse model module.
 * @module eZmaxAPI/model/CustomEzsignfoldertransmissionResponse
 * @version 1.1.8
 */
class CustomEzsignfoldertransmissionResponse {
    /**
     * Constructs a new <code>CustomEzsignfoldertransmissionResponse</code>.
     * An Ezsignfolder Object in the context of an Ezsignbulksendtransmission
     * @alias module:eZmaxAPI/model/CustomEzsignfoldertransmissionResponse
     * @param pkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param eEzsignfolderStep {module:eZmaxAPI/model/FieldEEzsignfolderStep} 
     * @param iEzsignfolderSignaturetotal {Number} The number of total signatures that were requested in the Ezsignfolder
     * @param iEzsignfolderSignaturesigned {Number} The number of signatures that were signed in the Ezsignfolder.
     * @param a_objEzsignfoldertransmissionSigner {Array.<module:eZmaxAPI/model/CustomEzsignfoldertransmissionSignerResponse>} 
     */
    constructor(pkiEzsignfolderID, eEzsignfolderStep, iEzsignfolderSignaturetotal, iEzsignfolderSignaturesigned, a_objEzsignfoldertransmissionSigner) { 
        
        CustomEzsignfoldertransmissionResponse.initialize(this, pkiEzsignfolderID, eEzsignfolderStep, iEzsignfolderSignaturetotal, iEzsignfolderSignaturesigned, a_objEzsignfoldertransmissionSigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfolderID, eEzsignfolderStep, iEzsignfolderSignaturetotal, iEzsignfolderSignaturesigned, a_objEzsignfoldertransmissionSigner) { 
        obj['pkiEzsignfolderID'] = pkiEzsignfolderID;
        obj['eEzsignfolderStep'] = eEzsignfolderStep;
        obj['iEzsignfolderSignaturetotal'] = iEzsignfolderSignaturetotal;
        obj['iEzsignfolderSignaturesigned'] = iEzsignfolderSignaturesigned;
        obj['a_objEzsignfoldertransmissionSigner'] = a_objEzsignfoldertransmissionSigner;
    }

    /**
     * Constructs a <code>CustomEzsignfoldertransmissionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignfoldertransmissionResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignfoldertransmissionResponse} The populated <code>CustomEzsignfoldertransmissionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignfoldertransmissionResponse();

            if (data.hasOwnProperty('pkiEzsignfolderID')) {
                obj['pkiEzsignfolderID'] = ApiClient.convertToType(data['pkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignfolderStep')) {
                obj['eEzsignfolderStep'] = FieldEEzsignfolderStep.constructFromObject(data['eEzsignfolderStep']);
            }
            if (data.hasOwnProperty('iEzsignfolderSignaturetotal')) {
                obj['iEzsignfolderSignaturetotal'] = ApiClient.convertToType(data['iEzsignfolderSignaturetotal'], 'Number');
            }
            if (data.hasOwnProperty('iEzsignfolderSignaturesigned')) {
                obj['iEzsignfolderSignaturesigned'] = ApiClient.convertToType(data['iEzsignfolderSignaturesigned'], 'Number');
            }
            if (data.hasOwnProperty('a_objEzsignfoldertransmissionSigner')) {
                obj['a_objEzsignfoldertransmissionSigner'] = ApiClient.convertToType(data['a_objEzsignfoldertransmissionSigner'], [CustomEzsignfoldertransmissionSignerResponse]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignfolder
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsignfolderID() {
        return this.pkiEzsignfolderID;
    }

    /**
     * Sets The unique ID of the Ezsignfolder
     * @param {Number} pkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    setPkiEzsignfolderID(pkiEzsignfolderID) {
        this['pkiEzsignfolderID'] = pkiEzsignfolderID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignfolderStep}
     */
    getEEzsignfolderStep() {
        return this.eEzsignfolderStep;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignfolderStep} eEzsignfolderStep
     */
    setEEzsignfolderStep(eEzsignfolderStep) {
        this['eEzsignfolderStep'] = eEzsignfolderStep;
    }
/**
     * Returns The number of total signatures that were requested in the Ezsignfolder
     * @return {Number}
     */
    getIEzsignfolderSignaturetotal() {
        return this.iEzsignfolderSignaturetotal;
    }

    /**
     * Sets The number of total signatures that were requested in the Ezsignfolder
     * @param {Number} iEzsignfolderSignaturetotal The number of total signatures that were requested in the Ezsignfolder
     */
    setIEzsignfolderSignaturetotal(iEzsignfolderSignaturetotal) {
        this['iEzsignfolderSignaturetotal'] = iEzsignfolderSignaturetotal;
    }
/**
     * Returns The number of signatures that were signed in the Ezsignfolder.
     * @return {Number}
     */
    getIEzsignfolderSignaturesigned() {
        return this.iEzsignfolderSignaturesigned;
    }

    /**
     * Sets The number of signatures that were signed in the Ezsignfolder.
     * @param {Number} iEzsignfolderSignaturesigned The number of signatures that were signed in the Ezsignfolder.
     */
    setIEzsignfolderSignaturesigned(iEzsignfolderSignaturesigned) {
        this['iEzsignfolderSignaturesigned'] = iEzsignfolderSignaturesigned;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignfoldertransmissionSignerResponse>}
     */
    getAObjEzsignfoldertransmissionSigner() {
        return this.a_objEzsignfoldertransmissionSigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignfoldertransmissionSignerResponse>} a_objEzsignfoldertransmissionSigner
     */
    setAObjEzsignfoldertransmissionSigner(a_objEzsignfoldertransmissionSigner) {
        this['a_objEzsignfoldertransmissionSigner'] = a_objEzsignfoldertransmissionSigner;
    }

}

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} pkiEzsignfolderID
 */
CustomEzsignfoldertransmissionResponse.prototype['pkiEzsignfolderID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfolderStep} eEzsignfolderStep
 */
CustomEzsignfoldertransmissionResponse.prototype['eEzsignfolderStep'] = undefined;

/**
 * The number of total signatures that were requested in the Ezsignfolder
 * @member {Number} iEzsignfolderSignaturetotal
 */
CustomEzsignfoldertransmissionResponse.prototype['iEzsignfolderSignaturetotal'] = undefined;

/**
 * The number of signatures that were signed in the Ezsignfolder.
 * @member {Number} iEzsignfolderSignaturesigned
 */
CustomEzsignfoldertransmissionResponse.prototype['iEzsignfolderSignaturesigned'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignfoldertransmissionSignerResponse>} a_objEzsignfoldertransmissionSigner
 */
CustomEzsignfoldertransmissionResponse.prototype['a_objEzsignfoldertransmissionSigner'] = undefined;






export default CustomEzsignfoldertransmissionResponse;

