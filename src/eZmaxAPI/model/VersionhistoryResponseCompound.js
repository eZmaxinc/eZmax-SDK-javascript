/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.1.18
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import FieldEVersionhistoryType from './FieldEVersionhistoryType';
import FieldEVersionhistoryUsertype from './FieldEVersionhistoryUsertype';
import MultilingualVersionhistoryDetail from './MultilingualVersionhistoryDetail';
import VersionhistoryResponse from './VersionhistoryResponse';

/**
 * The VersionhistoryResponseCompound model module.
 * @module eZmaxAPI/model/VersionhistoryResponseCompound
 * @version 1.1.18
 */
class VersionhistoryResponseCompound {
    /**
     * Constructs a new <code>VersionhistoryResponseCompound</code>.
     * A Versionhistory Object
     * @alias module:eZmaxAPI/model/VersionhistoryResponseCompound
     * @implements module:eZmaxAPI/model/VersionhistoryResponse
     * @param pkiVersionhistoryID {Number} The unique ID of the Versionhistory
     * @param objVersionhistoryDetail {module:eZmaxAPI/model/MultilingualVersionhistoryDetail} 
     * @param dtVersionhistoryDate {String} The date  at which the Versionhistory was published or should be published
     * @param eVersionhistoryType {module:eZmaxAPI/model/FieldEVersionhistoryType} 
     * @param bVersionhistoryDraft {Boolean} Whether the Versionhistory is published or still a draft
     */
    constructor(pkiVersionhistoryID, objVersionhistoryDetail, dtVersionhistoryDate, eVersionhistoryType, bVersionhistoryDraft) { 
        VersionhistoryResponse.initialize(this, pkiVersionhistoryID, objVersionhistoryDetail, dtVersionhistoryDate, eVersionhistoryType, bVersionhistoryDraft);
        VersionhistoryResponseCompound.initialize(this, pkiVersionhistoryID, objVersionhistoryDetail, dtVersionhistoryDate, eVersionhistoryType, bVersionhistoryDraft);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiVersionhistoryID, objVersionhistoryDetail, dtVersionhistoryDate, eVersionhistoryType, bVersionhistoryDraft) { 
        obj['pkiVersionhistoryID'] = pkiVersionhistoryID;
        obj['objVersionhistoryDetail'] = objVersionhistoryDetail;
        obj['dtVersionhistoryDate'] = dtVersionhistoryDate;
        obj['eVersionhistoryType'] = eVersionhistoryType;
        obj['bVersionhistoryDraft'] = bVersionhistoryDraft;
    }

    /**
     * Constructs a <code>VersionhistoryResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/VersionhistoryResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/VersionhistoryResponseCompound} The populated <code>VersionhistoryResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VersionhistoryResponseCompound();
            VersionhistoryResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiVersionhistoryID')) {
                obj['pkiVersionhistoryID'] = ApiClient.convertToType(data['pkiVersionhistoryID'], 'Number');
            }
            if (data.hasOwnProperty('fkiModuleID')) {
                obj['fkiModuleID'] = ApiClient.convertToType(data['fkiModuleID'], 'Number');
            }
            if (data.hasOwnProperty('fkiModulesectionID')) {
                obj['fkiModulesectionID'] = ApiClient.convertToType(data['fkiModulesectionID'], 'Number');
            }
            if (data.hasOwnProperty('sModuleNameX')) {
                obj['sModuleNameX'] = ApiClient.convertToType(data['sModuleNameX'], 'String');
            }
            if (data.hasOwnProperty('sModulesectionNameX')) {
                obj['sModulesectionNameX'] = ApiClient.convertToType(data['sModulesectionNameX'], 'String');
            }
            if (data.hasOwnProperty('eVersionhistoryUsertype')) {
                obj['eVersionhistoryUsertype'] = FieldEVersionhistoryUsertype.constructFromObject(data['eVersionhistoryUsertype']);
            }
            if (data.hasOwnProperty('objVersionhistoryDetail')) {
                obj['objVersionhistoryDetail'] = MultilingualVersionhistoryDetail.constructFromObject(data['objVersionhistoryDetail']);
            }
            if (data.hasOwnProperty('dtVersionhistoryDate')) {
                obj['dtVersionhistoryDate'] = ApiClient.convertToType(data['dtVersionhistoryDate'], 'String');
            }
            if (data.hasOwnProperty('dtVersionhistoryDateend')) {
                obj['dtVersionhistoryDateend'] = ApiClient.convertToType(data['dtVersionhistoryDateend'], 'String');
            }
            if (data.hasOwnProperty('eVersionhistoryType')) {
                obj['eVersionhistoryType'] = FieldEVersionhistoryType.constructFromObject(data['eVersionhistoryType']);
            }
            if (data.hasOwnProperty('bVersionhistoryDraft')) {
                obj['bVersionhistoryDraft'] = ApiClient.convertToType(data['bVersionhistoryDraft'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>VersionhistoryResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>VersionhistoryResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of VersionhistoryResponseCompound.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sModuleNameX'] && !(typeof data['sModuleNameX'] === 'string' || data['sModuleNameX'] instanceof String)) {
            throw new Error("Expected the field `sModuleNameX` to be a primitive type in the JSON string but got " + data['sModuleNameX']);
        }
        // ensure the json data is a string
        if (data['sModulesectionNameX'] && !(typeof data['sModulesectionNameX'] === 'string' || data['sModulesectionNameX'] instanceof String)) {
            throw new Error("Expected the field `sModulesectionNameX` to be a primitive type in the JSON string but got " + data['sModulesectionNameX']);
        }
        // validate the optional field `objVersionhistoryDetail`
        if (data['objVersionhistoryDetail']) { // data not null
          MultilingualVersionhistoryDetail.validateJSON(data['objVersionhistoryDetail']);
        }
        // ensure the json data is a string
        if (data['dtVersionhistoryDate'] && !(typeof data['dtVersionhistoryDate'] === 'string' || data['dtVersionhistoryDate'] instanceof String)) {
            throw new Error("Expected the field `dtVersionhistoryDate` to be a primitive type in the JSON string but got " + data['dtVersionhistoryDate']);
        }
        // ensure the json data is a string
        if (data['dtVersionhistoryDateend'] && !(typeof data['dtVersionhistoryDateend'] === 'string' || data['dtVersionhistoryDateend'] instanceof String)) {
            throw new Error("Expected the field `dtVersionhistoryDateend` to be a primitive type in the JSON string but got " + data['dtVersionhistoryDateend']);
        }

        return true;
    }

/**
     * Returns The unique ID of the Versionhistory
     * minimum: 0
     * @return {Number}
     */
    getPkiVersionhistoryID() {
        return this.pkiVersionhistoryID;
    }

    /**
     * Sets The unique ID of the Versionhistory
     * @param {Number} pkiVersionhistoryID The unique ID of the Versionhistory
     */
    setPkiVersionhistoryID(pkiVersionhistoryID) {
        this['pkiVersionhistoryID'] = pkiVersionhistoryID;
    }
/**
     * Returns The unique ID of the Module
     * minimum: 0
     * @return {Number}
     */
    getFkiModuleID() {
        return this.fkiModuleID;
    }

    /**
     * Sets The unique ID of the Module
     * @param {Number} fkiModuleID The unique ID of the Module
     */
    setFkiModuleID(fkiModuleID) {
        this['fkiModuleID'] = fkiModuleID;
    }
/**
     * Returns The unique ID of the Modulesection
     * minimum: 0
     * @return {Number}
     */
    getFkiModulesectionID() {
        return this.fkiModulesectionID;
    }

    /**
     * Sets The unique ID of the Modulesection
     * @param {Number} fkiModulesectionID The unique ID of the Modulesection
     */
    setFkiModulesectionID(fkiModulesectionID) {
        this['fkiModulesectionID'] = fkiModulesectionID;
    }
/**
     * Returns The Name of the Module in the language of the requester
     * @return {String}
     */
    getSModuleNameX() {
        return this.sModuleNameX;
    }

    /**
     * Sets The Name of the Module in the language of the requester
     * @param {String} sModuleNameX The Name of the Module in the language of the requester
     */
    setSModuleNameX(sModuleNameX) {
        this['sModuleNameX'] = sModuleNameX;
    }
/**
     * Returns The Name of the Modulesection in the language of the requester
     * @return {String}
     */
    getSModulesectionNameX() {
        return this.sModulesectionNameX;
    }

    /**
     * Sets The Name of the Modulesection in the language of the requester
     * @param {String} sModulesectionNameX The Name of the Modulesection in the language of the requester
     */
    setSModulesectionNameX(sModulesectionNameX) {
        this['sModulesectionNameX'] = sModulesectionNameX;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEVersionhistoryUsertype}
     */
    getEVersionhistoryUsertype() {
        return this.eVersionhistoryUsertype;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEVersionhistoryUsertype} eVersionhistoryUsertype
     */
    setEVersionhistoryUsertype(eVersionhistoryUsertype) {
        this['eVersionhistoryUsertype'] = eVersionhistoryUsertype;
    }
/**
     * @return {module:eZmaxAPI/model/MultilingualVersionhistoryDetail}
     */
    getObjVersionhistoryDetail() {
        return this.objVersionhistoryDetail;
    }

    /**
     * @param {module:eZmaxAPI/model/MultilingualVersionhistoryDetail} objVersionhistoryDetail
     */
    setObjVersionhistoryDetail(objVersionhistoryDetail) {
        this['objVersionhistoryDetail'] = objVersionhistoryDetail;
    }
/**
     * Returns The date  at which the Versionhistory was published or should be published
     * @return {String}
     */
    getDtVersionhistoryDate() {
        return this.dtVersionhistoryDate;
    }

    /**
     * Sets The date  at which the Versionhistory was published or should be published
     * @param {String} dtVersionhistoryDate The date  at which the Versionhistory was published or should be published
     */
    setDtVersionhistoryDate(dtVersionhistoryDate) {
        this['dtVersionhistoryDate'] = dtVersionhistoryDate;
    }
/**
     * Returns The date  at which the Versionhistory will no longer be visible
     * @return {String}
     */
    getDtVersionhistoryDateend() {
        return this.dtVersionhistoryDateend;
    }

    /**
     * Sets The date  at which the Versionhistory will no longer be visible
     * @param {String} dtVersionhistoryDateend The date  at which the Versionhistory will no longer be visible
     */
    setDtVersionhistoryDateend(dtVersionhistoryDateend) {
        this['dtVersionhistoryDateend'] = dtVersionhistoryDateend;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEVersionhistoryType}
     */
    getEVersionhistoryType() {
        return this.eVersionhistoryType;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEVersionhistoryType} eVersionhistoryType
     */
    setEVersionhistoryType(eVersionhistoryType) {
        this['eVersionhistoryType'] = eVersionhistoryType;
    }
/**
     * Returns Whether the Versionhistory is published or still a draft
     * @return {Boolean}
     */
    getBVersionhistoryDraft() {
        return this.bVersionhistoryDraft;
    }

    /**
     * Sets Whether the Versionhistory is published or still a draft
     * @param {Boolean} bVersionhistoryDraft Whether the Versionhistory is published or still a draft
     */
    setBVersionhistoryDraft(bVersionhistoryDraft) {
        this['bVersionhistoryDraft'] = bVersionhistoryDraft;
    }

}

VersionhistoryResponseCompound.RequiredProperties = ["pkiVersionhistoryID", "objVersionhistoryDetail", "dtVersionhistoryDate", "eVersionhistoryType", "bVersionhistoryDraft"];

/**
 * The unique ID of the Versionhistory
 * @member {Number} pkiVersionhistoryID
 */
VersionhistoryResponseCompound.prototype['pkiVersionhistoryID'] = undefined;

/**
 * The unique ID of the Module
 * @member {Number} fkiModuleID
 */
VersionhistoryResponseCompound.prototype['fkiModuleID'] = undefined;

/**
 * The unique ID of the Modulesection
 * @member {Number} fkiModulesectionID
 */
VersionhistoryResponseCompound.prototype['fkiModulesectionID'] = undefined;

/**
 * The Name of the Module in the language of the requester
 * @member {String} sModuleNameX
 */
VersionhistoryResponseCompound.prototype['sModuleNameX'] = undefined;

/**
 * The Name of the Modulesection in the language of the requester
 * @member {String} sModulesectionNameX
 */
VersionhistoryResponseCompound.prototype['sModulesectionNameX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEVersionhistoryUsertype} eVersionhistoryUsertype
 */
VersionhistoryResponseCompound.prototype['eVersionhistoryUsertype'] = undefined;

/**
 * @member {module:eZmaxAPI/model/MultilingualVersionhistoryDetail} objVersionhistoryDetail
 */
VersionhistoryResponseCompound.prototype['objVersionhistoryDetail'] = undefined;

/**
 * The date  at which the Versionhistory was published or should be published
 * @member {String} dtVersionhistoryDate
 */
VersionhistoryResponseCompound.prototype['dtVersionhistoryDate'] = undefined;

/**
 * The date  at which the Versionhistory will no longer be visible
 * @member {String} dtVersionhistoryDateend
 */
VersionhistoryResponseCompound.prototype['dtVersionhistoryDateend'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEVersionhistoryType} eVersionhistoryType
 */
VersionhistoryResponseCompound.prototype['eVersionhistoryType'] = undefined;

/**
 * Whether the Versionhistory is published or still a draft
 * @member {Boolean} bVersionhistoryDraft
 */
VersionhistoryResponseCompound.prototype['bVersionhistoryDraft'] = undefined;


// Implement VersionhistoryResponse interface:
/**
 * The unique ID of the Versionhistory
 * @member {Number} pkiVersionhistoryID
 */
VersionhistoryResponse.prototype['pkiVersionhistoryID'] = undefined;
/**
 * The unique ID of the Module
 * @member {Number} fkiModuleID
 */
VersionhistoryResponse.prototype['fkiModuleID'] = undefined;
/**
 * The unique ID of the Modulesection
 * @member {Number} fkiModulesectionID
 */
VersionhistoryResponse.prototype['fkiModulesectionID'] = undefined;
/**
 * The Name of the Module in the language of the requester
 * @member {String} sModuleNameX
 */
VersionhistoryResponse.prototype['sModuleNameX'] = undefined;
/**
 * The Name of the Modulesection in the language of the requester
 * @member {String} sModulesectionNameX
 */
VersionhistoryResponse.prototype['sModulesectionNameX'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEVersionhistoryUsertype} eVersionhistoryUsertype
 */
VersionhistoryResponse.prototype['eVersionhistoryUsertype'] = undefined;
/**
 * @member {module:eZmaxAPI/model/MultilingualVersionhistoryDetail} objVersionhistoryDetail
 */
VersionhistoryResponse.prototype['objVersionhistoryDetail'] = undefined;
/**
 * The date  at which the Versionhistory was published or should be published
 * @member {String} dtVersionhistoryDate
 */
VersionhistoryResponse.prototype['dtVersionhistoryDate'] = undefined;
/**
 * The date  at which the Versionhistory will no longer be visible
 * @member {String} dtVersionhistoryDateend
 */
VersionhistoryResponse.prototype['dtVersionhistoryDateend'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEVersionhistoryType} eVersionhistoryType
 */
VersionhistoryResponse.prototype['eVersionhistoryType'] = undefined;
/**
 * Whether the Versionhistory is published or still a draft
 * @member {Boolean} bVersionhistoryDraft
 */
VersionhistoryResponse.prototype['bVersionhistoryDraft'] = undefined;




export default VersionhistoryResponseCompound;

