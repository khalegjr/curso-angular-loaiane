import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EMPTY, Observable, Subject, catchError } from 'rxjs';
import { AlertModalService } from 'src/app/shared/alert-modal.service';
import { Curso } from '../curso';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
})
export class CursosListaComponent implements OnInit {
  cursos!: Curso[];
  cursos$!: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private service: CursosService,
    private modalService: NgbModal,
    private alertService: AlertModalService
  ) {}

  ngOnInit(): void {
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.service.list().pipe(
      catchError((error) => {
        console.error(error);
        this.error$.next(true);
        this.handleError();
        return EMPTY;
      })
    );

    /** outra forma de capturar um erro, com subscribe */
    // this.service.list().subscribe(
    //   (dados) => {
    //     console.log(dados);
    //   },
    //   (error) => console.error(error),
    //   () => console.log('Obaservable completo!')
    // );
  }

  handleError() {
    // const modalRef = this.modalService.open(AlertModalComponent);
    // modalRef.componentInstance.message =
    //   'Erro ao carregar cursos. Tente novamente mais tarde';
    // modalRef.componentInstance.type = 'danger';

    this.alertService.showAlertDanger(
      'Erro ao carregar cursos. Tente novamente mais tarde'
    );
  }
}
