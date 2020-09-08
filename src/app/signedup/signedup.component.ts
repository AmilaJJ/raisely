import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signedup',
  templateUrl: './signedup.component.html',
  styleUrls: ['./signedup.component.scss']
})
export class SignedupComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

}
