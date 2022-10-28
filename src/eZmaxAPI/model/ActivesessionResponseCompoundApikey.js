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

/**
 * The ActivesessionResponseCompoundApikey model module.
 * @module eZmaxAPI/model/ActivesessionResponseCompoundApikey
 * @version 1.1.13
 */
class ActivesessionResponseCompoundApikey {
    /**
     * Constructs a new <code>ActivesessionResponseCompoundApikey</code>.
     * An Activesession-&gt;Apikey object and children to create a complete structure
     * @alias module:eZmaxAPI/model/ActivesessionResponseCompoundApikey
     * @param pkiApikeyID {Number} The unique ID of the Apikey
     * @param sApikeyDescriptionX {String} The description of the Apikey in the language of the requester
     */
    constructor(pkiApikeyID, sApikeyDescriptionX) { 
        
        ActivesessionResponseCompoundApikey.initialize(this, pkiApikeyID, sApikeyDescriptionX);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiApikeyID, sApikeyDescriptionX) { 
        obj['pkiApikeyID'] = pkiApikeyID;
        obj['sApikeyDescriptionX'] = sApikeyDescriptionX;
    }

    /**
     * Constructs a <code>ActivesessionResponseCompoundApikey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/ActivesessionResponseCompoundApikey} The populated <code>ActivesessionResponseCompoundApikey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActivesessionResponseCompoundApikey();

            if (data.hasOwnProperty('pkiApikeyID')) {
                obj['pkiApikeyID'] = ApiClient.convertToType(data['pkiApikeyID'], 'Number');
            }
            if (data.hasOwnProperty('sApikeyDescriptionX')) {
                obj['sApikeyDescriptionX'] = ApiClient.convertToType(data['sApikeyDescriptionX'], 'String');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Apikey
     * minimum: 0
     * @return {Number}
     */
    getPkiApikeyID() {
        return this.pkiApikeyID;
    }

    /**
     * Sets The unique ID of the Apikey
     * @param {Number} pkiApikeyID The unique ID of the Apikey
     */
    setPkiApikeyID(pkiApikeyID) {
        this['pkiApikeyID'] = pkiApikeyID;
    }
/**
     * Returns The description of the Apikey in the language of the requester
     * @return {String}
     */
    getSApikeyDescriptionX() {
        return this.sApikeyDescriptionX;
    }

    /**
     * Sets The description of the Apikey in the language of the requester
     * @param {String} sApikeyDescriptionX The description of the Apikey in the language of the requester
     */
    setSApikeyDescriptionX(sApikeyDescriptionX) {
        this['sApikeyDescriptionX'] = sApikeyDescriptionX;
    }

}

/**
 * The unique ID of the Apikey
 * @member {Number} pkiApikeyID
 */
ActivesessionResponseCompoundApikey.prototype['pkiApikeyID'] = undefined;

/**
 * The description of the Apikey in the language of the requester
 * @member {String} sApikeyDescriptionX
 */
ActivesessionResponseCompoundApikey.prototype['sApikeyDescriptionX'] = undefined;






export default ActivesessionResponseCompoundApikey;

