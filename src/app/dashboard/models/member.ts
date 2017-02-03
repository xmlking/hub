export class Member {
  totalSteps: number;
  totalVisits: number;
  currentBMI: number;
  balance: number;

  constructor(totalSteps: number, totalVisits: number, currentBMI: number, balance: number) {
    this.totalSteps = totalSteps;
    this.totalVisits = totalVisits;
    this.currentBMI = currentBMI;
    this.balance = balance;
  }

}
