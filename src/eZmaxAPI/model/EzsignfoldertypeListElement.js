/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.6
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEEzsignfoldertypePrivacylevel from './FieldEEzsignfoldertypePrivacylevel';

/**
 * The EzsignfoldertypeListElement model module.
 * @module eZmaxAPI/model/EzsignfoldertypeListElement
 * @version 1.1.6
 */
class EzsignfoldertypeListElement {
    /**
     * Constructs a new <code>EzsignfoldertypeListElement</code>.
     * An Ezsignfoldertype List Element
     * @alias module:eZmaxAPI/model/EzsignfoldertypeListElement
     * @param pkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param eEzsignfoldertypePrivacylevel {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} 
     * @param sEzsignfoldertypeNameX {String} The name of the Ezsignfoldertype in the language of the requester
     * @param bEzsignfoldertypeIsactive {Boolean} Whether the Ezsignfoldertype is active or not
     */
    constructor(pkiEzsignfoldertypeID, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, bEzsignfoldertypeIsactive) { 
        
        EzsignfoldertypeListElement.initialize(this, pkiEzsignfoldertypeID, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, bEzsignfoldertypeIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsignfoldertypeID, eEzsignfoldertypePrivacylevel, sEzsignfoldertypeNameX, bEzsignfoldertypeIsactive) { 
        obj['pkiEzsignfoldertypeID'] = pkiEzsignfoldertypeID;
        obj['eEzsignfoldertypePrivacylevel'] = eEzsignfoldertypePrivacylevel;
        obj['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
        obj['bEzsignfoldertypeIsactive'] = bEzsignfoldertypeIsactive;
    }

    /**
     * Constructs a <code>EzsignfoldertypeListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsignfoldertypeListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsignfoldertypeListElement} The populated <code>EzsignfoldertypeListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsignfoldertypeListElement();

            if (data.hasOwnProperty('pkiEzsignfoldertypeID')) {
                obj['pkiEzsignfoldertypeID'] = ApiClient.convertToType(data['pkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsignfoldertypePrivacylevel')) {
                obj['eEzsignfoldertypePrivacylevel'] = FieldEEzsignfoldertypePrivacylevel.constructFromObject(data['eEzsignfoldertypePrivacylevel']);
            }
            if (data.hasOwnProperty('sEzsignfoldertypeNameX')) {
                obj['sEzsignfoldertypeNameX'] = ApiClient.convertToType(data['sEzsignfoldertypeNameX'], 'String');
            }
            if (data.hasOwnProperty('bEzsignfoldertypeIsactive')) {
                obj['bEzsignfoldertypeIsactive'] = ApiClient.convertToType(data['bEzsignfoldertypeIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsignfoldertype.
     * @return {Number}
     */
    getPkiEzsignfoldertypeID() {
        return this.pkiEzsignfoldertypeID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldertype.
     * @param {Number} pkiEzsignfoldertypeID The unique ID of the Ezsignfoldertype.
     */
    setPkiEzsignfoldertypeID(pkiEzsignfoldertypeID) {
        this['pkiEzsignfoldertypeID'] = pkiEzsignfoldertypeID;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel}
     */
    getEEzsignfoldertypePrivacylevel() {
        return this.eEzsignfoldertypePrivacylevel;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
     */
    setEEzsignfoldertypePrivacylevel(eEzsignfoldertypePrivacylevel) {
        this['eEzsignfoldertypePrivacylevel'] = eEzsignfoldertypePrivacylevel;
    }
/**
     * Returns The name of the Ezsignfoldertype in the language of the requester
     * @return {String}
     */
    getSEzsignfoldertypeNameX() {
        return this.sEzsignfoldertypeNameX;
    }

    /**
     * Sets The name of the Ezsignfoldertype in the language of the requester
     * @param {String} sEzsignfoldertypeNameX The name of the Ezsignfoldertype in the language of the requester
     */
    setSEzsignfoldertypeNameX(sEzsignfoldertypeNameX) {
        this['sEzsignfoldertypeNameX'] = sEzsignfoldertypeNameX;
    }
/**
     * Returns Whether the Ezsignfoldertype is active or not
     * @return {Boolean}
     */
    getBEzsignfoldertypeIsactive() {
        return this.bEzsignfoldertypeIsactive;
    }

    /**
     * Sets Whether the Ezsignfoldertype is active or not
     * @param {Boolean} bEzsignfoldertypeIsactive Whether the Ezsignfoldertype is active or not
     */
    setBEzsignfoldertypeIsactive(bEzsignfoldertypeIsactive) {
        this['bEzsignfoldertypeIsactive'] = bEzsignfoldertypeIsactive;
    }

}

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} pkiEzsignfoldertypeID
 */
EzsignfoldertypeListElement.prototype['pkiEzsignfoldertypeID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsignfoldertypePrivacylevel} eEzsignfoldertypePrivacylevel
 */
EzsignfoldertypeListElement.prototype['eEzsignfoldertypePrivacylevel'] = undefined;

/**
 * The name of the Ezsignfoldertype in the language of the requester
 * @member {String} sEzsignfoldertypeNameX
 */
EzsignfoldertypeListElement.prototype['sEzsignfoldertypeNameX'] = undefined;

/**
 * Whether the Ezsignfoldertype is active or not
 * @member {Boolean} bEzsignfoldertypeIsactive
 */
EzsignfoldertypeListElement.prototype['bEzsignfoldertypeIsactive'] = undefined;






export default EzsignfoldertypeListElement;

