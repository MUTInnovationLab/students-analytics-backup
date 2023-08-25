export interface Member{
    firstname: string;
    lastname: string;
    password: string;
    email:string;
    role:string;
    uid: string
}
export interface  register{
    name: '',
    surname: '',
    password: '',
    email: '',
    role: '',
    uid: '',
    department: '', // New field
    staffNumber: '' // New field
  };