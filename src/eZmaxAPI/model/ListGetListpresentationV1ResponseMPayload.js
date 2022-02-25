/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.4
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ListpresentationRequest from './ListpresentationRequest';

/**
 * The ListGetListpresentationV1ResponseMPayload model module.
 * @module eZmaxAPI/model/ListGetListpresentationV1ResponseMPayload
 * @version 1.1.4
 */
class ListGetListpresentationV1ResponseMPayload {
    /**
     * Constructs a new <code>ListGetListpresentationV1ResponseMPayload</code>.
     * Payload for the GET /1/module/list/listpresentation/{sListName} API Request
     * @alias module:eZmaxAPI/model/ListGetListpresentationV1ResponseMPayload
     * @param a_objListpresentation {Array.<module:eZmaxAPI/model/ListpresentationRequest>} 
     */
    constructor(a_objListpresentation) { 
        
        ListGetListpresentationV1ResponseMPayload.initialize(this, a_objListpresentation);
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
     * Constructs a <code>ListGetListpresentationV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ListGetListpresentationV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ListGetListpresentationV1ResponseMPayload} The populated <code>ListGetListpresentationV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListGetListpresentationV1ResponseMPayload();

            if (data.hasOwnProperty('a_objListpresentation')) {
                obj['a_objListpresentation'] = ApiClient.convertToType(data['a_objListpresentation'], [ListpresentationRequest]);
            }
        }
        return obj;
    }

/**
     * Returns 
     * @return {Array.<module:eZmaxAPI/model/ListpresentationRequest>}
     */
    getAObjListpresentation() {
        return this.a_objListpresentation;
    }

    /**
     * Sets 
     * @param {Array.<module:eZmaxAPI/model/ListpresentationRequest>} a_objListpresentation 
     */
    setAObjListpresentation(a_objListpresentation) {
        this['a_objListpresentation'] = a_objListpresentation;
    }

}

/**
 * 
 * @member {Array.<module:eZmaxAPI/model/ListpresentationRequest>} a_objListpresentation
 */
ListGetListpresentationV1ResponseMPayload.prototype['a_objListpresentation'] = undefined;






export default ListGetListpresentationV1ResponseMPayload;

