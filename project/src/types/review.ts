type Review = {
  id: number,
  user: {
    id: number,
    name: string
    avatarUrl: string,
  }
  date: Date,
  rating: number,
  comment: string,
};

export type {Review};
