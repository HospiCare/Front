import { Component } from '@angular/core';
import { UserAccount } from '../user-account';

@Component({
  selector: 'app-account-preview',
  imports: [],
  template: `
 <!-- patient-info.component.html -->
  
<div class="patient-info-container">
  
  <div class="left-panel">
    <div class="profile">
      <img src="images.jpg" alt="Profile" class="profile-img" />
      <h2 class="name">Adem Nouaouer</h2>
      <p>20 Years, Male</p>
    </div>
    <hr class="grey-line" />
    <div class="contact-info">
      <div class="elm1">
        <label style="color: #667085;" class="label">Email:</label>
        <p> Ademnouaouergmail.com</p></div>
      <div class="elm2">
      <label style="color: #667085;" class="label">Phone:</label>
        <p>0699519834</p></div>
      <div class="elm3">
      <label style="color: #667085;" class="label">Date of Birth:</label>
        <p> 18 November 2004</p></div>
      <div class="elm4">
      <label style="color: #667085;" class="label">Diseases:</label>
        <p> Cardiology</p></div>  
    </div>
    <hr class="grey-line" />
  </div>

  <div class="right-panel">

    <h2>Patient's infos</h2>
    <form>
    <div class="form-group">
        <label for="password">password</label>
        <input type="password" id="password" name="password" />
      </div>

      <div class="form-group">
        <label for="email">Adress</label>
        <input type="text" id="address" name="address" value="San Jose, California, USA" />
      </div>
      <div class="form-group">
        <label for="name">Your name</label>
        <input type="text" id="name" name="name" />
      </div>

      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" name="email" value="Ademnouaouer@gmail.com" />
      </div>

      <div class="form-group">
        <label for="birthDate">Date de naissance</label>
        <input type="date" id="birthDate" name="birthDate" value="2003-01-25" />
      </div>

      <div class="form-group">
        <label for="phone">Numéro de téléphone</label>
        <input type="tel" id="phone" name="phone" value="0699519834" />
      </div>

      <button type="submit" class="save-button">Save now</button>
    </form>
  </div>
</div>

    
  `,
  styleUrl: './account-preview.component.css'
})
export class AccountPreviewComponent {
  user : UserAccount  = {
    firstname : 'Adem',
    lastname : 'Nouaouer',
    gender: true,
    date_of_birthe : '10/10/2004',
    email : 'adem@esi.dz',
    password : 'ZRtrs35(&v',
    phone: '0739423394',
  };


}
