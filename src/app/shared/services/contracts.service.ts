import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {ReportContractsTableItemModel} from '../models/report-contracts-table-item-model';

@Injectable({
  providedIn: 'root'
})
export class ContractsService {

  constructor(private http: HttpClient) { }

  getData(): Observable<Array<ReportContractsTableItemModel>> {
    return this.http.get<Array<ReportContractsTableItemModel>>('/assets/json/contratos-saldo-contratual.json');
  }
}
