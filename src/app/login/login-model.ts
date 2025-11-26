export interface ProviderData {
    providerId: string;
    uid: string;
    displayName: string | null;
    email: string;
    phoneNumber: string | null;
    photoURL: string | null;
}

export interface StsTokenManager {
    refreshToken: string;
    accessToken: string;
    expirationTime: number;
}

export interface UserLoginCredential {
    uid: string;
    email: string;
    emailVerified: boolean;
    isAnonymous: boolean;
    providerData: ProviderData[];
    stsTokenManager: StsTokenManager;
    createdAt: string;
    lastLoginAt: string;
    apiKey: string;
    appName: string;
}

export interface TokenResponse {
    kind: string;
    localId: string;
    email: string;
    displayName: string;
    idToken: string;
    registered: boolean;
    refreshToken: string;
    expiresIn: string;
}

export interface LoginModel {
    user: UserLoginCredential;
    providerId: string | null;
    _tokenResponse: TokenResponse;
    operationType: string;
}