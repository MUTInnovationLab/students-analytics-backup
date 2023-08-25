import { Component, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { MenuController, NavController, LoadingController } from '@ionic/angular';
import { finalize } from 'rxjs';
import { Student } from 'src/app/module/student.mode';
import { DataService } from 'src/app/shared/data.service';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.page.html',
  styleUrls: ['./csv.page.scss'],
})
export class CsvPage implements OnInit {


 
  data: any[]=[];
  selectedFile: any;
  uploadPercent: number = 0;
  downloadURL: string | null = null;
  pdfContent: string = '';
  students: Student[] = [];
  studentMarks: any;
  found:boolean=false;
  disableButton: boolean = true;
    linesArray: string[] = [];

    array: any;

    studentDetails:string[]=[];

    @ViewChild('fileInput') fileInput: any;
    isLoading = false;

    name: any='';

  constructor(private firestore:AngularFirestore,private datax: DataService, private storage: AngularFireStorage,private loadingController: LoadingController,
    private navCtrl: NavController) {
    this.loadStudents();
    this.linesArray = this.pdfContent.split('\n');
    console.error(this.linesArray);
  }

  ngOnInit(): void {
    // Implement any initialization logic if needed
  }
 

  toggleLoader() {
    this.isLoading = true;
    
    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // Simulating loading time, adjust as needed
  }
//----------------------------------------------------------------------------------
  

  showLoader() {
    this.isLoading = true;
    alert("hard");
    setTimeout(() => {
      this.hideLoader();
    }, 3000); // Adjust the duration as needed
  }

  hideLoader() {
    this.isLoading = false;
  }
//----------------------------------------------------------------------------------
  loadStudents() {
    this.datax.getAllStudents().subscribe((students) => {
      this.students = students;
    });
  }
  triggerFileInput() {
    // Programmatically trigger a click event on the hidden file input
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any) {
    // this.selectedFile = event.target.files[0];
    // this.name=this.selectedFile?.name;

    this.selectedFile = event.target as HTMLInputElement;
    



   // Extract the file name


    if(!this.selectedFile)
    {
      this.found = false;
      this.disableButton=true;
    }
    if(this.selectedFile){
      this.found=true;
      this.disableButton=false;
      this.readAndUploadFileContent();
    }

    
    
  }
  async readAndUploadFileContent() {
   
   
    if (this.selectedFile.files && this.selectedFile.files.length > 0) {
      const file = this.selectedFile.files[0];
      this.name = file.name;
      const reader = new FileReader();

      reader.onload = async (e) => {
        const data = e.target?.result as string;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        this.data = XLSX.utils.sheet_to_json(sheet);
        await this.uploadDataToFirestore( this.data);
      };

  reader.readAsBinaryString(file);
     
    }
  }
  


  async uploadDataToFirestore(data: any[]) {
    try {
        const firebaseBatch = this.firestore.firestore.batch();

        for (const entry of data) {
            const studentNumber = entry['student_number'].toString();;

            if (studentNumber) {
                const docRef = this.firestore.collection('students').doc(studentNumber).ref;

                firebaseBatch.set(docRef, entry);
            } else {
                console.error('Missing student number for an entry:', entry);
            }
        }

        await firebaseBatch.commit();
        console.log('Data uploaded to Firestore successfully.');
    } catch (error) {
        console.error('Error uploading data to Firestore:', error);
    }
}






  uploadMarks() {
    if (this.selectedFile) {
      // Read the content of the selected file before uploading
      this.  onFileChange(this.selectedFile);
    }
  }

  uploadFile(file: File) {
    const filePath = `Documents/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    // Observe the upload progress
    uploadTask.percentageChanges().subscribe((percent: any) => {
      this.uploadPercent = percent || 0;
    });

    // Get notified when the upload is completed and get the download URL
    uploadTask.snapshotChanges().pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe((url) => {
          this.downloadURL = url;
        });
      })
    ).subscribe();
  }
  
  align() {
    this.studentDetails = []; // Initialize the studentDetails array
    this.studentMarks = [];  // Initialize the studentMarks array
    let count = 0;
  
    for (let x = 0; x < this.students.length; x++) {
      
      for (let i = 0; i < this.array.length; i++) {
        
        if (this.students[x].studentNumber === this.array[i][0]) {
          
          this.studentDetails[count] = this.students[x].firstname + '-' + this.students[x].lastname + '-' + this.students[x].studentNumber;
          
          // alert(this.studentDetails[count]);
          
          this.studentMarks[count] = this.array[i]; 
          console.log(this.studentDetails[count])
          
          count++;
         
          break;
        }
      }
    }
  }
}

