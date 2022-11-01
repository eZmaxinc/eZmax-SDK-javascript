/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.14
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import NotificationtestGetElementsV1ResponseMPayload from './NotificationtestGetElementsV1ResponseMPayload';

/**
 * The NotificationtestGetElementsV1ResponseAllOf model module.
 * @module eZmaxAPI/model/NotificationtestGetElementsV1ResponseAllOf
 * @version 1.1.14
 */
class NotificationtestGetElementsV1ResponseAllOf {
    /**
     * Constructs a new <code>NotificationtestGetElementsV1ResponseAllOf</code>.
     * @alias module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseAllOf
     * @param mPayload {module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseMPayload} 
     */
    constructor(mPayload) { 
        
        NotificationtestGetElementsV1ResponseAllOf.initialize(this, mPayload);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, mPayload) { 
        obj['mPayload'] = mPayload;
    }

    /**
     * Constructs a <code>NotificationtestGetElementsV1ResponseAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseAllOf} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseAllOf} The populated <code>NotificationtestGetElementsV1ResponseAllOf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationtestGetElementsV1ResponseAllOf();

            if (data.hasOwnProperty('mPayload')) {
                obj['mPayload'] = NotificationtestGetElementsV1ResponseMPayload.constructFromObject(data['mPayload']);
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseMPayload}
     */
    getMPayload() {
        return this.mPayload;
    }

    /**
     * @param {module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseMPayload} mPayload
     */
    setMPayload(mPayload) {
        this['mPayload'] = mPayload;
    }

}

/**
 * @member {module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseMPayload} mPayload
 */
NotificationtestGetElementsV1ResponseAllOf.prototype['mPayload'] = undefined;






export default NotificationtestGetElementsV1ResponseAllOf;

