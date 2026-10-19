import {Component, inject, signal} from '@angular/core';
import {MatDialogActions, MatDialogClose, MatDialogContent} from '@angular/material/dialog';
import {MatStep, MatStepLabel, MatStepper} from '@angular/material/stepper';
import {LeagueSessionService} from '../../../service/league-session-service';
import {LeagueService} from '../../../service/league-service';
import {map} from 'rxjs';
import {MatButton} from '@angular/material/button';
import {MatOption} from '@angular/material/core';
import {MatFormField, MatLabel, MatSelect} from '@angular/material/select';
import {AsyncPipe} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {VehicleService} from '../../../service/vehicle-service';
import {CarDTO} from '../../../dtos/car-dto';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  imports: [
    MatDialogContent,
    MatStepper,
    MatStep,
    MatStepLabel,
    MatDialogActions,
    MatButton,
    MatOption,
    MatSelect,
    AsyncPipe,
    FormsModule,
    MatFormField,
    MatLabel,
    MatDialogClose
  ],
  selector: 'app-choose-entry-component',
  styleUrl: './choose-entry-component.scss',
  templateUrl: './choose-entry-component.html',
})
export class ChooseEntryComponent {
  private readonly sService = inject(LeagueSessionService);
  private readonly carService = inject(VehicleService);
  private readonly leagueService = inject(LeagueService);
  protected readonly racingClasses = this.leagueService.GetLeague(this.sService.currentLeagueId()).pipe(map(x=>x.currentClassIds));
  protected readonly snackbar = inject(MatSnackBar)

  selectedClass = '';
  selectedCar = '';


  private carRequest(classId: string) {
    return this.carService
      .GetVehicleByClass(classId)
      .pipe(map(x => {
        console.log(this.selectedClass)
        if ('length' in x) {
          return x;
        }
        this.snackbar.open("an error has occurred, try again later", "OK", {duration: 2000});
        return [] as CarDTO[]
      }))
  }


  protected readonly cars = signal(this.carRequest(this.selectedClass));

  UpdateRequest() {
    this.cars.update(()=>this.carRequest(this.selectedClass))
  }
}
