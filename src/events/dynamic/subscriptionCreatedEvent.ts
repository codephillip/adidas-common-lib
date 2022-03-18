import {Subjects} from './subjects';

export interface SubscriptionCreatedEvent {
  subject: Subjects.SubscriptionCreatedCreated;
  data: {
    id: string;
    email: string;
    firstName: string;
    gender: string;
    dob: Date;
    consented: boolean;
    createdAt: Date;
  };
}
