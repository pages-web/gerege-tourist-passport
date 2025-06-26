export type CustomerType = "" | "user" | "company";
interface CustomField {
  field: string;
  value: any;
}

export interface Customer {
  customFieldsData: CustomField[];
  age: string;
  gender: string;
  country: string;
  _id: string;
  firstName?: string;
  lastName?: string;
  erxesCustomerId?: string;
  phone?: string;
  email?: string;
  password?: string;
  isEmailVerified?: boolean;
  isPhoneVerified?: boolean;
  avatar?: string;
}

export interface IConfig {
  name: string;
  erxesAppToken: string;
  paymentIds: string[];
  isCheckRemainder: boolean;
  deliveryConfig: {
    productId?: string;
  };
  uiOptions?: {
    logo: string;
    colors: {
      primary?: string;
      secondary?: string;
      third?: string;
    };
    favIcon: string;
  };
}
