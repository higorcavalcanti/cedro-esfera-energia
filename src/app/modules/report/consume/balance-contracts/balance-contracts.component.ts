import { Component, OnInit } from '@angular/core';
import {ConsumoService} from '../../../../shared/services/consumo.service';
import {ReportConsumeBalanceContratcsModel} from '../../../../shared/models/report-consume-balance-contratcs-model';

@Component({
  selector: 'app-report-consume-balance-contracts',
  templateUrl: './balance-contracts.component.html',
  styleUrls: ['./balance-contracts.component.scss']
})
export class BalanceContractsComponent implements OnInit {

  data: ReportConsumeBalanceContratcsModel;

  constructor(private consumoService: ConsumoService) { }

  ngOnInit() {
    this.data = null;
    this.consumoService.getSaldoContratual().subscribe(data => {
      this.data = data;
    });
  }

}
