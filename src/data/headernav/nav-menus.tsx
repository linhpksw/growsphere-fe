import { NavMenuItem } from "@/interFace/interFace";

const nav_menus_list:NavMenuItem[] = [
  {id:1,
    link: '/',
    title: 'Home',
    // hasDropdown: true,
    megamenu: false,
    // dropdownItems: [
    //   { link: '/', title: 'Home Style 01' },
    //   { link: '/home-two', title: 'Home Style 02' },
    //   { link: '/home-three', title: 'Home Style 03' },
    // ]
  },
  {id:2,
    link: '/shop',
    title: 'Shop',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/shop', title: 'Shop' },
      { link: '/wishlist', title: 'Danh sách yêu thích' },
      { link: '/cart', title: 'Giỏ hàng' },
      { link: '/checkout', title: 'Thanh toán' },
    ]
  },
  {
    id:3,
    link: '/shop',
    title: 'Pages',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/about', title: 'About' },
      { link: '/team', title: 'Team' },
      { link: '/register', title: 'Đăng kí' },
      { link: '/login', title: 'Đăng nhập' },
      // { link: '/faq', title: 'FAQ' },
      // { link: '/privacy-policy', title: 'Privacy Policy' },
      
    ]
  },

  {id:5,
    link: '/contact',
    title: 'Liên hệ',
  },
]

export default nav_menus_list;