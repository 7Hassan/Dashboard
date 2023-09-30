import '../../styles/menu.scss';
import { Link } from 'react-router-dom';
import { menu } from '../data/data';
export const Menu = () => {
  return <div className="menu">
    {menu.map(item => {
      return <div className="item" key={item.id}>
        <span className="title" >{item.title}</span>
        {
          item.listItems.map(list => {
            return <Link className="list-item" to={list.url} key={list.id}>
              <img src={list.icon} alt="image" className="max-w-none" />
              <span className="listItemTitle">{list.title}</span>
            </Link>
          })
        }
      </div>
    })}
  </div>

};