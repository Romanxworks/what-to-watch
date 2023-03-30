import {Review} from '../types/review';

export const reviews: Review[] = [
  {
    id: 1,
    comment: 'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed films in years.',
    date: 'Thu Mar 30 2023',
    rating: 6,
    user: {
      id: 1,
      name: 'Kate Muir',
      email: 'string@mail.ru',
      avatarUrl: 'img/avatar.img',
    }
  },
  {
    id: 2,
    comment: 'Anderson\'s films are too precious for some, but for those of us willing to lose ourselves in them, they\'re a delight. "The Grand Budapest Hotel" is no different, except that he has added a hint of gravitas to the mix, improving the recipe',
    date: 'Thu Mar 30 2021',
    rating: 10,
    user: {
      id: 3,
      name: 'Matthew Lickona',
      email: 'alone@mail.ru',
      avatarUrl: 'img/avatar.img',
    }
  },
  {
    id: 3,
    comment: 'It is certainly a magical and childlike way of storytelling, even if the content is a little more adult',
    date: 'Thu Mar 30 2022',
    rating: 7,
    user: {
      id: 2,
      name: 'Paula Fleri-Soler',
      email: 'test@mail.ru',
      avatarUrl: 'img/avatar.img',
    }
  }
];
