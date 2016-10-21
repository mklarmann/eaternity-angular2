import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import 'rxjs/add/operator/toPromise';


@Injectable()
export class ListService {
  private reposUrl = 'https://api.github.com/repositories'

  private handleError(error: any): Promise<any> {
  // console.error('An error occurred', error); // for demo purposes only
  return Promise.reject(error.message || error);
}

  constructor(private http: Http) { }

  getRepos () :Promise<any> {
    return this.http.get(this.reposUrl)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError)
  }
}
