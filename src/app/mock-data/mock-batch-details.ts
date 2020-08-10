import { BatchDetail } from '../interfaces/batchDetail';

export const BatchDetails: BatchDetail = {
  streetAddress: 'James Brown 12/5',
  city: 'New York',
  state: 'Washington',
  zip: '2202',
  apn: '42.412',
  refId: 'asdsa-56asd23121',
  currentOwner: 'Tigran Jamkochyan',
  prop: {
    landUse: 'asd',
    yearBuilt: 2012,
    subdivision: 'asd',
    standardSubdivison: 'asd',
    subdivision2: 'sad',
    overrideSubdivision: 'ad',
  },

  latestSale: {
    condorider: 'asd',
    pudrider: 'wqe',
  },

  hoa: {
    indicator: 'asd',
    flag: 'wqe',
    number: 3,
    comments: ['good'],

    hoas: [
      {
        name: 'asd',
        type: 'qwe',
        isMaster: true,
        hasMaster: false,
        voluntary: 'qwe',
        hasManagementCompany: true,
        contactName: 'qwe',
        contactType: 'asd',
        mailingAddress: 'example@example.com',
        city: 'New York',
        state: 'Washington',
        zipCode: '2202',
        contactPhone: '+374 98949704',
        contactPhoneType: 'mabilni',
        contactEmail: 'example@example.com',
        managementCompanyName: 'Globus',
        managementCompanyAddress: 'Vayq',
        managementCompanyCity: 'Yerevan',
        managementCompanyState: 'Washington',
        managementCompanyZip: '2202',
        managementCompanyPhone: '+374 98949704',
        managementCompanyPhoneType: 'mabilnik',
        managementCompanyEmail: 'example@example.com',
        contactType2: 'domashni',
        lastVerified: new Date(),
        verifiedMethod: 'GET',
      },
    ],
  },
};
