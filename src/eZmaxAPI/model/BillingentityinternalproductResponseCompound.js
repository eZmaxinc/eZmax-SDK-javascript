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
import BillingentityinternalproductResponse from './BillingentityinternalproductResponse';

/**
 * The BillingentityinternalproductResponseCompound model module.
 * @module eZmaxAPI/model/BillingentityinternalproductResponseCompound
 * @version 1.1.18
 */
class BillingentityinternalproductResponseCompound {
    /**
     * Constructs a new <code>BillingentityinternalproductResponseCompound</code>.
     * A Billingentityinternalproduct Object
     * @alias module:eZmaxAPI/model/BillingentityinternalproductResponseCompound
     * @implements module:eZmaxAPI/model/BillingentityinternalproductResponse
     * @param pkiBillingentityinternalproductID {Number} The unique ID of the Billingentityinternalproduct
     * @param fkiBillingentityinternalID {Number} The unique ID of the Billingentityinternal.
     * @param sBillingentityinternalDescriptionX {String} The description of the Billingentityinternal in the language of the requester
     * @param fkiEzmaxproductID {Number} The unique ID of the Ezmaxproduct
     * @param sEzmaxproductDescriptionX {String} The description of the Ezmaxproduct in the language of the requester
     * @param fkiBillingentityexternalID {Number} The unique ID of the Billingentityexternal
     * @param sBillingentityexternalDescription {String} The description of the Billingentityexternal
     */
    constructor(pkiBillingentityinternalproductID, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiEzmaxproductID, sEzmaxproductDescriptionX, fkiBillingentityexternalID, sBillingentityexternalDescription) { 
        BillingentityinternalproductResponse.initialize(this, pkiBillingentityinternalproductID, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiEzmaxproductID, sEzmaxproductDescriptionX, fkiBillingentityexternalID, sBillingentityexternalDescription);
        BillingentityinternalproductResponseCompound.initialize(this, pkiBillingentityinternalproductID, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiEzmaxproductID, sEzmaxproductDescriptionX, fkiBillingentityexternalID, sBillingentityexternalDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiBillingentityinternalproductID, fkiBillingentityinternalID, sBillingentityinternalDescriptionX, fkiEzmaxproductID, sEzmaxproductDescriptionX, fkiBillingentityexternalID, sBillingentityexternalDescription) { 
        obj['pkiBillingentityinternalproductID'] = pkiBillingentityinternalproductID;
        obj['fkiBillingentityinternalID'] = fkiBillingentityinternalID;
        obj['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
        obj['fkiEzmaxproductID'] = fkiEzmaxproductID;
        obj['sEzmaxproductDescriptionX'] = sEzmaxproductDescriptionX;
        obj['fkiBillingentityexternalID'] = fkiBillingentityexternalID;
        obj['sBillingentityexternalDescription'] = sBillingentityexternalDescription;
    }

    /**
     * Constructs a <code>BillingentityinternalproductResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalproductResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalproductResponseCompound} The populated <code>BillingentityinternalproductResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalproductResponseCompound();
            BillingentityinternalproductResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiBillingentityinternalproductID')) {
                obj['pkiBillingentityinternalproductID'] = ApiClient.convertToType(data['pkiBillingentityinternalproductID'], 'Number');
            }
            if (data.hasOwnProperty('fkiBillingentityinternalID')) {
                obj['fkiBillingentityinternalID'] = ApiClient.convertToType(data['fkiBillingentityinternalID'], 'Number');
            }
            if (data.hasOwnProperty('sBillingentityinternalDescriptionX')) {
                obj['sBillingentityinternalDescriptionX'] = ApiClient.convertToType(data['sBillingentityinternalDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('fkiEzmaxproductID')) {
                obj['fkiEzmaxproductID'] = ApiClient.convertToType(data['fkiEzmaxproductID'], 'Number');
            }
            if (data.hasOwnProperty('sEzmaxproductDescriptionX')) {
                obj['sEzmaxproductDescriptionX'] = ApiClient.convertToType(data['sEzmaxproductDescriptionX'], 'String');
            }
            if (data.hasOwnProperty('fkiBillingentityexternalID')) {
                obj['fkiBillingentityexternalID'] = ApiClient.convertToType(data['fkiBillingentityexternalID'], 'Number');
            }
            if (data.hasOwnProperty('sBillingentityexternalDescription')) {
                obj['sBillingentityexternalDescription'] = ApiClient.convertToType(data['sBillingentityexternalDescription'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalproductResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalproductResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalproductResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sBillingentityinternalDescriptionX'] && !(typeof data['sBillingentityinternalDescriptionX'] === 'string' || data['sBillingentityinternalDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sBillingentityinternalDescriptionX` to be a primitive type in the JSON string but got " + data['sBillingentityinternalDescriptionX']);
        }
        // ensure the json data is a string
        if (data['sEzmaxproductDescriptionX'] && !(typeof data['sEzmaxproductDescriptionX'] === 'string' || data['sEzmaxproductDescriptionX'] instanceof String)) {
            throw new Error("Expected the field `sEzmaxproductDescriptionX` to be a primitive type in the JSON string but got " + data['sEzmaxproductDescriptionX']);
        }
        // ensure the json data is a string
        if (data['sBillingentityexternalDescription'] && !(typeof data['sBillingentityexternalDescription'] === 'string' || data['sBillingentityexternalDescription'] instanceof String)) {
            throw new Error("Expected the field `sBillingentityexternalDescription` to be a primitive type in the JSON string but got " + data['sBillingentityexternalDescription']);
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
     * Returns The unique ID of the Billingentityinternal.
     * minimum: 0
     * @return {Number}
     */
    getFkiBillingentityinternalID() {
        return this.fkiBillingentityinternalID;
    }

    /**
     * Sets The unique ID of the Billingentityinternal.
     * @param {Number} fkiBillingentityinternalID The unique ID of the Billingentityinternal.
     */
    setFkiBillingentityinternalID(fkiBillingentityinternalID) {
        this['fkiBillingentityinternalID'] = fkiBillingentityinternalID;
    }
/**
     * Returns The description of the Billingentityinternal in the language of the requester
     * @return {String}
     */
    getSBillingentityinternalDescriptionX() {
        return this.sBillingentityinternalDescriptionX;
    }

    /**
     * Sets The description of the Billingentityinternal in the language of the requester
     * @param {String} sBillingentityinternalDescriptionX The description of the Billingentityinternal in the language of the requester
     */
    setSBillingentityinternalDescriptionX(sBillingentityinternalDescriptionX) {
        this['sBillingentityinternalDescriptionX'] = sBillingentityinternalDescriptionX;
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
     * Returns The description of the Ezmaxproduct in the language of the requester
     * @return {String}
     */
    getSEzmaxproductDescriptionX() {
        return this.sEzmaxproductDescriptionX;
    }

    /**
     * Sets The description of the Ezmaxproduct in the language of the requester
     * @param {String} sEzmaxproductDescriptionX The description of the Ezmaxproduct in the language of the requester
     */
    setSEzmaxproductDescriptionX(sEzmaxproductDescriptionX) {
        this['sEzmaxproductDescriptionX'] = sEzmaxproductDescriptionX;
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

}

BillingentityinternalproductResponseCompound.RequiredProperties = ["pkiBillingentityinternalproductID", "fkiBillingentityinternalID", "sBillingentityinternalDescriptionX", "fkiEzmaxproductID", "sEzmaxproductDescriptionX", "fkiBillingentityexternalID", "sBillingentityexternalDescription"];

/**
 * The unique ID of the Billingentityinternalproduct
 * @member {Number} pkiBillingentityinternalproductID
 */
BillingentityinternalproductResponseCompound.prototype['pkiBillingentityinternalproductID'] = undefined;

/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} fkiBillingentityinternalID
 */
BillingentityinternalproductResponseCompound.prototype['fkiBillingentityinternalID'] = undefined;

/**
 * The description of the Billingentityinternal in the language of the requester
 * @member {String} sBillingentityinternalDescriptionX
 */
BillingentityinternalproductResponseCompound.prototype['sBillingentityinternalDescriptionX'] = undefined;

/**
 * The unique ID of the Ezmaxproduct
 * @member {Number} fkiEzmaxproductID
 */
BillingentityinternalproductResponseCompound.prototype['fkiEzmaxproductID'] = undefined;

/**
 * The description of the Ezmaxproduct in the language of the requester
 * @member {String} sEzmaxproductDescriptionX
 */
BillingentityinternalproductResponseCompound.prototype['sEzmaxproductDescriptionX'] = undefined;

/**
 * The unique ID of the Billingentityexternal
 * @member {Number} fkiBillingentityexternalID
 */
BillingentityinternalproductResponseCompound.prototype['fkiBillingentityexternalID'] = undefined;

/**
 * The description of the Billingentityexternal
 * @member {String} sBillingentityexternalDescription
 */
BillingentityinternalproductResponseCompound.prototype['sBillingentityexternalDescription'] = undefined;


// Implement BillingentityinternalproductResponse interface:
/**
 * The unique ID of the Billingentityinternalproduct
 * @member {Number} pkiBillingentityinternalproductID
 */
BillingentityinternalproductResponse.prototype['pkiBillingentityinternalproductID'] = undefined;
/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} fkiBillingentityinternalID
 */
BillingentityinternalproductResponse.prototype['fkiBillingentityinternalID'] = undefined;
/**
 * The description of the Billingentityinternal in the language of the requester
 * @member {String} sBillingentityinternalDescriptionX
 */
BillingentityinternalproductResponse.prototype['sBillingentityinternalDescriptionX'] = undefined;
/**
 * The unique ID of the Ezmaxproduct
 * @member {Number} fkiEzmaxproductID
 */
BillingentityinternalproductResponse.prototype['fkiEzmaxproductID'] = undefined;
/**
 * The description of the Ezmaxproduct in the language of the requester
 * @member {String} sEzmaxproductDescriptionX
 */
BillingentityinternalproductResponse.prototype['sEzmaxproductDescriptionX'] = undefined;
/**
 * The unique ID of the Billingentityexternal
 * @member {Number} fkiBillingentityexternalID
 */
BillingentityinternalproductResponse.prototype['fkiBillingentityexternalID'] = undefined;
/**
 * The description of the Billingentityexternal
 * @member {String} sBillingentityexternalDescription
 */
BillingentityinternalproductResponse.prototype['sBillingentityexternalDescription'] = undefined;




export default BillingentityinternalproductResponseCompound;

