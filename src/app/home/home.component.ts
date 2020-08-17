import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';

interface Client {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  fileToUpload: File = null;
  clients: SelectItem[];
  selectedClient: Client;
  uploadedFiles: any[] = [];
  path: string;

  constructor(private router: Router) {
    this.clients = [{ label: 'CSV', value: { id: 1, name: 'CSV' } }];
  }

  onUpload({ files }) {
    for (let file of files) {
      this.uploadedFiles.push(file);
    }
    this.router.navigate(['batches']);
  }

  ngOnInit(): void {
    this.path = environment.api_url;
  }
}
