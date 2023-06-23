import { Pipe, PipeTransform } from '@angular/core';
import { IPost } from '../intrface/post';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(arr: IPost[], filter: string): any {
    return arr.filter((post: IPost) => post.title.includes(filter)) ? arr.filter((data: IPost)=> data.title.includes(filter)) : [{ title : "not found"}];
  }

}
