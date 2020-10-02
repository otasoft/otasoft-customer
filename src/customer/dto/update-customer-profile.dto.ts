export class UpdateCustomerProfileDto {
    id: number;
    updateCustomerProfileData: {
        first_name: string;
        last_name: string;
    }
}