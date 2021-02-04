import * as faker from 'faker';

import Guardian from './Guardian';

function formatDate(date) {
  return date.toISOString().substr(0, 10);
}

export default class Youth {
  constructor() {
    this.address = faker.address.streetAddress();
    this.dateOfBirth = formatDate(
      faker.date.between('2003-01-01', '2008-12-31')
    );
    this.firstName = faker.name.firstName();
    this.grade = faker.random.number(6) + 6; // 6-12 *untested
    this.guardians = [new Guardian()];
    this.isLatino = faker.random.boolean();
    this.lastName = faker.name.lastName();
    this.phoneNumber = '1231231234';
    this.PID = faker.random.number(10000);
    this.race = 'white';
    this.school = 'Vare';
    this.sex = 'male';
    this.zip = faker.address.zipCodeByState('PA');
  }

  generateIntakeData() {
    const intakeForm = new IntakeForm(this);

    this.petitions = [...this.petitions, ...intakeForm.petitions];

    intakeForm.petitions.forEach(({ charges }) => {
      charges.forEach(({ chargeID }) => {
        this.chargeIDs.push(chargeID);
      });
    });

    this.nextListingDate = intakeForm.initialHearingDate;
    this.nextListingLocation = intakeForm.initialHearingLocation;

    return intakeForm;
  }

  generateListings(num) {
    return new Array(num).fill().map(() => {
      const listing = new Listing(this);

      this.nextListingDate = listing.nextListingDate;
      this.nextListingLocation = listing.nextListingLocation;
      this.legalStatusEvents = [
        ...this.legalStatusEvents,
        ...listing.legalStatusEvents,
      ];
      this.courtOrders = [
        ...this.legalStatusEvents,
        ...listing.legalStatusEvents,
      ];

      return listing;
    });
  }
}