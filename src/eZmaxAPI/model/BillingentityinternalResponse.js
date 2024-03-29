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
import MultilingualBillingentityinternalDescription from './MultilingualBillingentityinternalDescription';

/**
 * The BillingentityinternalResponse model module.
 * @module eZmaxAPI/model/BillingentityinternalResponse
 * @version 1.1.18
 */
class BillingentityinternalResponse {
    /**
     * Constructs a new <code>BillingentityinternalResponse</code>.
     * A Billingentityinternal Object
     * @alias module:eZmaxAPI/model/BillingentityinternalResponse
     * @param pkiBillingentityinternalID {Number} The unique ID of the Billingentityinternal.
     * @param objBillingentityinternalDescription {module:eZmaxAPI/model/MultilingualBillingentityinternalDescription} 
     */
    constructor(pkiBillingentityinternalID, objBillingentityinternalDescription) { 
        
        BillingentityinternalResponse.initialize(this, pkiBillingentityinternalID, objBillingentityinternalDescription);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiBillingentityinternalID, objBillingentityinternalDescription) { 
        obj['pkiBillingentityinternalID'] = pkiBillingentityinternalID;
        obj['objBillingentityinternalDescription'] = objBillingentityinternalDescription;
    }

    /**
     * Constructs a <code>BillingentityinternalResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/BillingentityinternalResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/BillingentityinternalResponse} The populated <code>BillingentityinternalResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BillingentityinternalResponse();

            if (data.hasOwnProperty('pkiBillingentityinternalID')) {
                obj['pkiBillingentityinternalID'] = ApiClient.convertToType(data['pkiBillingentityinternalID'], 'Number');
            }
            if (data.hasOwnProperty('objBillingentityinternalDescription')) {
                obj['objBillingentityinternalDescription'] = MultilingualBillingentityinternalDescription.constructFromObject(data['objBillingentityinternalDescription']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BillingentityinternalResponse</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BillingentityinternalResponse</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of BillingentityinternalResponse.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // validate the optional field `objBillingentityinternalDescription`
        if (data['objBillingentityinternalDescription']) { // data not null
          MultilingualBillingentityinternalDescription.validateJSON(data['objBillingentityinternalDescription']);
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

}

BillingentityinternalResponse.RequiredProperties = ["pkiBillingentityinternalID", "objBillingentityinternalDescription"];

/**
 * The unique ID of the Billingentityinternal.
 * @member {Number} pkiBillingentityinternalID
 */
BillingentityinternalResponse.prototype['pkiBillingentityinternalID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualBillingentityinternalDescription} objBillingentityinternalDescription
 */
BillingentityinternalResponse.prototype['objBillingentityinternalDescription'] = undefined;






export default BillingentityinternalResponse;

