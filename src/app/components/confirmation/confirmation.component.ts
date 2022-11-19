import { Component, OnInit, Input } from '@angular/core';
import { CartSessionService } from 'src/app/services/cart-session.service';
import { ConfirmationDetailsService } from 'src/app/services/confirmation-details.service';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})

export class ConfirmationComponent implements OnInit {

  name: string = "";
  total: string = "";
 
  constructor(private confirmation: ConfirmationDetailsService) {
    
   }

  ngOnInit(): void {
    this.name = this.confirmation.getName();
    this.total = this.confirmation.getTotal();
  }

}
