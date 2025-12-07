import { Component, effect, signal } from '@angular/core';
import { email, Field, form, max, min, minLength, required, schema } from '@angular/forms/signals';
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
  subscribeForm=form(this.subscribeModel,subscriptionSchema);
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

export const subscriptionSchema=schema<SubscriptionData>((rootPath)=>{
   required(rootPath.email,{message:'Email Address is required'});
   email(rootPath.email,{message:'Enter a valid email address'});
   minLength(rootPath.email,6,{message:'Email must be at least 6 characters long'});
   min(rootPath.yearsAsFan,0,{message:'Years cannot be negative'});
   max(rootPath.yearsAsFan,100,{message:'please enter a valid number of years'});
});