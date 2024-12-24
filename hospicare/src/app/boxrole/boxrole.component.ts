import { Component,Input  } from '@angular/core';

@Component({
  selector: 'app-boxrole',
  imports: [],
  templateUrl: './boxrole.component.html',
  styleUrl: './boxrole.component.scss'
})
export class BoxroleComponent {
  @Input() title!: string;
  @Input() description!: string;
  // image 
  @Input() imageUrl!: string;



}
