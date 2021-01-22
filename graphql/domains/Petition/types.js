const Petition = `
  type Petition {
    arrest: Arrest!
    certifications: [Certification]!
    continuances: [Continuance]!
    courtOrders: [CourtOrder]!
    charges: [Charge!]!
    dateFiled: String
    DCNum: String
    incident: Incident!
    intakeForm: IntakeForm!
    isDirectFiled: Boolean
    isDiverted: Boolean
    isTransferFromOtherCounty: Boolean
    legalStatus: String!
    legalStatusEvents: [LegalStatusEvent]!
    listings: [Listing]!
    petitionNumber: String!
    victims: [Victim]!
  }
`;

const PetitionInput = `
  input PetitionInput {
    dateFiled: String!
    DCNum: String
    incidentID: String!
    intakeFormID: String!,
    isDirectFiled: Boolean
    isDiverted: Boolean
    isTransferFromOtherCounty: Boolean
    petitionNumber: String!
  }
`;

export default [Petition, PetitionInput];
