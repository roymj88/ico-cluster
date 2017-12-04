import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {

  constructor() { }

  public showPreloader() {
    document.getElementById('circularG').style.display = 'block';
    // document.getElementById("myDiv").setAttribute('class','opacity-provider');
  }

  public hidePreloader() {
    document.getElementById('circularG').style.display = 'none';
    // document.getElementById("myDiv").className=''
  }


}
