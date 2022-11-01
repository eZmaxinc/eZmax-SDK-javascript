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
import EzsigntemplatepackageRequest from './EzsigntemplatepackageRequest';

/**
 * The EzsigntemplatepackageRequestCompound model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageRequestCompound
 * @version 1.1.14
 */
class EzsigntemplatepackageRequestCompound {
    /**
     * Constructs a new <code>EzsigntemplatepackageRequestCompound</code>.
     * A Ezsigntemplatepackage Object and children
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound
     * @implements module:eZmaxAPI/model/EzsigntemplatepackageRequest
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sEzsigntemplatepackageDescription {String} The description of the Ezsigntemplatepackage
     * @param bEzsigntemplatepackageAdminonly {Boolean} Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
     * @param bEzsigntemplatepackageIsactive {Boolean} Whether the Ezsigntemplatepackage is active or not
     */
    constructor(fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplatepackageDescription, bEzsigntemplatepackageAdminonly, bEzsigntemplatepackageIsactive) { 
        EzsigntemplatepackageRequest.initialize(this, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplatepackageDescription, bEzsigntemplatepackageAdminonly, bEzsigntemplatepackageIsactive);
        EzsigntemplatepackageRequestCompound.initialize(this, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplatepackageDescription, bEzsigntemplatepackageAdminonly, bEzsigntemplatepackageIsactive);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, fkiEzsignfoldertypeID, fkiLanguageID, sEzsigntemplatepackageDescription, bEzsigntemplatepackageAdminonly, bEzsigntemplatepackageIsactive) { 
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sEzsigntemplatepackageDescription'] = sEzsigntemplatepackageDescription;
        obj['bEzsigntemplatepackageAdminonly'] = bEzsigntemplatepackageAdminonly;
        obj['bEzsigntemplatepackageIsactive'] = bEzsigntemplatepackageIsactive;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageRequestCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageRequestCompound} The populated <code>EzsigntemplatepackageRequestCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageRequestCompound();
            EzsigntemplatepackageRequest.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplatepackageID')) {
                obj['pkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sEzsigntemplatepackageDescription')) {
                obj['sEzsigntemplatepackageDescription'] = ApiClient.convertToType(data['sEzsigntemplatepackageDescription'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageAdminonly')) {
                obj['bEzsigntemplatepackageAdminonly'] = ApiClient.convertToType(data['bEzsigntemplatepackageAdminonly'], 'Boolean');
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageIsactive')) {
                obj['bEzsigntemplatepackageIsactive'] = ApiClient.convertToType(data['bEzsigntemplatepackageIsactive'], 'Boolean');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackage
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplatepackageID() {
        return this.pkiEzsigntemplatepackageID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplatepackage
     * @param {Number} pkiEzsigntemplatepackageID The unique ID of the Ezsigntemplatepackage
     */
    setPkiEzsigntemplatepackageID(pkiEzsigntemplatepackageID) {
        this['pkiEzsigntemplatepackageID'] = pkiEzsigntemplatepackageID;
    }
/**
     * Returns The unique ID of the Ezsignfoldertype.
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsignfoldertypeID() {
        return this.fkiEzsignfoldertypeID;
    }

    /**
     * Sets The unique ID of the Ezsignfoldertype.
     * @param {Number} fkiEzsignfoldertypeID The unique ID of the Ezsignfoldertype.
     */
    setFkiEzsignfoldertypeID(fkiEzsignfoldertypeID) {
        this['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
    }
/**
     * Returns The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * minimum: 1
     * maximum: 2
     * @return {Number}
     */
    getFkiLanguageID() {
        return this.fkiLanguageID;
    }

    /**
     * Sets The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param {Number} fkiLanguageID The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     */
    setFkiLanguageID(fkiLanguageID) {
        this['fkiLanguageID'] = fkiLanguageID;
    }
/**
     * Returns The description of the Ezsigntemplatepackage
     * @return {String}
     */
    getSEzsigntemplatepackageDescription() {
        return this.sEzsigntemplatepackageDescription;
    }

    /**
     * Sets The description of the Ezsigntemplatepackage
     * @param {String} sEzsigntemplatepackageDescription The description of the Ezsigntemplatepackage
     */
    setSEzsigntemplatepackageDescription(sEzsigntemplatepackageDescription) {
        this['sEzsigntemplatepackageDescription'] = sEzsigntemplatepackageDescription;
    }
/**
     * Returns Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
     * @return {Boolean}
     */
    getBEzsigntemplatepackageAdminonly() {
        return this.bEzsigntemplatepackageAdminonly;
    }

    /**
     * Sets Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
     * @param {Boolean} bEzsigntemplatepackageAdminonly Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
     */
    setBEzsigntemplatepackageAdminonly(bEzsigntemplatepackageAdminonly) {
        this['bEzsigntemplatepackageAdminonly'] = bEzsigntemplatepackageAdminonly;
    }
/**
     * Returns Whether the Ezsigntemplatepackage is active or not
     * @return {Boolean}
     */
    getBEzsigntemplatepackageIsactive() {
        return this.bEzsigntemplatepackageIsactive;
    }

    /**
     * Sets Whether the Ezsigntemplatepackage is active or not
     * @param {Boolean} bEzsigntemplatepackageIsactive Whether the Ezsigntemplatepackage is active or not
     */
    setBEzsigntemplatepackageIsactive(bEzsigntemplatepackageIsactive) {
        this['bEzsigntemplatepackageIsactive'] = bEzsigntemplatepackageIsactive;
    }

}

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} pkiEzsigntemplatepackageID
 */
EzsigntemplatepackageRequestCompound.prototype['pkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplatepackageRequestCompound.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplatepackageRequestCompound.prototype['fkiLanguageID'] = undefined;

/**
 * The description of the Ezsigntemplatepackage
 * @member {String} sEzsigntemplatepackageDescription
 */
EzsigntemplatepackageRequestCompound.prototype['sEzsigntemplatepackageDescription'] = undefined;

/**
 * Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
 * @member {Boolean} bEzsigntemplatepackageAdminonly
 */
EzsigntemplatepackageRequestCompound.prototype['bEzsigntemplatepackageAdminonly'] = undefined;

/**
 * Whether the Ezsigntemplatepackage is active or not
 * @member {Boolean} bEzsigntemplatepackageIsactive
 */
EzsigntemplatepackageRequestCompound.prototype['bEzsigntemplatepackageIsactive'] = undefined;


// Implement EzsigntemplatepackageRequest interface:
/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} pkiEzsigntemplatepackageID
 */
EzsigntemplatepackageRequest.prototype['pkiEzsigntemplatepackageID'] = undefined;
/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplatepackageRequest.prototype['fkiEzsignfoldertypeID'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplatepackageRequest.prototype['fkiLanguageID'] = undefined;
/**
 * The description of the Ezsigntemplatepackage
 * @member {String} sEzsigntemplatepackageDescription
 */
EzsigntemplatepackageRequest.prototype['sEzsigntemplatepackageDescription'] = undefined;
/**
 * Whether the Ezsigntemplatepackage can be accessed by admin users only (eUserType=Normal)
 * @member {Boolean} bEzsigntemplatepackageAdminonly
 */
EzsigntemplatepackageRequest.prototype['bEzsigntemplatepackageAdminonly'] = undefined;
/**
 * Whether the Ezsigntemplatepackage is active or not
 * @member {Boolean} bEzsigntemplatepackageIsactive
 */
EzsigntemplatepackageRequest.prototype['bEzsigntemplatepackageIsactive'] = undefined;




export default EzsigntemplatepackageRequestCompound;

