import { Injectable } from '@angular/core';
import { HttpResponse } from '@angular/common/http';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { UserRouteAccessService } from 'app/core/auth/user-route-access-service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Book } from 'app/shared/model/book.model';
import { BookService } from './book.service';
import { BookComponent } from './book.component';
import { BookDetailComponent } from './book-detail.component';
import { BookUpdateComponent } from './book-update.component';
import { BookDeletePopupComponent } from './book-delete-dialog.component';
import { IBook } from 'app/shared/model/book.model';

@Injectable({ providedIn: 'root' })
export class BookResolve implements Resolve<IBook> {
  constructor(private service: BookService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IBook> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id).pipe(map((book: HttpResponse<Book>) => book.body));
    }
    return of(new Book());
  }
}

export const bookRoute: Routes = [
  {
    path: '',
    component: BookComponent,
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'filteringApp.book.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/view',
    component: BookDetailComponent,
    resolve: {
      book: BookResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'filteringApp.book.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: 'new',
    component: BookUpdateComponent,
    resolve: {
      book: BookResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'filteringApp.book.home.title'
    },
    canActivate: [UserRouteAccessService]
  },
  {
    path: ':id/edit',
    component: BookUpdateComponent,
    resolve: {
      book: BookResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'filteringApp.book.home.title'
    },
    canActivate: [UserRouteAccessService]
  }
];

export const bookPopupRoute: Routes = [
  {
    path: ':id/delete',
    component: BookDeletePopupComponent,
    resolve: {
      book: BookResolve
    },
    data: {
      authorities: ['ROLE_USER'],
      pageTitle: 'filteringApp.book.home.title'
    },
    canActivate: [UserRouteAccessService],
    outlet: 'popup'
  }
];
