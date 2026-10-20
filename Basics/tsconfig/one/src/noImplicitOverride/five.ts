abstract class BaseQuoteService {
  abstract calculatePremium(): number;
  abstract f1(): void;
  //   abstract f22(): void;
  abstract f2(): void; // rename f22 => f2

  //   abstract f33(): void;
  abstract f3(): void; // rename f33 => f3

  getQuoteType(): string {
    return 'standard';
  }

  validateQuote(): boolean {
    return true;
  }
}

class ComprehensiveQuoteService extends BaseQuoteService {
  calculatePremium(): number {
    return 15000;
  }

  override f1(): void {}
  override f22(): void {} // CT because we used override

  f33(): void {} // No CT because we don't used override

  getQuoteType(): string {
    return 'comprehensive';
  }
}

export {};
