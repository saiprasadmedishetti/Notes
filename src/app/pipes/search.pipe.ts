import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: any): any {
    if (!items) return [];
    if (!searchText) return items;
    return items.filter((item) =>
      (item.title || item.name).toLowerCase().includes(searchText.toLowerCase())
    );
  }
}
