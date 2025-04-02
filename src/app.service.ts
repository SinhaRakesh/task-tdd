import { Injectable, Param } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getSum(numbers: string): number {
    numbers = numbers.trim(); // Remove unwanted spaces

    if (!numbers || numbers === '' || numbers === '""') return 0; // Handle both empty cases

    let delimiter = /,|\n/; // Default delimiters: comma and new line

    // Handle custom delimiter case
    if (numbers.startsWith('//')) {
      const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
      // output of customDelimiterMatch [ '//;\n', ';', index: 0, input: '//;\n1;2', groups: undefined ]
      // console.log('match found ', customDelimiterMatch);
      if (customDelimiterMatch) {
        delimiter = new RegExp(customDelimiterMatch[1]); // Set custom delimiter
        numbers = numbers.substring(customDelimiterMatch[0].length); // remove custom delimiter part
      }
    }

    console.log('numbers', numbers);
    const numArray = numbers
      .split(delimiter)
      .map((n) => n.trim()) // Remove any whitespace
      .filter((n) => {
        console.log('filter', n);
        return !isNaN(Number(n));
      }) // Keep only valid numbers
      .map(Number); // Convert to numbers

    console.log(numArray);
    if (numArray.length == 0) return 0;

    const negatives = numArray.filter((n) => n < 0);
    if (negatives.length)
      throw new Error(`Negative numbers not allowed: ${negatives.join(',')}`);

    return numArray.reduce((sum, num) => sum + num, 0);
  }
}
