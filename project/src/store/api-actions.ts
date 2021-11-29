import { ThunkActionResult } from '../types/action';
import { AuthData } from '../types/auth-data';
import { OfferResponse, Offer } from '../types/offer';
import { ReviewResponse, NewReview } from '../types/review';
import { UserResponse } from '../types/user';
import { ReviewPostStatus, APIRoute } from '../const';
import {
  adaptOfferToClient,
  adaptReviewToClient,
  adaptUserToClient
} from '../utils';
import { dropToken, saveToken } from '../services/token';
import { logIn, logOut } from '../store/auth-store/actions';
import {
  loadFavoritesOffersComplete,
  loadFavoritesOffersStart
} from '../store/favorites-store/actions';
import {
  loadNearbyOffersComplete,
  loadNearbyOffersStart
} from '../store/nearby-offers-store/actions';
import {
  loadCurrentOfferComplete,
  loadCurrentOfferStart,
  loadCurrentOfferError
} from '../store/offer-store/actions';
import {
  loadOffersComplete,
  loadOffersStart,
  updateOffers
} from '../store/offers-store/actions';
import {
  loadReviewsComplete,
  loadReviewsStart,
  setReviewPostStatus
} from '../store/reviews-store/actions';

export const fetchOffersAction = (): ThunkActionResult => (
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadOffersStart());
    const { data } = await api.get<OfferResponse[]>(APIRoute.Offers);
    const normalizedOffers = data.map((offer) => (
      adaptOfferToClient(offer)
    ));
    dispatch(loadOffersComplete(normalizedOffers));
  }
);

export const fetchCurrentOfferAction = (offerId: string): ThunkActionResult => (
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadCurrentOfferStart());
    try {
      const { data } = await api.get<OfferResponse>(
        `${APIRoute.Offers}/${offerId}`,
      );
      const normalizedOffer = adaptOfferToClient(data);
      dispatch(loadCurrentOfferComplete(normalizedOffer));
    } catch {
      dispatch(loadCurrentOfferError());
    }
  }
);

export const fetchNearbyOffersAction = (offerId: string): ThunkActionResult => (
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadNearbyOffersStart());
    const { data } = await api.get<OfferResponse[]>(
      `${APIRoute.Offers}/${offerId}/nearby`,
    );
    const normalizedNearbyOffers = data.map((offer) => (
      adaptOfferToClient(offer)
    ));
    dispatch(loadNearbyOffersComplete(normalizedNearbyOffers));
  }
);

export const fetchReviewsAction = (offerId: string): ThunkActionResult => (
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadReviewsStart());
    const { data } = await api.get<ReviewResponse[]>(
      `${APIRoute.Reviews}/${offerId}`,
    );
    const normalizedReviews = data.map((review) => (
      adaptReviewToClient(review)
    ));
    dispatch(loadReviewsComplete(normalizedReviews));
  }
);

export const changeFavoriteStatusAction = (
  offerId: number,
  isFavorite: boolean,
  onComplete?: (updatedOffer: Offer) => void,
): ThunkActionResult => (

  async (dispatch, _getStore, api): Promise<void> => {
    const { data } = await api.post<OfferResponse>(
      `${APIRoute.FavoritesOffers}/${offerId}/${Number(!isFavorite)}`,
    );
    const normalizedOffer = adaptOfferToClient(data);

    dispatch(updateOffers(normalizedOffer));
    onComplete && onComplete(normalizedOffer);
  }
);

export const fetchFavoritesOffersAction = (): ThunkActionResult => (
  async (dispatch, _getStore, api): Promise<void> => {
    dispatch(loadFavoritesOffersStart());
    const { data } = await api.get<OfferResponse[]>(`${APIRoute.FavoritesOffers}`);
    const normalizedOffers = data.map((favoriteOffer) => (
      adaptOfferToClient(favoriteOffer)),
    );
    dispatch(loadFavoritesOffersComplete(normalizedOffers));
  }
);

export const postReviewAction = (
  { comment, rating }: NewReview,
  offerId: string,
): ThunkActionResult => (
  async (dispatch, _getStore, api) => {
    dispatch(setReviewPostStatus(ReviewPostStatus.Posting));

    try {
      const { data } = await api.post<ReviewResponse[]>(
        `${APIRoute.Reviews}/${offerId}`,
        { comment, rating },
      );
      const normalizedReviews = data.map((review) => (
        adaptReviewToClient(review)
      ));
      dispatch(loadReviewsComplete(normalizedReviews));
      dispatch(setReviewPostStatus(ReviewPostStatus.Posted));
    }
    catch {
      dispatch(setReviewPostStatus(ReviewPostStatus.NotPosted));
    }
  }
);

export const checkAuthAction = (): ThunkActionResult => (
  async (dispatch, _getStore, api) => {
    const { data } = await api.get<UserResponse>(APIRoute.LogIn);
    dispatch(logIn(adaptUserToClient(data)));
  }
);

export const logInAction = (
  { login: email, password }: AuthData,
): ThunkActionResult => (
  async (dispatch, _getStore, api) => {
    const { data } = await api.post<UserResponse>(APIRoute.LogIn, {
      email,
      password,
    });
    saveToken(data.token);
    dispatch(logIn(adaptUserToClient(data)));
  }
);

export const logOutAction = (): ThunkActionResult => (
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.LogOut);
    dropToken();
    dispatch(logOut());
  }
);
