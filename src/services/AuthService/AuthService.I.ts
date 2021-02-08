import {UserSubscriptionType} from "../../models/User";

export interface RegisterRequestData {
    email: string;
    password: string;
    subscription_type: UserSubscriptionType
}
