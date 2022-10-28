/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.13
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
 * The EzmaxinvoicingagentResponseCompoundAllOf model module.
 * @module eZmaxAPI/model/EzmaxinvoicingagentResponseCompoundAllOf
 * @version 1.1.13
 */
class EzmaxinvoicingagentResponseCompoundAllOf {
    /**
     * Constructs a new <code>EzmaxinvoicingagentResponseCompoundAllOf</code>.
     * @alias module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompoundAllOf
     * @param objContactName {module:eZmaxAPI/model/CustomContactNameResponse} 
     */
    constructor(objContactName) { 
        
        EzmaxinvoicingagentResponseCompoundAllOf.initialize(this, objContactName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, objContactName) { 
        obj['objContactName'] = objContactName;
    }

    /**
     * Constructs a <code>EzmaxinvoicingagentResponseCompoundAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompoundAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzmaxinvoicingagentResponseCompoundAllOf} The populated <code>EzmaxinvoicingagentResponseCompoundAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzmaxinvoicingagentResponseCompoundAllOf();

            if (data.hasOwnProperty('objContactName')) {
                obj['objContactName'] = CustomContactNameResponse.constructFromObject(data['objContactName']);
            }
        }
        return obj;
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
EzmaxinvoicingagentResponseCompoundAllOf.prototype['objContactName'] = undefined;






export default EzmaxinvoicingagentResponseCompoundAllOf;

