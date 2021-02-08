export enum UserSubscriptionType {
    BASIC = 'basic',
    PREMIUM = 'premium'
}

export class User {
    public id: string | null;
    public email: string;
    public subscription_type: UserSubscriptionType;

    constructor(data: any) {
        this.id = data.id;
        this.email = data.email;
        this.subscription_type = data.subscription_type;
    }
}
