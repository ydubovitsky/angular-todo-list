import {CategoryDao} from '../CategoryDao';
import {Category} from '../../model/Category';
import {Observable} from 'rxjs';

export class CategoryDaoImpl implements CategoryDao {

  add(T): Category {
    return undefined;
  }

  delete(id: number): void {
  }

  get(id: number): Category {
    return undefined;
  }

  getAll(): Category[] {
    return [];
  }

  search(title: string): Observable<Category[]> {
    return undefined;
  }

  update(T): Category {
    return undefined;
  }

}
