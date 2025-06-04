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
      { link: '/about', title: 'Về "Nảy Mầm"' },
      { link: '/team', title: 'Về Chúng Tôi' },
      { link: '/faq', title: 'Câu Hỏi Thường Gặp' },
      { link: '/privacy-policy', title: 'Chính sách bảo mật' },
      
    ]
  },
  {id:4,
    link: '/blog',
    title: 'Bài viết',
  },
  {id:5,
    link: '/contact',
    title: 'Liên hệ',
  },
]

export default nav_menus_list;