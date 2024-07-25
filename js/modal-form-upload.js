import { isEscapeKey } from './util';

const imgUploadInput = document.querySelector('.img-upload__input');
const imgUploadOverlay = document.querySelector('.img-upload__overlay');
const buttonCloseForm = document.querySelector('.img-upload__cancel');
const hashtagInput = document.querySelector('.text__hashtags');
const commentInput = document.querySelector('.text__description');


const isElementFocused = () =>
  document.activeElement === hashtagInput ||
  document.activeElement === commentInput;

const onDocumenentKeydown = (evt) => {
  if (isEscapeKey && !isElementFocused()) {
    evt.preventDefault();
    closeModalForm();
  }
};

const openModalForm = () => {
  imgUploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumenentKeydown);
  hashtagInput.value = '';
  commentInput.value = '';
};

function closeModalForm () {
  imgUploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumenentKeydown);
}

imgUploadInput.addEventListener('change', () => {
  openModalForm();
});

buttonCloseForm.addEventListener('click', () => {
  closeModalForm();
});


