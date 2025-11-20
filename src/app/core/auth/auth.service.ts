import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    constructor(private http:HttpClient) { }

    

    login(shopRegisterNo: string, password: string): boolean {
        if (shopRegisterNo === 'STI01' && password === 'Friday@1234') {
            sessionStorage.setItem("sample_token", "12345AbCdEf");
            return true;
        }
        return false;
    }

    logout() {
        sessionStorage.clear();
    }

    isLoggedIn(): boolean {
        const isAuth = sessionStorage.getItem("sample_token");
        if (isAuth !== "" && isAuth !== undefined && isAuth !== null) {
            return true;
        } else {
            return false;
        }
    }
}