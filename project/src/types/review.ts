type Review = {
  id: number,
  user: {
    id: number,
    name: string
    avatarUrl: string,
    isPro: boolean
  }
  date: string,
  rating: number,
  comment: string,
};

type ReviewResponse = Omit<Review, 'user'> & {
  user: {
    'id': number,
    'is_pro': boolean,
    'name': string,
    'avatar_url': string,
  }
}

export type { Review, ReviewResponse };
