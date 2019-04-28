export class ReportConsumeTableItemModel {
  contraParte?: string;

  contratos?: number;

  flexibilidade?: {
    contratada?: number,
    utilizada?: number;
  };

  previsto?: {
    mwh?: number,
    valor?: number,
    financeiro?: number
  };
}
