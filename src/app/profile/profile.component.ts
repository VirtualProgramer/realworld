import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/internal/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile$ = this.route.paramMap.pipe(
    map(params => params.get('username')),
    switchMap(username => this.api.getProfile(username))
  ).pipe(
    map((value: any) => value.profile)
  );

  constructor(
    private route: ActivatedRoute,
    private api: ApiService
  ) {
  }

  ngOnInit(): void {
  }

}
