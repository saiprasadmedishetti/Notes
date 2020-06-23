import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "search",
})
export class SearchPipe implements PipeTransform {
  transform(items: any[], searchText: any): any {
    if (!items) return [];
    if (!searchText) return items;
    // return items.filter((item) =>
    //   (item.title || item.name).toLowerCase().includes(searchText.toLowerCase())
    // );
    return items
      ? items.filter(
          (item) =>
            (item.name || "").search(new RegExp(searchText, "i")) > -1 ||
            (item.description || "").search(new RegExp(searchText, "i")) > -1
        )
      : [];
  }
}
