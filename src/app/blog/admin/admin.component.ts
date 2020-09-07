import {
  Component,
  OnInit,
  ViewChild,
  ElementRef
} from '@angular/core';
import {
  Admin
} from './admin.service';
import {
  Auth
} from '../auth.service';
import {
  FetchAdminData
} from './admin.models';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';
import { mimeType } from '../user-page/mime-type.validator';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  userList: any[];
  articleList: any[];
  imagePreview: string;

  editOnOff = false;
  editName: string;
  editmode: string;
  editValue: string;
  editForm: FormGroup;
  editId: string;


  genreList = [{
      name: 'Economics'
    },
    {
      name: 'Computer Science'
    },
    {
      name: 'Biology'
    }
  ];


  addArticleForm: FormGroup;

  constructor(private admin: Admin, private auth: Auth) {}

  ngOnInit() {
    this.admin.fetcData(this.auth.getToken())
      .then((data: any) => {
        this.userList = data.userLIst;
        this.articleList = data.articleList;
      });

    this.addArticleForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      textArea: new FormControl(null, [Validators.required, Validators.minLength(20)]),
      genre: new FormControl(null),
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });

    this.editForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      userFullName: new FormControl(null, [Validators.required, Validators.minLength(2)])
    });
  }

  addArticle() {
    const name = this.addArticleForm.get('name').value;
    const textArea = this.addArticleForm.get('textArea').value;
    const genre = this.addArticleForm.get('genre').value;
    if (genre === null) {
      return;
    }

    const articleData = {
      articleName: name,
      text: textArea,
      articleGenre: genre
    };

    this.admin.addArticle(articleData, this.addArticleForm.value.image);
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.addArticleForm.patchValue({
      image: file
    });
    this.addArticleForm.get('image').updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = (reader.result as string);
      console.log('File', this.addArticleForm.value.image)
      console.log('Previw',  this.imagePreview);
    };
    reader.readAsDataURL(file);
  }

  onDeleteArticle(id: any){
    this.admin.deleteArticle(id)
    .then((accept) => {
      if (accept) {
        this.admin.fetcData(this.auth.getToken())
        .then((data: any) => {
          this.userList = data.userLIst;
          this.articleList = data.articleList;
        });
      }
    });
    this.editFormCloseOpen(false);
  }

  onDeleteUser(email: any){
    this.admin.deleteUser(email)
    .then((accept) => {
      if (accept) {
        this.admin.fetcData(this.auth.getToken())
        .then((data: any) => {
          this.userList = data.userLIst;
          this.articleList = data.articleList;
        });
      }
    });
    this.editFormCloseOpen(false);
  }


  editFormCloseOpen(option: boolean, fieldText?: string, whatChange?: string, editId?: string) {
    this.editOnOff = option;
    this.editName = fieldText;
    this.editmode = whatChange;
    this.editId = editId;

    // Set text in a form;
    switch (whatChange) {
      case 'editUser':
        // this.editForm.controls.userFullName.setValue(this.profileName.nativeElement.innerHTML);
        break;
      case 'editArticle':
        // this.editForm.controls.userFullName.setValue(this.profileSurname.nativeElement.innerHTML);
        break;
      case 'deleteArticle':
        // this.editForm.controls.email.setValue(this.profileEmail.nativeElement.innerHTML);
        break;
      case 'deleteUser':
        break;
    }
    if (!option) {
      this.editmode = '';
      this.editValue = '';
      this.editId = '';
    }
  }
}
