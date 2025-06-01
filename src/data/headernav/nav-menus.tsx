import { NavMenuItem } from "@/interFace/interFace";

const nav_menus_list:NavMenuItem[] = [
  {id:1,
    link: '/',
    title: 'Trang chủ',
    megamenu: false,
  },
  {id:2,
    link: '/shop',
    title: 'Mua sắm',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/shop', title: 'Cửa hàng' },
      { link: '/wishlist', title: 'Danh sách yêu thích' },
      { link: '/cart', title: 'Giỏ hàng' },
      { link: '/checkout', title: 'Thanh toán' },
    ]
  },
  {
    id:3,
    link: '/shop',
    title: 'Trang',
    hasDropdown: true,
    megamenu: false,
    dropdownItems: [
      { link: '/about', title: 'Về chúng tôi' },
      { link: '/team', title: 'Đội' },
      { link: '/register', title: 'Đăng ký' },
      { link: '/login', title: 'Đăng nhập' },
      { link: '/faq', title: 'FAQ' },
      { link: '/privacy-policy', title: 'Chính sách bảo mật' },
      
    ]
  },
  {id:4,
    link: '/blog',
    title: 'Blog',
  },
  {id:5,
    link: '/contact',
    title: 'Liên lạc',
  },
]

export default nav_menus_list;