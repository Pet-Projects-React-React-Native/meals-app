export default interface IMeal {
  readonly id: string;
  readonly categoryIds: string[];
  readonly title: string;
  readonly imageUrl: string;
  readonly ingredients: string[];
  readonly steps: string[];
  readonly duration: number;
  readonly complexity: string;
  readonly affordability: string;
  readonly isGlutenFree: boolean;
  readonly isVegan: boolean;
  readonly isVegetarian: boolean;
  readonly isLactoseFree: boolean;
}
