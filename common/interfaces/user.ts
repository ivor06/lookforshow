export {
    UserInterface,
    Organization,
    Camera,
    Visit,
    ProfileLocal
}

interface UserInterface {
    id?: string;
    isOnline?: boolean;
    roles?: string;
    local?: ProfileLocal;
    orgList?: Organization[];
}

interface ProfileLocal {
    email?: string;
    password?: string;
    firstName?: string;
    lastName?: string;
    taxNumber?: string;
    token?: string;
    avatar?: string;
    language?: string;
}

interface Organization {
    id: string;
    kind: ORG_KIND;
    name: string;
    country: string;
    city: string;
    address: string;
    zip: number;
    phoneList?: string[];
    isNeedSendPaperInvoice: boolean;
    seatAmount?: number;
    operatingTime?: Date[];
    cameraList?: Camera[];
    ageList?: AGE_RESTRICTION[];
    isUserResponsible: boolean;
    about?: string;
}

interface Camera {
    isInside: boolean;
    hasSound: boolean;
    lastScreenShot: string;
    kind?: string;
    resolution?: number[];
}

interface Visit {
    timezone?: number;
    ip?: string;
    userAgent?: string;
    geo?: Geo;
    connectTime?: Date;
    disconnectTime?: Date;
}

interface Geo {
    latitude?: number;
    longitude?: number;
    geo_id?: number;
    country_iso_code?: string;
    country?: string;
    city?: string;
    time_zone?: string;
}

const enum ORG_KIND {
    BAR, CAFE, CLUB, RESTAURANT, OTHER
}

const enum AGE_RESTRICTION {
    "12+" = 12,
    "14+" = 14,
    "16+" = 16,
    "18+" = 18,
    "21+" = 21
}
