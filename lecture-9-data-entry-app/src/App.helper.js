import dayjs from "dayjs";


export function getFormErrorText(params) {
    const {medicareValue, visitTypeValue, visitDateValue, referralIdValue} = params; //Destructuring the params object

    if (!medicareValue){   //This is the way to VALIDATE the input field (Bouncer)
        return "Medicare value is required. Claim not saved.";
      }
      if(visitTypeValue === "consultation" && !referralIdValue) {
        return "Referral ID is required for Consultation. Claim not saved.";
    
      }
      if (visitDateValue.isBefore(dayjs()) ) {
        return "Visit Date cannot be in the past. Claim not saved.";
       
      }
      if(!visitTypeValue) {
        return "Visit Type is required. Claim not saved.";
      }



    return ""
}