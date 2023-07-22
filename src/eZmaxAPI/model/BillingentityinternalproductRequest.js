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
 * The BillingentityinternalproductRequest model module.
 * @module eZmaxAPI/model/BillingentityinternalproductRequest
 * @version 1.1.18
 */
class BillingentityinternalproductRequest {
    /**
     * Constructs a new <code>BillingentityinternalproductRequest</code>.
     * A Billingentityinternalproduct Object
     * @alias module:eZmaxAPI/model/BillingentityinternalproductRequest
     * @param fkiEzmaxproductID {Number} The unique ID of the Ezmaxproduct
     * @param fkiBillingentityexternalID {Number} The unique ID of the Billingentityexternal
     */
    constructor(fkiEzmaxproductID, fkiBillingentityexternalID) { 
        
        BillingentityinternalproductRequest.initialize(this, fkiEzmaxproductID, fkiBillingentityexternalID);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzmaxproductID, fkiBillingentityexternalID) { 
        obj['fkiEzmaxproductID'] = fkiEzmaxproductID;
        obj['fkiBillingentityexternalID'] = fkiBillingentityexternalID;
    }

    /**
     * Constructs a <code>BillingentityinternalproductRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalproductRequest} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalproductRequest} The populated <code>BillingentityinternalproductRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalproductRequest();

            if (data.hasOwnProperty('pkiBillingentityinternalproductID')) {
                obj['pkiBillingentityinternalproductID'] = ApiClient.convertToType(data['pkiBillingentityinternalproductID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzmaxproductID')) {
                obj['fkiEzmaxproductID'] = ApiClient.convertToType(data['fkiEzmaxproductID'], 'Number');
            }
            if (data.hasOwnProperty('fkiBillingentityexternalID')) {
                obj['fkiBillingentityexternalID'] = ApiClient.convertToType(data['fkiBillingentityexternalID'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalproductRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalproductRequest</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalproductRequest.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }

        return true;
    }

/**
     * Returns The unique ID of the Billingentityinternalproduct
     * minimum: 0
     * maximum: 255
     * @return {Number}
     */
    getPkiBillingentityinternalproductID() {
        return this.pkiBillingentityinternalproductID;
    }

    /**
     * Sets The unique ID of the Billingentityinternalproduct
     * @param {Number} pkiBillingentityinternalproductID The unique ID of the Billingentityinternalproduct
     */
    setPkiBillingentityinternalproductID(pkiBillingentityinternalproductID) {
        this['pkiBillingentityinternalproductID'] = pkiBillingentityinternalproductID;
    }
/**
     * Returns The unique ID of the Ezmaxproduct
     * minimum: 1
     * @return {Number}
     */
    getFkiEzmaxproductID() {
        return this.fkiEzmaxproductID;
    }

    /**
     * Sets The unique ID of the Ezmaxproduct
     * @param {Number} fkiEzmaxproductID The unique ID of the Ezmaxproduct
     */
    setFkiEzmaxproductID(fkiEzmaxproductID) {
        this['fkiEzmaxproductID'] = fkiEzmaxproductID;
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

}

BillingentityinternalproductRequest.RequiredProperties = ["fkiEzmaxproductID", "fkiBillingentityexternalID"];

/**
 * The unique ID of the Billingentityinternalproduct
 * @member {Number} pkiBillingentityinternalproductID
 */
BillingentityinternalproductRequest.prototype['pkiBillingentityinternalproductID'] = undefined;

/**
 * The unique ID of the Ezmaxproduct
 * @member {Number} fkiEzmaxproductID
 */
BillingentityinternalproductRequest.prototype['fkiEzmaxproductID'] = undefined;

/**
 * The unique ID of the Billingentityexternal
 * @member {Number} fkiBillingentityexternalID
 */
BillingentityinternalproductRequest.prototype['fkiBillingentityexternalID'] = undefined;






export default BillingentityinternalproductRequest;

