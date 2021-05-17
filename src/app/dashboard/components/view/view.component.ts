import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  
  id = ''
  constructor(private activatedRoute: ActivatedRoute) {
    this.id = this.activatedRoute.snapshot.params.id
  }

  ngOnInit(): void {
  }



}
