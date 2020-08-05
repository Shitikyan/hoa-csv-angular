import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { HttpClient } from '@angular/common/http';

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
  clients: SelectItem[];
  selectedClient: Client;

  constructor(private httpClient: HttpClient) {
    this.clients = [
      { label: 'Select City', value: null },
      { label: 'first', value: { id: 1, name: 'first' } },
      { label: 'second', value: { id: 2, name: 'second' } },
    ];
  }

  ngOnInit(): void {}
}
