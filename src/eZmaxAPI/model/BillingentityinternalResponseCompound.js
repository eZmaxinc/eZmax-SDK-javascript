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
import BillingentityinternalResponse from './BillingentityinternalResponse';
import BillingentityinternalResponseCompoundAllOf from './BillingentityinternalResponseCompoundAllOf';
import BillingentityinternalproductResponseCompound from './BillingentityinternalproductResponseCompound';
import MultilingualBillingentityinternalDescription from './MultilingualBillingentityinternalDescription';

/**
 * The BillingentityinternalResponseCompound model module.
 * @module eZmaxAPI/model/BillingentityinternalResponseCompound
 * @version 1.1.18
 */
class BillingentityinternalResponseCompound {
    /**
     * Constructs a new <code>BillingentityinternalResponseCompound</code>.
     * A Billingentityinternal Object
     * @alias module:eZmaxAPI/model/BillingentityinternalResponseCompound
     * @implements module:eZmaxAPI/model/BillingentityinternalResponse
     * @implements module:eZmaxAPI/model/BillingentityinternalResponseCompoundAllOf
     * @param pkiBillingentityinternalID {Number} The unique ID of the Billingentityinternal.
     * @param objBillingentityinternalDescription {module:eZmaxAPI/model/MultilingualBillingentityinternalDescription} 
     * @param a_objBillingentityinternalproduct {Array.<module:eZmaxAPI/model/BillingentityinternalproductResponseCompound>} 
     */
    constructor(pkiBillingentityinternalID, objBillingentityinternalDescription, a_objBillingentityinternalproduct) { 
        BillingentityinternalResponse.initialize(this, pkiBillingentityinternalID, objBillingentityinternalDescription);BillingentityinternalResponseCompoundAllOf.initialize(this, a_objBillingentityinternalproduct);
        BillingentityinternalResponseCompound.initialize(this, pkiBillingentityinternalID, objBillingentityinternalDescription, a_objBillingentityinternalproduct);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiBillingentityinternalID, objBillingentityinternalDescription, a_objBillingentityinternalproduct) { 
        obj['pkiBillingentityinternalID'] = pkiBillingentityinternalID;
        obj['objBillingentityinternalDescription'] = objBillingentityinternalDescription;
        obj['a_objBillingentityinternalproduct'] = a_objBillingentityinternalproduct;
    }

    /**
     * Constructs a <code>BillingentityinternalResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalResponseCompound} The populated <code>BillingentityinternalResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalResponseCompound();
            BillingentityinternalResponse.constructFromObject(data, obj);
            BillingentityinternalResponseCompoundAllOf.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiBillingentityinternalID')) {
                obj['pkiBillingentityinternalID'] = ApiClient.convertToType(data['pkiBillingentityinternalID'], 'Number');
            }
            if (data.hasOwnProperty('objBillingentityinternalDescription')) {
                obj['objBillingentityinternalDescription'] = MultilingualBillingentityinternalDescription.constructFromObject(data['objBillingentityinternalDescription']);
            }
            if (data.hasOwnProperty('a_objBillingentityinternalproduct')) {
                obj['a_objBillingentityinternalproduct'] = ApiClient.convertToType(data['a_objBillingentityinternalproduct'], [BillingentityinternalproductResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objBillingentityinternalDescription`
        if (data['objBillingentityinternalDescription']) { // data not null
          MultilingualBillingentityinternalDescription.validateJSON(data['objBillingentityinternalDescription']);
        }
        if (data['a_objBillingentityinternalproduct']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objBillingentityinternalproduct'])) {
                throw new Error("Expected the field `a_objBillingentityinternalproduct` to be an array in the JSON data but got " + data['a_objBillingentityinternalproduct']);
            }
            // validate the optional field `a_objBillingentityinternalproduct` (array)
            for (const item of data['a_objBillingentityinternalproduct']) {
                BillingentityinternalproductResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The unique ID of the Billingentityinternal.
     * minimum: 0
     * @return {Number}
     */
    getPkiBillingentityinternalID() {
        return this.pkiBillingentityinternalID;
    }

    /**
     * Sets The unique ID of the Billingentityinternal.
     * @param {Number} pkiBillingentityinternalID The unique ID of the Billingentityinternal.
     */
    setPkiBillingentityinternalID(pkiBillingentityinternalID) {
        this['pkiBillingentityinternalID'] = pkiBillingentityinternalID;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualBillingentityinternalDescription}
     */
    getObjBillingentityinternalDescription() {
        return this.objBillingentityinternalDescription;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualBillingentityinternalDescription} objBillingentityinternalDescription
     */
    setObjBillingentityinternalDescription(objBillingentityinternalDescription) {
        this['objBillingentityinternalDescription'] = objBillingentityinternalDescription;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/BillingentityinternalproductResponseCompound>}
     */
    getAObjBillingentityinternalproduct() {
        return this.a_objBillingentityinternalproduct;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/BillingentityinternalproductResponseCompound>} a_objBillingentityinternalproduct
     */
    setAObjBillingentityinternalproduct(a_objBillingentityinternalproduct) {
        this['a_objBillingentityinternalproduct'] = a_objBillingentityinternalproduct;
    }

}

BillingentityinternalResponseCompound.RequiredProperties = ["pkiBillingentityinternalID", "objBillingentityinternalDescription", "a_objBillingentityinternalproduct"];

/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} pkiBillingentityinternalID
 */
BillingentityinternalResponseCompound.prototype['pkiBillingentityinternalID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualBillingentityinternalDescription} objBillingentityinternalDescription
 */
BillingentityinternalResponseCompound.prototype['objBillingentityinternalDescription'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/BillingentityinternalproductResponseCompound>} a_objBillingentityinternalproduct
 */
BillingentityinternalResponseCompound.prototype['a_objBillingentityinternalproduct'] = undefined;


// Implement BillingentityinternalResponse interface:
/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} pkiBillingentityinternalID
 */
BillingentityinternalResponse.prototype['pkiBillingentityinternalID'] = undefined;
/**
 * @member {module:eZmaxAPI/model/MultilingualBillingentityinternalDescription} objBillingentityinternalDescription
 */
BillingentityinternalResponse.prototype['objBillingentityinternalDescription'] = undefined;
// Implement BillingentityinternalResponseCompoundAllOf interface:
/**
 * @member {Array.<module:eZmaxAPI/model/BillingentityinternalproductResponseCompound>} a_objBillingentityinternalproduct
 */
BillingentityinternalResponseCompoundAllOf.prototype['a_objBillingentityinternalproduct'] = undefined;




export default BillingentityinternalResponseCompound;

