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
 * The EzmaxinvoicingsummaryexternalResponse model module.
 * @module eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponse
 * @version 1.1.18
 */
class EzmaxinvoicingsummaryexternalResponse {
    /**
     * Constructs a new <code>EzmaxinvoicingsummaryexternalResponse</code>.
     * A Ezmaxinvoicingsummaryexternal Object
     * @alias module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponse
     * @param fkiBillingentityexternalID {Number} The unique ID of the Billingentityexternal
     * @param sBillingentityexternalDescription {String} The description of the Billingentityexternal
     * @param sEzmaxinvoicingsummaryexternalDescription {String} The description of the Ezmaxinvoicingsummaryexternal
     */
    constructor(fkiBillingentityexternalID, sBillingentityexternalDescription, sEzmaxinvoicingsummaryexternalDescription) { 
        
        EzmaxinvoicingsummaryexternalResponse.initialize(this, fkiBillingentityexternalID, sBillingentityexternalDescription, sEzmaxinvoicingsummaryexternalDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiBillingentityexternalID, sBillingentityexternalDescription, sEzmaxinvoicingsummaryexternalDescription) { 
        obj['fkiBillingentityexternalID'] = fkiBillingentityexternalID;
        obj['sBillingentityexternalDescription'] = sBillingentityexternalDescription;
        obj['sEzmaxinvoicingsummaryexternalDescription'] = sEzmaxinvoicingsummaryexternalDescription;
    }

    /**
     * Constructs a <code>EzmaxinvoicingsummaryexternalResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingsummaryexternalResponse} The populated <code>EzmaxinvoicingsummaryexternalResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingsummaryexternalResponse();

            if (data.hasOwnProperty('pkiEzmaxinvoicingsummaryexternalID')) {
                obj['pkiEzmaxinvoicingsummaryexternalID'] = ApiClient.convertToType(data['pkiEzmaxinvoicingsummaryexternalID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxinvoicingID')) {
                obj['fkiEzmaxinvoicingID'] = ApiClient.convertToType(data['fkiEzmaxinvoicingID'], 'Number');
            }
            if (data.hasOwnProperty('fkiBillingentityexternalID')) {
                obj['fkiBillingentityexternalID'] = ApiClient.convertToType(data['fkiBillingentityexternalID'], 'Number');
            }
            if (data.hasOwnProperty('sBillingentityexternalDescription')) {
                obj['sBillingentityexternalDescription'] = ApiClient.convertToType(data['sBillingentityexternalDescription'], 'String');
            }
            if (data.hasOwnProperty('sEzmaxinvoicingsummaryexternalDescription')) {
                obj['sEzmaxinvoicingsummaryexternalDescription'] = ApiClient.convertToType(data['sEzmaxinvoicingsummaryexternalDescription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingsummaryexternalResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingsummaryexternalResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzmaxinvoicingsummaryexternalResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sBillingentityexternalDescription'] && !(typeof data['sBillingentityexternalDescription'] === 'string' || data['sBillingentityexternalDescription'] instanceof String)) {
            throw new Error("Expected the field `sBillingentityexternalDescription` to be a primitive type in the JSON string but got " + data['sBillingentityexternalDescription']);
        }
        // ensure the json data is a string
        if (data['sEzmaxinvoicingsummaryexternalDescription'] && !(typeof data['sEzmaxinvoicingsummaryexternalDescription'] === 'string' || data['sEzmaxinvoicingsummaryexternalDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzmaxinvoicingsummaryexternalDescription` to be a primitive type in the JSON string but got " + data['sEzmaxinvoicingsummaryexternalDescription']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezmaxinvoicingsummaryexternal
     * minimum: 0
     * @return {Number}
     */
    getPkiEzmaxinvoicingsummaryexternalID() {
        return this.pkiEzmaxinvoicingsummaryexternalID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicingsummaryexternal
     * @param {Number} pkiEzmaxinvoicingsummaryexternalID The unique ID of the Ezmaxinvoicingsummaryexternal
     */
    setPkiEzmaxinvoicingsummaryexternalID(pkiEzmaxinvoicingsummaryexternalID) {
        this['pkiEzmaxinvoicingsummaryexternalID'] = pkiEzmaxinvoicingsummaryexternalID;
    }
/**
     * Returns The unique ID of the Ezmaxinvoicing
     * minimum: 0
     * @return {Number}
     */
    getFkiEzmaxinvoicingID() {
        return this.fkiEzmaxinvoicingID;
    }

    /**
     * Sets The unique ID of the Ezmaxinvoicing
     * @param {Number} fkiEzmaxinvoicingID The unique ID of the Ezmaxinvoicing
     */
    setFkiEzmaxinvoicingID(fkiEzmaxinvoicingID) {
        this['fkiEzmaxinvoicingID'] = fkiEzmaxinvoicingID;
    }
/**
     * Returns The unique ID of the Billingentityexternal
     * minimum: 1
     * @return {Number}
     */
    getFkiBillingentityexternalID() {
        return this.fkiBillingentityexternalID;
    }

    /**
     * Sets The unique ID of the Billingentityexternal
     * @param {Number} fkiBillingentityexternalID The unique ID of the Billingentityexternal
     */
    setFkiBillingentityexternalID(fkiBillingentityexternalID) {
        this['fkiBillingentityexternalID'] = fkiBillingentityexternalID;
    }
/**
     * Returns The description of the Billingentityexternal
     * @return {String}
     */
    getSBillingentityexternalDescription() {
        return this.sBillingentityexternalDescription;
    }

    /**
     * Sets The description of the Billingentityexternal
     * @param {String} sBillingentityexternalDescription The description of the Billingentityexternal
     */
    setSBillingentityexternalDescription(sBillingentityexternalDescription) {
        this['sBillingentityexternalDescription'] = sBillingentityexternalDescription;
    }
/**
     * Returns The description of the Ezmaxinvoicingsummaryexternal
     * @return {String}
     */
    getSEzmaxinvoicingsummaryexternalDescription() {
        return this.sEzmaxinvoicingsummaryexternalDescription;
    }

    /**
     * Sets The description of the Ezmaxinvoicingsummaryexternal
     * @param {String} sEzmaxinvoicingsummaryexternalDescription The description of the Ezmaxinvoicingsummaryexternal
     */
    setSEzmaxinvoicingsummaryexternalDescription(sEzmaxinvoicingsummaryexternalDescription) {
        this['sEzmaxinvoicingsummaryexternalDescription'] = sEzmaxinvoicingsummaryexternalDescription;
    }

}

EzmaxinvoicingsummaryexternalResponse.RequiredProperties = ["fkiBillingentityexternalID", "sBillingentityexternalDescription", "sEzmaxinvoicingsummaryexternalDescription"];

/**
 * The unique ID of the Ezmaxinvoicingsummaryexternal
 * @member {Number} pkiEzmaxinvoicingsummaryexternalID
 */
EzmaxinvoicingsummaryexternalResponse.prototype['pkiEzmaxinvoicingsummaryexternalID'] = undefined;

/**
 * The unique ID of the Ezmaxinvoicing
 * @member {Number} fkiEzmaxinvoicingID
 */
EzmaxinvoicingsummaryexternalResponse.prototype['fkiEzmaxinvoicingID'] = undefined;

/**
 * The unique ID of the Billingentityexternal
 * @member {Number} fkiBillingentityexternalID
 */
EzmaxinvoicingsummaryexternalResponse.prototype['fkiBillingentityexternalID'] = undefined;

/**
 * The description of the Billingentityexternal
 * @member {String} sBillingentityexternalDescription
 */
EzmaxinvoicingsummaryexternalResponse.prototype['sBillingentityexternalDescription'] = undefined;

/**
 * The description of the Ezmaxinvoicingsummaryexternal
 * @member {String} sEzmaxinvoicingsummaryexternalDescription
 */
EzmaxinvoicingsummaryexternalResponse.prototype['sEzmaxinvoicingsummaryexternalDescription'] = undefined;






export default EzmaxinvoicingsummaryexternalResponse;

