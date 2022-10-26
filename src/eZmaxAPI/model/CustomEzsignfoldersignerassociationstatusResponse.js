/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.12
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CustomEzsignsignaturestatusResponse from './CustomEzsignsignaturestatusResponse';

/**
 * The CustomEzsignfoldersignerassociationstatusResponse model module.
 * @module eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse
 * @version 1.1.12
 */
class CustomEzsignfoldersignerassociationstatusResponse {
    /**
     * Constructs a new <code>CustomEzsignfoldersignerassociationstatusResponse</code>.
     * A Ezsignfoldersignerassociationstatus Object and children to create a complete structure
     * @alias module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse
     * @param fkiEzsignfoldersignerassociationID {Number} The unique ID of the Ezsignfoldersignerassociation
     * @param sEzsignfoldersignerassociationstatusLastname {String} The last name of the Ezsignsigner
     * @param sEzsignfoldersignerassociationstatusFirstname {String} The first name of the Ezsignsigner
     * @param a_objEzsignsignaturestatus {Array.<module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse>} 
     */
    constructor(fkiEzsignfoldersignerassociationID, sEzsignfoldersignerassociationstatusLastname, sEzsignfoldersignerassociationstatusFirstname, a_objEzsignsignaturestatus) { 
        
        CustomEzsignfoldersignerassociationstatusResponse.initialize(this, fkiEzsignfoldersignerassociationID, sEzsignfoldersignerassociationstatusLastname, sEzsignfoldersignerassociationstatusFirstname, a_objEzsignsignaturestatus);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldersignerassociationID, sEzsignfoldersignerassociationstatusLastname, sEzsignfoldersignerassociationstatusFirstname, a_objEzsignsignaturestatus) { 
        obj['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
        obj['sEzsignfoldersignerassociationstatusLastname'] = sEzsignfoldersignerassociationstatusLastname;
        obj['sEzsignfoldersignerassociationstatusFirstname'] = sEzsignfoldersignerassociationstatusFirstname;
        obj['a_objEzsignsignaturestatus'] = a_objEzsignsignaturestatus;
    }

    /**
     * Constructs a <code>CustomEzsignfoldersignerassociationstatusResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/CustomEzsignfoldersignerassociationstatusResponse} The populated <code>CustomEzsignfoldersignerassociationstatusResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CustomEzsignfoldersignerassociationstatusResponse();

            if (data.hasOwnProperty('fkiEzsignfoldersignerassociationID')) {
                obj['fkiEzsignfoldersignerassociationID'] = ApiClient.convertToType(data['fkiEzsignfoldersignerassociationID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsignfoldersignerassociationstatusLastname')) {
                obj['sEzsignfoldersignerassociationstatusLastname'] = ApiClient.convertToType(data['sEzsignfoldersignerassociationstatusLastname'], 'String');
            }
            if (data.hasOwnProperty('sEzsignfoldersignerassociationstatusFirstname')) {
                obj['sEzsignfoldersignerassociationstatusFirstname'] = ApiClient.convertToType(data['sEzsignfoldersignerassociationstatusFirstname'], 'String');
            }
            if (data.hasOwnProperty('a_objEzsignsignaturestatus')) {
                obj['a_objEzsignsignaturestatus'] = ApiClient.convertToType(data['a_objEzsignsignaturestatus'], [CustomEzsignsignaturestatusResponse]);
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignfoldersignerassociation
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfoldersignerassociationID() {
        return this.fkiEzsignfoldersignerassociationID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldersignerassociation
     * @param {Number} fkiEzsignfoldersignerassociationID The unique ID of the Ezsignfoldersignerassociation
     */
    setFkiEzsignfoldersignerassociationID(fkiEzsignfoldersignerassociationID) {
        this['fkiEzsignfoldersignerassociationID'] = fkiEzsignfoldersignerassociationID;
    }
/**
     * Returns The last name of the Ezsignsigner
     * @return {String}
     */
    getSEzsignfoldersignerassociationstatusLastname() {
        return this.sEzsignfoldersignerassociationstatusLastname;
    }

    /**
     * Sets The last name of the Ezsignsigner
     * @param {String} sEzsignfoldersignerassociationstatusLastname The last name of the Ezsignsigner
     */
    setSEzsignfoldersignerassociationstatusLastname(sEzsignfoldersignerassociationstatusLastname) {
        this['sEzsignfoldersignerassociationstatusLastname'] = sEzsignfoldersignerassociationstatusLastname;
    }
/**
     * Returns The first name of the Ezsignsigner
     * @return {String}
     */
    getSEzsignfoldersignerassociationstatusFirstname() {
        return this.sEzsignfoldersignerassociationstatusFirstname;
    }

    /**
     * Sets The first name of the Ezsignsigner
     * @param {String} sEzsignfoldersignerassociationstatusFirstname The first name of the Ezsignsigner
     */
    setSEzsignfoldersignerassociationstatusFirstname(sEzsignfoldersignerassociationstatusFirstname) {
        this['sEzsignfoldersignerassociationstatusFirstname'] = sEzsignfoldersignerassociationstatusFirstname;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse>}
     */
    getAObjEzsignsignaturestatus() {
        return this.a_objEzsignsignaturestatus;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse>} a_objEzsignsignaturestatus
     */
    setAObjEzsignsignaturestatus(a_objEzsignsignaturestatus) {
        this['a_objEzsignsignaturestatus'] = a_objEzsignsignaturestatus;
    }

}

/**
 * The unique ID of the Ezsignfoldersignerassociation
 * @member {Number} fkiEzsignfoldersignerassociationID
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['fkiEzsignfoldersignerassociationID'] = undefined;

/**
 * The last name of the Ezsignsigner
 * @member {String} sEzsignfoldersignerassociationstatusLastname
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['sEzsignfoldersignerassociationstatusLastname'] = undefined;

/**
 * The first name of the Ezsignsigner
 * @member {String} sEzsignfoldersignerassociationstatusFirstname
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['sEzsignfoldersignerassociationstatusFirstname'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/CustomEzsignsignaturestatusResponse>} a_objEzsignsignaturestatus
 */
CustomEzsignfoldersignerassociationstatusResponse.prototype['a_objEzsignsignaturestatus'] = undefined;






export default CustomEzsignfoldersignerassociationstatusResponse;

