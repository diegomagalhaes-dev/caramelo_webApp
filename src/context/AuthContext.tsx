import React, { createContext, useCallback, useState, useContext } from "react";

import { api } from "../services/api";

interface SignIncredentions {
  email: string;
  password: string;
}

interface AuthState {
  token: string;
  user: object;
}

interface AuthContextData {
  user: object;
  signIn(credentions: SignIncredentions): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: React.PropsWithChildren<{}>) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem("@CarameloRestrict: token");
    const user = localStorage.getItem("@CarameloRestrict: user");

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post("/sessions", {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem("@CarameloRestrict: token", token);
    localStorage.setItem("@CarameloRestrict: user", JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem("@CarameloRestrict: token");
    localStorage.removeItem("@CarameloRestrict: user");

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
