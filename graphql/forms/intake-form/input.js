const IntakeFormInput = `
  input IntakeFormInput {
    PID: Int
    firstName: String
    lastName: String
    dateOfBirth: String
    sex: String
    race: String
    isLatino: Boolean
    phoneNumber: String
    address: String
    zip: String
    school: String
    grade: String

    guardian1FirstName: String
    guardian1LastName: String
    guardian1Relation: String

    guardian2FirstName: String
    guardian2LastName: String
    guardian2Relation: String

    incidentDate: String
    isIncidentTimeKnown:  Boolean 
    incidentAddress: String
    incidentZip: String,
    incidentDistrict: String
    incidentType: String
    victimFirstName: String
    victimLastName: String

    DCNum: String
    SID: String
    arrestDate: String
    arrestingDistrict: String
    referralDate: String
    isGunCase: Boolean
    isGunInvolvedArrest: Boolean
    officers: [String]
    isDirectFiled: Boolean

    petitions: [PetitionInput]

    DA: String
    notes: String

    diagnoses: [String]
    traumaTypes: [String]
    treatments: [String]
    
    callInDate: String
    wasDRAIAdministered: Boolean
    DRAIScore: Int
    DRAIAction: String
    callInHoldFacility: String
    callInOverrideHoldReasons: [String]
    
    intakeConferenceDate: String
    intakeConferenceType: String
    intakeConferenceOutcome: String
    DHSStatusAtArrest: String

    supervisions: [SupervisionInput]
    conditions: [ConditionInput]

    diversionType: String
    diversionReferralDate: String
    diversionReferralSource: String
    YAPPanelDistrict: String
    ReasonsNoDiversion: [String]

    initialHearingDate: String
    initialHearingLocation: String
  }`;

const PetitionInput = `
  input PetitionInput {
    petitionNum: String
    dateFiled: String
    isTransferFromOtherCounty: Boolean
    legalStatus: String
    charges: [PetitionChargeInput]
  }`;

const PetitionChargeInput = `
  input PetitionChargeInput {
    code: String
    name: String
    isLead: Boolean
    grade: String
    category: String
  }`;

const SupervisionInput = `
  input SupervisionInput {
    supervisionType: String
    provider: String
    reasons: [String]
  }`;

const ConditionInput = `
  input ConditionInput {
    conditionType: String
    provider: String
    reasons: [String]
  }
`;

export default [
  ConditionInput,
  IntakeFormInput,
  PetitionChargeInput,
  PetitionInput,
  SupervisionInput,
];
