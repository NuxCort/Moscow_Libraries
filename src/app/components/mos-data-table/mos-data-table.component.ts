import { CommonModule } from '@angular/common';
import { Component, inject, OnDestroy, OnInit, ViewEncapsulation  } from '@angular/core';
import { FormsModule  } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { LoadMosData, SelectLibrary } from '../../store/actions/mos-data.actions';
import { CategoryIds, MosDataCellsModel } from '../../models/mos-data.model';
import { selectAllMosData } from '../../store';
import { Router } from '@angular/router';
import { SpinnerComponent } from '../spinner/spinner/spinner.component';

@Component({
  selector: 'app-mos-data-table',
  imports: [ CommonModule, FormsModule, SpinnerComponent],
  templateUrl: './mos-data-table.component.html',
  styleUrl: './mos-data-table.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class MosDataTableComponent implements OnInit, OnDestroy {

  public query: string = "";
  public mosData: Array<MosDataCellsModel> = new Array<MosDataCellsModel>();
  public hoveredRow: number | null = null;
  public loading: boolean = false;

  private readonly store: Store = inject(Store);
  private readonly router: Router = inject(Router);
  private readonly destroy$: Subject<void> = new Subject<void>();

  public ngOnInit(): void {
    this.store.select(selectAllMosData).pipe(
      takeUntil(this.destroy$)
    ).subscribe((mosData: Array<MosDataCellsModel>) => {
      if (mosData) {
        this.loading = false;
        this.mosData = mosData;
      }
    })
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  public ensureMosDataLibrariesTable(): void {
    if (this.query) {
      this.store.dispatch(new LoadMosData({categoryId: CategoryIds.Libraries, query: this.query}));
      this.loading = true;
    }
  }

  public highlightText(text: string): string {
    if (!this.query || !text) {
        return text;
    }

    const regex = new RegExp(this.query, 'gi');
    return text.replace(regex, match => `<span class="highlight">${match}</span>`);
  }

  public goToDetailPage(id: number) {
    this.store.dispatch(new SelectLibrary({id}));
    this.router.navigate(['/mos-data-details', id]);
  }
}
