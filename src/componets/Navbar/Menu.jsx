import { Link, useLocation } from 'react-router-dom';
import { NavbarMenu } from '../../mockData/data';

function Menu() {
  const location = useLocation(); // Get the current route

  return (
    <div className="bg-secondary flex justify-center items-center pt-[90px]">
      {/* Menu section */}
      <div className="hidden md:block">
        <ul className="flex justify-center list-none m-0 p-0 text-third text-sm font-semibold">
          {NavbarMenu.map((item) => (
            <li key={item.id} className="relative p-3">
              <Link
                to={item.link}
                /* Active state only: shadow and border animation */
                className={`relative group uppercase no-underline tracking-wide inline-block py-3 px-5 transition-colors duration-300 ${
                  location.pathname === item.link ? 'text-third bg-primary/50 shadow-lg  rounded-md' : 'text-third'
                }`}
              >
                {item.title}
                <span className="block absolute bottom-0 left-1/2 w-0 h-0.5 bg-third transition-all duration-200 ease-out group-hover:w-full group-hover:left-0"></span>
                
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Menu;
