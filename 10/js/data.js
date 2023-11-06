import {getRandomArrayElement} from './util.js';

const ID = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25
  ];
  const DESC = [
    'Photo is great', 'Photo is not great'
  ];
  const LIKES = [
    15,16,17
  ];
  const IMG = [
    1,2,3,4,5,6
  ];
  const MESSAGE = [
    'Всё отлично!',
    'В целом всё неплохо. Но не всё.',
    'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
    'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
    'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
    'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
  ];
  const NAME = [
    'Ivan',
    'Artem',
    'Varvara',
    'Fedor',
    'Nicol',
    'Anna'
  ];

  const createPost = () => {

    
    return {
      id: getRandomArrayElement(ID),
      url: 'photos/'+[getRandomArrayElement(ID)]+'.jpg',
      description: getRandomArrayElement(DESC),
      likes: getRandomInteger(15,200),
      comments: Array.from({length: getRandomInteger(0, 30)}, createComments)
    };
  };
  
  const createComments = () => {
  
    return {
      
         id: getRandomArrayElement(ID),
         avatar: 'img/avatar-'+[getRandomArrayElement(IMG)]+'.svg',
         message: getRandomArrayElement(MESSAGE),
         name: getRandomArrayElement(NAME),
    }
  };
  
  const similarComments = Array.from({length: 30}, createComments);
  const similarPosts = Array.from({length: 25}, createPost);

  export {similarComments, similarPosts}
  
