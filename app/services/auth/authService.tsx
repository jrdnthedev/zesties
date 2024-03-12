import Cookies from "js-cookie";

const TOKEN_COOKIE_KEY = `${process.env.REACT_APP_JWT_SECRET}`;

export const setAuthToken = (token: string): void => {
  Cookies.set(TOKEN_COOKIE_KEY, token, { expires: 7 }); // Set the token in a cookie
};

export const getAuthToken = (): string | null => {
  return Cookies.get(TOKEN_COOKIE_KEY) || null; // Retrieve the token from the cookie
};

export const removeAuthToken = (): void => {
  Cookies.remove(TOKEN_COOKIE_KEY); // Remove the token from the cookie
};
