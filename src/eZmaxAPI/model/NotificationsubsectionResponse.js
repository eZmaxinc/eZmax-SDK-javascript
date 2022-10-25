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
import MultilingualNotificationsubsectionName from './MultilingualNotificationsubsectionName';

/**
 * The NotificationsubsectionResponse model module.
 * @module eZmaxAPI/model/NotificationsubsectionResponse
 * @version 1.1.11
 */
class NotificationsubsectionResponse {
    /**
     * Constructs a new <code>NotificationsubsectionResponse</code>.
     * A Notificationsubsection Object
     * @alias module:eZmaxAPI/model/NotificationsubsectionResponse
     * @param pkiNotificationsubsectionID {Number} The unique ID of the Notificationsubsection
     * @param fkiNotificationsectionID {Number} The unique ID of the Notificationsection
     * @param sNotificationsubsectionNameX {String} The name of the Notificationsubsection in the language of the requester
     */
    constructor(pkiNotificationsubsectionID, fkiNotificationsectionID, sNotificationsubsectionNameX) { 
        
        NotificationsubsectionResponse.initialize(this, pkiNotificationsubsectionID, fkiNotificationsectionID, sNotificationsubsectionNameX);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiNotificationsubsectionID, fkiNotificationsectionID, sNotificationsubsectionNameX) { 
        obj['pkiNotificationsubsectionID'] = pkiNotificationsubsectionID;
        obj['fkiNotificationsectionID'] = fkiNotificationsectionID;
        obj['sNotificationsubsectionNameX'] = sNotificationsubsectionNameX;
    }

    /**
     * Constructs a <code>NotificationsubsectionResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/NotificationsubsectionResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/NotificationsubsectionResponse} The populated <code>NotificationsubsectionResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationsubsectionResponse();

            if (data.hasOwnProperty('pkiNotificationsubsectionID')) {
                obj['pkiNotificationsubsectionID'] = ApiClient.convertToType(data['pkiNotificationsubsectionID'], 'Number');
            }
            if (data.hasOwnProperty('fkiNotificationsectionID')) {
                obj['fkiNotificationsectionID'] = ApiClient.convertToType(data['fkiNotificationsectionID'], 'Number');
            }
            if (data.hasOwnProperty('objNotificationsubsectionName')) {
                obj['objNotificationsubsectionName'] = MultilingualNotificationsubsectionName.constructFromObject(data['objNotificationsubsectionName']);
            }
            if (data.hasOwnProperty('sNotificationsectionNameX')) {
                obj['sNotificationsectionNameX'] = ApiClient.convertToType(data['sNotificationsectionNameX'], 'String');
            }
            if (data.hasOwnProperty('sNotificationsubsectionNameX')) {
                obj['sNotificationsubsectionNameX'] = ApiClient.convertToType(data['sNotificationsubsectionNameX'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Notificationsubsection
     * minimum: 0
     * @return {Number}
     */
    getPkiNotificationsubsectionID() {
        return this.pkiNotificationsubsectionID;
    }

    /**
     * Sets The unique ID of the Notificationsubsection
     * @param {Number} pkiNotificationsubsectionID The unique ID of the Notificationsubsection
     */
    setPkiNotificationsubsectionID(pkiNotificationsubsectionID) {
        this['pkiNotificationsubsectionID'] = pkiNotificationsubsectionID;
    }
/**
     * Returns The unique ID of the Notificationsection
     * minimum: 0
     * @return {Number}
     */
    getFkiNotificationsectionID() {
        return this.fkiNotificationsectionID;
    }

    /**
     * Sets The unique ID of the Notificationsection
     * @param {Number} fkiNotificationsectionID The unique ID of the Notificationsection
     */
    setFkiNotificationsectionID(fkiNotificationsectionID) {
        this['fkiNotificationsectionID'] = fkiNotificationsectionID;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualNotificationsubsectionName}
     */
    getObjNotificationsubsectionName() {
        return this.objNotificationsubsectionName;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualNotificationsubsectionName} objNotificationsubsectionName
     */
    setObjNotificationsubsectionName(objNotificationsubsectionName) {
        this['objNotificationsubsectionName'] = objNotificationsubsectionName;
    }
/**
     * Returns The name of the Notificationsection in the language of the requester
     * @return {String}
     */
    getSNotificationsectionNameX() {
        return this.sNotificationsectionNameX;
    }

    /**
     * Sets The name of the Notificationsection in the language of the requester
     * @param {String} sNotificationsectionNameX The name of the Notificationsection in the language of the requester
     */
    setSNotificationsectionNameX(sNotificationsectionNameX) {
        this['sNotificationsectionNameX'] = sNotificationsectionNameX;
    }
/**
     * Returns The name of the Notificationsubsection in the language of the requester
     * @return {String}
     */
    getSNotificationsubsectionNameX() {
        return this.sNotificationsubsectionNameX;
    }

    /**
     * Sets The name of the Notificationsubsection in the language of the requester
     * @param {String} sNotificationsubsectionNameX The name of the Notificationsubsection in the language of the requester
     */
    setSNotificationsubsectionNameX(sNotificationsubsectionNameX) {
        this['sNotificationsubsectionNameX'] = sNotificationsubsectionNameX;
    }

}

/**
 * The unique ID of the Notificationsubsection
 * @member {Number} pkiNotificationsubsectionID
 */
NotificationsubsectionResponse.prototype['pkiNotificationsubsectionID'] = undefined;

/**
 * The unique ID of the Notificationsection
 * @member {Number} fkiNotificationsectionID
 */
NotificationsubsectionResponse.prototype['fkiNotificationsectionID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualNotificationsubsectionName} objNotificationsubsectionName
 */
NotificationsubsectionResponse.prototype['objNotificationsubsectionName'] = undefined;

/**
 * The name of the Notificationsection in the language of the requester
 * @member {String} sNotificationsectionNameX
 */
NotificationsubsectionResponse.prototype['sNotificationsectionNameX'] = undefined;

/**
 * The name of the Notificationsubsection in the language of the requester
 * @member {String} sNotificationsubsectionNameX
 */
NotificationsubsectionResponse.prototype['sNotificationsubsectionNameX'] = undefined;






export default NotificationsubsectionResponse;

