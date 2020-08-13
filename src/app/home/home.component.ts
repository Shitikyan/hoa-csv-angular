import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

interface Client {
  id: number;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  fileToUpload: File = null;
  clients: SelectItem[];
  selectedClient: Client;
  uploadedFiles: any[] = [];
  path: string;

  constructor() {
    this.clients = [
      { label: 'CSV', value: { id: 1, name: 'CSV' } },
    ];
  }

  onUpload(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  ngOnInit(): void {
    this.path = environment.api_url;
  }
}
