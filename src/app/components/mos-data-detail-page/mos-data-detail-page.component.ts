import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { selectLibrary } from '../../store';
import { MosDataModel } from '../../models/mos-data.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mos-data-detail-page',
  imports: [CommonModule],
  templateUrl: './mos-data-detail-page.component.html',
  styleUrl: './mos-data-detail-page.component.scss'
})
export class MosDataDetailPageComponent implements OnInit, OnDestroy {
  public library: MosDataModel | null = null;

  private readonly store: Store = inject(Store);
  private readonly router: Router = inject(Router);
  private readonly destroy$: Subject<void> = new Subject<void>();

    public ngOnInit(): void {
      this.store.select(selectLibrary).pipe(
        takeUntil(this.destroy$)
      ).subscribe(library => {
        this.library = library[0].Cells;
      })
    }

    public ngOnDestroy(): void {
      this.destroy$.next();
      this.destroy$.complete();
    }

}
