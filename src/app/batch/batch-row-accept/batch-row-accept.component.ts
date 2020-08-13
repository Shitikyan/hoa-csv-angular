import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BatchDetailsService } from 'src/app/services/batch-details.service';
import { BatchDetail } from 'src/app/interfaces/batchDetail';
import { Location } from '@angular/common';
import * as moment from 'moment';

@Component({
  selector: 'app-batch-row-accept',
  templateUrl: './batch-row-accept.component.html',
  styleUrls: ['./batch-row-accept.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BatchRowAcceptComponent implements OnInit {
  cols: any[];
  batchRow: BatchDetail = {} as BatchDetail;
  interBatchRow: BatchDetail = {} as BatchDetail;
  batchRows: BatchDetail[] = [];

  constructor(
    private location: Location,
    private batchDetailsService: BatchDetailsService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getBatchrowDetail();
    this.getBatchrows();
    this.cols = [
      { field: 'Ref_ID', header: 'Ref ID' },
      { field: 'PropertyFullStreetAddress', header: 'PropertyFullStreetAddress' },
      { field: 'PropertyCity', header: 'PropertyCity' },
      { field: 'PropertyState', header: 'PropertyState' },
      { field: 'PropertyZip', header: 'PropertyZip' },
      { field: 'APN', header: 'APN' },
      { field: 'Client', header: 'Client' },
      { field: 'Loan_Type', header: 'Loan Type' },
      { field: 'Referral_Date', header: 'Referral Date' },
      { field: 'U20_Actual_Date', header: 'U20 Actual Date' },
      { field: 'Voluntary', header: 'Voluntary' },
      { field: 'Non_Voluntary', header: 'Non Voluntary' },
      { field: 'FIPS', header: 'FIPS' },
      { field: 'State', header: 'State' },
      { field: 'County', header: 'County' },
      { field: 'Parcel', header: 'Parcel' },
      { field: 'CurrentOwner', header: 'CurrentOwner' },
      { field: 'ParsedHouseNumber', header: 'ParsedHouseNumber' },
      { field: 'ParsedStreetPreDir', header: 'ParsedStreetPreDir' },
      { field: 'ParsedStreetName', header: 'ParsedStreetName' },
      { field: 'ParsedStreetTypeSuffix', header: 'ParsedStreetTypeSuffix' },
      { field: 'ParsedStreetPostDir', header: 'ParsedStreetPostDir' },
      { field: 'ParsedUnitType', header: 'ParsedUnitType' },
      { field: 'ParsedUnitNumber', header: 'ParsedUnitNumber' },
      { field: 'STNDAddress', header: 'STNDAddress' },
      { field: 'STNDUnitType', header: 'STNDUnitType' },
      { field: 'STNDUnitNum', header: 'STNDUnitNum' },
      { field: 'STNDCity', header: 'STNDCity' },
      { field: 'STNDState', header: 'STNDState' },
      { field: 'STNDZip', header: 'STNDZip' },
      { field: 'STNDZip4', header: 'STNDZip4' },
      { field: 'LandUseDesc', header: 'LandUseDesc' },
      { field: 'YearBuilt', header: 'YearBuilt' },
      { field: 'Block', header: 'Block' },
      { field: 'Lot', header: 'Lot' },
      { field: 'Subdivision', header: 'Subdivision' },
      { field: 'BriefLegal', header: 'BriefLegal' },
      { field: 'Zone', header: 'Zone' },
      { field: 'LatestSale_RecordingDate', header: 'LatestSale RecordingDate' },
      { field: 'LatestSale_Book', header: 'LatestSale Book' },
      { field: 'LatestSale_Page', header: 'LatestSale Page' },
      { field: 'LatestSale_DocNumber', header: 'LatestSale DocNumber' },
      { field: 'LatestSale_DocType', header: 'LatestSale DocType' },
      { field: 'LatestSale_Subdivision', header: 'LatestSale Subdivision' },
      { field: 'LatestSale_BriefLegal', header: 'LatestSale BriefLegal' },
      { field: 'LatestSale_CondoRider', header: 'LatestSale CondoRider' },
      { field: 'LatestSale_PUDRider', header: 'LatestSale PUDRider' },
      { field: 'LatestLoan_RecordingDate', header: 'LatestLoan RecordingDate' },
      { field: 'LatestLoan_Book', header: 'LatestLoan LatestLoan Book' },
      { field: 'LatestLoan_Page', header: 'LatestLoan Page' },
      { field: 'LatestLoan_DocNumber', header: 'LatestLoan DocNumber' },
      { field: 'LatestLoan_Subdivision', header: 'LatestLoan Subdivision' },
      { field: 'LatestLoan_CondoRider', header: 'LatestLoan CondoRider' },
      { field: 'LatestLoan_PUDRider', header: 'LatestLoan PUDRider' },
      { field: 'LatestLoan_Source', header: 'LatestLoan Source' },
      { field: 'Match', header: 'Match' },
      { field: 'Zip9HOAIndicator', header: 'Zip9HOAIndicator' },
      { field: 'HOA_Indicator', header: 'HOA Indicator' },
      { field: 'HOA_Flag', header: 'HOA Flag' },
      { field: 'Comments', header: 'Comments' },
      { field: 'PropertyAddress', header: 'PropertyAddress' },
      { field: 'City', header: 'City' },
      { field: 'ZipCode', header: 'ZipCode' },
      { field: 'ReportDate', header: 'ReportDate' },
      { field: 'NbrOfHOAs', header: 'NbrOfHOAs' },
      { field: 'HOA_1_Name', header: 'HOA 1 Name' },
      { field: 'HOA_1_Type', header: 'HOA 1 Type' },
      { field: 'HOA_1_Contact_Type', header: 'HOA 1 Contact Type' },
      { field: 'HOA_1_Contact_Name', header: 'HOA 1 Contact Name' },
      { field: 'HOA_1_Address_Mailing', header: 'HOA 1 Address Mailing' },
      { field: 'HOA_1_City', header: 'HOA 1 City' },
      { field: 'HOA_1_State', header: 'HOA 1 State' },
      { field: 'HOA_1_Zip_Code', header: 'HOA 1 Zip Code' },
      { field: 'HOA_1_Contact_Phone_Type', header: 'HOA 1 Contact Phone Type' },
      { field: 'HOA_1_Contact_Phone', header: 'HOA 1 Contact Phone' },
      { field: 'HOA_1_Contact_Email', header: 'HOA 1 Contact Email' },
      { field: 'HOA_Contact_Type_2', header: 'HOA Contact Type 2' },
      { field: 'HOA_1_Management_Company_Name', header: 'HOA 1 Management Company Name' },
      { field: 'HOA_1_Management_Company_Address', header: 'HOA 1 Management Company Address' },
      { field: 'HOA_1_Mangement_Company_City', header: 'HOA 1 Mangement Company City' },
      { field: 'HOA_1_Management_Company_State', header: 'HOA 1 Management Company State' },
      { field: 'HOA_1_Management_Company_Zip_Code', header: 'HOA 1 Management Company Zip Code' },
      { field: 'HOA_1_Management_Company_Phone_Type', header: 'HOA 1 Management Company Phone Type' },
      { field: 'HOA_1_Management_Company_Phone', header: 'HOA 1 Management Company Phone' },
      { field: 'HOA_1_Management_Company_Email', header: 'HOA 1 Management Company Email' },
      { field: 'HOA_2_Name', header: 'HOA 2 Name' },
      { field: 'HOA_2_Type', header: 'HOA 2 Type' },
      { field: 'HOA_2_Contact_Type', header: 'HOA 2 Contact Type' },
      { field: 'HOA_2_Contact_Name', header: 'HOA_2_Contact_Name' },
      { field: 'HOA_2_Address_Mailing', header: 'HOA 2 Address Mailing' },
      { field: 'HOA_2_City', header: 'HOA 2 City' },
      { field: 'HOA_2_State', header: 'HOA 2 State' },
      { field: 'HOA_2_Zip_Code', header: 'HOA 2 Zip Code' },
      { field: 'HOA_2_Contact_Phone_Type', header: 'HOA 2 Contact Phone Type' },
      { field: 'HOA_2_Contact_Phone', header: 'HOA 2 Contact Phone' },
      { field: 'HOA_2_Contact_Email', header: 'HOA 2 Contact Email' },
      { field: 'HOA_2_Management_Company_Name', header: 'HOA 2 Management Company Name' },
      { field: 'HOA_2_Management_Company_Contact_Name', header: 'HOA 2 Management Company Contact Name' },
      { field: 'HOA_2_Management_Company_Address', header: 'HOA 2 Management Company Address' },
      { field: 'HOA_2_Mangement_Company_City', header: 'HOA 2 Mangement Company City' },
      { field: 'HOA_2_Management_Company_State', header: 'HOA 2 Management Company State' },
      { field: 'HOA_2_Management_Company_Zip_Code', header: 'HOA 2 Management Company Zip Code' },
      { field: 'HOA_2_Management_Company_Phone_Type', header: 'HOA 2 Management Company Phone Type' },
      { field: 'HOA_2_Management_Company_Phone', header: 'HOA 2 Management Company Phone' },
      { field: 'HOA_2_Management_Company_Email', header: 'HOA 2 Management Company Email' },
    ];
  }

  get AddressInfo() {
    return `${this.batchRow.PropertyFullStreetAddress} ${this.batchRow.PropertyCity} ${this.batchRow.PropertyState} ${this.batchRow.PropertyZip}`;
  }

  getBatchrows() {
    this.batchDetailsService
      .getBatchrows()
      .subscribe(res => this.batchRows = res);
  }

  getBatchrowDetail(): void {
    this.route.paramMap.subscribe((params) => {
      this.batchDetailsService
        .getBatchrowDetail(params.get('id'))
        .subscribe(res => {
          this.batchRow = res;
          this.interBatchRow = res;
        });
    });
  }

  setInterBatchrowDetail(id: string) {
    this.batchDetailsService
      .getBatchrowDetail(id)
      .subscribe(res => this.interBatchRow = res);
  }

  editBatchrow() {
    const merged = {
      ...this.interBatchRow,
      id: this.batchRow.id,
      APN: this.batchRow.APN,
      Ref_ID: this.batchRow.Ref_ID,
      CurrentOwner: this.batchRow.CurrentOwner,
      LandUseDesc: this.batchRow.LandUseDesc,
      YearBuilt: this.batchRow.YearBuilt,
      Subdivision: this.batchRow.Subdivision,
      LatestSale_CondoRider: this.batchRow.LatestLoan_CondoRider,
      LatestSale_PUDRider: this.batchRow.LatestLoan_PUDRider
    };
    this.batchDetailsService
      .acceptBatchrow(merged);
  }

  formatDate(date: Date) {
    return moment(date).format('MMM Do YYYY');
  }

  goBack(): void {
    this.location.back();
  }
}
