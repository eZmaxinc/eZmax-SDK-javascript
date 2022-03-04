/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.5
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ListpresentationRequestCompound from './ListpresentationRequestCompound';

/**
 * The ListSaveListpresentationV1Request model module.
 * @module eZmaxAPI/model/ListSaveListpresentationV1Request
 * @version 1.1.5
 */
class ListSaveListpresentationV1Request {
    /**
     * Constructs a new <code>ListSaveListpresentationV1Request</code>.
     * Request for the POST /1/module/list/listpresentation/{sListName} API Request
     * @alias module:eZmaxAPI/model/ListSaveListpresentationV1Request
     * @param a_objListpresentation {Array.<module:eZmaxAPI/model/ListpresentationRequestCompound>} 
     */
    constructor(a_objListpresentation) { 
        
        ListSaveListpresentationV1Request.initialize(this, a_objListpresentation);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, a_objListpresentation) { 
        obj['a_objListpresentation'] = a_objListpresentation;
    }

    /**
     * Constructs a <code>ListSaveListpresentationV1Request</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ListSaveListpresentationV1Request} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ListSaveListpresentationV1Request} The populated <code>ListSaveListpresentationV1Request</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSaveListpresentationV1Request();

            if (data.hasOwnProperty('a_objListpresentation')) {
                obj['a_objListpresentation'] = ApiClient.convertToType(data['a_objListpresentation'], [ListpresentationRequestCompound]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/ListpresentationRequestCompound>}
     */
    getAObjListpresentation() {
        return this.a_objListpresentation;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ListpresentationRequestCompound>} a_objListpresentation
     */
    setAObjListpresentation(a_objListpresentation) {
        this['a_objListpresentation'] = a_objListpresentation;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/ListpresentationRequestCompound>} a_objListpresentation
 */
ListSaveListpresentationV1Request.prototype['a_objListpresentation'] = undefined;






export default ListSaveListpresentationV1Request;

