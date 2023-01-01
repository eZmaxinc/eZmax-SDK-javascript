/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.17
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomContactNameResponse from './CustomContactNameResponse';

/**
 * The EzmaxinvoicingcommissionResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzmaxinvoicingcommissionResponseCompoundAllOf
 * @version 1.1.17
 */
class EzmaxinvoicingcommissionResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzmaxinvoicingcommissionResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzmaxinvoicingcommissionResponseCompoundAllOf
     */
    constructor() { 
        
        EzmaxinvoicingcommissionResponseCompoundAllOf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EzmaxinvoicingcommissionResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingcommissionResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingcommissionResponseCompoundAllOf} The populated <code>EzmaxinvoicingcommissionResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingcommissionResponseCompoundAllOf();

            if (data.hasOwnProperty('objContactName')) {
                obj['objContactName'] = CustomContactNameResponse.constructFromObject(data['objContactName']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzmaxinvoicingcommissionResponseCompoundAllOf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzmaxinvoicingcommissionResponseCompoundAllOf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `objContactName`
        if (data['objContactName']) { // data not null
          CustomContactNameResponse.validateJSON(data['objContactName']);
        }

        return true;
    }

/**
     * @return {module:eZmaxAPI/model/CustomContactNameResponse}
     */
    getObjContactName() {
        return this.objContactName;
    }

    /**
     * @param {module:eZmaxAPI/model/CustomContactNameResponse} objContactName
     */
    setObjContactName(objContactName) {
        this['objContactName'] = objContactName;
    }

}



/**
 * @member {module:eZmaxAPI/model/CustomContactNameResponse} objContactName
 */
EzmaxinvoicingcommissionResponseCompoundAllOf.prototype['objContactName'] = undefined;






export default EzmaxinvoicingcommissionResponseCompoundAllOf;

