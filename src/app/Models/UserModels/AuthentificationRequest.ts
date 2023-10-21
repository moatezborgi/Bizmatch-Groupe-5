export class AuthentificationRequest {
  emailAddress!:string;
  password!:string;
  public constructor(email :string,password :string){
    this.emailAddress=email
    this.password=password
  }


}
