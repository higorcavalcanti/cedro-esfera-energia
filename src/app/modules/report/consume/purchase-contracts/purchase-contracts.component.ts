import { Component, OnInit } from '@angular/core';
import { ReportConsumeTableItemModel } from '../../../../shared/models/report-consume-table-item-model';
import { ConsumoService } from '../../../../shared/services/consumo.service';

@Component({
  selector: 'app-report-consume-purchase-contracts',
  templateUrl: './purchase-contracts.component.html',
  styleUrls: ['./purchase-contracts.component.scss']
})
export class PurchaseContractsComponent implements OnInit {

  tableData: Array<ReportConsumeTableItemModel>;

  constructor(private consumoService: ConsumoService) { }

  ngOnInit() {
    this.tableData = null;
    this.consumoService.getContratosCompra().subscribe(data => {
      this.tableData = data;
    });
  }

}
