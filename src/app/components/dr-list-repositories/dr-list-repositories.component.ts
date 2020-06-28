import { Component, OnInit } from '@angular/core';
import {DockerRegistryService} from '../../docker-registry.service'

@Component({
  selector: 'app-dr-list-repositories',
  templateUrl: './dr-list-repositories.component.html',
  styleUrls: ['./dr-list-repositories.component.sass']
})
export class DrListRepositoriesComponent implements OnInit {
  repositories:string[];

  constructor(private drService:DockerRegistryService) { }

  ngOnInit(): void {
    console.log('DrListRepositoriesComponent::ngOnInit()');
    this.updateRepositories();
  }

  isApiOnline():boolean {
    console.log('DrListRepositoriesComponent::isApiOnline()');
    return this.drService.api_online;
  }

  updateRepositories():void {
    console.log('DrListRepositoriesComponent::getRepositories()');
    this.drService.getRepositories().subscribe(data => {
      console.log('DrListRepositoriesComponent::getRepositories()::data', data);
      this.repositories = data.repositories;
    });
  }
}
