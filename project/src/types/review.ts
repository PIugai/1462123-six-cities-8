type Review = {
  id: number,
  user: {
    id: number,
    name: string
    avatarUrl: string,
    isPro: boolean
  }
  date: Date,
  rating: number,
  comment: string,
};

export type {Review};
