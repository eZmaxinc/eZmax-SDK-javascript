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
import FieldEUserType from './FieldEUserType';

/**
 * The UserAutocompleteElementResponse model module.
 * @module eZmaxAPI/model/UserAutocompleteElementResponse
 * @version 1.1.14
 */
class UserAutocompleteElementResponse {
    /**
     * Constructs a new <code>UserAutocompleteElementResponse</code>.
     * A User AutocompleteElement Response
     * @alias module:eZmaxAPI/model/UserAutocompleteElementResponse
     * @param eUserType {module:eZmaxAPI/model/FieldEUserType} 
     * @param sUserName {String} The description of the User in the language of the requester
     * @param pkiUserID {Number} The unique ID of the User
     * @param bUserIsactive {Boolean} Whether the User is active or not
     */
    constructor(eUserType, sUserName, pkiUserID, bUserIsactive) { 
        
        UserAutocompleteElementResponse.initialize(this, eUserType, sUserName, pkiUserID, bUserIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, eUserType, sUserName, pkiUserID, bUserIsactive) { 
        obj['eUserType'] = eUserType;
        obj['sUserName'] = sUserName;
        obj['pkiUserID'] = pkiUserID;
        obj['bUserIsactive'] = bUserIsactive;
    }

    /**
     * Constructs a <code>UserAutocompleteElementResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/UserAutocompleteElementResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/UserAutocompleteElementResponse} The populated <code>UserAutocompleteElementResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserAutocompleteElementResponse();

            if (data.hasOwnProperty('eUserType')) {
                obj['eUserType'] = FieldEUserType.constructFromObject(data['eUserType']);
            }
            if (data.hasOwnProperty('sUserName')) {
                obj['sUserName'] = ApiClient.convertToType(data['sUserName'], 'String');
            }
            if (data.hasOwnProperty('pkiUserID')) {
                obj['pkiUserID'] = ApiClient.convertToType(data['pkiUserID'], 'Number');
            }
            if (data.hasOwnProperty('bUserIsactive')) {
                obj['bUserIsactive'] = ApiClient.convertToType(data['bUserIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * @return {module:eZmaxAPI/model/FieldEUserType}
     */
    getEUserType() {
        return this.eUserType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEUserType} eUserType
     */
    setEUserType(eUserType) {
        this['eUserType'] = eUserType;
    }
/**
     * Returns The description of the User in the language of the requester
     * @return {String}
     */
    getSUserName() {
        return this.sUserName;
    }

    /**
     * Sets The description of the User in the language of the requester
     * @param {String} sUserName The description of the User in the language of the requester
     */
    setSUserName(sUserName) {
        this['sUserName'] = sUserName;
    }
/**
     * Returns The unique ID of the User
     * minimum: 0
     * @return {Number}
     */
    getPkiUserID() {
        return this.pkiUserID;
    }

    /**
     * Sets The unique ID of the User
     * @param {Number} pkiUserID The unique ID of the User
     */
    setPkiUserID(pkiUserID) {
        this['pkiUserID'] = pkiUserID;
    }
/**
     * Returns Whether the User is active or not
     * @return {Boolean}
     */
    getBUserIsactive() {
        return this.bUserIsactive;
    }

    /**
     * Sets Whether the User is active or not
     * @param {Boolean} bUserIsactive Whether the User is active or not
     */
    setBUserIsactive(bUserIsactive) {
        this['bUserIsactive'] = bUserIsactive;
    }

}

/**
 * @member {module:eZmaxAPI/model/FieldEUserType} eUserType
 */
UserAutocompleteElementResponse.prototype['eUserType'] = undefined;

/**
 * The description of the User in the language of the requester
 * @member {String} sUserName
 */
UserAutocompleteElementResponse.prototype['sUserName'] = undefined;

/**
 * The unique ID of the User
 * @member {Number} pkiUserID
 */
UserAutocompleteElementResponse.prototype['pkiUserID'] = undefined;

/**
 * Whether the User is active or not
 * @member {Boolean} bUserIsactive
 */
UserAutocompleteElementResponse.prototype['bUserIsactive'] = undefined;






export default UserAutocompleteElementResponse;

