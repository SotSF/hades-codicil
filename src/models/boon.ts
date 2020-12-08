export type BoonType = {
    id: string;
    name: string;
    god: string;
    description: string;
    slot: string;
    revenge: boolean;
    legendary: boolean;
    rarityData: {
      common: string,
      rare: string,
      epic: string,
      heroic: string
    };
    prereqs: [BoonType];
}