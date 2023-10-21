export class User{
  emailAddress!:string;
   fname!:string;
  lname!:string;
  userType!:string;
  phoneNumber!:string;
  userId!:String;
  public constructor(userId:string,emailAdresse  :string,fname:string,lname:string,userType:string,phoneNumber:string){
   this.userId=userId
    this.emailAddress=emailAdresse
     this.fname=fname
    this.lname=lname
    this.userType=userType
    this.phoneNumber=phoneNumber

  }
}
