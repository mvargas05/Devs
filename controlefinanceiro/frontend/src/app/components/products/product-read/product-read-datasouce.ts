import { Product } from './../product.model';
import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';



// TODO: replace this with real data from your application
const EXAMPLE_DATA: Product[] = [
  {id: 1, name: 'Hydrogen', price: 1.00794, category: 'Nonmetal'},
  {id: 2, name: 'Helium', price: 4.002602, category: 'Noble gas'},
  {id: 3, name: 'Lithium', price: 6.941, category: 'Alkali metal'},
  {id: 4, name: 'Beryllium', price: 9.012182, category: 'Alkaline earth metal'},
  {id: 5, name: 'Boron', price: 10.811, category: 'Metalloid'},
  {id: 6, name: 'Carbon', price: 12.0107, category: 'Nonmetal'},
  {id: 7, name: 'Nitrogen', price: 14.0067, category: 'Nonmetal'},
  {id: 8, name: 'Oxygen', price: 15.999, category: 'Nonmetal'},
  {id: 9, name: 'Fluorine', price: 18.9984032, category: 'Nonmetal'},
  {id: 10, name: 'Neon', price: 20.1797, category: 'Noble gas'},
  {id: 11, name: 'Sodium', price: 22.98976928, category: 'Alkali metal'},
  {id: 12, name: 'Magnesium', price: 24.305, category: 'Alkaline earth metal'},
  {id: 13, name: 'Aluminum', price: 26.9815385, category: 'Post-transition metal'},
  {id: 14, name: 'Silicon', price: 28.0855, category: 'Metalloid'},
  {id: 15, name: 'Phosphorus', price: 30.973761998, category: 'Nonmetal'},
  {id: 16, name: 'Sulfur', price: 32.06, category: 'Nonmetal'},
  {id: 17, name: 'Chlorine', price: 35.45, category: 'Nonmetal'},
  {id: 18, name: 'Argon', price: 39.948, category: 'Noble gas'},
  {id: 19, name: 'Potassium', price: 39.0983, category: 'Alkali metal'},
  {id: 20, name: 'Calcium', price: 40.078, category: 'Alkaline earth metal'},
];

/**
 * Data source for the ProductRead2 view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ProductReadDataSource extends DataSource<Product> {
  data: Product[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<Product[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: Product[]): Product[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: Product[]): Product[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id!, +b.id!, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
