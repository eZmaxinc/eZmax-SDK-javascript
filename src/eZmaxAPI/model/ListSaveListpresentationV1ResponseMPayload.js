/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.1
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
 * The ListSaveListpresentationV1ResponseMPayload model module.
 * @module eZmaxAPI/model/ListSaveListpresentationV1ResponseMPayload
 * @version 1.1.1
 */
class ListSaveListpresentationV1ResponseMPayload {
    /**
     * Constructs a new <code>ListSaveListpresentationV1ResponseMPayload</code>.
     * Payload for the POST /1/module/list/listpresentation/{sListName} API Request
     * @alias module:eZmaxAPI/model/ListSaveListpresentationV1ResponseMPayload
     * @param a_objListpresentation {Array.<module:eZmaxAPI/model/ListpresentationRequest>} 
     */
    constructor(a_objListpresentation) { 
        
        ListSaveListpresentationV1ResponseMPayload.initialize(this, a_objListpresentation);
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
     * Constructs a <code>ListSaveListpresentationV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ListSaveListpresentationV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ListSaveListpresentationV1ResponseMPayload} The populated <code>ListSaveListpresentationV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSaveListpresentationV1ResponseMPayload();

            if (data.hasOwnProperty('a_objListpresentation')) {
                obj['a_objListpresentation'] = ApiClient.convertToType(data['a_objListpresentation'], [ListpresentationRequest]);
            }
        }
        return obj;
    }

/**
     * @return {Array.<module:eZmaxAPI/model/ListpresentationRequest>}
     */
    getAObjListpresentation() {
        return this.a_objListpresentation;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/ListpresentationRequest>} a_objListpresentation
     */
    setAObjListpresentation(a_objListpresentation) {
        this['a_objListpresentation'] = a_objListpresentation;
    }

}

/**
 * @member {Array.<module:eZmaxAPI/model/ListpresentationRequest>} a_objListpresentation
 */
ListSaveListpresentationV1ResponseMPayload.prototype['a_objListpresentation'] = undefined;






export default ListSaveListpresentationV1ResponseMPayload;

