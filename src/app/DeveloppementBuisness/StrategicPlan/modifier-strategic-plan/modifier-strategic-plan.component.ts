import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {StrategicPlanService} from "../../../Services/DeveloppementBuisness/strategic-plan.service";

@Component({
  selector: 'app-modifier-strategic-plan',
  templateUrl: './modifier-strategic-plan.component.html',
  styleUrls: ['./modifier-strategic-plan.component.css']
})
export class ModifierStrategicPlanComponent implements OnInit{
  strategicPlanDetails: any='';
  idStrategicPlan: any;
  ngOnInit(): void {
    this.aR.params.subscribe(params => {
      this.idStrategicPlan = +params['id'];
      this.strategicPlanService.afficherStrategicPlanParId(this.idStrategicPlan).subscribe(planStrategic => {
        this.strategicPlanDetails = planStrategic;
      });
    });
  }
  constructor(private aR:ActivatedRoute,private strategicPlanService:StrategicPlanService,private route:Router) {

  }
  modifierPlanStrategic(data:any){
    return this.strategicPlanService.modifierStrategicPlan(this.idStrategicPlan,data).subscribe(()=>this.route.navigate(['/listestrategicplan']));
  }
}
