import { Component, OnInit, ViewChild } from '@angular/core';
import { Student } from 'src/app/module/student.mode';
import { DataService } from 'src/app/shared/data.service';
import { finalize } from 'rxjs/operators';
import * as XLSX from 'xlsx';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload-spreadsheet',
  templateUrl: './upload-spreadsheet.page.html',
  styleUrls: ['./upload-spreadsheet.page.scss'],
})
export class UploadSpreadsheetPage implements OnInit {
  ContentsOfFile: any[] = [];
  selectedFile: any;
  uploadPercent: number = 0;
  downloadURL: string | null = null;
  pdfContent: string = '';
  students: Student[] = [];
  studentMarks: any;
  found: boolean = false;
  disableButton: boolean = true;
  linesArray: string[] = [];
  staffNo: any;
  userEmail: any;
  array: any;
  studentDetails: string[] = [];
  @ViewChild('fileInput') fileInput: any;
  isLoading = false;
  name: any = '';
  modules: any;
  selectedModuled:any;

  constructor(
    private data: DataService,
    private storage: AngularFireStorage,
    private loadingController: LoadingController,
    private navCtrl: NavController
  ) {
    //this.loadStudents();
    //this.linesArray = this.pdfContent.split('\n');
    // console.error(this.linesArray);
 
  }

  async ngOnInit() {
    await this.getCurrentUserEmail();
  
  

  }
  //------------------------------------------------
  // async showLoader() {
  //   const loader = await this.loadingController.create({
  //     message: 'Loading...', // You can customize the message
  //     spinner: 'crescent', // Use a different spinner style if desired
  //     translucent: true,
  //   });

  //   await loader.present();

  //   setTimeout(() => {
  //     this.hideLoader(loader);
  //   }, 3000); // Adjust the duration as needed
  // }

  // hideLoader(loader: HTMLIonLoadingElement) {
  //   loader.dismiss();
  // }

  toggleLoader() {
    this.isLoading = true;

    setTimeout(() => {
      this.isLoading = false;
    }, 4000); // Simulating loading time, adjust as needed
  }
  //----------------------------------------------------------------------------------

  showLoader() {
    this.isLoading = true;
    alert('hard');
    setTimeout(() => {
      this.hideLoader();
    }, 3000); // Adjust the duration as needed
  }

  hideLoader() {
    this.isLoading = false;
  }
  //----------------------------------------------------------------------------------
  // loadStudents() {
  //   this.data.getAllStudents().subscribe((students) => {
  //     this.students = students;
  //   });
  // }
  triggerFileInput() {
    // Programmatically trigger a click event on the hidden file input
    this.fileInput.nativeElement.click();
  }

  onFileChange(event: any) {
    // this.selectedFile = event.target.files[0];
    // this.name=this.selectedFile?.name;
    this.selectedFile = event.target as HTMLInputElement;
    // Extract the file name
if (!this.selectedFile) {
      this.found = false;
      this.disableButton = true;
    }
    if (this.selectedFile) {
      this.found = true;
      this.disableButton = false;
      this.readAndUploadFileContent();
    }
  }
  readAndUploadFileContent() {
    if (this.selectedFile.files && this.selectedFile.files.length > 0) {
      const file = this.selectedFile.files[0];
      this.name = file.name;
      const reader = new FileReader();

      reader.onload = (e) => {
        const data = e.target?.result as string;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        this.ContentsOfFile = XLSX.utils.sheet_to_json(sheet);
        console.log(this.ContentsOfFile);
     let studentDataToSave={};
        this.ContentsOfFile.forEach((student) => {
           studentDataToSave  = {
            module: this.selectedModuled, // Assuming selectedModuled is the selected module
            studentNumber: student['student_number'],
            test1: student['test1'],
            test2: student['test2'],
            test3: student['test3'],
            test4: student['test4'],
          };

        });

        this.data.addStudent(studentDataToSave).then(responce =>{
          alert("aeqwef");
        });
      };
     // this.data.addStudent(this.ContentsOfFile);
      reader.readAsBinaryString(file);
     
    }
  }

  uploadMarks() {
    if (this.selectedFile) {
      // Read the content of the selected file before uploading
      this.onFileChange(this.selectedFile);
    
    }
  }

  // uploadFile(file: File) {
  //   alert("b")
  //   const filePath = `Documents/${new Date().getTime()}_${file.name}`;
  //   const fileRef = this.storage.ref(filePath);
  //   const uploadTask = this.storage.upload(filePath, file);

  //   // Observe the upload progress
  //   uploadTask.percentageChanges().subscribe((percent: any) => {
  //     this.uploadPercent = percent || 0;
  //   });

  //   // Get notified when the upload is completed and get the download URL
  //   uploadTask
  //     .snapshotChanges()
  //     .pipe(
  //       finalize(() => {
  //         fileRef.getDownloadURL().subscribe((url) => {
  //           this.downloadURL = url;
  //         });
  //       })
  //     )
  //     .subscribe();
  // }

  // align() {
  //   this.studentDetails = []; // Initialize the studentDetails array
  //   this.studentMarks = []; // Initialize the studentMarks array
  //   let count = 0;

  //   for (let x = 0; x < this.students.length; x++) {
  //     for (let i = 0; i < this.array.length; i++) {
  //       if (this.students[x].studentNumber === this.array[i][0]) {
  //         this.studentDetails[count] =
  //           this.students[x].firstname +
  //           '-' +
  //           this.students[x].lastname +
  //           '-' +
  //           this.students[x].studentNumber;

  //         // alert(this.studentDetails[count]);

  //         this.studentMarks[count] = this.array[i];
  //         console.log(this.studentDetails[count]);

  //         count++;

  //         break;
  //       }
  //     }
  //   }
  // }

  
  async getCurrentUserEmail() {
    this.userEmail = await this.data.getCurrentUserEmail();
    if (this.userEmail) {
      this.data
        .getUserOneUser(this.userEmail)
        .valueChanges()
        .subscribe((Response: any )=> {
          this.staffNo = Response;
          this.data
          .getModuleByStaffNumber(this.staffNo.staffNumber)
          .subscribe((response:any) => {
            this.modules = response;
          });
        });
    }
  }

 



}
