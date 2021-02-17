import { CreateCustomerProfileHandler } from './create-customer-profile.handler';
import { DeleteMessageHandler } from './delete-message.handler';
import { RemoveCustomerProfileHandler } from './remove-customer-profile.handler';
import { UpdateCustomerProfileHandler } from './update-customer-profile.handler';

export const CommandHandlers = [
  CreateCustomerProfileHandler,
  RemoveCustomerProfileHandler,
  UpdateCustomerProfileHandler,
  DeleteMessageHandler,
];
