export class AttributeSet {

  private maxHealth: number;
  private intelligence: number;
  private strength: number;
  private agility: number;
  private endurance: number;
  private luck: number;

  constructor(maxHealth: number,
              intelligence: number,
              strength: number,
              agility: number,
              endurance: number,
              luck: number) {
      this.maxHealth = maxHealth;
      this.intelligence = intelligence;
      this.strength = strength;
      this.agility = agility;
      this.endurance = endurance;
      this.luck = luck;
  }

  public getMaxHealth() : number {
      return this.maxHealth;
  }

  public setMaxHealth(maxHealth: number) {
      this.maxHealth = maxHealth;
  }

  public getIntelligence(): number {
      return this.intelligence;
  }

  public setIntelligence(intelligence: number) {
      this.intelligence = intelligence;
  }

  public getStrength(): number {
      return this.strength;
  }

  public setStrength(strength: number) {
      this.strength = strength;
  }

  public getAgility(): number {
      return this.agility;
  }

  public setAgility(agility: number) {
      this.agility = agility;
  }

  public getEndurance(): number {
      return this.endurance;
  }

  public setEndurance(endurance: number) {
      this.endurance = endurance;
  }

  public getLuck(): number {
      return this.luck;
  }

  public setLuck(luck: number) {
      this.luck = luck;
  }

}
