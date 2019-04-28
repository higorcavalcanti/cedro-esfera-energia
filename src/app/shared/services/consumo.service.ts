import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ReportConsumeBalanceContratcsModel } from '../models/report-consume-balance-contratcs-model';
import { ReportConsumeTableItemModel } from '../models/report-consume-table-item-model';

@Injectable({
  providedIn: 'root'
})
export class ConsumoService {

  constructor(private http: HttpClient) { }

  getSaldoContratual(): Observable<ReportConsumeBalanceContratcsModel> {
    return this.http.get<ReportConsumeBalanceContratcsModel>('/assets/json/consumo-saldo-contratual.json');
  }

  getContratosCompra(): Observable<Array<ReportConsumeTableItemModel>> {
    return this.http.get<Array<ReportConsumeTableItemModel>>('/assets/json/consumo-contratos-compra.json');
  }

  getContratosCessao(): Observable<Array<ReportConsumeTableItemModel>> {
    return this.http.get<Array<ReportConsumeTableItemModel>>('/assets/json/consumo-contratos-cessao.json');
  }
}
