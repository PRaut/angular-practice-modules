import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipe implements PipeTransform {
  transform(value: string): any {
    // return this.reverseString(value);
    return value.split("").reverse().join("");
  }

  reverseString(str: string) {
    const splittedString = str.split("");
    const reversedSplittedArray: string[] = splittedString.reverse();
    const reverseResult = reversedSplittedArray.join("");
    return reverseResult;
  }
}
