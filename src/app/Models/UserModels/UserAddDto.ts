export class UserAddDto{
  emailAddress!:string;
  password!:string;
  fname!:string;
  lname!:string;
  userType!:string;
  phoneNumber!:string;
   public constructor(emailAdresse :string,password :string,fname:string,lname:string,userType:string,phoneNumber:string){
    this.emailAddress=emailAdresse
    this.password=password
    this.fname=fname
    this.lname=lname
    this.userType=userType
    this.phoneNumber=phoneNumber

  }
}
