/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.16
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CustomEzmaxpricingResponse model module.
 * @module eZmaxAPI/model/CustomEzmaxpricingResponse
 * @version 1.1.16
 */
class CustomEzmaxpricingResponse {
    /**
     * Constructs a new <code>CustomEzmaxpricingResponse</code>.
     * A Custom Ezmaxpricing Object
     * @alias module:eZmaxAPI/model/CustomEzmaxpricingResponse
     * @param pkiEzmaxpricingID {Number} The unique ID of the Ezmaxpricing
     * @param dEzmaxpricingRebateezsignallagents {String} The rebate offered when eZsign is taken for all agents
     * @param dtEzmaxpricingStart {String} The start date of the Ezmaxpricing
     */
    constructor(pkiEzmaxpricingID, dEzmaxpricingRebateezsignallagents, dtEzmaxpricingStart) { 
        
        CustomEzmaxpricingResponse.initialize(this, pkiEzmaxpricingID, dEzmaxpricingRebateezsignallagents, dtEzmaxpricingStart);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzmaxpricingID, dEzmaxpricingRebateezsignallagents, dtEzmaxpricingStart) { 
        obj['pkiEzmaxpricingID'] = pkiEzmaxpricingID;
        obj['dEzmaxpricingRebateezsignallagents'] = dEzmaxpricingRebateezsignallagents;
        obj['dtEzmaxpricingStart'] = dtEzmaxpricingStart;
    }

    /**
     * Constructs a <code>CustomEzmaxpricingResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzmaxpricingResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzmaxpricingResponse} The populated <code>CustomEzmaxpricingResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzmaxpricingResponse();

            if (data.hasOwnProperty('pkiEzmaxpricingID')) {
                obj['pkiEzmaxpricingID'] = ApiClient.convertToType(data['pkiEzmaxpricingID'], 'Number');
            }
            if (data.hasOwnProperty('dEzmaxpricingRebateezsignallagents')) {
                obj['dEzmaxpricingRebateezsignallagents'] = ApiClient.convertToType(data['dEzmaxpricingRebateezsignallagents'], 'String');
            }
            if (data.hasOwnProperty('dtEzmaxpricingStart')) {
                obj['dtEzmaxpricingStart'] = ApiClient.convertToType(data['dtEzmaxpricingStart'], 'String');
            }
            if (data.hasOwnProperty('dtEzmaxpricingEnd')) {
                obj['dtEzmaxpricingEnd'] = ApiClient.convertToType(data['dtEzmaxpricingEnd'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezmaxpricing
     * minimum: 1
     * @return {Number}
     */
    getPkiEzmaxpricingID() {
        return this.pkiEzmaxpricingID;
    }

    /**
     * Sets The unique ID of the Ezmaxpricing
     * @param {Number} pkiEzmaxpricingID The unique ID of the Ezmaxpricing
     */
    setPkiEzmaxpricingID(pkiEzmaxpricingID) {
        this['pkiEzmaxpricingID'] = pkiEzmaxpricingID;
    }
/**
     * Returns The rebate offered when eZsign is taken for all agents
     * @return {String}
     */
    getDEzmaxpricingRebateezsignallagents() {
        return this.dEzmaxpricingRebateezsignallagents;
    }

    /**
     * Sets The rebate offered when eZsign is taken for all agents
     * @param {String} dEzmaxpricingRebateezsignallagents The rebate offered when eZsign is taken for all agents
     */
    setDEzmaxpricingRebateezsignallagents(dEzmaxpricingRebateezsignallagents) {
        this['dEzmaxpricingRebateezsignallagents'] = dEzmaxpricingRebateezsignallagents;
    }
/**
     * Returns The start date of the Ezmaxpricing
     * @return {String}
     */
    getDtEzmaxpricingStart() {
        return this.dtEzmaxpricingStart;
    }

    /**
     * Sets The start date of the Ezmaxpricing
     * @param {String} dtEzmaxpricingStart The start date of the Ezmaxpricing
     */
    setDtEzmaxpricingStart(dtEzmaxpricingStart) {
        this['dtEzmaxpricingStart'] = dtEzmaxpricingStart;
    }
/**
     * Returns The end date of the Ezmaxpricing
     * @return {String}
     */
    getDtEzmaxpricingEnd() {
        return this.dtEzmaxpricingEnd;
    }

    /**
     * Sets The end date of the Ezmaxpricing
     * @param {String} dtEzmaxpricingEnd The end date of the Ezmaxpricing
     */
    setDtEzmaxpricingEnd(dtEzmaxpricingEnd) {
        this['dtEzmaxpricingEnd'] = dtEzmaxpricingEnd;
    }

}

/**
 * The unique ID of the Ezmaxpricing
 * @member {Number} pkiEzmaxpricingID
 */
CustomEzmaxpricingResponse.prototype['pkiEzmaxpricingID'] = undefined;

/**
 * The rebate offered when eZsign is taken for all agents
 * @member {String} dEzmaxpricingRebateezsignallagents
 */
CustomEzmaxpricingResponse.prototype['dEzmaxpricingRebateezsignallagents'] = undefined;

/**
 * The start date of the Ezmaxpricing
 * @member {String} dtEzmaxpricingStart
 */
CustomEzmaxpricingResponse.prototype['dtEzmaxpricingStart'] = undefined;

/**
 * The end date of the Ezmaxpricing
 * @member {String} dtEzmaxpricingEnd
 */
CustomEzmaxpricingResponse.prototype['dtEzmaxpricingEnd'] = undefined;






export default CustomEzmaxpricingResponse;

