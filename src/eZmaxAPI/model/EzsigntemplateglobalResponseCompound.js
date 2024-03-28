/**
 * eZmax API Definition (Full)
 * This API expose all the functionnalities for the eZmax and eZsign applications.
 *
 * The version of the OpenAPI document: 1.2.0
 * Contact: support-api@ezmax.ca
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import EzsigntemplateglobalResponse from './EzsigntemplateglobalResponse';
import EzsigntemplateglobaldocumentResponse from './EzsigntemplateglobaldocumentResponse';
import EzsigntemplateglobalsignerResponseCompound from './EzsigntemplateglobalsignerResponseCompound';
import FieldEEzsigntemplateglobalModule from './FieldEEzsigntemplateglobalModule';
import FieldEEzsigntemplateglobalSupplier from './FieldEEzsigntemplateglobalSupplier';

/**
 * The EzsigntemplateglobalResponseCompound model module.
 * @module eZmaxAPI/model/EzsigntemplateglobalResponseCompound
 * @version 1.2.0
 */
class EzsigntemplateglobalResponseCompound {
    /**
     * Constructs a new <code>EzsigntemplateglobalResponseCompound</code>.
     * A Ezsigntemplateglobal Object
     * @alias module:eZmaxAPI/model/EzsigntemplateglobalResponseCompound
     * @implements module:eZmaxAPI/model/EzsigntemplateglobalResponse
     * @param pkiEzsigntemplateglobalID {Number} The unique ID of the Ezsigntemplateglobal
     * @param fkiEzsigntemplateglobaldocumentID {Number} The unique ID of the Ezsigntemplateglobaldocument
     * @param fkiModuleID {Number} The unique ID of the Module
     * @param fkiLanguageID {Number} The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
     * @param sLanguageNameX {String} The Name of the Language in the language of the requester
     * @param eEzsigntemplateglobalModule {module:eZmaxAPI/model/FieldEEzsigntemplateglobalModule} 
     * @param eEzsigntemplateglobalSupplier {module:eZmaxAPI/model/FieldEEzsigntemplateglobalSupplier} 
     * @param sEzsigntemplateglobalCode {String} The Code of the Ezsigntemplateglobal
     * @param sEzsigntemplateglobalDescription {String} The description of the Ezsigntemplate
     * @param a_objEzsigntemplateglobalsigner {Array.<module:eZmaxAPI/model/EzsigntemplateglobalsignerResponseCompound>} 
     */
    constructor(pkiEzsigntemplateglobalID, fkiEzsigntemplateglobaldocumentID, fkiModuleID, fkiLanguageID, sLanguageNameX, eEzsigntemplateglobalModule, eEzsigntemplateglobalSupplier, sEzsigntemplateglobalCode, sEzsigntemplateglobalDescription, a_objEzsigntemplateglobalsigner) { 
        EzsigntemplateglobalResponse.initialize(this, pkiEzsigntemplateglobalID, fkiEzsigntemplateglobaldocumentID, fkiModuleID, fkiLanguageID, sLanguageNameX, eEzsigntemplateglobalModule, eEzsigntemplateglobalSupplier, sEzsigntemplateglobalCode, sEzsigntemplateglobalDescription);
        EzsigntemplateglobalResponseCompound.initialize(this, pkiEzsigntemplateglobalID, fkiEzsigntemplateglobaldocumentID, fkiModuleID, fkiLanguageID, sLanguageNameX, eEzsigntemplateglobalModule, eEzsigntemplateglobalSupplier, sEzsigntemplateglobalCode, sEzsigntemplateglobalDescription, a_objEzsigntemplateglobalsigner);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, pkiEzsigntemplateglobalID, fkiEzsigntemplateglobaldocumentID, fkiModuleID, fkiLanguageID, sLanguageNameX, eEzsigntemplateglobalModule, eEzsigntemplateglobalSupplier, sEzsigntemplateglobalCode, sEzsigntemplateglobalDescription, a_objEzsigntemplateglobalsigner) { 
        obj['pkiEzsigntemplateglobalID'] = pkiEzsigntemplateglobalID;
        obj['fkiEzsigntemplateglobaldocumentID'] = fkiEzsigntemplateglobaldocumentID;
        obj['fkiModuleID'] = fkiModuleID;
        obj['fkiLanguageID'] = fkiLanguageID;
        obj['sLanguageNameX'] = sLanguageNameX;
        obj['eEzsigntemplateglobalModule'] = eEzsigntemplateglobalModule;
        obj['eEzsigntemplateglobalSupplier'] = eEzsigntemplateglobalSupplier;
        obj['sEzsigntemplateglobalCode'] = sEzsigntemplateglobalCode;
        obj['sEzsigntemplateglobalDescription'] = sEzsigntemplateglobalDescription;
        obj['a_objEzsigntemplateglobalsigner'] = a_objEzsigntemplateglobalsigner;
    }

    /**
     * Constructs a <code>EzsigntemplateglobalResponseCompound</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:eZmaxAPI/model/EzsigntemplateglobalResponseCompound} obj Optional instance to populate.
     * @return {module:eZmaxAPI/model/EzsigntemplateglobalResponseCompound} The populated <code>EzsigntemplateglobalResponseCompound</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EzsigntemplateglobalResponseCompound();
            EzsigntemplateglobalResponse.constructFromObject(data, obj);

            if (data.hasOwnProperty('pkiEzsigntemplateglobalID')) {
                obj['pkiEzsigntemplateglobalID'] = ApiClient.convertToType(data['pkiEzsigntemplateglobalID'], 'Number');
            }
            if (data.hasOwnProperty('fkiEzsigntemplateglobaldocumentID')) {
                obj['fkiEzsigntemplateglobaldocumentID'] = ApiClient.convertToType(data['fkiEzsigntemplateglobaldocumentID'], 'Number');
            }
            if (data.hasOwnProperty('fkiModuleID')) {
                obj['fkiModuleID'] = ApiClient.convertToType(data['fkiModuleID'], 'Number');
            }
            if (data.hasOwnProperty('sModuleNameX')) {
                obj['sModuleNameX'] = ApiClient.convertToType(data['sModuleNameX'], 'String');
            }
            if (data.hasOwnProperty('fkiLanguageID')) {
                obj['fkiLanguageID'] = ApiClient.convertToType(data['fkiLanguageID'], 'Number');
            }
            if (data.hasOwnProperty('sLanguageNameX')) {
                obj['sLanguageNameX'] = ApiClient.convertToType(data['sLanguageNameX'], 'String');
            }
            if (data.hasOwnProperty('eEzsigntemplateglobalModule')) {
                obj['eEzsigntemplateglobalModule'] = FieldEEzsigntemplateglobalModule.constructFromObject(data['eEzsigntemplateglobalModule']);
            }
            if (data.hasOwnProperty('eEzsigntemplateglobalSupplier')) {
                obj['eEzsigntemplateglobalSupplier'] = FieldEEzsigntemplateglobalSupplier.constructFromObject(data['eEzsigntemplateglobalSupplier']);
            }
            if (data.hasOwnProperty('sEzsigntemplateglobalCode')) {
                obj['sEzsigntemplateglobalCode'] = ApiClient.convertToType(data['sEzsigntemplateglobalCode'], 'String');
            }
            if (data.hasOwnProperty('sEzsigntemplateglobalDescription')) {
                obj['sEzsigntemplateglobalDescription'] = ApiClient.convertToType(data['sEzsigntemplateglobalDescription'], 'String');
            }
            if (data.hasOwnProperty('objEzsigntemplateglobaldocument')) {
                obj['objEzsigntemplateglobaldocument'] = EzsigntemplateglobaldocumentResponse.constructFromObject(data['objEzsigntemplateglobaldocument']);
            }
            if (data.hasOwnProperty('a_objEzsigntemplateglobalsigner')) {
                obj['a_objEzsigntemplateglobalsigner'] = ApiClient.convertToType(data['a_objEzsigntemplateglobalsigner'], [EzsigntemplateglobalsignerResponseCompound]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EzsigntemplateglobalResponseCompound</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EzsigntemplateglobalResponseCompound</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EzsigntemplateglobalResponseCompound.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['sModuleNameX'] && !(typeof data['sModuleNameX'] === 'string' || data['sModuleNameX'] instanceof String)) {
            throw new Error("Expected the field `sModuleNameX` to be a primitive type in the JSON string but got " + data['sModuleNameX']);
        }
        // ensure the json data is a string
        if (data['sLanguageNameX'] && !(typeof data['sLanguageNameX'] === 'string' || data['sLanguageNameX'] instanceof String)) {
            throw new Error("Expected the field `sLanguageNameX` to be a primitive type in the JSON string but got " + data['sLanguageNameX']);
        }
        // ensure the json data is a string
        if (data['sEzsigntemplateglobalCode'] && !(typeof data['sEzsigntemplateglobalCode'] === 'string' || data['sEzsigntemplateglobalCode'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplateglobalCode` to be a primitive type in the JSON string but got " + data['sEzsigntemplateglobalCode']);
        }
        // ensure the json data is a string
        if (data['sEzsigntemplateglobalDescription'] && !(typeof data['sEzsigntemplateglobalDescription'] === 'string' || data['sEzsigntemplateglobalDescription'] instanceof String)) {
            throw new Error("Expected the field `sEzsigntemplateglobalDescription` to be a primitive type in the JSON string but got " + data['sEzsigntemplateglobalDescription']);
        }
        // validate the optional field `objEzsigntemplateglobaldocument`
        if (data['objEzsigntemplateglobaldocument']) { // data not null
          EzsigntemplateglobaldocumentResponse.validateJSON(data['objEzsigntemplateglobaldocument']);
        }
        if (data['a_objEzsigntemplateglobalsigner']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['a_objEzsigntemplateglobalsigner'])) {
                throw new Error("Expected the field `a_objEzsigntemplateglobalsigner` to be an array in the JSON data but got " + data['a_objEzsigntemplateglobalsigner']);
            }
            // validate the optional field `a_objEzsigntemplateglobalsigner` (array)
            for (const item of data['a_objEzsigntemplateglobalsigner']) {
                EzsigntemplateglobalsignerResponseCompound.validateJSON(item);
            };
        }

        return true;
    }

/**
     * Returns The unique ID of the Ezsigntemplateglobal
     * minimum: 0
     * @return {Number}
     */
    getPkiEzsigntemplateglobalID() {
        return this.pkiEzsigntemplateglobalID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplateglobal
     * @param {Number} pkiEzsigntemplateglobalID The unique ID of the Ezsigntemplateglobal
     */
    setPkiEzsigntemplateglobalID(pkiEzsigntemplateglobalID) {
        this['pkiEzsigntemplateglobalID'] = pkiEzsigntemplateglobalID;
    }
/**
     * Returns The unique ID of the Ezsigntemplateglobaldocument
     * minimum: 0
     * @return {Number}
     */
    getFkiEzsigntemplateglobaldocumentID() {
        return this.fkiEzsigntemplateglobaldocumentID;
    }

    /**
     * Sets The unique ID of the Ezsigntemplateglobaldocument
     * @param {Number} fkiEzsigntemplateglobaldocumentID The unique ID of the Ezsigntemplateglobaldocument
     */
    setFkiEzsigntemplateglobaldocumentID(fkiEzsigntemplateglobaldocumentID) {
        this['fkiEzsigntemplateglobaldocumentID'] = fkiEzsigntemplateglobaldocumentID;
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
     * Returns The Name of the Language in the language of the requester
     * @return {String}
     */
    getSLanguageNameX() {
        return this.sLanguageNameX;
    }

    /**
     * Sets The Name of the Language in the language of the requester
     * @param {String} sLanguageNameX The Name of the Language in the language of the requester
     */
    setSLanguageNameX(sLanguageNameX) {
        this['sLanguageNameX'] = sLanguageNameX;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplateglobalModule}
     */
    getEEzsigntemplateglobalModule() {
        return this.eEzsigntemplateglobalModule;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplateglobalModule} eEzsigntemplateglobalModule
     */
    setEEzsigntemplateglobalModule(eEzsigntemplateglobalModule) {
        this['eEzsigntemplateglobalModule'] = eEzsigntemplateglobalModule;
    }
/**
     * @return {module:eZmaxAPI/model/FieldEEzsigntemplateglobalSupplier}
     */
    getEEzsigntemplateglobalSupplier() {
        return this.eEzsigntemplateglobalSupplier;
    }

    /**
     * @param {module:eZmaxAPI/model/FieldEEzsigntemplateglobalSupplier} eEzsigntemplateglobalSupplier
     */
    setEEzsigntemplateglobalSupplier(eEzsigntemplateglobalSupplier) {
        this['eEzsigntemplateglobalSupplier'] = eEzsigntemplateglobalSupplier;
    }
/**
     * Returns The Code of the Ezsigntemplateglobal
     * @return {String}
     */
    getSEzsigntemplateglobalCode() {
        return this.sEzsigntemplateglobalCode;
    }

    /**
     * Sets The Code of the Ezsigntemplateglobal
     * @param {String} sEzsigntemplateglobalCode The Code of the Ezsigntemplateglobal
     */
    setSEzsigntemplateglobalCode(sEzsigntemplateglobalCode) {
        this['sEzsigntemplateglobalCode'] = sEzsigntemplateglobalCode;
    }
/**
     * Returns The description of the Ezsigntemplate
     * @return {String}
     */
    getSEzsigntemplateglobalDescription() {
        return this.sEzsigntemplateglobalDescription;
    }

    /**
     * Sets The description of the Ezsigntemplate
     * @param {String} sEzsigntemplateglobalDescription The description of the Ezsigntemplate
     */
    setSEzsigntemplateglobalDescription(sEzsigntemplateglobalDescription) {
        this['sEzsigntemplateglobalDescription'] = sEzsigntemplateglobalDescription;
    }
/**
     * @return {module:eZmaxAPI/model/EzsigntemplateglobaldocumentResponse}
     */
    getObjEzsigntemplateglobaldocument() {
        return this.objEzsigntemplateglobaldocument;
    }

    /**
     * @param {module:eZmaxAPI/model/EzsigntemplateglobaldocumentResponse} objEzsigntemplateglobaldocument
     */
    setObjEzsigntemplateglobaldocument(objEzsigntemplateglobaldocument) {
        this['objEzsigntemplateglobaldocument'] = objEzsigntemplateglobaldocument;
    }
/**
     * @return {Array.<module:eZmaxAPI/model/EzsigntemplateglobalsignerResponseCompound>}
     */
    getAObjEzsigntemplateglobalsigner() {
        return this.a_objEzsigntemplateglobalsigner;
    }

    /**
     * @param {Array.<module:eZmaxAPI/model/EzsigntemplateglobalsignerResponseCompound>} a_objEzsigntemplateglobalsigner
     */
    setAObjEzsigntemplateglobalsigner(a_objEzsigntemplateglobalsigner) {
        this['a_objEzsigntemplateglobalsigner'] = a_objEzsigntemplateglobalsigner;
    }

}

EzsigntemplateglobalResponseCompound.RequiredProperties = ["pkiEzsigntemplateglobalID", "fkiEzsigntemplateglobaldocumentID", "fkiModuleID", "fkiLanguageID", "sLanguageNameX", "eEzsigntemplateglobalModule", "eEzsigntemplateglobalSupplier", "sEzsigntemplateglobalCode", "sEzsigntemplateglobalDescription", "a_objEzsigntemplateglobalsigner"];

/**
 * The unique ID of the Ezsigntemplateglobal
 * @member {Number} pkiEzsigntemplateglobalID
 */
EzsigntemplateglobalResponseCompound.prototype['pkiEzsigntemplateglobalID'] = undefined;

/**
 * The unique ID of the Ezsigntemplateglobaldocument
 * @member {Number} fkiEzsigntemplateglobaldocumentID
 */
EzsigntemplateglobalResponseCompound.prototype['fkiEzsigntemplateglobaldocumentID'] = undefined;

/**
 * The unique ID of the Module
 * @member {Number} fkiModuleID
 */
EzsigntemplateglobalResponseCompound.prototype['fkiModuleID'] = undefined;

/**
 * The Name of the Module in the language of the requester
 * @member {String} sModuleNameX
 */
EzsigntemplateglobalResponseCompound.prototype['sModuleNameX'] = undefined;

/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplateglobalResponseCompound.prototype['fkiLanguageID'] = undefined;

/**
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
EzsigntemplateglobalResponseCompound.prototype['sLanguageNameX'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateglobalModule} eEzsigntemplateglobalModule
 */
EzsigntemplateglobalResponseCompound.prototype['eEzsigntemplateglobalModule'] = undefined;

/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateglobalSupplier} eEzsigntemplateglobalSupplier
 */
EzsigntemplateglobalResponseCompound.prototype['eEzsigntemplateglobalSupplier'] = undefined;

/**
 * The Code of the Ezsigntemplateglobal
 * @member {String} sEzsigntemplateglobalCode
 */
EzsigntemplateglobalResponseCompound.prototype['sEzsigntemplateglobalCode'] = undefined;

/**
 * The description of the Ezsigntemplate
 * @member {String} sEzsigntemplateglobalDescription
 */
EzsigntemplateglobalResponseCompound.prototype['sEzsigntemplateglobalDescription'] = undefined;

/**
 * @member {module:eZmaxAPI/model/EzsigntemplateglobaldocumentResponse} objEzsigntemplateglobaldocument
 */
EzsigntemplateglobalResponseCompound.prototype['objEzsigntemplateglobaldocument'] = undefined;

/**
 * @member {Array.<module:eZmaxAPI/model/EzsigntemplateglobalsignerResponseCompound>} a_objEzsigntemplateglobalsigner
 */
EzsigntemplateglobalResponseCompound.prototype['a_objEzsigntemplateglobalsigner'] = undefined;


// Implement EzsigntemplateglobalResponse interface:
/**
 * The unique ID of the Ezsigntemplateglobal
 * @member {Number} pkiEzsigntemplateglobalID
 */
EzsigntemplateglobalResponse.prototype['pkiEzsigntemplateglobalID'] = undefined;
/**
 * The unique ID of the Ezsigntemplateglobaldocument
 * @member {Number} fkiEzsigntemplateglobaldocumentID
 */
EzsigntemplateglobalResponse.prototype['fkiEzsigntemplateglobaldocumentID'] = undefined;
/**
 * The unique ID of the Module
 * @member {Number} fkiModuleID
 */
EzsigntemplateglobalResponse.prototype['fkiModuleID'] = undefined;
/**
 * The Name of the Module in the language of the requester
 * @member {String} sModuleNameX
 */
EzsigntemplateglobalResponse.prototype['sModuleNameX'] = undefined;
/**
 * The unique ID of the Language.  Valid values:  |Value|Description| |-|-| |1|French| |2|English|
 * @member {Number} fkiLanguageID
 */
EzsigntemplateglobalResponse.prototype['fkiLanguageID'] = undefined;
/**
 * The Name of the Language in the language of the requester
 * @member {String} sLanguageNameX
 */
EzsigntemplateglobalResponse.prototype['sLanguageNameX'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateglobalModule} eEzsigntemplateglobalModule
 */
EzsigntemplateglobalResponse.prototype['eEzsigntemplateglobalModule'] = undefined;
/**
 * @member {module:eZmaxAPI/model/FieldEEzsigntemplateglobalSupplier} eEzsigntemplateglobalSupplier
 */
EzsigntemplateglobalResponse.prototype['eEzsigntemplateglobalSupplier'] = undefined;
/**
 * The Code of the Ezsigntemplateglobal
 * @member {String} sEzsigntemplateglobalCode
 */
EzsigntemplateglobalResponse.prototype['sEzsigntemplateglobalCode'] = undefined;
/**
 * The description of the Ezsigntemplate
 * @member {String} sEzsigntemplateglobalDescription
 */
EzsigntemplateglobalResponse.prototype['sEzsigntemplateglobalDescription'] = undefined;




export default EzsigntemplateglobalResponseCompound;
