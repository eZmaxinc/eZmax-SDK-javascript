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

/**
 * The CustomWebhookResponseAllOf model module.
 * @module eZmaxAPI/model/CustomWebhookResponseAllOf
 * @version 1.1.15
 */
class CustomWebhookResponseAllOf {
    /**
     * Constructs a new <code>CustomWebhookResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/CustomWebhookResponseAllOf
     * @param pksCustomerCode {String} The customer code assigned to your account
     * @param bWebhookTest {Boolean} Wheter the webhook received is a manual test or a real event
     */
    constructor(pksCustomerCode, bWebhookTest) { 
        
        CustomWebhookResponseAllOf.initialize(this, pksCustomerCode, bWebhookTest);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pksCustomerCode, bWebhookTest) { 
        obj['pksCustomerCode'] = pksCustomerCode;
        obj['bWebhookTest'] = bWebhookTest;
    }

    /**
     * Constructs a <code>CustomWebhookResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomWebhookResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomWebhookResponseAllOf} The populated <code>CustomWebhookResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomWebhookResponseAllOf();

            if (data.hasOwnProperty('pksCustomerCode')) {
                obj['pksCustomerCode'] = ApiClient.convertToType(data['pksCustomerCode'], 'String');
            }
            if (data.hasOwnProperty('bWebhookTest')) {
                obj['bWebhookTest'] = ApiClient.convertToType(data['bWebhookTest'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The customer code assigned to your account
     * @return {String}
     */
    getPksCustomerCode() {
        return this.pksCustomerCode;
    }

    /**
     * Sets The customer code assigned to your account
     * @param {String} pksCustomerCode The customer code assigned to your account
     */
    setPksCustomerCode(pksCustomerCode) {
        this['pksCustomerCode'] = pksCustomerCode;
    }
/**
     * Returns Wheter the webhook received is a manual test or a real event
     * @return {Boolean}
     */
    getBWebhookTest() {
        return this.bWebhookTest;
    }

    /**
     * Sets Wheter the webhook received is a manual test or a real event
     * @param {Boolean} bWebhookTest Wheter the webhook received is a manual test or a real event
     */
    setBWebhookTest(bWebhookTest) {
        this['bWebhookTest'] = bWebhookTest;
    }

}

/**
 * The customer code assigned to your account
 * @member {String} pksCustomerCode
 */
CustomWebhookResponseAllOf.prototype['pksCustomerCode'] = undefined;

/**
 * Wheter the webhook received is a manual test or a real event
 * @member {Boolean} bWebhookTest
 */
CustomWebhookResponseAllOf.prototype['bWebhookTest'] = undefined;






export default CustomWebhookResponseAllOf;

