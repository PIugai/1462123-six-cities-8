enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer',
}

enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

const enum APIRoute {
  Offers = '/hotels',
  LogIn = '/login',
  LogOut = '/logout',
  Reviews = '/comments',
}

enum CitiesNames {
  Paris = 'Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

enum SortOption {
  Popular = 'Popular',
  PriceLowToHigh = 'Price: low to high',
  PriceHighToLow = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

enum ReviewPostStatus {
  Pristine = 'PRISTINE',
  Posting = 'POSTING',
  Posted = 'POSTED',
  NotPosted = 'NOT_POSTED',
}

export {AppRoute, AuthStatus, CitiesNames, SortOption, APIRoute, ReviewPostStatus};
