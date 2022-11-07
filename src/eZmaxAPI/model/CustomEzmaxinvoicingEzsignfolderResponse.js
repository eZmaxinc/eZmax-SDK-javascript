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
import CustomEzmaxinvoicingEzsignfolderResponseAllOf from './CustomEzmaxinvoicingEzsignfolderResponseAllOf';

/**
 * The CustomEzmaxinvoicingEzsignfolderResponse model module.
 * @module eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse
 * @version 1.1.15
 */
class CustomEzmaxinvoicingEzsignfolderResponse {
    /**
     * Constructs a new <code>CustomEzmaxinvoicingEzsignfolderResponse</code>.
     * An EzmaxinvoicingEzsignfolder object containing information about the Ezmaxinvoicing for an Ezsignfolder
     * @alias module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse
     * @implements module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponseAllOf
     * @param fkiEzsignfolderID {Number} The unique ID of the Ezsignfolder
     * @param sEzsignfolderDescription {String} The description of the Ezsignfolder
     * @param bEzsigntsarequirementBillable {Boolean} Whether the TSA requirement is billable or not
     * @param bEzsignfolderMfaused {Boolean} Whether the MFA was used or not for the Ezsignfolder
     * @param bEzsignfolderPaymentused {Boolean} Whether there was a signature is of type payment
     * @param bEzsignfolderAllowed {Boolean} 
     */
    constructor(fkiEzsignfolderID, sEzsignfolderDescription, bEzsigntsarequirementBillable, bEzsignfolderMfaused, bEzsignfolderPaymentused, bEzsignfolderAllowed) { 
        CustomEzmaxinvoicingEzsignfolderResponseAllOf.initialize(this, fkiEzsignfolderID, sEzsignfolderDescription, bEzsigntsarequirementBillable, bEzsignfolderMfaused, bEzsignfolderPaymentused, bEzsignfolderAllowed);
        CustomEzmaxinvoicingEzsignfolderResponse.initialize(this, fkiEzsignfolderID, sEzsignfolderDescription, bEzsigntsarequirementBillable, bEzsignfolderMfaused, bEzsignfolderPaymentused, bEzsignfolderAllowed);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfolderID, sEzsignfolderDescription, bEzsigntsarequirementBillable, bEzsignfolderMfaused, bEzsignfolderPaymentused, bEzsignfolderAllowed) { 
        obj['fkiEzsignfolderID'] = fkiEzsignfolderID;
        obj['sEzsignfolderDescription'] = sEzsignfolderDescription;
        obj['bEzsigntsarequirementBillable'] = bEzsigntsarequirementBillable;
        obj['bEzsignfolderMfaused'] = bEzsignfolderMfaused;
        obj['bEzsignfolderPaymentused'] = bEzsignfolderPaymentused;
        obj['bEzsignfolderAllowed'] = bEzsignfolderAllowed;
    }

    /**
     * Constructs a <code>CustomEzmaxinvoicingEzsignfolderResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzmaxinvoicingEzsignfolderResponse} The populated <code>CustomEzmaxinvoicingEzsignfolderResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzmaxinvoicingEzsignfolderResponse();
            CustomEzmaxinvoicingEzsignfolderResponseAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('fkiEzsignfolderID')) {
                obj['fkiEzsignfolderID'] = ApiClient.convertToType(data['fkiEzsignfolderID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfolderDescription')) {
                obj['sEzsignfolderDescription'] = ApiClient.convertToType(data['sEzsignfolderDescription'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntsarequirementBillable')) {
                obj['bEzsigntsarequirementBillable'] = ApiClient.convertToType(data['bEzsigntsarequirementBillable'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfolderMfaused')) {
                obj['bEzsignfolderMfaused'] = ApiClient.convertToType(data['bEzsignfolderMfaused'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfolderPaymentused')) {
                obj['bEzsignfolderPaymentused'] = ApiClient.convertToType(data['bEzsignfolderPaymentused'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsignfolderAllowed')) {
                obj['bEzsignfolderAllowed'] = ApiClient.convertToType(data['bEzsignfolderAllowed'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignfolder
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfolderID() {
        return this.fkiEzsignfolderID;
    }

    /**
     * Sets The unique ID of the Ezsignfolder
     * @param {Number} fkiEzsignfolderID The unique ID of the Ezsignfolder
     */
    setFkiEzsignfolderID(fkiEzsignfolderID) {
        this['fkiEzsignfolderID'] = fkiEzsignfolderID;
    }
/**
     * Returns The description of the Ezsignfolder
     * @return {String}
     */
    getSEzsignfolderDescription() {
        return this.sEzsignfolderDescription;
    }

    /**
     * Sets The description of the Ezsignfolder
     * @param {String} sEzsignfolderDescription The description of the Ezsignfolder
     */
    setSEzsignfolderDescription(sEzsignfolderDescription) {
        this['sEzsignfolderDescription'] = sEzsignfolderDescription;
    }
/**
     * Returns Whether the TSA requirement is billable or not
     * @return {Boolean}
     */
    getBEzsigntsarequirementBillable() {
        return this.bEzsigntsarequirementBillable;
    }

    /**
     * Sets Whether the TSA requirement is billable or not
     * @param {Boolean} bEzsigntsarequirementBillable Whether the TSA requirement is billable or not
     */
    setBEzsigntsarequirementBillable(bEzsigntsarequirementBillable) {
        this['bEzsigntsarequirementBillable'] = bEzsigntsarequirementBillable;
    }
/**
     * Returns Whether the MFA was used or not for the Ezsignfolder
     * @return {Boolean}
     */
    getBEzsignfolderMfaused() {
        return this.bEzsignfolderMfaused;
    }

    /**
     * Sets Whether the MFA was used or not for the Ezsignfolder
     * @param {Boolean} bEzsignfolderMfaused Whether the MFA was used or not for the Ezsignfolder
     */
    setBEzsignfolderMfaused(bEzsignfolderMfaused) {
        this['bEzsignfolderMfaused'] = bEzsignfolderMfaused;
    }
/**
     * Returns Whether there was a signature is of type payment
     * @return {Boolean}
     */
    getBEzsignfolderPaymentused() {
        return this.bEzsignfolderPaymentused;
    }

    /**
     * Sets Whether there was a signature is of type payment
     * @param {Boolean} bEzsignfolderPaymentused Whether there was a signature is of type payment
     */
    setBEzsignfolderPaymentused(bEzsignfolderPaymentused) {
        this['bEzsignfolderPaymentused'] = bEzsignfolderPaymentused;
    }
/**
     * @return {Boolean}
     */
    getBEzsignfolderAllowed() {
        return this.bEzsignfolderAllowed;
    }

    /**
     * @param {Boolean} bEzsignfolderAllowed
     */
    setBEzsignfolderAllowed(bEzsignfolderAllowed) {
        this['bEzsignfolderAllowed'] = bEzsignfolderAllowed;
    }

}

/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
CustomEzmaxinvoicingEzsignfolderResponse.prototype['fkiEzsignfolderID'] = undefined;

/**
 * The description of the Ezsignfolder
 * @member {String} sEzsignfolderDescription
 */
CustomEzmaxinvoicingEzsignfolderResponse.prototype['sEzsignfolderDescription'] = undefined;

/**
 * Whether the TSA requirement is billable or not
 * @member {Boolean} bEzsigntsarequirementBillable
 */
CustomEzmaxinvoicingEzsignfolderResponse.prototype['bEzsigntsarequirementBillable'] = undefined;

/**
 * Whether the MFA was used or not for the Ezsignfolder
 * @member {Boolean} bEzsignfolderMfaused
 */
CustomEzmaxinvoicingEzsignfolderResponse.prototype['bEzsignfolderMfaused'] = undefined;

/**
 * Whether there was a signature is of type payment
 * @member {Boolean} bEzsignfolderPaymentused
 */
CustomEzmaxinvoicingEzsignfolderResponse.prototype['bEzsignfolderPaymentused'] = undefined;

/**
 * @member {Boolean} bEzsignfolderAllowed
 */
CustomEzmaxinvoicingEzsignfolderResponse.prototype['bEzsignfolderAllowed'] = undefined;


// Implement CustomEzmaxinvoicingEzsignfolderResponseAllOf interface:
/**
 * The unique ID of the Ezsignfolder
 * @member {Number} fkiEzsignfolderID
 */
CustomEzmaxinvoicingEzsignfolderResponseAllOf.prototype['fkiEzsignfolderID'] = undefined;
/**
 * The description of the Ezsignfolder
 * @member {String} sEzsignfolderDescription
 */
CustomEzmaxinvoicingEzsignfolderResponseAllOf.prototype['sEzsignfolderDescription'] = undefined;
/**
 * Whether the TSA requirement is billable or not
 * @member {Boolean} bEzsigntsarequirementBillable
 */
CustomEzmaxinvoicingEzsignfolderResponseAllOf.prototype['bEzsigntsarequirementBillable'] = undefined;
/**
 * Whether the MFA was used or not for the Ezsignfolder
 * @member {Boolean} bEzsignfolderMfaused
 */
CustomEzmaxinvoicingEzsignfolderResponseAllOf.prototype['bEzsignfolderMfaused'] = undefined;
/**
 * Whether there was a signature is of type payment
 * @member {Boolean} bEzsignfolderPaymentused
 */
CustomEzmaxinvoicingEzsignfolderResponseAllOf.prototype['bEzsignfolderPaymentused'] = undefined;
/**
 * @member {Boolean} bEzsignfolderAllowed
 */
CustomEzmaxinvoicingEzsignfolderResponseAllOf.prototype['bEzsignfolderAllowed'] = undefined;




export default CustomEzmaxinvoicingEzsignfolderResponse;

