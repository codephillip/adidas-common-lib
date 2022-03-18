import {Subjects} from './subjects';

export interface SubscriptionCancelledEvent {
  subject: Subjects.SubscriptionCreatedCancelled;
  data: {
    id: string;
    email: string;
    firstName: string;
    gender: string;
    dob: Date;
    consented: boolean;
    createdAt: Date;
  }
}
