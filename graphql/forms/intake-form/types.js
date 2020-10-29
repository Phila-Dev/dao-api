const Query = `
  type Query {
    intakeForm(_id: String!): IntakeForm!
    intakeForms: [IntakeForm!]!
  }`;

const Mutation = `
  type Mutation {
    insertIntakeForm(input: IntakeFormInput):  IntakeForm!
  }`;

const IntakeForm = `
  type IntakeForm {
    PID:  Int!
    firstName: String
    lastName: String
    dateOfBirth: String
    sex: Sex
    race: Race
    isLatino: Boolean
    phoneNumber: String
    address1: String
    address2: String
    zip: String
    school: String
    grade: String

    guardian1FirstName: String
    guardian1LastName: String
    guardian1Relation: Relation

    guardian2FirstName: String
    guardian2LastName: String
    guardian2Relation: Relation

    incidentDate: String
    isIncidentTimeKnown:  Boolean 
    incidentAddress: String
    incidentZip: String,
    incidentDistrict: String
    incidentType: IncidentType
    victimFirstName: String
    victimLastName: String

    DCNum: String
    SID: String
    arrestDate: String
    arrestingDistrict: Int
    referralDate: String
    isGunCase: Boolean
    isGunInvolvedArrest: Boolean
    officers: [String]
    isDirectFiled: Boolean

    petitions: [IntakeFormPetition]

    DA: String
    notes: String
    diagnoses: Diagnosis
    traumaTypes: TraumaType
    treatments: Treatment
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

    supervisions: [IntakeFormSupervision]
    conditions: [IntakeFormCondition]

    diversionType: String
    diversionReferralDate: String
    diversionReferralSource: String
    YAPPanelDistrict: String
    ReasonsNoDiversion: [String]
    initialHearingDate: String
    initialHearingLocation: Courtroom
}`;

const IntakeFormPetition = `
  type IntakeFormPetition {
    petitionNum: Int
    dateFiled: String
    isTransferFromOtherCounty: Boolean
    legalStatus: LegalStatus
    charges: [PetitionCharge]
  }
`;

const PetitionCharge = `
  type PetitionCharge {
    code: String
    name: String
    isLead: Boolean
    grade: ChargeGrade
    category: ChargeCategory
  }
`;

const IntakeFormSupervision = `
  type IntakeFormSupervision {
    supervisionType: SupervisionType
    agency: String
    reasons: [String]
  }
`;

const IntakeFormCondition = `
  type IntakeFormCondition {
    conditionType: String
    provider: String
  }
`;

export default [
  IntakeForm,
  IntakeFormCondition,
  IntakeFormPetition,
  IntakeFormSupervision,
  Mutation,
  PetitionCharge,
  Query,
];