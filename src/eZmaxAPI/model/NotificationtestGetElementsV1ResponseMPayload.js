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
 * The NotificationtestGetElementsV1ResponseMPayload model module.
 * @module eZmaxAPI/model/NotificationtestGetElementsV1ResponseMPayload
 * @version 1.1.15
 */
class NotificationtestGetElementsV1ResponseMPayload {
    /**
     * Constructs a new <code>NotificationtestGetElementsV1ResponseMPayload</code>.
     * Payload for GET /1/object/notificationtest/{pkiNotificationtestID}/getElements
     * @alias module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseMPayload
     * @param pkiNotificationtestID {Number} The unique ID of the Notificationtest
     * @param sNotificationtestFunction {String} The function name of the Notificationtest
     * @param a_objVariableobject {Array.<Object.<String, Object>>} 
     */
    constructor(pkiNotificationtestID, sNotificationtestFunction, a_objVariableobject) { 
        
        NotificationtestGetElementsV1ResponseMPayload.initialize(this, pkiNotificationtestID, sNotificationtestFunction, a_objVariableobject);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiNotificationtestID, sNotificationtestFunction, a_objVariableobject) { 
        obj['pkiNotificationtestID'] = pkiNotificationtestID;
        obj['sNotificationtestFunction'] = sNotificationtestFunction;
        obj['a_objVariableobject'] = a_objVariableobject;
    }

    /**
     * Constructs a <code>NotificationtestGetElementsV1ResponseMPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseMPayload} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/NotificationtestGetElementsV1ResponseMPayload} The populated <code>NotificationtestGetElementsV1ResponseMPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationtestGetElementsV1ResponseMPayload();

            if (data.hasOwnProperty('pkiNotificationtestID')) {
                obj['pkiNotificationtestID'] = ApiClient.convertToType(data['pkiNotificationtestID'], 'Number');
            }
            if (data.hasOwnProperty('sNotificationtestFunction')) {
                obj['sNotificationtestFunction'] = ApiClient.convertToType(data['sNotificationtestFunction'], 'String');
            }
            if (data.hasOwnProperty('a_sVariableobjectProperty')) {
                obj['a_sVariableobjectProperty'] = ApiClient.convertToType(data['a_sVariableobjectProperty'], ['String']);
            }
            if (data.hasOwnProperty('a_objVariableobject')) {
                obj['a_objVariableobject'] = ApiClient.convertToType(data['a_objVariableobject'], [Object]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Notificationtest
     * minimum: 0
     * @return {Number}
     */
    getPkiNotificationtestID() {
        return this.pkiNotificationtestID;
    }

    /**
     * Sets The unique ID of the Notificationtest
     * @param {Number} pkiNotificationtestID The unique ID of the Notificationtest
     */
    setPkiNotificationtestID(pkiNotificationtestID) {
        this['pkiNotificationtestID'] = pkiNotificationtestID;
    }
/**
     * Returns The function name of the Notificationtest
     * @return {String}
     */
    getSNotificationtestFunction() {
        return this.sNotificationtestFunction;
    }

    /**
     * Sets The function name of the Notificationtest
     * @param {String} sNotificationtestFunction The function name of the Notificationtest
     */
    setSNotificationtestFunction(sNotificationtestFunction) {
        this['sNotificationtestFunction'] = sNotificationtestFunction;
    }
/**
     * @return {Array.<String>}
     */
    getASVariableobjectProperty() {
        return this.a_sVariableobjectProperty;
    }

    /**
     * @param {Array.<String>} a_sVariableobjectProperty
     */
    setASVariableobjectProperty(a_sVariableobjectProperty) {
        this['a_sVariableobjectProperty'] = a_sVariableobjectProperty;
    }
/**
     * @return {Array.<Object.<String, Object>>}
     */
    getAObjVariableobject() {
        return this.a_objVariableobject;
    }

    /**
     * @param {Array.<Object.<String, Object>>} a_objVariableobject
     */
    setAObjVariableobject(a_objVariableobject) {
        this['a_objVariableobject'] = a_objVariableobject;
    }

}

/**
 * The unique ID of the Notificationtest
 * @member {Number} pkiNotificationtestID
 */
NotificationtestGetElementsV1ResponseMPayload.prototype['pkiNotificationtestID'] = undefined;

/**
 * The function name of the Notificationtest
 * @member {String} sNotificationtestFunction
 */
NotificationtestGetElementsV1ResponseMPayload.prototype['sNotificationtestFunction'] = undefined;

/**
 * @member {Array.<String>} a_sVariableobjectProperty
 */
NotificationtestGetElementsV1ResponseMPayload.prototype['a_sVariableobjectProperty'] = undefined;

/**
 * @member {Array.<Object.<String, Object>>} a_objVariableobject
 */
NotificationtestGetElementsV1ResponseMPayload.prototype['a_objVariableobject'] = undefined;






export default NotificationtestGetElementsV1ResponseMPayload;

