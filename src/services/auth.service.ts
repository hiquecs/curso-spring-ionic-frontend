import { Injectable } from "@angular/core";
import { CredenciaisDTO } from "../models/credenciais.dto";
import { HttpClient } from "@angular/common/http";
import { API_CONFIG } from "../config/api.config";
import { LocalUser } from "../models/local_user";
import { StorageService } from "./storage.service";
<<<<<<< HEAD
import {JwtHelper} from "angular2-jwt"; 
=======
>>>>>>> 5ae41749b470bbbe148b8f8680a947ac17026e8d


@Injectable()
export class AuthService {

<<<<<<< HEAD
    jwtHelper:JwtHelper = new JwtHelper();

=======
>>>>>>> 5ae41749b470bbbe148b8f8680a947ac17026e8d
    constructor(public http: HttpClient , public storage:StorageService) {
    }

    authenticate(creds : CredenciaisDTO) {
        return this.http.post(
            `${API_CONFIG.baseUrl}/login`, 
            creds,
            {
                observe: 'response',
                responseType: 'text'
            });
    }
    successfulLogin(authorizationValue : String){
        let tok = authorizationValue.substring(7);
        let user : LocalUser = {
<<<<<<< HEAD
            token : tok,
            email:this.jwtHelper.decodeToken(tok).sub
=======
            token : tok
>>>>>>> 5ae41749b470bbbe148b8f8680a947ac17026e8d
        };
        this.storage.setLocalUser(user);
    }
    logout(){
        this.storage.setLocalUser(null);
    }
}