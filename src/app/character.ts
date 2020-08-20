export interface Character {
  id?: number;
  characterName: string;
  characterClass: string;
  level: number;
  characterRace: string;
  alignment: string;
  playerName: string;
  experience: number;
  createdAt?: string;
  updatedAt?: string;
  userId: number;
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  armorClass: number;
}
