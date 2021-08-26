import theme from './theme';
import '../sass/main.scss';
import dishes from './menu.json';
import menuItemsTemplate from '../template/menu.hbs';

const refs = {
  menuList: document.querySelector('.js-menu'),
};

refs.menuList.innerHTML = menuItemsTemplate(dishes);
