import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { environment as E } from '../../../../environments/environment';
import { PostMail } from '../../mail.model';
import { MailViewService } from '../../services/mail-view.service';

@Component({
  selector: 'app-mail-compose',
  templateUrl: './mail-compose.component.html',
  styleUrls: ['./mail-compose.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MailComposeComponent implements OnInit {
  form!: FormGroup;
  readonly tinyApiKey: string = E.TINY_APIKEY;

  constructor(
    private router: Router,
    private mailViewService: MailViewService
  ) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      from: new FormControl('sender'),
      to: new FormControl(null, [Validators.required]),
      cc: new FormControl(null),
      bcc: new FormControl(null),
      title: new FormControl(null, [Validators.required]),
      content: new FormControl(null, [Validators.required]),
    });
  }

  getFormControl(controlName: string): AbstractControl | null {
    return this.form.get(controlName);
  }

  setValue(value: string, formControl: AbstractControl): void {
    if (formControl) {
      formControl.setValue(value);
      formControl.markAsTouched();
    }
  }

  handleChange(value: any, formControlName: string): void {
    const formControl = this.getFormControl(formControlName);
    if (formControl) this.setValue(value, formControl);
  }

  getFormData(): PostMail {
    const body = { ...this.form.value };
    if (body.to !== null) {
      body.to = body.to.split(',').map((address: string) => address.trim());
    } else {
      body.to = [];
    };
    if (body.cc !== null) {
      body.cc = body.cc.split(',').map((address: string) => address.trim());
    }else {
      body.cc = [];
    };
    if (body.bcc !== null) {
      body.bcc = body.bcc.split(',').map((address: string) => address.trim());
    }else {
      body.bcc = [];
    };
    return body;
  }

  handleSubmit(isDraft: boolean): void {
    const body = this.getFormData();
    this.mailViewService.postMail(body, isDraft)
    .subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['..']);
      },
      (error) => {
        console.log(error);
        alert('Something went wrong. Please try again later.');
      }
    )
  }

  handleCancel(): void {
    const confirmation: boolean = confirm('Do you want to leave this page?');
    if(confirmation) {
      this.router.navigate(['..']);
    }
  }
}
