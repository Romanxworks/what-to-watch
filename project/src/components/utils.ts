import { AuthStatus } from '../const';

export function getScoreDesc(rating: number): string{
  if(rating <= 3){
    return 'Bad';
  }
  if(rating > 3 && rating <= 5){
    return 'Normal';
  }
  if(rating > 5 && rating <= 8){
    return 'Good';
  }
  if(rating > 8 && rating < 10){
    return 'Very good';
  }
  if(rating === 10){
    return 'Awesome';
  }
  return '';
}

export const isCheckedAuth = (authStatus: AuthStatus): boolean => authStatus === AuthStatus.Unknown;
