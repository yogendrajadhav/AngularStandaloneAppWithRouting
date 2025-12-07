import { Component, effect, signal } from '@angular/core';
import { email, Field, form, required, schema } from '@angular/forms/signals';
import { max } from 'rxjs';
@Component({
  selector: 'app-subscribe-form',
  standalone: true,
  imports: [Field],
  templateUrl: './subscribe-form.component.html',
  styleUrl: './subscribe-form.component.css'
})
export class SubscribeFormComponent {
Submit() {
throw new Error('Method not implemented.');
}

  subscribeModel=signal<SubscriptionData>(initialData);
  subscribeForm=form(this.subscribeModel);
  eff=effect(()=>{
    console.log(`Email: ${this.subscribeModel().email}`);
  });

}

export interface SubscriptionData {
  email: string;
  firstName: string;
  lastName: string;
  yearsAsFan: number;
}

export const initialData: SubscriptionData = {
  email: '',
  firstName: '',
  lastName: '',
  yearsAsFan: NaN
};

export const SubscriptionSchema=schema<SubscriptionData>((rootPath)=>{
   required(rootPath.email,{message:'Email Address is required'});
   email(rootPath.email,{message:'Enter a valid email address'});
});
 


