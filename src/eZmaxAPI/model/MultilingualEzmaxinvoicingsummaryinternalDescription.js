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

/**
 * The MultilingualEzmaxinvoicingsummaryinternalDescription model module.
 * @module eZmaxAPI/model/MultilingualEzmaxinvoicingsummaryinternalDescription
 * @version 1.1.11
 */
class MultilingualEzmaxinvoicingsummaryinternalDescription {
    /**
     * Constructs a new <code>MultilingualEzmaxinvoicingsummaryinternalDescription</code>.
     * Description of the Ezmaxinvoicingsummaryinternal
     * @alias module:eZmaxAPI/model/MultilingualEzmaxinvoicingsummaryinternalDescription
     */
    constructor() { 
        
        MultilingualEzmaxinvoicingsummaryinternalDescription.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MultilingualEzmaxinvoicingsummaryinternalDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/MultilingualEzmaxinvoicingsummaryinternalDescription} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/MultilingualEzmaxinvoicingsummaryinternalDescription} The populated <code>MultilingualEzmaxinvoicingsummaryinternalDescription</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultilingualEzmaxinvoicingsummaryinternalDescription();

            if (data.hasOwnProperty('sEzmaxinvoicingsummaryinternalDescription1')) {
                obj['sEzmaxinvoicingsummaryinternalDescription1'] = ApiClient.convertToType(data['sEzmaxinvoicingsummaryinternalDescription1'], 'String');
            }
            if (data.hasOwnProperty('sEzmaxinvoicingsummaryinternalDescription2')) {
                obj['sEzmaxinvoicingsummaryinternalDescription2'] = ApiClient.convertToType(data['sEzmaxinvoicingsummaryinternalDescription2'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The Ezmaxinvoicingsummaryinternal description in french
     * @return {String}
     */
    getSEzmaxinvoicingsummaryinternalDescription1() {
        return this.sEzmaxinvoicingsummaryinternalDescription1;
    }

    /**
     * Sets The Ezmaxinvoicingsummaryinternal description in french
     * @param {String} sEzmaxinvoicingsummaryinternalDescription1 The Ezmaxinvoicingsummaryinternal description in french
     */
    setSEzmaxinvoicingsummaryinternalDescription1(sEzmaxinvoicingsummaryinternalDescription1) {
        this['sEzmaxinvoicingsummaryinternalDescription1'] = sEzmaxinvoicingsummaryinternalDescription1;
    }
/**
     * Returns The Ezmaxinvoicingsummaryinternal description in english
     * @return {String}
     */
    getSEzmaxinvoicingsummaryinternalDescription2() {
        return this.sEzmaxinvoicingsummaryinternalDescription2;
    }

    /**
     * Sets The Ezmaxinvoicingsummaryinternal description in english
     * @param {String} sEzmaxinvoicingsummaryinternalDescription2 The Ezmaxinvoicingsummaryinternal description in english
     */
    setSEzmaxinvoicingsummaryinternalDescription2(sEzmaxinvoicingsummaryinternalDescription2) {
        this['sEzmaxinvoicingsummaryinternalDescription2'] = sEzmaxinvoicingsummaryinternalDescription2;
    }

}

/**
 * The Ezmaxinvoicingsummaryinternal description in french
 * @member {String} sEzmaxinvoicingsummaryinternalDescription1
 */
MultilingualEzmaxinvoicingsummaryinternalDescription.prototype['sEzmaxinvoicingsummaryinternalDescription1'] = undefined;

/**
 * The Ezmaxinvoicingsummaryinternal description in english
 * @member {String} sEzmaxinvoicingsummaryinternalDescription2
 */
MultilingualEzmaxinvoicingsummaryinternalDescription.prototype['sEzmaxinvoicingsummaryinternalDescription2'] = undefined;






export default MultilingualEzmaxinvoicingsummaryinternalDescription;

