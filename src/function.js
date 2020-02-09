/**
 * Function.js
 * 共用Function
 *
 * @since 0.0.1
 * @version 0.0.1
 * @author MPWEI
 * @date 2020/01/30
 */
import Vue from 'vue'

Vue.use({
    install: (_Vue) => {
        _Vue.prototype.$Function = {
            'ManageMenu': {
                'DashBoard': {
                    'Open': true,
                    'Sub': false,
                    'Path': '/dashboard'
                },
                'Theme': {
                    'Open': 'true',
                    'Sub': {
                        'ThemeCarousel': {
                            'Open': true,
                            'Path': '/theme/carousel'
                        },
                        'ThemeCustomMenu': {
                            'Open': true,
                            'Path': '/theme/menu'
                        }
                    },
                },
                'Order': {
                    'Open': true,
                    'Sub': false,
                    'Path': '/order/list'
                },
                'Product': {
                    'Open': true,
                    'Sub': {
                        'ProductList': {
                            'Open': true,
                            'Path': '/product/list'
                        },
                        'ProductAdd': {
                            'Open': true,
                            'Path': '/product/add'
                        },
                        'ProductCategory': {
                            'Open': true,
                            'Path': '/product/category'
                        },
                        'ProductAddCategory': {
                            'Open': true,
                            'Path': '/product/add_category'
                        },
                    },
                },
                'Post': {
                    'Open': true,
                    'Sub': {
                        'PostList': {
                            'Open': true,
                            'Path': '/post/list'
                        },
                        'PostAdd': {
                            'Open': true,
                            'Path': '/post/add'
                        },
                        'PostCategory': {
                            'Open': true,
                            'Path': '/post/category'
                        },
                        'PostAddCategory': {
                            'Open': true,
                            'Path': '/post/add_category'
                        },
                    },
                },
                'Member': {
                    'Open': true,
                    'Sub': {
                        'MemberList': {
                            'Open': true,
                            'Path': '/member/list'
                        },
                        'MemberAdd': {
                            'Open': true,
                            'Path': '/member/add'
                        },
                        'AdminList': {
                            'Open': true,
                            'Path': '/admin/list'
                        },
                        'AdminAdd': {
                            'Open': true,
                            'Path': '/admin/add'
                        },
                        'MemberGroup': {
                            'Open': false,
                            'Path': '/member/group'
                        },
                        'AdminGroup': {
                            'Open': false,
                            'Path': '/member/group'
                        },
                    },
                },
                'MessageCenter': {
                    'Open': true,
                    'Sub': {
                        'Customer': {
                            'Open': true,
                            'Path': '/message/customer'
                        },
                        'System': {
                            'Open': true,
                            'Path': '/message/system'
                        },
                    }
                }
            }
        }
    }
})