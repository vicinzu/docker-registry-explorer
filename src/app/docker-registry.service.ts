import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from './app-settings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DockerRegistryService {
  private static API_URL: string;

  api_online: boolean;

  private static _initialize = (() => {
    console.log('DockerRegistryService');

    // Generate API URL    
    DockerRegistryService.API_URL = AppSettings.API_ENDPOINT_PROTOCOL + '://' + AppSettings.API_ENDPOINT_HOSTNAME + ':' + AppSettings.API_ENDPOINT_PORT;
    console.log('DockerRegistryService::API_URL', DockerRegistryService.API_URL);
  })();

  constructor(private http: HttpClient) {
    console.log('DockerRegistryService()');

    //Test API URL
    this.api_online = false;
    this.testApiVersion();
  }

  private getApiVersion() {
    console.log('DockerRegistryService::getApiVersion()');
    return this.http.get(DockerRegistryService.API_URL + '/v2/', { observe: 'response' });
  }

  private testApiVersion() {
    console.log('DockerRegistryService::testApiVersion()');
    this.getApiVersion().subscribe((response) => {
      console.log('DockerRegistryService::testApiVersion()::response', response);
      if (response.status === 200) {
        console.log('DockerRegistryService::testApiVersion()::response::OK');
        this.api_online = true;
      } else {
        console.log('DockerRegistryService::testApiVersion()::response::FAILED');
      }
    });
  }

  getRepositories(): Observable<any> {
    console.log('DockerRegistryService::getRepositories()');
    return this.http.get<any>(DockerRegistryService.API_URL + '/v2/_catalog');
  }
}
