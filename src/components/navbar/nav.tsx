
import '../../styles/nav.scss'

export const Nav = () => {
  return <div className="nav-bar w-100% p-7 flex items-center justify-between">
    <div className="logo flex align-center gap-1">
      <img src="/logo.svg" alt='logo' />
      <span> Lamadmin</span> </div>
    <div className="icons flex align-center gap-5">
      <img src="/search.svg" alt="search image" className="icon" />
      <img src="/app.svg" alt="app image" className="icon" />
      <img src="/expand.svg" alt="expand image" className="icon" />
      <div className="notification relative flex align-center">
        <img src="/notifications.svg" alt="notification image w-100% h-100%" />
        <span className="absolute right-[-10px] top-[-10px] bg-red-700 text-white w-5 h-5 
        text-center rounded-full flex justify-center items-center z-1 text-sm " >1</span>
      </div>
      <div className="user flex items-center gap-1">
        <img className="rounded-full object-cover w-7 h-7"
          src="https://images.pexels.com/photos/11038549/pexels-photo-11038549.jpeg?auto=compress&cs=tinys"
          alt="image"
        />
        <span>Jane</span>
      </div>
      <img src="/settings.svg" alt="settings image" className="icon" />
    </div>
  </div>
};
