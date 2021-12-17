/**
 * eZmax API Definition
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.3
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEEzsigntemplatepackageType from './FieldEEzsigntemplatepackageType';

/**
 * The EzsigntemplatepackageListElement model module.
 * @module eZmaxAPI/model/EzsigntemplatepackageListElement
 * @version 1.1.3
 */
class EzsigntemplatepackageListElement {
    /**
     * Constructs a new <code>EzsigntemplatepackageListElement</code>.
     * An Ezsigntemplatepackage List Element
     * @alias module:eZmaxAPI/model/EzsigntemplatepackageListElement
     * @param pkiEzsigntemplatepackageID {Number} The unique ID of the Ezsigntemplatepackage
     * @param fkiDepartmentID {Number} The unique ID of the Department.
     * @param fkiTeamID {Number} The unique ID of the Team
     * @param fkiEzsignfoldertypeID {Number} The unique ID of the Ezsignfoldertype.
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param eEzsigntemplatepackageType {module:eZmaxAPI/model/FieldEEzsigntemplatepackageType} 
     * @param sEzsigntemplatepackageDescription {String} The description of the Ezsigntemplatepackage
     * @param bEzsigntemplatepackageIsactive {Boolean} Whether the Ezsigntemplatepackage is active or not
     * @param iEzsigntemplatepackagemembership {Number} The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
     */
    constructor(pkiEzsigntemplatepackageID, fkiDepartmentID, fkiTeamID, fkiEzsignfoldertypeID, fkiLanguageID, eEzsigntemplatepackageType, sEzsigntemplatepackageDescription, bEzsigntemplatepackageIsactive, iEzsigntemplatepackagemembership) { 
        
        EzsigntemplatepackageListElement.initialize(this, pkiEzsigntemplatepackageID, fkiDepartmentID, fkiTeamID, fkiEzsignfoldertypeID, fkiLanguageID, eEzsigntemplatepackageType, sEzsigntemplatepackageDescription, bEzsigntemplatepackageIsactive, iEzsigntemplatepackagemembership);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplatepackageID, fkiDepartmentID, fkiTeamID, fkiEzsignfoldertypeID, fkiLanguageID, eEzsigntemplatepackageType, sEzsigntemplatepackageDescription, bEzsigntemplatepackageIsactive, iEzsigntemplatepackagemembership) { 
        obj['pkiEzsigntemplatepackageID'] = pkiEzsigntemplatepackageID;
        obj['fkiDepartmentID'] = fkiDepartmentID;
        obj['fkiTeamID'] = fkiTeamID;
        obj['fkiEzsignfoldertypeID'] = fkiEzsignfoldertypeID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['eEzsigntemplatepackageType'] = eEzsigntemplatepackageType;
        obj['sEzsigntemplatepackageDescription'] = sEzsigntemplatepackageDescription;
        obj['bEzsigntemplatepackageIsactive'] = bEzsigntemplatepackageIsactive;
        obj['iEzsigntemplatepackagemembership'] = iEzsigntemplatepackagemembership;
    }

    /**
     * Constructs a <code>EzsigntemplatepackageListElement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplatepackageListElement} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplatepackageListElement} The populated <code>EzsigntemplatepackageListElement</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplatepackageListElement();

            if (data.hasOwnProperty('pkiEzsigntemplatepackageID')) {
                obj['pkiEzsigntemplatepackageID'] = ApiClient.convertToType(data['pkiEzsigntemplatepackageID'], 'Number');
            }
            if (data.hasOwnProperty('fkiDepartmentID')) {
                obj['fkiDepartmentID'] = ApiClient.convertToType(data['fkiDepartmentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiTeamID')) {
                obj['fkiTeamID'] = ApiClient.convertToType(data['fkiTeamID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsignfoldertypeID')) {
                obj['fkiEzsignfoldertypeID'] = ApiClient.convertToType(data['fkiEzsignfoldertypeID'], 'Number');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('eEzsigntemplatepackageType')) {
                obj['eEzsigntemplatepackageType'] = FieldEEzsigntemplatepackageType.constructFromObject(data['eEzsigntemplatepackageType']);
            }
            if (data.hasOwnProperty('sEzsigntemplatepackageDescription')) {
                obj['sEzsigntemplatepackageDescription'] = ApiClient.convertToType(data['sEzsigntemplatepackageDescription'], 'String');
            }
            if (data.hasOwnProperty('bEzsigntemplatepackageIsactive')) {
                obj['bEzsigntemplatepackageIsactive'] = ApiClient.convertToType(data['bEzsigntemplatepackageIsactive'], 'Boolean');
            }
            if (data.hasOwnProperty('iEzsigntemplatepackagemembership')) {
                obj['iEzsigntemplatepackagemembership'] = ApiClient.convertToType(data['iEzsigntemplatepackagemembership'], 'Number');
            }
        }
        return obj;
    }

/**
     * Returns The unique ID of the Ezsigntemplatepackage
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
     * Returns The unique ID of the Department.
     * @return {Number}
     */
    getFkiDepartmentID() {
        return this.fkiDepartmentID;
    }

    /**
     * Sets The unique ID of the Department.
     * @param {Number} fkiDepartmentID The unique ID of the Department.
     */
    setFkiDepartmentID(fkiDepartmentID) {
        this['fkiDepartmentID'] = fkiDepartmentID;
    }
/**
     * Returns The unique ID of the Team
     * @return {Number}
     */
    getFkiTeamID() {
        return this.fkiTeamID;
    }

    /**
     * Sets The unique ID of the Team
     * @param {Number} fkiTeamID The unique ID of the Team
     */
    setFkiTeamID(fkiTeamID) {
        this['fkiTeamID'] = fkiTeamID;
    }
/**
     * Returns The unique ID of the Ezsignfoldertype.
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
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplatepackageType}
     */
    getEEzsigntemplatepackageType() {
        return this.eEzsigntemplatepackageType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplatepackageType} eEzsigntemplatepackageType
     */
    setEEzsigntemplatepackageType(eEzsigntemplatepackageType) {
        this['eEzsigntemplatepackageType'] = eEzsigntemplatepackageType;
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
/**
     * Returns The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
     * @return {Number}
     */
    getIEzsigntemplatepackagemembership() {
        return this.iEzsigntemplatepackagemembership;
    }

    /**
     * Sets The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
     * @param {Number} iEzsigntemplatepackagemembership The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
     */
    setIEzsigntemplatepackagemembership(iEzsigntemplatepackagemembership) {
        this['iEzsigntemplatepackagemembership'] = iEzsigntemplatepackagemembership;
    }

}

/**
 * The unique ID of the Ezsigntemplatepackage
 * @member {Number} pkiEzsigntemplatepackageID
 */
EzsigntemplatepackageListElement.prototype['pkiEzsigntemplatepackageID'] = undefined;

/**
 * The unique ID of the Department.
 * @member {Number} fkiDepartmentID
 */
EzsigntemplatepackageListElement.prototype['fkiDepartmentID'] = undefined;

/**
 * The unique ID of the Team
 * @member {Number} fkiTeamID
 */
EzsigntemplatepackageListElement.prototype['fkiTeamID'] = undefined;

/**
 * The unique ID of the Ezsignfoldertype.
 * @member {Number} fkiEzsignfoldertypeID
 */
EzsigntemplatepackageListElement.prototype['fkiEzsignfoldertypeID'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplatepackageListElement.prototype['fkiLanguageID'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplatepackageType} eEzsigntemplatepackageType
 */
EzsigntemplatepackageListElement.prototype['eEzsigntemplatepackageType'] = undefined;

/**
 * The description of the Ezsigntemplatepackage
 * @member {String} sEzsigntemplatepackageDescription
 */
EzsigntemplatepackageListElement.prototype['sEzsigntemplatepackageDescription'] = undefined;

/**
 * Whether the Ezsigntemplatepackage is active or not
 * @member {Boolean} bEzsigntemplatepackageIsactive
 */
EzsigntemplatepackageListElement.prototype['bEzsigntemplatepackageIsactive'] = undefined;

/**
 * The total number of Ezsigntemplatepackagemembership in the Ezsigntemplatepackage
 * @member {Number} iEzsigntemplatepackagemembership
 */
EzsigntemplatepackageListElement.prototype['iEzsigntemplatepackagemembership'] = undefined;






export default EzsigntemplatepackageListElement;

