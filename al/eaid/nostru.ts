interface FinancialDetails {
  passiveIncome: number;
}

class FinanceManager {
  private financialDetails: FinancialDetails;

  constructor() {
    this.financialDetails = {
      passiveIncome: 50, // Initial passive income
    };
  }

  // Function to update passive income
  public updatePassiveIncome(newIncome: number): void {
    this.financialDetails.passiveIncome = newIncome;
  }

  // Function to retrieve current passive income
  public getPassiveIncome(): number {
    return this.financialDetails.passiveIncome;
  }
}

// Usage
const financeManager = new FinanceManager();
console.log(`Initial Passive Income: ${financeManager.getPassiveIncome()} USD`);
financeManager.updatePassiveIncome(100);
console.log(`Updated Passive Income: ${financeManager.getPassiveIncome()} USD`);
