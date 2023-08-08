import { Component, OnInit,ViewChild } from '@angular/core';
import { Student } from 'src/app/module/student.mode';
import { DataService } from 'src/app/shared/data.service';
import { finalize } from 'rxjs/operators';

import { AngularFireStorage } from '@angular/fire/compat/storage';
import { LoadingController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-upload-spreadsheet',
  templateUrl: './upload-spreadsheet.page.html',
  styleUrls: ['./upload-spreadsheet.page.scss'],
})
export class UploadSpreadsheetPage implements OnInit {
  selectedFile: File | null = null;
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

  constructor(private data: DataService, private storage: AngularFireStorage,private loadingController: LoadingController,
    private navCtrl: NavController) {
    this.loadStudents();
    this.linesArray = this.pdfContent.split('\n');
    console.error(this.linesArray);
  }

  ngOnInit(): void {
    // Implement any initialization logic if needed
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
    this.data.getAllStudents().subscribe((students) => {
      this.students = students;
    });
  }
  triggerFileInput() {
    // Programmatically trigger a click event on the hidden file input
    this.fileInput.nativeElement.click();
  }
  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    this.name=this.selectedFile?.name;
    
    if(!this.selectedFile)
    {
      this.found = false;
      this.disableButton=true;
    }
    if(this.selectedFile){
      this.found=true;
      this.disableButton=false;
    }
    
  }

  readAndUploadFileContent(file: File) {
    const reader = new FileReader();

    reader.onload = (event) => {
      this.pdfContent = event.target?.result as string;


      const linesArray = this.pdfContent.split('\n').filter(line => line.trim() !== '');
      for (const line of linesArray) {
        console.log(line);
        console.error('-------------------------------------------------')
      }

      const arrayOfArrays = linesArray.map(line => line.split(','));
      this.array=arrayOfArrays;
      console.log(this.array[0][3]);


      //console.log('File Content:', this.pdfContent);
      // Proceed to upload the file after reading
      this.align();
      this.uploadFile(file);
    };

    reader.readAsText(file);
  }

  uploadMarks() {
    if (this.selectedFile) {
      // Read the content of the selected file before uploading
      this.readAndUploadFileContent(this.selectedFile);
    }
  }

  uploadFile(file: File) {
    const filePath = `Documents/${new Date().getTime()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const uploadTask = this.storage.upload(filePath, file);

    // Observe the upload progress
    uploadTask.percentageChanges().subscribe((percent) => {
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


