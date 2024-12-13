export interface PersonalData {
    nifOrPassport: string; 
    firstName: string;     
    lastName1: string;     
    lastName2: string;    
    gender: string;       
    birthDate: string;      
}

export interface Address {
    street: string;       
    number: string;      
    door: string;         
    postalCode: string;  
    city: string;         
}

export interface Study {
    institutionName: string; 
    degree: string;          
    date: string;           
}

export interface WorkExperience {
    companyName: string;    
    jobTitle: string;       
    date: string;            
}

export interface ApplicantsEmployees {
    personalData: PersonalData;      
    address: Address;              
    workExperience?: WorkExperience[]; 
    studies?: Study[];          
}