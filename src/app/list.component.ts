import { Component } from '@angular/core';
import { ListService } from './list.service';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ListService]
})

export class ListComponent {
  repos
  constructor(listService: ListService) {
    listService.getRepos()
      .then(repos => {
        this.repos =repos
      })
  }
}
