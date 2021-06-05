import './styles.scss';
import { FormSearch } from './Component/FormSearch';
import { GalleryList } from './Component/GalleryList';
import { LoadMoreBtn } from './Component/LoadMoreBtn';
import { createStore } from './store/createStrore';
import {Alert} from './Component/Alert';

window.store = createStore()


export const root = document.querySelector('#root')

FormSearch(root)

export const render = () => {
  if(window.store.total === 0){
    Alert(root)
    return
  }
  GalleryList(root)
  LoadMoreBtn(root)
}







